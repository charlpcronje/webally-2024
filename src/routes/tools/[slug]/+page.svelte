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