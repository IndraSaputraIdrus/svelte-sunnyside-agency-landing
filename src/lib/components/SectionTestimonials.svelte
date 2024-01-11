<script lang="ts">
	import { testimonialsData } from '$lib/data';
</script>

<section class="wrapper px-8 py-14 lg:py-32 text-center">
	<h3 class="mb-16 text-lg font-bold uppercase tracking-widest text-neutral-400 md:text-2xl">Client testimonials</h3>
	<ul class="grid gap-16 lg:grid-cols-3">
		{#each testimonialsData as data}
			<li>
				<div class="mb-9">
					<img alt={data.name} src={data.image} class="mx-auto h-20 w-20 rounded-full" />
				</div>
				<p class="mb-9 font-barlow text-lg">{data.text}</p>
				<p class="mb-2 text-lg font-bold">{data.name}</p>
				<p class="font-barlow text-base">{data.job}</p>
			</li>
		{/each}
	</ul>
</section>
