import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { parsePartialDate } from "./lib/dates";

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
// Tour log: every stage, panel, stream and podcast (src/data/tour.yaml).
// Dates may be partial ("2025", "2025-10") when the exact day isn't known.
const partialDate = z.union([z.string(), z.number(), z.date()]).transform((value, ctx) => {
	const parsed = parsePartialDate(value);
	if (!parsed) {
		ctx.addIssue({
			code: "custom",
			message: `Invalid date "${String(value)}", use YYYY, YYYY-MM or YYYY-MM-DD`,
		});
		return z.NEVER;
	}
	return parsed;
});

const tour = defineCollection({
	loader: file("./src/data/tour.yaml"),
	schema: z.object({
		date: partialDate.optional(),
		event: z.string(),
		city: z.string().optional(),
		country: z.union([z.literal("online"), z.string().length(2)]).optional(),
		kind: z.enum(["talk", "keynote", "panel", "workshop", "stream", "podcast"]),
		talk: z.string().optional(),
		abstract: z.string().optional(),
		link: z.url().optional(),
		replay: z.url().optional(),
		photo: z.string().optional(),
	}),
});

// Talks organizers can book (src/data/talks.yaml). Tour entries whose `talk` matches the title
// or one of the aliases (case and punctuation ignored) show up on that talk's page.
const talks = defineCollection({
	loader: file("./src/data/talks.yaml"),
	schema: z.object({
		order: z.number(),
		title: z.string(),
		abstract: z.string(),
		formats: z.array(z.string()),
		aliases: z.array(z.string()).optional().default([]),
	}),
});

export const collections = { posts, tour, talks };
