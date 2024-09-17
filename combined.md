# File Analysis Report

This document contains an analysis of the project files.

| No. | File                                                      | Lines | Words | AI Tokens |
| --- | --------------------------------------------------------- | ----- | ----- | --------- |
| 1   | ./package.json                                            | 52    | 125   | 422       |
| 2   | ./svelte.config.js                                        | 33    | 79    | 161       |
| 3   | ./tsconfig.json                                           | 20    | 62    | 117       |
| 4   | ./uno.config.ts                                           | 44    | 90    | 191       |
| 5   | ./vite.config.ts                                          | 10    | 29    | 48        |
| 6   | ./combine.json                                            | 33    | 39    | 130       |
| 7   | ./.env                                                    | 3     | 19    | 22        |
| 8   | ./.vscode/settings.json                                   | 77    | 85    | 320       |
| 9   | ./src/app.d.ts                                            | 15    | 49    | 63        |
| 10  | ./src/app.html                                            | 13    | 25    | 84        |
| 11  | ./src/lib/index.scss                                      | 368   | 599   | 1609      |
| 12  | ./src/lib/types.ts                                        | 83    | 219   | 381       |
| 13  | ./src/lib/components/CommonPage.svelte                    | 15    | 37    | 83        |
| 14  | ./src/lib/components/Markdown.svelte                      | 32    | 72    | 145       |
| 15  | ./src/lib/components/SearchPage.svelte                    | 59    | 139   | 305       |
| 16  | ./src/lib/components/TabTitle.svelte                      | 11    | 23    | 60        |
| 17  | ./src/lib/components/Banner/Banner.svelte                 | 28    | 70    | 183       |
| 18  | ./src/lib/components/Card/Card.svelte                     | 114   | 324   | 724       |
| 19  | ./src/lib/components/Card/CardDivider.svelte              | 2     | 5     | 17        |
| 20  | ./src/lib/components/Card/CardLink.svelte                 | 40    | 78    | 191       |
| 21  | ./src/lib/components/Card/CardLogo.svelte                 | 10    | 35    | 74        |
| 22  | ./src/lib/components/Card/CardTitle.svelte                | 6     | 10    | 37        |
| 23  | ./src/lib/components/Carrousel/Carrousel.svelte           | 102   | 258   | 528       |
| 24  | ./src/lib/components/Chip/Chip.svelte                     | 35    | 88    | 224       |
| 25  | ./src/lib/components/Chip/ChipIcon.svelte                 | 61    | 145   | 312       |
| 26  | ./src/lib/components/ExperienceCard/ExperienceCard.svelte | 84    | 240   | 604       |
| 27  | ./src/lib/components/Icon/Icon.svelte                     | 23    | 45    | 101       |
| 28  | ./src/lib/components/Icon/Icons.ts                        | 10    | 47    | 79        |
| 29  | ./src/lib/components/Icon/UIcon.svelte                    | 8     | 20    | 54        |
| 30  | ./src/lib/components/Input/Input.svelte                   | 28    | 56    | 132       |
| 31  | ./src/lib/components/MainTitle/MainTitle.svelte           | 11    | 29    | 96        |
| 32  | ./src/lib/components/NavMenu/NavMenu.svelte               | 168   | 427   | 1052      |
| 33  | ./src/lib/components/ProjectCard/ProjectCard.svelte       | 74    | 233   | 601       |
| 34  | ./src/lib/components/Screenshot/Screenshot.svelte         | 56    | 136   | 344       |
| 35  | ./src/lib/components/Footer/Footer.svelte                 | 69    | 177   | 411       |
| 36  | ./src/lib/data/app.ts                                     | 2     | 8     | 10        |
| 37  | ./src/lib/data/assets.ts                                  | 122   | 282   | 945       |
| 38  | ./src/lib/data/education.ts                               | 32    | 104   | 209       |
| 39  | ./src/lib/data/experience.ts                              | 149   | 1048  | 1742      |
| 40  | ./src/lib/data/home.ts                                    | 35    | 186   | 353       |
| 41  | ./src/lib/data/navbar.ts                                  | 17    | 118   | 242       |
| 42  | ./src/lib/data/projects.ts                                | 266   | 1439  | 2582      |
| 43  | ./src/lib/data/resume.ts                                  | 4     | 10    | 13        |
| 44  | ./src/lib/data/search.ts                                  | 2     | 5     | 7         |
| 45  | ./src/lib/data/skills.ts                                  | 468   | 2225  | 3689      |
| 46  | ./src/lib/data/documentation-sites.ts                     | 146   | 397   | 695       |
| 47  | ./src/lib/data/tools.ts                                   | 271   | 1574  | 1980      |
| 48  | ./src/lib/md/svelte.md                                    | 41    | 298   | 391       |
| 49  | ./src/lib/stores/theme.ts                                 | 48    | 146   | 279       |
| 50  | ./src/lib/utils/colors.ts                                 | 166   | 343   | 1101      |
| 51  | ./src/lib/utils/helpers.ts                                | 172   | 603   | 1153      |
| 52  | ./src/lib/utils/index.ts                                  | 55    | 963   | 1039      |
| 53  | ./src/routes/+layout.server.ts                            | 2     | 5     | 6         |
| 54  | ./src/routes/+layout.svelte                               | 45    | 96    | 208       |
| 55  | ./src/routes/+page.svelte                                 | 46    | 142   | 458       |
| 56  | ./src/routes/education/+page.svelte                       | 92    | 246   | 612       |
| 57  | ./src/routes/experience/+page.svelte                      | 57    | 169   | 388       |
| 58  | ./src/routes/experience/[slug]/+page.svelte               | 93    | 246   | 637       |
| 59  | ./src/routes/experience/[slug]/+page.ts                   | 12    | 37    | 61        |
| 60  | ./src/routes/projects/+page.svelte                        | 109   | 285   | 610       |
| 61  | ./src/routes/projects/[slug]/+page.svelte                 | 140   | 353   | 899       |
| 62  | ./src/routes/projects/[slug]/+page.ts                     | 12    | 37    | 61        |
| 63  | ./src/routes/resume/+page.svelte                          | 31    | 58    | 136       |
| 64  | ./src/routes/search/+page.svelte                          | 97    | 259   | 597       |
| 65  | ./src/routes/skills/+page.svelte                          | 52    | 143   | 401       |
| 66  | ./src/routes/skills/[slug]/+page.svelte                   | 115   | 310   | 733       |
| 67  | ./src/routes/skills/[slug]/+page.ts                       | 12    | 37    | 61        |
| 68  | ./src/routes/documentation/+page.svelte                   | 24    | 65    | 171       |
| 69  | ./src/routes/tools/+page.svelte                           | 35    | 81    | 226       |
|     | Total                                                     | 4767  | 16432 | 32600     |


## Total Counts Across All Files. Tokenizer Used: NLTK's Punkt Tokenizer
- Total Lines: 4767
- Total Words: 16432
- Total AI Tokens: 32600

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
        "generate_hashes.php"
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
		"APBCO",
		"Audiphy",
		"Azur",
		"Bjarne",
		"brinant",
		"Brinant",
		"codebases",
		"developping",
		"dompurify",
		"Dwida",
		"Dwidder",
		"exxaro",
		"Exxaro",
		"fastapi",
		"fastify",
		"Fastify",
		"FNB",
		"Gamification",
		"gamified",
		"garous",
		"hoverable",
		"iconify",
		"imvula",
		"Imvula",
		"indesign",
		"laravel",
		"Laravel",
		"LUM",
		"microframework",
		"MMORPGs",
		"OLTP",
		"Otwell",
		"pageworks",
		"photoshop",
		"Photoshop",
		"platformers",
		"PNA",
		"prismjs",
		"rabbitmq",
		"RDBMS",
		"riadh",
		"ruvy",
		"Ruvy",
		"Sanlam",
		"Scrapy",
		"Stroustrup",
		"sybase",
		"symfony",
		"Symfony",
		"Synthiq",
		"Thierclieux",
		"todos",
		"transcompiles",
		"tribake",
		"Tribake",
		"unocss",
		"Unocss",
		"viewmodel",
		"Widenius",
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
		%sveltekit.head%
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">%sveltekit.body%</div>
	</body>
</html>

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

## File: src/lib/types.ts
```ts
import type { Color } from './utils/colors';

export enum Platform {
	GitHub = 'github',
	StackOverflow = 'stackoverflow',
	Twitter = 'twitter',
	Linkedin = 'linkedin',
	Email = 'email',
	Facebook = 'facebook',
	Youtube = 'youtube'
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
	type: string;
	skills: Array<Skill<S>>;
	company: string;
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
	<title>{useTitle(title, titleSuffix)}</title>
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
<!-- src/lib/components/NavMenu/NavMenu.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { items } from '@data/navbar';
	import * as HOME from '@data/home';

	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';

	$: currentRoute = $page.url.pathname;
	$: headerItems = items.filter((item) => item.position === 'header');
	$: firstRowItems = headerItems.slice(0, 4);
	$: secondRowItems = headerItems.slice(4);

	let expanded = false;

	const toggleExpanded = (v?: boolean) => {
		if (typeof v === 'undefined') {
			expanded = !expanded;
		} else {
			expanded = v;
		}
	};
</script>

<div class="nav-menu">
	<nav class="container flex flex-col items-center text-sm">
		<div class="w-full flex flex-row items-center">
			<a
				href={`${base}/`}
				class="nav-menu-left decoration-none w-auto md:w-150px lg:w-auto row flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]"
			>
				<UIcon icon="i-carbon-code" classes="text-2em" />
				<span
					class="ml-2 text-md font-bold hidden md:inline overflow-hidden whitespace-nowrap text-ellipsis"
					>{HOME.name} {HOME.lastName}
				</span>
			</a>
			<div
				class="flex-1 block overflow-hidden md:hidden whitespace-nowrap text-ellipsis text-center"
			>
				{HOME.name}
				{HOME.lastName}
			</div>
			<div class="flex-row flex-1 self-center h-full justify-center hidden md:flex">
				{#each firstRowItems as item (item.title)}
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
		</div>
		{#if secondRowItems.length > 0}
			<div class="w-full flex-row self-center h-full justify-center hidden md:flex mt-2">
				{#each secondRowItems as item (item.title)}
					<a href={`${base}${item.to}`} class="nav-menu-item !text-[var(--secondary-text)]">
						<UIcon icon={item.icon} classes="text-1.3em" />
						<span class="nav-menu-item-label">{item.title}</span>
					</a>
				{/each}
			</div>
		{/if}
	</nav>
	<div class={`nav-menu-mobile ${expanded ? 'nav-menu-mobile-open' : ''} md:hidden`}>
		<div class="flex-col flex-1 self-center h-full justify-center m-t-7">
			{#each headerItems as item}
				<a
					href={`${base}${item.to}`}
					class="nav-menu-item !text-[var(--secondary-text)] gap-5"
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
				class="text-inherit decoration-none px-6 py-3 gap-2 row hover:bg-[color:var(--main-hover)]"
				on:click={() => toggleExpanded(false)}
			>
				<UIcon icon="i-carbon-search" />
				<span>Search</span>
			</a>
		</div>
	</div>
</div>

<style lang="scss">
	.nav-menu {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: sticky;
		top: 0px;
		z-index: 10;
		padding: 10px;
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

## File: src/lib/components/Footer/Footer.svelte
```svelte
<!-- src/lib/components/Footer/Footer.svelte -->
<script lang="ts">
	import { base } from '$app/paths';
	import { items, footerItems } from '@data/navbar';
	import UIcon from '../Icon/UIcon.svelte';
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
	<div class="container mx-auto px-4">
		<nav class="py-2">
			<ul class="flex flex-wrap justify-center">
				{#each footerNavItems as item}
					<li class="mx-2 my-1">
						<a href={`${base}${item.to}`} class="flex items-center hover:text-gray-300">
							<UIcon icon={item.icon} classes="mr-2" />
							<span>{item.title}</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
	{#if showLegal}
		<div
			class="bg-gray-800 py-4 transition-all duration-300 ease-in-out"
			class:opacity-0={!showLegal}
			class:opacity-100={showLegal}
		>
			<div class="container mx-auto px-4">
				<p class="text-center text-sm mb-2">
					&copy; {currentYear} Charl Cronje. All rights reserved.
				</p>
				<ul class="flex justify-center">
					{#each footerItems as item}
						<li class="mx-2">
							<a href={`${base}${item.to}`} class="text-sm hover:text-gray-300">
								{item.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{/if}
</footer>

<style>
	footer {
		z-index: 10;
	}
</style>

```

## File: src/lib/data/app.ts
```ts
export const titleSuffix = 'Slick template with Svelte';

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
	AWS: gh('aws.svg'),
	Bootstrap: gh('bootstrap.svg'),
	C: gh('c.svg'),
	Cpp: gh('cpp.svg'),
	Celery: gh('celery.svg'),
	Django: gh('django.svg'),
	FastApi: gh('fastapi.svg'),
	Flask: gh('flask.svg'),
	Go: gh('go.svg'),
	Kafka: gh('kafka.svg'),
	Neo4j: gh('neo4j.svg'),
	Nginx: gh('nginx.svg'),
	Numpy: gh('numpy.svg'),
	Pandas: gh('pandas.svg'),
	RabbitMQ: gh('rabbitmq.svg'),
	Rust: gh('rust.svg'),
	Scrapy: gh('scrapy.png'),
	Selenium: gh('selenium.svg'),
	Docker: gh('docker.svg'),
	Kubernetes: gh('kubernetes.svg'),
	Csharp: gh('csharp.svg'),
	Xamarin: gh('xamarin.svg'),
	TypeScript: gh('ts.png'),
	VueJs: gh('vue.png'),
	ReactJs: gh('react.svg'),
	Dart: gh('dart.png'),
	Kotlin: gh('kotlin.png'),
	Python: gh('python.png'),
	NodeJs: gh('node.png'),
	Deno: gh('deno.png'),
	Svelte: gh('svelte.png'),
	ExpressJs: gh('express.png'),
	JavaScript: gh('js.png'),
	Fastify: gh('fastify.svg'),
	NestJs: gh('nest.svg'),
	Quasar: gh('quasar.svg'),
	SolidJs: gh('solid.svg'),
	Electron: gh('electron.png'),
	Flutter: gh('flutter.svg'),
	Java: gh('java.png'),
	AdonisJs: gh('adonis.png'),
	Android: gh('android.png'),
	Angular: gh('angular.png'),
	PostgreSQL: gh('postgres.png'),
	Firebase: gh('firebase.png'),
	Sass: gh('sass.png'),
	MongoDB: gh('mongodb.svg'),
	Redis: gh('redis.svg'),
	Tailwind: gh('tailwind.svg'),
	HTML: gh('html.svg'),
	Premiere: gh('premiere.svg'),
	Photoshop: gh('photoshop.svg'),
	CSS: gh('css.svg'),
	AfterEffects: gh('after-effects.svg'),
	Illustrator: gh('illustrator.svg'),
	Nuxt: gh('nuxt.png'),
	Vite: gh('vite.png'),
	Vitest: gh('vitest.svg'),
	Jest: gh('jest.png'),
	Unocss: gh('unocss.svg'),
	Ruvy: gh('ruvy.svg'),
	Postcss: gh('postcss.svg'),
	PHP: gh('php.svg'),
	Laravel: gh('laravel.svg'),
	Symfony: gh('symfony.svg'),
	MSSQL: gh('mssql.svg'),
	Oracle: gh('oracle.svg'),
	Azure: gh('azure.svg'),
	GCP: gh('gcp.svg'),
	Git: gh('git.svg'),
	Jenkins: gh('jenkins.svg'),
	Travis: gh('travis.svg'),
	CircleCI: gh('circleci.svg'),
	IOS: gh('ios.svg'),
	ReactNative: gh('react-native.svg'),
	Unity: gh('unity.svg'),
	Unreal: gh('unreal.svg'),
	AI: gh('ai.svg'),
	MachineLearning: gh('machine-learning.svg'),
	DeepLearning: gh('deep-learning.svg'),
	InDesign: gh('indesign.svg'),
	MySQL: gh('mysql.svg'),
	Unknown: gh('unknown.svg'),

	ACSA: gh('unknown.svg'),
	Tribake: gh('unknown.svg'),
	AngloAmerican: gh('unknown.svg'),
	APBCO: gh('unknown.svg'),
	BrinantSecurity: gh('unknown.svg'),
	CavalierAbattoirs: gh('unknown.svg'),
	CityLodge: gh('unknown.svg'),
	Exxaro: gh('unknown.svg'),
	FNB: gh('unknown.svg'),
	TheOrientHotel: gh('unknown.svg'),
	LegacyUnderwriting: gh('unknown.svg'),
	ImvulaICD: gh('unknown.svg'),
	ImperialLogistics: gh('unknown.svg'),
	TheCarShop: gh('unknown.svg'),
	PrincipalSoftware: gh('unknown.svg'),
	PNA: gh('unknown.svg')
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
import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'webally-self-employed',
		company: 'webAlly',
		description: 'As the founder of webAlly, I have been providing a wide range of services including web development, custom software development, mobile app development, and graphic design. I have worked on numerous projects for various clients, delivering high-quality solutions tailored to their specific needs.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Johannesburg, South Africa',
		period: { from: new Date(2006, 0, 1) },
		skills: getSkills('js', 'ts', 'php', 'python', 'java', 'kotlin', 'react', 'vue', 'angular', 'nodejs', 'laravel', 'symfony', 'django', 'flask', 'mongodb', 'mysql', 'postgresql', 'docker', 'kubernetes', 'aws', 'azure', 'gcp', 'android', 'ios', 'react-native', 'flutter', 'ai', 'machine-learning'),
		name: 'Senior Full-Stack Developer',
		color: 'blue',
		links: [
			{ to: 'https://webally.co.za', label: 'Company Website' }
		],
		logo: Assets.Unknown, // Replace with webAlly logo when available
		shortDescription: 'Providing comprehensive software development services as a self-employed developer.'
	},
	{
		slug: 'vane-systems',
		company: 'Vane Systems',
		description: 'At Vane Systems, I was responsible for maintaining and developing the C# RestFull API SOAP Service and PHP GraphQL API. I worked on various projects including bus booking systems, event booking systems, and point of sale systems. I also focused on security implementations for physical access control systems and document encryption.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Johannesburg, South Africa',
		period: { from: new Date(2018, 0, 1), to: new Date(2019, 1, 1) },
		skills: getSkills('csharp', 'php', 'graphql', 'mysql', 'postgresql', 'docker', 'kubernetes'),
		name: 'Senior Full-Stack Developer',
		color: 'green',
		links: [],
		logo: Assets.Unknown, // Replace with Vane Systems logo when available
		shortDescription: 'Developed and maintained API services and various booking systems.'
	},
	{
		slug: 'legacy-underwriting-managers',
		company: 'Legacy Underwriting Managers',
		description: 'At Legacy Insurance Underwriting Managers (LUM), I worked as a senior PHP developer on a web-based system for insurance. My main responsibility was to maintain LUM\'s underwriting software, which is used by insurance brokers who sell insurance for multiple underwriters. The system integrates with Sanlam, Budget, APBCO, and others, focusing on accurate financial calculations and maintaining a proper audit trail for all transactions.',
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
		logo: Assets.Unknown, // Replace with LUM logo when available
		shortDescription: 'Developed and maintained web-based insurance underwriting systems.'
	},
	{
		slug: 'principal-software',
		company: 'Principal Software (D6 Group)',
		description: 'At Principal Software (now known as d6 Group), I played a key role in developing and improving the school administration system. I led the initiative to combine multiple codebases into a single, more manageable system, significantly improving the deployment process. During my tenure, the company grew from 3 people to more than 40, with the system being used by over 2000 schools and almost a million users.',
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
		logo: Assets.Unknown, // Replace with D6 Group logo when available
		shortDescription: 'Led development of school administration systems used by thousands of schools.'
	},
	{
		slug: 'pageworks',
		company: 'PageWorks',
		description: 'At PageWorks, an advertising agency, I served as the Head Web Developer. This was my first role specifically focused on web development. During my time here, I worked on various web applications including e-commerce sites, content management systems, and resource management tools.',
		contract: ContractType.FullTime,
		type: 'Web Development',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2005, 11, 1), to: new Date(2006, 1, 1) },
		skills: getSkills('php', 'asp', 'mysql', 'mssql', 'js', 'css', 'html'),
		name: 'Head Web Developer',
		color: 'orange',
		links: [],
		logo: Assets.Unknown, // Replace with PageWorks logo when available
		shortDescription: 'Led web development projects in an advertising agency setting.'
	},
	{
		slug: 'pc-palace',
		company: 'PC Palace',
		description: 'At PC Palace, I started as an IT Technician but quickly transitioned into web development. I created my first website here, a system for the technical department using a LAMP stack. This project led to me taking charge of the company website and eventually developing websites for the company\'s clients.',
		contract: ContractType.FullTime,
		type: 'IT Support / Web Development',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2004, 7, 1), to: new Date(2005, 11, 1) },
		skills: getSkills('php', 'mysql', 'js', 'css', 'html'),
		name: 'IT Technician / Web Developer',
		color: 'cyan',
		links: [],
		logo: Assets.Unknown, // Replace with PC Palace logo when available
		shortDescription: 'Transitioned from IT support to web development, creating internal systems and client websites.'
	},
	{
		slug: 'nexus-online',
		company: 'Nexus Online',
		description: 'At Nexus Online, an internet cafe and web hosting company, I assisted with various tasks including web design, networking, customer service, and support while studying.',
		contract: ContractType.PartTime,
		type: 'Web Design / IT Support',
		location: 'Pretoria, South Africa',
		period: { from: new Date(2004, 1, 1), to: new Date(2004, 7, 1) },
		skills: getSkills('html', 'css', 'js'),
		name: 'Web Designer / IT Support',
		color: 'teal',
		links: [],
		logo: Assets.Unknown, // Replace with Nexus Online logo when available
		shortDescription: 'Provided web design and IT support services for an internet cafe and web hosting company.'
	},
	{
		slug: 'ram-london',
		company: 'RAM',
		description: 'During my time in London, I worked as a technician at RAM, providing technical support, computer repair services, software installations, and computer building.',
		contract: ContractType.FullTime,
		type: 'IT Support',
		location: 'London, England',
		period: { from: new Date(2003, 7, 1), to: new Date(2004, 11, 1) },
		skills: getSkills('hardware', 'software-installation'),
		name: 'Technician',
		color: 'indigo',
		links: [],
		logo: Assets.Unknown, // Replace with RAM logo when available
		shortDescription: 'Provided comprehensive IT support and computer services in London.'
	},
	{
		slug: 'cnn-london',
		company: 'CNN',
		description: 'At CNN in London, I was responsible for tracking personnel and equipment, managing sign-in logs, escorting visitors to interview rooms, and ensuring security protocols were followed.',
		contract: ContractType.FullTime,
		type: 'Equipment and Personnel Management',
		location: 'London, England',
		period: { from: new Date(2002, 7, 1), to: new Date(2003, 11, 1) },
		skills: getSkills('equipment-management', 'security-protocols'),
		name: 'Equipment and Personnel Manager',
		color: 'red',
		links: [],
		logo: Assets.Unknown, // Replace with CNN logo when available
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

export const description = 'Senior Full-Stack Web / Mobile / AI / Desktop Developer with over 21 years of experience. Passionate about creating awesome tools and applications for developers and customers.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/charlpcronje' },
	{ platform: Platform.Linkedin, link: 'https://www.linkedin.com/in/charlpcronje' },
	{ platform: Platform.Twitter, link: 'https://twitter.com/CPCharlCronje' },
	{ platform: Platform.StackOverflow, link: 'https://stackoverflow.com/users/your-id' }, // Replace with actual StackOverflow ID
	{ platform: Platform.Email, link: 'charl@webally.co.za' },
	{ platform: Platform.Youtube, link: 'https://www.youtube.com/your-channel' }, // Replace with actual YouTube channel
	{ platform: Platform.Facebook, link: 'https://www.facebook.com/your-profile' } // Replace with actual Facebook profile
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
	{ title: 'Skills', to: '/skills', icon: 'i-carbon-software-resource-cluster', position: 'header' },
	{ title: 'Projects', to: '/projects', icon: 'i-carbon-cube', position: 'header' },
	{ title: 'Experience', to: '/experience', icon: 'i-carbon-development', position: 'header' },
	{ title: 'Education', to: '/education', icon: 'i-carbon-education', position: 'header' },
	{ title: 'Documentation', to: '/documentation', icon: 'i-carbon-document', position: 'footer' },
	{ title: 'AI Tools', to: '/ai-tools', icon: 'i-carbon-machine-learning-model', position: 'footer' },
	{ title: 'Playground', to: '/playground', icon: 'i-carbon-game-console', position: 'footer' },
	{ title: 'Resume', to: '/resume', icon: 'i-carbon-result', position: 'header' }
] as const;

export const footerItems = [
	{ title: 'Terms and Conditions', to: '/terms', icon: 'i-carbon-document-signed' },
	{ title: 'Privacy Policy', to: '/privacy', icon: 'i-carbon-privacy' }
] as const;
```

## File: src/lib/data/projects.ts
```ts
// src/lib/data/projects.ts

import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'acsa-3d-airport-explore',
		color: '#0077be',
		description: 'A 3D game developed for Airport Company South Africa (ACSA) where players explore a virtual airport to find items and win prizes. This interactive experience aimed to familiarize users with airport layouts and promote engagement.',
		shortDescription: 'Interactive 3D airport exploration game for ACSA.',
		links: [{ to: 'https://www.airports.co.za/', label: 'ACSA Website' }],
		logo: Assets.ACSA,
		name: 'ACSA 3D Airport Explore',
		period: {
			from: new Date(2018, 0, 1),
			to: new Date(2018, 6, 1)
		},
		skills: getSkills('unity', 'csharp', 'js', 'html', 'css'),
		type: 'Interactive 3D Game',
		company: 'Airport Company South Africa'
	},
	{
		slug: 'anglo-american-email-marketing',
		color: '#ff0000',
		description: 'Developed email marketing campaigns and electronic invitations for Anglo American, a global mining company. The project involved creating responsive email templates and a system for managing and sending personalized invitations.',
		shortDescription: 'Email marketing and electronic invitations for Anglo American.',
		links: [{ to: 'https://www.angloamerican.com/', label: 'Anglo American Website' }],
		logo: Assets.AngloAmerican,
		name: 'Anglo American Email Marketing',
		period: {
			from: new Date(2017, 0, 1),
			to: new Date(2017, 11, 31)
		},
		skills: getSkills('html', 'css', 'js', 'php'),
		type: 'Email Marketing',
		company: 'Anglo American'
	},
	{
		slug: 'apbco-asset-management',
		color: '#4a90e2',
		description: 'Designed and implemented an Asset Management System for APBCO Insurance. This system allowed for efficient tracking, maintenance, and reporting of company assets, improving overall operational efficiency.',
		shortDescription: 'Asset Management System for APBCO Insurance.',
		links: [{ to: 'https://www.apbco.co.za/', label: 'APBCO Website' }],
		logo: Assets.APBCO,
		name: 'APBCO Asset Management System',
		period: {
			from: new Date(2016, 6, 1),
			to: new Date(2017, 5, 30)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: 'Asset Management Software',
		company: 'APBCO Insurance'
	},
	{
		slug: 'brinant-security-management',
		color: '#2c3e50',
		description: 'Developed a comprehensive Shift and Staff Management System for Brinant Security. The system streamlined scheduling, time tracking, and staff allocation, significantly improving operational efficiency.',
		shortDescription: 'Shift and Staff Management System for Brinant Security.',
		links: [{ to: 'https://www.brinantsecurity.co.za/', label: 'Brinant Security Website' }],
		logo: Assets.BrinantSecurity,
		name: 'Brinant Security Management System',
		period: {
			from: new Date(2015, 1, 1),
			to: new Date(2015, 12, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: 'Staff Management Software',
		company: 'Brinant Security'
	},
	{
		slug: 'cavalier-abattoirs-systems',
		color: '#8e44ad',
		description: 'Developed multiple integrated systems for Cavalier Abattoirs, including Quote and Invoice System, Vehicle Tracking System, Vehicle Maintenance System, Process Management System, Stock Management System, and Document Management System. This comprehensive suite of applications streamlined various aspects of the company\'s operations.',
		shortDescription: 'Integrated management systems for Cavalier Abattoirs.',
		links: [{ to: 'https://www.cavalier.co.za/', label: 'Cavalier Abattoirs Website' }],
		logo: Assets.CavalierAbattoirs,
		name: 'Cavalier Abattoirs Integrated Systems',
		period: {
			from: new Date(2014, 0, 1),
			to: new Date(2015, 11, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css', 'laravel'),
		type: 'Integrated Management Software',
		company: 'Cavalier Abattoirs'
	},
	{
		slug: 'city-lodge-booking-system',
		color: '#e74c3c',
		description: 'Designed and developed the website and online booking system for City Lodge Hotel Group. The system provided a seamless booking experience for customers and integrated with the hotel\'s existing management systems.',
		shortDescription: 'Website and online booking system for City Lodge.',
		links: [{ to: 'https://www.citylodge.co.za/', label: 'City Lodge Website' }],
		logo: Assets.CityLodge,
		name: 'City Lodge Online Booking System',
		period: {
			from: new Date(2013, 6, 1),
			to: new Date(2014, 5, 30)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css', 'laravel'),
		type: 'Web Development & Booking System',
		company: 'City Lodge Hotel Group'
	},
	{
		slug: 'exxaro-systems',
		color: '#3498db',
		description: 'Developed multiple systems for Exxaro, including an Internal Communication System, Online Quiz Game, and IZone Staff Empowerment System. The IZone system was particularly notable, featuring an online quiz with the top 3 teams participating in a live quiz night, winning a vacation to Hawaii. Custom software and hardware were created for the real-life quiz game event.',
		shortDescription: 'Internal systems and gamified staff engagement for Exxaro.',
		links: [{ to: 'https://www.exxaro.com/', label: 'Exxaro Website' }],
		logo: Assets.Exxaro,
		name: 'Exxaro Internal Systems',
		period: {
			from: new Date(2012, 0, 1),
			to: new Date(2013, 11, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css', 'csharp', 'unity'),
		type: 'Internal Systems & Gamification',
		company: 'Exxaro'
	},
	{
		slug: 'fnb-corporate-identity',
		color: '#f39c12',
		description: 'Led the development of corporate identity materials for First National Bank (FNB). This project involved creating a consistent visual language across various digital and print media, reinforcing FNB\'s brand identity.',
		shortDescription: 'Corporate identity development for FNB.',
		links: [{ to: 'https://www.fnb.co.za/', label: 'FNB Website' }],
		logo: Assets.FNB,
		name: 'FNB Corporate Identity Development',
		period: {
			from: new Date(2011, 6, 1),
			to: new Date(2011, 12, 31)
		},
		skills: getSkills('photoshop', 'illustrator', 'indesign'),
		type: 'Corporate Identity Design',
		company: 'First National Bank'
	},
	{
		slug: 'imperial-logistics-systems',
		color: '#2ecc71',
		description: 'Developed a Document Management System and HR Management System for Imperial Logistics. These systems improved document handling, storage, retrieval, and human resource management processes across the organization.',
		shortDescription: 'Document and HR management systems for Imperial Logistics.',
		links: [{ to: 'https://www.imperiallogistics.com/', label: 'Imperial Logistics Website' }],
		logo: Assets.ImperialLogistics,
		name: 'Imperial Logistics Management Systems',
		period: {
			from: new Date(2010, 0, 1),
			to: new Date(2011, 5, 30)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: 'Document & HR Management Software',
		company: 'Imperial Logistics'
	},
	{
		slug: 'imvula-icd-server-monitoring',
		color: '#9b59b6',
		description: 'Designed and implemented a Server Monitoring System for Imvula ICD. This system provided real-time monitoring, alerting, and reporting capabilities for the company\'s server infrastructure, ensuring optimal performance and quick issue resolution.',
		shortDescription: 'Server monitoring system for Imvula ICD.',
		links: [{ to: 'https://www.imvulaicd.co.za/', label: 'Imvula ICD Website' }],
		logo: Assets.ImvulaICD,
		name: 'Imvula ICD Server Monitoring System',
		period: {
			from: new Date(2009, 6, 1),
			to: new Date(2009, 12, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css', 'python'),
		type: 'Server Monitoring Software',
		company: 'Imvula ICD'
	},
	{
		slug: 'legacy-underwriting-portfolio-management',
		color: '#34495e',
		description: 'Developed a Portfolio Management System for Legacy Underwriting Managers. This system enabled efficient management of insurance portfolios, risk assessment, and reporting, streamlining the underwriting process.',
		shortDescription: 'Portfolio management system for Legacy Underwriting Managers.',
		links: [{ to: 'https://www.lum.co.za/', label: 'Legacy Underwriting Managers Website' }],
		logo: Assets.LegacyUnderwriting,
		name: 'Legacy Underwriting Portfolio Management',
		period: {
			from: new Date(2008, 0, 1),
			to: new Date(2008, 11, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: 'Portfolio Management Software',
		company: 'Legacy Underwriting Managers'
	},
	{
		slug: 'pna',
		color: '#e67e22',
		description: 'Developed a Product Management System and E-Commerce platform for PNA. These systems allowed for efficient management of product inventory and enabled online sales, expanding PNA\'s market reach.',
		shortDescription: 'Product management and e-commerce systems for PNA.',
		links: [{ to: 'https://www.pna.co.za/', label: 'PNA Website' }],
		logo: Assets.PNA,
		name: 'PNA Management and E-Commerce Systems',
		period: {
			from: new Date(2007, 0, 1),
			to: new Date(2007, 11, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: 'Product Management & E-Commerce',
		company: 'PNA'
	},
	{
		slug: 'principal-software-version-control',
		color: '#1abc9c',
		description: 'Developed a custom Version Control System for Principal Software. This system was tailored to the specific needs of the company, providing efficient code versioning, branching, and collaboration features.',
		shortDescription: 'Custom version control system for Principal Software.',
		links: [{ to: 'https://www.principalsoftware.co.za/', label: 'Principal Software Website' }],
		logo: Assets.PrincipalSoftware,
		name: 'Principal Software Version Control System',
		period: {
			from: new Date(2006, 6, 1),
			to: new Date(2006, 12, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: 'Version Control Software',
		company: 'Principal Software'
	},
	{
		slug: 'the-car-shop-website',
		color: '#d35400',
		description: 'Designed and developed a website for The Car Shop. The website showcased the company\'s inventory, services, and provided features for customer engagement and online inquiries.',
		shortDescription: 'Website development for The Car Shop.',
		links: [{ to: 'https://www.thecarshop.co.za/', label: 'The Car Shop Website' }],
		logo: Assets.TheCarShop,
		name: 'The Car Shop Website',
		period: {
			from: new Date(2006, 0, 1),
			to: new Date(2006, 5, 30)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: 'Web Development',
		company: 'The Car Shop'
	},
	{
		slug: 'the-orient-hotel-website',
		color: '#c0392b',
		description: 'Developed a website for The Orient Hotel. The website showcased the hotel\'s amenities, rooms, and services, and included an online booking system integrated with the hotel\'s management software.',
		shortDescription: 'Website development for The Orient Hotel.',
		links: [{ to: 'https://www.theorient.co.za/', label: 'The Orient Hotel Website' }],
		logo: Assets.TheOrientHotel,
		name: 'The Orient Hotel Website',
		period: {
			from: new Date(2005, 6, 1),
			to: new Date(2005, 12, 31)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: 'Web Development',
		company: 'The Orient Hotel'
	},
	{
		slug: 'tribake-quote-invoice-system',
		color: '#27ae60',
		description: 'Developed a Quote and Invoice System for Tribake. This system streamlined the process of creating quotes and invoices, managing customer information, and tracking payments.',
		shortDescription: 'Quote and invoice system for Tribake.',
		links: [{ to: 'https://www.tribake.co.za/', label: 'Tribake Website' }],
		logo: Assets.Tribake,
		name: 'Tribake Quote and Invoice System',
		period: {
			from: new Date(2005, 0, 1),
			to: new Date(2005, 5, 30)
		},
		skills: getSkills('php', 'mysql', 'js', 'html', 'css'),
		type: 'Quote and Invoice Software',
		company: 'Tribake'
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
		description: 'JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: 'TypeScript is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transcompiles to JavaScript.',
		logo: Assets.TypeScript,
		name: 'TypeScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'php',
		color: 'purple',
		description: 'PHP is a popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.',
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: 'Python is an interpreted, high-level and general-purpose programming language. Its design philosophy emphasizes code readability with its notable use of significant indentation.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'red',
		description: 'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is intended to let application developers write once, run anywhere (WORA).',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'kotlin',
		color: 'orange',
		description: 'Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin\'s standard library depends on the Java Class Library.',
		logo: Assets.Kotlin,
		name: 'Kotlin',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'csharp',
		color: 'green',
		description: 'C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'blue',
		description: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: 'CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description: 'Sass (Syntactically Awesome Style Sheets) is a preprocessor scripting language that is interpreted or compiled into CSS.',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'react',
		color: 'cyan',
		description: 'React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.',
		logo: Assets.ReactJs,
		name: 'React',
		category: 'library'
	}),
	defineSkill({
		slug: 'vue',
		color: 'green',
		description: 'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.',
		logo: Assets.VueJs,
		name: 'Vue.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'angular',
		color: 'red',
		description: 'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.',
		logo: Assets.Angular,
		name: 'Angular',
		category: 'framework'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: 'Svelte is a free and open-source front end component framework created by Rich Harris and maintained by the Svelte core team members.',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'framework'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'express',
		color: 'gray',
		description: 'Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License.',
		logo: Assets.ExpressJs,
		name: 'Express.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'laravel',
		color: 'red',
		description: 'Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern.',
		logo: Assets.Laravel,
		name: 'Laravel',
		category: 'framework'
	}),
	defineSkill({
		slug: 'symfony',
		color: 'black',
		description: 'Symfony is a PHP web application framework and a set of reusable PHP components/libraries. It was published as free software on October 18, 2005 and released under the MIT license.',
		logo: Assets.Symfony,
		name: 'Symfony',
		category: 'framework'
	}),
	defineSkill({
		slug: 'django',
		color: 'green',
		description: 'Django is a Python-based free and open-source web framework that follows the model-template-views (MTV) architectural pattern.',
		logo: Assets.Django,
		name: 'Django',
		category: 'framework'
	}),
	defineSkill({
		slug: 'flask',
		color: 'black',
		description: 'Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries.',
		logo: Assets.Flask,
		name: 'Flask',
		category: 'framework'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'blue',
		description: 'MySQL is an open-source relational database management system (RDBMS). Its name is a combination of "My", the name of co-founder Michael Widenius\'s daughter, and "SQL", the abbreviation for Structured Query Language.',
		logo: Assets.MySQL,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'postgresql',
		color: 'blue',
		description: 'PostgreSQL, also known as Postgres, is a free and open-source relational database management system (RDBMS) emphasizing extensibility and SQL compliance.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'mssql',
		color: 'red',
		description: 'Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications.',
		logo: Assets.MSSQL,
		name: 'Microsoft SQL Server',
		category: 'db'
	}),
	defineSkill({
		slug: 'oracle',
		color: 'red',
		description: 'Oracle Database is a multi-model database management system produced and marketed by Oracle Corporation. It is a database commonly used for running online transaction processing (OLTP), data warehousing (DW) and mixed (OLTP & DW) database workloads.',
		logo: Assets.Oracle,
		name: 'Oracle Database',
		category: 'db'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description: 'Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'kubernetes',
		color: 'blue',
		description: 'Kubernetes is an open-source container-orchestration system for automating computer application deployment, scaling, and management.',
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devops'
	}),
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description: 'Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis',
		logo: Assets.AWS,
		name: 'Amazon Web Services',
		category: 'devops'
	}),
	defineSkill({
		slug: 'azure',
		color: 'blue',
		description: 'Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.',
		logo: Assets.Azure,
		name: 'Microsoft Azure',
		category: 'devops'
	}),
	defineSkill({
		slug: 'gcp',
		color: 'red',
		description: 'Google Cloud Platform (GCP) is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, file storage, and YouTube.',
		logo: Assets.GCP,
		name: 'Google Cloud Platform',
		category: 'devops'
	}),
	defineSkill({
		slug: 'git',
		color: 'orange',
		description: 'Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.',
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'jenkins',
		color: 'red',
		description: 'Jenkins is an open source automation server. It helps automate the parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery.',
		logo: Assets.Jenkins,
		name: 'Jenkins',
		category: 'devops'
	}),
	defineSkill({
		slug: 'travis',
		color: 'red',
		description: 'Travis CI is a hosted continuous integration service used to build and test software projects hosted at GitHub and Bitbucket.',
		logo: Assets.Travis,
		name: 'Travis CI',
		category: 'devops'
	}),
	defineSkill({
		slug: 'circleci',
		color: 'green',
		description: 'CircleCI is a continuous integration and continuous delivery platform that can be used to implement DevOps practices.',
		logo: Assets.CircleCI,
		name: 'CircleCI',
		category: 'devops'
	}),
	defineSkill({
		slug: 'android',
		color: 'green',
		description: 'Android is a mobile operating system based on a modified version of the Linux kernel and other open source software, designed primarily for touchscreen mobile devices such as smartphones and tablets.',
		logo: Assets.Android,
		name: 'Android',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'ios',
		color: 'gray',
		description: 'iOS is a mobile operating system created and developed by Apple Inc. exclusively for its hardware. It is the operating system that powers many of the company\'s mobile devices, including the iPhone and iPod Touch.',
		logo: Assets.IOS,
		name: 'iOS',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'react-native',
		color: 'blue',
		description: 'React Native is an open-source mobile application development framework created by Facebook. It is used to develop applications for Android, iOS, Web and UWP by enabling developers to use React along with native platform capabilities.',
		logo: Assets.ReactNative,
		name: 'React Native',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'flutter',
		color: 'blue',
		description: 'Flutter is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase.',
		logo: Assets.Flutter,
		name: 'Flutter',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'unity',
		color: 'black',
		description: 'Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Inc.\'s Worldwide Developers Conference as a Mac OS X-exclusive game engine.',
		logo: Assets.Unity,
		name: 'Unity',
		category: 'game'
	}),
	defineSkill({
		slug: 'unreal',
		color: 'black',
		description: 'Unreal Engine is a game engine developed by Epic Games, first showcased in the 1998 first-person shooter game Unreal. Although initially developed for first-person shooters, it has been successfully used in a variety of other genres, including platformers, fighting games, MMORPGs, and other RPGs.',
		logo: Assets.Unreal,
		name: 'Unreal Engine',
		category: 'game'
	}),
	defineSkill({
		slug: 'ai',
		color: 'purple',
		description: 'Artificial Intelligence (AI) is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals, which involves consciousness and emotionality.',
		logo: Assets.AI,
		name: 'Artificial Intelligence',
		category: 'ai-ml'
	}),
	defineSkill({
		slug: 'machine-learning',
		color: 'green',
		description: 'Machine Learning is the study of computer algorithms that improve automatically through experience. It is seen as a subset of artificial intelligence.',
		logo: Assets.MachineLearning,
		name: 'Machine Learning',
		category: 'ai-ml'
	}),
	defineSkill({
		slug: 'deep-learning',
		color: 'blue',
		description: 'Deep Learning is part of a broader family of machine learning methods based on artificial neural networks with representation learning. Learning can be supervised, semi-supervised or unsupervised.',
		logo: Assets.DeepLearning,
		name: 'Deep Learning',
		category: 'ai-ml'
	}),
	defineSkill({
		slug: 'photoshop',
		color: 'blue',
		description: 'Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It has become the industry standard not only in raster graphics manipulation, but in digital art as a whole.',
		logo: Assets.Photoshop,
		name: 'Adobe Photoshop',
		category: 'design'
	}),
	defineSkill({
		slug: 'illustrator',
		color: 'orange',
		description: 'Adobe Illustrator is a vector graphics editor and design program developed and marketed by Adobe Inc. Originally designed for the Apple Macintosh, development of Adobe Illustrator began in 1985.',
		logo: Assets.Illustrator,
		name: 'Adobe Illustrator',
		category: 'design'
	}),
	defineSkill({
		slug: 'indesign',
		color: 'pink',
		description: 'Adobe InDesign is a desktop publishing and typesetting software application produced by Adobe Inc. It can be used to create works such as posters, flyers, brochures, magazines, newspapers, presentations, books and ebooks.',
		logo: Assets.InDesign,
		name: 'Adobe InDesign',
		category: 'design'
	}),
	defineSkill({
		slug: 'after-effects',
		color: 'purple',
		description: 'Adobe After Effects is a digital visual effects, motion graphics, and compositing application developed by Adobe Inc. and used in the post-production process of film making, video games and television production.',
		logo: Assets.AfterEffects,
		name: 'Adobe After Effects',
		category: 'design'
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

export const title = 'Documentation';

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
// src/lib/data/ai-tools.ts

export const aiToolsTitle = 'AI Tools';
export const playgroundTitle = 'Playground';

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
    }
];

export const playgroundTools = [
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
        name: 'Combine Project Markdown Docs',
        description: 'A Python application that recursively scans a specified directory and its sub-directories for Markdown (.md) files and combines them into a single file.',
        github: 'https://github.com/charlpcronje/Combine-Markdown-Docs',
        details: `
            This tool offers:
            - Recursive file scanning for Markdown files
            - Exclusion configuration for specific files and folders
            - Addition of custom headers with relative paths to each Markdown file in the combined output
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
	}
};

export * from './helpers';

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
	import Footer from '$lib/components/Footer/Footer.svelte';
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
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>
<div
	class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
>
	<div class="md:flex-1 gap-10px">
		<MainTitle classes="md:text-left ">{name} {lastName},</MainTitle>
		<p class="text-[var(--tertiary-text)]  text-center md:text-left text-[1.2em] font-extralight">
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
<!-- src/routes/ai-tools/+page.svelte -->
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
				href={`/ai-tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
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


