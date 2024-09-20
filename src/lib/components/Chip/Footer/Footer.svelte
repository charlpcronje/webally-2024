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
