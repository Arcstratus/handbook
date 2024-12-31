import type { MarkdownFile } from '$lib/types';
import { error } from '@sveltejs/kit';

const posts = import.meta.glob<MarkdownFile>('../../posts/**/*.md');

export async function load({ params }) {
	const postLoader = posts[`../../posts/${params.slug}.md`];
	if (!postLoader) {
		error(404, `${params.slug} not found`);
	}

	const post = await postLoader();
	return { content: post.default, meta: post.metadata };
}
