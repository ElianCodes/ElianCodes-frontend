// Checks every internal link and asset in the built site (dist/) resolves to a file or a
// redirect. Run after `pnpm build`: `pnpm check:links`. External links aren't checked.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const dist = new URL("../dist/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

function walk(dir) {
	return readdirSync(dir).flatMap((name) => {
		const path = join(dir, name);
		return statSync(path).isDirectory() ? walk(path) : [path];
	});
}

const redirects = new Set(
	readFileSync(join(dist, "_redirects"), "utf8")
		.split("\n")
		.map((line) => line.trim().split(/\s+/)[0])
		.filter((from) => from?.startsWith("/")),
);

function resolves(pathname) {
	const path = decodeURIComponent(pathname);
	if (redirects.has(pathname) || redirects.has(path)) return true;
	const clean = path.replace(/\/$/, "");
	return [path, `${clean}.html`, join(clean, "index.html")].some((candidate) => {
		const file = join(dist, candidate);
		return existsSync(file) && statSync(file).isFile();
	});
}

const broken = [];
const pages = walk(dist).filter((file) => file.endsWith(".html"));
for (const page of pages) {
	const html = readFileSync(page, "utf8");
	for (const [, url] of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
		if (!url.startsWith("/") || url.startsWith("//")) continue;
		const pathname = url.split(/[?#]/)[0];
		if (pathname === "/" || resolves(pathname)) continue;
		broken.push(`${relative(dist, page)} → ${url}`);
	}
}

if (broken.length > 0) {
	console.error(`✘ ${broken.length} broken internal links:\n${[...new Set(broken)].join("\n")}`);
	process.exit(1);
}
console.log(`✓ Internal links OK across ${pages.length} pages.`);
