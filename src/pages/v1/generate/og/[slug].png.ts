import type { APIRoute } from "astro";
import { getSortedBlogPosts } from "@lib/content";
import { renderOgImage } from "@lib/og";

const posts = await getSortedBlogPosts();

export function getStaticPaths() {
	return posts.map((post) => ({
		params: { slug: post.id },
		props: { title: post.data.title, description: post.data.description },
	}));
}

export const GET: APIRoute = async ({ props }) => {
	return renderOgImage({
		title: props.title.trim() || "Blogpost",
		description: props.description ?? null,
	});
};
