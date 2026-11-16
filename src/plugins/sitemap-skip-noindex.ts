import { existsSync, readFileSync } from "node:fs";

/**
 * Sitemap filter: leave out every page whose built HTML says `noindex`, so the sitemap and
 * the robots meta tag can never disagree. Runs after the build (build.format: "file").
 */
export function isIndexable(page: string, outDir = "dist") {
	// Decode, so "/blog/tags/google%20fonts" finds "google fonts.html" on disk.
	const pathname = decodeURIComponent(new URL(page).pathname);
	const file = `${outDir}${pathname === "/" ? "/index" : pathname.replace(/\/$/, "")}.html`;
	if (!existsSync(file)) return true;
	return !/<meta name="robots" content="[^"]*noindex/.test(readFileSync(file, "utf8"));
}
