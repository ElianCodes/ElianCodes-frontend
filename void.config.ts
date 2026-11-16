import { defineConfig } from "void/config";

export default defineConfig({
	cloudflare: {
		name: "elian-codes",
		compatibility_date: "2026-11-01",
		compatibility_flags: ["nodejs_als"],
		// Custom domains: Cloudflare creates the DNS records and certificates for these.
		// The apex redirects to www with a Redirect Rule in the Cloudflare dashboard.
		routes: [
			{ pattern: "www.elian.codes", custom_domain: true },
			{ pattern: "elian.codes", custom_domain: true },
		],
	},
});
