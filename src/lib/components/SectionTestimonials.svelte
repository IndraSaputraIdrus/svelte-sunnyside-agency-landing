<script lang="ts">
	import { testimonialsData } from '$lib/data';
</script>

<section class="text-center py-14 px-8">
	<h3 class="uppercase tracking-widest mb-16 font-bold text-lg">Client testimonials</h3>
	<ul class="space-y-16">
		{#each testimonialsData as data}
			<li>
				<div class="mb-9">
					<img alt={data.name} src={data.image} class="mx-auto w-20 h-20 rounded-full" />
				</div>
				<p class="mb-9 font-barlow text-lg">{data.text}</p>
				<p class="mb-2 text-lg font-bold">{data.name}</p>
				<p class="font-barlow text-base">{data.job}</p>
			</li>
		{/each}
	</ul>
</section>
