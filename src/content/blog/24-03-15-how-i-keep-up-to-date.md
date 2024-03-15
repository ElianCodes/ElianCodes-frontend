---
title: How I keep everything up to date
description: "Some thoughts on how I keep my projects, dev env and repositories up to date."
pubDate: 2024-03-15 08:30
author: Elian Van Cutsem
tags:
  - Open Source
  - Tooling
  - Web development
imgUrl: "./images/up-to-date.jpeg"
layout: "@layouts/BlogPost.astro"
---

# How I keep everything up to date

I get asked a lot of questions all the time. One of the most returning questions is how I keep my projects, dev env and repositories up to date. I thought it would be a good idea to write a little blog post about it, so I can point people to it.

## Overall updates

I have a script that I run every now and then to update all my packages, tools and dependencies. It's a combination of updating brew packages, gcloud, NPM packages, PNPM, composer packages (yes, I've used my fair amount of PHP) and Bun.

If I'm missing something here, let me know! I'd love some thoughts!

```sh
echo 'updating brew packages'
brew update

echo 'upgrading brew packages'
brew upgrade

echo 'updating gcloud'
gcloud components update

echo 'update NPM packages'
npm update -g

echo 'update PNPM'
pnpm add -g pnpm@latest

echo 'update composer packages'
composer global update

echo 'updating Bun'
bun upgrade
```

[Here is a Gist of my overall update script](https://gist.github.com/ElianCodes/8a0d2e0ca29e0faadfa4a2b9bc6b30e6)

## Upgrade my Astro project repos

I have a lot of Astro projects. Keeping them all up to date, is a very annoying and time consuming task. That's why I came up with a really easy (and kinda stupid) solution. I have a nightly GitHub action that runs a script to update all my Astro projects. It's a simple script that runs `pnpm dlx @astrojs/upgrade` and creates a PR with the changes and assigns me, that way I get it in my notifications.

In the case you trust your tech good enough, you can commit straight to main, but I like to review the changes first.

```yaml
name: nightly

on:
  schedule:
    - cron: '0 0 * * *'

jobs:
  upgrade:
    runs-on: ubuntu-latest
    env:
      NODE_OPTIONS: '--max_old_space_size=4096'
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm

      - name: Install dependencies
        run: pnpm install

      - name: Upgrade Astro
        run: pnpm dlx @astrojs/upgrade --yes

      - name: PR Changes
        uses: peter-evans/create-pull-request@v4
        with:
          branch: ci/update-astro
          commit-message: 'ci: update Astro'
          assignees: eliancodes
          title: 'ci: update Astro'
          body: Update Astro and packages to latest version
          labels: ci
```

[Here is a Gist of my nightly "update Astro" script](https://gist.github.com/ElianCodes/9ac4011dac4172d75c94645e66c7c7f6)
