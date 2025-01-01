<script lang="ts">
	import { Card, CardHeader, CardContent } from '$lib/components/card';
	import Menu from '$lib/components/menu/menu.svelte';
	import MenuContent from '$lib/components/menu/menu-content.svelte';
	import MenuItem from '$lib/components/menu/menu-item.svelte';

	const { data } = $props();
</script>

<div class="container mx-auto">
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
		<Card>
			<CardHeader title="Company" />
			<CardContent>
				<ul>
					{#each data.posts as post}
						{#if post.slug.startsWith('/company')}
							<li>
								<a href={post.slug}>{post.title}</a>
							</li>
						{/if}
					{/each}
				</ul>
			</CardContent>
		</Card>

		<Card>
			<CardHeader title="Handbook" />
		</Card>

		<Card>
			<CardHeader title="Common" />
		</Card>

		<Card>
			<CardHeader title="engineering" />
		</Card>

		<Card>
			<CardHeader title="Finance" />
			<CardContent>
				<ul>
					{#each data.posts as post}
						{#if post.slug.startsWith('/finance')}
							<li>
								<a href={post.slug}>{post.title}</a>
							</li>
						{/if}
					{/each}
				</ul>
			</CardContent>
		</Card>
	</div>
</div>

<style>
	ul {
		@apply rounded-md border border-muted;
	}

	li {
		@apply rounded-md p-4 hover:bg-muted;
	}

	a {
		@apply block w-full;
	}
</style>
