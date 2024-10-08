import adapter from '@sveltejs/adapter-static';
import {
    vitePreprocess
} from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

const base = '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    extensions: ['.svelte', ...mdsvexConfig.extensions],
    preprocess: [
        vitePreprocess(),
        mdsvex(mdsvexConfig),
    ],
    vitePlugin: {
        inspector: {
            showToggleButton: 'always'
        }
    },
    kit: {
        adapter: adapter({
            fallback: '404.html'
        }),
        alias: {
            $lib: './src/lib',
            '@data': './src/lib/data',
            '@components': './src/lib/components',
            '@md': './src/lib/md',
            '@stores': './src/lib/stores',
            '@utils': './src/lib/utils'
        },
        paths: {
            base: process.env.NODE_ENV === 'production' ? base : ''
        },
        prerender: {
            handleHttpError: ({
                path,
                referrer,
                message
            }) => {
                if (path.startsWith('http://') || path.startsWith('https://')) {
                    console.warn(`Ignoring ${path} - external link`);
                    return;
                }
                throw new Error(message);
            }
        },
        files: {
            assets: 'static'
        }
    }
};

export default config;