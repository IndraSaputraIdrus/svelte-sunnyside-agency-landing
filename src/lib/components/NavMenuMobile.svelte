<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div
	transition:fade={{
		duration: 100
	}}
	class="absolute inset-x-7 top-28 z-10 rounded-sm rounded-tr-none bg-neutral-100 py-11 font-barlow text-neutral-300"
>
	<div
		class="absolute -top-6 right-0 w-0 border-b-[24px] border-l-[24px] border-b-neutral-100 border-l-transparent"
	></div>
	<ul class="flex flex-col items-center gap-7 font-semibold">
		<li>
			<a class="hover:text-neutral-200" href="#about">About</a>
		</li>
		<li>
			<a class="hover:text-neutral-200" href="#services">Services</a>
		</li>
		<li>
			<a class="hover:text-neutral-200" href="#projects">Projects</a>
		</li>
		<li>
			<a
				href="/"
				class="inline-block rounded-full bg-primary-200 px-8 py-4 font-sans text-base uppercase text-neutral-500"
				>Contact</a
			>
		</li>
	</ul>
</div>
