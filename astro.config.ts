import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

export default defineConfig({
	site:
		process.env.VERCEL_ENV === "production"
			? "https://www.elian.codes/"
			: process.env.VERCEL_URL
			? `https://${process.env.VERCEL_URL}/`
			: "https://localhost:3000/",
	trailingSlash: "ignore",
	integrations: [sitemap(), UnoCSS({ injectReset: true })],
	output: "static",
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
		speedInsights: {
			enabled: true,
		},
	}),
	experimental: { contentCollectionCache: true },
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
});
