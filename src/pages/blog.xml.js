import rss from "@astrojs/rss";
import { getSortedBlogPosts } from "@lib/content";

export async function GET(context) {
	const blog = await getSortedBlogPosts();
	return rss({
		title: "Elian Van Cutsem",
		description: "Programming and Frontend related articles and guides",
		stylesheet: false,
		site: context.site,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/blog/${post.id}/`,
		})),
		customData: "<language>en-us</language>",
		canonicalUrl: "https://www.elian.codes",
	});
}
