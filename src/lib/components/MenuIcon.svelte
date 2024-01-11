<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<svg
	in:fade={{ duration: 100 }}
	{...$$props}
	data-slot="icon"
	fill="none"
	stroke-width="1.5"
	stroke="currentColor"
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
	></path>
</svg>
