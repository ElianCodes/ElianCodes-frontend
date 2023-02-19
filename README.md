# The ElianCodes site

The full sourcecode for my personal website.

## Current technologies

(currently) written in [Astro](<https://astro.build>) and [UnoCSS](<https://uno.antfu.me>) with some [Firebase](<https://firebase.com>) functions as well, deployed to [Vercel](https://www.vercel.com).

I'm actually looking to get rid of the Firebase functions, this are the options I'm thinking of:

1. Vercel edge functions with same functionallity.
1. Process the data in Astro with API routes.
1. Find a totally different approach to process data.

### Previous technologies

This website is a representation of technologies I'm playing with. Here is a list of technologies that have powed this site before:

- [Nuxt](<https://www.nuxtjs.org>)
- [Vue](<https://www.vuejs.org>)
- [TypeScript](<https://www.typescript-lang.com>)
- [TailwindCSS](<https://tailwindcss.com>)

## Deployment and Hosting

At the moment, this website is hosted on Vercel with some Firebase functions to use as an API (at buildtime). The DNS is controlled by [CloudFlare](<https://www.cloudflare.com>).

The website was previously hosted on [Google Cloud Storage](<https://cloud.google.com/storage>) as a static folder in a public bucket. Then I transitioned to Firebase, since it was easier to manage, cheaper and you get some handy features like preview deploys and such.

Currently, it's deployed as a static Vercel website using the [Astro Vercel adapter](https://docs.astro.build/en/guides/integrations-guide/vercel/). Vercel offers some features I love, like analytics, web vitals info, feature and preview deploys.

## Development setup

To install and manage dependencies, I use [PNPM](<https://pnpm.io/>).

```bash
# for development
pnpm dev

# for local preview
pnpm build && pnpm preview
```

## Technologies and packages

The base of the website uses [Astro](<https://astro.build>) to generate and build the (static) site.

### Frontend

At the moment, the UI of the website is built and generated using [Astro](<https://astro.build>). [Astro](<https://astro.build>) is an amazing technology to generate static sites (but also supports SSR). If you want to know more about it, feel free to read [their documentation](<https://docs.astro.build/getting-started>).

#### Components

Most of my templates are written in pure Astro, since I don't need to much interactivity. Components that do require interactivity, are written in [VueJS](<https://www.vuejs.org>). Actually, Astro doesn't care in which language you write or define your components. That's kinda their thing.

#### UnoCSS

To define the style of the website, [UnoCSS](<https://uno.antfu.me>) with `preset-wind` is used. [You can read more about my transition and use here.](<https://www.elian.codes/blog/23-02-11-implementing-unocss-in-astro>)

### Backend

The *real* RESTful API was discontinued on 02 May 2022 since I decided to go with serveless cloud functions on Firebase instead of a running container.

The functions are located in the `functions/` folder in this repo. Most of them are only fetched and used at build time (Yay Astro 🙌). For example, the events list, these are fetched from the API at buildtime, the API itself gets them from Firestore.
