import { items } from '$lib/data/services';
import type { Service } from '$lib/types';
import { error } from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';

export async function load({ params }) {
    const { slug } = params;
    console.log('slug',slug);
    const service = items.find(item => item.slug === slug);
    if (!service) {
        throw error(404, 'Service not found');
    }

    try {
        const filePath = path.join(process.cwd(), 'static', 'content', 'services', `${slug}.md`);
        const content = await fs.readFile(filePath, 'utf-8');
        return { service, content };
    } catch (e) {
        console.error(`Error loading markdown for ${slug}:`, e);
        return { service, content: null, error: e };
    }
}