<script lang="ts">
	import NavMenuMobile from '$lib/components/NavMenuMobile.svelte';
	import CloseIcon from '$lib/components/CloseIcon.svelte';
	import MenuIcon from '$lib/components/MenuIcon.svelte';
	import NavMenu from './NavMenu.svelte';

	let navActive = false;

	function handleClick() {
		navActive = !navActive;
	}
</script>

<header id="home" class="wrapper relative text-neutral-100">
	<nav class="absolute left-0 right-0 top-0 flex items-center justify-between px-7 py-8 lg:px-10">
		<a href="#home" class="font-barlow text-3xl font-semibold">sunnyside</a>

		<button on:click={handleClick} class="-mr-1 text-neutral-100 lg:hidden">
			{#if navActive}
				<CloseIcon class="size-8" />
			{:else}
				<MenuIcon class="size-8" />
			{/if}
		</button>

		<NavMenu />

		{#if navActive}
			<NavMenuMobile />
		{/if}
	</nav>

	<div class="absolute inset-0 top-28 flex flex-col items-center">
		<h1
			class="mb-10 mt-12 text-center text-4xl font-extrabold uppercase leading-snug tracking-widest lg:mb-20 lg:mt-20 lg:text-6xl"
		>
			We Are Creatives
		</h1>
		<img alt="scroll-down" src="/images/icon-arrow-down.svg" />
	</div>
	<picture>
		<source srcset="/images/desktop/image-header.jpg" media="(min-width: 768px)" />
		<img src="/images/mobile/image-header.jpg" alt="header" class="h-full w-full" />
	</picture>
</header>
