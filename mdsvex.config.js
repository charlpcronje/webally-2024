import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkFrontmatter from 'remark-frontmatter';
import remarkExtractFrontmatter from 'remark-extract-frontmatter';
import yaml from 'yaml';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');
const config = defineConfig({
    extensions: ['.md', '.svx'],
    smartypants: {
        dashes: 'oldschool'
    },
    remarkPlugins: [
        remarkGfm,
        remarkFrontmatter,
        [remarkExtractFrontmatter, { name: 'frontmatter', yaml: yaml.parse, throw: true }]
    ],
    rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }]
    ],
    layout: {
        _: path.join(dirname, './src/lib/components/layouts/default-layout.svelte'),
    }
});

export default config;