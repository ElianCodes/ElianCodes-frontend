import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

// Fully static: `void deploy --dir dist` uploads the build to Cloudflare as static assets.
// No adapter, so build-time pages (OG images, feeds) render in Node.
export default defineConfig({
	site: "https://www.elian.codes",
	// /blog is served from blog.html, so Cloudflare doesn't redirect /blog → /blog/.
	trailingSlash: "never",
	build: { format: "file" },
	// /mail only opens the mail client and is noindex, so keep it out of the sitemap.
	integrations: [sitemap({ filter: (page) => !page.endsWith("/mail") })],
	markdown: {
		shikiConfig: { theme: "github-dark-default" },
	},
	// V5 "Signal" type: condensed display, mono labels, grotesk body.
	// Downloaded at build time and self-hosted, no Google Fonts requests at runtime.
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Big Shoulders Display",
			cssVariable: "--font-display",
			weights: [900],
			styles: ["normal"],
			fallbacks: ["Impact", "sans-serif"],
		},
		{
			provider: fontProviders.fontsource(),
			name: "Martian Mono",
			cssVariable: "--font-mono",
			weights: [400, 600],
			styles: ["normal"],
			fallbacks: ["ui-monospace", "monospace"],
		},
		{
			provider: fontProviders.fontsource(),
			name: "Archivo",
			cssVariable: "--font-body",
			weights: [400, 500, 600, 700],
			styles: ["normal", "italic"],
			fallbacks: ["system-ui", "sans-serif"],
		},
	],
});
