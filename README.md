# The Elian dot Codes site

The full sourcecode for my personal website. Written in [Astro](<https://astro.build>) and [TailwindCSS](<https://tailwindcss.com>).

Previous version of this website used [Nuxt](<>), [Vue](<>) and [TypeScript](<>).

## Deployment and Hosting

The website is hosted on [Google Cloud Storage](<>) as a static folder in a public bucket. The DNS is controlled by [CloudFlare](<>).

The sourcecode is compiled by [Google Cloud Build](<>) and defined in the `cloudbuild/frontend.yaml` file.

*There is also a [Netlify](<https://www.netlify.com/>) build process as a backup and used to test pull requests.*

[![Netlify Status](https://api.netlify.com/api/v1/badges/dd18ec5d-73cf-4df0-bdc6-39495b6ce3f1/deploy-status)](https://app.netlify.com/sites/elianvancutsem/deploys)

## Development setup

To install and manage dependencies, I use [Yarn](<https://yarnpkg.com/>).

The frontend code is located in the `/frontend` folder

```bash
# for development
yarn dev

# for local preview
yarn build && yarn preview
```

## Technologies and packages

The base of the website uses [Astro](<https://astro.build>) to generate and build the site.

### Astro

Astro is an amazing (and quite new) technology to generate static sites. If you want to know more about it, feel free to read [their documentation](<https://docs.astro.build/getting-started>).

#### AOS

*animate on scroll* is used to animate some parts of the website. The `<script>` for it is defined in the `DefaultFooter.astro` component and is only loaded in client. (more info about `client:load` [here](<https://docs.astro.build/core-concepts/component-hydration>))

#### Marked.js

I write my blogposts in Markdown. The Astro templates render the markdown trough [Marked.js](<https://github.com/markedjs/marked>) to convert Markdown to HTML, so the browser can read them. More info on the [Astro Markdown Documentation](<https://docs.astro.build/guides/markdown-content>)

### Components

#### Astro Templates

For the moment my templates are written in Astro and [Preact](<https://preactjs.com/>), which is very easy to get started with. But actually, Astro doesn't care in which language you write or define your components. Thet's kinda their thing. So maybe in the near future, I'll write some micro-frontend thingie with other frameworks as well.

### TailwindCSS

To define the style of the website, [TailwindCSS](<https://tailwindcss.com>) is used with [Sass preprocessor](<https://sass-lang.com/>). This allows you to create custom and reusable components with easy by using `@apply` classes. (JIT mode is used because Astro only supports `mode: 'jit'` [documentation link](<https://docs.astro.build/guides/styling#tailwind>)).
