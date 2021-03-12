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
