<script lang="ts">
	import HeaderBand from './header-band.svelte';

	let title: string = 'Arcstratus';
</script>

<header class="border-nature-100 sticky top-0 z-10 border-b bg-background/60 backdrop-blur-sm">
	<div class="between middle container mx-auto flex gap-4 p-4">
		<HeaderBand {title} />
	</div>
</header>
