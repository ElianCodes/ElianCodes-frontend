// Markdown twin of every talk page at /talks/<slug>.md, for agents and LLMs.
import type { APIRoute, GetStaticPaths } from "astro";
import { talkMarkdown } from "../../lib/markdown";
import { getTalks, type Talk } from "../../lib/talks";

export const getStaticPaths = (async () => {
	const talks = await getTalks();
	return talks.map((talk) => ({ params: { slug: talk.slug }, props: { talk } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute<{ talk: Talk }> = ({ props }) =>
	new Response(talkMarkdown(props.talk), {
		headers: { "Content-Type": "text/markdown; charset=utf-8" },
	});
