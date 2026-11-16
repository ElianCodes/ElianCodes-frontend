import { beforeEach, describe, expect, it } from "vitest";
import { getTagIndex, type Post, tagSlug } from "../src/lib/posts";
import { getTalks, normalizeTitle, slugify, talkForStop } from "../src/lib/talks";
import { setCollection, stop } from "./fixtures";

describe("talk titles", () => {
	it("ignores case, punctuation and apostrophes", () => {
		expect(normalizeTitle("Astro: All Hands On")).toBe(normalizeTitle("astro all hands on"));
		expect(slugify("Beyond Boring: Unlocking the Web's Wild Side")).toBe(
			"beyond-boring-unlocking-the-webs-wild-side",
		);
	});
});

describe("getTalks", () => {
	beforeEach(() => {
		setCollection("talks", [
			{
				id: "cms",
				data: {
					order: 1,
					title: "Astro CMS",
					abstract: "Short.",
					formats: ["Talk"],
					aliases: ["Astro CMS: the long title"],
				},
			},
		]);
		setCollection("tour", [
			stop("cms-conf", {
				date: "2026-11",
				talk: "Astro CMS: The Long Title",
				country: "PL",
				city: "Gdynia",
			}),
			stop("fosdem", { date: "2024-02", talk: "All Things Astro", country: "BE" }),
			stop("cityjs", { date: "2023-11", talk: "All things Astro", country: "DE" }),
			stop("panel", { date: "2023", talk: "Some panel", kind: "panel" }),
		]);
	});

	it("matches tour entries to bookable talks by alias", async () => {
		const talks = await getTalks();
		const cms = talks.find((t) => t.slug === "cms");
		expect(cms?.bookable).toBe(true);
		expect(cms?.stops.map((s) => s.id)).toEqual(["cms-conf"]);
	});

	it("merges repeat runs of the same talk and skips panels", async () => {
		const talks = await getTalks();
		const astro = talks.find((t) => t.slug === "all-things-astro");
		expect(astro?.stops).toHaveLength(2);
		expect(astro?.countries).toBe(2);
		expect(talks.some((t) => t.title === "Some panel")).toBe(false);
		expect(talkForStop(talks, stop("cityjs"))?.slug).toBe("all-things-astro");
	});
});

describe("tags", () => {
	const post = (id: string, tags: string[]) => ({ id, data: { tags } }) as unknown as Post;

	it("keeps old lowercase slugs and merges known aliases", () => {
		expect(tagSlug(" JavaScript ")).toBe("javascript");
		expect(tagSlug("Webdevelopment")).toBe("web development");
	});

	it("labels a merged tag with its most used spelling", () => {
		const index = getTagIndex([
			post("a", ["Web development", "JavaScript"]),
			post("b", ["web development", "Javascript"]),
			post("c", ["Webdevelopment", "JavaScript", "javascript"]),
		]);
		const web = index.find((t) => t.slug === "web development");
		const js = index.find((t) => t.slug === "javascript");
		expect(web?.posts).toHaveLength(3);
		expect(js?.label).toBe("JavaScript");
		expect(js?.posts).toHaveLength(3);
	});
});
