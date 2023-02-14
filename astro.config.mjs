import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import vercel from "@astrojs/vercel/static";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import unocss from "@unocss/astro";
import presetIcons from '@unocss/preset-icons';
import logos from '@iconify-json/logos/icons.json';
import uil from '@iconify-json/uil/icons.json';
import presetWind from '@unocss/preset-wind';
import presetTypography from '@unocss/preset-typography';

export default defineConfig({
  site: 'https://www.elian.codes/',
  trailingSlash: 'ignore',
  integrations: [
    vue(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    sitemap(),
    unocss({
      presets: [
        presetWind(),
        presetIcons({
          collections: {
            logos,
            uil
          }
        }),
        presetTypography(),
      ],
      safelist: [
        'hover:bg-blue', 'hover:bg-green', 'hover:bg-red', 'hover:bg-pink', 'hover:bg-purple', 'hover:bg-yellow', 'hover:bg-white',
        'bg-blue', 'bg-green', 'bg-red', 'bg-pink', 'bg-purple', 'bg-yellow', 'bg-white', 'bg-orange',
        'prose-blue', 'prose-red', 'prose-green', 'prose-yellow', 'prose-purple', 'prose-pink', 'prose-indigo', 'prose-orange', 'prose-teal',
        'prose-cyan', 'prose-lime', 'prose-emerald', 'prose-fuchsia', 'prose-violet', 'prose-rose', 'prose-sky', 'prose-amber'
      ],
    }),
  ],
  output: "static",
  adapter: vercel({
    analytics: true
  })
});