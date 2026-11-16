import type { PartialDate } from "../src/lib/dates";
import { parsePartialDate } from "../src/lib/dates";
import type { Stop } from "../src/lib/tour";

type StopData = Omit<Stop["data"], "date"> & { date?: string };

/** Fill a fake content collection (see ./setup.ts). */
export function setCollection(name: string, entries: unknown[]) {
	const store = globalThis as { __collections?: Record<string, unknown[]> };
	store.__collections = { ...store.__collections, [name]: entries };
}

/** A tour entry the way the content layer hands it to us. */
export function stop(id: string, data: Partial<StopData> = {}): Stop {
	const { date, ...rest } = data;
	return {
		id,
		collection: "tour",
		data: {
			event: id,
			kind: "talk",
			...rest,
			date: date ? (parsePartialDate(date) as PartialDate) : undefined,
		},
	} as Stop;
}
