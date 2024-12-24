<script lang="ts">
	import HeaderAction from './header-action.svelte';
	import HeaderBand from './header-band.svelte';
	import HeaderHamburger from './header-hamburger.svelte';
	import HeaderNavigate from './header-navigate.svelte';

	let title: string = 'Arcstratus';
</script>

<header class="border-nature-100 bg-background/60 sticky top-0 z-10 border-b backdrop-blur-sm">
	<div class="between middle container mx-auto flex gap-4 p-4">
		<HeaderBand {title} />
		<HeaderNavigate />
		<HeaderAction />
		<HeaderHamburger />
	</div>
</header>
