export type Product = {
	title: string;
	description: string;
	link: string;
	linkLabel: string;
	category: string;
};

export const company = {
	name: "ElianCodes BV",
	url: "https://eliancodes.com",
} as const;

export const products: Product[] = [
	{
		title: "Ringske",
		description:
			"A wedding planner for couples in Belgium. Guest list, QR RSVP, budget, a wedding website, and help with the Belgian marriage declaration.",
		link: "https://ringske.be",
		linkLabel: "ringske.be",
		category: "Product",
	},
	{
		title: "Rolleke",
		description: "An event photography platform.",
		link: "https://rolleke.be",
		linkLabel: "rolleke.be",
		category: "Product",
	},
	{
		title: "Kluut!",
		description: "A game I've been building.",
		link: "https://eliancodes.com/projects/kluut",
		linkLabel: "eliancodes.com",
		category: "Product",
	},
];
