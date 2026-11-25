---
title: "I Rebuilt My Website (Again). This Time With Astro 7, Vite+ and Void."
description: "I rebuilt my personal website with Astro 7, Vite+ and Void on Cloudflare. Here's why I chose this stack, what I changed and what I learned."
pubDate: "2026-11-25T08:00:00+01:00"
author: Elian Van Cutsem
tags:
  - Astro
  - Tooling
  - Web Development
  - Cloudflare
imgUrl: "../../assets/blog/backlog/astro_old.webp"
draft: false
---

Another year, another rewrite of my personal website.

I think rebuilding your portfolio every couple of years is some kind of developer disease. Nobody asked for it. Nobody was waiting for it. And yet, here we are.

This time, though, I wanted to do things a little differently.

Not just a new coat of paint. A proper rewrite, a new design direction, and an excuse to play with some pretty interesting tools.

The result is [elian.codes](https://www.elian.codes), built with Astro 7, Vite+ and Void, deployed to Cloudflare.

Here's what I used, what I changed, and why.

## First, why rewrite it at all?

My personal website has been through quite a few iterations.

Vue. Nuxt. Astro. Different hosting providers. Different design systems. A whole collection of experiments that seemed like good ideas at the time.

And that's fine. A personal website should be a playground.

But somewhere along the way, I wanted the site to tell more of a story.

I've spent years building software, working on open source, organizing events, and speaking at conferences around the world.

The old website contained plenty of that information, but I wanted those experiences to become the website, rather than something buried three clicks deep.

So I went for a new direction.

Big typography. Fluorescent pink and blue. A little weirdness. A lot more personality.

I called the design **V5 Signal**.

Because apparently my personal website needs release names now.

## Astro 7: the obvious choice

I've been using [Astro](https://astro.build) for years. I was also part of the core team for a while.

So using Astro again probably isn't the most surprising decision I've ever made.

But there's a reason I keep coming back to it.

My website is fundamentally a content website.

Articles. Talks. Events. A speaker kit. Some interactive bits here and there.

I don't need a giant client-side application to display any of that.

Astro gives me components, content collections, routing, Markdown support and static generation without forcing unnecessary JavaScript into the browser.

For this rewrite, I moved to Astro 7 and kept the entire website statically generated.

No application server. No database. No runtime rendering just because I can.

And that's an important part of the story.

**Not everything needs to be a full-stack application.**

Sometimes HTML really is enough.

## Vite+: one toolchain, fewer things to maintain

Here's where things get a little more interesting.

For the tooling, I moved from Biome to [Vite+](https://viteplus.dev).

If you haven't looked into Vite+ yet, it's essentially an attempt to bring the modern JavaScript toolchain under one roof.

Vite, Vitest, Oxlint, Oxfmt, Rolldown and more, accessible through the `vp` CLI.

The idea is pretty straightforward.

Instead of configuring and maintaining a collection of separate tools, you get a more unified development workflow.

In my project, that means:

- `vp check` for formatting, linting and type-aware checks
- `vp lint` for linting
- `vp fmt` for formatting
- `vp test run` for running tests

Now, there's an important distinction here.

**Astro still owns the development server and production build.**

I'm not replacing Astro's build system with Vite+ or pretending that Vite+ is a new framework.

My `astro.config.ts` handles Astro. My `vite.config.ts` configures the Vite+ tooling.

They each have a job.

And that works surprisingly well for a project like this.

I also enabled type-aware linting and type checking, so the tooling can catch more than just formatting mistakes.

One little integration detail: Astro needs to generate its types before those checks run reliably on a fresh checkout. That's why my check script runs `astro sync` first.

Small detail. Annoying when you miss it.

But that's exactly the kind of thing you discover when you try new tooling in a real project instead of a hello-world demo.

## Void and Cloudflare: deploy the website, not an entire platform

For deployment, I wanted to try [Void](https://void.cloud).

Void is an interesting addition to the Vite ecosystem, bringing deployment tooling and Cloudflare integrations into the picture.

And since I already use Cloudflare for DNS and other services, it seemed like a good opportunity to experiment.

My first setup used Astro's Cloudflare adapter.

That works, and it makes sense when your application needs server-side functionality.

But then I started looking at what this particular website actually needed.

A bunch of statically generated pages.

That's it.

Why bring a server adapter into the picture?

So I removed it.

I also removed the Void Vite plugin, because I wasn't using Void's runtime APIs.

The final setup is much simpler.

Astro builds the website into `dist/`.

Then Void takes that output and deploys it directly to Cloudflare:

```bash
void deploy --platform cloudflare --dir dist
```

That's the deployment command.

No custom Node server. No self-hosted deployment platform. No unnecessary application runtime.

Void handles the deployment, and Cloudflare serves the generated assets through a Worker.

And importantly, this isn't a claim that Void is somehow required to host Astro on Cloudflare.

It isn't.

You can deploy Astro with Cloudflare's own tooling, and Vercel or Netlify would still be perfectly good homes for this website.

I wanted to try Void because the tooling interested me.

Sometimes that's a good enough reason to try something new.

Especially on your own website.

## Static doesn't have to mean boring

One of my favourite parts of this rewrite is how much the website does at build time.

My articles are still Markdown files.

My talks and conference history live in structured data files.

From those sources, the website can generate quite a lot:

The speaker kit knows which talks I offer.

The event history knows where I've spoken.

The homepage can display the latest stage statistics.

There's even a world map generated from the tour data using D3's geographic tooling.

Without needing an interactive JavaScript map library in the visitor's browser.

I also rebuilt the Open Graph images, kept the RSS feed, and added more structured data for search engines.

Articles and talks have Markdown versions too, alongside generated `llms.txt` files that make the site's content easier for tools to discover.

Will that magically make every AI assistant know who I am?

Obviously not.

But I like the idea of publishing content in formats that humans, search engines and other tools can all use.

The website is still just a collection of static files.

It's what you do with those files that makes things interesting.

## The things that weren't quite as straightforward

Of course, a rewrite wouldn't be a rewrite without a few things breaking along the way.

**First: URL compatibility.**

Moving hosting and rebuilding a website doesn't give you permission to break every existing link.

I wanted to preserve article URLs, redirects, RSS endpoints and the existing Open Graph image paths.

That's why the new build uses file-style output and no trailing slashes, with redirects and headers carried over to the new hosting setup.

**Second: generated content doesn't update itself.**

Some information, such as my next speaking event, is calculated during the build.

If nothing triggers another build, that information can become outdated.

The solution was simple enough: a daily GitHub Actions rebuild and deploy, in addition to the normal deployments when I push to `main`.

**Third: your toolchain needs to agree with itself.**

Combining a new Astro version, Vite+ and a new deployment workflow meant dealing with generated types, configuration details and CI checks.

Nothing particularly dramatic.

But enough to remind me that shiny new tools don't remove integration work. They just change which integration work you have to do.

## Would I recommend this stack?

Depends on what you're building.

For a personal website, documentation site, technical blog or conference speaker portfolio?

Absolutely worth considering.

Astro handles the content and rendering beautifully.

Vite+ gives me a consistent set of development tools.

Void makes deploying the static output to Cloudflare straightforward.

And Cloudflare is already where much of my web infrastructure lives.

But I wouldn't tell someone to migrate their perfectly working Astro site on Netlify tomorrow just because a new deployment tool exists.

Nor would I tell you Vite+ made my builds ten times faster without actually measuring it.

This wasn't a benchmark.

It was a chance to explore a new toolchain while building something I actually wanted to use.

That's how I like to learn.

## One last thing

I think developer portfolios have become a little too predictable.

A hero section.

A list of technologies.

Some project cards.

A button that says "Let's connect."

Nothing wrong with any of that, of course.

But a personal website should be personal.

It should give someone a sense of who you are beyond your GitHub repositories and job titles.

For me, that's software, open source, conferences, weird experiments and building things for the fun of it.

So that's what I wanted my website to reflect.

And I got to experiment with Astro 7, Vite+ and Void in the process.

Pretty good excuse for another rewrite.

Will I rewrite it again?

Probably.

I'm a developer. It's inevitable.

---

You can check out the [live website](https://www.elian.codes) or dig through the [source code on GitHub](https://github.com/ElianCodes/ElianCodes-frontend).
