<script>
	import Header from '$lib/components/Header.svelte';
	import SectionFeatures from '$lib/components/SectionFeatures.svelte';
	import { sectionsFeaturesData } from '$lib/data';
</script>

<Header />

<main>
	{#each sectionsFeaturesData as section}
		<SectionFeatures {...section} />
	{/each}

	<section>
		<h1>Client testimonials</h1>
		<div>
			<img alt="emily-r" src="/images/image-emily.jpg" />
			<p>
				We put our trust in Sunnyside and they delivered, making sure our needs were met and
				deadlines were always hit.
			</p>
			<p>Emily R.</p>
			<p>Marketing Director</p>
		</div>

		<div>
			<img alt="thomas-s" src="/images/image-thomas.jpg" />
			<p>
				Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a
				satisfying and enjoyable experience.
			</p>
			<p>Thomas S.</p>
			<p>Chief Operating Officer</p>
		</div>

		<div>
			<img alt="jennie-f" src="/images/image-jennie.jpg" />
			<p>
				Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly
				recommended!
			</p>
			<p>Jennie F.</p>
			<p>Business Owner</p>
		</div>
	</section>

	<div>
		<img src="/images/mobile/image-gallery-milkbottles.jpg" alt="gallery-1" />
		<img src="/images/mobile/image-gallery-orange.jpg" alt="gallery-2" />
		<img src="/images/mobile/image-gallery-cone.jpg" alt="gallery-3" />
		<img src="/images/mobile/image-gallery-sugar-cubes.jpg" alt="gallery-4" />
	</div>
</main>

<footer>
	<h2>sunnyside</h2>
	<ul>
		<li>
			<a href="/">About</a>
		</li>
		<li>
			<a href="/">Services</a>
		</li>
		<li>
			<a href="/">Projects</a>
		</li>
	</ul>

	<ul>
		<li>
			<img src="/images/icon-facebook.svg" alt="facebook-icon" />
		</li>
		<li>
			<img src="/images/icon-instagram.svg" alt="instagram-icon" />
		</li>
		<li>
			<img src="/images/icon-twitter.svg" alt="twitter-icon" />
		</li>
		<li>
			<img src="/images/icon-pinterest.svg" alt="pinterest-icon" />
		</li>
	</ul>
</footer>

