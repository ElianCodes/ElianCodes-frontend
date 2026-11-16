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

/** Post titles often start with an emoji ("💄 Tailwind CSS in Astro"); strip it for metadata. */
export function plainTitle(title: string) {
	return title
		.replace(/[\p{Extended_Pictographic}️‍]/gu, "")
		.replace(/\s+/g, " ")
		.trim();
}

export function postUrl(post: Post) {
	return `/blog/${post.id}`;
}

/**
 * Tags written two ways that mean the same thing. The old slugs redirect to the merged tag
 * page in public/_redirects.
 */
const TAG_ALIASES: Record<string, string> = {
	webdevelopment: "web development",
	reactnative: "react native",
};

/** Same slug scheme as the old site (lowercased), so /blog/tags/<tag> URLs keep working. */
export function tagSlug(tag: string) {
	const slug = tag.trim().toLowerCase();
	return TAG_ALIASES[slug] ?? slug;
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
	const tags = new Map<string, { spellings: Map<string, number>; posts: Post[] }>();
	for (const post of posts) {
		for (const raw of new Set(post.data.tags.map((t) => t.trim()))) {
			const slug = tagSlug(raw);
			const entry = tags.get(slug) ?? { spellings: new Map<string, number>(), posts: [] as Post[] };
			if (!entry.posts.includes(post)) entry.posts.push(post);
			entry.spellings.set(raw, (entry.spellings.get(raw) ?? 0) + 1);
			tags.set(slug, entry);
		}
	}
	return [...tags.entries()]
		.map(([slug, { spellings, posts }]) => ({ slug, label: tagLabel(spellings), posts }))
		.sort((a, b) => b.posts.length - a.posts.length);
}

/** The most used spelling wins ("JavaScript" over "Javascript"); capitalised breaks ties. */
function tagLabel(spellings: Map<string, number>) {
	return [...spellings.entries()].sort(
		([a, countA], [b, countB]) =>
			countB - countA || a.localeCompare(b, "en", { caseFirst: "upper" }),
	)[0]![0];
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
