# elianvancutsem

The full sourcecode for my own website. Written in [Nuxt](<https://nuxtjs.org>), [Vue](<https://vuejs.org>), [TypeScript](<https://www.typescriptlang.org/>) and [TailwindCSS](<https://tailwindcss.com>).

## Deployment status

The Website is deployed using a [TravisCI pipeline](<https://travis-ci.com/ElianVanCutsem/elianvancutsem.github.io>) and [Github Pages](<https://docs.github.com/en/github/working-with-github-pages/about-github-pages>) / [Netlify](<https://www.netlify.com/>).

[![Netlify Status](https://api.netlify.com/api/v1/badges/dd18ec5d-73cf-4df0-bdc6-39495b6ce3f1/deploy-status)](https://app.netlify.com/sites/elianvancutsem/deploys)
[![Build Status](https://travis-ci.com/ElianVanCutsem/elianvancutsem.github.io.svg?branch=master)](https://travis-ci.com/ElianVanCutsem/elianvancutsem.github.io)

## Development setup

To install and manage dependencies, I use [Yarn](<https://yarnpkg.com/>).

Below is the basic Yarn workflow for the website. I use static generated files, because I'm hosting my website on [Netlify](<https://www.netlify.com/>), which is [JAMStack](<https://jamstack.org/>).

```bash
$ yarn install

$ yarn dev

$ yarn build
$ yarn generate
```

## Technologies and packages

The base of the website uses Nuxt to generate and build the site, but some other packages and modules are used. These are explained below.

### Nuxt content

[Nuxt content](<https://content.nuxtjs.org/>) is the [Nuxt module](<https://nuxtjs.org/docs/2.x/directory-structure/modules>) I used to setup my blog. It allows you to define a feed of posts and integrates very good with RSS feeds.

#### Marked.js

I write my blogposts in Markdown. The Vue templates render the markdown trough [Marked.js](<https://github.com/markedjs/marked>) to convert Markdown to HTML, so the browser can read them.

### Components

#### Vue templates

For the moment my templates are written in VueHTML, which is very easy to get started with. The logics are defined in Typescript and added as a script in a [Single-File-Component](<https://vuejs.org/v2/guide/single-file-components.html>). Read more about that below.

#### Typescript components

To define the logics of my templates I use [TypeScript](<>). To take full advantage of this I use the [nuxt-property-decorator](<https://github.com/nuxt-community/nuxt-property-decorator>) package

### TailwindCSS

To define the style of the website, [TailwindCSS](<https://tailwindcss.com>) is used with [Sass preprocessor](<https://sass-lang.com/>). This allows you to create custom and reusable components with easy by using `@apply` classes.


