// src/routes/services/+page.server.ts
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs/promises';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { categories } from '$lib/data/services';
import { dev } from '$app/environment';

const execAsync = promisify(exec);

export const load: PageServerLoad = async ({ url }) => {
    const search = url.searchParams.get('item') || '';
    
    const projectRoot = dev ? process.cwd() : path.resolve(__dirname, '../..');
    const scriptPath = path.join(projectRoot, 'scripts', 'image_overlay.py');

    try {
        await fs.access(scriptPath);
        console.log('Script found at:', scriptPath);

        for (const category of categories) {
            for (const service of category.services) {
                const relativeImagePath = path.relative(projectRoot, service.image);
                try {
                    await execAsync(`python3 ${scriptPath} ${relativeImagePath} ${service.color}`);
                    console.log(`Processed image: ${relativeImagePath} with color ${service.color}`);
                    
                    // Update the service.image path to point to the processed image
                    service.image = service.image.replace('.png', '_processed.png');
                } catch (err) {
                    console.error(`Error processing image ${relativeImagePath}:`, err);
                }
            }
        }
    } catch (err) {
        console.error('Error accessing script or processing images:', err);
    }

    const filteredCategories = categories.map(category => ({
        ...category,
        services: category.services.filter(service =>
            search.trim().length === 0 || 
            service.name.toLowerCase().includes(search.toLowerCase()) ||
            category.name.toLowerCase().includes(search.toLowerCase())
        )
    })).filter(category => category.services.length > 0);

    return {
        categories: filteredCategories
    };
};