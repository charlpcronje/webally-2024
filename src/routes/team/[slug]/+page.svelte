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