// src/lib/utils/customMarkdownParser.ts
import { marked } from 'marked';

export function parseReTypeMarkdown(markdown: string): string {
    const renderer = new marked.Renderer();

    // Custom rendering for ReType-specific elements
    renderer.link = (href, title, text) => {
        const titleAttr = title ? ` title="${title}"` : '';
        return `<a href="${href}"${titleAttr} target="_blank" rel="noopener noreferrer">${text}</a>`;
    };

    renderer.image = (href, title, text) => {
        const titleAttr = title ? ` title="${title}"` : '';
        return `<img src="${href}" alt="${text}"${titleAttr} class="retype-image">`;
    };

    // Add more custom renderers as needed for ReType-specific elements

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        breaks: true,
        sanitize: false,
        smartypants: false,
        xhtml: false
    });

    return marked(markdown);
}