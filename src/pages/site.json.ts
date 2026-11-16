import type { APIRoute } from "astro";
import { bookMe, site } from "../data/site";
import { getPosts, postUrl } from "../lib/posts";
import { getTalks, talkUrl } from "../lib/talks";
import {
	getNextStage,
	getStages,
	getStats,
	getTour,
	monthYearLabel,
	placeLabel,
} from "../lib/tour";

/**
 * Machine-readable index of the site, built at build time. The WebMCP tools in
 * src/scripts/webmcp.ts read it, and it's listed in /.well-known/api-catalog.
 */
export const GET: APIRoute = async ({ site: origin }) => {
	const base = origin ?? new URL("https://www.elian.codes");
	const abs = (path: string) => new URL(path, base).href;

	const [posts, talks, tour] = await Promise.all([getPosts(), getTalks(), getTour()]);
	const stages = getStages(tour);
	const next = getNextStage(stages);

	const body = {
		name: site.name,
		author: site.author,
		description: site.description,
		contact: { email: site.email, bookingPage: abs(bookMe.href) },
		stats: getStats(stages),
		nextStage: next
			? {
					event: next.data.event,
					place: placeLabel(next),
					date: monthYearLabel(next),
					link: next.data.link,
				}
			: null,
		talks: talks.map((talk) => ({
			title: talk.title,
			url: abs(talkUrl(talk)),
			abstract: talk.abstract ?? null,
			bookable: talk.bookable,
			formats: talk.formats,
			timesGiven: talk.stops.length,
			recordings: talk.stops.flatMap((s) =>
				s.data.replay ? [{ event: s.data.event, url: s.data.replay }] : [],
			),
		})),
		articles: posts.map((post) => ({
			title: post.data.title,
			url: abs(postUrl(post)),
			markdown: abs(`${postUrl(post)}.md`),
			description: post.data.description,
			tags: post.data.tags,
			published: post.data.pubDate.toISOString().slice(0, 10),
		})),
	};

	return new Response(JSON.stringify(body), {
		headers: { "Content-Type": "application/json; charset=utf-8" },
	});
};
