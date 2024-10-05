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