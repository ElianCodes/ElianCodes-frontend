import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			author: z.string(),
			tags: z.array(z.string()),
			description: z.string(),
			pubDate: z.string().transform((str) => new Date(str)),
			imgUrl: image(),
			draft: z.boolean().optional().default(false),
		}),
});

const eventCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			abstract: z.string(),
			date: z.date().or(z.string().transform((str) => new Date(str))),
			link: z.string(),
			name: z.string(),
			img: image(),
		}),
});

export const collections = {
	blog: blogCollection,
	events: eventCollection,
};
