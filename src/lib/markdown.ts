/**
 * Plain-markdown versions of articles and talks, for /blog/<slug>.md, /talks/<slug>.md and
 * llms-full.txt. Shared so all three stay identical.
 */
import { site } from "../data/site";
import { plainTitle, type Post, postUrl } from "./posts";
import type { Talk } from "./talks";
import { talkUrl } from "./talks";
import { isOnline, monthYearLabel, placeLabel } from "./tour";

const ORIGIN = "https://www.elian.codes";

export function postMarkdown(post: Post) {
	const { data } = post;
	// Posts already open with "# Title"; don't repeat it.
	const lines = (post.body ?? "").replace(/\r\n?/g, "\n").split("\n");
	const first = lines.findIndex((line) => line.trim() !== "");
	if (first !== -1 && /^#\s/.test(lines[first] ?? "")) lines.splice(0, first + 1);
	const body = lines.join("\n").replace(/^\n+/, "");

	const header = [
		`# ${plainTitle(data.title)}`,
		"",
		`**Author:** ${data.author}`,
		`**Published:** ${data.pubDate.toISOString().slice(0, 10)}`,
		...(data.updatedDate ? [`**Updated:** ${data.updatedDate.toISOString().slice(0, 10)}`] : []),
		`**Tags:** ${data.tags.join(", ")}`,
		`**Description:** ${data.description}`,
		`**URL:** ${ORIGIN}${postUrl(post)}`,
		"",
		"---",
		"",
	].join("\n");
	return `${header}${body.trimEnd()}\n`;
}

export function talkMarkdown(talk: Talk) {
	const lines = [
		`# ${talk.title}`,
		"",
		`**Speaker:** ${site.author}`,
		`**Status:** ${talk.bookable ? "Bookable: organizers can invite Elian to give this talk" : "Archived"}`,
		...(talk.formats.length > 0 ? [`**Formats:** ${talk.formats.join(", ")}`] : []),
		`**Given:** ${talk.stops.length} ${talk.stops.length === 1 ? "time" : "times"}${talk.countries > 0 ? ` in ${talk.countries} ${talk.countries === 1 ? "country" : "countries"}` : ""}`,
		`**URL:** ${ORIGIN}${talkUrl(talk)}`,
		"",
		"---",
		"",
	];
	if (talk.abstract) lines.push("## Abstract", "", talk.abstract, "");
	if (talk.stops.length > 0) {
		lines.push("## Where it was given", "");
		for (const stop of talk.stops) {
			const place = isOnline(stop)
				? "Online"
				: `${placeLabel(stop)}${stop.data.country ? `, ${stop.data.country}` : ""}`;
			const event = stop.data.link ? `[${stop.data.event}](${stop.data.link})` : stop.data.event;
			const replay = stop.data.replay ? ` · [recording](${stop.data.replay})` : "";
			lines.push(`- ${monthYearLabel(stop)}: ${event}, ${place}${replay}`);
		}
		lines.push("");
	}
	if (talk.bookable) {
		lines.push(
			"## Booking",
			"",
			`Email ${site.email} or see the speaker kit: ${ORIGIN}/events#kit`,
			"",
		);
	}
	return lines.join("\n");
}
