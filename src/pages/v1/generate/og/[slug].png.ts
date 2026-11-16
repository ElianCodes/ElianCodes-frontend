// Same URL scheme as the old site, so links already shared on social media keep their preview.
import type { APIRoute, GetStaticPaths } from "astro";
import { renderOg } from "../../../../lib/og";
import { formatDate, getPosts, type Post } from "../../../../lib/posts";

export const getStaticPaths = (async () => {
	const posts = await getPosts();
	return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute<{ post: Post }> = ({ props }) => {
	const { data } = props.post;
	return renderOg({
		title: data.title,
		eyebrow: `cat ./articles/${(data.tags[0] ?? "post").replace(/\s+/g, "-")}`,
		footer: `${formatDate(data.pubDate)} · ${data.tags.slice(0, 2).join(" · ")}`,
	});
};
