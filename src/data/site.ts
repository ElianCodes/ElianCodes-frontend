export interface NavLink {
	label: string;
	href: string;
}

export const site = {
	name: "Elian Codes",
	author: "Elian Van Cutsem",
	email: "hello@elian.codes",
	description:
		"Elian Van Cutsem: full-stack developer, speaker, Astro maintainer and all-around internet troublemaker.",
};

// Main navigation. Videos is left out until we decide whether it stays a page
// or merges into Events as replays.
export const nav: NavLink[] = [
	{ label: "Articles", href: "/blog" },
	{ label: "Events", href: "/events" },
	{ label: "Links", href: "/links" },
];

export const bookMe: NavLink = { label: "Book me", href: "/events#kit" };

export const socials: NavLink[] = [
	{ label: "GitHub", href: "https://github.com/ElianCodes" },
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/elianvancutsem" },
	{ label: "Bluesky", href: "https://bsky.app/profile/elian.codes" },
	{ label: "RSS", href: "/blog.xml" },
];

export const tickerItems: string[] = [
	"Now booking talks & workshops for 2027",
	"Guaranteed fun on stage",
	"Unethical AI, live",
	"Puns included at no extra cost",
	"hello@elian.codes",
];
