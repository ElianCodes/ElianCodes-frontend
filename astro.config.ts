import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site:
		process.env.VERCEL_ENV === "production"
			? "https://www.elian.codes/"
			: process.env.VERCEL_URL
				? `https://${process.env.VERCEL_URL}/`
				: "https://localhost:3000/",
	trailingSlash: "ignore",
	integrations: [sitemap()],
	adapter: vercel(),
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
});
