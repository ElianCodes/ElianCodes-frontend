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
	{ label: "Talks", href: "/talks" },
	{ label: "Links", href: "/links" },
];

export const bookMe: NavLink = { label: "Book me", href: "/events#kit" };

export const socials: NavLink[] = [
	{ label: "GitHub", href: "https://github.com/ElianCodes" },
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/elianvancutsem" },
	{ label: "Bluesky", href: "https://bsky.app/profile/elian.codes" },
	{ label: "RSS", href: "/blog.xml" },
];

/** Everywhere else, for /links. */
export const allLinks: NavLink[] = [
	{ label: "GitHub", href: "https://github.com/ElianCodes" },
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/elianvancutsem" },
	{ label: "Bluesky", href: "https://bsky.app/profile/elian.codes" },
	{ label: "X (formerly Twitter)", href: "https://x.com/eliancodes" },
	{ label: "Mastodon", href: "https://webtoo.ls/@eliancodes" },
	{ label: "YouTube", href: "https://youtube.com/@eliancodes" },
	{ label: "Twitch", href: "https://twitch.tv/eliancodes" },
	{ label: "Dev.to", href: "https://dev.to/eliancodes" },
	{ label: "Instagram", href: "https://instagram.com/eliancodes" },
	{ label: "Threads", href: "https://threads.net/eliancodes" },
	{ label: "TikTok", href: "https://tiktok.com/@eliancodes" },
	{ label: "Facebook", href: "https://www.facebook.com/profile.php?id=61575240867661" },
	{ label: "Sessionize", href: "https://sessionize.com/eliancodes" },
];

export const sessionize = "https://sessionize.com/eliancodes";
export const sponsor = "https://github.com/sponsors/ElianCodes";

/** "What's keeping me busy", biggest first. */
export const lineup = [
	{ role: "CTO", at: "Vulpo", note: "Ghent software studio", href: "https://vulpo.be" },
	{ role: "Lead DevRel", at: "React Bricks", note: "Visual CMS for React", href: "https://reactbricks.com" },
	{ role: "Astro maintainer", note: "Ex-core, since 2023", href: "https://astro.build" },
];

/** Stages I co-organize. */
export const organizedStages: { name: string; city?: string; href?: string }[] = [
	{ name: "BeJS", city: "Brussels", href: "https://bejs.io" },
	{ name: "React Brussels", city: "Brussels", href: "https://react.brussels" },
	{ name: "React Paris", city: "Paris", href: "https://react.paris" },
	{ name: "React Africa" },
	{ name: "Devs.gent", city: "Ghent", href: "https://devs.gent" },
];

export const bio =
	"Elian Van Cutsem is a full-stack developer, creative technologist and all-around internet troublemaker from Belgium. He's CTO at Vulpo, Lead DevRel at React Bricks and an Astro maintainer, and co-organizes BeJS, React Brussels, React Paris, React Africa and Devs.gent. His talks combine technical insight with a strong dose of creative chaos.";

export const tickerItems: string[] = [
	"Now booking talks & workshops for 2027",
	"Guaranteed fun on stage",
	"Unethical AI, live",
	"Puns included at no extra cost",
	"hello@elian.codes",
];
