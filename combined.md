# File Analysis Report

This document contains an analysis of the project files.

| No.   | File                                 | Lines    | Words    | AI Tokens |
| ----- | ------------------------------------ | -------- | -------- | --------- |
|  1    | ./package.json                       | 52       | 125      | 422       |
|  2    | ./svelte.config.js                   | 33       | 79       | 161       |
|  3    | ./tsconfig.json                      | 20       | 62       | 117       |
|  4    | ./uno.config.ts                      | 44       | 90       | 191       |
|  5    | ./vite.config.ts                     | 10       | 29       | 48        |
|  6    | ./combine.json                       | 34       | 40       | 134       |
|  7    | ./.env                               | 3        | 19       | 22        |
|  8    | ./cspell.json                        | 60       | 66       | 247       |
|  9    | ./.vscode/settings.json              | 189      | 197      | 768       |
|  10   | ./src/app.d.ts                       | 15       | 49       | 63        |
|  11   | ./src/app.html                       | 18       | 29       | 99        |
|  12   | ./src/lib/types.ts                   | 95       | 254      | 450       |
|  13   | ./src/lib/components/CommonPage.svelte | 15       | 37       | 83        |
|  14   | ./src/lib/components/Markdown.svelte | 32       | 72       | 145       |
|  15   | ./src/lib/components/SearchPage.svelte | 59       | 139      | 305       |
|  16   | ./src/lib/components/TabTitle.svelte | 11       | 25       | 62        |
|  17   | ./src/lib/components/Banner/Banner.svelte | 28       | 70       | 183       |
|  18   | ./src/lib/components/Card/Card.svelte | 114      | 324      | 724       |
|  19   | ./src/lib/components/Card/CardDivider.svelte | 2        | 5        | 17        |
|  20   | ./src/lib/components/Card/CardLink.svelte | 40       | 78       | 191       |
|  21   | ./src/lib/components/Card/CardLogo.svelte | 10       | 35       | 74        |
|  22   | ./src/lib/components/Card/CardTitle.svelte | 6        | 10       | 37        |
|  23   | ./src/lib/components/Carrousel/Carrousel.svelte | 102      | 258      | 528       |
|  24   | ./src/lib/components/Chip/Chip.svelte | 35       | 88       | 224       |
|  25   | ./src/lib/components/Chip/ChipIcon.svelte | 61       | 145      | 312       |
|  26   | ./src/lib/components/Chip/Footer/Footer.svelte | 71       | 193      | 403       |
|  27   | ./src/lib/components/ExperienceCard/ExperienceCard.svelte | 84       | 240      | 604       |
|  28   | ./src/lib/components/Icon/Icon.svelte | 23       | 45       | 101       |
|  29   | ./src/lib/components/Icon/Icons.ts   | 10       | 47       | 79        |
|  30   | ./src/lib/components/Icon/UIcon.svelte | 8        | 20       | 54        |
|  31   | ./src/lib/components/Input/Input.svelte | 28       | 56       | 132       |
|  32   | ./src/lib/components/MainTitle/MainTitle.svelte | 11       | 29       | 96        |
|  33   | ./src/lib/components/NavMenu/NavMenu.svelte | 216      | 534      | 1315      |
|  34   | ./src/lib/components/ProjectCard/ProjectCard.svelte | 74       | 233      | 601       |
|  35   | ./src/lib/components/Screenshot/Screenshot.svelte | 56       | 136      | 344       |
|  36   | ./src/lib/data/app.ts                | 2        | 9        | 11        |
|  37   | ./src/lib/data/assets.ts             | 132      | 300      | 1018      |
|  38   | ./src/lib/data/education.ts          | 32       | 104      | 209       |
|  39   | ./src/lib/data/experience.ts         | 600      | 4038     | 5517      |
|  40   | ./src/lib/data/home.ts               | 32       | 147      | 293       |
|  41   | ./src/lib/data/navbar.ts             | 26       | 187      | 395       |
|  42   | ./src/lib/data/projects.ts           | 266      | 3249     | 5765      |
|  43   | ./src/lib/data/resume.ts             | 4        | 10       | 13        |
|  44   | ./src/lib/data/search.ts             | 2        | 5        | 7         |
|  45   | ./src/lib/data/skills.ts             | 1565     | 16711    | 26646     |
|  46   | ./src/lib/data/documentation-sites.ts | 146      | 397      | 695       |
|  47   | ./src/lib/data/tools.ts              | 276      | 1587     | 1994      |
|  48   | ./src/lib/md/svelte.md               | 41       | 298      | 391       |
|  49   | ./src/lib/stores/theme.ts            | 48       | 146      | 279       |
|  50   | ./src/lib/utils/colors.ts            | 166      | 343      | 1101      |
|  51   | ./src/lib/utils/helpers.ts           | 172      | 603      | 1153      |
|  52   | ./src/lib/utils/index.ts             | 57       | 966      | 1043      |
|  53   | ./src/lib/utils/reTypeParser.ts      | 58       | 161      | 512       |
|  54   | ./src/lib/utils/customMarkdownParser.ts | 30       | 97       | 206       |
|  55   | ./src/routes/+layout.server.ts       | 2        | 5        | 6         |
|  56   | ./src/routes/+layout.svelte          | 45       | 96       | 208       |
|  57   | ./src/routes/+page.svelte            | 46       | 144      | 459       |
|  58   | ./src/routes/education/+page.svelte  | 92       | 246      | 612       |
|  59   | ./src/routes/experience/+page.svelte | 57       | 169      | 388       |
|  60   | ./src/routes/experience/[slug]/+page.svelte | 93       | 246      | 637       |
|  61   | ./src/routes/experience/[slug]/+page.ts | 12       | 37       | 61        |
|  62   | ./src/routes/projects/+page.svelte   | 109      | 285      | 610       |
|  63   | ./src/routes/projects/[slug]/+page.svelte | 140      | 353      | 899       |
|  64   | ./src/routes/projects/[slug]/+page.ts | 12       | 37       | 61        |
|  65   | ./src/routes/resume/+page.svelte     | 31       | 58       | 136       |
|  66   | ./src/routes/search/+page.svelte     | 97       | 259      | 597       |
|  67   | ./src/routes/skills/+page.svelte     | 52       | 143      | 401       |
|  68   | ./src/routes/skills/[slug]/+page.svelte | 115      | 310      | 733       |
|  69   | ./src/routes/skills/[slug]/+page.ts  | 12       | 37       | 61        |
|  70   | ./src/routes/documentation/+page.svelte | 24       | 65       | 171       |
|  71   | ./src/routes/tools/+page.svelte      | 91       | 214      | 635       |
|  72   | ./src/routes/tools/ai/+page.svelte   | 35       | 81       | 226       |
|  73   | ./src/routes/tools/[slug]/+page.svelte | 72       | 219      | 519       |
|  74   | ./src/routes/tools/[slug]/+page.ts   | 21       | 74       | 129       |
|  75   | ./src/routes/tools/data/+page.svelte | 35       | 81       | 226       |
|  76   | ./src/routes/tools/code/+page.svelte | 35       | 81       | 226       |
|  77   | ./src/routes/team/+page.svelte       | 89       | 211      | 629       |
|  78   | ./src/routes/team/[slug]/+page.svelte | 146      | 278      | 616       |
|  79   | ./src/routes/terms/+page.svelte      | 54       | 264      | 405       |
|  80   | ./src/routes/privacy/+page.svelte    | 46       | 194      | 327       |
|  81   | ./src/routes/contact/+page.svelte    | 110      | 252      | 798       |
|  82   | ./scripts/cvFetcher.js               | 1        | 0        | 0         |
|       | Total                                | 6998     | 37655    | 67360     |


## Total Counts Across All Files. Tokenizer Used: NLTK's Punkt Tokenizer
- Total Lines: 6998
- Total Words: 37655
- Total AI Tokens: 67360

## File: package.json
```json
{
    "name": "webally",
    "version": "0.0.1",
    "private": true,
    "scripts": {
        "dev": "vite dev --host",
        "build": "vite build",
        "preview": "vite preview",
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
        "@sveltejs/kit": "^1.27.3",
        "@types/dompurify": "^3.0.2",
        "@types/marked": "^5.0.0",
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
        "prettier": "^3.0.3",
        "prettier-plugin-svelte": "^3.0.3",
        "prismjs": "^1.29.0",
        "sass": "^1.57.1",
        "slugify": "^1.6.6",
        "svelte": "^4.2.19",
        "svelte-check": "3.5.2",
        "tslib": "^2.4.1",
        "typescript": "^5.2.2",
        "unocss": "^0.56.1",
        "vite": "^4.5.0"
    },
    "type": "module",
    "dependencies": {
        "dayjs": "^1.11.10"
    }
}
```

## File: svelte.config.js
```js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const base = '/slick-portfolio-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	vitePlugin: {
		inspector: {
			showToggleButton: 'always'
		}
	},
	kit: {
		adapter: adapter({ fallback: '404.html' }),
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
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import UnoCSS from 'unocss/vite';

const config: UserConfig = {
	plugins: [UnoCSS(), sveltekit()]
};

export default config;

```

## File: combine.json
```json
{
    "root_path": "/var/www/html/portfolio.webally.co.za",
    "output_path": "/var/www/html/portfolio.webally.co.za/combined.md",
    "gitignore_path": "",
    "exclude_folders": [
        ".history",
        "docs",
        "coverage",
        ".git",
        ".github",
        "node_modules",
        "backups",
        ".svelte-kit"
    ],
    "exclude_files": [
        "package-lock.json",
        "combined.md",
        "README.md",
        "modules/console.js",
        "generate_hashes.php",
        "src/lib/index.scss"
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

## File: .env
```
# .env
VITE_THEME_MODE=dark_only
# Set to 'dark_only' for dark mode only, or 'switchable' for both light and dark modes
```

## File: cspell.json
```json
{
	"version": "0.2",
	"ignorePaths": [],
	"dictionaryDefinitions": [],
	"dictionaries": [],
	"words": [
		"ANANZI",
		"ATKV",
		"Brandwag",
		"burndows",
		"CNA's",
		"deallocation",
		"deno",
		"Deno",
		"Donalds",
		"Duoporta",
		"Ekurhuleni",
		"extralight",
		"Feedforward",
		"grayscale",
		"Heita",
		"HEITA",
		"Inspectacar",
		"instanceof",
		"ISTIC",
		"Kanban",
		"keydown",
		"keyof",
		"keypress",
		"keyup",
		"Kumba",
		"Laerskool",
		"LURITS",
		"Menlyn",
		"Musofinder",
		"Nutella",
		"Ooops",
		"optimisations",
		"Platfrom",
		"Poort",
		"POSIX",
		"prerender",
		"Resumé",
		"sandboxed",
		"slef",
		"Teleric",
		"Tici",
		"Tinbo",
		"trunc",
		"Tshwane",
		"TSMA",
		"UNISA",
		"USAID",
		"Voortrekker",
		"Yara"
	],
	"ignoreWords": [],
	"import": []
}

```

## File: .vscode/settings.json
```json
{
	"files.exclude": {
		"**/.git": true,
		"**/.svn": true,
		"**/.hg": true,
		"**/CVS": true,
		"**/.DS_Store": true,
		"**/Thumbs.db": true
	},
	"hide-files.files": [],
	"cSpell.words": [
		"'s",
		"adrani",
		"Alexandre",
		"Anders",
		"Andrey",
		"AOSP",
		"APBCO",
		"Appium",
		"Armin",
		"artboards",
		"Artboards",
		"astro",
		"Attributify",
		"Audiphy",
		"Autoencoders",
		"Azur",
		"Berners",
		"Bjarne",
		"brinant",
		"Brinant",
		"BSON",
		"Carniato",
		"Catlin",
		"chatbots",
		"checksummed",
		"cinematics",
		"clhg",
		"clickjacking",
		"CNCF",
		"codebases",
		"columnstore",
		"Convolutional",
		"Cupertino",
		"DBAL",
		"developping",
		"dielines",
		"dompurify",
		"Dwida",
		"Dwidder",
		"Eich",
		"EPUB",
		"EPUBs",
		"exxaro",
		"Exxaro",
		"Fabien",
		"fastapi",
		"fastify",
		"Fastify",
		"Firestore",
		"flexbox",
		"Flexbox",
		"FNB",
		"freemium",
		"Gamification",
		"gamified",
		"garous",
		"geospatial",
		"Håkon",
		"Hejlsberg",
		"Hemphill",
		"Holovaty",
		"Holowaychuk",
		"hoverable",
		"hyperlog",
		"iconify",
		"Idera",
		"IDML",
		"imvula",
		"Imvula",
		"INDD",
		"indesign",
		"infographics",
		"inlines",
		"Intelli",
		"Interpretability",
		"Ionicons",
		"ISAM",
		"jailbreaking",
		"Joomla",
		"Kawaguchi",
		"Keras",
		"Kohsuke",
		"laravel",
		"Laravel",
		"leaderboards",
		"Leaderboards",
		"Lerdorf",
		"Lightroom",
		"LINQ",
		"LSTM",
		"LUM",
		"Lumetri",
		"Mecanim",
		"MERN",
		"microframework",
		"MMORPGs",
		"multiplatform",
		"Multiversion",
		"MVCC",
		"navbars",
		"Neuromorphic",
		"OLTP",
		"Otwell",
		"overfit",
		"overfitting",
		"pageworks",
		"Pantone",
		"photoshop",
		"Photoshop",
		"platformers",
		"pluggability",
		"PNA",
		"Potencier",
		"Preact",
		"prismjs",
		"proxying",
		"rabbitmq",
		"Rasmus",
		"Razvan",
		"RDBMS",
		"Reinink",
		"riadh",
		"Riverpod",
		"Ronacher",
		"Rossum",
		"Rotoscoping",
		"ruvy",
		"Ruvy",
		"sandboxing",
		"Sanfilippo",
		"Sanlam",
		"Schoger",
		"scikit",
		"Scrapy",
		"Scriptable",
		"Sébastien",
		"Sensei",
		"servlet",
		"sharded",
		"Sitnik",
		"Skia",
		"spriting",
		"Stoenescu",
		"Stroustrup",
		"superintelligence",
		"sybase",
		"symfony",
		"Symfony",
		"Synthiq",
		"Sysoev",
		"templating",
		"theorient",
		"Thierclieux",
		"todos",
		"toolkits",
		"toolset",
		"transcompiles",
		"transformative",
		"tribake",
		"Tribake",
		"unocss",
		"Unocss",
		"VDOM",
		"veet",
		"viewmodel",
		"Vuex",
		"Wathan",
		"Wayfinding",
		"Weizenbaum",
		"Widenius",
		"Willison",
		"Windi",
		"Wium",
		"WORA",
		"Wroddit"
	]
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
    <meta name="viewport" content="width=device-width" />
    <script>
        document.documentElement.setAttribute('data-theme', 'dark');
    </script>
    %sveltekit.head%
</head>

<body data-sveltekit-preload-data="hover">
    <div style="display: contents">%sveltekit.body%</div>
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
	StackShare = 'stackShare'
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
<!-- src/lib/components/Footer/Footer.svelte -->
<script lang="ts">
	import { base } from '$app/paths';
	import { items } from '@data/navbar';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const currentYear = new Date().getFullYear();
	const footerNavItems = items.filter((item) => item.position === 'footer');

	let showLegal = false;

	onMount(() => {
		const handleScroll = () => {
			const scrollPosition = window.innerHeight + window.scrollY;
			const documentHeight = document.documentElement.offsetHeight;
			showLegal = scrollPosition >= documentHeight - 10;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<footer class="fixed bottom-0 left-0 right-0 bg-black text-white">
	{#if showLegal}
		<div
			class="py-1 transition-all duration-300 ease-in-out"
			class:opacity-0={!showLegal}
			class:opacity-100={showLegal}
		>
			<div class="container mx-auto px-4">
				<p class="text-center text-xs">
					&copy; {currentYear} Charl Cronje. All rights reserved.
				</p>
			</div>
		</div>
	{/if}
	<div class="container mx-auto px-0">
		<nav class="h-12 flex items-end pb-0">
			<!-- Increased height and aligned items to bottom -->
			<ul class="flex justify-center items-center w-full list-none">
				{#each footerNavItems as item}
					<li class="mx-4">
						<a
							href={`${base}${item.to}`}
							class="flex items-center no-underline text-white group"
							class:active={$page.url.pathname === item.to}
						>
							<UIcon icon={item.icon} classes="mr-2 text-xl" />
							<span class="group-hover:text-gray-300 transition-colors duration-200 text-sm">
								{item.title}
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</footer>

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

## File: src/lib/components/Icon/Icons.ts
```ts
import { Icons } from '$lib/utils';

export const viewBox = (icon: Icons) => {
	if (icon === Icons.Youtube) return '0 0 461.001 461.001';

	if (icon === Icons.Facebook) return '0 0 408.788 408.788';

	return [Icons.GitHub, Icons.Search, Icons.Code].includes(icon) ? '0 0 16 16' : '0 0 24 24';
};

```

## File: src/lib/components/Icon/UIcon.svelte
```svelte
<script lang="ts">
	export let icon: `i-${string}-${string}` | undefined = undefined;

	export let classes = '';
</script>

<i class={`${icon} ${classes}`} />

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

	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';

	$: currentRoute = $page.url.pathname;

	let expanded = false;

	const toggleExpanded = (v?: boolean) => {
		if (typeof v === 'undefined') {
			expanded = !expanded;
		} else {
			expanded = v;
		}
	};

	$: headerItems = items.filter((item) => item.position === 'header');
	$: verticalItems = items.filter((item) => item.position === 'sidebar');
</script>

<div class="nav-menu">
	<nav class="container flex flex-row items-center text-sm">
		<a
			href={`${base}/`}
			class="nav-menu-left decoration-none w-auto md:w-150px lg:w-auto row flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]"
		>
			<UIcon icon="i-carbon-code" classes="text-2em" />
			<span
				class="ml-2 text-md font-bold hidden md:inline overflow-hidden whitespace-nowrap text-ellipsis"
				>{HOME.name} {HOME.lastName}</span
			>
		</a>
		<div class="flex-1 block overflow-hidden md:hidden whitespace-nowrap text-ellipsis text-center">
			{HOME.name}
			{HOME.lastName}
		</div>
		<div class="flex-row flex-1 self-center h-full justify-center hidden md:flex">
			{#each headerItems as item (item.title)}
				<a href={`${base}${item.to}`} class="nav-menu-item !text-[var(--secondary-text)]">
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
					href={`${base}${item.to}`}
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
		class="vertical-nav hidden md:flex flex-col fixed right--1	 top-1/2 transform -translate-y-1/2"
	>
		{#each verticalItems as item}
			<a
				href={`${base}${item.to}`}
				class="nav-menu-item vertical text-sm !text-[var(--secondary-text)] mb-2"
			>
				<UIcon icon={item.icon} classes="text-1.3em" />
				<span class="nav-menu-item-label">{item.title}</span>
			</a>
		{/each}
	</div>
</div>

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

	.vertical-nav {
		z-index: 20;
	}

	.nav-menu-item.vertical {
		writing-mode: vertical-rl;
		transform: rotate(180deg);
		padding: 20px 10px;
		background-color: var(--main);
		border-radius: 10px 0 0 10px;
		box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);

		&:hover {
			background-color: var(--main-hover);
		}

		.nav-menu-item-label {
			margin-top: 10px;
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

## File: src/lib/data/app.ts
```ts
export const titleSuffix = 'Your Ally in Online Efficiency';

```

## File: src/lib/data/assets.ts
```ts
import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';
import { base } from '$app/paths';

const gh = (file: string) => `${base}/logos/${file}`;

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);

const Assets = {
	AdonisJs: gh('adonis.png'),
	AfterEffects: gh('after-effects.svg'),
	AI: gh('ai.svg'),
	Android: gh('android.png'),
	Angular: gh('angular.png'),
	AWS: gh('aws.svg'),
	Azure: gh('azure.svg'),
	Bootstrap: gh('bootstrap.svg'),
	C: gh('c.svg'),
	Celery: gh('celery.svg'),
	CircleCI: gh('circleci.svg'),
	Cpp: gh('cpp.svg'),
	CSS: gh('css.svg'),
	Csharp: gh('csharp.svg'),
	Dart: gh('dart.png'),
	Deep: gh('pandas.svg'),
	Delphi: gh('delphi.png'),
	DeepLearning: gh('deep-learning.svg'),
	Deno: gh('deno.png'),
	Django: gh('django.svg'),
	Docker: gh('docker.svg'),
	Electron: gh('electron.png'),
	ExpressJs: gh('express.png'),
	FastApi: gh('fastapi.svg'),
	Fastify: gh('fastify.svg'),
	Firebase: gh('firebase.png'),
	Flask: gh('flask.svg'),
	Flutter: gh('flutter.svg'),
	GCP: gh('gcp.svg'),
	Git: gh('git.svg'),
	Go: gh('go.svg'),
	HTML: gh('html.svg'),
	Illustrator: gh('illustrator.svg'),
	InDesign: gh('indesign.svg'),
	IOS: gh('ios.svg'),
	Java: gh('java.png'),
	JavaScript: gh('js.png'),
	Jenkins: gh('jenkins.svg'),
	Jest: gh('jest.png'),
	Kafka: gh('kafka.svg'),
	Kotlin: gh('kotlin.png'),
	Kubernetes: gh('kubernetes.svg'),
	Laravel: gh('laravel.svg'),
	MachineLearning: gh('machine-learning.svg'),
	MongoDB: gh('mongodb.svg'),
	MSSQL: gh('mssql.svg'),
	MySQL: gh('mysql.svg'),
	NestJs: gh('nest.svg'),
	Neo4j: gh('neo4j.svg'),
	Nginx: gh('nginx.svg'),
	NodeJs: gh('node.png'),
	Nuxt: gh('nuxt.png'),
	Numpy: gh('numpy.svg'),
	Oracle: gh('oracle.svg'),
	PHP: gh('php.svg'),
	Photoshop: gh('photoshop.svg'),
	Postcss: gh('postcss.svg'),
	PostgreSQL: gh('postgres.png'),
	Premiere: gh('premiere.svg'),
	Python: gh('python.png'),
	Quasar: gh('quasar.svg'),
	RabbitMQ: gh('rabbitmq.svg'),
	ReactJs: gh('react.svg'),
	ReactNative: gh('react-native.svg'),
	Redis: gh('redis.svg'),
	Ruvy: gh('ruvy.svg'),
	Rust: gh('rust.svg'),
	Sass: gh('sass.png'),
	Scrapy: gh('scrapy.png'),
	Selenium: gh('selenium.svg'),
	SolidJs: gh('solid.svg'),
	Solid: gh('solid.svg'),
	Svelte: gh('svelte.png'),
	Symfony: gh('symfony.svg'),
	Tailwind: gh('tailwind.svg'),
	Travis: gh('travis.svg'),
	TypeScript: gh('ts.png'),
	Unity: gh('unity.svg'),
	Unknown: gh('unknown.svg'),
	Unocss: gh('unocss.svg'),
	Unreal: gh('unreal.svg'),
	Vite: gh('vite.png'),
	Vitest: gh('vitest.svg'),
	VueJs: gh('vue.png'),
	Xamarin: gh('xamarin.svg'),

	ACSA: gh('acsa.png'),
	Tribake: gh('tribake.png'),
	AngloAmerican: gh('angloAmerican.svg'),
	APBCO: gh('apbco.png'),
	BrinantSecurity: gh('brinant.png'),
	CavalierAbattoirs: gh('cavalier.png'),
	CityLodge: gh('clhg.png'),
	Exxaro: gh('exxaro.png'),
	FNB: gh('fnb.png'),
	TheOrientHotel: gh('theorient.png'),
	LegacyUnderwriting: gh('legacy.png'),
	ImvulaICD: gh('imvula.png'),
	ImperialLogistics: gh('imperial.png'),
	TheCarShop: gh('carshop.png'),
	PrincipalSoftware: gh('d6.png'),
	PNA: gh('pna.png'),

	Webally: gh('webally.svg'),
	VaneSystems: gh('vane.png'),
	PCPalace: gh('pcpalace.jpg'),
	RAM: gh('ram.png'),
	CNN: gh('cnn.png'),
	Nexus: gh('nexus.svg'),
	Pageworks: gh('pageworks.png'),
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};

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

## File: src/lib/data/experience.ts
```ts
// src/lib/data/experience.ts
import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'webally-self-employed',
		company: 'webAlly',
		description: `<b>webAlly is the company name under which I do all my freelance work, I established the company in 2006.</b> Over the years I've accepted print work, advertising work, video, graphic design, web-development, custom hardware development, embedded programming and Software Development.

<b>Awarded Tenders:</b>
Was awarded tenders from:
- USAID on the PEPFAR project
- Municipality of Ekurhuleni
- Imperial Logistics

<b>Some of my clients & Projects:</b>
- ACSA - Airport Company South Africa
- Airport Company South Africa - 3D Airport Explore
- Airport Company South Africa - 3D Airport Game
- Airport Company South Africa - Duty free Shopping
- Alex May Inc - Case Management System
- Alex May Inc - Document Encryption
- Alex May Inc - Document Management Systems (DMS)
- ANANZI - Online Marketing / Banners
- Anglo American - E-Mail Marketing
- Electronic Invitations
- Anglo Gold - Electronic Invitations
- Anglo Gold - Website
- APBCO Insurance - Asset Management System
- ATKV - Website and Print
- Best4Kids - Website & Customer Portal
- BKS Engineers - Website
- BlueJam Photography - Website
- Brandwag School - Promotional Video
- Brinant Security - Shift and Staff Management System
- Cavalier Abattoirs - Process Management System
- Cavalier Abattoirs - Quote and Invoice System
- Cavalier Abattoirs - Vehicle Maintenance System
- Cavalier Abattoirs - Vehicle Tracking and  System
- Cavalier Livestock - Website
- CE @ UP - Multimedia Presentation
- City Lodge - Bid2Stay Website
- City Lodge - Online Booking System
- City Lodge - System Integration
- City Lodge - Website
- City Lodge Hotel Group
- Collect-a-Can - Website
- Constantia Village Mall - Marketing System
- Continuing Education At University of Pretoria
- Die Poort School - Christmas Market Sales System
- DIY Weddings - Website
- DLC Group
- DLC Group - Website
- DOTCOM Trading - Data Capturing Software
- DOTCOM Trading - Database Development
- DOTCOM Trading - GIS (Geographical Information Systems)
- Duoporta - Vehicle Valuations System
- Emperors Palace - Event Promotions
- Exxaro - Internal Communication System
- Exxaro - IZone Staff Empowerment System
- Exxaro - Online Quiz Game
- Exxaro - Software for Real Life Quiz Game, Custom Hardware
- Fear Factor Candy - Website
- FGX Studios
- FGX Studios - CMS Centred
- FGX Studios - CMS Development
- FGX Studios - CMS Ignition
- FGX Studios - Mall Management System
- FNB - Corporate Identity Development
- Goldfield Logistics - Intranet
- Imperial Distribution
- Imperial Logistics
- Imperial Logistics - Building Management System
- Imperial Logistics - Document Management System
- Imperial Logistics - HR Management System
- Imvula ICD - Asset Management System
- Imvula ICD - Server Monitoring System
- Imvula ICD - Software License Management System
- InGenius - Website
- Inspectacar - Online Car Market System
- IQ Recruitment - Candidate Management System
- Kumba Iron Ore - Annual Report
- Laerskool Die Poort
- Legacy Underwriting Managers - Portfolio Management System
- LURITS - Learner Performance Management System
- Mac Mobile - Product Distribution System
- McDonald's
- Musofinder - Website
- Nutella - Billboards and Posters
- Ombudsman - Case Management System
- One Red Marble - Website
- OZ Pharmaceuticals - Website
- PC Palace - Service and Product Repair
- Nexus Online - Website
- PC Palace - Website
- Pencil Box - School Admin System
- PNA - E-Commerce
- PNA - Product Management System
- Principal Software - Custom Online IDE
- Principal Software - Custom Version Control System
- Principal Software - School Admin System
- Principle Software
- Quick PC - Billboards
- Restaurant Mosaic - Point of Sale System
- Restaurant Mosaic - Website
- Student Village - System Analysis
- Super Soil - Brand Development
- T-Systems - Website
- The Car Shop - Website
- The Orient Hotel - Hotel Management System
- The Orient Hotel - Point of Sale System
- The Orient Hotel - Website
- The Orient Hotel - Website
- TiciBox - Point Of Sale Systems
- Tribake - Quote and Invoice System
- Tshwane University of Technology - Website
- TSMA - Website
- TUT Heita Newsletter (Award Winner)
- TUT Pharmaceuticals Department - Website
- UNISA - Annual Report
- UNISA Law Department - Website
- UNISA Math Department - Game
- University of Pretoria - Multimedia Presentation
- Urban Crew - Website
- USAID - NGO and Financial Management System
- Vane Systems - Bus Ticket Booking System
- Vane Systems - Event Ticketing System
- Vane Systems - Indoor Venue Maps (SVG, XML)
- Voortrekker Monument - Website
- WebOnline - Website
- Yara International - Website and Branding

<b>Achievements:</b>
- Won 1st prize for 2 years running for the best electronic publication in South Africa for TUT's monthly newsletter called HEITA
- I believe webAlly was one of few web development companies that also did print work. I outsourced all the non electronic media and got help with some of the hardware development but - I've always tried to keep the development close and to learn as much as possible, programming is truly a my passion.
- In 2019, for McDonalds I Created and Launched Tinbo Dash, a PC and Android Infinite Runner type game where players could win vouchers by playing the game. We had over a million game played in 4 weeks.

<b>HeEPP - Hyper extensible Element Pre-Processor:</b>
When I started doing freelance work I got a lot of the same kind of projects and I started creating modules I can re-use for different projects. These modules grew into a framework that I initially called \`webCore\`. Eventually after years the MVC framework I created was at the stage where it was the only tool I used for all my projects if the client had no particular preference. During this time I got a 2 year contract from Cavalier Abattoirs to create a complete process management system and invoice system. This gave me the chance to refine webCore and I renamed it HeEPP.

I named it HeEPP or Hyper extensible Element Pre-Processor because of the way the system focused or creating re-usable elements. Elements can be used within elements and elements can be extended by others. This was years before Google Polymer started doing the same but only on the front-end. 

In HeEPP you create custom HTML tags that is then called an element.
Each element has a corresponding PHP class with the same name
The attributes of the tag updates the properties of the PHP class and the PHP class will then render the element in various ways depending or those properties.
Elements can be used in loops and they can be nested and grouped. Building a system that comprises of re-usable elements you only have to create once and test once and that you can then build bigger elements with is surprisingly efficient and very stable and easy to maintain and test. The past few years I haven't had the time I wanted to finish the docs but I'm busy with that now in 2022 and I hope to get this done before May 2022 and then putting it out there for the public to comment and help out if they would like to. I hope to compete with Laravel from 2024 for the top spot in PHP MVC Frameworks`,
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2019, 0, 1) },
		skills: getSkills('js', 'ts', 'php', 'python', 'java', 'kotlin', 'react', 'vue', 'angular', 'nodejs', 'laravel', 'symfony', 'django', 'flask', 'mongodb', 'mysql', 'postgresql', 'docker', 'kubernetes', 'aws', 'azure', 'gcp', 'android', 'ios', 'react-native', 'flutter', 'ai', 'machine-learning'),
		name: 'Senior Full-Stack Developer',
		color: 'blue',
		links: [
			{ to: 'https://webally.co.za', label: 'Company Website' },
			{ to: 'https://cv.webally.co.za', label: 'Resume Website' },
			{ to: 'https://blog.webally.co.za', label: 'webAlly Blog' },
			{ to: 'https://docs.webally.co.za', label: 'webAlly Wiki' },
			{ to: 'https://nav.webally.co.za', label: 'webAlly Dashboard' }
		],
		logo: Assets.Webally, // Replace with webAlly logo when available
		shortDescription: 'Providing comprehensive software development services as a self-employed developer.'
	},
	{
		slug: 'vane-systems',
		company: 'Vane Systems',
		description: `<b>Vane Systems creates and integrates with payment solutions as well as booking / Ticketing Systems.</b>

During my time at Vane Systems I maintained the C# RestFull API SOAP Service and PHP GraphQL API.
The company also does bus bookings and integrates with Greyhound and InterCape. They also do event booking systems point of sale systems and credit card machines.
Like with most Senior developers I had a hand in most of what was going on. Security was of great concern with many of the systems as well as physical access control systems as well as document encryption.
The development team worked on an Agile The company manages the developers with an agile methodology, test driven development, scrums, burndows, Kanban boards etc.

<b>Reason for leaving:</b>
I left because I broke my back and was out of action for months, but since then I've no problems at all.

<b>Other Tasks:</b>
- API Integration
- Authentication including OAuth 2
- Check and Apply Coding Standards
- Database Development
- Management Tools and Business Logic
- Project Management
- Project Planning
- Server Management
- System Analysis

<b>PHP 5.6 and PHP 7:</b>
- Custom MVC PHP Framework
- Laravel
- Laravel Lighthouse
- Laravel Passport
- Object Orientated
- PHP
- SaaS (Software as a Service)
- Web Services (Restful & SOAP)

<b>Database Management:</b>
- MSSQL
- Mysql
- SQLite

<b>Indoor Mapping:</b>
- WSDL
- XML DTD
- XML Schema's
- XPath
- XML
- SVG
- XHTML
- XSLT

<b>GIS:</b>
- Geographic Information Systems (GIS)
- Mapping and Geo Reverse Tracking
- Route Planning
- SQL Integration

<b>Server Administrator:</b>
- Apache
- CentOS 7
- FreeBSD Mail Server
- MariaDB
- MySQL
- NginX Reverse Proxy
- PHP

<b>Security:</b>
- Biometrics
- Digital Signatures
- Document Encryption
- Facial Recognition
- Location Based Authentication Methods
- Voice Recognition

<b>Android App Development:</b>
- Custom Hardware Development
- Java
- Point Of Sale Systems
- SQLite
- Teleric
- XML

<b>CSS Frameworks & Pre-processors:</b>
- Bootstrap
- Foundation
- Material - SASS
- Less CSS
- Stylus

<b>Version Systems Control:</b>
- GIT
- SVN`,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Johannesburg, South Africa',
		period: { from: new Date(2018, 0, 1), to: new Date(2019, 1, 1) },
		skills: getSkills('csharp', 'php', 'graphql', 'mysql', 'postgresql', 'docker', 'kubernetes'),
		name: 'Senior Full-Stack Developer',
		color: 'green',
		links: [],
		logo: Assets.VaneSystems, // Replace with Vane Systems logo when available
		shortDescription: 'Developed and maintained API services and various booking systems.'
	},
	{
		slug: 'webally-2015',
		company: 'webAlly',
		description: `<b>webAlly is the company name under which I do all my freelance work, I established the company in 2006.</b> Over the years I've accepted print work, advertising work, video, graphic design, web-development, custom hardware development, embedded programming and Software Development.<br>

<b>Awarded Tenders:</b><br>
Was awarded tenders from:<br>
- USAID on the PEPFAR project<br>
- Municipality of Ekurhuleni<br>
- Imperial Logistics<br>`,
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2015, 3, 1), to: new Date(2017, 11, 1) },
		skills: getSkills('JavaScript', 'php', 'mysql', 'html', 'Flash','ActionScript', 'Database Management','XML'),
		name: 'Founder & Senior Full-Stack Developer',
		color: 'lime',
		links: [
			{ to: 'https://webally.co.za', label: 'Company Website' },
			{ to: 'https://cv.webally.co.za', label: 'Resume Website' },
			{ to: 'https://blog.webally.co.za', label: 'webAlly Blog' },
			{ to: 'https://docs.webally.co.za', label: 'webAlly Wiki' },
			{ to: 'https://nav.webally.co.za', label: 'webAlly Dashboard' }
		],
		logo: Assets.Webally, // Replace with webAlly logo when available
		shortDescription: 'Providing comprehensive software development services as a self-employed developer.'
	},
	{
		slug: 'legacy-underwriting-managers',
		company: 'Legacy Underwriting Managers',
		description: `<b>Legacy Insurance Underwriting Managers (LUM)</b>

Software for general insurance underwriting, systems and processes will allow you as our client access to your portfolio in real time wherever you are and offers you improved communication with your client.

Web: <a href="https://www.lum.co.za">www.lum.co.za</a>

At LUM I worked as a senior PHP developer on a web-based system for insurance. My main responsibility was to maintain LUM's underwriting software. This web-based system is used by insurance brokers who sell insurance for multiple underwriters. The system integrates with Sanlam, Budget, APBCO, and a few more. The type of systems are really quite extensive and is of course mainly focused to make sure all the financial are done correctly and that there is a proper audit trail for all transactions. Once unique thing I've only encountered at this company was the Database technology the used for the system: Sybase, a Columnar Databases.

- A columnar database is a database management system (DBMS) that stores data in columns instead of rows. 
- Columnar databases store data in a way that greatly improves disk I/O performance. They are particularly helpful for data analytics and data warehousing.

<b>Some of the system features:</b>
- Policy administration and claims management
- Claims Automation
- Insurance Admin Systems
- Insurance Policy Administration
- Broker Policy

<b>Reason for leaving:</b>
Vane Systems offered me a R10 000 increase

<b>Other Tasks:</b>
- POS System for Mosaic Restaurant that is owned by the same person
- Asset Management System for LUM, APBCO and The Orient Hotel
- Website for The Orient Hotel
- I built all of these side projects on HeEPP (My PHP MVC Framework)

<b>PHP:</b>
- Custom MVC PHP Framework
- WebCore (HeEPP)
- Object Orientated
- SaaS (Software as a Service)
- Web Services (Restful & SOAP)

<b>Databases:</b>
- Mysql
- Sybase

<b>Server Administrator:</b>
- Apache
- MySQL
- PHP

<b>Security:</b>
- Digital Signatures
- Document Encryption

<b>CSS Frameworks & Pre-processors:</b>
- Bootstrap
- Foundation
- Material Design

<b>Version Control:</b>
- GIT`,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2014, 1, 1), to: new Date(2015, 2, 1) },
		skills: getSkills('php', 'mysql', 'sybase', 'js', 'css', 'html'),
		name: 'Senior PHP Developer',
		color: 'red',
		links: [
			{ to: 'https://www.lum.co.za', label: 'Company Website' }
		],
		logo: Assets.LegacyUnderwriting, // Replace with LUM logo when available
		shortDescription: 'Developed and maintained web-based insurance underwriting systems.'
	},
	{
		slug: 'principal-software',
		company: 'Principal Software (D6 Group)',
		description: `<b>When I worked for d6 Group it was still known as Principal Software.</b> I believe the main focus of the company is still admin systems for schools. When I started they rolled out to 30 schools, each school on their own server and own code base. This presented many challenges:

- New updates were a process of deploying the code and DB migrations on 30 servers.
- It took an entire day and if there was a complication at just one school we did a rollback on all.

The first update I proposed was to combine all code bases. This presented a bigger challenge than I thought for some strange reasons. The whole system was written in 1 very, very, very long PHP file. I believe it was a 12MB text file. What I found out later was that the original developer was in fact blind and coded the whole system with text to speech and knowing almost exactly what line of code did what. I was honestly impressed and shocked at the same time.

- I took some time and I split the file into hundreds of smaller files
- The first update I did was deploying the same code, but just split into smaller pieces, but just to one server and we created sub-domains for each school, the sub-domain also determined the DB name the system connected to. We decided to leave each school on their own database since none of the tables had a \`school_id\` or any unique identifier that would differentiate each school's data
- During the time I was there the company grew from being 3 people to more than 40 with over 2000 schools using the system with almost a million users. Working for this company was a real adventure and I enjoyed every day. I loved the people and how the product evolved.

Web: <a href="https://d6.co.za/education/products/d6-plus/">https://d6.co.za/education/products/d6-plus/</a>

<b>Some of the system features:</b>
- <b>Administration:</b>
  - Task-Driven Workflow
  - General School Admin
  - Learner l Parent l Staff
  - Code of Conduct
  - Compliance
  - Communication
- <b>Finance:</b>
  - General Ledger
  - Budget
  - Debtors
  - Creditors
  - Cash Book
  - Projects
- <b>Curriculum:</b>
  - Curriculum Setup
  - Promotion Criteria
  - Marks Computing
  - Report Cards
  - Certificates
  - Report Card Remarks

<b>Reason for leaving:</b>
For some reason it felt like my job was done and I needed to move on, we were a dev team of 6 people by then and I trusted that they would be fine without me.

<b>Other Tasks:</b>
- Project Management
- Server Management
- Department Manager
- Lead Developer
- Created online IDE where everyone worked, this prevented us from working on the same files at the same time. We were still using SVN, and I think that everyone who's worked with SVN knows how working on the same files can sometimes cause you to roll back an entire dev cycle.
- Training
- System Analysis
- Maintenance

<b>PHP:</b>
- Custom MVC PHP Framework
- WebCore (HeEPP)
- Object Orientated
- SaaS (Software as a Service)
- Web Services (Restful & SOAP)

<b>Databases:</b>
- Mysql
- Sybase

<b>Server Administrator:</b>
- Apache
- MySQL
- PHP

<b>Security:</b>
- Digital Signatures
- Document Encryption

<b>CSS Frameworks & Pre-processors:</b>
- Bootstrap
- Foundation
- Material Design

<b>Version Control:</b>
- GIT`,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2011, 11, 1), to: new Date(2014, 1, 1) },
		skills: getSkills('php', 'mysql', 'js', 'css', 'html'),
		name: 'Senior PHP Developer',
		color: 'purple',
		links: [
			{ to: 'https://d6.co.za', label: 'Company Website' }
		],
		logo: Assets.PrincipalSoftware, // Replace with D6 Group logo when available
		shortDescription: 'Led development of school administration systems used by thousands of schools.'
	},
	{
		slug: 'webally-2006',
		company: 'webAlly',
		description: 'started webAlly in March 2006, I believe it was one of the first web development companies in Pretoria.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2006, 0, 1), to: new Date(2011, 11, 1) },
		skills: getSkills('JavaScript', 'php', 'mysql', 'html', 'Flash','ActionScript', 'Database Management','XML'),
		name: 'Founder & Senior Full-Stack Developer',
		color: 'lime',
		links: [
			{ to: 'https://webally.co.za', label: 'Company Website' },
			{ to: 'https://cv.webally.co.za', label: 'Resume Website' },
			{ to: 'https://blog.webally.co.za', label: 'webAlly Blog' },
			{ to: 'https://docs.webally.co.za', label: 'webAlly Wiki' },
			{ to: 'https://nav.webally.co.za', label: 'webAlly Dashboard' }
		],
		logo: Assets.Webally, // Replace with webAlly logo when available
		shortDescription: 'Providing comprehensive software development services as a self-employed developer.'
	},
	{
		slug: 'pageworks',
		company: 'PageWorks',
		description: `<b>PageWorks was a Advertising Agency, this was my first job where I was employed specifically for just web-development, but my title at the office was HEAD WEB DEVELOPER</b>, I guess that was only because I was the only one, and not because I was in change of anyone else. We did however employ two more people in the department during the course of the year it felt good doing my title justice.
This was during the time of IE6, JQuery just started getting some traction and most websites were images cut up into tables. The web was very simplistic, you could only safely use 5 different fonts, I knew all the CSS rules, I honestly did not think JavaScript had any future, I treated it as a bad joke, I honestly believe that if Jquery did not come and save JavasScript then it might have been trashed together with Objective C, Turbo Pascal and AT&T Unix Operating System.

<b>Tasks and Tech:</b>
- Section manager
- Web Developer
- Web applications including e-commerce, content management, invoicing systems, resource management
- Php , Asp .net, Visual Basic, MySql, MSSql, Delphi, Access, Flash
- Graphic design
- Video editing
- Multi-Media
- Customer support
- Sales

<b>Reason for leaving:</b>
I got married and I decided to start working as a freelancer to have more time at home, little did I know that working for yourself is a lot more hours than working for someone else.`,
		contract: ContractType.FullTime,
		type: 'Web Development',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2005, 11, 1), to: new Date(2006, 1, 1) },
		skills: getSkills('php', 'asp', 'mysql', 'mssql', 'js', 'css', 'html'),
		name: 'Head Web Developer',
		color: 'orange',
		links: [],
		logo: Assets.Pageworks, // Replace with PageWorks logo when available
		shortDescription: 'Led web development projects in an advertising agency setting.'
	},
	{
		slug: 'pc-palace',
		company: 'PC Palace',
		description: `<b>I was studying to become a lawyer back then, but to pay for my studies I started working at PC Palace as a techie.</b> I've always had an interest in computers and I knew much o what I knew back then by just playing around at home, constantly reinstalling Windows 95 from 22 2.5" Disks that I bought on special from CNA's grand opening in Menlyn mall for R20. Before the days of owning a CD-ROM and before you could hope to download more than 10MB over an entire weekend.
The technical department booked in repairs with an Access database running on the Windows Server 2003. The database constantly kicked people out and caused loads of frustration. That is when I decided to create my very first website, I did some research and decided on a LAMP Stack, I've got no idea how it happened that I chose Apache, PHP and Mysql. It took me about two months and many sleepless nights but I completed the new system for the technical department. After that they put me in charge of the company website. Then some of the company's clients also started paying them for development until PageWorks offered me the Lead Web Developer role for 6 times what I was earing at PC Palace.
That was it, I never looked back.

<b>Tasks & Tech:</b>
- Customer support
- Web Master
- Web applications including e-commerce
- PHP, Asp .net, Visual Basic, MySQL, MSSQL
- Graphic design
- Installing networks and maintaining networks
- Server installations
- Hardware Troubleshooting
- Sales

<b>Reason for leaving:</b>
I got married and I decided to start working as a freelancer to have more time at home, little did I know that working for yourself is a lot more hours than working for someone else.`,
		contract: ContractType.FullTime,
		type: 'IT Support / Web Development',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2004, 7, 1), to: new Date(2005, 11, 1) },
		skills: getSkills('php', 'mysql', 'js', 'css', 'html'),
		name: 'IT Technician / Web Developer',
		color: 'cyan',
		links: [],
		logo: Assets.PCPalace, // Replace with PC Palace logo when available
		shortDescription: 'Transitioned from IT support to web development, creating internal systems and client websites.'
	},
	{
		slug: 'nexus-online',
		company: 'Nexus Online',
		description: `<b>Tasks & Tech:</b>
One of my friends owned an internet cafe / Web-Hosting company, I helped out when I could while I was studying

- Web / graphic design
- Networking
- Customer service
- Support
- Sales`,
		contract: ContractType.PartTime,
		type: 'Web Design / IT Support',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2004, 1, 1), to: new Date(2004, 7, 1) },
		skills: getSkills('html', 'css', 'js'),
		name: 'Web Designer / IT Support',
		color: 'teal',
		links: [],
		logo: Assets.Nexus, // Replace with Nexus Online logo when available
		shortDescription: 'Provided web design and IT support services for an internet cafe and web hosting company.'
	},
	{
		slug: 'ram-london',
		company: 'RAM',
		description: `<b>Technician:</b>
- Technical support
- Computer repair
- Software installation
- Computer building`,
		contract: ContractType.FullTime,
		type: 'IT Support',
		location: 'London, England',
		period: { from: new Date(2003, 7, 1), to: new Date(2004, 11, 1) },
		skills: getSkills('hardware', 'software-installation'),
		name: 'Technician',
		color: 'indigo',
		links: [],
		logo: Assets.RAM, // Replace with RAM logo when available
		shortDescription: 'Provided comprehensive IT support and computer services in London.'
	},
	{
		slug: 'cnn-london',
		company: 'CNN',
		description: `<b>Equipment & Personal:</b>
- Keep track of personal and equipment
- SignIn Logs
- Show visitors to interview rooms
- Security`,
		contract: ContractType.FullTime,
		type: 'Equipment and Personnel Management',
		location: 'London, England',
		period: { from: new Date(2002, 7, 1), to: new Date(2003, 11, 1) },
		skills: getSkills('equipment-management', 'security-protocols'),
		name: 'Equipment and Personnel Manager',
		color: 'red',
		links: [],
		logo: Assets.CNN, // Replace with CNN logo when available
		shortDescription: 'Managed equipment and personnel logistics for CNN in London.'
	}
];

export const title = 'Experience';
```

## File: src/lib/data/home.ts
```ts
// src/lib/data/home.ts

import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'webAlly';

export const lastName = '';

export const description = 'Team Consisting of Senior Full-Stack Web / Mobile / AI / Desktop Developers.  Passionate about creating awesome tools and applications for developers and customers.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/charlpcronje' },
	{ platform: Platform.Linkedin, link: 'https://www.linkedin.com/in/charlpcronje' },
	{ platform: Platform.Twitter, link: 'https://twitter.com/CPCharlCronje' },
	{ platform: Platform.Email, link: 'charl@webally.co.za' }
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
	{ title: 'Skills', to: '/skills', icon: 'i-carbon-software-resource-cluster', position: 'header', row: 1, external: false },
	{ title: 'Experience', to: '/experience', icon: 'i-carbon-development', position: 'header', row: 1, external: false },
	{ title: 'Projects', to: '/projects', icon: 'i-carbon-cube', position: 'header', row: 1, external: false },
	
	//{ title: 'Team', to: '/team', icon: 'i-carbon-user', position: 'header', row: 1, external: false },
	{ title: 'Resume', to: 'https://cv.webally.co.za', icon: 'i-carbon-document', position: 'header', external: true  },
	{ title: 'Documentation', to: '/documentation', icon: 'i-carbon-document', position: 'header', external: false },
	
	//{ title: 'Contact Us', to: '/contact', icon: 'i-carbon-phone', position: 'header', external: false },

	{ title: 'AI Tools', to: '/tools/ai', icon: 'i-carbon-machine-learning-model', position: 'sidebar', external: false },
	{ title: 'Data Tools', to: '/tools/data', icon: 'i-carbon-machine-learning-model', position: 'sidebar', external: false },
	{ title: 'Code Tools', to: '/tools/code', icon: 'i-carbon-machine-learning-model', position: 'sidebar', external: false },
	//{ title: 'Playground', to: '/playground', icon: 'i-carbon-game-console', position: 'sidebar' },
	
	{ title: 'Terms and Conditions', to: '/terms', icon: 'i-carbon-document-signed', position: 'footer', external: false },
	{ title: 'Privacy Policy', to: '/privacy', icon: 'i-carbon-document', position: 'footer', external: false },
	
	
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

## File: src/lib/data/skills.ts
```ts
// src/lib/data/skills.ts

import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

function escapeHtml(unsafe: string): string {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;")
		.replace(/&lt;br&gt;/g, "<br/>")
		.replace(/&lt;b&gt;/g, "<b>")
		.replace(/&lt;\/b&gt;/g, "</b>");
}

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Mobile Development', slug: 'mobile' }),
	defineSkillCategory({ name: 'Game Development', slug: 'game' }),
	defineSkillCategory({ name: 'AI & Machine Learning', slug: 'ai-ml' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: escapeHtml(`<b>JavaScript</b> is a versatile, high-level programming language that has become the backbone of modern web development.<br>
Originally created by Brendan Eich in 1995, JavaScript has evolved from a simple scripting language for web browsers to a powerful tool for both front-end and back-end development.<br>
Its ability to run on the client-side allows for dynamic, interactive web pages that can update content without requiring a page reload.<br>
JavaScript's syntax is influenced by Java, but it uses prototype-based object-orientation, making it more flexible than class-based object-oriented languages.<br>
With the advent of Node.js, JavaScript has also become a popular choice for server-side programming, enabling developers to use a single language across the entire web stack.<br>
JavaScript's ecosystem is vast, with numerous libraries and frameworks like React, Angular, and Vue.js enhancing its capabilities for building complex web applications.<br>
The language continues to evolve through ECMAScript specifications, introducing new features and improvements regularly.<br>
JavaScript's asynchronous programming model, with features like Promises and async/await, makes it well-suited for handling I/O operations and API calls efficiently.<br>
Its widespread adoption and the constant innovation in its ecosystem make JavaScript an essential skill for any web developer.<br>`),
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: escapeHtml(`<b>JavaScript</b> is a versatile, high-level programming language that has become the backbone of modern web development.<br>
Originally created by Brendan Eich in 1995, JavaScript has evolved from a simple scripting language for web browsers to a powerful tool for both front-end and back-end development.<br>
Its ability to run on the client-side allows for dynamic, interactive web pages that can update content without requiring a page reload.<br>
JavaScript's syntax is influenced by Java, but it uses prototype-based object-orientation, making it more flexible than class-based object-oriented languages.<br>
With the advent of Node.js, JavaScript has also become a popular choice for server-side programming, enabling developers to use a single language across the entire web stack.<br>
JavaScript's ecosystem is vast, with numerous libraries and frameworks like React, Angular, and Vue.js enhancing its capabilities for building complex web applications.<br>
The language continues to evolve through ECMAScript specifications, introducing new features and improvements regularly.<br>
JavaScript's asynchronous programming model, with features like Promises and async/await, makes it well-suited for handling I/O operations and API calls efficiently.<br>
Its widespread adoption and the constant innovation in its ecosystem make JavaScript an essential skill for any web developer.<br>`),
		logo: Assets.TypeScript,
		name: 'TypeScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'php',
		color: 'purple',
		description: escapeHtml(`<b>PHP</b> (Hypertext Preprocessor) is a widely-used, open-source server-side scripting language particularly suited for web development.<br>
Created by Rasmus Lerdorf in 1994, PHP has evolved into a powerful tool for building dynamic web pages and applications.<br>
PHP's syntax draws elements from C, Java, and Perl, making it relatively easy for developers with experience in these languages to pick up.<br>
One of PHP's key strengths is its deep integration with web servers and databases, particularly MySQL.<br>
This integration allows for efficient processing of form data, file operations, and database interactions.<br>
PHP supports both procedural and object-oriented programming paradigms, offering flexibility in coding styles.<br>
The language comes with a vast standard library and has an extensive ecosystem of frameworks and libraries, such as Laravel, Symfony, and CodeIgniter, which provide robust tools for building complex web applications.<br>
PHP's ability to be embedded directly into HTML makes it particularly convenient for creating dynamic web content.<br>
Over the years, PHP has made significant improvements in performance, especially with the introduction of PHP 7 and later versions, which brought substantial speed enhancements and reduced memory usage.<br>
While PHP has faced criticism for inconsistencies in its core API and some security concerns in older versions, its continued development and the strength of its community have addressed many of these issues.<br>
PHP powers many popular content management systems like WordPress, Drupal, and Joomla, making it a crucial technology in the web development landscape.<br>`),
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: escapeHtml(`<b>Python</b> is a high-level, interpreted programming language known for its simplicity, readability, and versatility.<br>
Created by Guido van Rossum and first released in 1991, Python has grown to become one of the most popular programming languages in the world.<br>
Its design philosophy emphasizes code readability with its notable use of significant whitespace, making it an excellent language for beginners while still being powerful enough for advanced users and enterprise applications.<br>
Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming.<br>
One of Python's greatest strengths is its extensive standard library, which provides tools suited to many tasks, reducing the need for external libraries in many projects.<br>
The language's "batteries included" philosophy means that complex functionalities often require just a single line of code to implement.<br>
Python's simplicity and efficiency have made it a favorite in scientific computing, data analysis, artificial intelligence, and machine learning, with libraries like NumPy, Pandas, and TensorFlow being widely used in these fields.<br>
Web development frameworks like Django and Flask have also made Python a popular choice for backend web development.<br>
Python's interpreter nature and dynamic typing allow for rapid development and prototyping, making it well-suited for scripting and automation tasks.<br>
The language's cross-platform compatibility ensures that Python code can run on various operating systems with minimal modifications.<br>
With its large and active community, extensive documentation, and continuous development, Python remains at the forefront of modern programming languages, adapting to new technological trends and maintaining its relevance across various domains of software development.<br>`),
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'red',
		description: escapeHtml(`<b>Java</b> is a versatile, object-oriented programming language designed to be "write once, run anywhere" (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.<br>
Developed by James Gosling at Sun Microsystems (now owned by Oracle Corporation) and released in 1995, Java has become one of the most popular programming languages for building enterprise-scale applications.<br>
Java's syntax is similar to C and C++, but it eliminates certain low-level constructs such as pointers and has a simpler object model.<br>
The language is strongly typed and compiled to bytecode, which runs on a Java Virtual Machine (JVM), providing platform independence.<br>
Java's robust standard library, known as the Java Class Library, provides a wide range of utilities for tasks such as networking, data structures, and graphical user interface (GUI) development.<br>
The language's "garbage collection" feature automatically manages memory allocation and deallocation, reducing the likelihood of memory leaks and other common programming errors.<br>
Java's "Write Once, Run Anywhere" capability, along with its strong emphasis on security, has made it a preferred choice for developing large-scale, distributed systems, particularly in enterprise environments.<br>
The platform includes Java SE (Standard Edition) for desktop and server environments, Java EE (Enterprise Edition) for large-scale, multi-tiered, scalable, and secure network applications, and Java ME (Micro Edition) for mobile and embedded devices.<br>
Java has also been widely used in Android app development, further extending its reach.<br>
With its long-standing presence in the industry, extensive ecosystem of tools and frameworks, and continued evolution through regular releases, Java remains a cornerstone of modern software development, particularly in areas requiring scalability, security, and cross-platform compatibility.<br>`),
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'kotlin',
		color: 'orange',
		description: escapeHtml(`<b>Kotlin</b> is a modern, statically typed programming language developed by JetBrains.<br>
First appearing in 2011 and reaching version 1.0 in 2016, Kotlin was designed to be fully interoperable with Java while addressing many of Java's perceived shortcomings.<br>
Kotlin compiles to Java bytecode and runs on the Java Virtual Machine (JVM), allowing it to be used anywhere Java is used, including Android development, server-side applications, and more.<br>
One of Kotlin's primary goals is to enhance developer productivity and code safety.<br>
It achieves this through a more concise and expressive syntax compared to Java, reducing boilerplate code and making programs easier to read and write.<br>
Kotlin introduces several features that Java lacks, such as null safety, data classes, and extension functions.<br>
The language's null safety feature helps prevent null pointer exceptions, a common source of errors in Java programs, by distinguishing between nullable and non-nullable types at the compiler level.<br>
Kotlin supports both object-oriented and functional programming paradigms, offering features like higher-order functions, lambda expressions, and operator overloading.<br>
Its smart cast feature automatically casts types in many cases, reducing the need for explicit type checking.<br>
In 2017, Google announced first-class support for Kotlin on Android, further boosting its popularity among mobile developers.<br>
Kotlin's coroutines feature provides a way to write asynchronous, non-blocking code in a sequential manner, making it easier to handle concurrency.<br>
The language's multiplatform capabilities allow developers to share code between JVM, JavaScript, and native applications.<br>
With its modern features, Java interoperability, and growing ecosystem, Kotlin has rapidly gained adoption in various domains of software development, offering a more enjoyable and productive alternative to Java while leveraging existing Java libraries and frameworks.<br>`),
		logo: Assets.Kotlin,
		name: 'Kotlin',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'csharp',
		color: 'green',
		description: escapeHtml(`<b>C#</b> (pronounced "C-sharp") is a modern, multi-paradigm programming language developed by Microsoft as part of its .NET framework.<br>
First released in 2002, C# was designed by Anders Hejlsberg with the goal of combining the computing power of C++ with the programming ease of Visual Basic.<br>
C# is a strongly typed, object-oriented language that supports various programming paradigms including imperative, declarative, functional, generic, and component-oriented programming.<br>
It draws significant inspiration from Java and C++, but introduces several innovative features that set it apart.<br>
C# is designed for developing applications that run on the .NET Framework or .NET Core, making it particularly well-suited for Windows desktop applications, web applications (using ASP.NET), and games (using Unity game engine).<br>
The language's tight integration with the .NET ecosystem provides access to a vast library of pre-built functions and APIs, enhancing developer productivity.<br>
C# includes features such as properties, delegates, events, and LINQ (Language Integrated Query), which simplify common programming tasks.<br>
Its garbage collection mechanism automatically manages memory, reducing the risk of memory leaks.<br>
C# has evolved significantly since its inception, with each new version introducing features that enhance its capabilities and ease of use.<br>
Recent versions have added features like nullable reference types, pattern matching, and asynchronous streams, keeping the language modern and relevant.<br>
The introduction of .NET Core (now .NET 5 and beyond) has made C# more versatile, allowing developers to build cross-platform applications that can run on Windows, macOS, and Linux.<br>
C#'s use extends beyond traditional software development; it's widely used in game development with the Unity engine, and in combination with the .NET framework, it's a popular choice for enterprise-level applications.<br>
With Microsoft's continued investment and a large, active community, C# remains at the forefront of programming languages, particularly in the Microsoft ecosystem and beyond.<br>`),
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'blue',
		description: escapeHtml(`<b>C++</b> is a powerful, general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language.<br>
First released in 1985, C++ has evolved to become one of the most influential and widely used programming languages in the world.<br>
It combines the low-level control and efficiency of C with high-level features for programming flexibility and software development productivity.<br>
C++ is known for its performance, efficiency, and close-to-the-hardware programming capabilities, making it a popular choice for system software, application software, device drivers, embedded software, and video games.<br>
The language supports multiple programming paradigms, including procedural, object-oriented, functional, and generic programming.<br>
C++'s object-oriented features, such as classes, inheritance, and polymorphism, allow for the creation of well-structured and maintainable code.<br>
The language's template feature enables generic programming, allowing developers to write code that works with any data type.<br>
C++ has undergone significant evolution over the years, with major revisions (like C++11, C++14, C++17, and C++20) introducing new features and improvements.<br>
These updates have added features like lambda expressions, smart pointers, move semantics, and concepts, enhancing the language's expressiveness and safety while maintaining its performance characteristics.<br>
The Standard Template Library (STL) provides a collection of powerful, reusable components for common data structures and algorithms, significantly boosting productivity.<br>
C++'s ability to directly manipulate hardware and memory makes it suitable for performance-critical applications, such as game engines, financial systems, and scientific simulations.<br>
However, this low-level control also requires careful management to avoid issues like buffer overflows and memory leaks.<br>
Despite the rise of higher-level languages, C++ remains crucial in many domains due to its performance, flexibility, and extensive legacy codebase.<br>
Its continued evolution and the introduction of modern features ensure that C++ stays relevant in contemporary software development, particularly in areas where performance and hardware control are paramount.<br>`),
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: escapeHtml(`<b>HTML</b> (Hypertext Markup Language) is the standard markup language used for creating web pages and web applications.<br>
First developed by Tim Berners-Lee in 1990, HTML has been the backbone of the World Wide Web since its inception.<br>
HTML uses a system of elements and attributes to define the structure and content of web pages, allowing browsers to interpret and display the information correctly.<br>
The language has evolved significantly over the years, with HTML5 being the latest major version, introducing more semantic elements and support for multimedia without the need for plugins.<br>
HTML documents are composed of a tree-like structure of elements, each represented by tags.<br>
These elements can include text, images, videos, forms, and links, among others.<br>
The language works in conjunction with CSS (Cascading Style Sheets) for styling and JavaScript for dynamic behavior, forming the triad of core technologies for the World Wide Web.<br>
HTML5 introduced new structural elements like <header>, <nav>, <article>, and <footer>, which provide more meaningful ways to structure content.<br>
It also added support for audio and video elements, canvas for 2D drawing, and improved form controls.<br>
The language's simplicity and flexibility have contributed to its widespread adoption, making it an essential skill for web developers, content creators, and even marketers.<br>
HTML's role in search engine optimization (SEO) is crucial, as proper use of semantic elements and attributes can significantly impact a website's visibility in search results.<br>
The language's accessibility features, such as ARIA (Accessible Rich Internet Applications) attributes, enable the creation of web content that is more inclusive and usable by people with disabilities.<br>
HTML's declarative nature makes it relatively easy to learn, yet it offers enough depth to support complex web applications when combined with other technologies.<br>
As the web continues to evolve, HTML adapts to new requirements, with ongoing discussions and proposals for future versions aimed at addressing emerging needs in web development.<br>
Understanding HTML is fundamental not just for web development, but also for related fields such as email marketing, content management systems, and even some aspects of mobile app development, making it a versatile and enduring technology in the digital landscape.<br>`),
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: escapeHtml(`<b>CSS</b> (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML.<br>
Developed by Håkon Wium Lie and Bert Bos, and first proposed in 1994, CSS has become an essential technology in web design and development.<br>
CSS separates the presentation and layout from the content of web pages, allowing developers to control the look and feel of multiple web pages all at once.<br>
This separation of concerns enhances maintainability, improves accessibility, and provides greater flexibility in web design.<br>
CSS works by selecting HTML elements and applying styles to them.<br>
These styles can include properties for color, font, sizing, spacing, positioning, and much more.<br>
The "cascading" in CSS refers to the way styles can be inherited and overridden, with styles defined later in a stylesheet or with higher specificity taking precedence.<br>
CSS3, the latest major version, introduced numerous new features including animations, transitions, rounded corners, gradients, and flexible box layout (flexbox).<br>
These advancements have significantly reduced the need for images and JavaScript in creating dynamic and responsive designs.<br>
Responsive web design, a crucial aspect of modern web development, is largely achieved through CSS media queries, which allow different styles to be applied based on the device's characteristics, such as screen size.<br>
CSS preprocessors like Sass and Less extend CSS with variables, nested rules, mixins, and functions, enhancing its power and making stylesheets more maintainable.<br>
CSS frameworks such as Bootstrap and Foundation provide pre-written CSS files that can be used to quickly develop responsive and consistent web designs.<br>
The ongoing development of CSS includes new layout models like CSS Grid, which offers a two-dimensional layout system, and new features are continually proposed and implemented to address evolving web design needs.<br>
Mastery of CSS is essential for creating visually appealing, responsive, and accessible web interfaces, making it a fundamental skill for web designers and front-end developers.<br>`),
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description: escapeHtml(`<b>Sass</b> (continued)
zenbaum in 2006, Sass introduces programming-like features to CSS, making stylesheets more maintainable, thematic, and extendable.<br>
Sass files are compiled into standard CSS files, which can then be used in web projects.<br>
The language comes in two syntaxes: the original indented syntax (Sass) and the more widely used SCSS (Sassy CSS) syntax, which is a superset of CSS3 syntax.<br>
Sass introduces variables, allowing developers to store information like colors, font stacks, or any CSS value to reuse throughout the stylesheet.<br>
This feature significantly reduces repetition and makes large stylesheets more manageable.<br>
Nesting is another key feature of Sass, allowing selectors to be nested inside one another, mirroring the HTML structure and making the stylesheet more readable.<br>
Sass supports partials, which are smaller Sass files that can be imported into other Sass files, promoting modularity and organization in large projects.<br>
The @import directive in Sass is more powerful than its CSS counterpart, allowing imports without additional HTTP requests.<br>
Mixins in Sass enable the reuse of whole chunks of CSS, accepting arguments for even more flexibility.<br>
The language also includes powerful operations and built-in functions for color manipulation, mathematics, and more.<br>
Control directives like @if, @for, @each, and @while bring programming-like logic to stylesheets, enabling complex operations and dynamic style generation.<br>
Sass's extend/inheritance feature allows sharing of CSS properties from one selector to another, reducing code duplication.<br>
With its ability to create cleaner, more organized, and more maintainable stylesheets, Sass has become an indispensable tool for many front-end developers, particularly in large-scale web projects where CSS management can become complex.<br>`),
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'react',
		color: 'cyan',
		description: escapeHtml(`<b>React</b> is an open-source JavaScript library for building user interfaces, primarily for single-page applications.<br>
Developed and maintained by Facebook (now Meta) and a community of individual developers and companies, React was first released in 2013 and has since become one of the most popular front-end libraries in web development.<br>
React's core philosophy is to make it painless to create interactive UIs by using a component-based architecture.<br>
Components are the building blocks of React applications, encapsulating both the structure (typically written in JSX, a syntax extension for JavaScript) and behavior of a part of the UI.<br>
This modular approach promotes code reusability and makes applications easier to develop and maintain.<br>
One of React's key features is the virtual DOM (Document Object Model), which is a lightweight copy of the actual DOM.<br>
React uses this to optimize rendering performance by minimizing direct manipulation of the DOM, which can be computationally expensive.<br>
When state changes occur, React first updates the virtual DOM, compares it with the previous version, and then efficiently updates only the parts of the actual DOM that have changed.<br>
React's unidirectional data flow, often referred to as one-way binding, makes it easier to track and debug how data changes affect the application state.<br>
This model, combined with the concept of state and props, provides a clear and predictable way to manage data within an application.<br>
The library's ecosystem is vast and continually growing, with tools like Create React App simplifying project setup, and state management solutions like Redux and MobX addressing complex state management needs.<br>
React Native, an offshoot of React, allows developers to create native mobile applications using React principles, further extending the library's reach.<br>
React's declarative nature, where developers describe what they want the UI to look like rather than imperatively defining each step to get there, leads to more predictable and easier to debug code.<br>
With its strong community support, extensive documentation, and backing from major tech companies, React continues to evolve and maintain its position as a leading technology in modern web development.<br>`),
		logo: Assets.ReactJs,
		name: 'React',
		category: 'framework'
	}),
	defineSkill({
		slug: 'vue',
		color: 'green',
		description: escapeHtml(`Vue.js is a progressive JavaScript framework for building user interfaces. Created by Evan You and first released in 2014, Vue has gained significant popularity due to its approachable learning curve and powerful features. Vue is designed to be incrementally adoptable, allowing developers to start using it for small parts of an application and gradually expand its usage as needed. This flexibility makes Vue suitable for a wide range of projects, from enhancing static HTML pages to powering sophisticated single-page applications. At its core, Vue uses a template syntax that extends HTML with directives, allowing for dynamic rendering of data to the DOM. Vue's reactivity system efficiently updates the DOM when the underlying data changes, providing a smooth and responsive user experience. The framework is component-based, allowing developers to build encapsulated, reusable UI elements. Vue components can be single-file components, containing template, script, and style in one .vue file, which promotes organization and maintainability. Vue's official tooling, like the Vue CLI, provides a full system for rapid Vue.js development, including a plugin-based architecture for easy integration of additional features. Vue's core library focuses on the view layer, but the Vue ecosystem includes official libraries for routing (vue-router) and state management (Vuex), allowing developers to build complex applications with a consistent architecture. The framework's performance is notable, with a small footprint and fast rendering capabilities. Vue 3, the latest major version, introduced the Composition API, offering a more flexible way to organize component logic, especially in larger applications. It also brought performance improvements and better TypeScript support. Vue's gentle learning curve, combined with its scalability and performance, has led to its adoption by many companies and developers worldwide. The framework's active community and comprehensive documentation further contribute to its popularity and ease of use. Whether used for small interactive elements or full-scale applications, Vue.js provides a robust and enjoyable development experience for building modern web interfaces.`),
		logo: Assets.VueJs,
		name: 'Vue.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'angular',
		color: 'red',
		description: escapeHtml(`<b>Angular</b> is a comprehensive, open-source web application framework maintained by Google and a community of individual developers and corporations.<br>
First released in 2010 as AngularJS, it was completely rewritten and released as Angular 2 in 2016, with subsequent versions following a semantic versioning scheme.<br>
Angular provides a component-based framework for building scalable web applications, combined with a collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more.<br>
Angular uses TypeScript as its primary language, which adds static typing, classes, and modules to JavaScript, enhancing code quality and maintainability.<br>
The framework's architecture is based on components, services, and modules.<br>
Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data.<br>
Services provide specific functionality not directly related to views, and modules help organize an application into cohesive blocks of functionality.<br>
Angular's powerful template syntax extends HTML with features like data binding, event handling, and structural directives, allowing for dynamic and interactive user interfaces.<br>
The framework includes a powerful dependency injection system, which increases the efficiency and modularity of applications.<br>
Angular's CLI (Command Line Interface) simplifies the development process by providing commands for generating components, services, and other artifacts, as well as for building, testing, and deploying applications.<br>
The framework also includes robust testing utilities, making it easier to write and run unit and integration tests.<br>
Angular's performance optimization features, such as Ahead-of-Time compilation and tree-shaking, result in faster loading and better runtime performance.<br>
With its comprehensive nature, Angular is particularly well-suited for large-scale, complex applications, especially in enterprise environments.<br>
While it has a steeper learning curve compared to some other frameworks, Angular's structure and conventions promote consistency across projects and teams.<br>
Regular updates and long-term support versions ensure that Angular remains modern and reliable for large-scale application development.<br>`),
		logo: Assets.Angular,
		name: 'Angular',
		category: 'framework'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: escapeHtml(`<b>Svelte</b> is a modern JavaScript framework for building user interfaces, created by Rich Harris in 2016.<br>
Unlike traditional frameworks that do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.<br>
The result is highly efficient, lightweight applications with excellent runtime performance.<br>
Svelte's approach is to compile your code to vanilla JavaScript at build time, effectively disappearing at runtime, which leads to smaller bundle sizes and faster initial page loads compared to other frameworks.<br>
One of Svelte's key features is its simplicity and ease of use.<br>
It uses a component-based architecture, where each component is written in a .svelte file that contains HTML, CSS, and JavaScript together.<br>
This structure promotes a clear separation of concerns while keeping related code close together.<br>
Svelte's syntax is designed to be familiar to web developers, with minimal new concepts to learn.<br>
The framework provides reactive declarations, which automatically update the DOM when the underlying data changes, without the need for a virtual DOM.<br>
This approach not only simplifies the mental model for developers but also contributes to Svelte's performance advantages.<br>
Svelte includes built-in state management capabilities, eliminating the need for additional libraries in many cases.<br>
It also provides an animation and transition system out of the box, making it easy to create smooth, engaging user interfaces.<br>
The framework's compiler generates highly optimized JavaScript, often resulting in smaller bundle sizes compared to other frameworks.<br>
This is particularly beneficial for performance-sensitive applications or those targeting low-powered devices.<br>
Svelte's ecosystem includes SvelteKit, an application framework that provides server-side rendering, routing, and other features needed for building full-fledged web applications.<br>
While Svelte is newer and has a smaller community compared to some other frameworks, it has been gaining popularity rapidly due to its performance benefits and developer-friendly approach.<br>
Its innovative compile-time approach and focus on simplicity make Svelte an attractive option for developers looking to build fast, efficient web applications with less boilerplate code.<br>`),
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'framework'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description: escapeHtml(`<b>Node.js</b> is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser.<br>
Created by Ryan Dahl in 2009, Node.js enables developers to use JavaScript for server-side scripting, allowing for the development of scalable network applications.<br>
Built on Chrome's V8 JavaScript engine, Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.<br>
One of Node.js's key features is its vast ecosystem of open-source libraries available through npm (Node Package Manager), which is the largest ecosystem of open source libraries in the world.<br>
This extensive collection of modules allows developers to quickly add functionality to their applications without having to build everything from scratch.<br>
Node.js's architecture makes it particularly well-suited for building real-time, push-based applications like chat applications, streaming services, and collaborative tools.<br>
Its single-threaded event loop can handle a large number of simultaneous connections with high throughput, making it an excellent choice for building scalable network applications.<br>
The platform's ability to handle asynchronous operations efficiently is one of its major strengths, allowing for non-blocking execution of code.<br>
This is particularly useful for I/O-heavy applications, as it allows the server to continue processing other requests while waiting for I/O operations to complete.<br>
Node.js has found wide adoption in various types of applications, from web servers and RESTful APIs to microservices and serverless functions.<br>
It's used by many large companies including Netflix, LinkedIn, and NASA, demonstrating its capability to handle enterprise-level applications.<br>
The Node.js ecosystem includes frameworks like Express.js, which simplify the process of building web applications and APIs.<br>
Tools like pm2 and Forever enable process management and ensure that Node.js applications can run continuously.<br>
With its performance, scalability, and the ability to use JavaScript across the full stack, Node.js has become a cornerstone of modern web development, enabling developers to build fast, scalable network applications efficiently.<br>`),
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'express',
		color: 'gray',
		description: escapeHtml(`<b>Express.js</b>, often simply called Express, is a minimal and flexible web application framework for Node.js.<br>
Created by TJ Holowaychuk and first released in 2010, Express has become one of the most popular web frameworks for Node.js, known for its simplicity, flexibility, and robust set of features for web and mobile applications.<br>
Express provides a thin layer of fundamental web application features without obscuring Node.js features, giving developers the freedom to structure their applications as they see fit.<br>
At its core, Express is a routing and middleware framework that sits on top of Node.js's built-in http module.<br>
It simplifies the process of handling HTTP requests and responses, making it easier to create robust APIs and web applications.<br>
The middleware concept in Express allows for a series of functions to be executed in the middle of the request-response cycle, each with access to the request object, response object, and the next middleware function.<br>
This feature enables developers to add functionality like logging, parsing request bodies, handling sessions, and more.<br>
Express's routing system allows developers to define routes for different HTTP methods (GET, POST, PUT, DELETE, etc.) and URLs, making it straightforward to create RESTful APIs.<br>
The framework also supports template engines, allowing for easy generation of HTML markup.<br>
While Express itself is minimalist, its extensive ecosystem of middleware and plugins allows developers to add a wide range of functionality to their applications.<br>
Popular middleware packages include body-parser for parsing incoming request bodies, morgan for logging, and cors for handling Cross-Origin Resource Sharing.<br>
Express integrates well with various databases and ORMs, making it suitable for building full-stack applications.<br>
It's often used as part of the MEAN (MongoDB, Express, Angular, Node.js) or MERN (MongoDB, Express, React, Node.js) stack.<br>
The framework's simplicity and flexibility make it an excellent choice for both beginners and experienced developers.<br>
It can be used to build everything from simple single-page applications to complex enterprise-level applications.<br>
Express's extensive documentation, large community, and abundance of learning resources contribute to its popularity and ease of adoption.<br>
As a testament to its robustness and scalability, Express is used by many large companies including IBM, Uber, and Accenture.<br>
Its continued development and wide adoption ensure that Express remains a relevant and powerful tool in the Node.js ecosystem.<br>`),
		logo: Assets.ExpressJs,
		name: 'Express.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'laravel',
		color: 'red',
		description: escapeHtml(`<b>Laravel</b> is a free, open-source PHP web framework created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern.<br>
First released in June 2011, Laravel has quickly become one of the most popular PHP frameworks due to its elegant syntax, robust features, and developer-friendly tools.<br>
Laravel aims to make the development process a pleasing one for the developer without sacrificing application functionality.<br>
It achieves this through a combination of expressive, beautiful syntax and a rich set of features that cover most common tasks in modern web development.<br>
One of Laravel's key strengths is its extensive ecosystem.<br>
The framework comes with a powerful command-line interface called Artisan, which can be used to generate boilerplate code, run database migrations, and manage various aspects of the application.<br>
Laravel also includes Eloquent, an advanced ORM (Object-Relational Mapping) that makes database interactions intuitive and efficient.<br>
The framework's templating engine, Blade, provides a clean, simple way to create views, with features like template inheritance and sections.<br>
Laravel includes built-in authentication and authorization systems, making it easy to implement user registration, login, and access control.<br>
The framework also provides robust queuing services for deferred job processing, event broadcasting for real-time applications, and task scheduling for recurring jobs.<br>
Laravel's service container is a powerful tool for managing class dependencies and performing dependency injection.<br>
The framework also includes Facades, which provide a static interface to classes that are available in the application's service container.<br>
For testing, Laravel provides PHPUnit out of the box and offers convenient helper methods to make testing applications easier.<br>
The framework's emphasis on security is evident in its built-in protection against common web vulnerabilities like cross-site scripting (XSS), SQL injection, and CSRF (Cross-Site Request Forgery).<br>
Laravel's package manager, Composer, allows for easy integration of third-party libraries.<br>
The framework also has official packages like Passport for API authentication, Socialite for social login, and Horizon for queue monitoring.<br>
With its combination of developer-friendly features, robust architecture, and active community, Laravel has established itself as a go-to framework for building modern, scalable web applications in PHP.<br>`),
		logo: Assets.Laravel,
		name: 'Laravel',
		category: 'framework'
	}),
	defineSkill({
		slug: 'symfony',
		color: 'black',
		description: escapeHtml(`<b>Symfony</b> is a leading PHP web application framework and a set of reusable PHP components/libraries.<br>
Created by Fabien Potencier in 2005, Symfony has grown to become one of the most respected and widely used frameworks in the PHP ecosystem.<br>
It's known for its robustness, flexibility, and high performance, making it a popular choice for large-scale enterprise applications as well as smaller projects.<br>
Symfony follows the MVC (Model-View-Controller) architectural pattern and is designed to optimize the development of web applications by providing a structured, reusable code base.<br>
One of Symfony's key philosophies is the idea of "don't repeat yourself" (DRY), which it achieves through a comprehensive set of reusable components.<br>
These components can be used independently in any PHP project, not just those built on the full Symfony framework.<br>
This modular approach allows developers to use only the parts they need, promoting flexibility and efficiency.<br>
Symfony is built with performance in mind, featuring a powerful dependency injection container and an event dispatcher, which contribute to its speed and efficiency.<br>
The framework also includes a profiler tool that helps developers identify and resolve performance bottlenecks.<br>
Symfony's console component provides a robust command-line interface for automating tasks and generating boilerplate code.<br>
The framework's form component simplifies the process of creating and processing HTML forms, while its security component provides tools for handling authentication, authorization, and protection against common web vulnerabilities.<br>
For database operations, Symfony integrates seamlessly with Doctrine, a powerful ORM (Object-Relational Mapper) and DBAL (Database Abstraction Layer).<br>
This integration simplifies database interactions and supports multiple database systems.<br>
Symfony's templating engine, Twig, offers a clean and extensible syntax for creating views.<br>
The framework also includes a powerful routing system that maps URLs to controllers.<br>
One of Symfony's strengths is its emphasis on following PHP best practices and design patterns.<br>
It encourages the use of PSR (PHP Standards Recommendations) standards, promoting code that is not only functional but also clean and maintainable.<br>
The framework has a strong focus on testing, providing tools and best practices for unit and functional testing.<br>
Symfony's extensive documentation, active community, and regular release cycle (with long-term support versions) make it a reliable choice for long-term projects.<br>
Many popular PHP projects, including Drupal, phpBB, and Laravel, use Symfony components, testament to the framework's quality and versatility.<br>
With its robust architecture, extensive feature set, and commitment to PHP best practices, Symfony continues to be a cornerstone of professional PHP development.<br>`),
		logo: Assets.Symfony,
		name: 'Symfony',
		category: 'framework'
	}),
	defineSkill({
		slug: 'django',
		color: 'green',
		description: escapeHtml(`b>Django</b> is a high-level Python web framework that encourages rapid development and clean, pragmatic design.<br>
Created in 2003 by Adrian Holovaty and Simon Willison, and publicly released in 2005, Django has become one of the world's most popular web frameworks for Python.<br>
It follows the model-template-view (MTV) architectural pattern, which is similar to the model-view-controller (MVC) pattern used in other frameworks.<br>
Django's primary goal is to ease the creation of complex, database-driven websites by emphasizing reusability and "pluggability" of components, less code, low coupling, rapid development, and the principle of don't repeat yourself (DRY).<br>
<b>One of Django's key features is its automatic admin interface</b>, which reads metadata from your models to provide a powerful and production-ready interface for managing content on your site.<br>
This admin interface is highly customizable and can save significant development time.<br>
Django includes a robust object-relational mapper (ORM) that supports a wide range of database backends.<br>
The ORM allows developers to interact with databases using Python code instead of writing SQL queries directly, enhancing productivity and portability across different database systems.<br>
<b>Security is a top priority in Django.</b><br>
The framework includes protection against many common security issues such as cross-site scripting (XSS), cross-site request forgery (CSRF), SQL injection, and clickjacking.<br>
It also provides a user authentication system that handles user accounts, groups, permissions, and cookie-based user sessions.<br>
Django's URL dispatcher uses elegant URL design, allowing developers to design clean, SEO-friendly URLs without framework-specific limitations.<br>
The framework's template engine is powerful yet maintains a clear separation between design, content, and Python code, promoting the DRY principle.<br>
For handling forms, Django provides a form library that manages rendering forms as HTML, validating user-submitted data, and converting that data to native Python types.<br>
<b>Django also includes a caching framework</b>, which interfaces with memcached or other cache backends, and a syndication framework for generating RSS and Atom feeds.<br>
The framework's "batteries included" philosophy means it comes with many extras you commonly need, including a lightweight web server for development and testing, and tools for generating Google Sitemaps.<br>
Django has excellent documentation and a large, supportive community, which contributes to its ease of learning and use.<br>
It's used by many large organizations including Mozilla, Instagram, and NASA, demonstrating its scalability and robustness.<br>
With its comprehensive feature set, strong security defaults, and focus on rapid development, Django remains a top choice for developers building everything from content management systems to social networking sites and scientific computing platforms.<br>`),
		logo: Assets.Django,
		name: 'Django',
		category: 'framework'
	}),
	defineSkill({
		slug: 'flask',
		color: 'black',
		description: escapeHtml(`<b>Flask</b> is a lightweight WSGI web application framework written in Python.<br>
Created by Armin Ronacher in 2010, Flask is designed to be simple and easy to use, making it an excellent choice for small to medium-sized web applications and microservices.<br>
Often referred to as a "micro" framework, Flask aims to keep the core simple but extensible, allowing developers to add the features they need without imposing a specific structure or dependencies.<br>
<b>Unlike more comprehensive frameworks</b>, Flask doesn't include an ORM (Object-Relational Mapper) or form validation out of the box.<br>
Instead, it allows developers to choose and integrate the tools that best fit their specific needs.<br>
This flexibility is one of Flask's key strengths, as it enables developers to have more control over their application's architecture and dependencies.<br>
<b>Despite its minimalist core</b>, Flask includes several essential features for web development.<br>
It comes with a built-in development server and debugger, integrated unit testing support, RESTful request dispatching, and Jinja2 templating engine.<br>
Flask uses Werkzeug, a comprehensive WSGI web application library, and Jinja2, which together handle much of the backend heavy lifting.<br>
<b>One of Flask's notable features</b> is its use of decorators to bind functions to URLs, making route definitions clean and intuitive.<br>
Flask's simplicity makes it an excellent choice for beginners learning web development, as well as for experienced developers who want to quickly prototype ideas or build small to medium-sized applications.<br>
The framework's documentation is comprehensive and includes many examples, further contributing to its ease of use.<br>
<b>Flask's extensibility is another key feature.</b><br>
A wide range of extensions are available that add functionality such as form validation, upload handling, various authentication technologies, and more.<br>
This allows developers to add complex functionality to their applications while keeping the core simple.<br>
<b>Flask is well-suited for building RESTful APIs and microservices.</b><br>
Its lightweight nature and flexibility make it easy to create small, focused services that can be part of a larger, distributed system.<br>
The framework is also popular in the data science community, often used to create web interfaces for machine learning models and data visualization tools.<br>
<b>While Flask doesn't impose a specific project structure</b>, it's flexible enough to support various architectural patterns, including MVC (Model-View-Controller).<br>
This flexibility allows Flask to scale with the complexity of the project, from simple single-file applications to large, complex systems.<br>
<b>Flask has been adopted by many companies and organizations</b>, including LinkedIn, Netflix, and Mozilla, demonstrating its capability to handle production-level applications.<br>
Its combination of simplicity, flexibility, and a strong ecosystem of extensions makes Flask a versatile and powerful tool for Python web development.<br>`),
		logo: Assets.Flask,
		name: 'Flask',
		category: 'framework'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description: escapeHtml(`<b>MongoDB</b> is a popular, open-source document-oriented database program classified as a NoSQL database.<br>
Developed by MongoDB Inc., it was first released in 2009 and has since become one of the most widely used databases for modern applications.<br>
MongoDB stores data in flexible, JSON-like documents called BSON (Binary JSON), which allows for varying structure of data between documents.<br>
This schema-less nature makes MongoDB particularly well-suited for applications where data structures may evolve over time or where the structure of the data is not known in advance.<br>
<b>One of MongoDB's key features is its support for dynamic queries.</b><br>
The database allows for querying on any field in a document, regardless of how deeply nested it may be, and supports a rich query language for complex queries.<br>
MongoDB provides high availability through its replica set feature, which is a group of MongoDB processes that maintain the same data set.<br>
Replica sets provide automatic failover and data redundancy, enhancing the database's fault tolerance.<br>
<b>For scalability, MongoDB offers horizontal scaling through sharding.</b><br>
This allows the database to distribute data across multiple machines, enabling it to handle large amounts of data and high-throughput operations.<br>
MongoDB includes a powerful aggregation framework for data analysis and transformation.<br>
This feature allows for complex operations on data, including grouping, filtering, and computing aggregate values.<br>
<b>The database also supports geospatial indexing</b>, allowing for location-based queries, which is particularly useful for applications that deal with geographic data.<br>
MongoDB's flexible document model makes it well-suited for a wide range of applications, from content management systems and real-time analytics to mobile apps and IoT (Internet of Things) solutions.<br>
It's particularly popular in scenarios where rapid development and the ability to scale horizontally are important.<br>
<b>Security features in MongoDB include authentication</b>, role-based access control, and encryption, both for data at rest and in transit.<br>
The database also provides tools for monitoring and performance tuning, including a query profiler and various diagnostic commands.<br>
<b>MongoDB offers official drivers for many popular programming languages</b>, making it easy to integrate with various technology stacks.<br>
It also has a vibrant ecosystem of third-party tools and frameworks.<br>
<b>While MongoDB excels in many scenarios</b>, it's important to note that it may not be the best choice for all types of applications, particularly those requiring complex transactions across multiple documents or tables.<br>
However, for many modern, data-intensive applications, MongoDB's flexibility, scalability, and performance make it a powerful and popular choice in the database landscape.<br>`),
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'blue',
		description: escapeHtml(`<b>MySQL</b> is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL).<br>
		Originally developed by MySQL AB and now owned by Oracle Corporation, MySQL has become one of the world's most popular open-source databases since its initial release in 1995.<br>
		It's a key component of the LAMP (Linux, Apache, MySQL, PHP/Perl/Python) stack, which is widely used for web application development.<br>
		<b>MySQL follows the traditional table-based relational model</b>, where data is organized into tables with rows and columns.<br>
		It supports the full range of SQL operations, including complex queries, joins, and transactions.<br>
		One of MySQL's key strengths is its speed and reliability.<br>
		It's designed to be fast, especially for read-heavy operations, making it well-suited for web applications and other scenarios where read performance is crucial.<br>
		<b>MySQL supports various storage engines</b>, which determine how data is stored and retrieved.<br>
		The most commonly used are InnoDB (which supports transactions and foreign keys) and MyISAM (which is faster for read-heavy operations but doesn't support transactions).<br>
		This flexibility allows developers to choose the storage engine that best fits their specific needs.<br>
		<b>For high availability and scalability</b>, MySQL offers features like replication and clustering.<br>
		Replication allows data from one MySQL database server (the master) to be copied to one or more other servers (slaves), providing data redundancy and improving read performance.<br>
		MySQL Cluster provides a way to run MySQL in a distributed computing environment, allowing for high availability and scalability.<br>
		<b>MySQL includes robust security features</b>, including encrypted connections, access control lists, and plugins for authentication.<br>
		It also provides backup and recovery tools to help protect against data loss.<br>
		<b>The database supports a wide range of data types</b>, including numeric, date and time, string types, and spatial data types for geographic information.<br>
		It also includes features like stored procedures, triggers, and views, which allow for complex operations and data manipulations to be performed within the database itself.<br>
		<b>MySQL's wide adoption means it has excellent support across various programming languages and frameworks.</b><br>
		Most major programming languages have libraries or modules for interacting with MySQL databases.<br>
		<b>While MySQL is powerful and feature-rich</b>, it's also known for being relatively easy to set up and use, making it a popular choice for both small projects and large-scale applications.<br>
		It's used by many high-profile websites and applications, including Facebook, Twitter, YouTube, and many more.<br>
		<b>MySQL's combination of performance, reliability, ease of use, and cost-effectiveness</b> (being open-source) has contributed to its enduring popularity in the database world.<br>
		Despite competition from newer database technologies, MySQL continues to evolve and remain relevant, with ongoing development addressing modern needs such as JSON support and improved performance for large-scale operations.<br>`),
		logo: Assets.MySQL,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'postgresql',
		color: 'blue',
		description: escapeHtml(`b>PostgreSQL</b>, often simply "Postgres," is a powerful, open-source object-relational database system.<br>
With its strong reputation for reliability, feature robustness, and performance, PostgreSQL has become one of the most popular database choices for applications ranging from small, single-machine applications to large, data-warehousing systems with many concurrent users.<br>
First released in 1996, PostgreSQL is developed by the PostgreSQL Global Development Group, a diverse group of contributors worldwide.<br>
<b>PostgreSQL is fully ACID (Atomicity, Consistency, Isolation, Durability) compliant and transactional</b>, ensuring data integrity even in the event of errors or system failures.<br>
It supports advanced data types and advanced performance optimization features that are often only found in commercial database systems.<br>
<b>One of PostgreSQL's standout features is its extensibility.</b><br>
Users can define their own data types, index types, functional languages, and more.<br>
This extensibility, coupled with PostgreSQL's standards compliance, makes it highly flexible and adaptable to various use cases.<br>
<b>PostgreSQL offers robust support for concurrent access</b> through its implementation of Multiversion Concurrency Control (MVCC), allowing for efficient handling of multiple simultaneous operations.<br>
The database provides strong support for JSON, allowing it to serve as both a relational and document-style database.<br>
This feature makes PostgreSQL well-suited for applications that need to handle both structured and semi-structured data.<br>
<b>For scalability, PostgreSQL supports table partitioning, parallel query execution, and various replication methods</b> including built-in logical replication.<br>
These features allow PostgreSQL to handle large amounts of data and high-concurrency scenarios effectively.<br>
<b>PostgreSQL is known for its strong adherence to SQL standards and its comprehensive feature set.</b><br>
It includes features like window functions, common table expressions, and lateral joins, which are useful for complex queries and data analysis.<br>
The database also supports full-text search, enabling sophisticated search capabilities within the database itself.<br>
<b>Security features in PostgreSQL are extensive</b>, including robust access-control systems, column and row-level security, and strong encryption options.<br>
It also provides various authentication methods and supports SSL connections for secure data transmission.<br>
<b>PostgreSQL's active community contributes to its continuous improvement and extensive third-party tool ecosystem.</b><br>
This community also ensures excellent documentation and support resources.<br>
<b>While PostgreSQL is powerful</b>, it can be more complex to set up and optimize compared to some other databases, potentially requiring more specialized knowledge for advanced use cases.<br>
However, for applications requiring a feature-rich, standards-compliant, and reliable database system, PostgreSQL is often an excellent choice.<br>
Its use in critical systems by companies like Apple, Instagram, and Cisco demonstrates its capability to handle enterprise-level demands.<br>`),
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'mssql',
		color: 'red',
		description: escapeHtml(`
			
			Microsoft SQL Server, commonly referred to as MSSQL, is a relational database management system developed by Microsoft. First released in 1989, MSSQL has become one of the leading database platforms, particularly in enterprise environments running on Windows servers, though it now also supports Linux. MSSQL is known for its robust feature set, high performance, and tight integration with other Microsoft technologies. At its core, MSSQL uses Transact-SQL (T-SQL), Microsoft\'s proprietary extension to SQL, which adds a rich set of programming constructs to standard SQL. This allows for powerful data manipulation and complex query operations directly within the database. One of MSSQL\'s key strengths is its performance optimization features. It includes advanced query processing capabilities, intelligent query plan caching, and automated tuning features that help maintain optimal performance even as data and query patterns change over time. For data warehousing and analytics, MSSQL offers features like columnstore indexes, which can dramatically improve the performance of large analytical queries. It also includes built-in data mining capabilities and integration with Microsoft\'s business intelligence tools. MSSQL provides robust security features, including encryption at rest and in motion, row-level security, dynamic data masking, and always encrypted, which allows for operations on encrypted data without decryption. The database also offers comprehensive auditing capabilities to track access and changes to data. For high availability and disaster recovery, MSSQL includes features like AlwaysOn Availability Groups, which provide advanced failover and replication capabilities. This allows for minimal downtime and data loss in the event of hardware failures or other issues. MSSQL integrates seamlessly with other Microsoft technologies, including .NET Framework, Azure cloud services, and Power BI for business intelligence. This integration makes it a natural choice for organizations heavily invested in the Microsoft ecosystem. In recent years, Microsoft has made significant strides in making MSSQL more open and flexible. It now supports multiple programming languages, including Python and R, directly within the database for advanced analytics. The introduction of SQL Server on Linux and Docker containers has also expanded its reach beyond Windows-only environments. MSSQL includes advanced features for handling complex data types and operations. This includes support for JSON, graph data, and spatial data, making it versatile for various types of applications. While MSSQL is a commercial product with associated licensing costs, it also offers a free Express edition suitable for smaller applications and development purposes. The platform is known for its comprehensive management tools, including SQL Server Management Studio, which provides a user-friendly interface for database administration and query development. Microsoft\'s regular release cycle ensures that MSSQL continually evolves to meet modern data management needs. Recent versions have focused on improving performance, security, and cloud integration. While MSSQL can be more expensive and complex compared to some open-source alternatives, its robust feature set, strong performance, and excellent support make it a top choice for many organizations, especially those already invested in Microsoft technologies.
			
			`),
		logo: Assets.MSSQL,
		name: 'Microsoft SQL Server',
		category: 'db'
	}),
	defineSkill({
		slug: 'oracle',
		color: 'red',
		description: escapeHtml(`<b>Microsoft SQL Server</b>, commonly referred to as MSSQL, is a relational database management system developed by Microsoft.<br>
First released in 1989, MSSQL has become one of the leading database platforms, particularly in enterprise environments running on Windows servers, though it now also supports Linux.<br>
MSSQL is known for its robust feature set, high performance, and tight integration with other Microsoft technologies.<br>
<b>At its core, MSSQL uses Transact-SQL (T-SQL)</b>, Microsoft's proprietary extension to SQL, which adds a rich set of programming constructs to standard SQL.<br>
This allows for powerful data manipulation and complex query operations directly within the database.<br>
<b>One of MSSQL's key strengths is its performance optimization features.</b><br>
It includes advanced query processing capabilities, intelligent query plan caching, and automated tuning features that help maintain optimal performance even as data and query patterns change over time.<br>
<b>For data warehousing and analytics</b>, MSSQL offers features like columnstore indexes, which can dramatically improve the performance of large analytical queries.<br>
It also includes built-in data mining capabilities and integration with Microsoft's business intelligence tools.<br>
<b>MSSQL provides robust security features</b>, including encryption at rest and in motion, row-level security, dynamic data masking, and always encrypted, which allows for operations on encrypted data without decryption.<br>
The database also offers comprehensive auditing capabilities to track access and changes to data.<br>
<b>For high availability and disaster recovery</b>, MSSQL includes features like AlwaysOn Availability Groups, which provide advanced failover and replication capabilities.<br>
This allows for minimal downtime and data loss in the event of hardware failures or other issues.<br>
<b>MSSQL integrates seamlessly with other Microsoft technologies</b>, including .NET Framework, Azure cloud services, and Power BI for business intelligence.<br>
This integration makes it a natural choice for organizations heavily invested in the Microsoft ecosystem.<br>
<b>In recent years, Microsoft has made significant strides in making MSSQL more open and flexible.</b><br>
It now supports multiple programming languages, including Python and R, directly within the database for advanced analytics.<br>
The introduction of SQL Server on Linux and Docker containers has also expanded its reach beyond Windows-only environments.<br>
<b>MSSQL includes advanced features for handling complex data types and operations.</b><br>
This includes support for JSON, graph data, and spatial data, making it versatile for various types of applications.<br>
<b>While MSSQL is a commercial product with associated licensing costs</b>, it also offers a free Express edition suitable for smaller applications and development purposes.<br>
The platform is known for its comprehensive management tools, including SQL Server Management Studio, which provides a user-friendly interface for database administration and query development.<br>
<b>Microsoft's regular release cycle ensures that MSSQL continually evolves to meet modern data management needs.</b><br>
Recent versions have focused on improving performance, security, and cloud integration.<br>
<b>While MSSQL can be more expensive and complex compared to some open-source alternatives</b>, its robust feature set, strong performance, and excellent support make it a top choice for many organizations, especially those already invested in Microsoft technologies.<br>
<b>Oracle Database</b>, commonly referred to as Oracle, is a multi-model database management system produced and markete`),
		logo: Assets.Oracle,
		name: 'Oracle Database',
		category: 'db'
	}),
	defineSkill({
		slug: 'kubernetes',
		color: 'blue',
		description: escapeHtml(`<b>Kubernetes</b>, often abbreviated as K8s, is an open-source container orchestration platform designed to automate the deployment, scaling, and management of containerized applications.<br><br>

Key features include:<br>

1) <b>Container Orchestration:</b> Automatically manages containerized applications across multiple hosts.<br>
2) <b>Self-healing:</b> Automatically restarts containers that fail, replaces containers, kills containers that don't respond to health checks.<br>
3) <b>Horizontal Scaling:</b> Scale applications up and down with a simple command, UI, or automatically based on CPU usage.<br>
4) <b>Service Discovery and Load Balancing:</b> Kubernetes can expose a container using the DNS name or using their own IP address.<br>
5) <b>Automated Rollouts and Rollbacks:</b> Kubernetes progressively rolls out changes to your application or its configuration, while monitoring application health.<br>
6) <b>Secret and Configuration Management:</b> Deploy and update secrets and application configuration without rebuilding your image.<br>
7) <b>Storage Orchestration:</b> Automatically mount the storage system of your choice, whether from local storage, or cloud providers.<br>
8) <b>Batch Execution:</b> Manage your batch and CI workloads, replacing containers that fail, if needed.<br><br>

<b>Kubernetes</b> is widely used for managing microservices architectures, enabling practices like infrastructure as code, continuous deployment, and auto-scaling.`),
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devops'
	}),
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description: escapeHtml(`<b>Amazon Web Services (AWS)</b> is a comprehensive and widely adopted cloud platform offered by Amazon.<br><br>

Key features include:<br>

1) <b>Elastic Compute Cloud (EC2):</b> Virtual servers in the cloud.<br>
2) <b>Simple Storage Service (S3):</b> Scalable storage in the cloud.<br>
3) <b>Relational Database Service (RDS):</b> Set up, operate, and scale a relational database in the cloud.<br>
4) <b>Lambda:</b> Run code without provisioning or managing servers.<br>
5) <b>CloudFront:</b> Global content delivery network.<br>
6) <b>Virtual Private Cloud (VPC):</b> Isolated cloud resources.<br>
7) <b>CloudWatch:</b> Monitor AWS cloud resources and applications.<br>
8) <b>Route 53:</b> Scalable domain name system (DNS) web service.<br>
9) <b>Identity and Access Management (IAM):</b> Securely manage access to AWS services and resources.<br>
10) <b>Elastic Beanstalk:</b> Deploy and scale web applications.<br>
11) <b>SageMaker:</b> Build, train, and deploy machine learning models at scale.<br>
12) <b>Redshift:</b> Fast, simple, cost-effective data warehousing.<br><br>

<b>AWS</b> offers over 200 fully featured services from data centers globally, enabling organizations of all sizes to build sophisticated, scalable applications.`),
		logo: Assets.AWS,
		name: 'Amazon Web Services',
		category: 'devops'
	}),
	defineSkill({
		slug: 'azure',
		color: 'blue',
		description: escapeHtml(`<b>Microsoft Azure</b> is a comprehensive cloud computing platform and infrastructure created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.<br><br>

Key features include:<br>

1) <b>Virtual Machines:</b> Provision Windows and Linux virtual machines in seconds.<br>
2) <b>App Services:</b> Quickly create powerful cloud apps for web and mobile.<br>
3) <b>Azure SQL Database:</b> Managed relational SQL Database as a service.<br>
4) <b>Azure Active Directory:</b> Synchronize on-premises directories and enable single sign-on.<br>
5) <b>Azure Cosmos DB:</b> Globally distributed, multi-model database service.<br>
6) <b>Azure Functions:</b> Process events with serverless code.<br>
7) <b>Azure Kubernetes Service (AKS):</b> Simplify Kubernetes management, deployment, and operations.<br>
8) <b>Azure DevOps:</b> Services for teams to share code, track work, and ship software.<br>
9) <b>Azure Machine Learning:</b> Build, train, and deploy machine learning models.<br>
10) <b>Azure IoT Hub:</b> Connect, monitor, and manage billions of IoT assets.<br>
11) <b>Azure Synapse Analytics:</b> Analytics service that brings together enterprise data warehousing and Big Data analytics.<br>
12) <b>Azure Security Center:</b> Unified security management and advanced threat protection.<br><br>

<b>Azure</b> provides a range of capabilities including IaaS, PaaS, and SaaS that can be used for services such as analytics, virtual computing, storage, networking, and much more.`),
		logo: Assets.Azure,
		name: 'Microsoft Azure',
		category: 'devops'
	}),
	defineSkill({
		slug: 'gcp',
		color: 'red',
		description: escapeHtml(`<b>Google Cloud Platform (GCP)</b> is a suite of cloud computing services offered by Google.<br><br>

Key features include:<br>

1) <b>Compute Engine:</b> Virtual machines running in Google's data centers.<br>
2) <b>Cloud Storage:</b> Object storage for companies of all sizes.<br>
3) <b>BigQuery:</b> Fully managed, serverless data warehouse.<br>
4) <b>Cloud Run:</b> Fully managed compute platform for containerized applications.<br>
5) <b>Kubernetes Engine:</b> Managed, production-ready environment for deploying containerized applications.<br>
6) <b>Cloud Functions:</b> Event-driven serverless compute platform.<br>
7) <b>Cloud SQL:</b> Fully managed relational database service.<br>
8) <b>Cloud Bigtable:</b> Fully managed, scalable NoSQL database service.<br>
9) <b>Vertex AI:</b> Unified platform for machine learning and artificial intelligence.<br>
10) <b>Cloud Pub/Sub:</b> Messaging and ingestion for event-driven systems and streaming analytics.<br>
11) <b>Cloud CDN:</b> Content delivery network for fast, low-cost content delivery.<br>
12) <b>Cloud Armor:</b> Web application firewall (WAF) and DDoS protection service.<br><br>

<b>GCP</b> leverages Google's core infrastructure, data analytics, and machine learning capabilities, offering these technologies to businesses and developers worldwide.`),
		logo: Assets.GCP,
		name: 'Google Cloud Platform',
		category: 'devops'
	}),
	defineSkill({
		slug: 'git',
		color: 'orange',
		description: escapeHtml(`<b>Git</b> is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency.<br><br>

Key features include:<br>

1) <b>Distributed Development:</b> Every developer has a full copy of the repository, including its history.<br>
2) <b>Branching and Merging:</b> Git allows for non-linear development with its robust branching and merging capabilities.<br>
3) <b>Speed:</b> Git operations are performed locally, giving it a speed advantage over centralized systems.<br>
4) <b>Data Integrity:</b> Git uses SHA-1 hashes to check the integrity of the repository.<br>
5) <b>Staging Area:</b> Git has a unique staging area or 'index' that allows you to format and review your commits.<br>
6) <b>Free and Open Source:</b> Git is released under the GNU General Public License version 2.0.<br>
7) <b>Support for Non-linear Development:</b> Git supports rapid branching and merging, and includes specific tools for visualizing and navigating a non-linear development history.<br>
8) <b>Cryptographic Authentication:</b> Git uses SHA-1 hash for content authentication.<br><br>

<b>Git</b> has become the most widely used modern version control system in the world, enabling new workflows like Git Flow and GitHub Flow, and has become an essential tool in modern software development practices.`),
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'jenkins',
		color: 'red',
		description: escapeHtml(`<b>Jenkins</b> is an open-source automation server that has become a crucial tool in the world of continuous integration and continuous delivery (CI/CD).<br><br>

Key features include:<br>

1) <b>Easy Installation:</b> Jenkins can be easily installed on many operating systems.<br>
2) <b>Easy Configuration:</b> Jenkins can be easily configured via its web interface.<br>
3) <b>Rich Plugin Ecosystem:</b> Jenkins has hundreds of plugins available in the Update Center.<br>
4) <b>Extensible:</b> Jenkins can be extended via its plugin architecture.<br>
5) <b>Distributed:</b> Jenkins can easily distribute work across multiple machines for faster builds, tests, and deployments.<br>
6) <b>Pipeline Support:</b> Jenkins supports defining delivery pipelines as code through the Pipeline plugin.<br>
7) <b>Community-contributed Platform:</b> Many of the plugins are developed by the community.<br>
8) <b>Free and Open Source:</b> Jenkins is an open-source tool released under the MIT License.<br><br>

<b>Jenkins</b> has played a significant role in the adoption of DevOps practices, enabling teams to automate their software delivery process and reduce the time between writing code and having it deployed to production.`),
		logo: Assets.Jenkins,
		name: 'Jenkins',
		category: 'devops'
	}),
	defineSkill({
		slug: 'travis',
		color: 'red',
		description: escapeHtml(`<b>Travis CI</b> is a hosted continuous integration and deployment system that has gained significant popularity, especially in the open-source community.<br><br>

Key features include:<br>

1) <b>GitHub Integration:</b> Travis CI integrates seamlessly with GitHub repositories.<br>
2) <b>Multi-language Support:</b> Travis CI supports numerous programming languages out of the box.<br>
3) <b>Build Matrix:</b> Easily test your projects against multiple versions of languages and dependencies.<br>
4) <b>Parallel Build Execution:</b> Run multiple jobs in parallel to speed up your build process.<br>
5) <b>Deploy to Multiple Cloud Providers:</b> Travis CI supports deployment to various cloud platforms.<br>
6) <b>Pull Request Support:</b> Automatically test pull requests before merging.<br>
7) <b>Environment Variables:</b> Securely store sensitive information as encrypted environment variables.<br>
8) <b>Caching:</b> Speed up builds by caching dependencies.<br><br>

<b>Travis CI</b> automates the process of building, testing, and deploying code changes, helping developers catch and fix issues quickly.`),
		logo: Assets.Travis,
		name: 'Travis CI',
		category: 'devops'
	}),
	defineSkill({
		slug: 'circleci',
		color: 'green',
		description: escapeHtml(`<b>CircleCI</b> is a popular continuous integration and continuous delivery (CI/CD) platform that automates the build, test, and deployment processes of software applications.<br><br>

Key features include:<br>

1) <b>Fast Builds:</b> CircleCI uses intelligent parallelism to split tests across multiple machines.<br>
2) <b>Flexibility:</b> Supports a wide range of languages and tools.<br>
3) <b>Docker Support:</b> First-class Docker support, allowing you to build Docker images for your applications.<br>
4) <b>Workflows:</b> Orchestrate jobs with dependencies and fan-out/fan-in.<br>
5) <b>Caching:</b> Speed up builds by caching dependencies and build outputs.<br>
6) <b>Resource Classes:</b> Choose the CPU and RAM allocation for your build containers.<br>
7) <b>Orbs:</b> Reusable packages of CircleCI configuration.<br>
8) <b>SSH Access:</b> Debug builds via SSH access to build containers.<br><br>

<b>CircleCI</b> is designed to help development teams release code rapidly and efficiently by automating the integration and delivery process.`),
		logo: Assets.CircleCI,
		name: 'CircleCI',
		category: 'devops'
	}),
	defineSkill({
		slug: 'android',
		color: 'green',
		description: escapeHtml(`<b>Android</b> is a mobile operating system developed by Google, based on a modified version of the Linux kernel and other open source software.<br><br>

Key features include:<br>

1) <b>Open Source:</b> The Android Open Source Project (AOSP) allows for customization and modification.<br>
2) <b>Rich Application Framework:</b> Allows developers to build innovative apps and games.<br>
3) <b>Support for Multiple Screen Sizes:</b> Android can adapt to various device form factors.<br>
4) <b>Multitasking:</b> True multitasking of applications.<br>
5) <b>Google Play Store:</b> A vast ecosystem of apps and digital content.<br>
6) <b>Customizable Home Screen:</b> Users can customize their device's interface.<br>
7) <b>Notifications:</b> A robust notification system for apps to communicate with users.<br>
8) <b>Integration with Google Services:</b> Seamless integration with Google's suite of mobile services.<br><br>

<b>Android</b> is designed primarily for touchscreen mobile devices such as smartphones and tablets, and has been extended to televisions, cars, wearables, and other devices.`),
		logo: Assets.Android,
		name: 'Android',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'ios',
		color: 'gray',
		description: escapeHtml(`<b>iOS</b> is a mobile operating system created and developed by Apple Inc. exclusively for its hardware.<br><br>

Key features include:<br>

1) <b>User-Friendly Interface:</b> Known for its intuitive and easy-to-use interface.<br>
2) <b>App Store:</b> A curated store for downloading applications.<br>
3) <b>iCloud Integration:</b> Seamless syncing of data across Apple devices.<br>
4) <b>Security:</b> Strong security features including encryption and app sandboxing.<br>
5) <b>Siri:</b> Intelligent personal assistant and knowledge navigator.<br>
6) <b>Continuity:</b> Allows for seamless transition between iOS and macOS devices.<br>
7) <b>Regular Updates:</b> Consistent system updates with new features and security improvements.<br>
8) <b>Privacy Controls:</b> Granular control over app permissions and data access.<br><br>

<b>iOS</b> is known for its consistent and intuitive user interface, tight integration with Apple's hardware, and strong emphasis on user privacy and security.`),
		logo: Assets.IOS,
		name: 'iOS',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'react-native',
		color: 'blue',
		description: escapeHtml(`<b>React Native</b> is an open-source mobile application development framework created by Facebook.<br><br>

Key features include:<br>

1) <b>Cross-Platform Development:</b> Develop for both iOS and Android using a single codebase.<br>
2) <b>Native Components:</b> Uses native UI components for better performance.<br>
3) <b>Hot Reloading:</b> See changes instantly during development.<br>
4) <b>Large Community and Ecosystem:</b> Extensive third-party plugins and libraries available.<br>
5) <b>JavaScript and React:</b> Leverage existing web development skills.<br>
6) <b>Performance:</b> Near-native performance due to optimized native components.<br>
7) <b>Code Reusability:</b> Share code between mobile and web applications.<br>
8) <b>OTA Updates:</b> Update apps without going through the app store review process.<br><br>

<b>React Native</b> allows developers to use React along with native platform capabilities to create mobile applications for both iOS and Android platforms using a single codebase.`),
		logo: Assets.ReactNative,
		name: 'React Native',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'flutter',
		color: 'blue',
		description: escapeHtml(`<b>Flutter</b> is an open-source UI software development kit created by Google.<br><br>

Key features include:<br>

1) <b>Cross-Platform Development:</b> Build for mobile, web, and desktop from a single codebase.<br>
2) <b>Hot Reload:</b> See changes instantly during development.<br>
3) <b>Widgets:</b> Rich set of customizable widgets for building native interfaces.<br>
4) <b>High Performance:</b> Compiles to native ARM machine code for high performance.<br>
5) <b>Dart Language:</b> Uses the Dart programming language, optimized for UI creation.<br>
6) <b>Extensive Libraries:</b> Rich set of pre-built and customizable widgets.<br>
7) <b>Strong Community:</b> Growing ecosystem and community support.<br>
8) <b>Integration:</b> Easy integration with platform-specific code.<br><br>

<b>Flutter</b> allows developers to build natively compiled applications for mobile, web, and desktop from a single codebase.`),
		logo: Assets.Flutter,
		name: 'Flutter',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'unity',
		color: 'black',
		description: escapeHtml(`<b>Unity</b> is a cross-platform game engine developed by Unity Technologies.<br><br>

Key features include:<br>

1) <b>Cross-Platform Development:</b> Develop for multiple platforms from a single codebase.<br>
2) <b>Visual Editor:</b> Powerful visual editing tools for game development.<br>
3) <b>Asset Store:</b> Marketplace for assets, tools, and plugins.<br>
4) <b>2D and 3D Support:</b> Create both 2D and 3D games and experiences.<br>
5) <b>Physics Engine:</b> Built-in physics engine for realistic simulations.<br>
6) <b>Animation System:</b> Powerful tools for creating and managing animations.<br>
7) <b>Scripting:</b> Uses C# for scripting game logic.<br>
8) <b>Visual Scripting:</b> Node-based scripting system for non-programmers.<br><br>
   
<b>Unity</b> is widely used for developing video games and simulations for computers, consoles, and mobile devices, as well as for creating experiences in AR and VR.`),
		logo: Assets.Unity,
		name: 'Unity',
		category: 'game'
	}),
	defineSkill({
		slug: 'unreal',
		color: 'black',
		description: escapeHtml(`<b>Unreal Engine</b> is a powerful and versatile game engine developed by Epic Games.<br><br>

Key features include:<br>

1) <b>High-Fidelity Graphics:</b> Known for its ability to produce photorealistic graphics.<br>
2) <b>Blueprint Visual Scripting:</b> Visual scripting system for non-programmers.<br>
3) <b>C++ Source Code Access:</b> Full access to engine source code for advanced developers.<br>
4) <b>Cross-Platform Development:</b> Support for multiple platforms including PC, console, mobile, and VR.<br>
5) <b>Real-Time Rendering:</b> Advanced real-time rendering capabilities.<br>
6) <b>Physics Simulation:</b> Built-in physics engine for realistic simulations.<br>
7) <b>Material Editor:</b> Powerful node-based material creation system.<br>
8) <b>Marketplace:</b> Ecosystem for buying and selling assets and tools.<br><br>

<b>Unreal Engine</b> is particularly known for its graphical capabilities and is used not only in game development but also in film, television production, and architecture visualization.`),
		logo: Assets.Unreal,
		name: 'Unreal Engine',
		category: 'game'
	}),
	defineSkill({
		slug: 'ai',
		color: 'purple',
		description: escapeHtml(`<b>Artificial Intelligence (AI)</b> is a branch of computer science that aims to create intelligent machines that can perform tasks that typically require human intelligence.<br><br>

Key areas include:<br>

1) <b>Machine Learning:</b> Algorithms that can learn from and make predictions or decisions based on data.<br>
2) <b>Deep Learning:</b> A subset of machine learning based on artificial neural networks.<br>
3) <b>Natural Language Processing (NLP):</b> Enabling computers to understand, interpret, and generate human language.<br>
4) <b>Computer Vision:</b> Enabling machines to interpret and understand visual information from the world.<br>
5) <b>Robotics:</b> Designing and creating robots that can interact with the physical world.<br>
6) <b>Expert Systems:</b> Systems that emulate the decision-making ability of a human expert.<br>
7) <b>Speech Recognition:</b> Translating spoken language into text.<br>
8) <b>Planning and Decision Making:</b> Systems that can create and execute plans to achieve specific goals.<br><br>

<b>AI</b> has applications across numerous fields including healthcare, finance, transportation, and entertainment, and is one of the most transformative technologies of the 21st century.`),
		logo: Assets.AI,
		name: 'Artificial Intelligence',
		category: 'ai-ml'
	}),
	defineSkill({
		slug: 'machine-learning',
		color: 'green',
		description: escapeHtml(`<b>Machine Learning (ML)</b> is a subset of Artificial Intelligence that focuses on the development of algorithms and statistical models that enable computer systems to improve their performance on a specific task through experience.<br><br>

Key concepts include:<br>

1) <b>Supervised Learning:</b> Learning from labeled data to predict outcomes for unforeseen data.<br>
2) <b>Unsupervised Learning:</b> Finding patterns and relationships in unlabeled data.<br>
3) <b>Reinforcement Learning:</b> Learning to make decisions by interacting with an environment.<br>
4) <b>Neural Networks:</b> Computational models inspired by the human brain.<br>
5) <b>Deep Learning:</b> Machine learning based on artificial neural networks with multiple layers.<br>
6) <b>Feature Engineering:</b> The process of selecting and transforming variables when creating a predictive model.<br>
7) <b>Model Evaluation:</b> Techniques to assess the performance and generalization of a model.<br>
8) <b>Ensemble Methods:</b> Combining multiple learning algorithms to improve predictive performance.<br><br>

<b>Machine Learning</b> has applications in various fields including image and speech recognition, natural language processing, predictive analytics, and autonomous systems.`),
		logo: Assets.MachineLearning,
		name: 'Machine Learning',
		category: 'ai-ml'
	}),
	defineSkill({
		slug: 'deep-learning',
		color: 'blue',
		description: escapeHtml(`<b>Deep Learning</b> is a subset of machine learning that is inspired by the structure and function of the human brain, specifically the interconnected neurons that form neural networks.<br><br>

Key concepts include:<br>

1) <b>Neural Networks:</b> Computational models inspired by biological neural networks.<br>
2) <b>Convolutional Neural Networks (CNNs):</b> Specialized for processing grid-like data, such as images.<br>
3) <b>Recurrent Neural Networks (RNNs):</b> Designed to work with sequence data, like text or time series.<br>
4) <b>Long Short-Term Memory (LSTM):</b> A type of RNN capable of learning long-term dependencies.<br>
5) <b>Generative Adversarial Networks (GANs):</b> Two neural networks contest with each other to generate new, synthetic instances of data.<br>
6) <b>Transfer Learning:</b> Technique that allows a model trained on one task to be repurposed on a second related task.<br>
7) <b>Reinforcement Learning:</b> Training models to make sequences of decisions.<br>
8) <b>Attention Mechanisms:</b> Allowing models to focus on specific parts of their input.<br><br>

<b>Deep Learning</b> has achieved remarkable results in various domains including computer vision, natural language processing, speech recognition, and game playing.`),
		logo: Assets.DeepLearning,
		name: 'Deep Learning',
		category: 'ai-ml'
	}),
	defineSkill({
		slug: 'photoshop',
		color: 'blue',
		description: escapeHtml(`<b>Adobe Photoshop</b> is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS.<br><br>

Key features include:<br>

1) <b>Layer-based Editing:</b> Allows working on different elements of an image separately.<br>
2) <b>Selection Tools:</b> Various tools for selecting specific parts of an image for editing.<br>
3) <b>Brush Tools:</b> For painting, erasing, and retouching images.<br>
4) <b>Type Tools:</b> For adding and manipulating text in various fonts and styles.<br>
5) <b>Adjustment Tools:</b> For fine-tuning image colors and tones.<br>
6) <b>Filters:</b> A wide range of effects that can be applied to images.<br>
7) <b>Smart Objects:</b> Allow for non-destructive editing of layers.<br>
8) <b>3D Capabilities:</b> For creating and editing 3D models and scenes.<br><br>

<b>Photoshop</b> is used across a wide range of industries and applications, from photography and graphic design to web design and digital art creation.`),
		logo: Assets.Photoshop,
		name: 'Adobe Photoshop',
		category: 'design'
	}),
	defineSkill({
		slug: 'illustrator',
		color: 'orange',
		description: escapeHtml(`<b>Adobe Illustrator</b> is a vector graphics editor and design program developed and marketed by Adobe Inc.<br>
Originally designed for the Apple Macintosh, development of Adobe Illustrator began in 1985.<br>
Along with Creative Cloud, it is currently marketed as part of the Adobe Creative Suite.<br>
<b>Illustrator is widely recognized as the industry-standard vector graphics software</b>, used by graphic designers, visual artists, and illustrators worldwide.<br>
<b>At its core, Illustrator works with vector graphics.</b><br>
Unlike raster graphics, which are based on pixels, vector graphics are based on mathematical formulas that define geometric primitives such as points, lines, curves, and shapes.<br>
This means that vector graphics can be scaled to any size without loss of quality, making Illustrator ideal for creating logos, icons, typography, and illustrations that may need to be used at various sizes.<br>
<b>Key features of Adobe Illustrator include:</b><br>

Pen Tool: The primary tool for creating precise, smooth vector paths.<br>
Shape Tools: For creating basic shapes like rectangles, ellipses, and polygons.<br>
Type Tools: For creating and manipulating text, including text on a path and text in shapes.<br>
Pathfinder: For combining and manipulating shapes in various ways.<br>
Live Trace: For converting raster images into vector graphics.<br>
Gradient Mesh: For creating complex, multi-colored gradients.<br>
Perspective Grid: For creating and manipulating objects in perspective.<br>
Artboards: Multiple artboards in a single document for creating various layouts or versions of a design.<br>
Symbols: For creating and reusing design elements efficiently.<br>
Graphic Styles: For saving and applying combinations of appearance attributes.<br>
Color Management: Including support for Pantone colors and other color systems.<br>
3D Effects: For creating three-dimensional objects from 2D artwork.<br>

<b>Illustrator is used in a wide range of industries and applications:</b><br>

Logo Design: For creating scalable, print-ready logos.<br>
Brand Identity: For developing comprehensive brand guidelines and assets.<br>
Packaging Design: For creating product packaging and labels.<br>
Editorial Illustration: For magazines, books, and digital publications.<br>
Icon Design: For creating app icons, web icons, and user interface elements.<br>
Infographic Design: For creating data visualizations and informational graphics.<br>
Fashion Design: For creating technical drawings and pattern designs.<br>
Map Making: For creating custom maps and location graphics.<br>
Signage and Wayfinding: For creating large-scale graphics for public spaces.<br>

<b>Illustrator integrates seamlessly with other Adobe Creative Cloud applications</b>, allowing for efficient workflows between different aspects of design projects.<br>
<b>It supports a wide range of file formats</b>, including its native AI format, as well as SVG, EPS, and PDF, which are widely used in the design and printing industries.<br>
<b>The software also supports a plugin architecture</b>, allowing third-party developers to extend its functionality.<br>
<b>Recent versions of Illustrator have incorporated more features for digital and web design</b>, including the ability to export designs for web and mobile platforms.<br>
It also includes features for collaboration and cloud storage through Creative Cloud.<br>
<b>While Illustrator is powerful, it can have a learning curve</b>, particularly for those new to vector graphics.<br>
However, Adobe provides extensive documentation, tutorials, and a large user community that shares knowledge and resources.<br>
<b>Illustrator is available through Adobe's Creative Cloud subscription service</b>, which provides regular updates and cloud storage integration.<br>
<b>For professionals in graphic design, illustration, and many other creative fields</b>, proficiency in Illustrator is often considered an essential skill.<br>
Its precision and scalability make it indispensable for creating high-quality graphics for both print and digital media.<br>
<b>As the demand for visual communication continues to grow across various industries</b>, Illustrator remains a key tool in the creation of vector graphics and illustrations.<br>`),
		logo: Assets.Illustrator,
		name: 'Adobe Illustrator',
		category: 'design'
	}),
	defineSkill({
		slug: 'indesign',
		color: 'pink',
		description: escapeHtml(`<b>Adobe InDesign</b> is a desktop publishing and typesetting software application produced by Adobe Inc.<br>
It can be used to create works such as posters, flyers, brochures, magazines, newspapers, presentations, books and ebooks.<br>
<b>First released in 1999, InDesign has become the industry standard for layout and page design for print and digital media.</b><br>
InDesign is part of the Adobe Creative Cloud, which allows it to integrate seamlessly with other Adobe applications like Photoshop and Illustrator.<br>
<b>Key features of Adobe InDesign include:</b><br>

Page Layout Tools: InDesign offers a comprehensive set of tools for precise control over page layouts, including guides, grids, and smart guides.<br>
Master Pages: These allow users to create consistent layouts across multiple pages.<br>
Paragraph and Character Styles: For consistent and easily updatable text formatting.<br>
Object Styles: Similar to text styles, but for design elements.<br>
Advanced Typography: InDesign provides fine control over typography, including kerning, tracking, and OpenType features.<br>
Tables: Tools for creating and formatting complex tables.<br>
Interactive PDFs: Ability to create PDFs with interactive elements like buttons, hyperlinks, and media.<br>
Digital Publishing: Features for creating digital publications, including support for fixed-layout EPUB.<br>
Data Merge: For creating personalized documents from databases.<br>
Long Document Features: Tools for managing long documents, including table of contents, indexing, and cross-references.<br>
Collaboration Tools: Integration with Adobe Creative Cloud for team collaboration.<br>
Preflight: Built-in tools for checking documents for potential printing issues.<br>

<b>InDesign is used in a variety of industries and applications:</b><br>

Publishing: For creating books, magazines, and newspapers.<br>
Marketing: For designing brochures, flyers, and other marketing materials.<br>
Corporate Communications: For annual reports, company newsletters, and presentations.<br>
Packaging Design: For creating packaging layouts and dielines.<br>
Digital Publishing: For creating ebooks and interactive digital publications.<br>
Education: For creating textbooks and educational materials.<br>

<b>One of InDesign's strengths is its ability to handle long, complex documents.</b><br>
Its book feature allows users to combine multiple InDesign files into a single project, making it ideal for managing large publications.<br>
<b>InDesign also excels in its typography features.</b><br>
It offers advanced control over text, including OpenType support, optical margin alignment, and paragraph composer for optimizing line breaks.<br>
<b>The software supports a wide range of file formats</b>, including its native INDD format, as well as IDML for backwards compatibility, and the ability to export to PDF, EPUB, and HTML.<br>
<b>InDesign's scripting capabilities allow for automation of repetitive tasks</b>, which can be particularly useful in production environments.<br>
<b>Recent versions of InDesign have expanded its digital publishing capabilities.</b><br>
The software now includes tools for creating fixed-layout EPUBs, interactive PDFs, and publications for tablet devices.<br>
It also integrates with Adobe's Digital Publishing Suite for creating tablet applications.<br>
<b>While InDesign is powerful, it can have a learning curve</b>, particularly for those new to desktop publishing.<br>
However, Adobe provides extensive documentation, tutorials, and a large user community that shares knowledge and resources.<br>
<b>InDesign is available through Adobe's Creative Cloud subscription service</b>, which provides regular updates and cloud storage integration.<br>
<b>For professionals in publishing, graphic design, and marketing</b>, proficiency in InDesign is often considered an essential skill.<br>
Its robust features for both print and digital publishing make it a versatile tool for creating a wide range of publications.<br>
<b>As the publishing industry continues to evolve</b>, with increasing emphasis on digital formats, InDesign remains a key tool in bridging the gap between print and digital publishing.<br>`),
		logo: Assets.InDesign,
		name: 'Adobe InDesign',
		category: 'design'
	}),
	defineSkill({
		slug: 'after-effects',
		color: 'purple',
		description: escapeHtml(`<b>Adobe After Effects</b> is a digital visual effects, motion graphics, and compositing application developed by Adobe Inc.<br><br>

Key features include:<br>

1) <b>Composition:</b> The ability to layer multiple pieces of footage, images, and audio.<br>
2) <b>Keyframe Animation:</b> For creating motion by changing properties over time.<br>
3) <b>Effects:</b> A wide range of built-in effects for altering footage.<br>
4) <b>3D Capability:</b> The ability to work with 3D layers and create 3D compositions.<br>
5) <b>Motion Tracking:</b> Tools for tracking motion in footage and applying that motion to other elements.<br>
6) <b>Rotoscoping:</b> Tools for cutting out objects from footage frame by frame.<br>
7) <b>Shape Layers:</b> Vector-based layers for creating and animating shapes.<br>
8) <b>Text Animation:</b> Powerful tools for creating and animating text.<br>
9) <b>Expressions:</b> A scripting language for creating complex animations and automating tasks.<br>
10) <b>Puppet Tool:</b> For easily animating characters and objects.<br>
11) <b>Camera Tools:</b> For creating and animating virtual cameras in 3D space.<br>
12) <b>Rendering and Output:</b> Support for various output formats and rendering engines.<br><br>

<b>After Effects</b> is used in a wide range of industries and applications, from film and television to advertising and mobile app design.	`),
		logo: Assets.AfterEffects,
		name: 'Adobe After Effects',
		category: 'design'
	}),
	defineSkill({
		slug: 'selenium',
		color: 'green',
		description: escapeHtml(`<b>Selenium</b> is a powerful suite of tools specifically designed for automating web browsers.<br><br>

Key features include:<br>

1) <b>Cross-Browser Testing:</b> Selenium supports all major browsers.<br>
2) <b>Multiple Language Support:</b> Tests can be written in various programming languages.<br>
3) <b>OS Independence:</b> Selenium can run on various operating systems.<br>
4) <b>Reusable Code:</b> Selenium allows for the creation of reusable code.<br>
5) <b>Integration with Testing Frameworks:</b> Selenium integrates well with testing frameworks like JUnit, TestNG, and others.<br>
6) <b>Support for Mobile Testing:</b> Through tools like Appium, it's possible to automate mobile application testing.<br>
7) <b>Parallel Execution:</b> With Selenium Grid, tests can be run in parallel.<br>
8) <b>Headless Browser Testing:</b> Selenium supports headless browser testing.<br><br>

<b>Selenium</b> is widely used for automating functional and regression testing of web applications, as part of CI/CD pipelines, and sometimes for web scraping tasks.`),
		logo: Assets.Selenium,
		name: 'Selenium',
		category: 'test'
	}),
	defineSkill({
		slug: 'redis',
		color: 'red',
		description: escapeHtml(`<b>Redis</b> (Remote Dictionary Server) is an open-source, in-memory data structure store that can be used as a database, cache, message broker, and queue.<br><br>

Key features include:<br>

1) <b>In-Memory Data Store:</b> Redis keeps its entire dataset in memory, enabling extremely fast read and write operations.<br>
2) <b>Persistence:</b> While Redis is an in-memory database, it supports persistence by periodically saving the dataset to disk.<br>
3) <b>Data Structures:</b> Redis supports various data structures including strings, hashes, lists, sets, sorted sets, and more.<br>
4) <b>Replication:</b> Redis supports master-slave replication, allowing easy scalability and high availability.<br>
5) <b>Transactions:</b> Redis supports transactions, allowing the execution of a group of commands in a single step.<br>
6) <b>Pub/Sub:</b> Redis has a Publish/Subscribe messaging paradigm, making it useful for real-time applications.<br>
7) <b>Lua Scripting:</b> Redis has built-in Lua scripting capabilities, allowing for complex operations to be performed efficiently.<br>
8) <b>TTL for Keys:</b> Redis allows setting a time to live (TTL) for keys, after which they are automatically deleted.<br>
9) <b>Atomic Operations:</b> Redis operations are atomic, even when operating on complex data structures.<br>
10) <b>Cluster Mode:</b> Redis Cluster provides a way to run a Redis installation where data is automatically sharded across multiple Redis nodes.<br><br>

<b>Redis</b> is used in a wide variety of scenarios, from caching and session storage to real-time analytics and queuing systems.`),
		logo: Assets.Redis,
		name: 'Redis',
		category: 'db'
	}),
	defineSkill({
		slug: 'quasar',
		color: 'cyan',
		description: escapeHtml(`<b>Quasar</b> is an open-source Vue.js based framework that allows developers to quickly create responsive websites, progressive web apps (PWAs), and mobile and desktop apps, all from a single codebase.<br><br>

Key features include:<br>

1) <b>Cross-Platform Development:</b> With Quasar, you can build for Web, Mobile, and Desktop from the same codebase.<br>
2) <b>Vue.js Based:</b> Quasar is built on top of Vue.js, leveraging its reactivity system and component-based architecture.<br>
3) <b>Comprehensive Component Library:</b> Quasar provides a large set of high-quality, customizable Vue components out of the box.<br>
4) <b>Material Design Implementation:</b> Quasar components follow Material Design specifications, but can be easily customized.<br>
5) <b>Responsive Design:</b> Quasar's components and layout system are designed to be responsive out of the box.<br>
6) <b>CLI with Hot-Reload:</b> Quasar comes with a powerful CLI that supports hot-reload, allowing for rapid development.<br>
7) <b>RTL Support:</b> Quasar has built-in support for right-to-left languages.<br>
8) <b>Icon Libraries:</b> Integrated support for Material Icons, Font Awesome, and Ionicons.<br>
9) <b>Quasar Language Packs:</b> Easy internationalization support.<br>
10) <b>Sass/SCSS Support:</b> Quasar allows the use of Sass/SCSS for styling.<br>
11) <b>Performance Focused:</b> Quasar is designed with performance in mind, offering features like tree shaking out of the box.<br>
12) <b>Extensive Documentation:</b> Quasar provides comprehensive documentation and guides.<br><br>

<b>Quasar</b> is particularly well-suited for rapid prototyping, cross-platform applications, and progressive web apps.`),
		logo: Assets.Quasar,
		name: 'Quasar',
		category: 'framework'
	}),
	defineSkill({
		slug: 'premiere',
		color: 'purple',
		description: escapeHtml(`<b>Adobe Premiere Pro</b> is a timeline-based video editing software application developed by Adobe Inc.<br><br>

Key features include:<br>

1) <b>Non-Linear Editing:</b> Premiere Pro uses a non-linear editing approach, allowing editors to access any frame in a digital video clip with the same ease as any other.<br>
2) <b>Multi-camera Editing:</b> The software supports editing footage from multiple cameras in real-time.<br>
3) <b>Color Correction and Grading:</b> Premiere Pro includes powerful color correction and grading tools, including the Lumetri Color panel.<br>
4) <b>Audio Editing:</b> While primarily a video editor, Premiere Pro also includes robust audio editing capabilities.<br>
5) <b>Motion Graphics Templates:</b> Users can create and edit motion graphics templates, which can be shared with team members.<br>
6) <b>VR Editing:</b> Premiere Pro supports editing of VR (Virtual Reality) content.<br>
7) <b>Auto Reframe:</b> This AI-powered feature automatically reframes videos for different aspect ratios.<br>
8) <b>Essential Graphics Panel:</b> This feature allows for the creation and animation of titles and graphics within Premiere Pro.<br>
9) <b>Integration with other Adobe Software:</b> Premiere Pro integrates seamlessly with other Adobe Creative Cloud applications.<br>
10) <b>Proxy Workflow:</b> This feature allows editors to work with lower-resolution copies of their footage for improved performance.<br>
11) <b>Team Projects:</b> Collaborative features allow multiple editors to work on the same project simultaneously.<br>
12) <b>Extensive Format Support:</b> Premiere Pro supports a wide range of video formats and codecs.<br><br>

<b>Premiere Pro</b> is used in various scenarios from film editing to television production and web video creation.`),
		logo: Assets.Premiere,
		name: 'Adobe Premiere Pro',
		category: 'design'
	}),
	defineSkill({
		slug: 'postcss',
		color: 'red',
		description: escapeHtml(`<b>PostCSS</b> is a tool for transforming CSS with JavaScript.<br><br>

Key features include:<br>

1) <b>Plugin Architecture:</b> PostCSS itself is very lightweight, with all functionality provided through plugins.<br>
2) <b>Future CSS Features:</b> PostCSS can be used to polyfill future CSS features, allowing developers to use upcoming CSS syntax today.<br>
3) <b>Autoprefixer:</b> One of the most popular PostCSS plugins, Autoprefixer, automatically adds vendor prefixes to CSS rules.<br>
4) <b>CSS Modules:</b> PostCSS can be used to implement CSS Modules, providing local scope for CSS classes.<br>
5) <b>Linting:</b> PostCSS plugins can provide CSS linting, helping to catch errors and enforce coding standards.<br>
6) <b>Minification:</b> PostCSS can be used to minify CSS, reducing file size.<br>
7) <b>Preprocessing:</b> While not a preprocessor itself, PostCSS can replicate many features of preprocessors like variables and mixins through plugins.<br>
8) <b>Custom Properties:</b> PostCSS can transform custom properties (CSS variables) for broader browser support.<br>
9) <b>Image Processing:</b> Some PostCSS plugins can handle tasks like image inlining or spriting.<br>
10) <b>Source Maps:</b> PostCSS supports source maps, making it easier to debug transformed CSS.<br><br>

<b>PostCSS</b> is used in various scenarios, from modern web development to maintaining large stylesheets and optimizing performance.`),
		logo: Assets.Postcss,
		name: 'PostCSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'nuxt',
		color: 'green',
		description: escapeHtml(`<b>Nuxt.js</b> is a free and open source web application framework based on Vue.js, Node.js, Webpack and Babel.js.<br><br>

Key features include:<br>

1) <b>Server-Side Rendering (SSR):</b> Nuxt.js can render Vue.js applications on the server, improving SEO and initial load times.<br>
2) <b>Static Site Generation (SSG):</b> Nuxt.js can generate static websites, providing the benefits of a static site with the power of a Vue.js application.<br>
3) <b>Automatic Code Splitting:</b> Nuxt.js automatically splits your code for faster page loads.<br>
4) <b>Vue Router Integration:</b> Nuxt.js automatically generates the vue-router configuration based on your file structure.<br>
5) <b>Asynchronous Data:</b> Nuxt.js provides a powerful asyncData method for fetching data on the server side.<br>
6) <b>Vuex Store Integration:</b> Nuxt.js provides a Vuex store that's easy to set up and use.<br>
7) <b>Plugin System:</b> Easily extend core functionality with plugins.<br>
8) <b>Modular Architecture:</b> Nuxt.js has a modular architecture that allows you to choose and use only the features you need.<br>
9) <b>Hot Module Replacement:</b> Enjoy instant feedback during development with hot module replacement.<br>
10) <b>SEO Optimization:</b> Nuxt.js provides features like automatic generation of headers and links for better SEO.<br>
11) <b>TypeScript Support:</b> Nuxt.js has built-in TypeScript support.<br>
12) <b>Nuxt Modules:</b> Extend Nuxt.js with modules for tasks like PWA features, Google Analytics integration, and more.<br><br>

<b>Nuxt.js</b> is particularly well-suited for server-side rendered Vue.js applications, static site generation, and large-scale Vue.js applications.`),
		logo: Assets.Nuxt,
		name: 'Nuxt.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'nginx',
		color: 'green',
		description: escapeHtml(`<b>Nginx</b> (pronounced "engine-x") is a powerful, open-source web server software that can also be used as a reverse proxy, load balancer, HTTP cache, and more.<br><br>

Key features include:<br>

1) <b>Web Server:</b> Nginx can serve static content quickly and efficiently.<br>
2) <b>Reverse Proxy:</b> It can act as an intermediary for requests from clients, forwarding them to other servers.<br>
3) <b>Load Balancer:</b> Nginx can distribute incoming traffic across multiple servers to ensure no single server becomes overwhelmed.<br>
4) <b>HTTP Cache:</b> It can cache content, reducing the load on upstream servers.<br>
5) <b>SSL/TLS Termination:</b> Nginx can handle SSL/TLS encryption and decryption, offloading this work from application servers.<br>
6) <b>FastCGI Support:</b> For serving dynamic content, Nginx supports the FastCGI protocol.<br>
7) <b>URL Rewriting and Redirection:</b> Nginx provides powerful tools for manipulating URLs.<br>
8) <b>Gzip Compression:</b> It can compress responses before sending them to clients, reducing bandwidth usage.<br>
9) <b>WebSockets Support:</b> Nginx can proxy WebSocket connections.<br>
10) <b>HTTP/2 Support:</b> Nginx supports the HTTP/2 protocol, enabling faster web page loading.<br>
11) <b>Monitoring and Logging:</b> It provides detailed logs and status information for monitoring server health and performance.<br>
12) <b>Security Features:</b> Nginx includes features like rate limiting and access control to help protect against various types of attacks.<br><br>

<b>Nginx</b> is used in various scenarios, from serving high-traffic websites to acting as an API gateway in microservices setups.`),
		logo: Assets.Nginx,
		name: 'Nginx',
		category: 'devops'
	}),
	defineSkill({
		slug: 'firebase',
		color: 'yellow',
		description: escapeHtml(`<b>Firebase</b> is a comprehensive mobile and web application development platform provided by Google.<br><br>

Key features include:<br>

1) <b>Realtime Database:</b> A cloud-hosted NoSQL database that lets you store and sync data in realtime.<br>
2) <b>Cloud Firestore:</b> A flexible, scalable NoSQL cloud database to store and sync data for client- and server-side development.<br>
3) <b>Authentication:</b> Provides easy-to-use SDKs and ready-made UI libraries to authenticate users to your app.<br>
4) <b>Hosting:</b> Fast and secure web hosting for your static and dynamic content.<br>
5) <b>Cloud Functions:</b> Let you automatically run backend code in response to events triggered by Firebase features and HTTPS requests.<br>
6) <b>Cloud Storage:</b> For storing and serving user-generated content like photos or videos.<br>
7) <b>Crashlytics:</b> A real-time crash reporter that helps you track, prioritize, and fix stability issues.<br>
8) <b>Analytics:</b> Provides insight into app usage and user engagement.<br>
9) <b>Cloud Messaging:</b> A cross-platform messaging solution that lets you reliably send messages at no cost.<br>
10) <b>Performance Monitoring:</b> Helps you gain insight into your app's performance issues.<br>
11) <b>Remote Config:</b> Lets you modify your app's behavior and appearance without publishing an app update.<br>
12) <b>Dynamic Links:</b> Allows you to create smart URLs that dynamically adapt to different platforms.<br><br>

<b>Firebase</b> is used in various scenarios, from mobile app development to real-time applications and serverless architectures.`),
		logo: Assets.Firebase,
		name: 'Firebase',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description: escapeHtml(`5) <b>Docker Hub:</b> A cloud-based registry service for sharing and managing container images.<br>
6) <b>Isolation:</b> Each container runs in isolation from others, enhancing security and reducing conflicts.<br>
7) <b>Scalability:</b> Docker makes it easy to scale applications by spinning up new containers as needed.<br>
8) <b>Docker Compose:</b> A tool for defining and running multi-container Docker applications.<br>
9) <b>Docker Swarm:</b> Docker's native clustering and scheduling tool for Docker containers.<br>
10) <b>Efficient Updates:</b> Docker allows for efficient updates and maintenance as only the necessary changes need to be deployed.<br>
11) <b>Resource Efficiency:</b> Docker allows for better utilization of system resources compared to traditional virtualization.<br>
12) <b>Rapid Deployment:</b> Containers can be created and destroyed quickly, allowing for rapid application deployment and scaling.<br><br>

<b>Docker</b> is used in various scenarios, from microservices architecture to continuous integration/continuous deployment (CI/CD) pipelines and cloud migration.`),
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'dart',
		color: 'blue',
		description: escapeHtml(`<b>Dart</b> is a client-optimized programming language for fast apps on multiple platforms.<br><br>

Key features include:<br>

1) <b>Object-Oriented:</b> Dart is a class-based, object-oriented language with C-style syntax.<br>
2) <b>Strongly Typed:</b> Dart is strongly typed, but also has type inference, allowing for more concise code.<br>
3) <b>Garbage Collection:</b> Dart uses garbage collection to reclaim unused memory.<br>
4) <b>Isolates:</b> For concurrent programming, Dart uses isolates instead of threads.<br>
5) <b>JIT and AOT Compilation:</b> Dart supports both Just-In-Time (JIT) compilation for fast development cycles and Ahead-Of-Time (AOT) compilation for fast startup and execution.<br>
6) <b>Null Safety:</b> Dart has sound null safety, helping developers avoid null reference errors.<br>
7) <b>Async-Await:</b> Dart has built-in support for asynchronous programming using async and await keywords.<br>
8) <b>Mixins:</b> Dart supports mixins, allowing for more flexible code reuse than single inheritance alone.<br>
9) <b>Extension Methods:</b> Allows adding functionality to existing libraries.<br>
10) <b>Spread Operator:</b> Dart includes the spread operator for easier list and map manipulation.<br>
11) <b>Dart DevTools:</b> A suite of debugging and performance tools.<br>
12) <b>Easy to Learn:</b> Dart is designed to be familiar to developers coming from other object-oriented languages like Java or C#.<br><br>

<b>Dart</b> is used in various scenarios, particularly in Flutter development for cross-platform mobile applications.`),
		logo: Assets.Dart,
		name: 'Dart',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'bootstrap',
		color: 'purple',
		description: escapeHtml(`<b>Bootstrap</b> is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.<br><br>

Key features include:<br>

1) <b>Responsive Grid System:</b> Bootstrap includes a powerful mobile-first flexbox grid system for building layouts of all shapes and sizes.<br>
2) <b>Extensive Prebuilt Components:</b> It provides a large collection of commonly used interface components like navbars, dropdowns, alerts, and modals.<br>
3) <b>JavaScript Plugins:</b> Bootstrap comes with several JavaScript plugins that can be included as-needed.<br>
4) <b>Customization:</b> While Bootstrap provides a solid foundation, it's designed to be customized to fit your project's needs.<br>
5) <b>Sass Variables and Mixins:</b> For projects that use Sass, Bootstrap provides variables and mixins to make customization even easier.<br>
6) <b>Responsive Breakpoints:</b> Bootstrap includes a set of responsive breakpoints that make it easy to create responsive designs.<br>
7) <b>Utility Classes:</b> It provides a wide range of utility classes for quickly styling elements without having to write custom CSS.<br>
8) <b>Normalize.css:</b> Bootstrap includes Normalize.css to ensure consistent rendering across different browsers.<br>
9) <b>Icon Library:</b> While not included directly in Bootstrap 5, it recommends and provides guidance for using various icon libraries.<br>
10) <b>Extensive Documentation:</b> Bootstrap provides comprehensive documentation with examples and explanations.<br>
11) <b>Browser Support:</b> Bootstrap supports all major browsers and platforms.<br>
12) <b>Community and Ecosystem:</b> There's a large community around Bootstrap, resulting in numerous third-party themes, extensions, and tools.<br><br>

<b>Bootstrap</b> is used in various scenarios, from rapid prototyping to creating responsive web designs and maintaining consistent UI across projects.`),
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'delphi',
		color: 'red',
		description: escapeHtml(`<b>Delphi</b> is an integrated development environment (IDE) for rapid application development of desktop, mobile, web, and console software, developed by Embarcadero Technologies.<br><br>

Key features include:<br>

1) <b>Rapid Application Development (RAD):</b> Delphi's visual development environment allows for quick creation of user interfaces and application logic.<br>
2) <b>Cross-Platform Development:</b> Modern versions of Delphi support development for Windows, macOS, iOS, Android, and Linux from a single codebase.<br>
3) <b>Native Compilation:</b> Delphi compiles to native machine code, resulting in fast, efficient applications.<br>
4) <b>Extensive Component Library:</b> Delphi comes with a large library of reusable components for various purposes.<br>
5) <b>Database Support:</b> It includes robust database access components and drivers for various database systems.<br>
6) <b>Visual Component Library (VCL):</b> A comprehensive framework for Windows development.<br>
7) <b>FireMonkey (FMX):</b> A framework for cross-platform development.<br>
8) <b>COM/ActiveX Support:</b> Delphi has strong support for Microsoft's COM technology.<br>
9) <b>SOAP/XML Support:</b> For web service development and XML processing.<br>
10) <b>Inline Assembly:</b> Allows mixing of assembly language with Object Pascal for performance-critical code.<br>
11) <b>Unicode Support:</b> Full Unicode support for developing multilingual applications.<br>
12) <b>Integrated Debugging:</b> Powerful debugging tools are built into the IDE.<br><br>

<b>Delphi</b> is used in various scenarios, particularly for desktop application developme`),
		logo: Assets.Delphi,
		name: 'Delphi',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'xamarin',
		color: 'blue',
		description: escapeHtml(`<b>Xamarin</b> is a cross-platform mobile app development framework owned by Microsoft.<br><br>

Key features include:<br>

1) <b>Code Sharing:</b> Up to 90% of code can be shared across platforms.<br>
2) <b>Native Performance:</b> Xamarin apps compile to native code for each platform.<br>
3) <b>Access to Native APIs:</b> Full access to platform-specific functionality.<br>
4) <b>Xamarin.Forms:</b> For rapid UI development across platforms.<br>
5) <b>Visual Studio Integration:</b> Seamless integration with Microsoft's IDE.<br>
6) <b>Xamarin Test Cloud:</b> For automated UI testing on real devices.<br><br>

<b>Xamarin</b> allows developers to use C# and .NET to create native Android, iOS, and Windows apps. While powerful, it has a learning curve and can have larger app sizes compared to fully native development.`),
		logo: Assets.Xamarin,
		name: 'Xamarin',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'vite',
		color: 'purple',
		description: escapeHtml(`<b>Vite</b> is a build tool that aims to provide a faster and leaner development experience for modern web projects.<br><br>

Key features include:<br>

1) <b>Lightning Fast HMR:</b> Updates are reflected instantly in the browser.<br>
2) <b>Pre-bundling:</b> Uses esbuild for super-fast dependency pre-bundling.<br>
3) <b>Optimized Build:</b> Uses Rollup for optimized production builds.<br>
4) <b>Universal Plugin Interface:</b> Plugins work for both dev and build.<br>
5) <b>TypeScript Support:</b> First-class TypeScript support out of the box.<br>
6) <b>CSS Support:</b> Supports CSS pre-processors and CSS modules.<br><br>

<b>Vite</b> is framework-agnostic but provides first-class Vue.js support. It's particularly suited for modern, ES module-based projects.`),
		logo: Assets.Vite,
		name: 'Vite',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'unocss',
		color: 'gray',
		description: escapeHtml(`<b>UnoCSS</b> is an atomic CSS engine that takes a unique approach to styling.<br><br>

Key features include:<br>

1) <b>Instant:</b> No parsing, AST, or selector computation at runtime.<br>
2) <b>Fully Customizable:</b> All features can be extended or disabled.<br>
3) <b>Attributify Mode:</b> Group utilities in attributes for cleaner markup.<br>
4) <b>Pure CSS Icons:</b> Use any icon as a single class.<br>
5) <b>Variant Groups:</b> Apply utilities for multiple variants easily.<br>
6) <b>CSS Scoping:</b> Built-in CSS scoping solution.<br>
7) <b>Web Fonts:</b> Auto-detects and inlines web fonts.<br><br>

<b>UnoCSS</b> is highly flexible and can be configured to behave like other utility-first CSS frameworks. It's particularly useful for projects where performance and customization are crucial.`),
		logo: Assets.Unocss,
		name: 'UnoCSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'blue',
		description: escapeHtml(`<b>Tailwind CSS</b> is a utility-first CSS framework for rapidly building custom user interfaces.<br><br>

Key features include:<br>

1) <b>Utility-First:</b> Compose designs directly in your markup.<br>
2) <b>Responsive Design:</b> Built-in responsive modifiers.<br>
3) <b>Hover and Focus States:</b> Easy styling for interactive elements.<br>
4) <b>Customization:</b> Highly customizable through configuration.<br>
5) <b>Dark Mode:</b> Built-in dark mode support.<br>
6) <b>JIT Mode:</b> Just-in-Time mode for on-demand CSS generation.<br>
7) <b>Plugins:</b> Extensible through a plugin system.<br><br>

<b>Tailwind CSS</b> is particularly popular for its flexibility and the speed at which it allows developers to create custom designs without writing custom CSS.`),
		logo: Assets.Tailwind,
		name: 'Tailwind CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'solid',
		color: 'blue',
		description: escapeHtml(`Solid is a declarative JavaScript library for creating user interfaces. It stands out for its performance and its unique approach to reactivity.<br><br>

Key features include:<br>

1) Fine-Grained Reactivity: Updates only what needs to be updated.<br>
2) No Virtual DOM: Compiles templates to real DOM operations.<br>
3) Small Size: Tiny core library with no dependencies.<br>
4) JSX: Uses JSX for templating.<br>
5) Server-Side Rendering: Built-in SSR support.<br>
6) Suspense: For declarative data fetching.<br>
7) Stores: Simple but powerful state management.<br><br>

Solid is particularly suited for applications where performance is critical. Its approach to reactivity can lead to extremely efficient updates.`),
		logo: Assets.Solid,
		name: 'Solid.js',
		category: 'framework'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
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

## File: src/lib/data/tools.ts
```ts
// src/lib/data/tools.ts

export const aiToolsTitle = 'AI Tools';
export const codeToolsTitle = 'Code Tools';
export const dataToolsTitle = 'Data Tools';


export const aiTools = [
    {
        name: 'AI Response Parser',
        description: 'A Python script that parses a markdown file, extracts code blocks, and creates output files based on specified rules and requirements.',
        github: 'https://github.com/charlpcronje/AI-Response-Parser',
        details: `
            The AI Response Parser is a Python script designed to process markdown files containing AI responses. Key features include:
            - Logging all actions to a file and terminal
            - Modular script design
            - Adding relative file paths and version numbers to created files
            - Storing app settings in a .env file
            - Providing a list of the last 20 run arguments
            - Prompting for Input Path and Output Path if a new run is selected
            - Creating an index.md file with the output of the tree command
        `
    },
    {
        name: 'Project Data Collector',
        description: 'A Python application designed to scan project directories and collect various pieces of information such as project metadata, dependencies, environment variables, documentation, and more.',
        github: 'https://github.com/charlpcronje/Project-Scout',
        details: `
            The Project Data Collector is a modular Python application with features including:
            - Modular architecture for easy extension and maintenance
            - Collection of project information, dependencies, environment variables, documentation, and more
            - Use of Git to collect commit and contributor information
            - Support for both Flask endpoints and terminal execution for data collection
            - Comprehensive logging to both terminal and file
        `
    },
    {
        name: 'ChatGPT Chat Manager',
        description: 'An application consisting of a Flask API and a Chrome extension that work together to provide a seamless chat management experience within ChatGPT.',
        github: 'https://github.com/charlpcronje/Chrome-Extension-for-LLMs',
        details: `
            The ChatGPT Chat Manager application allows users to:
            - Organize ChatGPT conversations using folders and tags
            - Manage folders, tags, and chats through a Flask API backend
            - Interact with the API and integrate with ChatGPT's user interface via a Chrome extension
        `
    },
    {
        name: 'Synthiq - Multi-Embedded AI Smart Storage',
        description: 'An application that functions like Chat GPT but can be trained on user-specified data.',
        github: 'https://github.com/charlpcronje/brain.cronje.me',
        details: `
            Synthiq offers features such as:
            - Universal data acceptance (text, images, code snippets, etc.)
            - Generative AI capabilities
            - Fast and efficient data access
            - Secure data control
            - Compatibility with various file types including text, markdown, PDF, powerpoint, CSV, word, audio, and video
        `
    },
    {
        name: 'GPT Crawler',
        description: 'A tool to crawl a site and generate knowledge files to create custom GPTs from one or multiple URLs.',
        github: 'https://github.com/charlpcronje/Context-Crawler-GPT',
        details: `
            The GPT Crawler offers:
            - Site crawling to generate knowledge files
            - Support for creating custom GPTs from multiple URLs
            - Configuration options for crawl depth and output customization
            - Integration with OpenAI's custom GPT creation process
        `
    },
    {
        name: 'Code Context Parser and Indexer for AI',
        description: 'An advanced tool designed to analyze and index code from multiple programming languages to facilitate AI-driven code assistance.',
        github: 'https://github.com/charlpcronje/Code-Context-Parser-and-Indexer-for-AI',
        details: `
            This tool offers:
            - Support for multiple programming languages (Java, JavaScript, HTML, PHP, Python, Rust, C++)
            - Deep code analysis to extract classes, methods, properties, and other elements
            - Generation of both human-readable and AI-optimized indexes
            - Application of a unique numeric referencing system for frequent terms
            - Modular architecture for easy extension to more programming languages
        `
    },
    {
        name: 'Add Relative Path to Files',
        description: 'A Python script that scans through a project directory and adds comments with the relative file path to the first line of each file matching specified file types.',
        github: 'https://github.com/charlpcronje/Add-Relative-Path-to-Files',
        details: `
            This tool provides:
            - Dynamic commenting based on file type
            - Support for multiple programming languages
            - Custom comment placement
            - Block comment handling
            - Prevention of duplicate comments
            - Configurable project types
            - Directory exclusion
            - Flexible configuration through JSON files
            - Comprehensive logging
        `
    },
    {
        name: 'Script and CSS Extractor',
        description: 'A Python script that extracts all JavaScript and CSS links from an HTML file and outputs them in Markdown format.',
        github: 'https://github.com/charlpcronje/Script-and-CSS-Extract',
        details: `
            This tool offers:
            - Extraction of JavaScript and CSS links from HTML files
            - Categorization of links found in <head> and <body> tags
            - Output of extracted information in Markdown format
        `
    },
    {
        name: 'Combine Project Markdown Docs',
        description: 'A Python application that recursively scans a specified directory and its sub-directories for Markdown (.md) files and combines them into a single file.',
        github: 'https://github.com/charlpcronje/Combine-Markdown-Docs',
        details: `
            This tool offers:
            - Recursive file scanning for Markdown files
            - Exclusion configuration for specific files and folders
            - Addition of custom headers with relative paths to each Markdown file in the combined output
        `
    },
    {
        name: 'File System Analysis Tool for AI Embeddings',
        description: 'A Python-based tool designed to analyze file structures and metadata in a manner that is user-friendly and suitable for AI embeddings.',
        github: 'https://github.com/charlpcronje/File-System-Analysis-Tool-for-AII-Embeddings',
        details: `
            This tool provides:
            - Directory traversal and exploration
            - Extraction of file metadata (size, creation and modification dates, file hashes)
            - Content analysis (line, word, and token counting)
            - Error analysis and reporting
            - ASCII tree visualization of directory structures
        `
    },
    {
        name: 'Project Code Markdown Generator',
        description: 'A set of Python scripts designed to generate a Markdown document from a project\'s source code.',
        github: 'https://github.com/charlpcronje/Project-Code-Markdown-Generator',
        details: `
            This tool provides:
            - Modular script design
            - Depth calculation and heading assignment in Markdown
            - Customizable heading levels
            - Path normalization
            - Exclusion of specific directories and files
            - Line, character, and page count for each file
            - Index generation with file details
            - Configurable file extensions
        `
    },
    {
        name: 'Image Sharpness Categorizer',
        description: 'A Python script designed to analyze and categorize images in a folder based on their sharpness.',
        github: 'https://github.com/charlpcronje/mage-Sharpness-Categorizer',
        details: `
            The Image Sharpness Categorizer offers:
            - Automatic sharpness assessment using the Laplacian variance method
            - Dynamic categorization based on configurable percentage thresholds
            - Output of categorized images into "best", "better", and "med" folders
            - Customizable configuration through a JSON file
        `
    }
];

export const codeTools = [
    {
        name: 'Compare Files VS Code Extension',
        description: 'A Visual Studio Code extension that allows you to compare two selected files.',
        github: 'https://github.com/charlpcronje/Compare-Files-VS-Code-Extension',
        details: `
            This VS Code extension enables users to:
            - Select two files from the explorer and compare them using the "Compare Files" command
            - Access the "Compare Files" command from the context menu of the explorer
        `
    },
    {
        name: 'File Groups for VS Code',
        description: 'A Visual Studio Code extension that allows you to create, manage, and manipulate groups of files.',
        github: 'https://github.com/charlpcronje/File-Groups-for-VSCode',
        details: `
            This VS Code extension provides functionalities to:
            - Create and rename file groups
            - Add files to groups
            - Toggle the visibility of files in groups
            - Duplicate groups
            - Combine files in a group into a single markdown file
            - Export and import file groups as JSON
            - Delete file groups
        `
    },
    {
        name: 'Java Class Component Endpoint Extractor',
        description: 'A Python script designed to analyze Java source files, especially those used in Spring Framework applications, to extract detailed information about API endpoints.',
        github: 'https://github.com/charlpcronje/Java-Class-Component-Endpoint-Extractor',
        details: `
            This tool provides:
            - Automatic extraction of endpoint information from Java source files
            - Support for Spring annotations (GetMapping, PostMapping, PutMapping, DeleteMapping, RequestMapping)
            - Generation of a well-structured Markdown file summarizing all extracted endpoint information
        `
    },
    {
        name: 'Ignite Builder - App Runner',
        description: 'A Python application designed to manage and run multiple smaller Python scripts.',
        github: 'https://github.com/charlpcronje/Ignite-Builder-App-Runner',
        details: `
            The Ignite Builder - App Runner includes:
            - Management of application configurations
            - Execution of individual Python scripts
            - Handling of file operations
            - Configuration through a JSON file
        `
    }
]

export const dataTools = [
    {
        name: 'Audit Log for MariaDB & MySQL Databases',
        description: 'A stored procedure designed to automatically create database triggers for INSERT, UPDATE, and DELETE operations across all tables in a specified MariaDB database.',
        github: 'https://github.com/charlpcronje/Audit-Log-for-MariaDB-MySQL-',
        details: `
            This tool provides:
            - Automatic creation of triggers for all tables in a database
            - Logging of changes to an audit_logs table in JSON format
            - Safe rerunning without creating duplicate triggers
            - Comprehensive auditing across all database tables
        `
    },
    {
        name: 'WhatsApp Chat Analyzer',
        description: 'A Python script that processes a WhatsApp chat export file to analyze messages between two specified individuals.',
        github: 'https://github.com/charlpcronje/WhatsApp-Chat-Analyzer',
        details: `
            This tool provides:
            - Separation of messages between two specified individuals
            - Exclusion of messages containing specified phrases
            - Calculation of total word count for each individual
            - Determination of top 10 active days based on word count
            - Calculation of average response time for each individual
            - Output of results in Markdown files
        `
    },
    {
        name: 'File Change RSS Feed',
        description: 'This project generates an RSS feed that tracks changes to files in the /var/www/ directory.',
        github: 'https://github.com/charlpcronje/File-Change-RSS-Feed',
        details: `
            The File Change RSS Feed project offers:
            - Real-time updates to the RSS feed when files are created, modified, or deleted
            - Detailed file information including name, path, change event, and timestamp
            - Easy integration with various RSS readers and aggregators
            - Customizable number of items in the feed
            - Lightweight implementation using Bash and standard Unix utilities
        `
    },
    {
        name: 'DataSingleton',
        description: 'A Python package that provides a singleton class for managing data and plugins, offering a unified interface to access various functionalities.',
        github: 'https://github.com/charlpcronje/Python-Data-Singleton',
        details: `
            DataSingleton offers features such as:
            - Configuration management
            - Request handling
            - Environment variables management
            - Logging
            - Module loading
            - Database querying
            - API integration
            - Data storage
            - Bitwise operations
        `
    }
];
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

## File: src/lib/utils/colors.ts
```ts
export const NAMED_COLORS = {
	aliceblue: '#F0F8FF',
	antiquewhite: '#FAEBD7',
	aqua: '#00FFFF',
	aquamarine: '#7FFFD4',
	azure: '#F0FFFF',
	beige: '#F5F5DC',
	bisque: '#FFE4C4',
	black: '#000000',
	blanchedalmond: '#FFEBCD',
	blue: '#0000FF',
	blueviolet: '#8A2BE2',
	brown: '#A52A2A',
	burlywood: '#DEB887',
	cadetblue: '#5F9EA0',
	chartreuse: '#7FFF00',
	chocolate: '#D2691E',
	coral: '#FF7F50',
	cornflowerblue: '#6495ED',
	cornsilk: '#FFF8DC',
	crimson: '#DC143C',
	cyan: '#00FFFF',
	darkblue: '#00008B',
	darkcyan: '#008B8B',
	darkgoldenrod: '#B8860B',
	darkgray: '#A9A9A9',
	darkgreen: '#006400',
	darkgrey: '#A9A9A9',
	darkkhaki: '#BDB76B',
	darkmagenta: '#8B008B',
	darkolivegreen: '#556B2F',
	darkorange: '#FF8C00',
	darkorchid: '#9932CC',
	darkred: '#8B0000',
	darksalmon: '#E9967A',
	darkseagreen: '#8FBC8F',
	darkslateblue: '#483D8B',
	darkslategray: '#2F4F4F',
	darkslategrey: '#2F4F4F',
	darkturquoise: '#00CED1',
	darkviolet: '#9400D3',
	deeppink: '#FF1493',
	deepskyblue: '#00BFFF',
	dimgray: '#696969',
	dimgrey: '#696969',
	dodgerblue: '#1E90FF',
	firebrick: '#B22222',
	floralwhite: '#FFFAF0',
	forestgreen: '#228B22',
	fuchsia: '#FF00FF',
	gainsboro: '#DCDCDC',
	ghostwhite: '#F8F8FF',
	gold: '#FFD700',
	goldenrod: '#DAA520',
	gray: '#808080',
	green: '#008000',
	greenyellow: '#ADFF2F',
	grey: '#808080',
	honeydew: '#F0FFF0',
	hotpink: '#FF69B4',
	indianred: '#CD5C5C',
	indigo: '#4B0082',
	ivory: '#FFFFF0',
	khaki: '#F0E68C',
	lavender: '#E6E6FA',
	lavenderblush: '#FFF0F5',
	lawngreen: '#7CFC00',
	lemonchiffon: '#FFFACD',
	lightblue: '#ADD8E6',
	lightcoral: '#F08080',
	lightcyan: '#E0FFFF',
	lightgoldenrodyellow: '#FAFAD2',
	lightgray: '#D3D3D3',
	lightgreen: '#90EE90',
	lightgrey: '#D3D3D3',
	lightpink: '#FFB6C1',
	lightsalmon: '#FFA07A',
	lightseagreen: '#20B2AA',
	lightskyblue: '#87CEFA',
	lightslategray: '#778899',
	lightslategrey: '#778899',
	lightsteelblue: '#B0C4DE',
	lightyellow: '#FFFFE0',
	lime: '#00FF00',
	limegreen: '#32CD32',
	linen: '#FAF0E6',
	magenta: '#FF00FF',
	maroon: '#800000',
	mediumaquamarine: '#66CDAA',
	mediumblue: '#0000CD',
	mediumorchid: '#BA55D3',
	mediumpurple: '#9370DB',
	mediumseagreen: '#3CB371',
	mediumslateblue: '#7B68EE',
	mediumspringgreen: '#00FA9A',
	mediumturquoise: '#48D1CC',
	mediumvioletred: '#C71585',
	midnightblue: '#191970',
	mintcream: '#F5FFFA',
	mistyrose: '#FFE4E1',
	moccasin: '#FFE4B5',
	navajowhite: '#FFDEAD',
	navy: '#000080',
	oldlace: '#FDF5E6',
	olive: '#808000',
	olivedrab: '#6B8E23',
	orange: '#FFA500',
	orangered: '#FF4500',
	orchid: '#DA70D6',
	palegoldenrod: '#EEE8AA',
	palegreen: '#98FB98',
	paleturquoise: '#AFEEEE',
	palevioletred: '#DB7093',
	papayawhip: '#FFEFD5',
	peachpuff: '#FFDAB9',
	peru: '#CD853F',
	pink: '#FFC0CB',
	plum: '#DDA0DD',
	powderblue: '#B0E0E6',
	purple: '#800080',
	red: '#FF0000',
	rosybrown: '#BC8F8F',
	royalblue: '#4169E1',
	saddlebrown: '#8B4513',
	salmon: '#FA8072',
	sandybrown: '#F4A460',
	seagreen: '#2E8B57',
	seashell: '#FFF5EE',
	sienna: '#A0522D',
	silver: '#C0C0C0',
	skyblue: '#87CEEB',
	slateblue: '#6A5ACD',
	slategray: '#708090',
	slategrey: '#708090',
	snow: '#FFFAFA',
	springgreen: '#00FF7F',
	steelblue: '#4682B4',
	tan: '#D2B48C',
	teal: '#008080',
	thistle: '#D8BFD8',
	tomato: '#FF6347',
	turquoise: '#40E0D0',
	violet: '#EE82EE',
	wheat: '#F5DEB3',
	white: '#FFFFFF',
	whitesmoke: '#F5F5F5',
	yellow: '#FFFF00',
	yellowgreen: '#9ACD32'
} as const;

export type NamedColor = keyof typeof NAMED_COLORS;

export type HexColor = `#${string}`;

export type Color = NamedColor | HexColor;

export const convertNamedToHexColor = (name: NamedColor): HexColor => {
	const color = NAMED_COLORS[name];

	if (!color) {
		return NAMED_COLORS.white;
	}

	return color;
};

```

## File: src/lib/utils/helpers.ts
```ts
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import type { Item, Skill } from '$lib/types';

dayjs.extend(duration);

export const countMonths = (from: Date, to: Date = new Date()): number => {
	let firstYear = 0;
	let wholeYears = 0;
	let newYear = 0;

	if (to.getFullYear() !== from.getFullYear()) {
		newYear = to.getMonth();
		wholeYears = (to.getFullYear() - from.getFullYear() - 1) * 12;
		firstYear = 12 - from.getMonth();
	} else {
		firstYear = to.getMonth() - from.getMonth();
	}

	return firstYear + wholeYears + newYear + 1;
};

export const getMonthName = (index: number): string => {
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	return monthNames[index];
};

export const useImage = (url: string, base: string): string => `${base}${url}`;

export const useTitle = (title: string, suffix: string) => `${title} | ${suffix}`;

export function getTimeDiff(date1: Date, date2 = new Date(Date.now() + 1000 * 60 * 60 * 24)) {
	const d1 = dayjs(date1);
	const d2 = dayjs(date2);

	const duration = dayjs.duration(d2.diff(d1));

	let n = 0;
	let u = 'day';

	if (duration.as('days') <= 7) {
		u = 'day';
		n = duration.as('days');
	} else if (duration.as('months') <= 1) {
		u = 'week';
		n = duration.as('weeks');
	} else if (duration.as('years') <= 1) {
		u = 'month';
		n = duration.as('months');
	} else {
		u = 'year';
		n = duration.as('years');
	}

	n = Math.trunc(n);

	return `${Math.trunc(n)} ${u}${n > 1 ? 's' : ''}`;
}

export type ItemOrSkill = Item | Skill;

export function filterItemsByQuery<T extends ItemOrSkill>(
	items: Array<T>,
	query: string
): Array<T> {
	const ignoredProperties = ['logo', 'links', 'color', 'screenshots'];
	query = query.toLowerCase();

	return items.filter((item) => doesQueryExistInItemOrAttributes(item, query, ignoredProperties));
}

function doesQueryExistInItemOrAttributes(
	item: any,
	query: string,
	ignoredProperties: string[] = []
): boolean {
	if (Array.isArray(item)) {
		return item.some((subItem) => doesQueryExistInItemOrAttributes(subItem, query));
	} else if (typeof item === 'object' && item !== null) {
		if (item instanceof Date) {
			const dateFormats = [
				item.toString().toLowerCase(), // Full date string
				item.toLocaleDateString('default', { month: 'long', year: 'numeric' }).toLowerCase(), // "January 2023"
				item
					.toLocaleDateString('default', { day: 'numeric', month: 'long', year: 'numeric' })
					.toLowerCase(), // "15 January 2023"
				item.toLocaleDateString('en-US').toLowerCase(), // "1/15/2023"
				item
					.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
					.toLowerCase() // "Jan 15, 2023"
			];
			return dateFormats.some((dateStr) => dateStr.includes(query));
		} else {
			return Object.keys(item).some(
				(key) =>
					!ignoredProperties.includes(key) && doesQueryExistInItemOrAttributes(item[key], query)
			);
		}
	} else {
		return item.toString().toLowerCase().includes(query);
	}
}

const DAY = 24 * 60 * 60 * 1000;
const WEEK = 7 * 24 * 60 * 60 * 1000;
const MONTH = 30 * 24 * 60 * 60 * 1000;
const YEAR = 365 * 24 * 60 * 60 * 1000;

export function computeExactDuration(from: Date, to: Date = new Date()): string {
	const fromMs = from.getTime();
	const toMs = to.getTime();

	const display: Array<string> = [];

	let remaining = toMs - fromMs;

	const years = remaining / YEAR;

	if (years >= 1) {
		remaining = remaining % YEAR;
		display.push(`${Math.trunc(years)} year${years >= 2 ? 's' : ''}`);
	}

	const months = remaining / MONTH;
	if (months >= 1) {
		remaining = remaining % MONTH;
		display.push(`${Math.trunc(months)} month${months >= 2 ? 's' : ''}`);
	}

	const weeks = remaining / WEEK;
	if (weeks >= 1) {
		remaining = remaining % WEEK;
		display.push(`${Math.trunc(weeks)} week${weeks >= 2 ? 's' : ''}`);
	}

	const days = remaining / DAY;
	if (days >= 1) {
		remaining = remaining % DAY;
		display.push(`${Math.trunc(days)} day${days >= 2 ? 's' : ''}`);
	}

	if (display.length === 0) {
		return '1 day';
	}

	return display
		.map((it, index) => {
			if (display.length === 1 || index === display.length - 1) return it;

			if (index === display.length - 2) {
				return `${it} and`;
			}

			return `${it},`;
		})
		.join(' ');
}

```

## File: src/lib/utils/index.ts
```ts
import { Platform } from '$lib/types';

export enum EmploymentType {
	FullTime = 'Full-time',
	PartTime = 'Part-time',
	SelfEmployed = 'Self-employed',
	Freelance = 'Freelance',
	Contract = 'Contract',
	Internship = 'Internship'
}

export enum Icons {
	Code = 'M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z',
	Search = 'M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z',
	Email = 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z',
	Skills = 'M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z',
	GitHub = 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z',
	StackOverflow = 'm17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z',
	LinkedIn = 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z',
	Twitter = 'M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z',
	Home = 'M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z',
	Projects = 'M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z',
	Job = 'M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z',
	Academic = 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z',
	Resume = 'M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z',
	RightArrow = 'M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z',
	LeftArrow = 'M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z',
	Youtube = 'M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z',
	Link = 'M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z',
	Sun = 'M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z',
	Moon = 'M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z',
	Facebook = 'M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z'
}

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
		default:
			return Icons.Code
	}
};

export * from './helpers';

```

## File: src/lib/utils/reTypeParser.ts
```ts
// src/lib/utils/reTypeParser.ts
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

## File: src/lib/utils/customMarkdownParser.ts
```ts
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
```

## File: src/routes/+layout.server.ts
```ts
export const prerender = true;

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

	onMount(() => onHydrated());
</script>

<div class="body contents theme-dark flex flex-col min-h-screen">
	<NavMenu />
	<div class="content container flex-grow">
		<slot />
	</div>
	<Footer />
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
	import { getPlatfromIcon } from '$lib/utils';

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
	class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
>
	<div class="md:flex-1 gap-10px">
		<MainTitle classes="md:text-left ">{name} {lastName}</MainTitle>
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
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'20px'} />
				</a>
			{/each}
		</div>
	</div>
	<Carrousel items={skills ?? skillsItems} />
</div>

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
		<div class="projects-list mt-5">
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

<div class="pb-10 overflow-x-hidden col flex-1">
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
		<div class="col mt-5 gap-7">
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
		<div class="flex flex-col items-center overflow-x-hidden">
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

## File: src/routes/tools/ai/+page.svelte
```svelte
<!-- src/routes/ai/tools/+page.svelte -->
<script lang="ts">
	import { aiToolsTitle, aiTools } from '$lib/data/tools';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
</script>

<CommonPage title={aiToolsTitle}>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each aiTools as tool}
			<Card
				classes={['cursor-pointer']}
				href={`/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
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

## File: src/routes/tools/data/+page.svelte
```svelte
<!-- src/routes/ai/tools/+page.svelte -->
<script lang="ts">
	import { dataToolsTitle, dataTools } from '$lib/data/tools';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
</script>

<CommonPage title={dataToolsTitle}>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each dataTools as tool}
			<Card
				classes={['cursor-pointer']}
				href={`/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
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
</script>

<CommonPage title={codeToolsTitle}>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each codeTools as tool}
			<Card
				classes={['cursor-pointer']}
				href={`/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
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

	export const data = {
		name: 'John Doe',
		email: 'john.doe@example.com',
		message: ''
	};

	let cvContent = '';

	onMount(async () => {
		const response = await fetch(`${base}/cv-data.md`);
		cvContent = await response.text();
	});

	$: parsedCV = DOMPurify.sanitize(parseReTypeMarkdown(cvContent));
</script>

<MainTitle>{data.name}</MainTitle>

<div class="cv-content">
	{@html parsedCV}
</div>

<style lang="scss">
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

## File: src/routes/contact/+page.svelte
```svelte
<script lang="ts">
	import CommonPage from '$lib/components/CommonPage.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	const title = 'Contact Us';

	let fullName = '';
	let email = '';
	let message = '';
	let isRobot = true;
	let formSubmitted = false;
	let formError = false;

	const handleSubmit = async () => {
		// TODO: Implement actual email sending logic
		const success = Math.random() > 0.5; // Simulating success/failure

		if (success) {
			formSubmitted = true;
			fullName = '';
			email = '';
			message = '';
			isRobot = true;
		} else {
			formError = true;
		}
	};
</script>

<CommonPage {title}>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<div>
			<iframe
				title="Google Map"
				width="100%"
				height="450"
				style="border:0"
				loading="lazy"
				allowfullscreen
				src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=163+Garsfontein+Rd,+Pretoria,+Gauteng,+South+Africa&zoom=15&maptype=roadmap&style=element:geometry%7Ccolor:0x212121&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d"
			></iframe>
		</div>
		<div class="space-y-8">
			<Card>
				<h3 class="text-lg font-semibold mb-2">John Doe</h3>
				<p>Senior Developer</p>
				<p>john.doe@webally.co.za</p>
			</Card>
			<Card>
				<h3 class="text-lg font-semibold mb-2">Jane Smith</h3>
				<p>Project Manager</p>
				<p>jane.smith@webally.co.za</p>
			</Card>
		</div>
	</div>
	<div class="mt-12">
		<Card>
			<form on:submit|preventDefault={handleSubmit} class="space-y-4">
				<div>
					<label for="fullName" class="block mb-1">Full Name</label>
					<input
						id="fullName"
						type="text"
						bind:value={fullName}
						required
						class="w-full p-2 border rounded"
					/>
				</div>
				<div>
					<label for="email" class="block mb-1">Email Address</label>
					<input
						id="email"
						type="email"
						bind:value={email}
						required
						class="w-full p-2 border rounded"
					/>
				</div>
				<div>
					<label for="message" class="block mb-1">Message</label>
					<textarea
						id="message"
						bind:value={message}
						required
						class="w-full p-2 border rounded h-32"
					></textarea>
				</div>
				<div>
					<label class="flex items-center">
						<input type="checkbox" bind:checked={isRobot} required />
						<span class="ml-2">I'm not a robot</span>
					</label>
				</div>
				<button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded" disabled={isRobot}
					>Send Message</button
				>
			</form>
			{#if formSubmitted}
				<p class="mt-4 text-green-500">Message sent successfully!</p>
			{/if}
			{#if formError}
				<p class="mt-4 text-red-500">
					Failed to send message. Please try again or contact us via phone or WhatsApp.
				</p>
			{/if}
		</Card>
	</div>
</CommonPage>

```

## File: scripts/cvFetcher.js
```js

```


