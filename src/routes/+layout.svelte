<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { Footer, Header } from '$lib/ui';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Arcstratus</title>

	<script>
		if ('color-theme' in localStorage) {
			localStorage.getItem('color-theme') === 'dark'
				? document.documentElement.classList.add('dark')
				: document.documentElement.classList.remove('dark');
		} else {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.add('dark');
			}
		}
	</script>
</svelte:head>

<ParaglideJS {i18n}>
	<div class="gird h-screen grid-rows-[auto_1fr_auto]">
		<Header />

		<main class="space-y-4 p-4">
			{@render children()}
		</main>

		<Footer />
	</div>
</ParaglideJS>
