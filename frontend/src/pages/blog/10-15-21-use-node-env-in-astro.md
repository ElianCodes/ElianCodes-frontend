---
title: 🔧 Use NODE-ENV and other environment variables in Astro
createdAt: 10/15/2021 23:30
author: "Elian Van Cutsem"
tags:
  - Astro
  - Javascript
  - Programming
  - Webdevelopment
description: Use NODE_ENV and other environment variables in Astro
imgUrl: https://astro.build/social.jpg
longDescription: Wanted to limit some things for development use only in Astro and don't know how? Here's a simple guide on how to use environment variables in Astro.
layout: '../../layouts/BlogPost.astro'
permalink: '10-15-21-use-node-env-in-astro'
---

# Use NODE_ENV and other environment variables in Astro

Today I did some development on my own website [www.elian.codes](<https://www.elian.codes/>), when I noticed that I was hijacking my own analytics and statistics by not turning them off on my local development machine. I also never did this before (in Astro that is).

## The Simple Way

The most easy and straightforward way would be to use the NodeJS internal `process.env.NODE_ENV`. This way works with most of the online CI/CD systems like Github Actions, Google Cloud Build, Netlify and so on. The only problem there is that the `process.env` isn't really made accessible by Snowpack.

Astro uses Snowpack out of the box, but will move to Vite in a future update (Astro v21.0). This method won't work from there on.

Snowpack automatically uses `__SNOWPACK_ENV__.MODE` instead of `NODE_ENV`, so if you're using Astro (or snowpack) in general, you might want to use this one instead. (it will also use `development` by default on `npm run dev` & `production` on `npm run build`)

## The somewhat more advanced way

> - Install `@snowpack/plugin-dotenv`
>
>  ```
>  npm i --save @snowpack/plugin-dotenv
>  ```
>
> - Configure Astro via `astro.config.mjs` to use `@snowpack/plugin-dotenv`
>
> ```js
>  plugins: [
>    "@snowpack/plugin-dotenv",
>  ],
>  ```
>
> - Expose Env Vars via Snowpack's `snowpack.config.mjs`. Vars *must* be prefixed with `SNOWPACK_PUBLIC_`
>
>  ```js
>  export default {
>    env: {
>      SNOWPACK_PUBLIC_API_BASEURL: 'https://myapi.example.org/',
>    },
>  };
>  ```
>
> - Access the Env Vars on the `__SNOWPACK_ENV__` object
>
>  ```js
>  const res = await fetch(`${__SNOWPACK_ENV__.SNOWPACK_PUBLIC_API_BASEURL}/events`);
>  ```

By [Bramus](<https://gist.github.com/bramus/093dadabcac610c58a3e133b64f97417>)

In some usecases, it might seem handier to load in a `.env` file. In that case you can always use the Snowpack Environment Variables, [read more about that on their documentation](<https://www.snowpack.dev/reference/environment-variables>).

It's not hard and probably will feel very familiar to the NodeJS default `dotenv` plugin.
