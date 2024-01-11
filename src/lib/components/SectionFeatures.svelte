<script lang="ts">
	export let title: string;
	export let text: string;
	export let image: string;
	export let type: 'sectionFlex' | 'sectionAbsolute';
	export let color: string = '';
	export let reverse: boolean = false;
</script>

{#if type === 'sectionFlex'}
	<section id="about" class="lg:col-span-2 lg:grid lg:grid-cols-2 lg:items-center">
		<picture>
			<source srcset={`/images/desktop/${image}`} media="(min-width: 768px)" />
			<img
				src={`/images/mobile/${image}`}
				alt="transform"
				class="block h-full w-full object-cover"
			/>
		</picture>
		<div
			class={`space-y-8 px-8 py-20 text-center md:space-y-11 md:p-24 lg:row-start-1 lg:py-0 lg:text-start ${
				reverse ? 'lg:col-start-1' : 'lg:col-start-2' 
			}`}
		>
			<h2 class="text-3xl font-bold md:text-5xl">{title}</h2>
			<p class="font-barlow text-lg font-semibold text-neutral-400 md:text-xl">{text}</p>
			<a class="relative inline-block px-2 font-bold uppercase tracking-wider" href="/">
				<span>Learn more</span>
				<span
					class={`absolute -bottom-0.5 left-0 -z-10 block h-3 w-full rounded-full opacity-50 ${color}`}
				/>
			</a>
		</div>
	</section>
{/if}

{#if type === 'sectionAbsolute'}
	<section id="services" class="relative">
		<picture>
			<source srcset={`/images/desktop/${image}`} media="(min-width: 768px)" />
			<img src={`/images/mobile/${image}`} alt="transform" class="h-full w-full" />
		</picture>
		<div class="absolute bottom-0 inset-x-0 space-y-8 px-8 py-20 text-center md:space-y-11 lg:px-32">
			<h2 class={`text-3xl font-bold md:text-5xl ${color}`}>{title}</h2>
			<p class={`font-barlow text-lg font-semibold md:text-xl ${color}`}>{text}</p>
		</div>
	</section>
{/if}
