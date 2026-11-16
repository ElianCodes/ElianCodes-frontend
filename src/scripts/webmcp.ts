/**
 * WebMCP: lets an AI agent in the visitor's browser use the site through tools instead of
 * scraping it. Does nothing in browsers without `navigator.modelContext`.
 * Data comes from /site.json (built at build time), fetched only when a tool runs.
 */

interface ToolResult {
	content: { type: "text"; text: string }[];
}

interface Tool {
	name: string;
	description: string;
	inputSchema: object;
	annotations?: { readOnlyHint?: boolean };
	execute: (input: Record<string, unknown>) => Promise<ToolResult>;
}

interface ModelContext {
	registerTool?: (tool: Tool) => unknown;
	provideContext?: (context: { tools: Tool[] }) => unknown;
}

interface SiteIndex {
	contact: { email: string; bookingPage: string };
	stats: { stages: number; countries: number; continents: number; firstYear: number };
	nextStage: { event: string; place: string; date: string; link?: string } | null;
	talks: {
		title: string;
		url: string;
		abstract: string | null;
		bookable: boolean;
		formats: string[];
		timesGiven: number;
		recordings: { event: string; url: string }[];
	}[];
	articles: {
		title: string;
		url: string;
		markdown: string;
		description: string;
		tags: string[];
		published: string;
	}[];
}

let index: Promise<SiteIndex> | undefined;
const getIndex = () => (index ??= fetch("/site.json").then((r) => r.json() as Promise<SiteIndex>));
/** Tool inputs come from an agent: take strings and numbers, ignore anything else. */
const text = (value: unknown) =>
	typeof value === "string" || typeof value === "number" ? String(value).trim() : "";

const json = (value: unknown): ToolResult => ({
	content: [{ type: "text", text: JSON.stringify(value, null, 2) }],
});

const tools: Tool[] = [
	{
		name: "search_articles",
		description:
			"Search Elian's articles by keyword (title, description and tags). Returns the newest matches with URLs; each has a plain markdown version.",
		inputSchema: {
			type: "object",
			properties: {
				query: { type: "string", description: "Keywords, e.g. 'astro content collections'." },
				limit: { type: "number", description: "Max results (default 5, max 20)." },
			},
			required: ["query"],
		},
		annotations: { readOnlyHint: true },
		async execute({ query, limit }) {
			const words = text(query).toLowerCase().split(/\s+/).filter(Boolean);
			const max = Math.min(Math.max(Number(limit) || 5, 1), 20);
			const { articles } = await getIndex();
			// Rank by how many query words match (title hits count double); newest first on ties.
			const matches = articles
				.map((article) => {
					const title = article.title.toLowerCase();
					const rest = [article.description, ...article.tags].join(" ").toLowerCase();
					const score = words.reduce(
						(sum, w) => sum + (title.includes(w) ? 2 : rest.includes(w) ? 1 : 0),
						0,
					);
					return { article, score };
				})
				.filter(({ score }) => score > 0)
				.sort((a, b) => b.score - a.score)
				.map(({ article }) => article);
			return json({ total: matches.length, results: matches.slice(0, max) });
		},
	},
	{
		name: "list_talks",
		description:
			"List Elian's conference talks and workshops: abstracts, how often each was given, recordings, and which can be booked.",
		inputSchema: {
			type: "object",
			properties: {
				bookableOnly: { type: "boolean", description: "Only talks organizers can book now." },
			},
		},
		annotations: { readOnlyHint: true },
		async execute({ bookableOnly }) {
			const { talks, stats, nextStage } = await getIndex();
			return json({
				stats,
				nextStage,
				talks: bookableOnly ? talks.filter((t) => t.bookable) : talks,
			});
		},
	},
	{
		name: "draft_speaker_invite",
		description:
			"Draft an email inviting Elian to speak. Returns the text and a mailto link for the user to review and send themselves; nothing is sent.",
		inputSchema: {
			type: "object",
			properties: {
				event: { type: "string", description: "Event name." },
				date: { type: "string", description: "Event date(s)." },
				location: { type: "string", description: "City, or 'online'." },
				talk: { type: "string", description: "Talk title you're interested in, if any." },
				audience: { type: "string", description: "Who attends and how many." },
				organizer: { type: "string", description: "Your name." },
			},
			required: ["event"],
		},
		annotations: { readOnlyHint: true },
		async execute(input) {
			const { contact } = await getIndex();
			const field = (key: string) => text(input[key]) || undefined;
			const event = field("event") ?? "our event";
			const subject = `Speaking invite: ${event}`;
			const lines = [
				"Hi Elian,",
				"",
				`We'd love to have you speak at ${event}${field("date") ? ` (${field("date")})` : ""}${field("location") ? ` in ${field("location")}` : ""}.`,
				field("talk") && `We're especially interested in "${field("talk")}".`,
				field("audience") && `Audience: ${field("audience")}.`,
				"",
				"Let us know if you're available and what you'd need from us.",
				"",
				field("organizer") ?? "",
			].filter((line): line is string => line !== undefined);
			const body = lines.join("\n");
			const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
			return json({ to: contact.email, subject, body, mailto, speakerKit: contact.bookingPage });
		},
	},
];

const modelContext = (navigator as Navigator & { modelContext?: ModelContext }).modelContext;
if (modelContext?.registerTool) {
	for (const tool of tools) modelContext.registerTool(tool);
} else if (modelContext?.provideContext) {
	modelContext.provideContext({ tools });
}
