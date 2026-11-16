import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { site } from "../data/site";
import { getPosts, postUrl } from "../lib/posts";

export const GET: APIRoute = async (context) => {
	const posts = await getPosts();
	return rss({
		title: site.author,
		description: "Articles on Astro, PHP, self-hosting, AI and developer experience.",
		site: context.site ?? "https://www.elian.codes",
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			categories: post.data.tags,
			author: `${site.email} (${post.data.author})`,
			link: postUrl(post),
		})),
		trailingSlash: false,
		customData: "<language>en-us</language>",
	});
};
