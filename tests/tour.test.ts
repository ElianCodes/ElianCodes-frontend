import { describe, expect, it } from "vitest";
import { parsePartialDate } from "../src/lib/dates";
import { getNextStage, getStats, groupByYear, isStage } from "../src/lib/tour";
import { stop } from "./fixtures";

describe("parsePartialDate", () => {
	it("accepts year, month and day precision", () => {
		expect(parsePartialDate("2025")).toEqual({ year: 2025, month: undefined, day: undefined });
		expect(parsePartialDate("2025-10")).toEqual({ year: 2025, month: 10, day: undefined });
		expect(parsePartialDate("2025-10-07")).toEqual({ year: 2025, month: 10, day: 7 });
	});

	it("accepts what YAML turns dates into", () => {
		expect(parsePartialDate(2024)).toEqual({ year: 2024, month: undefined, day: undefined });
		expect(parsePartialDate(new Date("2024-02-03"))).toEqual({ year: 2024, month: 2, day: 3 });
	});

	it("rejects anything else", () => {
		expect(parsePartialDate("Oct 2025")).toBeUndefined();
		expect(parsePartialDate("2025-1")).toBeUndefined();
	});
});

describe("getNextStage", () => {
	const now = new Date("2026-11-16T12:00:00Z");

	it("picks the soonest future stage from a newest-first list", () => {
		const stages = [
			stop("far", { date: "2027-06-01" }),
			stop("soon", { date: "2027-01-20" }),
			stop("past", { date: "2026-10-01" }),
		];
		expect(getNextStage(stages, now)?.id).toBe("soon");
	});

	it("treats a month-only date as the start of that month", () => {
		// CMS Conf is "2026-11": it started before the 16th, so it's no longer up next.
		expect(getNextStage([stop("cms", { date: "2026-11" })], now)).toBeUndefined();
		expect(getNextStage([stop("dec", { date: "2026-12" })], now)?.id).toBe("dec");
	});

	it("ignores stages without a date", () => {
		expect(getNextStage([stop("undated")], now)).toBeUndefined();
	});
});

describe("getStats", () => {
	it("counts countries and continents, but not online events", () => {
		const stats = getStats([
			stop("a", { country: "BE", date: "2022-04" }),
			stop("b", { country: "BE", date: "2023" }),
			stop("c", { country: "US", date: "2025" }),
			stop("d", { country: "online", date: "2024" }),
		]);
		expect(stats).toEqual({ stages: 4, countries: 2, continents: 2, firstYear: 2022 });
	});
});

describe("groupByYear", () => {
	it("groups stops by year with unique places", () => {
		const years = groupByYear([
			stop("a", { date: "2025-10", city: "Milan", country: "IT" }),
			stop("b", { date: "2025-04", city: "Milan", country: "IT" }),
			stop("c", { date: "2024", country: "online" }),
		]);
		expect(years.map((y) => [y.year, y.stops.length, y.countries, y.places])).toEqual([
			[2025, 2, 1, ["Milan"]],
			[2024, 1, 0, ["Online"]],
		]);
	});
});

describe("isStage", () => {
	it("counts talks, keynotes, panels and workshops, not streams or podcasts", () => {
		expect(isStage(stop("w", { kind: "workshop" }))).toBe(true);
		expect(isStage(stop("s", { kind: "stream" }))).toBe(false);
	});
});
