import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const dateish = z.date().or(z.string().transform((str) => new Date(str)));

// Articles: one markdown file per post.
const posts = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			author: z.string(),
			tags: z.array(z.string()),
			description: z.string(),
			pubDate: dateish,
			updatedDate: dateish.optional(),
			imgUrl: image(),
			draft: z.boolean().optional().default(false),
		}),
});

// Events: every stage, meetup or stream, past and upcoming.
const events = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/data/events" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			abstract: z.string(),
			date: dateish,
			link: z.string(),
			name: z.string(),
			img: image(),
		}),
});

// Talks: the talks themselves, referenced by events where they were given.
const talks = defineCollection({
	loader: file("./src/data/talks.json"),
	schema: z.object({
		id: z.string(),
		title: z.string(),
		abstract: z.string().optional(),
		recording: z.url().optional(),
		slides: z.url().optional(),
	}),
});

// Quotes: things people actually said about a talk or event.
const quotes = defineCollection({
	loader: file("./src/data/quotes.json"),
	schema: z.object({
		id: z.string(),
		quote: z.string(),
		author: z.string(),
		role: z.string().optional(),
		link: z.url().optional(),
	}),
});

export const collections = { posts, events, talks, quotes };
