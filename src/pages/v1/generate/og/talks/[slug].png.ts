import type { APIRoute, GetStaticPaths } from "astro";
import { renderOg } from "../../../../../lib/og";
import { getTalks, type Talk } from "../../../../../lib/talks";

export const getStaticPaths = (async () => {
	const talks = await getTalks();
	return talks.map((talk) => ({ params: { slug: talk.slug }, props: { talk } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute<{ talk: Talk }> = ({ props }) => {
	const { talk } = props;
	const countries =
		talk.countries > 0
			? ` in ${talk.countries} ${talk.countries === 1 ? "country" : "countries"}`
			: "";
	const given = talk.stops.length > 0 ? `Given ${talk.stops.length}×${countries}` : "New talk";
	return renderOg({
		title: talk.title,
		eyebrow: talk.bookable ? "cat ./talks/bookable" : "cat ./talks/archive",
		footer: [given, ...talk.formats].join(" · "),
	});
};
