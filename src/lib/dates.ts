export interface PartialDate {
	year: number;
	month?: number;
	day?: number;
}

/**
 * Parse "YYYY", "YYYY-MM" or "YYYY-MM-DD" (YAML may hand us a number or a Date) into its parts.
 * Returns undefined for anything else.
 */
export function parsePartialDate(value: string | number | Date): PartialDate | undefined {
	const raw = value instanceof Date ? value.toISOString().slice(0, 10) : String(value);
	const match = raw.match(/^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/);
	if (!match) return undefined;
	const [, year, month, day] = match;
	return {
		year: Number(year),
		month: month ? Number(month) : undefined,
		day: day ? Number(day) : undefined,
	};
}
