<!-- src/routes/team/[slug]/+page.svelte -->
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

<MainTitle>{data.name}</MainTitle>

<div class="cv-content">
	{@html parsedCV}
</div>

<style lang="scss">
	.cv-content {
		margin-top: 2rem;
		line-height: 1.6;

		:global(h1, h2, h3, h4, h5, h6) {
			margin-top: 1.5em;
			margin-bottom: 0.5em;
		}

		:global(p) {
			margin-bottom: 1em;
		}

		:global(ul, ol) {
			margin-bottom: 1em;
			padding-left: 2em;
		}

		:global(a) {
			color: var(--link-color);
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}

		:global(.retype-image) {
			max-width: 100%;
			height: auto;
			margin: 1em 0;
		}

		:global(.admonition) {
			border-left: 4px solid;
			padding: 1em;
			margin: 1em 0;
			background-color: var(--secondary);

			&.info {
				border-color: #3498db;
			}
			&.tip {
				border-color: #2ecc71;
			}
			&.note {
				border-color: #f1c40f;
			}
			&.caution {
				border-color: #e67e22;
			}
			&.danger {
				border-color: #e74c3c;
			}
		}

		:global(.retype-tabs) {
			border: 1px solid var(--border);
			border-radius: 4px;
			margin: 1em 0;
		}

		:global(.tab-item) {
			padding: 1em;
		}

		:global(details) {
			border: 1px solid var(--border);
			border-radius: 4px;
			padding: 1em;
			margin: 1em 0;

			summary {
				cursor: pointer;
				font-weight: bold;
			}
		}

		:global(.badge) {
			display: inline-block;
			padding: 0.25em 0.5em;
			background-color: var(--accent);
			color: var(--main-text);
			border-radius: 4px;
			font-size: 0.9em;
		}

		:global(.embed-container) {
			position: relative;
			padding-bottom: 56.25%;
			height: 0;
			overflow: hidden;
			max-width: 100%;

			iframe,
			object,
			embed {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
