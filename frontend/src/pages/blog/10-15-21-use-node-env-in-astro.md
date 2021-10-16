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

The most easy and straightforward way would be to use the NodeJS internal `process.env.NODE_ENV`. This way works with most of the online CI/CD systems like Github Actions, Google Cloud Build, Netlify and so on.

To get this working locally, you'll need some extra commands in the terminal.

In your code, you'll just need to access the `process.env.NODE_ENV` like the following:

```jsx
{ process.env.NODE_ENV == 'production' ?
    (<Fragment>
        <!-- Load the scripts only for production here -->
    </Fragment>)
: null }
```

It might be possible that on your local build or live server, the `process.env.NODE_ENV` is `undefined`. To resolve this, run the following command before running something like `yarn dev` or `npm run dev`

```bash
export NODE_ENV=development
```

That should resolve it. If the CI system you're using doesn't support it out of the box, you can always set it manually to `production`

## Astro & Snowpack

Next to the `process.env.NODE_ENV`, Snowpack automatically uses `__SNOWPACK_ENV__.MODE` instead of `NODE_ENV`, so if you're using Astro (or snowpack) in general, you might want to use this one instead. (it will also use `development` by default on `npm run dev` & `production` on `npm run build`)

## The somewhat more advanced way

In some usecases, it might seem handier to load in a `.env` file. In that case you can always use the Snowpack Environment Variables, [read more about that on their documentation](<https://www.snowpack.dev/reference/environment-variables>).

It's not hard and probably will feel very familiar to the NodeJS default `dotenv` plugin.
