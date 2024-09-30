<script lang="ts">
    import { base } from '$app/paths';
    import { getAssetURL } from '$lib/data/assets';
    import { title } from '@data/services';
    import type { Service } from '$lib/types';
    import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
    import TabTitle from '$lib/components/TabTitle.svelte';
    import Banner from '$lib/components/Banner/Banner.svelte';
    import CardDivider from '$lib/components/Card/CardDivider.svelte';
    import { marked } from 'marked';

    export let data: { service: Service; content: string | null; error?: Error };

    $: computedTitle = data.service ? `${data.service.name} - ${title}` : title;
    $: markdownContent = data.content ? marked(data.content) : data.service.shortDescription;
</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden col flex-1" style="margin-bottom:50px">
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
                {@html markdownContent}
            </div>
        </div>
    </div>
</div>

{#if import.meta.env.DEV}
    <pre class="mt-8 p-4 bg-gray-100 text-sm overflow-auto">
        {JSON.stringify(data, null, 2)}
    </pre>
{/if}