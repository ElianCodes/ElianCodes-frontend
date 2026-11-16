import { getCollection } from "astro:content";
import { getTour, isOnline, type Stop } from "./tour";

/** Kinds that count as giving a talk (panels, streams and podcasts don't get a talk page). */
const TALK_KINDS = new Set(["talk", "keynote", "workshop"]);

export interface Talk {
	slug: string;
	title: string;
	abstract?: string;
	formats: string[];
	/** Listed in the speaker kit, so organizers can book it. */
	bookable: boolean;
	/** Every time it was given, newest first. */
	stops: Stop[];
	countries: number;
}

/** "Astro: All Hands On" and "astro all hands on" are the same talk. */
export function normalizeTitle(title: string) {
	return title
		.toLowerCase()
		.replace(/['’]/g, "")
		.replace(/[^a-z0-9]+/g, " ")
		.trim();
}

export function slugify(title: string) {
	return normalizeTitle(title).replace(/ /g, "-");
}

export function talkUrl(talk: Pick<Talk, "slug">) {
	return `/talks/${talk.slug}`;
}

/**
 * One entry per talk: the bookable talks from talks.yaml, plus every other title in the tour
 * log. Tour entries are matched to a talk by title or alias.
 */
export async function getTalks(): Promise<Talk[]> {
	const [catalog, tour] = await Promise.all([getCollection("talks"), getTour()]);
	const byKey = new Map<string, Talk>();
	const talks: Talk[] = [];

	for (const entry of catalog.sort((a, b) => a.data.order - b.data.order)) {
		const talk: Talk = {
			slug: entry.id,
			title: entry.data.title,
			abstract: entry.data.abstract,
			formats: entry.data.formats,
			bookable: true,
			stops: [],
			countries: 0,
		};
		talks.push(talk);
		for (const title of [entry.data.title, ...entry.data.aliases]) {
			byKey.set(normalizeTitle(title), talk);
		}
	}

	for (const stop of tour) {
		if (!stop.data.talk || !TALK_KINDS.has(stop.data.kind)) continue;
		const key = normalizeTitle(stop.data.talk);
		let talk = byKey.get(key);
		if (!talk) {
			talk = {
				slug: slugify(stop.data.talk),
				title: stop.data.talk,
				formats: [],
				bookable: false,
				stops: [],
				countries: 0,
			};
			byKey.set(key, talk);
			talks.push(talk);
		}
		talk.abstract ??= stop.data.abstract;
		talk.stops.push(stop);
	}

	for (const talk of talks) {
		talk.countries = new Set(
			talk.stops.filter((s) => !isOnline(s) && s.data.country).map((s) => s.data.country),
		).size;
	}
	return talks;
}

/** Talk page for a tour entry, if it has one. */
export function talkForStop(talks: Talk[], stop: Stop) {
	return talks.find((talk) => talk.stops.some((s) => s.id === stop.id));
}
