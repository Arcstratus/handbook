<script lang="ts">
	const { data } = $props();
</script>

<div class="container mx-auto">
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
		{#each data.posts as post}
			<a href={`${post.slug}`}>{post.slug} - {post.title}</a>
		{/each}
	</div>
</div>
