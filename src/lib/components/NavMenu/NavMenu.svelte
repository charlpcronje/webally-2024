<!-- src/lib/components/NavMenu/NavMenu.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	import { items } from '@data/navbar';
	import * as HOME from '@data/home';
	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	$: currentRoute = $page.url.pathname;
	$: headerItems = items.filter((item) => item.position === 'header');
	$: firstRowItems = headerItems.filter((item) => item.row === 1);
	$: secondRowItems = headerItems.filter((item) => item.row === 2);

	let expanded = false;
	let showSecondRow = false;
	let lastScrollTop = 0;

	const toggleExpanded = () => {
		expanded = !expanded;
	};

	onMount(() => {
		const handleScroll = () => {
			const st = window.pageYOffset || document.documentElement.scrollTop;
			if (st > lastScrollTop) {
				// Scrolling down
				showSecondRow = false;
			} else {
				// Scrolling up
				showSecondRow = true;
			}
			lastScrollTop = st <= 0 ? 0 : st;
		};

		const handleMouseMove = (e: MouseEvent) => {
			showSecondRow = e.clientY <= 100;
		};

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<nav class="nav-menu">
	<div class="container">
		<div class="nav-row">
			<div class="nav-left">
				<a href={`${base}/`} class="nav-logo">
					<UIcon icon="i-carbon-code" classes="nav-logo-icon" />
					<span class="nav-logo-text">{HOME.name}</span>
				</a>
				<div class="nav-items">
					{#each firstRowItems as item}
						<a href={`${base}${item.to}`} class="nav-item" class:active={currentRoute === item.to}>
							<UIcon icon={item.icon} classes="nav-item-icon" />
							<span class="nav-item-text">{item.title}</span>
						</a>
					{/each}
				</div>
			</div>
			<div class="nav-right">
				<a href={`${base}/search`} class="nav-search">
					<UIcon icon="i-carbon-search" />
				</a>
				<button class="nav-toggle" on:click={toggleExpanded}>
					<UIcon icon="i-carbon-menu" />
				</button>
			</div>
		</div>
		{#if showSecondRow}
			<div transition:slide={{ duration: 300, axis: 'y' }} class="nav-row nav-second-row">
				{#each secondRowItems as item}
					<a href={`${base}${item.to}`} class="nav-item" class:active={currentRoute === item.to}>
						<UIcon icon={item.icon} classes="nav-item-icon" />
						<span class="nav-item-text">{item.title}</span>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</nav>

{#if expanded}
	<div class="nav-mobile">
		{#each headerItems as item}
			<a href={`${base}${item.to}`} class="nav-mobile-item" on:click={toggleExpanded}>
				<UIcon icon={item.icon} classes="nav-mobile-item-icon" />
				<span class="nav-mobile-item-text">{item.title}</span>
			</a>
		{/each}
	</div>
{/if}

<style lang="scss">
	.nav-menu {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: var(--main);
		color: var(--main-text);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		z-index: 1000;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.nav-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 60px;
	}

	.nav-left {
		display: flex;
		align-items: center;
	}

	.nav-logo {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: inherit;
		margin-right: 2rem;

		&-icon {
			font-size: 1.5rem;
			margin-right: 0.5rem;
		}

		&-text {
			font-size: 1.25rem;
			font-weight: bold;
		}
	}

	.nav-items {
		display: flex;
		align-items: center;
	}

	.nav-item {
		display: flex;
		align-items: center;
		padding: 0.5rem 0.75rem;
		text-decoration: none;
		color: var(--secondary-text);
		border-radius: 0.25rem;
		transition: background-color 0.2s;

		&:hover,
		&.active {
			background-color: var(--main-hover);
		}

		&-icon {
			margin-right: 0.5rem;
		}
	}

	.nav-right {
		display: flex;
		align-items: center;
	}

	.nav-search {
		padding: 0.5rem;
		color: var(--secondary-text);
		text-decoration: none;
	}

	.nav-toggle {
		display: none;
		background: none;
		border: none;
		color: var(--secondary-text);
		font-size: 1.5rem;
		cursor: pointer;
		padding: 0.5rem;
	}

	.nav-second-row {
		background-color: var(--main);
		border-top: 1px solid var(--border);
	}

	.nav-mobile {
		display: none;
		position: fixed;
		top: 60px;
		left: 0;
		right: 0;
		background-color: var(--main);
		border-top: 1px solid var(--border);
		z-index: 999;
	}

	.nav-mobile-item {
		display: flex;
		align-items: center;
		padding: 1rem;
		text-decoration: none;
		color: var(--secondary-text);
		border-bottom: 1px solid var(--border);

		&-icon {
			margin-right: 0.75rem;
		}
	}

	@media (max-width: 768px) {
		.nav-items {
			display: none;
		}

		.nav-toggle {
			display: block;
		}

		.nav-mobile {
			display: block;
		}

		.nav-second-row {
			display: none;
		}
	}
</style>
