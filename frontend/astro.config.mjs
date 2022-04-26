import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'ignore',
  site: 'https://www.elian.codes',
  server: {
    port: 3000
  },
  integrations: [sitemap({
    canonicalURL: 'https://www.elian.codes',
  })]
});