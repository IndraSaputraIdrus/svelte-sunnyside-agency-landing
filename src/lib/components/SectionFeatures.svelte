<script lang="ts">
	export let title: string;
	export let text: string;
	export let image: string;
	export let type: 'sectionFlex' | 'sectionAbsolute';
	export let color: string = '';
</script>

{#if type === 'sectionFlex'}
	<section>
		<div>
			<img src={image} alt="transform" />
		</div>
		<div class="space-y-8 px-8 py-14 text-center">
			<h2 class="text-3xl font-bold">{title}</h2>
			<p class="font-barlow text-lg font-semibold text-neutral-400">{text}</p>
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
	<section class="relative">
		<div>
			<img src={image} alt="transform" />
		</div>
		<div class="space-y-8 px-8 py-14 text-center absolute bottom-0 left-0">
			<h2 class={`text-3xl font-bold ${color}`}>{title}</h2>
			<p class={`font-barlow text-lg font-semibold ${color}`}>{text}</p>
		</div>
	</section>
{/if}
