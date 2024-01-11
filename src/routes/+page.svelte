<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import SectionFeatures from '$lib/components/SectionFeatures.svelte';
	import SectionTestimonials from '$lib/components/SectionTestimonials.svelte';
	import { featuresData } from '$lib/data';
</script>

<Header />

<main>
	<div class="wrapper lg:grid lg:grid-cols-2">
		{#each featuresData as section, index}
			<SectionFeatures {...section} reverse={index === 1} />
		{/each}
	</div>

	<SectionTestimonials />

	<div id="projects" class="wrapper grid grid-cols-2 lg:grid-cols-4">
		<img class="block size-full" src="/images/mobile/image-gallery-milkbottles.jpg" alt="gallery-1" />
		<img class="block size-full" src="/images/mobile/image-gallery-orange.jpg" alt="gallery-2" />
		<img class="block size-full" src="/images/mobile/image-gallery-cone.jpg" alt="gallery-3" />
		<img class="block size-full" src="/images/mobile/image-gallery-sugar-cubes.jpg" alt="gallery-4" />
	</div>
</main>

<Footer />
