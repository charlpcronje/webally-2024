// vite.config.ts
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import { VitePWA } from 'vite-plugin-pwa'

const config: UserConfig = {
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler' // or "modern"
			}
		}
	},
	plugins: [
		UnoCSS(),
		sveltekit(),
		VitePWA({
			registerType: 'autoUpdate',
			devOptions: {
				enabled: true
			}
		})
	]
};

export default config;