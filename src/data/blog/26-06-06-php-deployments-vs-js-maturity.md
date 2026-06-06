---
title: "PHP Deployments Aren't Anywhere Near JavaScript Maturity"
description: "In JS you connect a repo and you're live in seconds, for free. In PHP you're still assembling servers, deploy scripts, and a credit card. Here's why the gap is so wide."
pubDate: 06/06/2026 11:00
author: Elian Van Cutsem
tags:
  - PHP
  - JavaScript
  - Laravel
  - Deployment
  - DevOps
  - rant
imgUrl: "./images/php-vs-js-deployments.png"
---

# PHP Deployments Aren't Anywhere Near JavaScript Maturity

I split my week between two worlds. One half is Astro, React, Next.js and friends. The other half is Laravel. I love both stacks. But every single time I go to ship something, the same thing happens: the JavaScript app is live before I've finished my coffee, and the PHP app needs a small DevOps project first.

And honestly? I'm done pretending that's normal.

## What shipping JS feels like in 2026

Here's the entire deployment story for a JavaScript app today:

1. Push to `main`.
2. There is no step 2.

You connect a Git repo to [Vercel](https://vercel.com), [Netlify](https://www.netlify.com), [Cloudflare Pages](https://pages.cloudflare.com), or even just `surge` from your terminal, and every push to `main` ships to production. Every pull request gets its own preview URL. Rollbacks are one click. SSL, CDN, and global edge are on by default. You configure exactly nothing.

And the part that still blows my mind: for a hobby project, **it's free**.

- **Cloudflare Pages** gives you unlimited bandwidth and 500 builds/month on the free tier, with no egress fees.
- **Netlify** and **Vercel** both ship a genuinely free hobby tier with Git-connected deploys and preview environments out of the box.
- Need a database? **Neon**, **Supabase**, and **Turso** all have free Postgres/SQLite tiers, and your migrations just run as a deploy step (`prisma migrate deploy`, `drizzle-kit push`, whatever you like).

So the full loop — code, database, migrations, SSL, global CDN, preview deploys — costs **€0** and takes about a minute to wire up. That's the bar now. That's what "normal" looks like for a whole generation of developers.

## Now do the same thing in PHP

Cool. Now I want to ship a small Laravel app. Same idea — push to `main`, run my migrations, go live.

Buckle up.

A Laravel app isn't a pile of static files dropped on a CDN. It's a **long-running application** that needs:

- a persistent PHP runtime (PHP-FPM behind nginx),
- a relational database that's always on,
- a queue worker for jobs,
- a scheduler (cron) for `schedule:run`,
- and a deploy script that pulls, installs, builds assets, and runs `php artisan migrate --force`.

None of that assembles itself. So you reach for tooling — and here's where the "you always need to pay" reality kicks in.

### The PHP deployment menu (and the bill at the bottom)

- **[Laravel Cloud](https://cloud.laravel.com/pricing)** is the closest thing PHP has to the Vercel experience. Connect a repo, push, done — it even added scale-to-zero compute. But the cheapest plan is the **Starter at $5/mo** (first month free, $5 of usage credits). There is no free tier. You need a card on file before anything runs.
- **[Laravel Forge](https://forge.laravel.com/pricing)** automates server provisioning beautifully, but Forge is a *management layer* — it starts at **$12/mo** and you still bring your own server on top (DigitalOcean, Hetzner, or Laravel's own VPS from ~$6/mo). So that's two bills before you ship a line of code.
- **Ploi** made its core free, which is great — but again, free tool, paid server underneath.
- **Coolify** is fully open-source and free *as software*, but you self-host it, which means a VPS you provision, secure, patch, and babysit. Free as in puppy.
- **Fly.io** and **Railway** can run PHP, but they're usage-based and you'll be paying once you're past the trial credits.

See the pattern? In JavaScript land, the free option is the *default* and the good one. In PHP land, "free" always means "free tool, now go rent and maintain a server," or it just doesn't exist. **There is no push-to-deploy, fully-managed, actually-free PHP host.** Not one.

## This isn't PHP devs being lazy — it's an architecture mismatch

I want to be fair here, because the comparison isn't entirely apples to apples.

JavaScript hobby deploys ride a model that's *perfect* for free tiers: static output or short-lived serverless functions sitting on a CDN. Nothing is "always on," so providers can give it away and only charge the people who scale.

A traditional PHP app is the opposite. It expects a process that's always warm, a database that's always connected, workers that are always running. Keeping that alive 24/7 costs real money, and "free" doesn't fit the shape of it. That's the honest engineering reason the free tiers never showed up.

But here's my point: **that's exactly the problem the platforms are supposed to solve, and JS solved it years ago.** Laravel Cloud's scale-to-zero is finally chasing the same idea — spin down when idle, spin up on request. It's the right direction. It's just still gated behind a paid plan, and it arrived *years* after Vercel made this the default for everyone else.

## The DX gap is the real story

Forget the money for a second. The thing that actually wears me down is the **setup tax**.

In JS, the platform owns the boring parts. You connect a repo and the deploy pipeline, preview environments, SSL, and CDN simply exist. You think about your app.

In PHP, you're still the integrator. Server plus PHP-FPM plus nginx plus queue plus scheduler plus database plus a deploy script you hand-wrote — and when something breaks at 2am, that's your pager. Tools like Forge and Ploi make assembling those pieces *much* nicer, but you're still the one assembling them. That's a fundamentally less mature experience, and we should be allowed to say so.

## So where does that leave us?

I'm not writing this to dunk on PHP. I ship Laravel to production and I'd happily keep doing it for the next decade. The language and the framework are in the best shape they've ever been.

But deployment? Deployment is **nowhere near** JavaScript's maturity, and pretending otherwise doesn't help anyone:

- JS gives you free, zero-config, push-to-deploy with previews and a database, in under a minute.
- PHP gives you a menu of good-but-paid tools, every one of which still asks you to bring (and babysit) a server, or hand over a card before anything runs.

Laravel Cloud is the most promising sign that the gap is closing. Scale-to-zero, push-to-deploy, managed databases — that's the right model. I just want to get to the day where a teenager with a Laravel idea and no credit card can ship it to the world for free in a minute, the exact same way they can with Next.js today.

We're not there yet. Not even close.

---

*Disagree? Think I'm sleeping on a free PHP host you love? Tell me — I'm [@eliancodes](https://x.com/eliancodes) and I'd genuinely love to be proven wrong.*
