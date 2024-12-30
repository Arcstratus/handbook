import { error } from '@sveltejs/kit';

type Params = {
	slug: string;
};

export async function load({ params }: { params: Params }) {
	try {
		const post = await import(`../../posts/${params.slug}.md`);

		if (post.metadata.published) {
			return {
				content: post.default,
				meta: post.metadata
			};
		} else {
			throw Error('unpublished');
		}
	} catch (e) {
		console.log(e);
		error(404, `${params.slug}.md not found`);
	}
}
