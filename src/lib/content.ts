import { getCollection, type CollectionEntry } from "astro:content";

export type BlogEntry = CollectionEntry<"blog">;
export type EventEntry = CollectionEntry<"events">;

export function normalizeTag(tag: string) {
	return tag.trim().toLowerCase();
}

export async function getSortedBlogPosts() {
	const posts = await getCollection("blog");

	return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export async function getRecentBlogPosts(count = 3) {
	const posts = await getSortedBlogPosts();
	return posts.slice(0, count);
}

export async function getBlogTagIndex() {
	const posts = await getSortedBlogPosts();
	const tagMap = new Map<string, { label: string; posts: BlogEntry[] }>();

	for (const post of posts) {
		for (const rawTag of post.data.tags) {
			const normalizedTag = normalizeTag(rawTag);
			const existing = tagMap.get(normalizedTag);

			if (existing) {
				existing.posts.push(post);
				continue;
			}

			tagMap.set(normalizedTag, {
				label: rawTag.trim(),
				posts: [post],
			});
		}
	}

	return Array.from(tagMap.entries()).map(([slug, value]) => ({
		slug,
		label: value.label,
		posts: value.posts,
	}));
}

export async function getSortedEvents() {
	const events = await getCollection("events");

	return events.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
