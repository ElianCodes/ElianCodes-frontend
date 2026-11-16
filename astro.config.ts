import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { voidPlugin } from "void";

export default defineConfig({
	site: "https://www.elian.codes/",
	trailingSlash: "ignore",
	integrations: [sitemap()],
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
