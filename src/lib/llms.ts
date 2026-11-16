/**
 * llms.txt (https://llmstxt.org) and llms-full.txt, generated from the same data as the site so
 * they never go stale: who Elian is, current stats, every talk and every article.
 */
import { allLinks, bio, lineup, organizedStages, site } from "../data/site";
import { postMarkdown, talkMarkdown } from "./markdown";
import { getPosts, plainTitle, postUrl } from "./posts";
import { getTalks, talkUrl } from "./talks";
import { getNextStage, getStages, getStats, getTour, monthYearLabel, placeLabel } from "./tour";

const ORIGIN = "https://www.elian.codes";

async function load() {
	const [posts, talks, tour] = await Promise.all([getPosts(), getTalks(), getTour()]);
	const stages = getStages(tour);
	return { posts, talks, stats: getStats(stages), next: getNextStage(stages) };
}

function intro({ stats, next }: Awaited<ReturnType<typeof load>>) {
	return [
		`# ${site.name}`,
		"",
		`> The personal site of ${site.author}: ${lineup.map((job) => (job.at ? `${job.role} at ${job.at}` : job.role)).join(", ")}. Speaker with ${stats.stages} talks, panels and workshops in ${stats.countries} countries on ${stats.continents} continents since ${stats.firstYear}.`,
		"",
		bio,
		"",
		`Co-organizes: ${organizedStages.map((stage) => stage.name).join(", ")}.`,
		next
			? `Next on stage: ${next.data.event}, ${placeLabel(next)} (${monthYearLabel(next)}).`
			: "Currently booking talks and workshops.",
		`Contact: ${site.email}. Speaker kit: ${ORIGIN}/events#kit`,
		"",
	];
}

export async function llmsTxt() {
	const data = await load();
	const { posts, talks } = data;
	return [
		...intro(data),
		"Every article and talk also exists as plain markdown: add `.md` to its URL.",
		"",
		"## Main pages",
		"",
		`- [Home](${ORIGIN}/): who Elian is and what he's working on now`,
		`- [Events](${ORIGIN}/events): the full tour log, upcoming stages and the speaker kit`,
		`- [Talks](${ORIGIN}/talks): every talk and workshop, where it was given, and recordings`,
		`- [Articles](${ORIGIN}/blog): ${posts.length} articles on Astro, web development, tooling and more`,
		`- [Links](${ORIGIN}/links): all profiles`,
		"",
		"## Talks",
		"",
		...talks.map(
			(talk) =>
				`- [${talk.title}](${ORIGIN}${talkUrl(talk)}.md)${talk.bookable ? " (bookable)" : ""}${talk.abstract ? `: ${talk.abstract}` : ""}`,
		),
		"",
		"## Articles",
		"",
		...posts.map(
			(post) =>
				`- [${plainTitle(post.data.title)}](${ORIGIN}${postUrl(post)}.md) (${post.data.pubDate.toISOString().slice(0, 10)}): ${post.data.description}`,
		),
		"",
		"## Optional",
		"",
		`- [Everything in one file](${ORIGIN}/llms-full.txt): all talks and the full text of every article`,
		`- [JSON index](${ORIGIN}/site.json): articles, talks, stats and contact details`,
		`- [RSS](${ORIGIN}/blog.xml)`,
		...allLinks
			.filter((link) => link.href.startsWith("https://"))
			.map((link) => `- [${link.label}](${link.href})`),
		"",
	].join("\n");
}

export async function llmsFullTxt() {
	const data = await load();
	const { posts, talks } = data;
	return [
		...intro(data),
		"This file holds every talk and the full text of every article, newest first.",
		"Guidance: cite the individual article or talk URL; articles are Elian's own opinions and tutorials.",
		"",
		"# Talks",
		"",
		...talks.map((talk) => talkMarkdown(talk).replace(/^# /, "## ").replace(/\n## /g, "\n### ")),
		"# Articles",
		"",
		...posts.map((post) => postMarkdown(post)),
	].join("\n");
}
