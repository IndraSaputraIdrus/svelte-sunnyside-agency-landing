<script lang="ts">
	import NavMenu from '$lib/components/NavMenu.svelte';
	import CloseIcon from '$lib/components/CloseIcon.svelte';
	import MenuIcon from '$lib/components/MenuIcon.svelte';

	let navActive = false;

	function handleClick() {
		navActive = !navActive;
	}
</script>

<header class="relative min-w-[375px] text-neutral-100">
	<nav class="absolute left-0 right-0 top-0 flex items-center justify-between px-7 py-8">
		<a href="#home" class="font-barlow text-3xl font-semibold">sunnyside</a>

		<button on:click={handleClick} class="text-neutral-100 -mr-1">
      {#if navActive}
        <CloseIcon class="size-8" />
      {:else}
        <MenuIcon class="size-8" />
      {/if}
		</button>

		{#if navActive}
			<NavMenu />
		{/if}
	</nav>

	<div class="absolute inset-0 top-28 flex flex-col items-center">
		<h1
			class="mb-10 mt-12 text-center text-4xl font-extrabold uppercase leading-snug tracking-widest"
		>
			We Are Creatives
		</h1>
		<img alt="scroll-down" src="/images/icon-arrow-down.svg" />
	</div>
	<img src="/images/mobile/image-header.jpg" alt="header" class="h-full" />
</header>
