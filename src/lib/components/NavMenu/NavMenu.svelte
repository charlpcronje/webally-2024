<script lang="ts">
	import { page } from '$app/stores';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { items } from '@data/navbar';
	import * as HOME from '@data/home';
	import { onMount } from 'svelte';

	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';

	$: currentRoute = $page.url.pathname;

	let expanded = false;
	let isScrolling = false;
	let scrollTimeout: ReturnType<typeof setTimeout>;
	let navVisible = true;

	const toggleExpanded = (v?: boolean) => {
		if (typeof v === 'undefined') {
			expanded = !expanded;
		} else {
			expanded = v;
		}
	};

	function getHref(item:any) {
		return item.external ? item.to : `${base}${item.to}`;
	}

	$: headerItems = items.filter((item) => item.position === 'header');
	$: verticalItems = items.filter((item) => item.position === 'sidebar');

	function handleScroll() {
		isScrolling = true;
		navVisible = true;
		clearTimeout(scrollTimeout);

		scrollTimeout = setTimeout(() => {
			isScrolling = false;
			if (window.innerWidth <= 768) { // Only hide on mobile
				navVisible = false;
			}
		}, 3000);
	}

	function showNav() {
		navVisible = true;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="nav-menu">
	<nav class="container flex flex-row items-center text-sm">
		<a
			href={`${base}/`}
			class="nav-menu-left decoration-none w-auto md:w-150px lg:w-auto row flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]"
		>
			<UIcon icon="i-carbon-code" classes="text-2em" />
			<span
				class="ml-2 mt--2 text-md font-bold hidden md:inline overflow-hidden whitespace-nowrap text-ellipsis"
				>{HOME.name} {HOME.lastName}</span
			>
		</a>
		<div class="flex-1 block overflow-hidden md:hidden whitespace-nowrap text-ellipsis text-center">
			{HOME.name}
			{HOME.lastName}
		</div>
		<div class="flex-row flex-1 self-center h-full justify-center hidden md:flex">
			{#each headerItems as item (item.title)}
				<a 
					href={getHref(item)} 
					class="nav-menu-item !text-[var(--secondary-text)]"
					target={item.external ? "_blank" : undefined}
					rel={item.external ? "noopener noreferrer" : undefined}
				>
					<UIcon icon={item.icon} classes="text-1.3em" />
					<span class="nav-menu-item-label">{item.title}</span>
				</a>
			{/each}
		</div>
		<div
			class="row h-full justify-center items-stretch m-l-auto md:m-l-0 w-auto md:w-150px gap-1 text-1.15em"
		>
			<div class="row hidden md:flex">
				<a
					href={`${base}/search`}
					class="text-inherit col-center self-stretch px-2 hover:bg-[color:var(--main-hover)]"
				>
					<UIcon icon="i-carbon-search" />
				</a>
				<!--
				<button
					class="bg-transparent text-1em border-none cursor-pointer hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2"
					on:click={() => toggleTheme()}
				>
					{#if $theme}
						<UIcon icon="i-carbon-moon" />
					{:else}
						<UIcon icon="i-carbon-sun" />
					{/if}
				</button>
				-->
			</div>
			<div class="col-center md:hidden h-full hover:bg-[var(--main-hover)] cursor-pointer">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class={`nav-bar-mobile-btn col-center ${expanded ? 'nav-bar-mobile-btn-expanded' : ''}`}
					on:keydown
					on:keyup
					on:click={() => toggleExpanded()}
				/>
			</div>
		</div>
	</nav>
	<div class={`nav-menu-mobile ${expanded ? 'nav-menu-mobile-open' : ''} md:hidden`}>
		<div class="flex-col flex-1 self-center h-full justify-center m-t-7">
			{#each headerItems as item}
				<a
					href={getHref(item)}
					class="nav-menu-item !text-[var(--secondary-text)] gap-5"
					target={item.external ? "_blank" : undefined}
					rel={item.external ? "noopener noreferrer" : undefined}
					on:click={() => toggleExpanded(false)}
				>	
					<UIcon icon={item.icon} classes="text-1.3em" />
					<span class="">{item.title}</span>
				</a>
			{/each}
		</div>
		<div class="col gap-2 m-t-7">
			<a
				href={`${base}/search`}
				class="text-inherit text-sm decoration-none px-6 py-3 gap-2 row hover:bg-[color:var(--main-hover)]"
				on:click={() => toggleExpanded(false)}
			>
				<UIcon icon="i-carbon-search" />
				<span>Search</span>
			</a>
			<!--
			<button
				class="bg-transparent text-1em border-none cursor-pointer px-6 py-3 gap-2 row hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2"
				on:click={() => toggleTheme()}
			>
				{#if $theme}
					<UIcon icon="i-carbon-moon" />
					<span>Dark Theme</span>
				{:else}
					<UIcon icon="i-carbon-sun" />
					<span>Light Theme</span>
				{/if}
			</button>
			-->
		</div>
	</div>
	<div
		class="vertical-nav flex flex-col fixed right-0 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out"
		class:hidden={!navVisible}
	>
		{#each verticalItems as item}
			<a
				href={`${base}${item.to}`}
				class="nav-menu-item vertical text-xs !text-[var(--secondary-text)] mb-3"
				class:active={currentRoute === item.to}
			>
				<UIcon icon={item.icon} classes="text-1.3em icon-wrapper" />
				<span class="nav-menu-item-label vertival-nav-menu-item-label mr-1" style="margin-left: 5px">{item.title}</span>
			</a>
		{/each}
	</div>
</div>

{#if !navVisible}
	<button
		class="show-nav-button fixed right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-l-sm"
		on:click={showNav}
	>
		<UIcon icon="i-carbon-arrow-left" classes="text-1.5em; " />
	</button>
{/if}

<style lang="scss">
	.nav-menu {
		display: flex;
		justify-content: center;
		position: sticky;
		top: 0px;
		z-index: 10;
		padding: 0px 10px;
		height: 50px;
		border-bottom: 1px solid var(--secondary);
		background-color: var(--main);

		&-item {
			text-decoration: none;
			font-weight: 400;
			padding: 10px 20px;
			color: inherit;
			display: flex;
			align-items: center;
			border-bottom: 3px solid transparent;

			&-label {
				margin-left: 10px;

				@media (max-width: 950px) {
					& {
						display: none;
					}
				}
			}

			&:hover {
				opacity: 1.0;
				background-color: var(--main-hover);
			}
		}
	}

	.nav-menu-mobile {
		z-index: -1;
		max-height: calc(100vh - 50px - 1px);
		min-height: calc(100vh - 50px - 1px);
		width: 100%;
		position: absolute;
		background-color: var(--main);
		top: 51px;
		transform: translateY(-100vh);
		transition-property: transform opacity;
		transition: 400ms ease;
		opacity: 0;

		&-open {
			opacity: 1;
			transform: translateY(0vh);
		}
	}

	.icon-wrapper {
		padding: 15px;
	}

	.vertical-nav {
		z-index: 20;
		display: flex;
		transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
		opacity: 0.5;

		&.hidden {
			transform: translate(100%, -50%);
		}

		&:hover, &.scrolling {
			opacity: 1;
		}
	}

	.nav-menu-item.vertical {
		writing-mode: vertical-rl;
		transform: rotate(180deg);
		padding: 5px 5px;
		background-color: var(--main);
		border-radius: 0 0 0 0;
		border-right: 1px solid #2e2e2e;
		border-top: 1px solid #2e2e2e;
		border-bottom: 1px solid #2e2e2e;
		box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
		min-height: 80px;
		transition: opacity 0.3s ease-in-out;

		&:hover {
			background-color: var(--main-hover);
			opacity: 1;
		}

		&.active {
			background-color: var(--accent);
			color: var(--main);
		}

		.nav-menu-item-label {
			margin-top: 10px;
			display: inline-block;
		}
	}

	.show-nav-button {
		z-index: 19;
		cursor: pointer;
	}

	@media (max-width: 768px) {
		.vertical-nav {
			transition: transform 0.3s ease-in-out;
		}
	}
</style>