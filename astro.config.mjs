import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'ignore',
  server: {
    port: 3000
  },
  site: 'https://www.elian.codes',
  integrations: [sitemap({
    canonicalURL: 'https://www.elian.codes'
  }), partytown()]
});