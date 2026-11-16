// Raw-markdown twin of every article at /blog/<slug>.md, for agents and LLMs.
// Advertised from the article page with <link rel="alternate" type="text/markdown">.
import type { APIRoute, GetStaticPaths } from "astro";
import { postMarkdown } from "../../lib/markdown";
import { getPosts, type Post } from "../../lib/posts";

export const getStaticPaths = (async () => {
	const posts = await getPosts();
	return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute<{ post: Post }> = ({ props }) =>
	new Response(postMarkdown(props.post), {
		headers: { "Content-Type": "text/markdown; charset=utf-8" },
	});
