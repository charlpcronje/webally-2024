# File Analysis Report

This document contains an analysis of the project files.

| No.   | File                                 | Lines    | Words    | AI Tokens |
| ----- | ------------------------------------ | -------- | -------- | --------- |
|  1    | ./combine.json                       | 99       | 105      | 414       |
|  2    | ./package.json                       | 56       | 132      | 449       |
|  3    | ./svelte.config.js                   | 60       | 130      | 272       |
|  4    | ./tsconfig.json                      | 20       | 62       | 117       |
|  5    | ./uno.config.ts                      | 44       | 90       | 191       |
|  6    | ./vite.config.ts                     | 13       | 33       | 50        |
|  7    | ./.env                               | 5        | 20       | 23        |
|  8    | ./mdsvex.config.js                   | 16       | 46       | 100       |
|  9    | ./mdsvex.d.ts                        | 7        | 23       | 37        |
|  10   | ./src/app.d.ts                       | 15       | 49       | 63        |
|  11   | ./src/app.html                       | 30       | 57       | 184       |
|  12   | ./src/lib/types.ts                   | 115      | 319      | 576       |
|  13   | ./src/lib/components/CommonPage.svelte | 15       | 37       | 83        |
|  14   | ./src/lib/components/Markdown.svelte | 32       | 72       | 145       |
|  15   | ./src/lib/components/SearchPage.svelte | 59       | 139      | 305       |
|  16   | ./src/lib/components/TabTitle.svelte | 11       | 25       | 62        |
|  17   | ./src/lib/components/Banner/Banner.svelte | 28       | 70       | 183       |
|  18   | ./src/lib/components/Card/Card.svelte | 114      | 324      | 724       |
|  19   | ./src/lib/components/Chip/ChipIcon.svelte | 61       | 145      | 312       |
|  20   | ./src/lib/components/Chip/Footer/Footer.svelte | 78       | 225      | 462       |
|  21   | ./src/lib/components/Icon/Icons.ts   | 10       | 47       | 79        |
|  22   | ./src/lib/components/MainTitle/MainTitle.svelte | 11       | 29       | 96        |
|  23   | ./src/lib/components/Screenshot/Screenshot.svelte | 56       | 136      | 344       |
|  24   | ./src/lib/components/ServiceCard/ServiceCard.svelte | 68       | 168      | 409       |
|  25   | ./src/lib/components/layouts/default-layout.svelte | 12       | 18       | 60        |
|  26   | ./src/lib/components/layouts/fancy-layout.svelte | 13       | 26       | 79        |
|  27   | ./src/lib/components/layouts/components-layout.svelte | 19       | 40       | 103       |
|  28   | ./src/lib/components/layouts/components/breadcrumb.svelte | 18       | 47       | 142       |
|  29   | ./src/lib/components/layouts/components/quizz.svelte | 49       | 150      | 322       |
|  30   | ./src/lib/components/layouts/components/types.ts | 4        | 10       | 15        |
|  31   | ./src/lib/data/app.ts                | 2        | 9        | 11        |
|  32   | ./src/lib/data/home.ts               | 33       | 151      | 303       |
|  33   | ./src/lib/data/navbar.ts             | 92       | 201      | 425       |
|  34   | ./src/lib/data/services.ts           | 87       | 389      | 664       |
|  35   | ./src/lib/md/svelte.md               | 41       | 298      | 391       |
|  36   | ./src/lib/stores/theme.ts            | 48       | 146      | 279       |
|  37   | ./src/lib/layouts/default.svelte     | 11       | 12       | 39        |
|  38   | ./src/routes/+layout.server.ts       | 2        | 10       | 13        |
|  39   | ./src/routes/+layout.svelte          | 47       | 104      | 223       |
|  40   | ./src/routes/+page.svelte            | 48       | 157      | 499       |
|  41   | ./src/routes/experience/[slug]/+page.ts | 12       | 37       | 61        |
|  42   | ./src/routes/projects/[slug]/+page.ts | 12       | 37       | 61        |
|  43   | ./src/routes/search/+page.svelte     | 97       | 259      | 597       |
|  44   | ./src/routes/skills/[slug]/+page.ts  | 12       | 37       | 61        |
|  45   | ./src/routes/team/[slug]/+page.ts    | 28       | 85       | 122       |
|  46   | ./src/routes/tools/[slug]/+page.ts   | 21       | 74       | 129       |
|  47   | ./src/routes/services/+page.svelte   | 72       | 179      | 385       |
|  48   | ./src/routes/services/services.md    | 17       | 50       | 115       |
|  49   | ./src/routes/services/+page.ts       | 7        | 16       | 24        |
|  50   | ./src/routes/services/[slug]/+page.svelte | 60       | 193      | 462       |
|  51   | ./src/routes/services/[slug]/+page.ts | 28       | 111      | 189       |
|       | Total                                | 1915     | 5329     | 11454     |


## Total Counts Across All Files. Tokenizer Used: NLTK's Punkt Tokenizer
- Total Lines: 1915
- Total Words: 5329
- Total AI Tokens: 11454

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
        "static",
        "scripts"
    ],
    "exclude_files": [
        "package-lock.json",
        "combined.md",
        "src/lib/data/skills.ts",
        "src/lib/data/tools.ts",
        "src/lib/data/projects.ts",
        "src/lib/data/experience.ts",
        "src/lib/data/education.ts",
        "src/lib/data/resume.ts",
        "src/lib/data/search.ts",
        "src/routes/services/boost-team-speed.md",
        "src/routes/services/finish-projects.md",
        "src/routes/services/handle-tedious-stuff.md",
        "src/routes/services/extra-hands-new-project.md",
        "src/routes/services/flexible-freelance-help.md",
        "src/routes/services/finish-half-built-app.md",
        "src/routes/services/debugging-optimization.md",
        "src/routes/services/future-proof-codebase.md",
        "src/routes/services/scale-projects.md",
        "src/routes/services/complex-integrations.md",
        "src/content/solutions/techDebt.md",
        "src/routes/experience/[slug]/+page.svelte",
        "src/routes/projects/[slug]/+page.svelte",
        "src/routes/skills/[slug]/+page.svelte",
        "src/routes/tools/[slug]/+page.svelte",
        "src/routes/team/[slug]/+page.svelte",
        "src/lib/components/Card/CardDivider.svelte",
        "src/lib/components/Card/CardLink.svelte",
        "src/lib/components/Card/CardLogo.svelte",
        "src/lib/components/Card/CardTitle.svelte",
        "src/lib/components/Icon/Icon.svelte",
        "src/lib/components/Icon/UIcon.svelte",
        "src/lib/components/Chip/Chip.svelte",
        "src/lib/components/Input/Input.svelte",
        "src/lib/utils/colors.ts",
        "src/lib/utils/customMarkdownParser.ts",
        "src/lib/utils/reTypeParser.ts",
        "src/routes/api/vapid-key.ts",
        "src/routes/api/push-subscription/+server.ts",
        "src/routes/api/vapid-key/+server.ts",
        "src/routes/tools/ai/+page.svelte",
        "src/routes/tools/code/+page.svelte",
        "src/routes/tools/data/+page.svelte",
        "src/lib/components/InstallPrompt.svelte",
        "src/lib/components/VideoEmbed.svelte",
        "src/lib/components/Carrousel/Carrousel.svelte",
        "src/lib/components/ExperienceCard/ExperienceCard.svelte",
        "src/lib/components/ProjectCard/ProjectCard.svelte",
        "src/routes/documentation/+page.svelte",
        "src/routes/education/+page.svelte",
        "src/routes/experience/+page.svelte",
        "src/routes/privacy/+page.svelte",
        "src/routes/projects/+page.svelte",
        "src/routes/resume/+page.svelte",
        "src/routes/skills/+page.svelte",
        "src/routes/team/+page.svelte",
        "src/routes/terms/+page.svelte",
        "src/routes/tools/+page.svelte",
        "sendPushNotification.js",
        "src/service-worker.js",
        "src/lib/utils/index.ts",
        "src/lib/data/assets.ts",
        "src/lib/utils/helpers.ts",
        "src/lib/data/documentation-sites.ts",
        "src/content/solutions.md",
        "src/lib/components/NavMenu/NavMenu.svelte",
        "src/lib/index.scss",
        "README.md"
    ],
    "file_types": [
        ".js",
        ".ts",
        ".php",
        ".env",
        ".scss",
        ".html",
        ".json",
        ".md",
        ".svelte"
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
        "@sveltejs/adapter-auto": "2.1.0",
        "@sveltejs/adapter-static": "2.0.3",
        "@sveltejs/kit": "^1.30.4",
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
        "sass": "^1.57.1",
        "slugify": "^1.6.6",
        "svelte": "^4.2.19",
        "svelte-check": "3.5.2",
        "tslib": "^2.4.1",
        "typescript": "^5.6.2",
        "unocss": "^0.56.1",
        "vite": "^4.5.0"
    },
    "type": "module",
    "dependencies": {
        "dayjs": "^1.11.10",
        "web-push": "^3.6.7"
    }
}

```

## File: svelte.config.js
```js
import adapter from '@sveltejs/adapter-static';
import {
    vitePreprocess
} from '@sveltejs/kit/vite';

import { mdsvex } from "mdsvex";
import mdsvexConfig from './mdsvex.config.js';


const base = '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    extensions: ['.svelte',...mdsvexConfig.extensions],
    preprocess: [
        vitePreprocess(),
        mdsvex({ extensions: ['.svx', '.md'] })
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
```

## File: tsconfig.json
```json
{
	"extends": "./.svelte-kit/tsconfig.json",
	"compilerOptions": {
		"ignoreDeprecations": "5.0",
		"allowJs": true,
		"checkJs": true,
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"verbatimModuleSyntax": true,
		"resolveJsonModule": true,
		"skipLibCheck": true,
		"sourceMap": true,
		"strict": true
	}
	// Path aliases are handled by https://kit.svelte.dev/docs/configuration#alias
	//
	// If you want to overwrite includes/excludes, make sure to copy over the relevant includes/excludes
	// from the referenced tsconfig.json - TypeScript does not merge them in
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

## File: vite.config.ts
```ts
// vite.config.ts
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import UnoCSS from 'unocss/vite';

const config: UserConfig = {
	plugins: [
		UnoCSS(),
		sveltekit()
	]
};

export default config;
```

## File: .env
```
# .env
# Set to 'dark_only' for dark mode only, or 'switchable' for both light and dark modes
VITE_THEME_MODE=dark_only
VITE_API_KEY=your_api_key

```

## File: mdsvex.config.js
```js
import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

const config = defineConfig({
	extensions: ['.md', '.svx'],
	layout: {
		default: path.join(dirname, './src/lib/components/layouts/default-layout.svelte'),
		fancy: path.join(dirname, './src/lib/components/layouts/fancy-layout.svelte'),
		components: path.join(dirname, './src/lib/components/layouts/components-layout.svelte')
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

## File: src/app.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <link rel="icon" href="%sveltekit.assets%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="manifest" href="%sveltekit.assets%/app.webmanifest">
    <meta name="theme-color" content="#000000">
    <link rel="apple-touch-icon" href="%sveltekit.assets%/icon-192x192.png">
    <script>
        document.documentElement.setAttribute('data-theme', 'dark');
    </script>
    %sveltekit.head%
</head>

<body data-sveltekit-preload-data="hover">
    <div style="display: contents">%sveltekit.body%</div>
    <script type="module">
        if ('serviceWorker' in navigator) {
            addEventListener('load', function() {
                navigator.serviceWorker.register('/service-worker.js', {
                    type: 'module'
                });
            });
        }
    </script>
</body>

</html>
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
	smartypants: boolean | smartypantsOptions;
	layout: string | { [name: string]: string };
	remarkPlugins: Array<plugin> | Array<[plugin, plugin_options]>;
	rehypePlugins: Array<plugin> | Array<[plugin, plugin_options]>;
	highlight: { highlighter: Function, alias: { [alias]: lang } };
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

```

## File: src/lib/components/SearchPage.svelte
```svelte
<script lang="ts">
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

			const url = `${window.location.protocol}//${window.location.host}${
				window.location.pathname
			}?${searchParams.toString()}`;

			const state = window.history.state;

			window.history.replaceState(state, '', url);
			
			if ($page.url.pathname.startsWith(`${base}/search`)) {
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
		pathname = $page.url.pathname;
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
	<footer transition:slide="{{ duration: 300, axis: 'y' }}" class="fixed bottom-0 left-0 right-0 text-white">
		<div class="container mx-auto px-0">
			
			<nav class="h-8 flex items-end pb-0" style="margin-bottom:-10">
				<ul class="pl-0 my-0 flex justify-center items-center w-full list-none" >
					{#each footerNavItems as item}
						<li class="mx-6">
							<a
								href={`${base}${item.to}`}
								class="flex items-center no-underline text-white group"
								class:active={pathname === item.to}
							>
								<!-- <UIcon icon={item.icon} classes="mr-2 text-xl" /> -->
								<span class="group-hover:text-gray-300 transition-colors duration-200 text-xs">
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
					Copyright &copy; {currentYear} webAlly | All rights reserved.
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

## File: src/lib/components/Icon/Icons.ts
```ts
import { Icons } from '$lib/utils';

export const viewBox = (icon: Icons) => {
	if (icon === Icons.Youtube) return '0 0 461.001 461.001';

	if (icon === Icons.Facebook) return '0 0 408.788 408.788';

	return [Icons.GitHub, Icons.Search, Icons.Code].includes(icon) ? '0 0 16 16' : '0 0 24 24';
};

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
</script>

<Card color={service.color} href={`${base}/services/${service.slug}`}>
    <div class="card-content">
        <div class="background-image" style="background-image: url({getAssetURL(service.image)})"></div>
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
        opacity: 0.05;  // 95% opacity (1 - 0.95)
        filter: grayscale(100%);
    }

    .content-overlay {
        position: relative;
        z-index: 1;
        padding: 1rem;  // Adjust padding as needed
    }

    :global(.card-content .content-overlay *) {
        color: var(--text-color, #ffffff) !important;
    }
</style>
```

## File: src/lib/components/layouts/default-layout.svelte
```svelte
<script lang="ts">
	export let title = 'Change me';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main>
	<h1 class="is-size-3">{title}</h1>
	<slot />
</main>
```

## File: src/lib/components/layouts/fancy-layout.svelte
```svelte
<script lang="ts">
	import './github-markdown-light.css';
	export let title = 'Change me';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="markdown-body" style="max-width: 60ch; margin: auto; padding-top: 2.5rem;">
	<h1>{title}</h1>
	<slot />
</main>
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

## File: src/lib/components/layouts/components/breadcrumb.svelte
```svelte
<script lang="ts">
	import type { BreadcrumbItem } from './types';

	export let pathChain: BreadcrumbItem[];
</script>

<nav class="breadcrumb mt-3 ml-3" aria-label="breadcrumbs">
	<ul>
		<li><a href="/about">About</a></li>
		{#each pathChain as { label, href }, i}
			{#if i === pathChain.length - 1}
				<li class="is-active"><a {href} aria-current="page">{label}</a></li>
			{:else}
				<li><a {href}>{label}</a></li>
			{/if}
		{/each}
	</ul>
</nav>
```

## File: src/lib/components/layouts/components/quizz.svelte
```svelte
<script lang="ts">
	export let question: string;
	export let options: Array<{ text: string; correct: boolean }>;

	let selected = false;
	let selectedOption: { text: string; correct: boolean } | null = null;

	const selectOption = (option: { text: string; correct: boolean }): void => {
		selected = true;
		selectedOption = option;
	};

	function shuffleArray(
		arr: Array<{ text: string; correct: boolean }>
	): Array<{ text: string; correct: boolean }> {
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}

		return arr;
	}

	const shuffled = shuffleArray(options);
</script>

<div class="has-background-light mt-6 mb-6 p-3">
	<p class="mb-0">Question:</p>
	<p class="is-size-3 has-text-weight-bold">{question}</p>
	<div class="is-flex is-justify-content-space-evenly">
		{#each shuffled as option, i (i)}
			<button
				class="button"
				class:is-success={selected && option.correct}
				class:is-danger={selected && !option.correct && selectedOption === option}
				on:click={() => selectOption(option)}
				disabled={selected}
			>
				{option.text}
			</button>
		{/each}
	</div>
</div>

<style>
	.button:disabled {
		opacity: 1;
	}
</style>
```

## File: src/lib/components/layouts/components/types.ts
```ts
export type BreadcrumbItem = {
	label: string;
	href: string;
};
```

## File: src/lib/data/app.ts
```ts
export const titleSuffix = 'Your Ally in Online Efficiency';

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

## File: src/lib/data/services.ts
```ts
import type { Service } from '$lib/types';
import Assets from './assets';

export const items: Array<Service> = [
    {
        slug: "boost-team-speed",
        color: "#4A90E2",
        shortDescription: "Tackle those delayed projects by adding a fresh set of expert hands. I'll help your team hit those critical milestones faster.",
        image: Assets.BOOST_TEAM_SPEED,
        name: "Boost Your Team's Speed",
        type: "Development Support"
    },
    {
        slug: "finish-projects",
        color: "#50E3C2",
        shortDescription: "Got an app or website stuck in development limbo? I specialize in jumping into existing code bases and delivering final results.",
        image: Assets.FINISH_PROJECTS,
        name: "Finish Unfinished Projects",
        type: "Project Completion"
    },
    {
        slug: "handle-tedious-stuff",
        color: "#F5A623",
        shortDescription: "Let your core team focus on what they do best while I take care of repetitive tasks like bug fixing, refactoring, or testing.",
        image: Assets.HANDLE_TEDIOUS_STUFF,
        name: "Handle the Tedious Stuff",
        type: "Maintenance & Optimization"
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
        slug: "finish-half-built-app",
        color: "#9013FE",
        shortDescription: "Don't leave potential profit on the table with unfinished software. I'll help complete your half-built projects.",
        image: Assets.FINISH_HALF_BUILT_APP,
        name: "Finish Half-Built Apps",
        type: "Project Completion"
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
    },
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
];

export const title = 'Services';
```

## File: src/lib/md/svelte.md
```md
# Svelte

---

[`Svelte`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

```ts
<script>
    let count = 1;
    $: doubled = count * 2;
</script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
```

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.

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

## File: src/routes/+layout.server.ts
```ts
export const prerender = true;
export const trailingSlash = 'always';
```

## File: src/routes/+layout.svelte
```svelte
<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import 'uno.css';
	import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
	import Footer from '$lib/components/Chip/Footer/Footer.svelte';
	import '$lib/index.scss';
	import { onHydrated } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import InstallPrompt from '$lib/components/InstallPrompt.svelte';
	onMount(() => {
		onHydrated();
	});
</script>

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

    throw error(404, 'Team member not found');
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

## File: src/routes/services/+page.svelte
```svelte
  <script lang="ts">
  import { items, title } from '@data/services';
  import { onMount } from 'svelte';

  import type { Service } from '$lib/types';

  import Chip from '$lib/components/Chip/Chip.svelte';
  import ServiceCard from '$lib/components/ServiceCard/ServiceCard.svelte';
  import SearchPage from '$lib/components/SearchPage.svelte';
  import UIcon from '$lib/components/Icon/UIcon.svelte';

  let search = '';
  let displayed: Array<Service> = [];

  $: {
      displayed = items.filter((service) => {
          const isSearched =
              search.trim().length === 0 ||
              service.name.trim().toLowerCase().includes(search.trim().toLowerCase());

          return isSearched;
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
  {#if displayed.length === 0}
      <div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
          <UIcon icon="i-carbon-cube" classes="text-3.5em" />
          <p class="font-300">Could not find any services...</p>
      </div>
  {:else}
      <div class="services-list mt-5" style="margin-bottom:50px">
          {#each displayed as service}
              <ServiceCard {service} />
          {/each}
      </div>
  {/if}
</SearchPage>

<style lang="scss">
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

## File: src/routes/services/services.md
```md
---
title: Our Services
layout: default
---

# Our Services

1. [Boost Your Team's Speed](/services/boost-team-speed)
2. [Unfinished Projects](/services/finish-projects)
3. [Handle Tedious Stuff](/services/handle-tedious-stuff)
4. [Extra Hands for New Projects](/services/extra-hands-new-project)
5. [Flexible Freelance Help](/services/flexible-freelance-help)
6. [Finish Half-Built Apps](/services/finish-half-built-app)
7. [Debugging and Optimization](/services/debugging-optimization)
8. [Future-Proof Your Codebase](/services/future-proof-codebase)
9. [Scaling Projects](/services/scale-projects)
10. [Complex Integrations](/services/complex-integrations)
```

## File: src/routes/services/+page.ts
```ts
import { items } from '@data/services';

export function load() {
    return {
        services: items
    };
}
```

## File: src/routes/services/[slug]/+page.svelte
```svelte
<script lang="ts">
      import { base } from '$app/paths';
    import { getAssetURL } from '$lib/data/assets';
    import { title } from '@data/services';

    import type { Service } from '$lib/types';

    import CardLogo from '$lib/components/Card/CardLogo.svelte';
    import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
    import Markdown from '$lib/components/Markdown.svelte';
    import TabTitle from '$lib/components/TabTitle.svelte';
    import Banner from '$lib/components/Banner/Banner.svelte';
    import UIcon from '$lib/components/Icon/UIcon.svelte';
    import CardDivider from '$lib/components/Card/CardDivider.svelte';

    export let data: { service?: Service; content: string | null };

    $: computedTitle = data.service ? `${data.service.name} - ${title}` : title;
    $: markdownContent = typeof data.content === 'string' ? data.content : '';
    $: console.log('Received data:', data); // Add this for debugging
    
</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden col flex-1" style="margin-bottom:50px">
    {#if data.service === undefined}
        <div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
            <UIcon icon="i-carbon-cube" classes="text-3.5em" />
            <p class="font-300">Could not load service data...</p>
        </div>
    {:else}
        <div class="flex flex-col items-center overflow-x-hidden">
            <Banner img={getAssetURL(data.service.image)}>
                <div class="col-center p-y-20">
                    <div class="text-0.9em">
                        <MainTitle>{data.service.name}</MainTitle>
                    </div>
                    <p class="font-300 text-center text-[var(--tertiary-text)] m-y-2">{data.service.type}</p>
                    <div class="w-75%">
                        <CardDivider />
                    </div>
                </div>
            </Banner>
            <div class="pt-3 pb-1 overflow-x-hidden w-full">
                <div class="px-10px m-y-5">
                    {#if markdownContent}
                        <Markdown content={markdownContent} />
                    {:else}
                        <div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
                            <UIcon icon="i-carbon-text-font" classes="text-3.5em" />
                            <p class="font-300">No detailed description available</p>
                        </div>
                        <p class="text-center mt-4">{data.service.shortDescription}</p>
                    {/if}
                </div>
            </div>
        </div>
    {/if}
</div>
```

## File: src/routes/services/[slug]/+page.ts
```ts
import { items } from '$lib/data/services';
import type { Service } from '$lib/types';

export async function load({ params }: { params: Record<string, string> }) {
    if (params.slug) {
        const service = items.find((item) => item.slug === params.slug);
        
        if (service) {
            try {
                const module = await import(`../${params.slug}.md`);
                let content = '';
                if (typeof module.default === 'function') {
                    const rendered = module.default.render();
                    content = rendered.html;
                } else if (typeof module.default === 'string') {
                    content = module.default;
                }
                console.log('Loaded content:', content); // Add this for debugging
                return { service, content };
            } catch (e) {
                console.error(`Could not load markdown for ${params.slug}`, e);
                return { service, content: null };
            }
        }
    }
    
    return {};
}
```


