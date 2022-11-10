import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'ignore',
  server: {
    port: 3000
  },
  site: 'https://www.elian.codes',
  integrations: [
    //sitemap({
    //canonicalURL: 'https://www.elian.codes'
  //}),
  image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), solidJs()
  ],
  output: "server",
  adapter: vercel()
});