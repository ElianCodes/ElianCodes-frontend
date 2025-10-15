import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import { db, UserLocation } from 'astro:db';

export const server = {
  updateLocation: defineAction({
    accept: 'form',
    input: z.object({
      city: z.string().min(1, 'City is required'),
      country: z.string().min(1, 'Country is required'),
      countryFlag: z.string().min(1, 'Country flag is required'),
      isTravelling: z.boolean().optional().default(false),
      currentEvent: z.string().optional(),
    }),
    handler: async (input) => {
      try {
        // Update location (delete and insert for simplicity since we only store one location)
        await db.delete(UserLocation);
        await db.insert(UserLocation).values({
          id: 1,
          city: input.city,
          country: input.country,
          countryFlag: input.countryFlag,
          isHome: !input.isTravelling,
          isTravelling: input.isTravelling,
          currentEvent: input.currentEvent || null,
          updatedAt: new Date()
        });

        return {
          success: true,
          message: 'Location updated successfully',
          location: {
            city: input.city,
            country: input.country,
            countryFlag: input.countryFlag,
            isTravelling: input.isTravelling,
            currentEvent: input.currentEvent
          }
        };
      } catch (error) {
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to update location'
        });
      }
    }
  }),

  getCurrentLocation: defineAction({
    input: z.object({}),
    handler: async () => {
      try {
        const locations = await db.select().from(UserLocation).limit(1);
        const location = locations[0] || null;

        return {
          success: true,
          location
        };
      } catch (error) {
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to get current location'
        });
      }
    }
  })
};
