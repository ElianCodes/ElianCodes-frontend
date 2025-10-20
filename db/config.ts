import { defineDb, defineTable, column } from 'astro:db';

const UserLocation = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    city: column.text(),
    country: column.text(),
    countryFlag: column.text(),
    isHome: column.boolean({ default: false }),
    isTravelling: column.boolean({ default: false }),
    currentEvent: column.text({ optional: true }),
    updatedAt: column.date({ default: new Date() })
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    UserLocation
  }
});
