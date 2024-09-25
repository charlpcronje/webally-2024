<script lang="ts">
	import { base } from '$app/paths';
	import { items } from '@data/navbar';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	//console.log(page.get_store);
	const currentYear = new Date().getFullYear();
	const footerNavItems = items.filter((item) => item.position === 'footer');

	let currentRoute = '';
	let showFooter = false;
	let isHomePage = false;
	$: pathname = '';
	onMount(() => {
		pathname = $page.url.pathname;
	});

	$: isHomePage = pathname === '/';

	
	onMount(() => {
		const handleScroll = () => {
			if (!isHomePage) {
				const scrollPosition = window.innerHeight + window.scrollY;
				const documentHeight = document.documentElement.offsetHeight;
				showFooter = scrollPosition >= documentHeight - 10;
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

{#if !isHomePage && showFooter}
	<footer transition:slide="{{ duration: 300, axis: 'y' }}" class="fixed bottom-0 left-0 right-0 text-white">
		<div class="container mx-auto px-0">
			
			<nav class="h-8 flex items-end pb-0" style="margin-bottom:-10">
				<ul class="pl-0 my-0 flex justify-center items-center w-full list-none" >
					{#each footerNavItems as item}
						<li class="mx-6">
							<a
								href={`${base}${item.to}`}
								class="flex items-center no-underline text-white group"
								class:active={pathname === item.to}
							>
								<!-- <UIcon icon={item.icon} classes="mr-2 text-xl" /> -->
								<span class="group-hover:text-gray-300 transition-colors duration-200 text-xs">
									{item.title}
								</span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
		<div class="py-1">
			<div class="container mx-auto px-2">
				<p class="text-center text-xs">
					Copyright &copy; {currentYear} webAlly | All rights reserved.
				</p>
			</div>
		</div>
	</footer>
{/if}

<style>
	footer {
		z-index: 10;
	}
	.active {
		color: theme('colors.gray.300');
	}
</style>