import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { Resvg, type ResvgRenderOptions } from "@resvg/resvg-js";

const width = 1200;
const height = 630;
const outfitFontPath = join(process.cwd(), "public", "fonts", "outfit.ttf");
const poppinsFontPath = join(process.cwd(), "public", "fonts", "poppins.ttf");
const profilePhotoPath = join(
	process.cwd(),
	"public",
	"assets",
	"img",
	"elian.jpg",
);

const profilePhotoData = await readFile(profilePhotoPath);

const profilePhotoSrc = `data:image/jpeg;base64,${profilePhotoData.toString("base64")}`;
const renderedImageCache = new Map<string, Uint8Array>();

interface OgImageOptions {
	title: string;
	description?: string | null;
	linkText?: string | null;
}

function truncateText(value: string | null | undefined, maxLength: number) {
	if (!value) {
		return "";
	}

	const normalized = value.replace(/\s+/g, " ").trim();

	if (normalized.length <= maxLength) {
		return normalized;
	}

	return `${normalized.slice(0, maxLength - 1).trimEnd()}…`;
}

function sanitizeOgText(value: string | null | undefined) {
	if (!value) {
		return "";
	}

	return value
		.normalize("NFKD")
		.replace(/\p{Extended_Pictographic}/gu, "")
		.replace(/[^\x20-\x7E]/g, "")
		.replace(/\s+/g, " ")
		.trim();
}

function wrapText(value: string, maxCharsPerLine: number, maxLines: number) {
	const words = value.split(" ");
	const lines: string[] = [];
	let currentLine = "";

	for (const word of words) {
		const nextLine = currentLine ? `${currentLine} ${word}` : word;

		if (nextLine.length <= maxCharsPerLine) {
			currentLine = nextLine;
			continue;
		}

		if (currentLine) {
			lines.push(currentLine);
		}

		currentLine = word;

		if (lines.length === maxLines - 1) {
			break;
		}
	}

	if (lines.length < maxLines && currentLine) {
		lines.push(currentLine);
	}

	if (lines.length > maxLines) {
		lines.length = maxLines;
	}

	const consumedWords = lines.join(" ").split(" ").filter(Boolean).length;

	if (consumedWords < words.length && lines.length > 0) {
		lines[lines.length - 1] =
			`${lines[lines.length - 1].replace(/[.,;:!?-]?$/, "")}…`;
	}

	return lines;
}

function escapeXml(value: string) {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

function getTitleSize(title: string) {
	if (title.length > 95) return 46;
	if (title.length > 72) return 52;
	if (title.length > 48) return 58;
	return 68;
}

function getDescriptionSize(description: string) {
	if (description.length > 180) return 24;
	if (description.length > 120) return 27;
	return 30;
}

function buildSvg({ title, description, linkText }: OgImageOptions) {
	const safeTitle = truncateText(sanitizeOgText(title), 110);
	const safeDescription = truncateText(sanitizeOgText(description), 180);
	const safeLinkText = truncateText(sanitizeOgText(linkText), 34);

	const titleSize = getTitleSize(safeTitle);
	const descriptionSize = getDescriptionSize(safeDescription);
	const titleLineHeight = Math.round(titleSize * 1.12);
	const descriptionLineHeight = Math.round(descriptionSize * 1.35);

	const titleLines = wrapText(safeTitle, 24, 3);
	const descriptionLines = wrapText(safeDescription, 55, 3);

	const titleY = 170;
	const descriptionY = 390;
	const footerY = 540;

	const titleMarkup = titleLines
		.map(
			(line, index) =>
				`<text x="72" y="${titleY + index * titleLineHeight}" font-family="Outfit" font-size="${titleSize}" font-weight="700" fill="#2b2b2b">${escapeXml(line)}</text>`,
		)
		.join("");

	const descriptionMarkup = descriptionLines
		.map(
			(line, index) =>
				`<text x="72" y="${descriptionY + index * descriptionLineHeight}" font-family="Poppins" font-size="${descriptionSize}" font-weight="400" fill="#5f5a52">${escapeXml(line)}</text>`,
		)
		.join("");

	return `
		<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="${width}" height="${height}" fill="url(#bg)" />
			<rect x="32" y="32" width="1136" height="566" rx="28" fill="#F7F5EF" stroke="#2B2B2B" stroke-width="6" />
			<circle cx="84" cy="90" r="11" fill="#EBFF00" stroke="#2B2B2B" stroke-width="4" />
			<text x="110" y="99" font-family="Outfit" font-size="28" font-weight="700" letter-spacing="2" fill="#2B2B2B">ELIANCODES</text>
			<rect x="922" y="62" width="218" height="218" rx="22" fill="#2B2B2B" />
			<clipPath id="photoClip">
				<rect x="928" y="68" width="206" height="206" rx="18" />
			</clipPath>
			<image href="${profilePhotoSrc}" x="928" y="68" width="206" height="206" preserveAspectRatio="xMidYMid slice" clip-path="url(#photoClip)" />
			${titleMarkup}
			${descriptionMarkup}
			<circle cx="80" cy="${footerY - 3}" r="10" fill="#9E00FF" />
			<text x="104" y="${footerY + 8}" font-family="Poppins" font-size="28" font-weight="400" fill="#2B2B2B">Developer experience, web engineering, and talks</text>
			${
				safeLinkText
					? `
						<rect x="800" y="498" width="302" height="60" rx="30" fill="#EBFF00" stroke="#2B2B2B" stroke-width="4" />
						<text x="822" y="537" font-family="Outfit" font-size="24" font-weight="700" fill="#2B2B2B">${escapeXml(safeLinkText)}</text>
					`
					: ""
			}
			<defs>
				<linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
					<stop stop-color="#8D00FF" />
					<stop offset="1" stop-color="#FF2CCE" />
				</linearGradient>
			</defs>
		</svg>
	`;
}

export async function renderOgImage(options: OgImageOptions) {
	const cacheKey = JSON.stringify(options);
	const cachedBytes = renderedImageCache.get(cacheKey);

	if (cachedBytes) {
		return new Response(
			new Blob([Buffer.from(cachedBytes)], { type: "image/png" }),
			{
				headers: {
					"content-type": "image/png",
					"cache-control": "public, max-age=31536000, immutable",
				},
			},
		);
	}

	const opts: ResvgRenderOptions = {
		fitTo: {
			mode: "width",
			value: width,
		},
		font: {
			loadSystemFonts: false,
			fontFiles: [outfitFontPath, poppinsFontPath],
			defaultFontFamily: "Poppins",
			sansSerifFamily: "Poppins",
		},
	};

	const resvg = new Resvg(buildSvg(options), opts);
	const pngData = resvg.render();
	const bytes = new Uint8Array(pngData.asPng());
	renderedImageCache.set(cacheKey, bytes);

	return new Response(new Blob([bytes], { type: "image/png" }), {
		headers: {
			"content-type": "image/png",
			"cache-control": "public, max-age=31536000, immutable",
		},
	});
}
