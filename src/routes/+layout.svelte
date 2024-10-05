<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import Analytics from '$lib/analytics.svelte';
	import 'uno.css';
	import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
	import Footer from '$lib/components/Chip/Footer/Footer.svelte';
	import '$lib/index.scss';
	import { onHydrated } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import { loading } from '$lib/stores/loadingStore';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import InstallPrompt from '$lib/components/InstallPrompt.svelte';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	
	
	// Function to show the loader
	function showLoader() {
		loading.set(true);
	}

	// Function to hide the loader
	function hideLoader() {
		setTimeout(() => loading.set(false), 500); // Add a slight delay to enhance UX
	}

	// Handle navigation events
	beforeNavigate(() => {
		showLoader();
	});

	afterNavigate(() => {
		hideLoader();
	});
	
	onMount(() => {
		onHydrated();
		setTimeout(() => {
			hideLoader();
		}, 1000);
	});
</script>
<Analytics />
<PageTransition />

<div class="body contents theme-dark flex flex-col min-h-screen">
	<NavMenu />
	<div class="content container flex-grow">
		<slot />
	</div>
	<Footer />
	<InstallPrompt />
</div>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		padding: 0px 0px;
	}

	.body {
		margin: 0px;
		background-color: var(--main);
		color: var(--main-text);
		font-family: var(--text-f);
		transition-duration: 200ms;
		letter-spacing: 1px;
	}

	:global(p) {
		margin: 0px;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 5px 0px;
	}
</style>