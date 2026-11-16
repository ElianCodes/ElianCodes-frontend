// Raw-markdown twin of every article at /blog/<slug>.md, for agents and LLMs.
// Advertised from the article page with <link rel="alternate" type="text/markdown">.
import type { APIRoute, GetStaticPaths } from "astro";
import { getPosts, type Post } from "../../lib/posts";

export const getStaticPaths = (async () => {
	const posts = await getPosts();
	return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute<{ post: Post }> = ({ props }) => {
	const { post } = props;
	const { data } = post;

	// Posts already open with "# Title"; don't repeat it.
	const lines = (post.body ?? "").replace(/\r\n?/g, "\n").split("\n");
	const first = lines.findIndex((line) => line.trim() !== "");
	if (first !== -1 && /^#\s/.test(lines[first])) lines.splice(0, first + 1);
	const body = lines.join("\n").replace(/^\n+/, "");

	const header = [
		`# ${data.title}`,
		"",
		`**Author:** ${data.author}`,
		`**Published:** ${data.pubDate.toISOString().slice(0, 10)}`,
		...(data.updatedDate ? [`**Updated:** ${data.updatedDate.toISOString().slice(0, 10)}`] : []),
		`**Tags:** ${data.tags.join(", ")}`,
		`**Description:** ${data.description}`,
		`**URL:** https://www.elian.codes/blog/${post.id}`,
		"",
		"---",
		"",
	].join("\n");

	return new Response(`${header}${body}`, {
		headers: { "Content-Type": "text/markdown; charset=utf-8" },
	});
};
