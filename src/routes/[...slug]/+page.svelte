<script lang="ts">
	let { data } = $props();
</script>

<article class="container mx-auto">
	<hgroup>
		<h1>{data.meta.title}</h1>
		<h2 class="pt-0">{data.meta.description}</h2>
	</hgroup>

	<section class="my-4">
		<data.content />
	</section>

	<hr />
	<p>{data.meta.date}</p>
</article>
