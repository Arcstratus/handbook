<script lang="ts">
	let { data } = $props();
</script>

<article>
	<h1>{data.meta.title}</h1>
	<h2>{data.meta.description}</h2>

	<p>{data.meta.date}</p>

	<data.content />
</article>
