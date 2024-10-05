# File Analysis Report

This document contains an analysis of the project files.

| No.   | File                                 | Lines    | Words    | AI Tokens |
| ----- | ------------------------------------ | -------- | -------- | --------- |
|  1    | ./combine.json                       | 48       | 54       | 193       |
|  2    | ./package.json                       | 68       | 159      | 551       |
|  3    | ./uno.config.ts                      | 44       | 90       | 191       |
|  4    | ./.env                               | 5        | 20       | 23        |
|  5    | ./sendPushNotification.js            | 28       | 92       | 151       |
|  6    | ./mdsvex.config.js                   | 31       | 92       | 169       |
|  7    | ./mdsvex.d.ts                        | 7        | 23       | 37        |
|  8    | ./scripts/cvFetcher.js               | 1        | 0        | 0         |
|  9    | ./src/service-worker.js              | 81       | 289      | 478       |
|  10   | ./src/app.d.ts                       | 15       | 49       | 63        |
|  11   | ./src/svelte-shims.d.ts              | 5        | 12       | 20        |
|  12   | ./src/svelte.d.ts                    | 5        | 20       | 25        |
|  13   | ./src/global.d.ts                    | 1        | 4        | 9         |
|  14   | ./src/lib/types.ts                   | 123      | 336      | 613       |
|  15   | ./src/lib/index.scss                 | 368      | 599      | 1609      |
|  16   | ./src/lib/analytics.svelte           | 33       | 99       | 190       |
|  17   | ./src/lib/components/VideoEmbed.svelte | 15       | 28       | 54        |
|  18   | ./src/lib/components/CommonPage.svelte | 15       | 37       | 83        |
|  19   | ./src/lib/components/InstallPrompt.svelte | 69       | 175      | 325       |
|  20   | ./src/lib/components/Markdown.svelte | 41       | 112      | 206       |
|  21   | ./src/lib/components/TabTitle.svelte | 11       | 25       | 62        |
|  22   | ./src/lib/components/SearchPage.svelte | 60       | 154      | 332       |
|  23   | ./src/lib/components/RenderHTML.svelte | 5        | 9        | 21        |
|  24   | ./src/lib/components/BackToServicesButton.svelte | 27       | 64       | 157       |
|  25   | ./src/lib/components/PageTransition.svelte | 35       | 83       | 171       |
|  26   | ./src/lib/components/GradientImageOverlay.svelte | 83       | 291      | 547       |
|  27   | ./src/lib/components/Banner/Banner.svelte | 28       | 70       | 183       |
|  28   | ./src/lib/components/Card/CardDivider.svelte | 2        | 5        | 17        |
|  29   | ./src/lib/components/Card/CardLink.svelte | 40       | 78       | 191       |
|  30   | ./src/lib/components/Card/CardLogo.svelte | 10       | 35       | 74        |
|  31   | ./src/lib/components/Card/CardTitle.svelte | 6        | 10       | 37        |
|  32   | ./src/lib/components/Card/Card.svelte | 114      | 324      | 724       |
|  33   | ./src/lib/components/Carrousel/Carrousel.svelte | 102      | 258      | 528       |
|  34   | ./src/lib/components/Chip/Chip.svelte | 35       | 88       | 224       |
|  35   | ./src/lib/components/Chip/ChipIcon.svelte | 61       | 145      | 312       |
|  36   | ./src/lib/components/Chip/Footer/Footer.svelte | 78       | 228      | 466       |
|  37   | ./src/lib/components/ExperienceCard/ExperienceCard.svelte | 84       | 240      | 604       |
|  38   | ./src/lib/components/Icon/Icon.svelte | 23       | 45       | 101       |
|  39   | ./src/lib/components/Icon/UIcon.svelte | 8        | 20       | 54        |
|  40   | ./src/lib/components/Icon/Icons.ts   | 10       | 47       | 79        |
|  41   | ./src/lib/components/Input/Input.svelte | 28       | 56       | 132       |
|  42   | ./src/lib/components/MainTitle/MainTitle.svelte | 11       | 29       | 96        |
|  43   | ./src/lib/components/NavMenu/NavMenu.svelte | 307      | 753      | 1715      |
|  44   | ./src/lib/components/ProjectCard/ProjectCard.svelte | 74       | 233      | 601       |
|  45   | ./src/lib/components/Screenshot/Screenshot.svelte | 56       | 136      | 344       |
|  46   | ./src/lib/components/ServiceCard/ServiceCard.svelte | 90       | 251      | 557       |
|  47   | ./src/lib/components/layouts/default-layout.svelte | 41       | 79       | 205       |
|  48   | ./src/lib/components/layouts/components-layout.svelte | 19       | 40       | 103       |
|  49   | ./src/lib/data/assets.ts             | 160      | 352      | 1226      |
|  50   | ./src/lib/data/navbar.ts             | 92       | 201      | 425       |
|  51   | ./src/lib/data/projects.ts           | 266      | 3249     | 5765      |
|  52   | ./src/lib/data/resume.ts             | 4        | 10       | 13        |
|  53   | ./src/lib/data/search.ts             | 2        | 5        | 7         |
|  54   | ./src/lib/data/app.ts                | 2        | 9        | 11        |
|  55   | ./src/lib/data/documentation-sites.ts | 146      | 397      | 695       |
|  56   | ./src/lib/data/education.ts          | 32       | 104      | 209       |
|  57   | ./src/lib/data/home.ts               | 33       | 151      | 303       |
|  58   | ./src/lib/data/services.ts           | 252      | 982      | 1724      |
|  59   | ./src/lib/stores/theme.ts            | 48       | 146      | 279       |
|  60   | ./src/lib/stores/loadingStore.js     | 3        | 11       | 17        |
|  61   | ./src/lib/utils/customMarkdownParser.ts | 34       | 101      | 215       |
|  62   | ./src/lib/utils/reTypeParser.ts      | 60       | 165      | 521       |
|  63   | ./src/lib/layouts/default.svelte     | 11       | 12       | 39        |
|  64   | ./src/routes/+layout.svelte          | 77       | 182      | 368       |
|  65   | ./src/routes/+layout.server.ts       | 2        | 10       | 13        |
|  66   | ./src/routes/+page.svelte            | 48       | 157      | 499       |
|  67   | ./src/routes/documentation/+page.svelte | 24       | 65       | 171       |
|  68   | ./src/routes/education/+page.svelte  | 92       | 246      | 612       |
|  69   | ./src/routes/experience/+page.svelte | 57       | 169      | 388       |
|  70   | ./src/routes/experience/[slug]/+page.svelte | 93       | 246      | 637       |
|  71   | ./src/routes/experience/[slug]/+page.ts | 12       | 37       | 61        |
|  72   | ./src/routes/privacy/+page.svelte    | 46       | 194      | 327       |
|  73   | ./src/routes/projects/+page.svelte   | 109      | 286      | 614       |
|  74   | ./src/routes/projects/[slug]/+page.ts | 12       | 37       | 61        |
|  75   | ./src/routes/projects/[slug]/+page.svelte | 140      | 354      | 903       |
|  76   | ./src/routes/resume/+page.svelte     | 31       | 58       | 136       |
|  77   | ./src/routes/search/+page.svelte     | 97       | 259      | 597       |
|  78   | ./src/routes/skills/+page.svelte     | 52       | 144      | 405       |
|  79   | ./src/routes/skills/[slug]/+page.svelte | 115      | 311      | 737       |
|  80   | ./src/routes/skills/[slug]/+page.ts  | 12       | 37       | 61        |
|  81   | ./src/routes/team/+page.svelte       | 89       | 211      | 629       |
|  82   | ./src/routes/team/[slug]/+page.svelte | 151      | 278      | 632       |
|  83   | ./src/routes/team/[slug]/+page.ts    | 28       | 84       | 121       |
|  84   | ./src/routes/terms/+page.svelte      | 54       | 264      | 405       |
|  85   | ./src/routes/tools/+page.svelte      | 91       | 214      | 635       |
|  86   | ./src/routes/tools/[slug]/+page.svelte | 72       | 219      | 519       |
|  87   | ./src/routes/tools/[slug]/+page.ts   | 21       | 74       | 129       |
|  88   | ./src/routes/tools/ai/+page.svelte   | 36       | 88       | 244       |
|  89   | ./src/routes/tools/code/+page.svelte | 36       | 88       | 244       |
|  90   | ./src/routes/tools/data/+page.svelte | 36       | 88       | 244       |
|  91   | ./src/routes/api/vapid-key.ts        | 15       | 47       | 71        |
|  92   | ./src/routes/api/push-subscription/+server.ts | 15       | 55       | 81        |
|  93   | ./src/routes/api/vapid-key/+server.ts | 1        | 0        | 0         |
|  94   | ./src/routes/services/+page.svelte   | 80       | 213      | 515       |
|  95   | ./src/routes/services/+page.ts       | 9        | 27       | 41        |
|  96   | ./src/routes/services/+page.server.ts | 53       | 189      | 362       |
|  97   | ./src/routes/services/[slug]/+page.svelte | 91       | 261      | 587       |
|  98   | ./src/routes/services/[slug]/+page.server.ts | 49       | 204      | 341       |
|       | Total                                | 5542     | 17377    | 37466     |


## Total Counts Across All Files. Tokenizer Used: NLTK's Punkt Tokenizer
- Total Lines: 5542
- Total Words: 17377
- Total AI Tokens: 37466

## File: combine.json
```json
{
    "root_path": "/var/www/html/webally.co.za",
    "output_path": "/var/www/html/webally.co.za/combined.md",
    "gitignore_path": "",
    "exclude_folders": [
        ".history",
        "docs",
        "coverage",
        ".git",
        ".github",
        "node_modules",
        "backups",
        ".svelte-kit",
        "build",
        ".vscode",
        "static"
    ],
    "exclude_files": [
        "package-lock.json",
        "combined.md",
        "src/lib/utils/helpers.ts",
        "src/lib/utils/index.ts",
        "src/lib/utils/colors.ts",
        "src/lib/data/experience.ts",
        "src/lib/data/skills.ts",
        "src/lib/data/tools.ts",
        "README.md",
        "*.test.ts",
        "*.spec.ts",
        "*.d.ts",
        "tsconfig.json",
        "vite.config.ts",
        "svelte.config.js",
        "postcss.config.js",
        "tailwind.config.js",
        "src/app.html"
    ],
    "file_types": [
        ".js",
        ".ts",
        ".php",
        ".env",
        ".scss",
        ".svelte",
        ".css",
        ".json"
    ]
}
```

## File: package.json
```json
{
    "name": "webally",
    "version": "0.0.1",
    "private": true,
    "scripts": {
        "dev": "vite dev --host",
        "prebuild": "cp -r scripts build/",
        "build": "vite build",
        "preview": "vite preview --host",
        "check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
        "check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",
        "lint": "prettier --plugin-search-dir . --check . && eslint .",
        "format": "prettier --plugin-search-dir . --write ."
    },
    "devDependencies": {
        "@iconify-json/carbon": "^1.1.21",
        "@riadh-adrani/utils": "0.42.2",
        "@sveltejs/adapter-auto": "^3.2.5",
        "@sveltejs/adapter-static": "^3.0.0",
        "@sveltejs/kit": "^2.0.0",
        "@sveltejs/vite-plugin-svelte": "^3.0.0",
        "@sveltejs/vite-plugin-svelte-inspector": "^2.1.0",
        "@tsconfig/svelte": "^5.0.4",
        "@types/dompurify": "^3.0.2",
        "@types/marked": "^5.0.0",
        "@types/node": "^22.7.0",
        "@types/prismjs": "^1.26.0",
        "@typescript-eslint/eslint-plugin": "^6.9.0",
        "@typescript-eslint/parser": "^6.9.0",
        "@unocss/core": "^0.56.1",
        "@unocss/extractor-svelte": "^0.56.1",
        "@unocss/preset-icons": "^0.56.1",
        "@unocss/svelte-scoped": "^0.56.1",
        "dompurify": "^3.0.5",
        "eslint": "^8.52.0",
        "eslint-config-prettier": "^8.5.0",
        "eslint-plugin-svelte": "^2.34.1",
        "marked": "^5.1.1",
        "marked-gfm-heading-id": "^3.0.4",
        "marked-mangle": "^1.1.0",
        "mdsvex": "^0.12.3",
        "prettier": "^3.0.3",
        "prettier-plugin-svelte": "^3.0.3",
        "prismjs": "^1.29.0",
        "remark-extract-frontmatter": "^3.2.0",
        "remark-frontmatter": "^5.0.0",
        "sass": "^1.57.1",
        "slugify": "^1.6.6",
        "svelte": "^4.2.19",
        "svelte-check": "3.5.2",
        "tslib": "^2.4.1",
        "typescript": "^5.6.2",
        "unocss": "^0.63.1",
        "vite": "^5.0.0",
        "vite-plugin-pwa": "^0.20.5",
        "yaml": "^2.5.1"
    },
    "type": "module",
    "dependencies": {
        "dayjs": "^1.11.10",
        "gray-matter": "^4.0.3",
        "rehype-autolink-headings": "^7.1.0",
        "rehype-slug": "^6.0.0",
        "remark-gfm": "^4.0.0",
        "web-push": "^3.6.7"
    }
}

```

## File: uno.config.ts
```ts
import extractorSvelte from '@unocss/extractor-svelte';
import { defineConfig, presetUno, presetWebFonts, presetIcons } from 'unocss';

export default defineConfig({
	extractors: [extractorSvelte()],
	content: {
		pipeline: {
			include: [
				/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
				// include js/ts files
				'src/**/*.{js,ts}'
			]
		}
	},
	presets: [
		presetUno(),
		presetWebFonts({
			fonts: {
				sans: {
					name: 'Inter',
					weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
					italic: true,
					provider: 'google'
				}
			}
		}),
		presetIcons({
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle'
			}
		})
	],
	shortcuts: [
		{
			col: 'flex flex-col',
			row: 'flex flex-row',

			'col-center': 'col justify-center items-center',
			'row-center': 'row justify-center items-center'
		}
	]
});

```

## File: .env
```
# .env
# Set to 'dark_only' for dark mode only, or 'switchable' for both light and dark modes
VITE_THEME_MODE=dark_only
VITE_API_KEY=your_api_key

```

## File: sendPushNotification.js
```js
// sendPushNotification.js
const webPush = require('web-push');

// Replace with your actual VAPID keys
const vapidKeys = {
  publicKey: 'BHiKKmeGnSYaMiiaaNtNRRZlBzDTEGw66ILt192tu4PRYNIAm-fV5sgk7WQoXvjjxPOim3KEyt9mZUXyOoQRxTk',
  privateKey: 'wa4h49vnpMlIJNTJ_UBF5lpenHOlpoOmUUo3sCv8VEo'
};
// Example subscription object (this should come from your database)
const subscriptions = [ ]; // Store user subscriptions here

// Configure web-push with your VAPID keys
webPush.setVapidDetails(
  'mailto:your-email@example.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);


// Send a push notification to all subscriptions
subscriptions.forEach(subscription => {
  const payload = JSON.stringify({ title: 'Hello', body: 'This is a test notification' });

  webPush.sendNotification(subscription, payload)
    .then(result => console.log('Notification sent', result))
    .catch(err => console.error('Error sending notification', err));
});

```

## File: mdsvex.config.js
```js
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
```

## File: mdsvex.d.ts
```ts
declare module '*.md' {
    import type { ComponentType } from 'svelte';

    export const metadata: Record<string, unknown>;
    const component: ComponentType;
    export default component;
}
```

## File: scripts/cvFetcher.js
```js

```

## File: src/service-worker.js
```js
/// <reference types="@sveltejs/kit" />
import { build, files, version } from '$service-worker';

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

const ASSETS = [
	...build, // the app itself
	...files  // everything in `static`
];

self.addEventListener('install', (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}

	event.waitUntil(addFilesToCache());
});

self.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}

	event.waitUntil(deleteOldCaches());
});

self.addEventListener('fetch', (event) => {
    // Ignore non-HTTP(S) requests (such as chrome-extension requests)
	if (event.request.method !== 'GET' && (event.request.protocol !== 'http:' || event.request.protocol !== 'https:')) return;
    

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		// `build`/`files` can always be served from the cache
		if (ASSETS.includes(url.pathname)) {
			const response = await cache.match(url.pathname);

			if (response) {
				return response;
			}
		}

		// for everything else, try the network first, but
		// fall back to the cache if we're offline
		try {
			const response = await fetch(event.request);

			// if we're offline, fetch can return a value that is not a Response
			// instead of throwing - and we can't pass this non-Response to respondWith
			if (!(response instanceof Response)) {
				throw new Error('invalid response from fetch');
			}

			if (response.status === 200 && (event.request.protocol == 'http:' || event.request.protocol == 'https:')) {
				cache.put(event.request, response.clone());
			}

			return response;
		} catch (err) {
			const response = await cache.match(event.request);

			if (response) {
				return response;
			}

			// if there's no cache, then just error out
			// as there is nothing we can do to respond to this request
			throw err;
		}
	}

	event.respondWith(respond());
});
```

## File: src/app.d.ts
```ts
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

declare module '*.md' {
	const content: string;
	export default content;
}

```

## File: src/svelte-shims.d.ts
```ts
declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    [key: string]: any;
  }
}
```

## File: src/svelte.d.ts
```ts
declare namespace svelteHTML {
    import type { HTMLAttributes, SvelteHTMLElements } from 'svelte/elements';
    type IntrinsicElements = SvelteHTMLElements;
    export = HTMLAttributes;
}
```

## File: src/global.d.ts
```ts
/// <reference types="svelte" />
```

## File: src/lib/types.ts
```ts
import type { Color } from './utils/colors';

export interface Tool {
	name: string;
	description: string;
	github: string;
	details: string;
	slug?: string;
}

export enum Platform {
	GitHub = 'github',
	StackOverflow = 'stackoverflow',
	Twitter = 'twitter',
	Linkedin = 'linkedin',
	Email = 'email',
	Facebook = 'facebook',
	Youtube = 'youtube',
	Blog = 'blog',
	StackShare = 'stackShare',
	WhatsApp = 'whatsapp'
}

interface MdsvexOptions {
	extensions: string[];
	smartypants: boolean | Record<string, unknown>;
	layout: string | { [name: string]: string };
	//@ts-ignore
	remarkPlugins: Array<plugin> | Array<[plugin, plugin_options]>;
	//@ts-ignore
	rehypePlugins: Array<plugin> | Array<[plugin, plugin_options]>;
	highlight: { highlighter: Function, alias: { [alias: string]: string } };
	frontmatter: { parse: Function; marker: string };
}
export interface Service {
    slug: string;
    color: string;
    shortDescription: string;
    image: string;
    name: string;
    type: string;
}

export interface serviceCategory {
	slug: string;
	name: string;
	shortDescription: string;
	services: Array<Service>;
}

export type Icon = `i-${string}-${string}`;

export enum ContractType {
	FullTime = 'Full-time',
	PartTime = 'Part-time',
	SelfEmployed = 'Self-employed',
	Freelance = 'Freelance',
	Contract = 'Contract',
	Internship = 'Internship'
}

export type Asset = string | { light: string; dark: string };

export interface Item<S extends string = string> {
	slug: S;
	name: string;
	logo: Asset;
	shortDescription: string;
	description: string;
	screenshots?: Array<{ src: string; label: string }>;
}

export interface Link {
	to: string;
	label: string;
	newTab?: boolean;
}

export interface IconLink extends Link {
	icon: Asset;
}

export interface SkillCategory<S extends string = string> {
	slug: S;
	name: string;
}

export interface Skill<S extends string = string> extends Omit<Item<S>, 'shortDescription'> {
	color: string;
	category?: SkillCategory;
}

export interface Project<S extends string = string> extends Item<S> {
	links: Array<Link>;
	color: Color;
	period: {
		from: Date;
		to?: Date;
	};
	periods?: Array<{ from: Date; to?: Date }>;
	type: string;
	skills: Array<Skill<S>>;
	company: string;
	screenshots?: Array<{ src: string; label: string }>;
}

export interface Experience<S extends string = string> extends Project<S> {
	company: string;
	location: string;
	contract: ContractType;
}

export interface Education<S extends string = string> extends Item<S> {
	organization: string;
	location: string;
	period: {
		from: Date;
		to?: Date;
	};
	subjects: Array<string>;
	degree: string;
}

```

## File: src/lib/index.scss
```scss
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

:root {
	--dark-0: #000;
	--dark-00: #3b3b3b;
	--dark-1: #1e1e1e;
	--dark-2: #2e2e2e;
	--dark-3: #3e3e3e;
	--dark-4: #4e4e4e;
	--dark-5: #5e5e5e;
	--dark-6: #6e6e6e;
	--dark-7: #7e7e7e;
	--dark-8: #8e8e8e;

	--light-0: #fff;
	--light-00: #cacaca;
	--light-1: #e1e1e1;
	--light-2: #d1d1d1;
	--light-3: #c1c1c1;
	--light-4: #b1b1b1;
	--light-5: #a1a1a1;
	--light-6: #919191;
	--light-7: #818181;
	--light-8: #717171;

	--code-keyword-light: #bd2864;
	--code-keyword-dark: #bd2864;

	--code-string-light: #297a3a;
	--code-string-dark: #62c073;

	--code-function-light: #0068d6;
	--code-function-dark: #52a8ff;

	--code-constant-dark: #f8c555;
	--code-constant-light: #f08d49;

	--code-operator-dark: #67cdcc;
	--code-operator-light: #016464;

	--link-dark: #2563eb;
	--link-light: #3b82f6;

	--dark-0-60: rgba(0, 0, 0, 0.6);
	--light-0-60: rgba(255, 255, 255, 0.6);

	// fonts
	--text-f: 'Inter';
	--title-f: 'Inter';

	overflow-y: scroll;
}

body {
	margin: 0px;
}

* {
	transition-duration: 200ms;
	transition-property: background, border-color, opacity, box-shadow, top, bottom, left, margin,
		right;
}

:root[data-theme='dark'] {
	color-scheme: dark;

	--main: var(--dark-0);
	--main-close: var(--dark-00);
	--main-hover: var(--dark-1);
	--secondary: var(--dark-1);
	--secondary-hover: var(--dark-2);
	--tertiary: var(--dark-2);
	--tertiary-hover: var(--dark-3);
	--accent: var(--dark-3);
	--accent-hover: var(--dark-4);

	--main-text: var(--light-0);
	--main-text-hover: var(--light-1);
	--secondary-text: var(--light-1);
	--secondary-text-hover: var(--light-2);
	--tertiary-text: var(--light-2);
	--tertiary-text-hover: var(--light-3);
	--accent-text: var(--light-3);
	--accent-text-hover: var(--light-4);

	--border: var(--dark-2);
	--border-hover: var(--light-7);

	--main-60: var(--dark-0-60);

	--code-keyword: var(--code-keyword-dark);
	--code-string: var(--code-string-dark);
	--code-function: var(--code-function-dark);
	--code-constant: var(--code-constant-dark);
	--code-operator: var(--code-operator-dark);
	--link: var(--link-light);
}

:root[data-theme='light'] {
	color-scheme: light;

	--main: var(--light-0);
	--main-close: var(--light-00);
	--main-hover: var(--light-1);
	--secondary: var(--light-1);
	--secondary-hover: var(--light-2);
	--tertiary: var(--light-2);
	--tertiary-hover: var(--light-3);
	--accent: var(--light-3);
	--accent-hover: var(--light-4);

	--main-text: var(--dark-0);
	--main-text-hover: var(--dark-1);
	--secondary-text: var(--dark-1);
	--secondary-text-hover: var(--dark-2);
	--tertiary-text: var(--dark-2);
	--tertiary-text-hover: var(--dark-3);
	--accent-text: var(--dark-3);
	--accent-text-hover: var(--dark-4);

	--border: var(--light-1);
	--border-hover: var(--dark-8);

	--main-60: var(--light-0-60);

	--code-keyword: var(--code-keyword-light);
	--code-string: var(--code-string-light);
	--code-function: var(--code-function-light);
	--code-constant: var(--code-constant-light);
	--code-operator: var(--code-operator-light);
	--link: var(--link-dark);
}

.container {
	max-width: 1200px;
	min-width: 1200px;
	margin: 0px auto;

	@media (max-width: 1350px) {
		& {
			max-width: 1000px;
			min-width: 1000px;
		}
	}

	@media (max-width: 1075px) {
		& {
			max-width: -webkit-fill-available;
			min-width: -webkit-fill-available;
			max-width: -moz-available;
			min-width: -moz-available;
		}
	}
}

.markdown-container {
	--code-comment: var(--tertiary-text);
	--code-punctuation: var(--main-text);
	--code-builtin: var(--secondary-text);
	--code-number: var(--secondary-text);
	--code-interpolation: var(--code-keyword);
	--code-class-name: var(--secondary-text);

	font-family: 'Space Mono', monospace;
	font-size: 14px;

	color: var(--tertiary-text);
	overflow-y: auto !important;

	code[class*='language-'],
	pre[class*='language-'] {
		overflow-x: auto;
		min-width: 0px;
		color: var(--main-text-hover);
	}

	pre[class*='language-'] {
		margin-top: 1em;
		margin-bottom: 1em;
	}

	& .token.selector,
	.token.important,
	.token.atrule,
	.token.keyword {
		color: var(--code-keyword);
	}

	& .token {
		&.punctuation {
			color: var(--code-punctuation);
		}

		&.string {
			color: var(--code-string);
		}

		&.function {
			color: var(--code-function);
		}

		&.comment {
			color: var(--code-comment);
		}

		&.token.builtin {
			color: var(--code-builtin);
		}

		&.token.number {
			color: var(--code-number);
		}

		&.token.constant {
			color: var(--code-constant);
		}

		&.token.operator {
			color: var(--code-operator);
		}
		&.token.interpolation {
			color: var(--code-interpolation);
		}

		&.token.class-name {
			color: var(--code-function);
		}
	}

	& h1,
	& h2,
	& h3 {
		color: var(--text);
		margin-bottom: 0.45em;
	}

	& h1 {
		font-size: 2em;
	}

	& h2 {
		font-size: 1.8em;
	}

	& h3 {
		font-size: 1.6em;
	}

	& h4 {
		font-size: 1.45em;
	}

	& h5 {
		font-size: 1.3em;
	}

	& h6 {
		font-size: 1.2em;
	}

	& p {
		line-height: 1.75rem;
	}

	& ul {
		margin: 0;
		padding: 0 20px;
	}

	& li {
		padding: 5px 0px;
		line-height: 1.75rem;
	}

	& a {
		color: var(--link);
	}

	& :is(code):not(pre code) {
		color: var(--accent-text);
		// font-size: 0.9em;
		background-color: var(--tertiary);
		padding: 1px 6px;
		border-radius: 0.25em;
	}

	& :not(pre) > code[class*='language-'],
	pre[class*='language-'] {
		background-color: var(--main-hover);
		border: 1px solid var(--border);
		border-radius: 0.25em;
		font-size: 0.9em;

		&:hover {
			background-color: var(--secondary-hover);
			border-color: var(--border-hover);
		}
	}

	& a :is(code):not(pre code) {
		color: inherit;
	}

	& blockquote {
		padding: 5px 20px;
		background-color: var(--main-hover);
		border: 1px solid var(--dividerLight);
		margin-right: 0px;
		margin-left: 0px;
		border-radius: 0.25em;

		strong {
			font-style: normal;
		}
	}

	& hr {
		// border: none;
		border-top: 0.5px solid var(--border-low);
		color: var(--border-low);
		margin: 30px 0px;
	}
}

.nav-bar-mobile-btn {
	width: 36px;
	height: 36px;

	&::before,
	&::after {
		content: '';
		display: block;
		height: 1px;
		width: 20px;
		background-color: var(--secondary-text);
		transition: transform 200ms ease;
	}

	&:hover {
		&::before,
		&::after {
			background-color: auto;
		}
	}

	&::before {
		transform: translateY(-5px) rotate(0deg);
	}

	&::after {
		transform: translateY(4px) rotate(0deg);
	}

	&-expanded {
		&::before {
			transform: translateY(2px) rotate(45deg);
		}

		&::after {
			transform: translateY(0) rotate(-45deg);
		}
	}
}

```

## File: src/lib/analytics.svelte
```svelte
<script>
  import { onMount } from 'svelte';

  export let measurementId = 'G-YPWDPYVBH7'; // Your Google Analytics measurement ID

  onMount(() => {
    // Create script elements
    const script1 = document.createElement('script');
    const script2 = document.createElement('script');

    // Set the src for the first script (Google Analytics library)
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script1.async = true;

    // Set the content for the second script (Google Analytics configuration)
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `;

    // Append the scripts to the document head
    document.head.appendChild(script1);
    document.head.appendChild(script2);

    // Cleanup function
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  });
</script>
```

## File: src/lib/components/VideoEmbed.svelte
```svelte
<script>
    export let src;
</script>

<video controls>
<source {src} type="video/mp4">
Your browser does not support the video tag.
</video>

<style>
video {
    max-width: 100%;
    height: auto;
}
</style>
```

## File: src/lib/components/CommonPage.svelte
```svelte
<script>
	import MainTitle from './MainTitle/MainTitle.svelte';
	import TabTitle from './TabTitle.svelte';

	export let title = 'Title';
</script>

<TabTitle bind:title />
<div class="flex-1 col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12">
	<MainTitle>{title}</MainTitle>
	<div class="col gap-5 flex-1">
		<slot />
	</div>
</div>

```

## File: src/lib/components/InstallPrompt.svelte
```svelte
<script lang="ts">
    import { onMount } from 'svelte';
    
    let deferredPrompt: any;
    let showInstallPrompt = false;

    onMount(() => {
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later
            deferredPrompt = e;
            // Show the install button
            showInstallPrompt = true;
        });
    });

    function installApp() {
        showInstallPrompt = false;
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    }
</script>

{#if showInstallPrompt}
    <div class="install-prompt">
        <p>Install "webAlly" for a better experience!</p>
        <button on:click={installApp}>Add to Home Screen</button>
    </div>
{/if}

<style>
    .install-prompt {
        position: fixed;
        bottom: 20px;
        left: 20px;
        right: 20px;
        background-color: #000000;
        border:1px solid #FFF;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1000;
    }

    button {
        background-color: #101110;
        border: none;
        color: white;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 4px;
    }
</style>
```

## File: src/lib/components/Markdown.svelte
```svelte
<script lang="ts">
	import { gfmHeadingId } from 'marked-gfm-heading-id';
	import { mangle } from 'marked-mangle';
	import Prism from 'prismjs';
	import createSanitizer from 'dompurify';
	import { marked } from 'marked';
	import 'prismjs/components/prism-typescript';
	import 'prismjs/themes/prism-tomorrow.css';
	import { onMount } from 'svelte';

	let container: HTMLDivElement;

	export let content: string;
	marked.setOptions({
		mangle: false
	});
	onMount(() => {
		marked.use(gfmHeadingId());
		marked.use(mangle());

		const sanitizer = createSanitizer(window);

		if (window) {
			const parsed = marked.parse(content);

			container.innerHTML = sanitizer.sanitize(parsed);

			Prism.highlightAllUnder(container);
		}
	});
</script>

<div bind:this={container} class="markdown-container" />

<style>
.markdown-container {
	white-space: pre-wrap; /* This forces the code block to wrap */
	word-wrap: break-word; /* Ensures long words are wrapped properly */
	overflow-wrap: break-word; /* Handles overflow issues by breaking words */
}
</style>
```

## File: src/lib/components/TabTitle.svelte
```svelte
<script lang="ts">
	import { titleSuffix } from '@data/app';
	import { useTitle } from '$lib/utils/helpers';

	export let title: string;
</script>

<svelte:head>
	<title>webAlly | {useTitle(title, titleSuffix)}</title>
</svelte:head>

```

## File: src/lib/components/SearchPage.svelte
```svelte
<script lang="ts">
	// import { path } from 'node:path';  // Remove this line
	import { createEventDispatcher, onMount } from 'svelte';
	import CommonPage from './CommonPage.svelte';
	import Input from './Input/Input.svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	export let title = 'Title';
	export let search = '';
	let searchInput: Input;

	const dispatch = createEventDispatcher();

	let mounted = false;

	$: {
		dispatch('search', { search: search.trim().toLowerCase() });
	}

	$: {
		if (browser && mounted) {
			let searchParams = new URLSearchParams(window.location.search);

			searchParams.set('q', search);

			const url = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${searchParams.toString()}`;

			const state = window.history.state;

			window.history.replaceState(state, '', url);
			
			let pathname = $page?.url?.pathname ?? '';

			if (pathname.startsWith(`${base}/search`)) {
				if (searchInput) {
					searchInput.focus();
				}
			}
		}
	}

	onMount(() => {
		let searchParams = new URLSearchParams(window.location.search);

		search = searchParams.get('q') ?? '';
		mounted = true;
	});
</script>

<CommonPage {title}>
	<div class="w-100% row">
		<Input bind:this={searchInput} bind:value={search} placeholder={'Search...'} />
	</div>
	<div class="w-100% col flex-1">
		<slot />
	</div>
</CommonPage>

```

## File: src/lib/components/RenderHTML.svelte
```svelte
<script lang="ts">
    export let html: string;
  </script>
  
  {@html html}
```

## File: src/lib/components/BackToServicesButton.svelte
```svelte
<script>
    export let href = "/services";
</script>
  
<a {href} class="back-to-services">
    <svg fill="#ffffff" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490.693 490.693" xml:space="preserve" stroke="#ffffff">
      <g>
        <path d="M351.173,149.227H36.4L124.827,60.8c4.053-4.267,3.947-10.987-0.213-15.04c-4.16-3.947-10.667-3.947-14.827,0 L3.12,152.427c-4.16,4.16-4.16,10.88,0,15.04l106.667,106.667c4.267,4.053,10.987,3.947,15.04-0.213 c3.947-4.16,3.947-10.667,0-14.827L36.4,170.56h314.773c65.173,0,118.187,57.387,118.187,128s-53.013,128-118.187,128h-94.827 c-5.333,0-10.133,3.84-10.88,9.067c-0.96,6.613,4.16,12.267,10.56,12.267h95.147c76.907,0,139.52-66.987,139.52-149.333 S428.08,149.227,351.173,149.227z"></path>
      </g>
    </svg>
  </a>
  
  <style>
    .back-to-services {
      display: inline-block;
      margin-top: 20px;
      margin-left: 10px; /* Add some left margin */
    }
    
    svg {
      transition: transform 0.3s ease;
    }
    
    .back-to-services:hover svg {
      transform: translateX(-5px);
    }
  </style>
```

## File: src/lib/components/PageTransition.svelte
```svelte
<script>
    import { fade } from 'svelte/transition';
    import { loading } from '$lib/stores/loadingStore';
  </script>
  
  {#if $loading}
    <div class="overlay" transition:fade={{ duration: 300 }}>
      <img
        src="/loader.gif"
        alt="Loading..."
        class="loader"
        transition:fade={{ duration: 300 }}
      />
    </div>
  {/if}
  
  <style>
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0,1); /* Semi-transparent background */
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .loader {
      width: 200px; /* Adjust size as needed */
      height: 200px; /* Adjust size as needed */
    }
  </style>
```

## File: src/lib/components/GradientImageOverlay.svelte
```svelte
<script>
    export let hexColor = '#AABBCC';  // Default hex color
    export let imageUrl = '';         // Default image URL
  
    // Utility functions for color manipulation (closure-style functions)
    const colorUtils = (function() {
      function hexToRgb(hex) {
        let bigint = parseInt(hex.slice(1), 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        return { r, g, b };
      }
  
      function rgbToHex(r, g, b) {
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
      }
  
      function luminance(r, g, b) {
        return 0.299 * r + 0.587 * g + 0.114 * b;
      }
  
      function adjustBrightness(hex, amount) {
        let { r, g, b } = hexToRgb(hex);
        r = Math.max(0, Math.min(255, r + amount));
        g = Math.max(0, Math.min(255, g + amount));
        b = Math.max(0, Math.min(255, b + amount));
        return rgbToHex(r, g, b);
      }
  
      function calculateGradient(hex) {
        let { r, g, b } = hexToRgb(hex);
        let luminanceValue = luminance(r, g, b);
        let adjustment = luminanceValue > 128 ? -50 : 50;
        let adjustedColor = adjustBrightness(hex, adjustment);
        return [hex, adjustedColor];
      }
  
      return { calculateGradient };
    })();
  
    // Get the gradient colors based on the provided hexColor
    let gradientColors = colorUtils.calculateGradient(hexColor);
  </script>
  
  <style>
    .background-container {
      position: relative;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .gradient-overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(to bottom right, {gradientColors[0]}, {gradientColors[1]});
      opacity: 0.7; /* Adjust the transparency of the gradient */
    }
  
    img {
      position: relative;
      z-index: 1; /* Ensures image is on top of the gradient */
      max-width: 100%;
      max-height: 100%;
    }
  </style>
  
  <div class="background-container" style="background-image: url({imageUrl})">
    <!-- Gradient Overlay -->
    <div class="gradient-overlay"></div>
  
    <!-- Optional content inside the container -->
    <slot></slot>
  </div>
  
```

## File: src/lib/components/Banner/Banner.svelte
```svelte
<script lang="ts">
	export let img = '';
	export let useDefaultDimensions = true;
	export let classes = '';
</script>

<div
	style={`--bg-img:url(${img})`}
	class={`row w-[100%] ${
		useDefaultDimensions
			? 'min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] px-4 md:px-10'
			: ''
	} items-center skill-cover  ${classes}`}
>
	<div class="p-x-2 col flex-1">
		<slot />
	</div>
</div>

<style lang="scss">
	.skill-cover {
		background: linear-gradient(90deg, var(--main) 0%, var(--main) 55%, var(--main-60) 130%),
			no-repeat 110% 45% / 50% var(--bg-img);

		border-block-end: 1px solid var(--border);
	}
</style>

```

## File: src/lib/components/Card/CardDivider.svelte
```svelte
<div class="bg-[var(--border)] h-1px m-y-10px" />

```

## File: src/lib/components/Card/CardLink.svelte
```svelte
<script lang="ts">
	import UIcon from '../Icon/UIcon.svelte';

	export let label: string;
	export let to: string;
</script>

<a
	class="card-link row-center relative m-x-2.5px border-1px border-solid border-[var(--border)] p-5px rounded-10px text-inherit"
	href={to}
	title={label}
	target="_blank"
	rel="noreferrer"
	data-help={label}
>
	<UIcon icon="i-carbon-link" classes="text-[var(--secondary-text)]" />
</a>

<style lang="scss">
	.card-link {
		&:hover {
			border-color: var(--border-hover);

			&:after {
				content: attr(data-help);
				display: inline-block;
				position: absolute;
				width: max-content;
				background-color: var(--secondary);
				padding: 5px 10px;
				right: 40%;
				top: calc(100% + 5px);
				border: 1px solid var(--border);
				border-radius: 15px;
				z-index: 10;
			}
		}
	}
</style>

```

## File: src/lib/components/Card/CardLogo.svelte
```svelte
<script lang="ts">
	export let src: string;
	export let alt: string;
	export let size = 50;
	export let radius = '15px';
	export let classes = '';
</script>

<img class={`rounded-${radius} ${classes} aspect-square`} {src} {alt} height={size} width={size} />

```

## File: src/lib/components/Card/CardTitle.svelte
```svelte
<script lang="ts">
	export let title: string;
</script>

<h3 class="font-[var(--title-f)] text-1.25em">{title}</h3>

```

## File: src/lib/components/Card/Card.svelte
```svelte
<script lang="ts">
	import { convertNamedToHexColor, type NamedColor } from '$lib/utils/colors';
	import { changeColorOpacity, isHexColor } from '@riadh-adrani/utils';
	import { onMount } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';

	let el: HTMLElement;

	export let color = '#ffffff00';

	export let margin = '0px';
	export let tiltDegree = 5;
	export let classes: Array<string> = [];
	export let href: undefined | string = undefined;
	export let bgImg: string | undefined = undefined;

	$: computedColor = isHexColor(color) ? color : convertNamedToHexColor(color as NamedColor);
	$: borderColor = changeColorOpacity(computedColor, 0.5);
	$: dropColor = changeColorOpacity(computedColor, 0.15);
	$: bgColor = changeColorOpacity(computedColor, 0.01);

	$: {
		if (el) {
			el.style.setProperty('--border-color', borderColor);
			el.style.setProperty('--drop-color', dropColor);
			el.style.setProperty('--bg-color', bgColor);
		}
	}

	// svelte typing is broken...
	const onHover: MouseEventHandler<HTMLDivElement> = (ev) => {
		const target = ev.currentTarget;

		const rect = target.getBoundingClientRect();

		const x = ev.clientX - rect.left;
		const y = ev.clientY - rect.top;

		el.style.setProperty('--drop-x', `${x}px`);
		el.style.setProperty('--drop-y', `${y}px`);

		const width = el.offsetWidth;
		const height = el.offsetHeight;

		const cX = rect.x + width / 2;
		const cY = rect.y + height / 2;

		const mX = ev.clientX - cX;
		const mY = ev.clientY - cY;

		const rY = ((tiltDegree * mX) / (width / 2)).toFixed(2);
		const rX = ((-1 * (tiltDegree * mY)) / (height / 2)).toFixed(2);

		el.style.setProperty('--rot-x', `${rX}deg`);
		el.style.setProperty('--rot-y', `${rY}deg`);
	};

	onMount(() => {
		el.style.setProperty('margin', margin);
		el.style.setProperty('--bg-img', bgImg ? `url(${bgImg})` : '');
	});
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={href ? 'a' : 'div'}
	{href}
	bind:this={el}
	on:mousemove={onHover}
	class={`card text-inherit decoration-none inline-flex flex-col border-1px border-solid border-[var(--border)] rounded-15px duration relative ${classes.join(
		' '
	)}`}
	style:bgColor={'red'}
>
	<div class="card-bg-img flex-1 flex flex-col p-25px rounded-15px">
		<slot />
	</div>
</svelte:element>

<style lang="scss">
	.card {
		--border-color: transparent;
		--bg-color: transparent;
		--drop-color: transparent;

		--bg-img: url();

		--drop-x: 0;
		--drop-y: 0;

		--rot-x: 0;
		--rot-y: 0;

		background: linear-gradient(90deg, var(--main) 0%, var(--main) 60%, var(--main-60) 100%),
			no-repeat right 40% / 40% var(--bg-img);

		&-bg-img {
			&:hover {
				background-color: var(--bg-color);
				background-image: radial-gradient(
					circle at var(--drop-x) var(--drop-y),
					var(--drop-color),
					transparent
				);
			}
		}

		&:hover {
			transform: perspective(1000px) rotateX(var(--rot-x)) rotateY(var(--rot-y)) scale(1.01);
			border-color: var(--border-hover);
		}
	}
</style>

```

## File: src/lib/components/Carrousel/Carrousel.svelte
```svelte
<script lang="ts">
	import { onMount } from 'svelte';
	import type { Skill } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import UIcon from '../Icon/UIcon.svelte';

	export let items: Array<Skill> = [];
	const delay = 2000;

	let element: HTMLElement;

	let timeout: unknown;
	let index = 0;
	let toRight = true;

	$: {
		if (element) {
			element.scroll({
				left: index * 150,
				behavior: 'smooth'
			});
		}
	}

	const slide = (right: boolean) => {
		if (right) {
			if (index < items.length - 1) {
				index = index + 1;
			} else {
				index = index - 1;
				toRight = false;
			}
		} else {
			if (index > 0) {
				index = index - 1;
			} else {
				index = index + 1;
				toRight = true;
			}
		}
	};

	const toggle = (right: boolean) => {
		clearTimeout(timeout as number);

		timeout = setTimeout(() => {
			slide(right);

			toggle(toRight);
		}, delay);
	};

	const toggleLeft = () => {
		clearTimeout(timeout as number);
		toRight = false;
		slide(false);
		toggle(toRight);
	};

	const toggleRight = () => {
		clearTimeout(timeout as number);
		toRight = true;
		slide(true);
		toggle(toRight);
	};

	onMount(() => {
		toggle(true);
	});
</script>

<div class="carrousel flex-[0.5] row-center">
	<button
		class="row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"
		on:click={toggleLeft}
		on:keyup
		on:keydown
		on:keypress
	>
		<UIcon icon="i-carbon-chevron-left" />
	</button>

	<div bind:this={element} class="row overflow-hidden box-content w-150px">
		{#each items as item}
			<div class="box-content w-150px p-15px col-center">
				<img class="w-120px h-120px aspect-square" src={getAssetURL(item.logo)} alt={item.name} />
				<span class="text-center m-t-20px">{item.name}</span>
			</div>
		{/each}
	</div>

	<button
		class="row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"
		on:click={toggleRight}
		on:keyup
		on:keydown
		on:keypress
	>
		<UIcon icon="i-carbon-chevron-right" />
	</button>
</div>

```

## File: src/lib/components/Chip/Chip.svelte
```svelte
<script lang="ts">
	import { onMount } from 'svelte';

	let el: HTMLElement;

	export let active = false;
	export let size = 'auto';
	export let classes = '';
	export let href = '';

	$: className = `row-center cursor-pointer py-[5px] px-[15px] m-[2.5px] decoration-none inline-block border-[1px] border-solid border-[var(--border)] rounded-[20px] tracking-wider text-[0.9em] text-[var(--tertiary-text)] duration-[150ms] font-light  ${
		active
			? 'bg-[var(--accent)] hover:bg-[var(--accent-hover)]'
			: 'bg-transparent hover:bg-[var(--main-hover)]'
	} ${classes}`;

	onMount(() => {
		el.style.setProperty('--size', size);
	});
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={href ? 'a' : 'button'}
	bind:this={el}
	{href}
	class={className}
	on:click
	on:keydown
	on:keypress
	on:keyup
>
	<slot />
</svelte:element>

```

## File: src/lib/components/Chip/ChipIcon.svelte
```svelte
<script lang="ts">
	import { theme } from '$lib/stores/theme';

	export let name = '';
	export let logo = '';
	export let inverted = false;
	export let grayscale = true;

	export let href: string | undefined = undefined;
</script>

<svelte:element
	this={href ? 'a' : 'div'}
	{href}
	class={`chip-icon row-center relative text-inherit decoration-none p-10px m-r-5px m-b-5px border-1px border-solid border-[var(--border)] hover:border-[var(--border-hover)] rounded-10px hover:z-5 ${
		href ? 'cursor-pointer' : 'cursor-help'
	} ${grayscale ? 'grayscale-65 hover:grayscale-0' : ''}`}
	data-help={name}
>
	{#if $$slots.default}
		<slot />
	{:else}
		<img
			class={`w-15px h-15px ${inverted ? 'invert-100' : ''}`}
			class:chip-icon-logo-inverted={$theme && inverted}
			src={logo}
			alt={name}
		/>
	{/if}
</svelte:element>

<style lang="scss">
	.chip-icon {
		&:hover {
			border-color: var(--border-hover);

			&:hover:after {
				content: attr(data-help);
				display: inline-block;
				position: absolute;
				width: max-content;
				background-color: var(--secondary);
				padding: 5px 10px;
				left: 10px;
				top: calc(100% + 0px);
				border: 1px solid var(--border);
				border-radius: 15px;
			}
		}

		&-logo {
			height: 15px;
			width: 15px;

			&-inverted {
				filter: invert(100);
			}
		}
	}
</style>

```

## File: src/lib/components/Chip/Footer/Footer.svelte
```svelte
<script lang="ts">
	import { base } from '$app/paths';
	import { items } from '@data/navbar';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	//console.log(page.get_store);
	const currentYear = new Date().getFullYear();
	const footerNavItems = items.filter((item) => item.position === 'footer');

	let currentRoute = '';
	let showFooter = false;
	let isHomePage = false;
	$: pathname = '';
	onMount(() => {
		pathname = $page?.url?.pathname ?? '';
	});

	$: isHomePage = pathname === '/';

	
	onMount(() => {
		const handleScroll = () => {
			if (!isHomePage) {
				const scrollPosition = window.innerHeight + window.scrollY;
				const documentHeight = document.documentElement.offsetHeight;
				showFooter = scrollPosition >= documentHeight - 10;
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

{#if !isHomePage && showFooter}
	<footer transition:slide={{ duration: 300, axis: 'y' }} class="fixed bottom-0 left-0 right-0 text-white">
		<div class="container mx-auto px-0">
			
			<nav class="h-8 flex items-end pb-0" style="margin-bottom:-10px">
				<ul class="pl-0 my-2 flex justify-center items-center w-full list-none" >
					{#each footerNavItems as item}
						<li class="mx-6">
							<a
								href={`${base}${item.to}`}
								class="flex items-center no-underline text-white group"
								class:active={pathname === item.to}
							>
								<!-- <UIcon icon={item.icon} classes="mr-2 text-xl" /> -->
								<span class="group-hover:text-gray-300 transition-colors duration-200 text-xs text-gray-400">
									{item.title}
								</span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
		<div class="py-1">
			<div class="container mx-auto px-2">
				<p class="text-center text-xs">
					Copyright © {currentYear} webAlly | All rights reserved.
				</p>
			</div>
		</div>
	</footer>
{/if}

<style>
	footer {
		z-index: 10;
	}
	.active {
		color: theme('colors.gray.300');
	}
</style>
```

## File: src/lib/components/ExperienceCard/ExperienceCard.svelte
```svelte
<script lang="ts">
	import type { Experience } from '$lib/types';
	import { computeExactDuration, getMonthName, getTimeDiff } from '$lib/utils/helpers';
	import Card from '../Card/Card.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';
	import Chip from '../Chip/Chip.svelte';
	import CardDivider from '../Card/CardDivider.svelte';

	export let experience: Experience;

	// const months = getTimeDiff(experience.period.from, experience.period.to);
	const exactDuration = computeExactDuration(experience.period.from, experience.period.to);

	const from = `${getMonthName(
		experience.period.from.getMonth()
	)} ${experience.period.from.getFullYear()}`;
	const to = experience.period.to
		? `${getMonthName(experience.period.to.getMonth())} ${experience.period.to.getFullYear()}`
		: 'Present';

	const period = `${from} - ${to}`;

	$: info = [
		{ label: experience.company, icon: 'i-carbon-building' },
		{ label: experience.location, icon: 'i-carbon-location' },
		{ label: experience.contract, icon: 'i-carbon-hourglass' }
	] as const;
</script>

<Card
	margin="0px 0px 20px 0px"
	tiltDegree={2}
	href={`${base}/experience/${experience.slug}`}
	color={experience.color}
>
	<div class="col md:flex-row items-start gap-5 md:gap-1">
		<CardLogo src={getAssetURL(experience.logo)} alt={experience.company} size={55} />
		<div class="col ml-0 md:ml-[20px] gap-3 w-full">
			<div class="col ">
				<h3
					class="flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"
				>
					<CardTitle title={`${experience.name}`} />
				</h3>
				<div class="row flex-wrap items-start m-b-2 gap-1 text-0.9em font-300">
					{#each info as item}
						<Chip>
							<UIcon icon={item.icon} />
							<span class="m-l-1">{item.label}</span>
						</Chip>
					{/each}
				</div>
			</div>
			<div class="text-[var(--text)] text-[0.9em]">
				<div class="row items-center gap-2">
					<UIcon icon="i-carbon-calendar" classes="text-1.25em" />
					{period}
				</div>
				<CardDivider />
				<div class="row items-center gap-2">
					<UIcon icon="i-carbon-time" classes="text-1.25em" />
					{exactDuration}
				</div>
				<CardDivider />
			</div>
			<div class="experience-description text-[0.9em]">{experience.shortDescription}</div>
			<div class="flex flex-row flex-wrap mt-5">
				{#each experience.skills as skill}
					<ChipIcon
						logo={getAssetURL(skill.logo)}
						name={skill.name}
						href={`${base}/skills/${skill.slug}`}
					/>
				{/each}
			</div>
		</div>
	</div>
</Card>

```

## File: src/lib/components/Icon/Icon.svelte
```svelte
<script lang="ts">
	import type { Icons } from '$lib/utils';
	import { viewBox } from './Icons';

	let el: SVGElement;

	export let size = '30px';
	export let color = 'var(--main-text)';

	export let icon: Icons;
</script>

<svg
	bind:this={el}
	class="inline-block"
	viewBox={viewBox(icon)}
	fill={color}
	height={size}
	width={size}
>
	<path d={icon} />
</svg>

```

## File: src/lib/components/Icon/UIcon.svelte
```svelte
<script lang="ts">
	export let icon: `i-${string}-${string}` | undefined = undefined;

	export let classes = '';
</script>

<i class={`${icon} ${classes}`} />

```

## File: src/lib/components/Icon/Icons.ts
```ts
import { Icons } from '$lib/utils';

export const viewBox = (icon: Icons) => {
	if (icon === Icons.Youtube) return '0 0 461.001 461.001';

	if (icon === Icons.Facebook) return '0 0 408.788 408.788';

	return [Icons.GitHub, Icons.Search, Icons.Code].includes(icon) ? '0 0 16 16' : '0 0 24 24';
};

```

## File: src/lib/components/Input/Input.svelte
```svelte
<script lang="ts">
	export let value = '';
	export let placeholder = '';
    let inputElement: HTMLInputElement;

    function focus() {
        inputElement.focus();
    }

    export { focus };
</script>

<input
	bind:this={inputElement}
	bind:value
	{placeholder}
	class="text-[inherit] bg-transparent border-[1px] border-solid border-[var(--border)] px-[20px] py-[10px] rounded-[15px] flex-1 text-[1.15em] "
/>

<style lang="scss">
	input {
		&:focus {
			outline: 1px solid var(--border-hover);
			background-color: var(--main-hover);
		}
	}
</style>

```

## File: src/lib/components/MainTitle/MainTitle.svelte
```svelte
<script lang="ts">
	export let classes = '';
</script>

<h1
	class={`font-[var(--title-f)] font-black tracking-[4px] text-center text-2.5em sm:text-[3em] md:text-[3.5em] lg:text-[4em] ${classes}`}
	style="background: linear-gradient(var(--main-text), var(--accent-text-hover)); -webkit-background-clip: text; background-clip: text;"
>
	<slot />
</h1>

```

## File: src/lib/components/NavMenu/NavMenu.svelte
```svelte
<script lang="ts">
	import { page } from '$app/stores';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { items } from '@data/navbar';
	import * as HOME from '@data/home';
	import { onMount } from 'svelte';

	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';
		
	let currentRoute = '';
	$: if ($page) {
		currentRoute = $page?.url?.pathname;
	}

	let expanded = false;
	let isScrolling = false;
	let scrollTimeout: ReturnType<typeof setTimeout>;
	let navVisible = true;

	const toggleExpanded = (v?: boolean) => {
		if (typeof v === 'undefined') {
			expanded = !expanded;
		} else {
			expanded = v;
		}
	};

	function getHref(item:any) {
		return item.external ? item.to : `${base}${item.to}`;
	}

	$: headerItems = items.filter((item) => item.position === 'header');
	$: verticalItems = items.filter((item) => item.position === 'sidebar');

	function handleScroll() {
		isScrolling = true;
		navVisible = true;
		clearTimeout(scrollTimeout);

		scrollTimeout = setTimeout(() => {
			isScrolling = false;
			if (window.innerWidth <= 768) { // Only hide on mobile
				navVisible = false;
			}
		}, 3000);
	}

	function showNav() {
		navVisible = true;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="nav-menu">
	<nav class="container flex flex-row items-center text-sm">
		<a
			href={`${base}/`}
			class="nav-menu-left decoration-none w-auto md:w-150px lg:w-auto row flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]"
		>
			<UIcon icon="i-carbon-code" classes="text-2em" />
			<span
				class="ml-2 mt--2 text-md font-bold hidden md:inline overflow-hidden whitespace-nowrap text-ellipsis"
				>{HOME.name} {HOME.lastName}</span
			>
		</a>
		<div class="flex-1 block overflow-hidden md:hidden whitespace-nowrap text-ellipsis text-center">
			{HOME.name}
			{HOME.lastName}
		</div>
		<div class="flex-row flex-1 self-center h-full justify-center hidden md:flex">
			{#each headerItems as item (item.title)}
				<a 
					href={getHref(item)} 
					class="nav-menu-item !text-[var(--secondary-text)]"
					target={item.external ? "_blank" : undefined}
					rel={item.external ? "noopener noreferrer" : undefined}
				>
					<UIcon icon={item.icon} classes="text-1.3em" />
					<span class="nav-menu-item-label">{item.title}</span>
				</a>
			{/each}
		</div>
		<div
			class="row h-full justify-center items-stretch m-l-auto md:m-l-0 w-auto md:w-150px gap-1 text-1.15em"
		>
			<div class="row hidden md:flex">
				<a
					href={`${base}/search`}
					class="text-inherit col-center self-stretch px-2 hover:bg-[color:var(--main-hover)]"
				>
					<UIcon icon="i-carbon-search" />
				</a>
				<!--
				<button
					class="bg-transparent text-1em border-none cursor-pointer hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2"
					on:click={() => toggleTheme()}
				>
					{#if $theme}
						<UIcon icon="i-carbon-moon" />
					{:else}
						<UIcon icon="i-carbon-sun" />
					{/if}
				</button>
				-->
			</div>
			<div class="col-center md:hidden h-full hover:bg-[var(--main-hover)] cursor-pointer">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class={`nav-bar-mobile-btn col-center ${expanded ? 'nav-bar-mobile-btn-expanded' : ''}`}
					on:keydown
					on:keyup
					on:click={() => toggleExpanded()}
				/>
			</div>
		</div>
	</nav>
	<div class={`nav-menu-mobile ${expanded ? 'nav-menu-mobile-open' : ''} md:hidden`}>
		<div class="flex-col flex-1 self-center h-full justify-center m-t-7">
			{#each headerItems as item}
				<a
					href={getHref(item)}
					class="nav-menu-item !text-[var(--secondary-text)] gap-5"
					target={item.external ? "_blank" : undefined}
					rel={item.external ? "noopener noreferrer" : undefined}
					on:click={() => toggleExpanded(false)}
				>	
					<UIcon icon={item.icon} classes="text-1.3em" />
					<span class="">{item.title}</span>
				</a>
			{/each}
		</div>
		<div class="col gap-2 m-t-7">
			<a
				href={`${base}/search`}
				class="text-inherit text-sm decoration-none px-6 py-3 gap-2 row hover:bg-[color:var(--main-hover)]"
				on:click={() => toggleExpanded(false)}
			>
				<UIcon icon="i-carbon-search" />
				<span>Search</span>
			</a>
			<!--
			<button
				class="bg-transparent text-1em border-none cursor-pointer px-6 py-3 gap-2 row hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2"
				on:click={() => toggleTheme()}
			>
				{#if $theme}
					<UIcon icon="i-carbon-moon" />
					<span>Dark Theme</span>
				{:else}
					<UIcon icon="i-carbon-sun" />
					<span>Light Theme</span>
				{/if}
			</button>
			-->
		</div>
	</div>
	<div
		class="vertical-nav flex flex-col fixed right-0 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out"
		class:hidden={!navVisible}
	>
		{#each verticalItems as item}
			<a
				href={`${base}${item.to}`}
				class="nav-menu-item vertical text-xs !text-[var(--secondary-text)] mb-3"
				class:active={currentRoute === item.to}
			>
				<UIcon icon={item.icon} classes="text-1.3em icon-wrapper" />
				<span class="nav-menu-item-label vertival-nav-menu-item-label mr-1" style="margin-left: 5px">{item.title}</span>
			</a>
		{/each}
	</div>
</div>

{#if !navVisible}
	<button
		class="show-nav-button fixed right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-l-sm"
		on:click={showNav}
	>
		<UIcon icon="i-carbon-arrow-left" classes="text-1.5em; " />
	</button>
{/if}

<style lang="scss">
	.nav-menu {
		display: flex;
		justify-content: center;
		position: sticky;
		top: 0px;
		z-index: 10;
		padding: 0px 10px;
		height: 50px;
		border-bottom: 1px solid var(--secondary);
		background-color: var(--main);

		&-item {
			text-decoration: none;
			font-weight: 400;
			padding: 10px 20px;
			color: inherit;
			display: flex;
			align-items: center;
			border-bottom: 3px solid transparent;

			&-label {
				margin-left: 10px;

				@media (max-width: 950px) {
					& {
						display: none;
					}
				}
			}

			&:hover {
				opacity: 1.0;
				background-color: var(--main-hover);
			}
		}
	}

	.nav-menu-mobile {
		z-index: -1;
		max-height: calc(100vh - 50px - 1px);
		min-height: calc(100vh - 50px - 1px);
		width: 100%;
		position: absolute;
		background-color: var(--main);
		top: 51px;
		transform: translateY(-100vh);
		transition-property: transform opacity;
		transition: 400ms ease;
		opacity: 0;

		&-open {
			opacity: 1;
			transform: translateY(0vh);
		}
	}

	.icon-wrapper {
		padding: 15px;
	}

	.vertical-nav {
		z-index: 20;
		display: flex;
		transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
		opacity: 0.5;

		&.hidden {
			transform: translate(100%, -50%);
		}

		&:hover, &.scrolling {
			opacity: 1;
		}
	}

	.nav-menu-item.vertical {
		writing-mode: vertical-rl;
		transform: rotate(180deg);
		padding: 5px 5px;
		background-color: var(--main);
		border-radius: 0 0 0 0;
		border-right: 1px solid #2e2e2e;
		border-top: 1px solid #2e2e2e;
		border-bottom: 1px solid #2e2e2e;
		box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
		min-height: 80px;
		transition: opacity 0.3s ease-in-out;

		&:hover {
			background-color: var(--main-hover);
			opacity: 1;
		}

		&.active {
			background-color: var(--accent);
			color: var(--main);
		}

		.nav-menu-item-label {
			margin-top: 10px;
			display: inline-block;
		}
	}

	.show-nav-button {
		z-index: 19;
		cursor: pointer;
	}

	@media (max-width: 768px) {
		.vertical-nav {
			transition: transform 0.3s ease-in-out;
		}
	}
</style>
```

## File: src/lib/components/ProjectCard/ProjectCard.svelte
```svelte
<script lang="ts">
	import { computeExactDuration, countMonths, getMonthName } from '$lib/utils/helpers';
	import Chip from '../Chip/Chip.svelte';
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import type { Project } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';

	export let project: Project;
	$: months = countMonths(project.period.from, project.period.to);
	// $: period = `${months} month${months > 1 ? 's' : ''}`;
	// $: period = `${getTimeDiff(
	// 	project.period.from,
	// 	project.period.to ?? new Date(Date.now() + 1000 * 60 * 60 * 24)
	// )}`;
	$: period = computeExactDuration(project.period.from, project.period.to);
	$: from = `${getMonthName(project.period.from.getMonth())} ${project.period.from.getFullYear()}`;
	$: to = project.period.to
		? `${getMonthName(project.period.to.getMonth())} ${project.period.to.getFullYear()}`
		: 'now';
</script>

<Card color={project.color} href={`${base}/projects/${project.slug}`}>
	<CardLogo alt={project.name} src={getAssetURL(project.logo)} size={40} radius={'0'} />
	<div class="m-t-20px row justify-between items-center">
		<CardTitle title={project.name} />
		<div class="row">
			{#each project.links as link}
				<CardLink label={link.label ?? ''} to={link.to} />
			{/each}
		</div>
	</div>
	<CardDivider />
	<div class="col m-b-15px justify-between text-[var(--secondary-text)] text-0.85em">
		<div class="row items-center gap-2">
			<UIcon icon="i-carbon-assembly-cluster" classes="text-1.25em" />
			<p>{project.type}</p>
		</div>
		<CardDivider />
		<div class="row items-center gap-2">
			<UIcon icon="i-carbon-time" classes="text-1.25em" />
			<p>{period}</p>
		</div>
		<CardDivider />
	</div>
	<div class="col sm:h-100px md:h-160px">
		<p class="text-[0.9em] text-[var(--secondary-text)] m-t-20px m-b-40px flex-1 line-clamp-3">
			{project.shortDescription}
		</p>
	</div>
	<div class="row justify-between text-0.8em font-400">
		<Chip>{from}</Chip>
		{#if from !== to}
			<Chip>{to}</Chip>
		{/if}
	</div>
	<CardDivider />
	<div class="row flex-wrap">
		{#each project.skills as tech}
			<ChipIcon
				logo={getAssetURL(tech.logo)}
				name={tech.name}
				href={`${base}/skills/${tech.slug}`}
			/>
		{/each}
	</div>
</Card>

```

## File: src/lib/components/Screenshot/Screenshot.svelte
```svelte
<script lang="ts">
	import UIcon from '../Icon/UIcon.svelte';

	export let screenshot: { src: string; label: string } | undefined = undefined;

	export let onClose = () => {
		screenshot = undefined;
	};

	$: show = typeof screenshot !== 'undefined';
</script>

{#if show}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="fixed inset-0px top-51px bg-[#000000dd] col-center p-50px"
		on:click={onClose}
		on:click={(e) => e.stopPropagation()}
		on:keydown
		on:keypress
		on:keyup
		on:keyup
	>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="w-full w-100% md:w-80% lg:w-70% col text-center gap-5 bg-[var(--main)] border-solid border-1px border-[var(--border)] p-5 rounded-xl"
			on:click={(e) => e.stopPropagation()}
			on:keydown
			on:keypress
			on:keyup
			on:keyup
		>
			<div class="self-end">
				<button
					class="cursor-pointer aspect-square rounded-full border-[var(--border)] border-1px bg-[transparent] border-solid hover:border-[var(--border-hover)]"
					on:click={onClose}
					on:keydown
					on:keypress
					on:keyup
				>
					<UIcon icon={'i-carbon-close'} />
				</button>
			</div>
			<div
				class="aspect-video col bg-contain w-100% rounded-xl bg-no-repeat bg-contains bg-center"
				style={`background-image: url(${screenshot?.src});`}
			/>
			<p
				class="font-italic m-t-auto m-x-auto bg-[var(--main-60)] border-solid border-1px border-[var(--border)] p-x-5 p-2 rounded-xl"
			>
				{screenshot?.label}
			</p>
		</div>
	</div>
{/if}

```

## File: src/lib/components/ServiceCard/ServiceCard.svelte
```svelte
<script lang="ts">
    import Card from '../Card/Card.svelte';
    import CardTitle from '../Card/CardTitle.svelte';
    import CardDivider from '../Card/CardDivider.svelte';
    import CardLogo from '../Card/CardLogo.svelte';
    import type { Service } from '$lib/types';
    import { getAssetURL } from '$lib/data/assets';
    import { base } from '$app/paths';
    import UIcon from '../Icon/UIcon.svelte';

    export let service: Service;
    export let gradientColor: string; // The hex color for the gradient overlay

    // Function to generate a linear gradient
    const generateGradient = (color: string) => {
        return `linear-gradient(45deg, ${color} 0%, transparent 100%)`;
    };
</script>

<Card color={service.color} href={`${base}/services/${service.slug}`}>
    <div class="card-content">
        <!-- Background image with gradient overlay -->
        <div class="background-image" 
             style="background-image: url({getAssetURL(service.image)});">
            <!-- Gradient overlay on top of the background image -->
            <div class="gradient-overlay" style="background: {generateGradient(gradientColor)};"></div>
        </div>
        <div class="content-overlay">
            <div class="m-t-20px row justify-between items-center">
                <CardTitle title={service.name} />
            </div>
            <CardDivider />
            <div class="col m-b-15px justify-between text-[var(--secondary-text)] text-0.85em">
                <div class="row items-center gap-2">
                    <UIcon icon="i-carbon-assembly-cluster" classes="text-1.25em" />
                    <p>{service.type}</p>
                </div>
            </div>
            <div class="col sm:h-100px md:h-160px">
                <p class="text-[0.9em] text-[var(--secondary-text)] m-t-20px m-b-40px flex-1 line-clamp-3">
                    {service.shortDescription}
                </p>
            </div>
        </div>
    </div>
</Card>

<style lang="scss">
    .card-content {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: inherit;
    }

    .background-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        filter: grayscale(100%); /* Apply grayscale to the background image */
    }

    .gradient-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: none;
        background-size: cover;
        z-index: 2;
        opacity: 0.6; /* Adjust opacity for visibility */
    }

    .content-overlay {
        position: relative;
        z-index: 3;
        padding: 1rem;  /* Adjust padding as needed */
    }

    :global(.card-content .content-overlay *) {
        color: var(--text-color, #ffffff) !important;
    }
</style>

```

## File: src/lib/components/layouts/default-layout.svelte
```svelte
<script>
    export let frontmatter = {};
    
    // Fallback title if frontmatter.title is not available
    $: title = frontmatter.title || 'Default Title';
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<article>
    <h1>{title}</h1>
    
    {#if frontmatter.author || frontmatter.date}
        <p>
            {#if frontmatter.author}By {frontmatter.author}{/if}
            {#if frontmatter.author && frontmatter.date} on {/if}
            {#if frontmatter.date}{new Date(frontmatter.date).toLocaleDateString()}{/if}
        </p>
    {/if}
    
    <slot />
    
    {#if frontmatter.relatedPages && frontmatter.relatedPages.length > 0}
        <h2>Related Pages</h2>
        <ul>
            {#each frontmatter.relatedPages as page}
                <li><a href={page.url}>{page.title}</a></li>
            {/each}
        </ul>
    {/if}
</article>

<style>
    article {
        max-width: 65ch;
        margin: 0 auto;
        padding: 1rem;
    }
</style>
```

## File: src/lib/components/layouts/components-layout.svelte
```svelte
<script lang="ts">
	// @ts-nocheck

	import './github-markdown-light.css';
	import Breadcrumb from './components/breadcrumb.svelte';

	export let title = 'Change me';
	export let breadcrumb = [];
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Breadcrumb pathChain={breadcrumb} />
<main class="markdown-body" style="max-width: 60ch; margin: auto; padding-top: 2.5rem;">
	<h1>{title}</h1>
	<slot />
</main>
```

## File: src/lib/data/assets.ts
```ts
import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';
import { base } from '$app/paths';

const gh = (file: string) => `${base}/${file}`;

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);

const Assets = {
	AdonisJs: gh('logos/adonis.png'),
	AfterEffects: gh('logos/after-effects.svg'),
	AI: gh('logos/ai.svg'),
	Android: gh('logos/android.png'),
	Angular: gh('logos/angular.png'),
	AWS: gh('logos/aws.svg'),
	Azure: gh('logos/azure.svg'),
	Bootstrap: gh('logos/bootstrap.svg'),
	C: gh('logos/c.svg'),
	Celery: gh('logos/celery.svg'),
	CircleCI: gh('logos/circleci.svg'),
	Cpp: gh('logos/cpp.svg'),
	CSS: gh('logos/css.svg'),
	Csharp: gh('logos/csharp.svg'),
	Dart: gh('logos/dart.png'),
	Deep: gh('logos/pandas.svg'),
	Delphi: gh('logos/delphi.png'),
	DeepLearning: gh('logos/deep-learning.svg'),
	Deno: gh('logos/deno.png'),
	Django: gh('logos/django.svg'),
	Docker: gh('logos/docker.svg'),
	Electron: gh('logos/electron.png'),
	ExpressJs: gh('logos/express.png'),
	FastApi: gh('logos/fastapi.svg'),
	Fastify: gh('logos/fastify.svg'),
	Firebase: gh('logos/firebase.png'),
	Flask: gh('logos/flask.svg'),
	Flutter: gh('logos/flutter.svg'),
	GCP: gh('logos/gcp.svg'),
	Git: gh('logos/git.svg'),
	Go: gh('logos/go.svg'),
	HTML: gh('logos/html.svg'),
	Illustrator: gh('logos/illustrator.svg'),
	InDesign: gh('logos/indesign.svg'),
	IOS: gh('logos/ios.svg'),
	Java: gh('logos/java.png'),
	JavaScript: gh('logos/js.png'),
	Jenkins: gh('logos/jenkins.svg'),
	Jest: gh('logos/jest.png'),
	Kafka: gh('logos/kafka.svg'),
	Kotlin: gh('logos/kotlin.png'),
	Kubernetes: gh('logos/kubernetes.svg'),
	Laravel: gh('logos/laravel.svg'),
	MachineLearning: gh('logos/machine-learning.svg'),
	MongoDB: gh('logos/mongodb.svg'),
	MSSQL: gh('logos/mssql.svg'),
	MySQL: gh('logos/mysql.svg'),
	NestJs: gh('logos/nest.svg'),
	Neo4j: gh('logos/neo4j.svg'),
	Nginx: gh('logos/nginx.svg'),
	NodeJs: gh('logos/node.png'),
	Nuxt: gh('logos/nuxt.png'),
	Numpy: gh('logos/numpy.svg'),
	Oracle: gh('logos/oracle.svg'),
	PHP: gh('logos/php.svg'),
	Photoshop: gh('logos/photoshop.svg'),
	Postcss: gh('logos/postcss.svg'),
	PostgreSQL: gh('logos/postgres.png'),
	Premiere: gh('logos/premiere.svg'),
	Python: gh('logos/python.png'),
	Quasar: gh('logos/quasar.svg'),
	RabbitMQ: gh('logos/rabbitmq.svg'),
	ReactJs: gh('logos/react.svg'),
	ReactNative: gh('logos/react-native.svg'),
	Redis: gh('logos/redis.svg'),
	Ruvy: gh('logos/ruvy.svg'),
	Rust: gh('logos/rust.svg'),
	Sass: gh('logos/sass.png'),
	Scrapy: gh('logos/scrapy.png'),
	Selenium: gh('logos/selenium.svg'),
	SolidJs: gh('logos/solid.svg'),
	Solid: gh('logos/solid.svg'),
	Svelte: gh('logos/svelte.png'),
	Symfony: gh('logos/symfony.svg'),
	Tailwind: gh('logos/tailwind.svg'),
	Travis: gh('logos/travis.svg'),
	TypeScript: gh('logos/ts.png'),
	Unity: gh('logos/unity.svg'),
	Unknown: gh('logos/unknown.svg'),
	Unocss: gh('logos/unocss.svg'),
	Unreal: gh('logos/unreal.svg'),
	Vite: gh('logos/vite.png'),
	Vitest: gh('logos/vitest.svg'),
	VueJs: gh('logos/vue.png'),
	Xamarin: gh('logos/xamarin.svg'),

	ACSA: gh('logos/acsa.png'),
	Tribake: gh('logos/tribake.png'),
	AngloAmerican: gh('logos/angloAmerican.svg'),
	APBCO: gh('logos/apbco.png'),
	BrinantSecurity: gh('logos/brinant.png'),
	CavalierAbattoirs: gh('logos/cavalier.png'),
	CityLodge: gh('logos/clhg.png'),
	Exxaro: gh('logos/exxaro.png'),
	FNB: gh('logos/fnb.png'),
	TheOrientHotel: gh('logos/theorient.png'),
	LegacyUnderwriting: gh('logos/legacy.png'),
	ImvulaICD: gh('logos/imvula.png'),
	ImperialLogistics: gh('logos/imperial.png'),
	TheCarShop: gh('logos/carshop.png'),
	PrincipalSoftware: gh('logos/d6.png'),
	PNA: gh('logos/pna.png'),

	Webally: gh('logos/webally.svg'),
	VaneSystems: gh('logos/vane.png'),
	PCPalace: gh('logos/pcpalace.jpg'),
	RAM: gh('logos/ram.png'),
	CNN: gh('logos/cnn.png'),
	Nexus: gh('logos/nexus.svg'),
	Pageworks: gh('logos/pageworks.png'),
	WhatsApp: gh('logos/whatsapp.svg'),

	BOOST_TEAM_SPEED: gh('services/boost-your-teams-speed.png'),
    FINISH_PROJECTS: gh('services/finish-unfinished-projects.png'),
    HANDLE_TEDIOUS_STUFF: gh('services/handle-the-tedious-stuff.png'),
    EXTRA_HANDS_NEW_PROJECT: gh('services/extra-hands-for-new-projects.png'),
    FLEXIBLE_FREELANCE_HELP: gh('services/flexible-freelance-help.png'),
    FINISH_HALF_BUILT_APP: gh('services/finish-half-built-apps.png'),
    DEBUGGING_OPTIMIZATION: gh('services/debugging-and-optimization.png'),
    FUTURE_PROOF_CODEBASE: gh('services/future-proof-your-codebase.png'),
    SCALE_PROJECTS: gh('services/scale-your-projects.png'),
    COMPLEX_INTEGRATIONS: gh('services/complex-integrations.png'),
	
	CHATBOT_DEVELOPMENT: gh('services/chatbot-development.png'),
    MACHINE_LEARNING_MODELS: gh('services/machine-learning-models.png'),
    AI_CONSULTING: gh('services/ai-consulting.png'),
    COMPUTER_VISION: gh('services/computer-vision.png'),
    NATURAL_LANGUAGE_PROCESSING: gh('services/natural-language-processing.png'),
	FULL_STACK_DEV: gh('services/full-stack-dev.png'),
    MOBILE_DEV: gh('services/mobile-dev.png'),
    DB_ADMIN: gh('services/db-admin.png'),
    SERVER_ADMIN: gh('services/server-admin.png'),
    HOSTING: gh('services/hosting.png'),
	INTELLIGENT_AUTOMATION: gh('services/intelligent-automation.png'),
	AI_BUSINESS_INTELLIGENCE: gh('services/ai-business-intelligence.png'),
	WORKFLOW_OPTIMIZATION: gh('services/workflow-optimization.png'),
	PREDICTIVE_ANALYTICS: gh('services/predictive-analytics.png'),
	CUSTOM_AI_SOLUTIONS: gh('services/custom-ai.png')
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset?.dark : asset.light;
};

```

## File: src/lib/data/navbar.ts
```ts
// src/lib/data/navbar.ts
export const items = [
	{ 
		title: 'Skills', 
		to: '/skills', 
		icon: 'i-carbon-software-resource-cluster', 
		position: 'header', 
		row: 1, 
		external: false 
	},
	{ 
		title: 'Experience', 
		to: '/experience', 
		icon: 'i-carbon-development', 
		position: 'header', 
		row: 1, 
		external: false 
	},
	{ 
		title: 'Projects', 
		to: '/projects', 
		icon: 'i-carbon-cube', 
		position: 'header', 
		row: 1, 
		external: false 
	},
	{ 
		title: 'Services', 
		to: '/services', 
		icon: 'i-carbon-service-desk', 
		position: 'header', 
		row: 1, 
		external: false 
	},
	
	//{ title: 'Team', to: '/team', icon: 'i-carbon-user', position: 'header', row: 1, external: false },
	{ 
		title: 'Resume', 
		to: 'https://cv.webally.co.za', 
		icon: 'i-carbon-document', 
		position: 'header', 
		external: true 
	},
	{ 
		title: 'Documentation', 
		to: '/documentation', 
		icon: 'i-carbon-document', 
		position: 'header', 
		external: false 
	},
	{ 
		title: 'AI Tools', 
		to: '/tools/ai', 
		icon: 'i-carbon-machine-learning-model', 
		position: 'sidebar', 
		external: false 
	},
	{ 
		title: 'Data Tools', 
		to: '/tools/data', 
		icon: 'i-carbon-cube', 
		position: 'sidebar', 
		external: false 
	},
	{ 
		title: 'Code Tools', 
		to: '/tools/code', 
		icon: 'i-carbon-code', 
		position: 'sidebar', 
		external: false 
	},
	{ 
		title: 'Terms & Conditions', 
		to: '/terms', 
		icon: 'i-carbon-document-signed', 
		position: 'footer', 
		external: false 
	},
	{ 
		title: 'Privacy Policy', 
		to: '/privacy', 
		icon: 'i-carbon-document', 
		position: 'footer', 
		external: false 
	}
	//{ title: 'Contact Us', to: '/contact', icon: 'i-carbon-phone', position: 'header', external: false },
	//{ title: 'Playground', to: '/playground', icon: 'i-carbon-game-console', position: 'sidebar' },
] as const;

export const footerItems = [

] as const;
```

## File: src/lib/data/projects.ts
```ts
// // src/lib/data/projects.ts

import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: "acsa-3d-airport-explore",
		color: "#0077be",
		description: "The ACSA 3D Airport Explore project was an innovative and engaging 3D game developed for Airport Company South Africa (ACSA). This interactive experience was designed to revolutionize the way users interact with and understand airport environments.<br><br><b>Key Features:</b><br>• Meticulously crafted virtual airport environment<br>• Gamified exploration of various airport areas<br>• Reward system for completing challenges<br>• Educational content balanced with entertainment value<br><br>The project successfully created a unique tool that served as both an innovative marketing asset for ACSA and an educational resource for travelers, potentially reducing anxiety and improving the overall airport experience for users.",
		shortDescription: "Interactive 3D airport exploration game for ACSA, designed to familiarize users with airport layouts and enhance engagement through an immersive virtual experience.",
		links: [{ to: "https://www.airports.co.za/", label: "ACSA Website" }],
		logo: Assets.ACSA,
		name: "ACSA 3D Airport Explore",
		period: {
			from: new Date(2018, 0, 1),
			to: new Date(2018, 3, 15)
		},
		skills: getSkills('unity', 'csharp', 'js', 'html', 'css'),
		type: "Interactive 3D Game",
		company: "Airport Company South Africa"
	},
	{
		slug: "anglo-american-email-marketing",
		color: "#ff0000",
		description: "The Anglo American Email Marketing project was a sophisticated digital communication initiative developed for Anglo American, a global leader in the mining industry. This comprehensive system managed and distributed personalized electronic communications to various stakeholders.<br><br><b>Key Components:</b><br>• Suite of responsive email templates<br>• Advanced personalized invitation system<br>• Robust tracking and analytics capabilities<br>• Stringent security measures for data protection<br><br>The result was a powerful, flexible, and secure email marketing solution that significantly enhanced Anglo American's digital communication capabilities, strengthening stakeholder relationships and reinforcing their position as a forward-thinking leader in the mining industry.",
		shortDescription: "Email marketing and electronic invitation system for Anglo American, featuring responsive templates and personalized communication management for enhanced corporate outreach.",
		links: [{ to: "https://www.angloamerican.com/", label: "Anglo American Website" }],
		logo: Assets.AngloAmerican,
		name: "Anglo American Email Marketing",
		period: {
			from: new Date(2017, 0, 1),
			to: new Date(2017, 2, 17)
		},
		skills: getSkills('html', 'css', 'js', 'php'),
		type: "Email Marketing",
		company: "Anglo American"
	},
	{
		slug: "apbco-asset-management",
		color: "#4a90e2",
		description: "The APBCO Asset Management System was a bespoke software solution developed for APBCO Insurance to revolutionize their approach to managing company assets. This project addressed complex challenges of asset tracking, maintenance scheduling, and comprehensive reporting.<br><br><b>Key Features:</b><br>• Centralized asset database with detailed information<br>• Real-time asset tracking using barcode and RFID technology<br>• Maintenance management module with automated alerts<br>• Comprehensive reporting suite for decision-making<br>• User-friendly interface for easy asset management<br><br>The implementation resulted in significant improvements in APBCO's operational efficiency, including real-time visibility into asset status, streamlined maintenance processes, improved budgeting accuracy, and enhanced resource allocation.",
		shortDescription: "Asset Management System for APBCO Insurance, designed to streamline tracking and reporting of company assets while significantly enhancing efficiency and resource allocation.",
		links: [{ to: "https://www.apbco.co.za/", label: "APBCO Website" }],
		logo: Assets.APBCO,
		name: "APBCO Asset Management System",
		period: {
			from: new Date(2016, 5, 1),
			to: new Date(2016, 10, 30)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: "Asset Management Software",
		company: "APBCO Insurance"
	},
	{
		slug: "brinant-security-management",
		color: "#2c3e50",
		description: "The Brinant Security Management System was a comprehensive software solution developed to address the complex operational needs of Brinant Security, a prominent player in the security services industry. This system revolutionized the company's approach to shift management, staff scheduling, and overall operational efficiency.<br><br><b>Key Features:</b><br>• Advanced scheduling module with intelligent algorithms<br>• Time tracking with multiple clock-in methods<br>• Staff allocation based on skills and client preferences<br>• Robust reporting suite for operational insights<br>• Integrated messaging system for quick communication<br>• Mobile app for on-the-go access<br><br>• Mobile app development for staff access<br><br>The implementation resulted in significant improvements, including a reduction in scheduling time, decrease in overtime costs, and improvement in overall staff utilization. The system enhanced both employee and client satisfaction through fair shift distribution and consistent assignment of appropriately skilled personnel.",
		shortDescription: "Shift and Staff Management System for Brinant Security, designed to optimize scheduling, enhance time tracking accuracy and improve staff allocation, resulting improved service delivery.",
		links: [{ to: "https://www.brinantsecurity.co.za/", label: "Brinant Security Website" }],
		logo: Assets.BrinantSecurity,
		name: "Brinant Security Management System",
		period: {
			from: new Date(2015, 1, 1),
			to: new Date(2015, 7, 12)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: "Staff Management Software",
		company: "Brinant Security"
	},
	{
		slug: "cavalier-abattoirs-systems",
		color: "#8e44ad",
		description: "The Cavalier Abattoirs Integrated Systems project was an ambitious and comprehensive initiative to revolutionize the operational infrastructure of Cavalier Abattoirs. This large-scale project involved the development and integration of multiple specialized systems, each addressing a critical aspect of the company's operations.<br><br><b>Key Components:</b><br>• Quote and Invoice System<br>• Vehicle Tracking System<br>• Vehicle Maintenance System<br>• Process Management System<br>• Stock Management System<br>• Document Management System<br><br>• Custom API development for system integration<br>• Implementation of message queue for smooth data flow<br><br>The implementation of this integrated system suite resulted in transformative benefits, including an 80% reduction in manual data entry, 60% reduction in processing errors, and significantly improved real-time visibility for agile decision-making. The enhanced tracking and documentation capabilities also strengthened the company's compliance posture and supported its commitment to quality assurance.",
		shortDescription: "Suite of integrated management systems for Cavalier Abattoirs, quotes and invoices, vehicle tracking and maintenance, process management and documentation",
		links: [{ to: "https://www.cavalier.co.za/", label: "Cavalier Abattoirs Website" }],
		logo: Assets.CavalierAbattoirs,
		name: "Cavalier Abattoirs Integrated Systems",
		period: {
			from: new Date(2009, 0, 1),
			to: new Date(2016, 11, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css', 'laravel'),
		type: "Integrated Management Software",
		company: "Cavalier Abattoirs"
	},
	{
		slug: "city-lodge-booking-system",
		color: "#e74c3c",
		description: "The City Lodge Online Booking System project was a comprehensive digital transformation initiative for the City Lodge Hotel Group, one of South Africa's leading hotel chains. This project aimed to revolutionize the group's online presence and dramatically improve the customer booking experience.<br><br><b>Key Features:</b><br>• Modern, responsive website design<br>• Sophisticated online booking system<br>• Real-time integration with property management system<br>• Advanced yield management module<br>• User account feature for personalized experience<br>• Secure payment gateway<br><br>• Custom API development for system integration<br>• Implementation of security measures for data protection<br><br>The implementation resulted in significant improvements, including a 35% increase in online bookings within six months, 15% increase in average revenue per available room, and marked improvement in customer satisfaction scores for the booking process. The system not only modernized City Lodge's online presence but also provided a powerful tool for improving operational efficiency and driving revenue growth.",
		shortDescription: "Website and online booking platform for City Lodge Hotel Group, offering seamless reservation experiences for customers while fully integrating with existing hotel management systems",
		links: [{ to: "https://www.citylodge.co.za/", label: "City Lodge Website" }],
		logo: Assets.CityLodge,
		name: "City Lodge Online Booking System",
		period: {
			from: new Date(2016, 6, 1),
			to: new Date(2017, 1, 30)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css', 'laravel'),
		type: "Web Development & Booking System",
		company: "City Lodge Hotel Group"
	},
	{
		slug: "exxaro-systems",
		color: "#3498db",
		description: "The Exxaro Internal Systems project was a comprehensive initiative aimed at revolutionizing internal communication, employee engagement, and knowledge management within Exxaro, a leading South African resources company.<br><br><b>Key Components:</b><br>• Internal Communication System<br>• Online Quiz Game<br>• IZone Staff Empowerment System<br><br><b>Features:</b><br>• User-friendly intranet portal<br>• Gamified learning platform<br>• Idea submission and peer recognition system<br>• Annual quiz competition with live event<br><br>• Custom hardware development for live quiz event<br><br>The implementation had a transformative effect on Exxaro's corporate culture, with over 80% of staff actively participating in online quiz games and IZone activities. The systems dramatically improved information flow, boosted morale, and fostered a sense of camaraderie across departments. The IZone system also proved valuable in identifying and nurturing talent within the organization.",
		shortDescription: "Advanced communication platform, an engaging online quiz game, and an innovative staff empowerment system (IZone), all designed to enhance employee engagement, knowledge sharing, and corporate culture.",
		links: [{ to: "https://www.exxaro.com/", label: "Exxaro Website" }],
		logo: Assets.Exxaro,
		name: "Exxaro Internal Systems",
		period: {
			from: new Date(2012, 0, 1),
			to: new Date(2013, 11, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css', 'csharp', 'unity'),
		type: "Internal Systems & Gamification",
		company: "Exxaro"
	},
	{
		slug: "fnb-corporate-identity",
		color: "#f39c12",
		description: "The FNB Corporate Identity Development project was a pivotal initiative aimed at revitalizing and standardizing the visual brand identity of First National Bank (FNB), one of South Africa's 'big four' banks.<br><br><b>Key Components:</b><br>• Refinement of FNB's iconic logo<br>• Comprehensive brand guideline document<br>• Custom typeface development<br>• Imagery and photography style guidelines<br>• Digital application of new identity<br>• Print media templates<br>• Environmental design guidelines<br><br>• Digital asset management system<br><br>The impact of the new corporate identity was significant, with brand recognition scores improving by 15% within the first year of implementation. Employee surveys indicated a stronger sense of pride in the FNB brand, while customer feedback highlighted a perception of FNB as more modern and innovative. The cohesive application of the new identity across all touchpoints strengthened FNB's market position and supported its messaging around being a forward-thinking, customer-centric bank.",
		shortDescription: "Comprehensive corporate identity project for First National Bank (FNB), focusing on creating a cohesive and modern visual language across digital and print media",
		links: [{ to: "https://www.fnb.co.za/", label: "FNB Website" }],
		logo: Assets.FNB,
		name: "FNB Corporate Identity Development",
		period: {
			from: new Date(2011, 6, 1),
			to: new Date(2011, 12, 31)
		},
		skills: getSkills('photoshop', 'illustrator', 'indesign'),
		type: "Corporate Identity Design",
		company: "First National Bank"
	},
	{
		slug: "imperial-logistics-systems",
		color: "#27ae60",
		description: "The Imperial Logistics Management Systems project was a large-scale initiative aimed at modernizing and optimizing two critical aspects of Imperial Logistics' operations: document management and human resources.<br><br><b>Key Components:</b><br>• Document Management System (DMS)<br>• HR Management System (HRMS)<br><br><b>DMS Features:</b><br>• Centralized digital repository<br>• Advanced search functionality<br>• Version control<br>• Role-based access control<br>• Workflow automation<br>• OCR capabilities<br><br><b>HRMS Features:</b><br>• Recruitment and onboarding module<br>• Employee database<br>• Performance management tools<br>• Training and development module<br>• Leave management system<br>• Payroll integration<br>• Employee self-service portal<br><br>• API development for system integration<br><br>The implementation brought significant improvements, including a 70% reduction in document search time, 50% reduction in HR administrative tasks, and improved accuracy of employee data. The systems also enhanced employee satisfaction and supported more informed decision-making in areas such as recruitment and talent development.",
		shortDescription: "Comprehensive suite of management systems for Imperial Logistics, featuring an advanced Document Management System and a robust HR Management System, designed to streamline information handling, enhance human resource processes, and boost overall operational efficiency across the organization.",
		links: [{ to: "https://www.imperiallogistics.com/", label: "Imperial Logistics Website" }],
		logo: Assets.ImperialLogistics,
		name: "Imperial Logistics Management Systems",
		period: {
			from: new Date(2010, 0, 1),
			to: new Date(2011, 5, 30)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: "Document & HR Management Software",
		company: "Imperial Logistics"
	},
	{
		slug: "imvula-icd-server-monitoring",
		color: "#9b59b6",
		description: "The Imvula ICD Server Monitoring System was a sophisticated software solution developed to address the critical need for real-time monitoring and management of Imvula ICD's server infrastructure.<br><br><b>Key Features:</b><br>• Real-time Monitoring Dashboard<br>• Customizable Alerting System<br>• Predictive Analytics<br>• Automated Response Scripts<br>• Comprehensive Reporting<br>• Network Topology Mapping<br>• Log Analysis<br>• API Integration<br><br><br>The implementation resulted in significant improvements, including a reduction in server downtime, decrease in mean time to resolve (MTTR) for server issues, and reduction in unnecessary hardware expenditure. The system's comprehensive logging and reporting capabilities also supported Imvula ICD's compliance efforts with various industry regulations.",
		shortDescription: "Advanced Server Monitoring System for Imvula ICD, providing real-time oversight of server infrastructure, comprehensive alerting capabilities, and detailed reporting functionalities to ensure optimal performance, rapid issue resolution, and proactive IT management across the organization.",
		links: [{ to: "https://www.imvulaicd.co.za/", label: "Imvula ICD Website" }],
		logo: Assets.ImvulaICD,
		name: "Imvula ICD Server Monitoring System",
		period: {
			from: new Date(2009, 6, 1),
			to: new Date(2009, 12, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css', 'python'),
		type: "Server Monitoring Software",
		company: "Imvula ICD"
	},
	{
		slug: "legacy-underwriting-portfolio-management",
		color: "#34495e",
		description: "The Legacy Underwriting Portfolio Management System was a bespoke software solution developed to revolutionize the underwriting process for Legacy Underwriting Managers, a prominent player in the insurance industry.<br><br><b>Key Features:</b><br>• Advanced risk assessment module<br>• Policy Administration<br>• Risk Scoring and Segmentation<br>• Portfolio Analysis Dashboard<br>• Predictive Modeling<br>• Reinsurance Management<br>• Regulatory Compliance Tracking<br>• Claims Analysis<br>• What-If Scenario Modeling<br>• Automated Underwriting<br><br>• API development for system integration<br>• Implementation of strong security measures<br><br>The implementation brought significant improvements, including a 60% reduction in quote generation time, 90% reduction in errors, 25% reduction in loss ratios, and a 15% improvement in overall portfolio performance. The system not only improved Legacy Underwriting Managers' operational efficiency but also positioned the company for sustained growth and competitiveness in the dynamic insurance market.",
		shortDescription: "Sophisticated Portfolio Management System for Legacy Underwriting Managers, integrating advanced risk assessment tools, comprehensive reporting capabilities, and streamlined underwriting processes to enhance decision-making, improve portfolio performance, and optimize insurance operations.",
		links: [{ to: "https://www.lum.co.za/", label: "Legacy Underwriting Managers Website" }],
		logo: Assets.LegacyUnderwriting,
		name: "Legacy Underwriting Portfolio Management",
		period: {
			from: new Date(2008, 0, 1),
			to: new Date(2008, 11, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: "Portfolio Management Software",
		company: "Legacy Underwriting Managers"
	},
	{
		slug: "pna",
		color: "#e67e22",
		description: "The PNA Management and E-Commerce Systems project was an ambitious initiative aimed at digitally transforming PNA, a well-known South African retailer specializing in stationery, books, and art supplies.<br><br><b>Product Management System Features:</b><br>• Centralized Product Catalog<br>• Inventory Tracking<br>• Supplier Management<br>• Barcode and SKU Management<br>• Product Performance Analytics<br>• Category and Attribute Management<br>• Price Management<br>• Integration with Point of Sale (POS) Systems<br><br><b>E-Commerce Platform Features:</b><br>• User-friendly Product Browsing<br>• Personalized User Accounts<br>• Secure Payment Gateway<br>• Order Management System<br>• Customer Service Integration<br>• Responsive Design<br>• Content Management System (CMS)<br>• Integration with Social Media<br>• Analytics and Reporting<br><br>• Implementation of security measures including PCI DSS compliance<br><br>The implementation resulted in significant improvements, including an 80% reduction in stock discrepancies, 50% reduction in inventory-related tasks, and online sales growing to represent 25% of total revenue within the first year. The project not only streamlined operations but also positioned PNA for sustained growth in an increasingly digital retail landscape.",
		shortDescription: "Comprehensive digital solution for PNA, encompassing an advanced Product Management System and a user-friendly E-Commerce platform, designed to streamline inventory control, enhance online sales capabilities, and significantly expand PNA's market reach in the competitive retail sector.",
		links: [{ to: "https://www.pna.co.za/", label: "PNA Website" }],
		logo: Assets.PNA,
		name: "PNA Management and E-Commerce Systems",
		period: {
			from: new Date(2007, 0, 1),
			to: new Date(2007, 11, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: "Product Management & E-Commerce",
		company: "PNA"
	},
	{
		slug: "principal-software",
		color: "#1abc9c",
		description: "The Principal Software Version Control System project was an innovative initiative to develop a bespoke version control solution tailored to the unique needs and workflows of Principal Software, a leading software development company.<br><br><b>Key Features:</b><br>• Advanced Branching and Merging<br>• Code Review Integration<br>• CI/CD Support<br>• Project Management Integration<br>• Custom Workflow Enforcement<br>• Intelligent Codebase Analysis<br>• Advanced Search and Navigation<br>• Visual Diff and Merge Tools<br>• Customizable Notifications and Alerts<br>• Audit Trail and Compliance Features<br>• Large File Handling<br>• Integration with Development Tools<br><br>• Strong security measures including encryption and multi-factor authentication<br><br>The implementation brought significant improvements, including a 40% increase in collaboration between team members, 30% reduction in code integration issues, 50% reduction in post-release bugs, and a 25% increase in developer productivity. The system not only improved code management but also boosted overall productivity, code quality, and team collaboration.",
		shortDescription: "Customized Version Control System for Principal Software, featuring efficient code versioning, advanced branching capabilities, and collaborative tools tailored to the company's specific development workflow, enhancing team productivity and software quality management.",
		links: [{ to: "https://www.principalsoftware.co.za/", label: "Principal Software Website" }],
		logo: Assets.PrincipalSoftware,
		name: "Principal Software (Now D6)",
		period: {
			from: new Date(2006, 6, 1),
			to: new Date(2006, 12, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: "Version Control Software",
		company: "Principal Software"
	},
	{
		slug: "the-car-shop-website",
		color: "#d35400",
		description: "The Car Shop Website project was a strategic initiative to establish a strong online presence for The Car Shop, a prominent automotive dealership.<br><br><b>Key Features:</b><br>• Advanced Vehicle Inventory System<br>• Detailed Vehicle Pages with 360-degree views<br>• Vehicle Comparison Tool<br>• Financing Calculator<br>• Service Scheduling System<br>• Trade-In Value Estimator<br>• Customer Reviews and Testimonials<br>• Blog and News Section<br>• Integration with Social Media<br>• Mobile Responsiveness<br>• Live Chat Support<br>• Analytics and Reporting<br><br>• Custom Content Management System (CMS)<br>• Implementation of lazy loading and image optimization<br>• HTTPS encryption and security measures<br><br>The launch of the new website brought significant improvements, including a 150% increase in organic search traffic, 75% increase in time spent on the website, 200% increase in online inquiries and test drive requests, and a 25% increase in overall sales. The project not only enhanced The Car Shop's online presence but also significantly contributed to its business growth and customer satisfaction.",
		shortDescription: "Comprehensive website development project for The Car Shop, featuring an intuitive interface for showcasing vehicle inventory, integrated services information, and advanced customer engagement tools, designed to enhance online presence and streamline the car buying process for potential customers.",
		links: [{ to: "https://www.thecarshop.co.za/", label: "The Car Shop Website" }],
		logo: Assets.TheCarShop,
		name: "The Car Shop Website",
		period: {
			from: new Date(2006, 0, 1),
			to: new Date(2006, 5, 30)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: "Web Development",
		company: "The Car Shop"
	},
	{
		slug: "the-orient-hotel-website",
		color: "#c0392b",
		description: "The Orient Hotel Website project was an ambitious endeavor to create a digital showcase for The Orient Hotel, a luxury accommodation renowned for its exquisite blend of Eastern and Western aesthetics.<br><br><b>Key Features:</b><br>• Stunning Visual Gallery<br>• Detailed Room Descriptions with virtual tours<br>• Integrated Booking System<br>• Dynamic Pricing Display<br>• Dining and Spa Sections<br>• Events and Weddings Portal<br>• Interactive Map and Location Information<br>• Multilingual Support<br>• Blog and Newsletter<br>• Customer Reviews Integration<br>• Mobile Responsiveness<br>• Virtual Concierge<br><br>• Implementation of strong security measures and PCI DSS compliance<br><br>The launch of the new website resulted in a significant increase in direct bookings, increased in user engagement, improvement in booking conversion rate, and enhanced brand perception as a luxury destination. The project not only improved The Orient Hotel's digital presence but also contributed significantly to its business growth and guest satisfaction.",
		shortDescription: "Sophisticated website development for The Orient Hotel, featuring elegant design, comprehensive amenity showcases, detailed room information, and an integrated booking system. This online platform enhances the hotel's digital presence, streamlines reservations, and offers an immersive preview of the luxury experience awaiting guests.",
		links: [{ to: "https://www.theorient.co.za/", label: "The Orient Hotel Website" }],
		logo: Assets.TheOrientHotel,
		name: "The Orient Hotel Website",
		period: {
			from: new Date(2005, 6, 1),
			to: new Date(2005, 12, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: "Web Development",
		company: "The Orient Hotel"
	},
	{
		slug: "tribake-quote-invoice-system",
		color: "#27ae60",
		description: "The Tribake Quote and Invoice System project was a bespoke software development initiative aimed at revolutionizing the financial operations of Tribake, a leading bakery equipment supplier.<br><br><b>Key Features:</b><br>• Customer Relationship Management (CRM) Integration<br>• Dynamic Quote Generator<br>• Quote Versioning and Approval Workflow<br>• Automated Invoice Generation<br>• Flexible Pricing and Discounting<br>• Tax Calculation and Compliance<br>• Payment Tracking and Reminders<br>• Integration with Accounting Software<br>• Reporting and Analytics<br>• Document Management<br>• Multi-Currency Support<br>• Mobile Access<br><br>• API development for integration with existing systems<br>• Implementation of strong security measures<br><br>The implementation brought significant improvements, including a reduction in quote generation time, reduction in errors, reduction in average days sales outstanding (DSO), and the ability to handle a increase in sales volume without expanding administrative staff. The system not only improved Tribake's operational efficiency but also enhanced customer satisfaction and provided valuable business insights.",
		shortDescription: "Comprehensive Quote and Invoice System for Tribake, integrating advanced customer information management, streamlined quote generation, automated invoicing processes, and robust payment tracking. This tailored solution enhances operational efficiency, improves cash flow management, and elevates the overall customer experience in Tribake's business operations.",
		links: [{ to: "https://www.tribake.co.za/", label: "Tribake Website" }],
		logo: Assets.Tribake,
		name: "Tribake Quote and Invoice System",
		period: {
			from: new Date(2005, 0, 1),
			to: new Date(2005, 5, 30)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: "Quote and Invoice Software",
		company: "Tribake"
	}
];

export const title = 'Projects';
```

## File: src/lib/data/resume.ts
```ts
export const data = '';

export const title = 'Resumé';

```

## File: src/lib/data/search.ts
```ts
export const title = 'Search';

```

## File: src/lib/data/app.ts
```ts
export const titleSuffix = 'Your Ally in Online Efficiency';

```

## File: src/lib/data/documentation-sites.ts
```ts
// src/lib/data/documentation-sites.ts

export const title = 'Documentation Sites';

export const sites = [
    {
        name: 'AI Docs',
        url: 'https://ai.docs.webally.co.za',
        description: 'Artificial Intelligence tools and docs'
    },
    {
        name: 'Android Docs',
        url: 'https://android.docs.webally.co.za',
        description: 'Using Linux tools on your android device'
    },
    {
        name: 'ARM Docs',
        url: 'https://arm.docs.webally.co.za',
        description: 'Raspberry Pi Documentation'
    },
    {
        name: 'Backups & Config',
        url: 'https://backup.docs.webally.co.za',
        description: 'Incremental Config backups with GIT'
    },
    {
        name: 'Bash',
        url: 'https://bash.docs.webally.co.za',
        description: 'Bash Scripting'
    },
    {
        name: 'Crypto & Mining',
        url: 'https://crypto.docs.webally.co.za',
        description: 'Crypto, Mining, Decentralization & Web 3.0'
    },
    {
        name: 'Development',
        url: 'https://dev.docs.webally.co.za',
        description: 'Web / Terminal / Windows / App Development'
    },
    {
        name: 'DNS, MX Records, CNAME',
        url: 'https://dns.docs.webally.co.za',
        description: 'Domain Name System, Mail exchange etc'
    },
    {
        name: 'GitHub Gists',
        url: 'https://gist.docs.webally.co.za',
        description: 'GitHub Gists (Code snippets and scripts)'
    },
    {
        name: 'Hacking & Info Gathering',
        url: 'https://hacking.docs.webally.co.za',
        description: 'Hacking, Information gathering, Spoofing'
    },
    {
        name: 'HeEPP',
        url: 'https://heepp.docs.webally.co.za',
        description: 'HeEPP Model View Controller Framework'
    },
    {
        name: 'JavaScript + (Node.js)',
        url: 'https://js.docs.webally.co.za',
        description: 'JavaScript Front and Backend (Node.js)'
    },
    {
        name: 'Kali Linux',
        url: 'https://kali.docs.webally.co.za',
        description: 'KALI Linux Docs & Setup'
    },
    {
        name: 'Mongo NoSQL DB',
        url: 'https://mongo.docs.webally.co.za',
        description: 'Eloquent model & Query builder for MongoDB'
    },
    {
        name: 'Notes and Links',
        url: 'https://notes.docs.webally.co.za',
        description: 'Some things I need to remember with links'
    },
    {
        name: 'Open Source',
        url: 'https://opensource.docs.webally.co.za',
        description: 'What is awesome, how you can contribute'
    },
    {
        name: 'Projects',
        url: 'https://projects.docs.webally.co.za',
        description: 'Some notes on projects I worked on'
    },
    {
        name: 'PHP Development',
        url: 'https://php.docs.webally.co.za',
        description: 'PHP Backend Development'
    },
    {
        name: 'Perl Development',
        url: 'https://perl.docs.webally.co.za',
        description: 'Perl Server Side Development'
    },
    {
        name: 'Repositories',
        url: 'https://repos.docs.webally.co.za',
        description: 'GitHub Repos worth looking at'
    },
    {
        name: 'Reporting & BI',
        url: 'https://reports.docs.webally.co.za',
        description: 'Reporting & BI with Jasper Reports'
    },
    {
        name: 'Software as a Service',
        url: 'https://saas.docs.webally.co.za',
        description: 'Services I can recommend or created myself'
    },
    {
        name: 'Server & Software Setup',
        url: 'https://setup.docs.webally.co.za',
        description: 'Server & Software Setup'
    },
    {
        name: 'Tips & Productivity',
        url: 'https://tips.docs.webally.co.za',
        description: 'Tips on creating Productive workflows'
    },
    {
        name: 'Tools and Self Hosted',
        url: 'https://tools.docs.webally.co.za',
        description: 'Terminal and Web-Applications'
    },
    {
        name: 'Trading & Crypto',
        url: 'https://trading.docs.webally.co.za',
        description: 'Trading and Crypto Markets'
    },
    {
        name: 'Troubleshooting Docs',
        url: 'https://troubleshoot.docs.webally.co.za',
        description: 'Troubleshooting Documentation'
    },
    {
        name: 'Windows Tips',
        url: 'https://win.docs.webally.co.za',
        description: 'Windows 10 & 11 Tips and Tricks'
    }
];
```

## File: src/lib/data/education.ts
```ts
import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Tunisia',
		logo: Assets.Unknown,
		name: '',
		organization: 'ISTIC',
		period: { from: new Date(2020, 0, 1), to: new Date(2022, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	},
	{
		degree: 'PhD of Computer Science',
		description: '',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'MIT',
		period: { from: new Date(2023, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	}
];

export const title = 'Education';

```

## File: src/lib/data/home.ts
```ts
// src/lib/data/home.ts

import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'webAlly';

export const lastName = '';

export const description = 'Senior Full-Stack Web / Mobile / AI / Desktop Developer.  Passionate about creating awesome tools and applications for clients and other developers';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/charlpcronje' },
	{ platform: Platform.Linkedin, link: 'https://www.linkedin.com/in/charlpcronje' },
	{ platform: Platform.Twitter, link: 'https://twitter.com/CPCharlCronje' },
	{ platform: Platform.Email, link: 'charl@webally.co.za' },
	{ platform: Platform.WhatsApp, link: 'https://wa.me/27680097995' }
];

export const skills = getSkills(
	'js', 'ts', 'php', 'python', 'java', 'kotlin', 'csharp', 'cpp',
	'html', 'css', 'sass', 'react', 'vue', 'angular', 'svelte',
	'nodejs', 'express', 'laravel', 'symfony', 'django', 'flask',
	'mongodb', 'mysql', 'postgresql', 'mssql', 'oracle',
	'docker', 'kubernetes', 'aws', 'azure', 'gcp',
	'git', 'jenkins', 'travis', 'circleci',
	'android', 'ios', 'react-native', 'flutter',
	'unity', 'unreal',
	'ai', 'machine-learning', 'deep-learning',
	'photoshop', 'illustrator', 'indesign', 'after-effects'
);
```

## File: src/lib/data/services.ts
```ts
// src/lib/data/services.ts
import type { Service, serviceCategory } from '$lib/types';
import Assets from './assets';

export const categories: Array<serviceCategory> = [
    {
        slug: "development-support",
        name: "Development Support",
        shortDescription: "Accelerate your projects with expert development assistance.",
        services: [
            {
                slug: "boost-team-speed",
                color: "#4A90E2",
                shortDescription: "Tackle those delayed projects by adding a fresh set of expert hands. I'll help your team hit those critical milestones faster.",
                image: Assets.BOOST_TEAM_SPEED,
                name: "Boost Your Team's Speed",
                type: "Development Support"
            },
            {
                slug: "extra-hands-new-project",
                color: "#7ED321",
                shortDescription: "Whether you're kicking off a new build or need assistance planning, I can help from the earliest stages, ensuring everything runs smoothly.",
                image: Assets.EXTRA_HANDS_NEW_PROJECT,
                name: "Extra Hands for New Projects",
                type: "Project Initiation"
            },
            {
                slug: "flexible-freelance-help",
                color: "#BD10E0",
                shortDescription: "Need someone on a flexible basis? I'm available for short-term or ongoing projects, adapting to your team's evolving needs.",
                image: Assets.FLEXIBLE_FREELANCE_HELP,
                name: "Flexible Freelance Help",
                type: "Flexible Support"
            },
            {
                slug: "dev",
                color: "#1E90FF",
                shortDescription: "Elevate your project with comprehensive full stack development expertise, from front-end to back-end and everything in between.",
                image: Assets.FULL_STACK_DEV,
                name: "Senior Full Stack Developer",
                type: "Development Support"
            },
            {
                slug: "mobile",
                color: "#32CD32",
                shortDescription: "Reach users on all major platforms with cross-platform mobile app development, ensuring a consistent experience across devices.",
                image: Assets.MOBILE_DEV,
                name: "Cross-Platform Mobile App Development",
                type: "Development Support"
            }
        ]
    },
    {
        slug: "project-completion",
        name: "Project Completion",
        shortDescription: "Turn unfinished projects into polished, market-ready products.",
        services: [
            {
                slug: "finish-projects",
                color: "#50E3C2",
                shortDescription: "Got an app or website stuck in development limbo? I specialize in jumping into existing code bases and delivering final results.",
                image: Assets.FINISH_PROJECTS,
                name: "Finish Unfinished Projects",
                type: "Project Completion"
            },
            {
                slug: "finish-half-built-app",
                color: "#9013FE",
                shortDescription: "Don't leave potential profit on the table with unfinished software. I'll help complete your half-built projects.",
                image: Assets.FINISH_HALF_BUILT_APP,
                name: "Finish Half-Built Apps",
                type: "Project Completion"
            }
        ]
    },
    {
        slug: "optimization-maintenance",
        name: "Optimization & Maintenance",
        shortDescription: "Enhance performance and ensure long-term reliability of your software.",
        services: [
            {
                slug: "handle-tedious-stuff",
                color: "#F5A623",
                shortDescription: "Let your core team focus on what they do best while I take care of repetitive tasks like bug fixing, refactoring, or testing.",
                image: Assets.HANDLE_TEDIOUS_STUFF,
                name: "Handle the Tedious Stuff",
                type: "Maintenance & Optimization"
            },
            {
                slug: "debugging-optimization",
                color: "#D0021B",
                shortDescription: "Let's squash those bugs and optimize your code for better performance. You focus on the features—I'll handle the fixes.",
                image: Assets.DEBUGGING_OPTIMIZATION,
                name: "Debugging and Optimization",
                type: "Performance Enhancement"
            },
            {
                slug: "future-proof-codebase",
                color: "#4A4A4A",
                shortDescription: "Worried about tech debt? I can refactor your codebase to reduce future issues and ensure your systems stay scalable and reliable.",
                image: Assets.FUTURE_PROOF_CODEBASE,
                name: "Future-Proof Your Codebase",
                type: "Code Maintenance"
            }
        ]
    },
    {
        slug: "growth-scaling",
        name: "Growth & Scaling",
        shortDescription: "Support your business growth with scalable solutions and integrations.",
        services: [
            {
                slug: "scale-projects",
                color: "#8B572A",
                shortDescription: "If your business is growing faster than your team can handle, I'm here to take on extra work without slowing down progress.",
                image: Assets.SCALE_PROJECTS,
                name: "Scale Your Projects",
                type: "Growth Support"
            },
            {
                slug: "complex-integrations",
                color: "#417505",
                shortDescription: "Need help with intricate integrations or complex APIs? I have experience in making sure all systems communicate smoothly.",
                image: Assets.COMPLEX_INTEGRATIONS,
                name: "Complex Integrations",
                type: "System Integration"
            }
        ]
    },
    {
        slug: "ai-automation",
        name: "AI & Automation",
        shortDescription: "Leverage cutting-edge AI and automation to transform your business operations.",
        services: [
            {
                slug: "intelligent-automation",
                color: "#00A3E0",
                shortDescription: "Streamline your operations with custom automation strategies that eliminate repetitive tasks and boost productivity.",
                image: Assets.INTELLIGENT_AUTOMATION,
                name: "Intelligent Automation Solutions",
                type: "AI & Automation"
            },
            {
                slug: "ai-business-intelligence",
                color: "#FF6B6B",
                shortDescription: "Turn data into actionable insights with our AI-driven business intelligence solutions for smarter decision-making.",
                image: Assets.AI_BUSINESS_INTELLIGENCE,
                name: "AI-Powered Business Intelligence",
                type: "AI & Automation"
            },
            {
                slug: "custom-ai-solutions",
                color: "#4ECDC4",
                shortDescription: "From NLP to computer vision, we design AI applications tailored to your specific business needs.",
                image: Assets.CUSTOM_AI_SOLUTIONS,
                name: "Custom AI Solutions",
                type: "AI & Automation"
            },
            {
                slug: "workflow-optimization",
                color: "#FF9F1C",
                shortDescription: "Optimize your workflows with AI-driven consulting to identify key areas for growth and cost savings.",
                image: Assets.WORKFLOW_OPTIMIZATION,
                name: "Workflow Optimization & Automation Consulting",
                type: "AI & Automation"
            },
            {
                slug: "predictive-analytics",
                color: "#800080",
                shortDescription: "Stay ahead of market trends with AI-powered predictive analytics and forecasting models.",
                image: Assets.PREDICTIVE_ANALYTICS,
                name: "Predictive Analytics & Forecasting",
                type: "AI & Automation"
            },
            {
                slug: "chatbot-development",
                color: "#20B2AA",
                shortDescription: "Enhance customer engagement with intelligent chatbots powered by natural language processing.",
                image: Assets.CHATBOT_DEVELOPMENT,
                name: "AI Chatbot Development",
                type: "AI & Automation"
            },
            {
                slug: "machine-learning-models",
                color: "#FF4500",
                shortDescription: "Develop and deploy custom machine learning models to solve complex business problems.",
                image: Assets.MACHINE_LEARNING_MODELS,
                name: "Machine Learning Model Development",
                type: "AI & Automation"
            },
            {
                slug: "ai-consulting",
                color: "#DAA520",
                shortDescription: "Get expert guidance on integrating AI into your business strategy and processes.",
                image: Assets.AI_CONSULTING,
                name: "AI Strategy Consulting",
                type: "AI & Automation"
            },
            {
                slug: "computer-vision",
                color: "#008B8B",
                shortDescription: "Leverage computer vision technology for image and video analysis, object detection, and facial recognition.",
                image: Assets.COMPUTER_VISION,
                name: "Computer Vision Applications",
                type: "AI & Automation"
            },
            {
                slug: "natural-language-processing",
                color: "#9932CC",
                shortDescription: "Implement NLP solutions for text analysis, sentiment analysis, and language understanding.",
                image: Assets.NATURAL_LANGUAGE_PROCESSING,
                name: "Natural Language Processing Solutions",
                type: "AI & Automation"
            }
        ]
    },
    {
        slug: "infrastructure-services",
        name: "Infrastructure Services",
        shortDescription: "Ensure robust, efficient, and secure IT infrastructure for your business operations.",
        services: [
            {
                slug: "db_admin",
                color: "#FF4500",
                shortDescription: "Optimize your database performance, security, and reliability with expert database administration services.",
                image: Assets.DB_ADMIN,
                name: "Database Administration",
                type: "Infrastructure Services"
            },
            {
                slug: "server_admin",
                color: "#4B0082",
                shortDescription: "Keep your servers running at peak performance with professional server administration and management.",
                image: Assets.SERVER_ADMIN,
                name: "Server Administration",
                type: "Infrastructure Services"
            },
            {
                slug: "hosting",
                color: "#008080",
                shortDescription: "Reliable and scalable hosting solutions for your websites and applications, ensuring high uptime and performance.",
                image: Assets.HOSTING,
                name: "Website / Server Hosting",
                type: "Infrastructure Services"
            }
        ]
    }
];

export const items: Array<Service> = categories.flatMap(category => category.services);

export const title = 'Services';
```

## File: src/lib/stores/theme.ts
```ts
// src/lib/stores/theme.ts

import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const key = '@riadh-adrani-theme';

const themeMode = import.meta.env.VITE_THEME_MODE || 'switchable';

export const theme = writable<boolean>(themeMode === 'dark_only' ? true : false);

export const toggleTheme = (value?: boolean) => {
	if (themeMode === 'dark_only') {
		return; // Do nothing if theme is locked to dark mode
	}

	theme.update((currentTheme) => {
		const newTheme = typeof value === 'boolean' ? value : !currentTheme;
		updateLocalStorage(newTheme);
		document.querySelector(':root')?.setAttribute('data-theme', newTheme ? 'dark' : 'light');
		return newTheme;
	});
};

const updateLocalStorage = (value: boolean) => {
	if (browser) {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

export const onHydrated = () => {
	if (browser) {
		if (themeMode === 'dark_only') {
			document.querySelector(':root')?.setAttribute('data-theme', 'dark');
		} else {
			const fromStore = localStorage.getItem(key);
			if (!fromStore) {
				if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
					toggleTheme(true);
				} else {
					toggleTheme(false);
				}
			} else {
				toggleTheme(JSON.parse(fromStore));
			}
		}
	}
};
```

## File: src/lib/stores/loadingStore.js
```js
import { writable } from 'svelte/store';

export const loading = writable(true);
```

## File: src/lib/utils/customMarkdownParser.ts
```ts
// src/lib/utils/customMarkdownParser.ts
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
```

## File: src/lib/utils/reTypeParser.ts
```ts
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
```

## File: src/lib/layouts/default.svelte
```svelte
<script>
  export let title;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<main>
  <slot />
</main>
```

## File: src/routes/+layout.svelte
```svelte
<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import Analytics from '$lib/analytics.svelte';
	import 'uno.css';
	import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
	import Footer from '$lib/components/Chip/Footer/Footer.svelte';
	import '$lib/index.scss';
	import { onHydrated } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import { loading } from '$lib/stores/loadingStore';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import InstallPrompt from '$lib/components/InstallPrompt.svelte';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	
	
	// Function to show the loader
	function showLoader() {
		loading.set(true);
	}

	// Function to hide the loader
	function hideLoader() {
		setTimeout(() => loading.set(false), 500); // Add a slight delay to enhance UX
	}

	// Handle navigation events
	beforeNavigate(() => {
		showLoader();
	});

	afterNavigate(() => {
		hideLoader();
	});
	
	onMount(() => {
		onHydrated();
		setTimeout(() => {
			hideLoader();
		}, 1000);
	});
</script>
<Analytics />
<PageTransition />

<div class="body contents theme-dark flex flex-col min-h-screen">
	<NavMenu />
	<div class="content container flex-grow">
		<slot />
	</div>
	<Footer />
	<InstallPrompt />
</div>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		padding: 0px 0px;
	}

	.body {
		margin: 0px;
		background-color: var(--main);
		color: var(--main-text);
		font-family: var(--text-f);
		transition-duration: 200ms;
		letter-spacing: 1px;
	}

	:global(p) {
		margin: 0px;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 5px 0px;
	}
</style>
```

## File: src/routes/+layout.server.ts
```ts
export const prerender = true;
export const trailingSlash = 'always';
```

## File: src/routes/+page.svelte
```svelte
<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { titleSuffix } from '@data/app';
	import { links, description, lastName, name, title, skills } from '@data/home';
	import { items as skillsItems } from '@data/skills';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import { getPlatformIcon } from '$lib/utils';

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
</script>

<svelte:head>
	<title>webAlly | {useTitle(title, titleSuffix)}</title>
</svelte:head>
<div
	class="col self-center pr-2 flex-1 md:flex-row md:slef-between justify-center lg:justify-between items-center p-y-0px p-x-10px"
>
	<div class="md:flex-1 gap-10px">
		<MainTitle classes="md:text-left flex flex-col items-center md:items-baseline">
			<span class="text-5xl md:text-6xl">{name}</span>
			<span class="text-xl md:text-2xl whitespace-nowrap mt-1 md:mt-s">Charl&nbsp;Cronje</span>
		  </MainTitle>
		<p class="text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight">
			{description}
		</p>
		<div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">
			{#each links as link}
				<a
					class="decoration-none"
					href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={getPlatformIcon(link.platform)} color={'var(--accent-text)'} size={'20px'} />
				</a>
			{/each}
		</div>
	</div>
	<Carrousel items={skills ?? skillsItems} />
</div>
```

## File: src/routes/documentation/+page.svelte
```svelte
<!-- src/routes/documentation/+page.svelte -->
<script lang="ts">
	import { title, sites } from '$lib/data/documentation-sites';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
</script>

<CommonPage {title}>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each sites as site}
			<Card classes={['cursor-pointer']} href={site.url}>
				<div class="flex flex-col h-full">
					<h3 class="text-lg font-semibold mb-2">{site.name}</h3>
					<p class="text-sm flex-grow">{site.description}</p>
					<div class="flex justify-end mt-4">
						<UIcon icon="i-carbon-launch" classes="text-xl" />
					</div>
				</div>
			</Card>
		{/each}
	</div>
</CommonPage>

```

## File: src/routes/education/+page.svelte
```svelte
<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { getAssetURL } from '$lib/data/assets';

	import { title, items } from '@data/education';
	import type { Education } from '$lib/types';
	import { computeExactDuration, getTimeDiff } from '$lib/utils';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';

	let search = '';

	let result: Array<Education> = items;

	const onSearch = (ev: CustomEvent<{ search: string }>) => {
		const s = ev.detail.search;

		result = items.filter((it) => {
			return (
				it.degree.toLowerCase().includes(s) ||
				it.description.toLowerCase().includes(s) ||
				it.location.toLowerCase().includes(s) ||
				it.name.toLowerCase().includes(s) ||
				it.organization.toLowerCase().includes(s) ||
				it.subjects.some((it) => it.toLowerCase().includes(s))
			);
		});
	};
</script>

<SearchPage {title} {search} on:search={onSearch}>
	<div class="col items-center relative mt-10 flex-1">
		{#if result.length === 0}
			<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
				<UIcon icon="i-carbon-development" classes="text-3.5em" />
				<p class="font-300">Could not find anything...</p>
			</div>
		{:else}
			<div
				class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded"
			/>
			{#each result as education, index (education.slug)}
				<div
					class={`flex ${
						index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'
					} relative items-center w-full my-[10px]`}
				>
					<div class="flex-1 hidden lg:flex" />
					<div class="hidden lg:inline p-15px bg-[var(--main)] rounded">
						<UIcon icon="i-carbon-condition-point" />
					</div>
					<div class="col flex-1 items-stretch">
						<Card>
							<div class="flex-1 col gap-2 items-stretch">
								<img
									src={getAssetURL(education.logo)}
									alt={education.organization}
									height="50"
									width="50"
									class="mb-5"
								/>
								<div class="text-[1.3em]">{education.degree}</div>
								<div>{education.organization}</div>
								<div class="col text-[0.9em]">
									<CardDivider />
									<div class="row items-center gap-2">
										<UIcon icon="i-carbon-location" />
										{education.location}
									</div>
									<CardDivider />
									<div class="row items-center gap-2">
										<UIcon icon="i-carbon-time" />
										{computeExactDuration(education.period.from, education.period.to)}
									</div>
									<CardDivider />
								</div>
								<div class="row flex-wrap gap-1">
									{#each education.subjects as subject}
										<Chip>{subject}</Chip>
									{/each}
								</div>
							</div>
						</Card>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</SearchPage>

```

## File: src/routes/experience/+page.svelte
```svelte
<script lang="ts">
	import ExperienceCard from '$lib/components/ExperienceCard/ExperienceCard.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { items, title } from '@data/experience';
	import type { Experience } from '$lib/types';
	import { isBlank } from '@riadh-adrani/utils';

	let result: Array<Experience> = [...items];

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search;

		if (isBlank(query)) {
			result = items;
			return;
		}

		result = items.filter(
			(it) =>
				it.name.toLowerCase().includes(query) ||
				it.company.toLowerCase().includes(query) ||
				it.description.toLowerCase().includes(query)
		);
	};
</script>

<SearchPage {title} on:search={onSearch}>
	<div class="col items-center relative mt-10 flex-1">
		{#if result.length === 0}
			<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
				<UIcon icon="i-carbon-development" classes="text-3.5em" />
				<p class="font-300">Could not find anything...</p>
			</div>
		{:else}
			<div
				class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded"
			/>
			{#each result as job, index (job.slug)}
				<div
					class={`flex ${
						index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'
					} relative items-center w-full my-[10px]`}
				>
					<div class="flex-1 hidden lg:flex" />
					<div class="hidden lg:inline p-15px bg-[var(--main)] rounded">
						<UIcon icon="i-carbon-condition-point" classes="" />
					</div>
					<div class="flex-1 col items-stretch">
						<ExperienceCard experience={job} />
					</div>
				</div>
			{/each}
		{/if}
	</div>
</SearchPage>

```

## File: src/routes/experience/[slug]/+page.svelte
```svelte
<script lang="ts">
	import { base } from '$app/paths';
	import { getAssetURL } from '$lib/data/assets';
	import { title } from '@data/experience';
	import { getTimeDiff } from '$lib/utils';

	import type { Experience } from '$lib/types';

	import CardLogo from '$lib/components/Card/CardLogo.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import Banner from '$lib/components/Banner/Banner.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';

	export let data: { experience?: Experience };

	$: computedTitle = data.experience ? `${data.experience.name} - ${title}` : title;
</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden col flex-1">
	{#if data.experience === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not load experience data...</p>
		</div>
	{:else}
		<div class="flex flex-col items-center overflow-x-hidden">
			<Banner img={getAssetURL(data.experience.logo)}>
				<div class="col-center p-y-20">
					<div class="text-0.9em">
						<MainTitle>{data.experience.name}</MainTitle>
					</div>
					<p class="font-300 text-[var(--tertiary-text)] m-y-2 text-center">
						{data.experience.company} · {data.experience.location} · {data.experience.type}
					</p>
					<p class="font-300 text-0.9em text-[var(--tertiary-text)] m-y-2 text-center">
						{getTimeDiff(data.experience.period.from, data.experience.period.to)}
					</p>
					<div class="w-75%">
						<CardDivider />
					</div>
					<div class="row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2">
						{#each data.experience.links as item}
							<Chip href={item.to}>
								<div class="row-center gap-2">
									<UIcon icon="i-carbon-link" />
									<span>{item.label}</span>
								</div>
							</Chip>
						{/each}
					</div>
					<div class="row-center flex-wrap m-b-2">
						{#each data.experience.skills as item}
							<Chip
								classes="inline-flex flex-row items-center justify-center"
								href={`${base}/skills/${item.slug}`}
							>
								<CardLogo
									src={getAssetURL(item.logo)}
									alt={item.name}
									radius={'0px'}
									size={15}
									classes="mr-2"
								/>
								<span class="text-[0.9em]">{item.name}</span>
							</Chip>
						{/each}
					</div>
				</div>
			</Banner>
			<div class="pt-3 pb-1 overflow-x-hidden w-full">
				<div class="px-10px m-y-5">
					{#if data.experience.description}
						<Markdown
							content={data.experience.description ?? 'This place is yet to be filled...'}
						/>
					{:else}
						<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
							<UIcon icon="i-carbon-text-font" classes="text-3.5em" />
							<p class="font-300">No description...</p>
						</div>
					{/if}
				</div>
			</div>
		</div>
	{/if}
</div>

```

## File: src/routes/experience/[slug]/+page.ts
```ts
import { items } from '@data/experience';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const experience = items.find((item) => {
			return item.slug === params.slug;
		});

		return { experience };
	}
}

```

## File: src/routes/privacy/+page.svelte
```svelte
<!-- src/routes/privacy/+page.svelte -->
<script lang="ts">
	import CommonPage from '$lib/components/CommonPage.svelte';

	const title = 'Privacy Policy';
</script>

<CommonPage {title}>
	<div class="prose max-w-none">
		<h1>{title}</h1>
		<p>Last updated: {new Date().toLocaleDateString()}</p>

		<h2>1. Information We Collect</h2>
		<p>
			We collect information you provide directly to us, such as when you create or modify your
			account, request services, contact customer support, or otherwise communicate with us.
		</p>

		<h2>2. How We Use Your Information</h2>
		<p>
			We use the information we collect to provide, maintain, and improve our services, to develop
			new ones, and to protect webAlly and our users.
		</p>

		<h2>3. Information Sharing and Disclosure</h2>
		<p>
			We may share the information we collect with third parties for various purposes, including to:
			provide and improve our services, protect against fraud and abuse, and personalize content.
		</p>

		<h2>4. Data Retention</h2>
		<p>
			We retain the information we collect for as long as necessary to fulfill the purposes outlined
			in this privacy policy, unless a longer retention period is required or permitted by law.
		</p>

		<h2>5. Security</h2>
		<p>
			We take reasonable measures to help protect your personal information from loss, theft,
			misuse, unauthorized access, disclosure, alteration, and destruction.
		</p>

		<!-- Add more sections as needed -->
	</div>
</CommonPage>

```

## File: src/routes/projects/+page.svelte
```svelte
<script lang="ts">
	import { items, title } from '@data/projects';
	import * as skills from '@data/skills';
	import { onMount } from 'svelte';

	import type { Project, Skill } from '$lib/types';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import ProjectCard from '$lib/components/ProjectCard/ProjectCard.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	interface SkillFilter extends Skill {
		isSelected?: boolean;
	}

	let filters: Array<SkillFilter> = skills.items.filter((it) => {
		return items.some((project) => project.skills.some((skill) => skill.slug === it.slug));
	});

	let search = '';
	let displayed: Array<Project> = [];

	const isSelected = (slug: string): boolean => {
		return filters.some((item) => item.slug === slug && item.isSelected);
	};

	const onSelected = (slug: string) => {
		filters = filters.map((tech) => {
			if (tech.slug === slug) {
				tech.isSelected = !isSelected(slug);
			}

			return tech;
		});
	};

	$: {
		displayed = items.filter((project) => {
			const isFiltered =
				filters.every((item) => !item.isSelected) ||
				project.skills.some((tech) =>
					filters.some((filter) => filter.isSelected && filter.slug === tech.slug)
				);

			const isSearched =
				search.trim().length === 0 ||
				project.name.trim().toLowerCase().includes(search.trim().toLowerCase());

			return isFiltered && isSearched;
		});
	}

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		search = e.detail.search;
	};

	onMount(() => {
		const query = location.search;

		if (query) {
			const queryParams = new URLSearchParams(location.search);

			const item = queryParams.get('item');

			if (item) {
				search = item;
			}
		}
	});
</script>

<SearchPage {title} on:search={onSearch}>
	<div class="projects-filters">
		{#each filters as tech}
			<Chip active={tech.isSelected} classes={'text-0.8em'} on:click={() => onSelected(tech.slug)}
				>{tech.name}</Chip
			>
		{/each}
	</div>
	{#if displayed.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<div class="projects-list mt-5" style="margin-bottom:50px">
			{#each displayed as project}
				<ProjectCard {project} />
			{/each}
		</div>
	{/if}
</SearchPage>

<style lang="scss">
	.projects-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;

		@media (max-width: 1350px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 850px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>

```

## File: src/routes/projects/[slug]/+page.ts
```ts
import { items } from '@data/projects';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const project = items.find((item) => {
			return item.slug === params.slug;
		});

		return { project };
	}
}

```

## File: src/routes/projects/[slug]/+page.svelte
```svelte
<script lang="ts">
	import { base } from '$app/paths';
	import { getAssetURL } from '$lib/data/assets';
	import { title } from '@data/projects';

	import type { Project } from '$lib/types';

	import CardLogo from '$lib/components/Card/CardLogo.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import Banner from '$lib/components/Banner/Banner.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';
	import Screenshot from '$lib/components/Screenshot/Screenshot.svelte';

	export let data: { project?: Project };

	const screenshots = data.project?.screenshots ?? [];

	let screenIndex: number | undefined = undefined;

	$: screenshot =
		typeof screenIndex !== 'undefined' && screenshots[screenIndex]
			? screenshots[screenIndex]
			: undefined;

	$: computedTitle = data.project ? `${data.project.name} - ${title}` : title;
</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden col flex-1" style="margin-bottom:50px">
	{#if data.project === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not load project data...</p>
		</div>
	{:else}
		<div class="flex flex-col items-center overflow-x-hidden">
			<Banner img={getAssetURL(data.project.logo)}>
				<div class="col-center p-y-20">
					<div class="text-0.9em">
						<MainTitle>{data.project.name}</MainTitle>
					</div>
					<p class="font-300 text-center text-[var(--tertiary-text)] m-y-2">{data.project.type}</p>
					<div class="w-75%">
						<CardDivider />
					</div>
					<div class="row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2">
						{#each data.project.links as item}
							<Chip href={item.to}>
								<div class="row-center gap-2">
									<UIcon icon="i-carbon-link" />
									<span>{item.label}</span>
								</div>
							</Chip>
						{/each}
					</div>
					<div class="row-center flex-wrap m-b-2">
						{#each data.project.skills as item}
							<Chip
								classes="inline-flex flex-row items-center justify-center"
								href={`${base}/skills/${item.slug}`}
							>
								<CardLogo
									src={getAssetURL(item.logo)}
									alt={item.name}
									radius={'0px'}
									size={15}
									classes="mr-2"
								/>
								<span class="text-[0.9em]">{item.name}</span>
							</Chip>
						{/each}
					</div>
				</div>
			</Banner>
			<div class="pt-3 pb-1 overflow-x-hidden w-full">
				<div class="px-10px m-y-5">
					{#if data.project.description}
						<Markdown content={data.project.description} />
					{:else}
						<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
							<UIcon icon="i-carbon-text-font" classes="text-3.5em" />
							<p class="font-300">No description</p>
						</div>
					{/if}
				</div>
				<div class="w-100% m-t-8">
					<CardDivider />
				</div>
				{#if screenshots.length > 0}
					<div
						class="px-10px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-t-10 "
					>
						{#each screenshots as item, index}
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<div
								class="col-center gap-3 overflow-hidden w-100% h-100% rounded-10px"
								on:click={() => (screenIndex = index)}
								on:keydown
								on:keypress
								on:keyup
								on:keyup
							>
								<div
									class="screenshot aspect-video bg-contain w-100% cursor-pointer"
									style={`background-image: url(${item.src});`}
								/>
								<p class="text-[var(--tertiary-text)] font-300">{item.label}</p>
							</div>
						{/each}
					</div>
				{:else}
					<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
						<UIcon icon="i-carbon-image" classes="text-3.5em" />
						<p class="font-300">No screenshots</p>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>
<Screenshot {screenshot} onClose={() => (screenIndex = undefined)} />

<style lang="scss">
	.screenshot {
		background-repeat: no-repeat;
		background-position: center;
		background-size: 100%;
		transition: background-size 200ms;

		&:hover {
			background-size: 120%;
		}
	}
</style>

```

## File: src/routes/resume/+page.svelte
```svelte
<script>
	import { data, title } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<a href={data} download>
				<Chip size={'1.25em'}>Download</Chip>
			</a>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>

```

## File: src/routes/search/+page.svelte
```svelte
<script lang="ts">
	import { title } from '@data/search';
	import { filterItemsByQuery, type ItemOrSkill } from '$lib/utils/helpers';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import * as experiences from '@data/experience';
	import * as projects from '@data/projects';
	import * as skills from '@data/skills';

	import type { Icon, Item, Skill } from '$lib/types';

	import SearchPage from '$lib/components/SearchPage.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	type SearchResultItem = {
		icon: Icon;
		name: string;
		data: Item | Skill;
		to: string;
	};

	let query = '';
	let mounted = false;
	let result: Array<SearchResultItem> = [];

	onMount(() => {
		let searchParams = new URLSearchParams(window.location.search);

		query = searchParams.get('q') ?? '';
		mounted = true;
	});

	$: {
		result = [];

		// filter
		result.push(
			...filterItemsByQuery(projects.items, query).map<SearchResultItem>((data) => ({
				data,
				icon: 'i-carbon-cube',
				name: data.name,
				to: `projects/${data.slug}`
			}))
		);

		result.push(
			...filterItemsByQuery(
				skills.items as unknown as Array<ItemOrSkill>,
				query
			).map<SearchResultItem>((data) => ({
				data,
				icon: 'i-carbon-software-resource-cluster',
				name: data.name,
				to: `skills/${data.slug}`
			}))
		);

		result.push(
			...filterItemsByQuery(experiences.items, query).map<SearchResultItem>((data) => ({
				data,
				icon: 'i-carbon-development',
				name: `${data.name} @ ${data.company}`,
				to: `experience/${data.slug}`
			}))
		);
	}
</script>

<SearchPage {title} on:search={(e) => (query = e.detail.search)}>
	<div class="flex flex-col items-stretch gap-10 p-2" />
	{#if !query}
		<div class="flex-1 self-center col-center m-t-10 gap-5 font-300 text-[var(--accent-text)]">
			<UIcon icon="i-carbon-search-locate-mirror" classes="text-2em" />
			<span> Try typing something... </span>
		</div>
	{:else}
		<div>
			{#if result.length === 0}
				<div class="flex-1 self-center col-center m-t-10 gap-5 font-300 text-[var(--accent-text)]">
					<UIcon icon="i-carbon-cube" classes="text-2em" />
					<span> Oops ! nothing to show ! </span>
				</div>
			{:else}
				<div class="flex flex-row flex-wrap gap-1">
					{#each result as item}
						<Chip href={`${base}/${item.to}`} classes="flex flex-row items-center gap-2">
							<UIcon icon={item.icon} />
							<span>{item.name}</span>
						</Chip>
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</SearchPage>

```

## File: src/routes/skills/+page.svelte
```svelte
<script lang="ts">
	import { base } from '$app/paths';
	import { title, groupByCategory } from '@data/skills';
	import { getAssetURL } from '$lib/data/assets';

	import SearchPage from '$lib/components/SearchPage.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	let result = groupByCategory('');

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search;

		result = groupByCategory(query.trim().toLowerCase());
	};
</script>

<SearchPage {title} on:search={onSearch}>
	{#if result.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<div class="col mt-5 gap-7" style="margin-bottom:50px">
			{#each result as group (group.category.slug)}
				<div class="col gap-5 mb-7">
					<div class="row items-center gap-5">
						<div class="bg-[var(--main-hover)] h-[1px] w-[20px]" />
						<p class="text-[var(--main-close)]">{group.category.name}</p>
						<div class="flex-1 bg-[var(--main-hover)] h-[1px]" />
					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 ">
						{#each group.items as skill (skill.slug)}
							<Card
								classes={['cursor-pointer decoration-none']}
								tiltDegree={1}
								href={`${base}/skills/${skill.slug}`}
								bgImg={getAssetURL(skill.logo)}
								color={skill.color}
							>
								<p class="text-[var(--tertiary-text)]">{skill.name}</p>
							</Card>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</SearchPage>

```

## File: src/routes/skills/[slug]/+page.svelte
```svelte
<script lang="ts">
	import { title } from '@data/skills';
	import * as projects from '@data/projects';
	import * as experiences from '@data/experience';

	import { base } from '$app/paths';
	import { getAssetURL } from '$lib/data/assets';

	import type { Skill } from '$lib/types';

	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';
	import CardLogo from '$lib/components/Card/CardLogo.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import Banner from '$lib/components/Banner/Banner.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	type Related = {
		display: string;
		name: string;
		img: string;
		type: 'projects' | 'experience';
		url: string;
	};

	export let data: { skill?: Skill };

	const getRelatedProjects = (): Array<Related> => {
		const out: Array<Related> = [];

		const skill = data.skill;

		if (!skill) {
			return [];
		}

		projects.items.forEach((item) => {
			if (item.skills.some((tech) => tech.slug === skill.slug)) {
				out.push({
					img: getAssetURL(item.logo),
					display: `${item.name} (${item.type})`,
					name: item.name,
					type: 'projects',
					url: `/projects/${item.slug}`
				});
			}
		});

		experiences.items.forEach((item) => {
			if (item.skills.some((tech) => tech.slug === skill.slug)) {
				out.push({
					img: getAssetURL(item.logo),
					display: `${item.name} @ ${item.company}`,
					name: item.name,
					type: 'experience',
					url: `/experience/${item.slug}`
				});
			}
		});

		return out;
	};

	$: computedTitle = data.skill ? `${data.skill.name} - ${title}` : title;

	$: related = data.skill ? getRelatedProjects() : [];
</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden col flex-1">
	{#if data.skill === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
			<UIcon icon="i-carbon-software-resource-cluster" classes="text-3.5em" />
			<p class="font-300">Could not load skill data.</p>
		</div>
	{:else}
		<div class="flex flex-col items-center overflow-x-hidden" style="margin-bottom:50px">
			<Banner img={getAssetURL(data.skill.logo)}>
				<MainTitle>{data.skill.name}</MainTitle>
			</Banner>
			<div class="pt-3 pb-1 overflow-x-hidden w-full">
				<div class="px-10px m-y-5">
					{#if data.skill.description}
						<Markdown content={data.skill.description ?? 'This place is yet to be filled...'} />
					{:else}
						<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
							<UIcon icon="i-carbon-text-font" classes="text-3.5em" />
							<p class="font-300">No description</p>
						</div>
					{/if}
				</div>
			</div>
			<div class="self-stretch mb-2">
				<CardDivider />
			</div>
			<div class="flex flex-row gap-1 self-stretch flex-wrap ">
				<div class="px-10px">
					{#each related as item}
						<Chip
							classes="inline-flex flex-row items-center justify-center"
							href={`${base}${item.url}`}
						>
							<CardLogo src={item.img} alt={item.name} radius={'0px'} size={15} classes="mr-2" />
							<span class="text-[0.9em]">{item.display}</span>
						</Chip>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>

```

## File: src/routes/skills/[slug]/+page.ts
```ts
import { items } from '@data/skills';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const skill = items.find((item) => {
			return item.slug === params.slug;
		});

		return { skill };
	}
}

```

## File: src/routes/team/+page.svelte
```svelte
<script lang="ts">
    import { aiToolsTitle, aiTools, codeToolsTitle, codeTools, dataToolsTitle, dataTools } from '$lib/data/tools';
    import CommonPage from '$lib/components/CommonPage.svelte';
    import Card from '$lib/components/Card/Card.svelte';
    import UIcon from '$lib/components/Icon/UIcon.svelte';
    import { base } from '$app/paths';

    const title = 'Tools';
</script>

<CommonPage {title}>
    <h2 class="text-2xl font-semibold mb-4">{aiToolsTitle}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {#each aiTools as tool}
            <Card
                classes={['cursor-pointer']}
                href={`${base}/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
                <div class="flex flex-col h-full">
                    <h3 class="text-lg font-semibold mb-2">{tool.name}</h3>
                    <p class="text-sm flex-grow">{tool.description}</p>
                    <div class="flex justify-between items-center mt-4">
                        <a
                            href={tool.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-blue-500 hover:text-blue-600"
                        >
                            <UIcon icon="i-carbon-logo-github" classes="text-xl" />
                        </a>
                        <UIcon icon="i-carbon-arrow-right" classes="text-xl" />
                    </div>
                </div>
            </Card>
        {/each}
    </div>

    <h2 class="text-2xl font-semibold mb-4">{codeToolsTitle}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each codeTools as tool}
            <Card
                classes={['cursor-pointer']}
                href={`${base}/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
                <div class="flex flex-col h-full">
                    <h3 class="text-lg font-semibold mb-2">{tool.name}</h3>
                    <p class="text-sm flex-grow">{tool.description}</p>
                    <div class="flex justify-between items-center mt-4">
                        <a
                            href={tool.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-blue-500 hover:text-blue-600"
                        >
                            <UIcon icon="i-carbon-logo-github" classes="text-xl" />
                        </a>
                        <UIcon icon="i-carbon-arrow-right" classes="text-xl" />
                    </div>
                </div>
            </Card>
        {/each}
    </div>

    <h2 class="text-2xl font-semibold mb-4">{dataToolsTitle}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each dataTools as tool}
            <Card
                classes={['cursor-pointer']}
                href={`${base}/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
                <div class="flex flex-col h-full">
                    <h3 class="text-lg font-semibold mb-2">{tool.name}</h3>
                    <p class="text-sm flex-grow">{tool.description}</p>
                    <div class="flex justify-between items-center mt-4">
                        <a
                            href={tool.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-blue-500 hover:text-blue-600"
                        >
                            <UIcon icon="i-carbon-logo-github" classes="text-xl" />
                        </a>
                        <UIcon icon="i-carbon-arrow-right" classes="text-xl" />
                    </div>
                </div>
            </Card>
        {/each}
    </div>
</CommonPage>
```

## File: src/routes/team/[slug]/+page.svelte
```svelte
<script lang="ts">
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
    import { parseReTypeMarkdown } from '$lib/utils/reTypeParser';
    import DOMPurify from 'dompurify';

    export let data;

    let cvContent = '';

    onMount(async () => {
        const response = await fetch(`${base}/cv-data.md`);
        cvContent = await response.text();
    });

    $: parsedCV = DOMPurify.sanitize(parseReTypeMarkdown(cvContent));
</script>

<MainTitle>{data.teamMember.name}</MainTitle>

<div class="team-member-info">
    <h2>{data.teamMember.role}</h2>
    <p>{data.teamMember.bio}</p>
</div>

<div class="cv-content">
    {@html parsedCV}
</div>

<style lang="scss">
    .team-member-info {
        margin-bottom: 2rem;
    }

    :global(.cv-content) {
        margin-top: 2rem;
        line-height: 1.6;
    }

    :global(.cv-content h1),
    :global(.cv-content h2),
    :global(.cv-content h3),
    :global(.cv-content h4),
    :global(.cv-content h5),
    :global(.cv-content h6) {
        margin-top: 1.5em;
        margin-bottom: 0.5em;
    }

    :global(.cv-content p) {
        margin-bottom: 1em;
    }

    :global(.cv-content ul),
    :global(.cv-content ol) {
        margin-bottom: 1em;
        padding-left: 2em;
    }

    :global(.cv-content a) {
        color: var(--link-color);
        text-decoration: none;
    }

    :global(.cv-content a:hover) {
        text-decoration: underline;
    }

    :global(.cv-content .retype-image) {
        max-width: 100%;
        height: auto;
        margin: 1em 0;
    }

    :global(.cv-content .admonition) {
        border-left: 4px solid;
        padding: 1em;
        margin: 1em 0;
        background-color: var(--secondary);
    }

    :global(.cv-content .admonition.info) {
        border-color: #3498db;
    }

    :global(.cv-content .admonition.tip) {
        border-color: #2ecc71;
    }

    :global(.cv-content .admonition.note) {
        border-color: #f1c40f;
    }

    :global(.cv-content .admonition.caution) {
        border-color: #e67e22;
    }

    :global(.cv-content .admonition.danger) {
        border-color: #e74c3c;
    }

    :global(.cv-content .retype-tabs) {
        border: 1px solid var(--border);
        border-radius: 4px;
        margin: 1em 0;
    }

    :global(.cv-content .tab-item) {
        padding: 1em;
    }

    :global(.cv-content details) {
        border: 1px solid var(--border);
        border-radius: 4px;
        padding: 1em;
        margin: 1em 0;
    }

    :global(.cv-content details summary) {
        cursor: pointer;
        font-weight: bold;
    }

    :global(.cv-content .badge) {
        display: inline-block;
        padding: 0.25em 0.5em;
        background-color: var(--accent);
        color: var(--main-text);
        border-radius: 4px;
        font-size: 0.9em;
    }

    :global(.cv-content .embed-container) {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        max-width: 100%;
    }

    :global(.cv-content .embed-container iframe),
    :global(.cv-content .embed-container object),
    :global(.cv-content .embed-container embed) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
```

## File: src/routes/team/[slug]/+page.ts
```ts
import { error } from '@sveltejs/kit';

export const prerender = false;

export async function load({ params }) {
    // Fetch team member data based on the slug
    // This is a placeholder implementation
    const teamMember = await fetchTeamMember(params.slug);

    if (teamMember) {
        return {
            teamMember
        };
    }

    error(404, 'Team member not found');
}

async function fetchTeamMember(slug: string) {
    // Implement actual data fetching logic here
    // For now, return a dummy object
    return {
        
        name: 'John Doe',
        role: 'Developer',
        bio: 'A passionate developer.'
    };
}
```

## File: src/routes/terms/+page.svelte
```svelte
<!-- src/routes/terms/+page.svelte -->
<script lang="ts">
	import CommonPage from '$lib/components/CommonPage.svelte';

	const title = 'Terms and Conditions';
</script>

<CommonPage {title}>
	<div class="prose max-w-none">
		<h1>{title}</h1>
		<p>Last updated: {new Date().toLocaleDateString()}</p>

		<h2>1. Acceptance of Terms</h2>
		<p>
			By accessing and using this website, you accept and agree to be bound by the terms and
			provision of this agreement.
		</p>

		<h2>2. Use License</h2>
		<p>
			Permission is granted to temporarily download one copy of the materials (information or
			software) on webAlly's website for personal, non-commercial transitory viewing only.
		</p>

		<h2>3. Disclaimer</h2>
		<p>
			The materials on webAlly's website are provided on an 'as is' basis. webAlly makes no
			warranties, expressed or implied, and hereby disclaims and negates all other warranties
			including, without limitation, implied warranties or conditions of merchantability, fitness
			for a particular purpose, or non-infringement of intellectual property or other violation of
			rights.
		</p>

		<h2>4. Limitations</h2>
		<p>
			In no event shall webAlly or its suppliers be liable for any damages (including, without
			limitation, damages for loss of data or profit, or due to business interruption) arising out
			of the use or inability to use the materials on webAlly's website, even if webAlly or a
			webAlly authorized representative has been notified orally or in writing of the possibility of
			such damage.
		</p>

		<h2>5. Revisions and Errata</h2>
		<p>
			The materials appearing on webAlly's website could include technical, typographical, or
			photographic errors. webAlly does not warrant that any of the materials on its website are
			accurate, complete or current. webAlly may make changes to the materials contained on its
			website at any time without notice.
		</p>

		<!-- Add more sections as needed -->
	</div>
</CommonPage>

```

## File: src/routes/tools/+page.svelte
```svelte
<!-- src/routes/tools/+page.svelte -->
<script lang="ts">
    import { aiToolsTitle, aiTools, codeToolsTitle, codeTools, dataToolsTitle, dataTools } from '$lib/data/tools';
    import CommonPage from '$lib/components/CommonPage.svelte';
    import Card from '$lib/components/Card/Card.svelte';
    import UIcon from '$lib/components/Icon/UIcon.svelte';
    import { base } from '$app/paths';

    const title = 'Tools';
</script>

<CommonPage {title}>
    <h2 class="text-2xl font-semibold mb-4">{aiToolsTitle}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {#each aiTools as tool}
            <Card
                classes={['cursor-pointer']}
                href={`${base}/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
                <div class="flex flex-col h-full">
                    <h3 class="text-lg font-semibold mb-2">{tool.name}</h3>
                    <p class="text-sm flex-grow">{tool.description}</p>
                    <div class="flex justify-between items-center mt-4">
                        <a
                            href={tool.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-blue-500 hover:text-blue-600"
                        >
                            <UIcon icon="i-carbon-logo-github" classes="text-xl" />
                        </a>
                        <UIcon icon="i-carbon-arrow-right" classes="text-xl" />
                    </div>
                </div>
            </Card>
        {/each}
    </div>

    <h2 class="text-2xl font-semibold mb-4">{codeToolsTitle}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each codeTools as tool}
            <Card
                classes={['cursor-pointer']}
                href={`${base}/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
                <div class="flex flex-col h-full">
                    <h3 class="text-lg font-semibold mb-2">{tool.name}</h3>
                    <p class="text-sm flex-grow">{tool.description}</p>
                    <div class="flex justify-between items-center mt-4">
                        <a
                            href={tool.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-blue-500 hover:text-blue-600"
                        >
                            <UIcon icon="i-carbon-logo-github" classes="text-xl" />
                        </a>
                        <UIcon icon="i-carbon-arrow-right" classes="text-xl" />
                    </div>
                </div>
            </Card>
        {/each}
    </div>

    <h2 class="text-2xl font-semibold mb-4">{dataToolsTitle}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each dataTools as tool}
            <Card
                classes={['cursor-pointer']}
                href={`${base}/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
                <div class="flex flex-col h-full">
                    <h3 class="text-lg font-semibold mb-2">{tool.name}</h3>
                    <p class="text-sm flex-grow">{tool.description}</p>
                    <div class="flex justify-between items-center mt-4">
                        <a
                            href={tool.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-blue-500 hover:text-blue-600"
                        >
                            <UIcon icon="i-carbon-logo-github" classes="text-xl" />
                        </a>
                        <UIcon icon="i-carbon-arrow-right" classes="text-xl" />
                    </div>
                </div>
            </Card>
        {/each}
    </div>
</CommonPage>

```

## File: src/routes/tools/[slug]/+page.svelte
```svelte
<!-- src/routes/tools/[slug]/+page.svelte -->
<script lang="ts">
	import { base } from '$app/paths';
	import { getAssetURL } from '$lib/data/assets';
	import { aiTools, codeTools, dataTools } from '$lib/data/tools';

	import type { Tool } from '$lib/types';

	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import Banner from '$lib/components/Banner/Banner.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	export let data: { tool?: Tool };

	// Combine all tools into one array
	const allTools = [...aiTools, ...codeTools, ...dataTools];

	// Find the tool based on the slug
	$: tool = allTools.find(t => t.name.toLowerCase().replace(/\s+/g, '-') === data.tool?.slug);

	$: computedTitle = tool ? `${tool.name} - Tools` : 'Tool Not Found';
</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden col flex-1">
	{#if !tool}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
			<UIcon icon="i-carbon-tool-box" classes="text-3.5em" />
			<p class="font-300">Tool not found.</p>
		</div>
	{:else}
		<div class="flex flex-col items-center overflow-x-hidden">
			<Banner img={getAssetURL('Unknown')}>
				<MainTitle>{tool.name}</MainTitle>
			</Banner>
			<div class="pt-3 pb-1 overflow-x-hidden w-full">
				<div class="px-10px m-y-5">
					{#if tool.description}
						<p class="text-lg mb-4">{tool.description}</p>
					{/if}
					{#if tool.details}
						<Markdown content={tool.details} />
					{:else}
						<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
							<UIcon icon="i-carbon-text-font" classes="text-3.5em" />
							<p class="font-300">No detailed description available.</p>
						</div>
					{/if}
				</div>
			</div>
			<div class="self-stretch mb-2">
				<CardDivider />
			</div>
			<div class="flex flex-row gap-1 self-stretch flex-wrap">
				<div class="px-10px">
					<Chip
						classes="inline-flex flex-row items-center justify-center"
						href={tool.github}
					>
						<UIcon icon="i-carbon-logo-github" classes="mr-2" />
						<span class="text-[0.9em]">View on GitHub</span>
					</Chip>
				</div>
			</div>
		</div>
	{/if}
</div>
```

## File: src/routes/tools/[slug]/+page.ts
```ts
// src/routes/tools/[slug]/+page.ts
import { aiTools, codeTools, dataTools } from '$lib/data/tools';
import type { Tool } from '$lib/types';

export function load({ params }: { params: Record<string, string> }) {
    if (params.slug) {
        const allTools = [...aiTools, ...codeTools, ...dataTools];
        const tool = allTools.find(t => t.name.toLowerCase().replace(/\s+/g, '-') === params.slug);

        if (tool) {
            return { 
                tool: {
                    ...tool,
                    slug: params.slug // Add the slug to the tool object
                }
            };
        }
    }

    return { tool: undefined };
}
```

## File: src/routes/tools/ai/+page.svelte
```svelte
<!-- src/routes/ai/tools/+page.svelte -->
<script lang="ts">
	import { aiToolsTitle, aiTools } from '$lib/data/tools';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { base } from '$app/paths';
</script>

<CommonPage title={aiToolsTitle}>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" style="margin-bottom:50px">
		{#each aiTools as tool}
			<Card
				classes={['cursor-pointer']}
				href={`${base}/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
			>
				<div class="flex flex-col h-full">
					<h3 class="text-lg font-semibold mb-2">{tool.name}</h3>
					<p class="text-sm flex-grow">{tool.description}</p>
					<div class="flex justify-between items-center mt-4">
						<a
							href={tool.github}
							target="_blank"
							rel="noopener noreferrer"
							class="text-blue-500 hover:text-blue-600"
						>
							<UIcon icon="i-carbon-logo-github" classes="text-xl" />
						</a>
						<UIcon icon="i-carbon-arrow-right" classes="text-xl" />
					</div>
				</div>
			</Card>
		{/each}
	</div>
</CommonPage>

```

## File: src/routes/tools/code/+page.svelte
```svelte
<!-- src/routes/ai/tools/+page.svelte -->
<script lang="ts">
	import { codeToolsTitle, codeTools } from '$lib/data/tools';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { base } from '$app/paths';
</script>

<CommonPage title={codeToolsTitle}>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" style="margin-bottom:50px">
		{#each codeTools as tool}
			<Card
				classes={['cursor-pointer']}
				href={`${base}/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
			>
				<div class="flex flex-col h-full">
					<h3 class="text-lg font-semibold mb-2">{tool.name}</h3>
					<p class="text-sm flex-grow">{tool.description}</p>
					<div class="flex justify-between items-center mt-4">
						<a
							href={tool.github}
							target="_blank"
							rel="noopener noreferrer"
							class="text-blue-500 hover:text-blue-600"
						>
							<UIcon icon="i-carbon-logo-github" classes="text-xl" />
						</a>
						<UIcon icon="i-carbon-arrow-right" classes="text-xl" />
					</div>
				</div>
			</Card>
		{/each}
	</div>
</CommonPage>

```

## File: src/routes/tools/data/+page.svelte
```svelte
<!-- src/routes/ai/tools/+page.svelte -->
<script lang="ts">
	import { dataToolsTitle, dataTools } from '$lib/data/tools';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { base } from '$app/paths';
</script>

<CommonPage title={dataToolsTitle}>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" style="margin-bottom:50px">
		{#each dataTools as tool}
			<Card
				classes={['cursor-pointer']}
				href={`${base}/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
			>
				<div class="flex flex-col h-full">
					<h3 class="text-lg font-semibold mb-2">{tool.name}</h3>
					<p class="text-sm flex-grow">{tool.description}</p>
					<div class="flex justify-between items-center mt-4">
						<a
							href={tool.github}
							target="_blank"
							rel="noopener noreferrer"
							class="text-blue-500 hover:text-blue-600"
						>
							<UIcon icon="i-carbon-logo-github" classes="text-xl" />
						</a>
						<UIcon icon="i-carbon-arrow-right" classes="text-xl" />
					</div>
				</div>
			</Card>
		{/each}
	</div>
</CommonPage>

```

## File: src/routes/api/vapid-key.ts
```ts
// src/routes/api/vapid-key.ts
import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
// Use your public VAPID key (generated earlier)
const publicVapidKey = 'BHiKKmeGnSYaMiiaaNtNRRZlBzDTEGw66ILt192tu4PRYNIAm-fV5sgk7WQoXvjjxPOim3KEyt9mZUXyOoQRxTk';

export const GET: RequestHandler = async () => {
    return json({ 
        status: 200,
        body: {
            vapidKey: publicVapidKey
        } 
    });
};

```

## File: src/routes/api/push-subscription/+server.ts
```ts
// src/routes/api/push-subscription/+server.ts
import { json } from '@sveltejs/kit';

// In-memory store for subscriptions (use a database in production)
let subscriptions = [];

export async function POST({ request }) {
  const subscription = await request.json();

  // Save the subscription (you should store this in a real database)
  subscriptions.push(subscription);

  return json({ message: 'Subscription saved successfully' });
}

```

## File: src/routes/api/vapid-key/+server.ts
```ts

```

## File: src/routes/services/+page.svelte
```svelte
<script lang="ts">
    // src/routes/services/+page.svelte
    
    import type { Service, serviceCategory } from '$lib/types';
    import Chip from '$lib/components/Chip/Chip.svelte';
    import ServiceCard from '$lib/components/ServiceCard/ServiceCard.svelte';
    import SearchPage from '$lib/components/SearchPage.svelte';
    import UIcon from '$lib/components/Icon/UIcon.svelte';
    
    // 'data' comes from the load function in +page.server.ts
    export let data: { categories: serviceCategory[] };
    
    let search = '';
    let displayedCategories: serviceCategory[] = [];
    
    $: {
        // Filter categories based on the search query
        displayedCategories = data.categories.map(category => ({
            ...category,
            services: category.services.filter((service) => {
                const isSearched =
                    search.trim().length === 0 ||
                    service.name.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
                    category.name.trim().toLowerCase().includes(search.trim().toLowerCase());
    
                return isSearched;
            })
        })).filter(category => category.services.length > 0);
    }
    
    const onSearch = (e: CustomEvent<{ search: string }>) => {
        search = e.detail.search;
    };
</script>

<SearchPage title="Services" on:search={onSearch}>
  {#if displayedCategories.length === 0}
      <div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
          <UIcon icon="i-carbon-cube" classes="text-3.5em" />
          <p class="font-300">Could not find any services...</p>
      </div>
  {:else}
      {#each displayedCategories as category}
          <div class="category-section mt-5" style="margin-bottom:50px">
              <div class="row items-center gap-5">
                  <div class="bg-[var(--main-hover)] h-[1px] w-[20px]" />
                  <p class="text-[var(--main-close)]">{category.name}</p>
                  <div class="flex-1 bg-[var(--main-hover)] h-[1px]" />
              </div>
              <p class="category-description mt-2 mb-4">{category.shortDescription}</p>
              <div class="services-list">
                  {#each category.services as service}
                      <ServiceCard {service} />
                  {/each}
              </div>
          </div>
      {/each}
  {/if}
</SearchPage>

<style lang="scss">
  .category-description {
    color: var(--secondary-text);
    font-size: 0.9em;
  }

  .services-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;

      @media (max-width: 1350px) {
          grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 850px) {
          grid-template-columns: repeat(1, 1fr);
      }
  }
</style>

```

## File: src/routes/services/+page.ts
```ts
// src/routes/services/+page.ts
import { categories } from '@data/services';
import type { serviceCategory } from '$lib/types';

export function load() {
    return {
        categories: categories as serviceCategory[]
    };
}
```

## File: src/routes/services/+page.server.ts
```ts
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
```

## File: src/routes/services/[slug]/+page.svelte
```svelte
<script lang="ts">
    import { base } from '$app/paths';
    import { getAssetURL } from '$lib/data/assets';
    import { title } from '$lib/data/services';
    import type { Service } from '$lib/types';
    import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
    import TabTitle from '$lib/components/TabTitle.svelte';
    import Banner from '$lib/components/Banner/Banner.svelte';
    import CardDivider from '$lib/components/Card/CardDivider.svelte';
    import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
    import { marked } from 'marked';
    import BackToServicesButton from '$lib/components/BackToServicesButton.svelte';
    marked.setOptions({
		mangle: false
	});
    export let data: { 
        service: Service; 
        content: string | null; 
        frontmatter: Record<string, any> | null;
        error?: Error 
    };

    $: computedTitle = data.frontmatter?.title || (data.service ? `${data.service.name} - ${title}` : title);
    $: relatedPages = data.frontmatter?.relatedPages || [];
    $: markdownContent = data.content 
        ? marked(data.content, { mangle: false, headerIds: false }) 
        : data.service.shortDescription;
    $: processedContent = markdownContent.replace('{{BACK_TO_SERVICES_BUTTON}}', '<BackToServicesButton />');
</script>

<TabTitle title={computedTitle} />

<!-- Main page content -->
<div class="pb-10 overflow-x-hidden col flex-1" style="margin-bottom:50px">
    <div class="flex flex-col items-center overflow-x-hidden">
        <Banner img={getAssetURL(data.service.image)}>
            <div class="col-center pt-10">
                <div class="text-0.9em">
                    <MainTitle>{data.frontmatter?.title || data.service.name}</MainTitle>
                </div>
                <p class="font-300 text-center text-[var(--tertiary-text)] m-y-2">{data.service.type}</p>
                <div class="w-75%">
                    <CardDivider />
                </div>
                <div class="row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2">
                    {#if relatedPages.length > 0}
                        <div class="related-pages w-75% text-center">
                            {#each relatedPages as page}
                                <Chip href={page.url}>
                                    <div class="row-center gap-2">
                                        <UIcon icon="i-carbon-link" />
                                        <span>{page.title}</span>
                                    </div>
                                </Chip>
                            {/each}
                        </div>
                    {/if}
                </div>
            </div>
        </Banner>

        <div class="content-wrapper">
            <!-- Content section, rendering markdown as HTML -->
            <div class="pt-3 pb-1 overflow-x-hidden w-full">
                <div class="px-10px m-y-5">
                    {@html markdownContent}
                </div>
            </div>
            <div class="back-to-services-wrapper">
                <BackToServicesButton />
            </div>
        </div>
    </div>
</div>

<style>
    .content-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    .back-to-services-wrapper {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      padding: 0 10px; /* Match the padding of the content above */
    }
</style>
```

## File: src/routes/services/[slug]/+page.server.ts
```ts
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

```


