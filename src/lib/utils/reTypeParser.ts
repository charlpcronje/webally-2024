// src/lib/utils/reTypeParser.ts
import { marked } from 'marked';
marked.setOptions({
    mangle: false
});
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

    renderer.heading = (text, level) => {
        const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
        return `
            <h${level} id="${escapedText}">
                <a class="heading-link" href="#${escapedText}">
                    <i class="fas fa-link"></i>
                </a>
                ${text}
            </h${level}>`;
    };

    // Handle ReType-specific syntax
    const reTypeExtensions = {
        admonition: /^!!!(info|tip|note|caution|danger)\s+(.+)$/gm,
        tabs: /^===(.*?)===$/gm,
        tabItem: /^- (?:title: )(.+)$/gm,
        expandable: /^\+\+\+(.+)\+\+\+$/gm,
        badge: /^\[!badge\s+(.*?)\]$/gm,
        embed: /^\[!embed\s+(.*?)\]$/gm
    };

    markdown = markdown
        .replace(reTypeExtensions.admonition, (match, type, content) =>
            `<div class="admonition ${type.toLowerCase()}">${content}</div>`)
        .replace(reTypeExtensions.tabs, '<div class="retype-tabs">$1</div>')
        .replace(reTypeExtensions.tabItem, '<div class="tab-item" data-title="$1">')
        .replace(reTypeExtensions.expandable, '<details><summary>$1</summary>')
        .replace(reTypeExtensions.badge, '<span class="badge">$1</span>')
        .replace(reTypeExtensions.embed, '<div class="embed-container">$1</div>');

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