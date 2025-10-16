import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";
// import UnoCSS from "unocss/astro";
import db from "@astrojs/db";
import studiocmsWebVitals from "@studiocms/web-vitals";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site:
        process.env.VERCEL_ENV === "production"
            ? "https://www.elian.codes/"
            : process.env.VERCEL_URL
                ? `https://${process.env.VERCEL_URL}/`
                : "https://localhost:3000/",
    trailingSlash: "ignore",
    integrations: [sitemap(), db(), studiocmsWebVitals()],
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
    vite: {
      optimizeDeps: {
          exclude: ["@resvg/resvg-js"],
      },
      plugins: [tailwindcss()],
    },
});
