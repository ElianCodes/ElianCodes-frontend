# The ElianCodes site

The full sourcecode for my personal website.

## Current technologies

(currently) written in [Astro](https://astro.build) and [UnoCSS](https://unocss.dev), deployed to [Vercel](https://vercel.com).

### Previous technologies

This website is a representation of technologies I'm playing with. Here is a list of technologies that have powered this site before:

- [Nuxt](https://nuxtjs.org)
- [Vue](https://vuejs.org)
- [TypeScript](https://www.typescript-lang.com)
- [TailwindCSS](https://tailwindcss.com)
- [UnoCSS](https://unocss.dev)
- [Firebase functions](https://firebase.google.com/docs/functions)

## Deployment and Hosting

At the moment, this website is hosted on Vercel. The DNS is controlled by [CloudFlare](https://www.cloudflare.com).

The website was previously hosted on [Google Cloud Storage](https://cloud.google.com/storage) as a static folder in a public bucket. Then I transitioned to Firebase, since it was easier to manage, cheaper and you get some handy features like preview deploys and such.

Currently, it's deployed as a static Vercel website using the [Astro Vercel adapter](https://docs.astro.build/en/guides/integrations-guide/vercel/). Vercel offers some features I love, like analytics, web vitals info, feature and preview deploys.

## Development setup

To install and manage dependencies, I use [PNPM](https://pnpm.io/).

```bash
# for development
pnpm dev

# for local preview
pnpm build && pnpm preview
```

## Technologies and packages

The base of the website uses [Astro](https://astro.build) to generate and build the (static) site.

### Frontend

At the moment, the UI of the website is built and generated using [Astro](https://astro.build). [Astro](https://astro.build) is an amazing technology to generate static sites (but also supports SSR). If you want to know more about it, feel free to read [their documentation](https://docs.astro.build/getting-started).

#### Components

Most of my templates are written in pure Astro, since I don't need to much interactivity. Components that do require interactivity, are written in vanilla JS.

#### UnoCSS

To define the style of the website, [UnoCSS](https://unocss.dev), with some presets are used. [You can read more about my transition and use here.](https://www.elian.codes/blog/23-02-11-implementing-unocss-in-astro)
