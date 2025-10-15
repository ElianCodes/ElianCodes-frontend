import { db, UserLocation } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// Insert default home location
	await db.insert(UserLocation).values({
		id: 1,
		city: 'Ghent',
		country: 'Belgium',
		countryFlag: '🇧🇪',
		isHome: true,
		isTravelling: false,
		updatedAt: new Date()
	});
}
