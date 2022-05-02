# The ElianCodes site

The full sourcecode for my personal website. Written in [Astro](<https://astro.build>) and [TailwindCSS](<https://tailwindcss.com>) with some [Firebase](<https://firebase.com>) functions as well.

Previous version of this website used [Nuxt](<https://www.nuxtjs.org>), [Vue](<https://www.vuejs.org>) and [TypeScript](<https://www.typescript-lang.com>).

## Deployment and Hosting

At the moment, this website is hosted on Firebase as a static site and some Firebase functions to use as an API. The DNS is controlled by [CloudFlare](<https://www.cloudflare.com>).

The website was previously hosted on [Google Cloud Storage](<https://cloud.google.com/storage>) as a static folder in a public bucket, but firebase was a better (and cheaper) option.

Firebase is ideal because you can control domains, analytics, functions and preview channels all in one place.

## Development setup

To install and manage dependencies, I use [PNPM](<https://pnpm.io/>).

```bash
# for development
pnpm dev

# for local preview
pnpm build && pnpm preview
```

## Technologies and packages

The base of the website uses [Astro](<https://astro.build>) to generate and build the site.

### Frontend

At the moments, the frontend is built using [Astro](<https://astro.build>). [Astro](<https://astro.build>) is an amazing (and quite new) technology to generate static sites. If you want to know more about it, feel free to read [their documentation](<https://docs.astro.build/getting-started>).

#### AOS

*animate on scroll* is used to animate some parts of the website. The `<script>` for it is defined in the `DefaultFooter.astro` component and is only loaded in client. (more info about `client:load` [here](<https://docs.astro.build/core-concepts/component-hydration>))

#### Astro Templates

For the moment my templates are written in pure Astro with some TypeScript. But actually, Astro doesn't care in which language you write or define your components. Thet's kinda their thing. So maybe in the near future, I'll write some micro-frontend thingie with other frameworks as well.

#### TailwindCSS

To define the style of the website, [TailwindCSS](<https://tailwindcss.com>) is used with [Sass preprocessor](<https://sass-lang.com/>). This allows you to create custom and reusable components with easy by using `@apply` classes. (JIT mode is used because Astro only supports `mode: 'jit'` [documentation link](<https://docs.astro.build/guides/styling#tailwind>)).

### Backend

The *real* RESTful API was discontinued on 02 May 2022 since I decided to go with serveless cloud functions on Firebase instead of a running container.

The functions are located in the `functions/` folder in this repo.

#### Database

The Database for Elian.codes uses Firestore hosted on Firebase purely to manage it all in one space and platform! Works the easiest for me!
