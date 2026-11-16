/**
 * schema.org structured data (JSON-LD) for search engines. The Person is defined once in
 * BaseHead (`<site>/#person`); everything here points to it by @id.
 */
import { site } from "../data/site";
import { isOnline, type Stop } from "./tour";

export const personId = (origin: URL) => `${new URL("/", origin)}#person`;

/** Partial dates stay partial: "2024-02" is valid ISO 8601 and better than a made-up day. */
function isoDate(stop: Stop) {
	const d = stop.data.date;
	if (!d) return undefined;
	const pad = (n: number) => String(n).padStart(2, "0");
	return [String(d.year), d.month && pad(d.month), d.month && d.day && pad(d.day)]
		.filter(Boolean)
		.join("-");
}

/** One stage from the tour log as a schema.org Event with Elian as performer. */
export function stopEvent(stop: Stop, origin: URL) {
	const online = isOnline(stop);
	return {
		"@context": "https://schema.org",
		"@type": "Event",
		name: stop.data.talk ? `${stop.data.talk} · ${stop.data.event}` : stop.data.event,
		startDate: isoDate(stop),
		eventStatus: "https://schema.org/EventScheduled",
		eventAttendanceMode: online
			? "https://schema.org/OnlineEventAttendanceMode"
			: "https://schema.org/OfflineEventAttendanceMode",
		location: online
			? { "@type": "VirtualLocation", url: stop.data.link ?? new URL("/events", origin).href }
			: {
					"@type": "Place",
					name: stop.data.city ?? stop.data.event,
					address: {
						"@type": "PostalAddress",
						addressLocality: stop.data.city,
						addressCountry: stop.data.country,
					},
				},
		url: stop.data.link,
		description: stop.data.abstract,
		performer: { "@type": "Person", "@id": personId(origin), name: site.author },
		...(stop.data.replay && {
			recordedIn: { "@type": "CreativeWork", url: stop.data.replay },
		}),
	};
}

/** Breadcrumb trail, e.g. Home › Articles › Post. Pass [name, path] pairs from the top down. */
export function breadcrumbs(trail: [string, string][], origin: URL) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: trail.map(([name, path], i) => ({
			"@type": "ListItem",
			position: i + 1,
			name,
			item: new URL(path, origin).href,
		})),
	};
}

/** A listing page (blog, tag, talks) and the pages it links to, in order. */
export function collectionPage(
	{ name, path, description }: { name: string; path: string; description: string },
	items: { name: string; path: string }[],
	origin: URL,
) {
	return {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name,
		description,
		url: new URL(path, origin).href,
		isPartOf: { "@type": "WebSite", url: new URL("/", origin).href },
		mainEntity: {
			"@type": "ItemList",
			numberOfItems: items.length,
			itemListElement: items.map((item, i) => ({
				"@type": "ListItem",
				position: i + 1,
				name: item.name,
				url: new URL(item.path, origin).href,
			})),
		},
	};
}
