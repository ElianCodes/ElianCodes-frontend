import { db, Sponsorship } from 'astro:db';

export default async function seed() {
	await db.insert(Sponsorship).values([
		{
			name: "Biome",
			avatar: "https://avatars.githubusercontent.com/u/140182603?s=200&v=4",
			link: "https://github.com/biomejs",
			description: "Why it's awesome",
		},
		{
			name: "Vite",
			avatar: "https://avatars.githubusercontent.com/u/65625612?s=200&v=4",
			link: "https://github.com/vitejs",
			description: "Why it's awesome",
		},
		{
			name: "Evan You",
			avatar: "https://avatars.githubusercontent.com/u/499550?v=4",
			link: "https://github.com/yyx990803",
			description: "Why it's awesome",
		},
		{
			name: "Josh Goldberg",
			avatar: "https://avatars.githubusercontent.com/u/3335181?v=4",
			link: "https://github.com/JoshuaKGoldberg",
			description: "Why it's awesome",
		},
		{
			name: "Anthony Fu",
			avatar: "https://avatars.githubusercontent.com/u/11247099?v=4",
			link: "https://github.com/antfu",
			description: "Why it's awesome",
		},
	]);
}
