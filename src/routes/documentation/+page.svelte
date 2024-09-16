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
