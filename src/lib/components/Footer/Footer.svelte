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
