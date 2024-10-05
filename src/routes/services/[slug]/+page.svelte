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