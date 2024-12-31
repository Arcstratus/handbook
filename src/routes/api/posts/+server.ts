import { json } from '@sveltejs/kit';
import type { MarkdownFile, Post } from '$lib/types';

async function getPosts() {
	const paths = import.meta.glob<MarkdownFile>('/src/posts/**/*.md', { eager: true });

	const posts: Post[] = Object.entries(paths)
		.map(([path, file]) => ({
			...file.metadata,
			slug: path.match(/\/src\/posts(.+).md/)?.[1]
		}))
		.filter((post): post is Post => post.published)
		.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
