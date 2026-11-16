import { type CollectionEntry, getCollection } from "astro:content";
import type { ImageMetadata } from "astro";

export type Stop = CollectionEntry<"tour">;

const STAGE_KINDS = new Set(["talk", "keynote", "panel", "workshop"]);

// Continent per country code, for the "continents" stat. Add a line when a new country shows up.
const CONTINENT: Record<string, string> = {
	BE: "Europe",
	CH: "Europe",
	DE: "Europe",
	FR: "Europe",
	GB: "Europe",
	HR: "Europe",
	IT: "Europe",
	NL: "Europe",
	PL: "Europe",
	PT: "Europe",
	RS: "Europe",
	SG: "Asia",
	VN: "Asia",
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function isStage(stop: Stop) {
	return STAGE_KINDS.has(stop.data.kind);
}

export function isOnline(stop: Stop) {
	return stop.data.country === "online";
}

/** Sort key: year, then month, then day; unknown parts sort last within their year. */
function sortKey(stop: Stop) {
	const d = stop.data.date;
	if (!d) return 0;
	return d.year * 10_000 + (d.month ?? 0) * 100 + (d.day ?? 0);
}

export function monthLabel(stop: Stop) {
	const month = stop.data.date?.month;
	return month ? MONTHS[month - 1] : "—";
}

export function monthYearLabel(stop: Stop) {
	const d = stop.data.date;
	if (!d) return "—";
	return d.month ? `${MONTHS[d.month - 1]} ${d.year}` : String(d.year);
}

export function placeLabel(stop: Stop) {
	if (isOnline(stop)) return "Online";
	return stop.data.city ?? "—";
}

export async function getTour() {
	const all = await getCollection("tour");
	return all.sort((a, b) => sortKey(b) - sortKey(a));
}

export function getStages(tour: Stop[]) {
	return tour.filter(isStage);
}

export function getBroadcasts(tour: Stop[]) {
	return tour.filter((stop) => !isStage(stop));
}

/** The next stage in the future, if any. Partial dates count as the end of their month/year. */
export function getNextStage(stages: Stop[], now = new Date()) {
	const upcoming = stages.filter((stop) => {
		const d = stop.data.date;
		if (!d) return false;
		const end = new Date(Date.UTC(d.year, d.month ? d.month - 1 : 11, d.day ?? 28));
		return end >= now;
	});
	return upcoming.at(-1);
}

export function getStats(stages: Stop[]) {
	const countries = new Set(
		stages.map((s) => s.data.country).filter((c): c is string => !!c && c !== "online"),
	);
	const continents = new Set([...countries].map((c) => CONTINENT[c]).filter(Boolean));
	const years = stages.map((s) => s.data.date?.year).filter((y): y is number => !!y);
	return {
		stages: stages.length,
		countries: countries.size,
		continents: continents.size,
		firstYear: Math.min(...years),
	};
}

export function groupByYear(stops: Stop[]) {
	const years = new Map<number, Stop[]>();
	for (const stop of stops) {
		const year = stop.data.date?.year;
		if (!year) continue;
		years.set(year, [...(years.get(year) ?? []), stop]);
	}
	return [...years.entries()].map(([year, items]) => {
		const countries = new Set(items.map((s) => s.data.country).filter((c) => c && c !== "online"));
		// Unique places per year, in tour order, for the "tour so far" columns.
		const places = [...new Set(items.map(placeLabel).filter((p) => p !== "—"))];
		return { year, stops: items, countries: countries.size, places };
	});
}

const photos = import.meta.glob<{ default: ImageMetadata }>(
	"../assets/events/*.{jpg,jpeg,png,webp}",
	{
		eager: true,
	},
);

export function stopPhoto(stop: Stop) {
	if (!stop.data.photo) return undefined;
	return photos[`../assets/events/${stop.data.photo}`]?.default;
}
