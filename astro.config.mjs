import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import image from "@astrojs/image";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/static";
import rome from "astro-rome";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'ignore',
  server: {
    port: 3000
  },
  site: 'https://www.elian.codes',
  integrations: [sitemap({
    canonicalURL: 'https://www.elian.codes'
  }), image(), solidJs(), rome(), tailwind()],
  output: "static",
  adapter: vercel()
});