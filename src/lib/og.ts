// Social preview images (1200×630) in the V5 "Signal" style, rendered at build time:
// satori lays out the card and turns text into SVG paths, resvg rasterises it to PNG.
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { join } from "node:path";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

const WIDTH = 1200;
const HEIGHT = 630;
const PINK = "#FF48B0";
const BLUE = "#0078BF";
const INK = "#111111";

const require = createRequire(import.meta.url);
const fontFile = (pkg: string, file: string) =>
	readFile(join(require.resolve(`${pkg}/package.json`), "..", "files", file));

const [display, body, mono, avatar] = await Promise.all([
	fontFile("@fontsource/big-shoulders-display", "big-shoulders-display-latin-900-normal.woff"),
	fontFile("@fontsource/archivo", "archivo-latin-500-normal.woff"),
	fontFile("@fontsource/martian-mono", "martian-mono-latin-400-normal.woff"),
	readFile(join(process.cwd(), "src", "assets", "elian.jpg")),
]);
const avatarSrc = `data:image/jpeg;base64,${avatar.toString("base64")}`;

const fonts = [
	{ name: "Display", data: display, weight: 900 as const, style: "normal" as const },
	{ name: "Body", data: body, weight: 500 as const, style: "normal" as const },
	{ name: "Mono", data: mono, weight: 400 as const, style: "normal" as const },
];

/** Emoji and characters outside the bundled latin fonts would render as boxes. */
function clean(value: string) {
	return value
		.replace(/\p{Extended_Pictographic}|️|‍/gu, "")
		.replace(/\s+/g, " ")
		.trim();
}

function truncate(value: string, max: number) {
	return value.length <= max ? value : `${value.slice(0, max - 1).trimEnd()}…`;
}

function titleSize(title: string) {
	if (title.length > 70) return 84;
	if (title.length > 45) return 100;
	if (title.length > 25) return 120;
	return 144;
}

// Minimal element helper, so we don't need JSX in a .ts file.
type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown, extra = {}): Node => ({
	type,
	props: { style, children, ...extra },
});

export interface OgOptions {
	title: string;
	eyebrow: string;
	footer: string;
}

export async function renderOg({ title, eyebrow, footer }: OgOptions) {
	const text = truncate(clean(title).toUpperCase(), 110);
	const size = titleSize(text);

	const tree = h(
		"div",
		{
			width: WIDTH,
			height: HEIGHT,
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
			background: BLUE,
			color: "#FFFFFF",
			fontFamily: "Body",
		},
		[
			h(
				"div",
				{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					padding: "48px 64px 0",
				},
				[
					h("div", { display: "flex", alignItems: "center", gap: 18 }, [
						h("img", { width: 64, height: 64, objectFit: "cover", background: PINK }, undefined, {
							src: avatarSrc,
							width: 64,
							height: 64,
						}),
						h("span", { fontFamily: "Display", fontSize: 44, letterSpacing: -0.5 }, "ELIAN.CODES"),
					]),
					h(
						"span",
						{ fontFamily: "Mono", fontSize: 22, color: PINK },
						`> ${clean(eyebrow).toLowerCase()}`,
					),
				],
			),
			h(
				"div",
				{
					display: "flex",
					padding: "0 64px",
					fontFamily: "Display",
					fontSize: size,
					lineHeight: 0.86,
					letterSpacing: -1,
					// The V5 chromatic split, as a hard pink shadow offset to the right.
					textShadow: `${Math.round(size * 0.05)}px 0 0 ${PINK}`,
				},
				text,
			),
			h(
				"div",
				{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					height: 88,
					padding: "0 64px",
					background: PINK,
					color: INK,
					fontFamily: "Mono",
					fontSize: 24,
				},
				[h("span", {}, clean(footer).toUpperCase()), h("span", {}, "WWW.ELIAN.CODES")],
			),
		],
	);

	const svg = await satori(tree as Parameters<typeof satori>[0], {
		width: WIDTH,
		height: HEIGHT,
		fonts,
	});
	const png = new Resvg(svg, { fitTo: { mode: "width", value: WIDTH } }).render().asPng();

	return new Response(new Uint8Array(png), {
		headers: { "Content-Type": "image/png" },
	});
}
