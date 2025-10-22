import { column, defineDb, defineTable, NOW } from 'astro:db';


export const Sponsorship = defineTable({
	columns: {
		name: column.text(),
		avatar: column.text(),
		link: column.text(),
		description: column.text(),
		since: column.date({ default: NOW }),
		ended_at: column.date({ optional: true }),
		contribution_amount: column.number({ optional: true }),
	},
});

export default defineDb({
  tables: {
		Sponsorship,
	}
});
