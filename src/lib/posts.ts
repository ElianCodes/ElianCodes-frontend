import { type CollectionEntry, getCollection } from "astro:content";

export type Post = CollectionEntry<"posts">;

const dateFormat = new Intl.DateTimeFormat("en-US", {
	month: "short",
	day: "numeric",
	year: "numeric",
	timeZone: "UTC",
});

export function formatDate(date: Date) {
	return dateFormat.format(date);
}

export function postUrl(post: Post) {
	return `/blog/${post.id}`;
}

/** Same slug scheme as the old site, so /blog/tags/<tag> URLs keep working. */
export function tagSlug(tag: string) {
	return tag.trim().toLowerCase();
}

export function tagUrl(tag: string) {
	return `/blog/tags/${encodeURIComponent(tagSlug(tag))}`;
}

export function readingTime(markdown: string | undefined) {
	const words = (markdown ?? "")
		.replace(/```[\s\S]*?```/g, " ")
		.split(/\s+/)
		.filter(Boolean).length;
	return Math.max(1, Math.round(words / 230));
}

export async function getPosts() {
	const posts = await getCollection("posts", ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function groupByYear(posts: Post[]) {
	const years = new Map<number, Post[]>();
	for (const post of posts) {
		const year = post.data.pubDate.getUTCFullYear();
		years.set(year, [...(years.get(year) ?? []), post]);
	}
	return [...years.entries()].map(([year, items]) => ({ year, posts: items }));
}

export function getTagIndex(posts: Post[]) {
	const tags = new Map<string, { label: string; posts: Post[] }>();
	for (const post of posts) {
		for (const raw of post.data.tags) {
			const slug = tagSlug(raw);
			const entry = tags.get(slug) ?? { label: raw.trim(), posts: [] };
			entry.posts.push(post);
			tags.set(slug, entry);
		}
	}
	return [...tags.entries()]
		.map(([slug, value]) => ({ slug, ...value }))
		.sort((a, b) => b.posts.length - a.posts.length);
}

/** Posts sharing the most tags with `post`, newest first on ties. */
export function relatedPosts(post: Post, posts: Post[], count = 3) {
	const own = new Set(post.data.tags.map(tagSlug));
	return posts
		.filter((other) => other.id !== post.id)
		.map((other) => ({
			other,
			score: other.data.tags.filter((tag) => own.has(tagSlug(tag))).length,
		}))
		.filter(({ score }) => score > 0)
		.sort(
			(a, b) =>
				b.score - a.score || b.other.data.pubDate.valueOf() - a.other.data.pubDate.valueOf(),
		)
		.slice(0, count)
		.map(({ other }) => other);
}
