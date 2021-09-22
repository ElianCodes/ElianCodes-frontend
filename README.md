# The ElianCodes site

The full sourcecode for my personal website. Written in [Astro](<https://astro.build>) and [TailwindCSS](<https://tailwindcss.com>) with some RESTful things as well.

Previous version of this website used [Nuxt](<https://www.nuxtjs.org>), [Vue](<https://www.vuejs.org>) and [TypeScript](<https://www.typescript-lang.com>).

## Deployment and Hosting

The website is hosted on [Google Cloud Storage](<https://cloud.google.com/storage>) as a static folder in a public bucket. The DNS is controlled by [CloudFlare](<https://www.cloudflare.com>).

The sourcecode is compiled by [Google Cloud Build](<https://cloud.google.com/build>) and defined in the `cloudbuild/frontend.yaml` file.

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

### Frontend

At the moments, the frontend is built using [Astro](<https://astro.build>). [Astro](<https://astro.build>) is an amazing (and quite new) technology to generate static sites. If you want to know more about it, feel free to read [their documentation](<https://docs.astro.build/getting-started>).

#### AOS

*animate on scroll* is used to animate some parts of the website. The `<script>` for it is defined in the `DefaultFooter.astro` component and is only loaded in client. (more info about `client:load` [here](<https://docs.astro.build/core-concepts/component-hydration>))

#### Marked.js

I write my blogposts in Markdown. The Astro templates render the markdown trough [Marked.js](<https://github.com/markedjs/marked>) to convert Markdown to HTML, so the browser can read them. More info on the [Astro Markdown Documentation](<https://docs.astro.build/guides/markdown-content>)

#### Astro Templates

For the moment my templates are written in Astro and [Preact](<https://preactjs.com/>) or [Svelte](<https://www.svelte.dev>), which is very easy to get started with. But actually, Astro doesn't care in which language you write or define your components. Thet's kinda their thing. So maybe in the near future, I'll write some micro-frontend thingie with other frameworks as well.

#### TailwindCSS

To define the style of the website, [TailwindCSS](<https://tailwindcss.com>) is used with [Sass preprocessor](<https://sass-lang.com/>). This allows you to create custom and reusable components with easy by using `@apply` classes. (JIT mode is used because Astro only supports `mode: 'jit'` [documentation link](<https://docs.astro.build/guides/styling#tailwind>)).

### Backend

The API in the backend run at [https://api.elian.codes/](<https://api.elian.codes/>). It's built using NestJS and Typescript for the basic controllers and responses. In the future it might use some SSR to display some simple instructions or guide you on how to build your own RESTful API

#### Database

The Database for Elian.codes uses a MongoDB Serverless cluster. The models in the database are built and defined in the `backend/schemas` folder using Mongoose and NestJS.

#### Postman Collection

The API collection is found [here](<https://www.postman.com/eliancodes/workspace/Elian-Codes~cf60fb2b-3492-43c4-b1ac-94f6a5b84354/collection/10995526-3db7205e-0e14-4170-8767-c3a25f3df900>), it includes all routes and functionality of the ElianCodes API. It also includes some simple postman documentation.
