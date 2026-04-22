import { getSortedBlogPosts } from "@lib/content";

export const prerender = true;

export async function getStaticPaths() {
	const posts = await getSortedBlogPosts();
	return posts.map((post) => ({
		params: { slug: post.id },
		props: { post },
	}));
}

export async function GET({ props }: { props: { post: Awaited<ReturnType<typeof getSortedBlogPosts>>[number] } }) {
	const { post } = props;

	const frontmatter = [
		`# ${post.data.title}`,
		``,
		`**Author:** ${post.data.author}`,
		`**Published:** ${post.data.pubDate.toISOString().split("T")[0]}`,
		`**Tags:** ${post.data.tags.join(", ")}`,
		`**Description:** ${post.data.description}`,
		``,
		`---`,
		``,
	].join("\n");

	return new Response(`${frontmatter}${post.body ?? ""}`, {
		headers: {
			"Content-Type": "text/markdown; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
}
