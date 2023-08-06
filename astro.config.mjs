/* eslint-disable simple-import-sort/imports */
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";

export default defineConfig({
	site:
		process.env.VERCEL_ENV === "production"
			? "https://www.elian.codes/"
			: process.env.VERCEL_URL
			? `https://${process.env.VERCEL_URL}/`
			: "https://localhost:3000/",
	trailingSlash: "ignore",
	integrations: [
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
		sitemap(),
		UnoCSS({ injectReset: true }),
	],
	output: "static",
	adapter: vercel({
		analytics: true,
	}),
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
});
