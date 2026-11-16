import { vi } from "vitest";

/**
 * Tests run outside Astro, so `astro:content` doesn't exist. Tests fill the fake collections
 * with `setCollection()` from ./fixtures; getCollection reads them back.
 */
vi.mock("astro:content", () => ({
	getCollection: async (name: string, filter?: (entry: unknown) => boolean) => {
		const all = (globalThis as { __collections?: Record<string, unknown[]> }).__collections ?? {};
		return (all[name] ?? []).filter((entry) => (filter ? filter(entry) : true));
	},
}));
