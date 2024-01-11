<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import SectionFeatures from '$lib/components/SectionFeatures.svelte';
	import SectionTestimonials from '$lib/components/SectionTestimonials.svelte';
	import { featuresData } from '$lib/data';
</script>

<Header />

<main>
	{#each featuresData as section}
		<SectionFeatures {...section} />
	{/each}

	<SectionTestimonials />

	<div class="grid grid-cols-2">
		<img src="/images/mobile/image-gallery-milkbottles.jpg" alt="gallery-1" />
		<img src="/images/mobile/image-gallery-orange.jpg" alt="gallery-2" />
		<img src="/images/mobile/image-gallery-cone.jpg" alt="gallery-3" />
		<img src="/images/mobile/image-gallery-sugar-cubes.jpg" alt="gallery-4" />
	</div>
</main>

<Footer />
