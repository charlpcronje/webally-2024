// +page.server.js
import { items } from '$lib/data/services';
import type { Service } from '$lib/types';
import { error } from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
marked.setOptions({
    mangle: false
});

export async function load({ params }) {
    const { slug } = params;
    console.log('slug:', slug);

    // Find the service based on the slug
    const service = items.find(item => item.slug === slug);
    if (!service) {
        // If service is not found, throw a 404 error
        throw error(404, 'Service not found');
    }

    // Try reading the markdown file from the file system
    try {
        const filePath = path.join(process.cwd(), 'static', 'content', 'services', `${slug}.md`);
        const fileContents = await fs.readFile(filePath, 'utf-8');
        
        // Parse the front matter and content
        const { data: frontmatter, content } = matter(fileContents);

        // Replace the "[Back to Services]" link with a custom placeholder
        const modifiedContent = content.replace(/\[Back to Services\]\(\/services#service\d+\)/g, '{{BACK_TO_SERVICES_BUTTON}}');
        
        // Parse the modified Markdown content
        const parsedContent = marked(modifiedContent);

        return { 
            service, 
            content: parsedContent,
            frontmatter
        };
    } catch (e) {
        // Handle file read error, e.g. if the markdown file does not exist
        console.error(`Error loading markdown for ${slug}:`, e);
        return { service, content: null, frontmatter: null, error: e };
    }
}
