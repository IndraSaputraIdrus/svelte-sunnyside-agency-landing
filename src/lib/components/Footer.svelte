<script lang="ts">
	let icons = [
		{
			image: '/images/icon-facebook.svg',
			name: 'facebook'
		},
		{
			image: '/images/icon-instagram.svg',
			name: 'instagram'
		},
		{
			image: '/images/icon-twitter.svg',
			name: 'twitter'
		},
		{
			image: '/images/icon-pinterest.svg',
			name: 'pinterest'
		}
	];
</script>

<footer class="wrapper bg-primary-500 px-8 py-14 font-barlow text-primary-300">
	<h2 class="text-center text-4xl font-black">sunnyside</h2>
	<ul class="mt-10 flex items-center justify-center gap-8 text-lg font-medium">
		<li>
			<a href="#about">About</a>
		</li>
		<li>
			<a href="#services">Services</a>
		</li>
		<li>
			<a href="#projects">Projects</a>
		</li>
	</ul>

	<ul class="mt-14 flex items-center justify-center gap-7">
		{#each icons as icon}
			<li>
				<img src={icon.image} alt={icon.name} class="w-6 aspect-square" />
			</li>
		{/each}
	</ul>
</footer>
