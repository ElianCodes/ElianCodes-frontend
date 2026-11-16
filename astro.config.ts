import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import { voidPlugin } from "void";

export default defineConfig({
	site: "https://www.elian.codes/",
	trailingSlash: "ignore",
	integrations: [sitemap()],
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
	// Static site: optimise images at build time and skip the KV session store,
	// so no Images or KV bindings get provisioned on Cloudflare.
	session: false,
	adapter: cloudflare({
		configPath: "./.void-wrangler.jsonc",
		imageService: "compile",
	}),
	vite: {
		plugins: [voidPlugin()],
	},
});
