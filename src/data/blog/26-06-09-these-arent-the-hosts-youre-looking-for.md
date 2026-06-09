---
title: "These Aren't the Hosts You're Looking For"
description: "I went hunting for one platform to host every site my agency runs — static, JS, PHP, the whole pile. Here's the 2026 hosting landscape I waded through, and why the answer turned out to be a seam, not a single roof."
pubDate: 06/09/2026 09:00
author: Elian Van Cutsem
tags:
  - hosting
  - devops
  - PHP
  - Laravel
  - JavaScript
  - Cloudflare
imgUrl: "./images/these-arent-the-hosts-youre-looking-for.png"
draft: false
---

# These Aren't the Hosts You're Looking For

A while back I wrote that PHP's deployment story still lags behind JavaScript.

A few people disagreed. Loudly.

This post is, in a way, the receipts.

Because this week I went looking for a single home for **all** my sites. And that hunt told me exactly where the gap has closed, and where it hasn't.

---

Here's the itch.

I run a pile of sites through my company.

Some are static or JS:

* Astro, mostly
* the kind of thing Netlify and Vercel host for free without me thinking about it

And some are PHP:

* Laravel
* Livewire
* the works

Netlify will host the first half all day long and charge me nothing.

It will do precisely nothing for the second half.

So I went looking for one roof. One platform, one mental model, one bill.

With a few hard rules:

* not raw GCP (I've done enough Cloud Run yak-shaving for small containers to last a lifetime)
* it had to play nice with my shared database, which already lives on GCP and isn't moving

What follows is everybody I auditioned.

And the thing I learned that isn't printed on any pricing page.

## The ones that didn't get an interview

First, the names I didn't even call back: the hyperscalers.

AWS. Azure. Raw GCP.

They can host every single thing on my list and then some. There's no capability question here. ECS, App Runner, App Service, Cloud Run, they'll all run a Laravel container next to a static site next to a Postgres, at any scale I'll ever touch.

They're objectively the most powerful options on the table.

They're also the most expensive in the currency I actually care about.

Which isn't dollars.

It's overhead.

Picking one means:

* IAM policies
* VPCs and subnets
* a load balancer to wire up
* a separate billing account to babysit
* a console with four hundred services where I want maybe three

That's an enormous amount of *platform* to operate just to serve some HTML.

I've already done the Cloud Run version of this dance. That's **why** "no raw GCP" is a rule and not a preference.

The whole point was to spend *less* of my life in cloud consoles.

So the big three were out before the first `flyctl` command.

Powerful? Yes. Worth the operational tax for this job? No.

## Contestant 1: Fly.io

Fly was the romantic pick.

Globally distributed. `flyctl deploy`. The whole "your app near your users on real servers" promise.

So I started here.

First thing I hit: **the free tier is gone.** Has been since 2024 for new accounts.

What you get now is a trial, then pay-as-you-go all the way down.

Fine. I'm not allergic to paying for things.

And the scale-to-zero is real:

* machines auto-stop when idle
* compute billing pauses
* they wake on the next request with a few seconds of cold start

For a brochure site that gets visited twice a week, the compute bill rounds to nothing.

Lovely.

And then the database walked in and ruined the party.

Fly's *managed* Postgres does not scale to zero.

No scale-down policy. It's priced for a full month of uptime, and the cheapest plan starts around **$38/month** before you've stored a single byte.

For an app nobody's using, that's an absurd floor.

The cheap path is to run Postgres yourself inside a Fly Machine that *can* auto-stop. But then you own:

* the backups
* the upgrades
* the failover
* a volume that keeps billing whether the machine runs or not

A stopped app, it turns out, is not a free app.

Previews? Fly can do them. But there's no toggle.

You wire up the official `superfly/fly-pr-review-apps` GitHub Action and assemble the per-PR lifecycle yourself, database included.

It works.

It's also exactly the "build your own platform with YAML" exercise I was trying to escape.

Fly is brilliant for one specific job: multi-region apps that need to sit physically close to users worldwide.

My sites are brochures and Laravel monoliths talking to a database in Belgium.

I don't need my pixels in São Paulo.

Next.

## Contestant 2: Firebase App Hosting

This one had the shortest interview. Two reasons, both fatal.

**It doesn't do PHP.**

Firebase App Hosting is framework-centred, and the framework it centres on is JavaScript. Next.js and Angular get the red carpet. Everything else falls back to a Node.js buildpack.

There is no door for Laravel.

So it covers my JS half and ignores the half that sent me looking in the first place.

**And it *is* GCP.**

Under the Firebase branding it's Cloud Build, Cloud Run, Cloud Load Balancer, Cloud CDN, Secret Manager.

Choosing it doesn't get me out of the Google trench. It just hands me a nicer ladder back in.

To be fair, that nicer ladder is the whole point. It hides the Cloud Run plumbing I found tedious.

But "escape GCP" and "adopt a GCP product" are not the same sentence.

---

Same interview, same ending, for the two names I didn't even bother to seat: **Vercel and Netlify.**

They're the incumbents for exactly the half of my estate that was never the problem.

Push an Astro site. Get a URL. Free previews. Zero thought.

I already use them. They're genuinely excellent at it.

But they fail on the identical line Firebase does: no PHP. Their functions are JavaScript-and-friends serverless runtimes, not a place a Laravel monolith runs.

Brilliant at the easy half. Nothing to say about the hard half.

Same non-answer as Firebase. Just with a nicer reputation in my circles.

Moving on.

## Contestant 3: Coolify

Now we're talking.

Coolify is the self-hostable, open-source answer to "Vercel, but on my own box, and it deploys everything."

Static sites, Laravel, raw Docker, databases. All from one dashboard. All over SSH.

The economics are the selling point.

You point it at a cheap VPS and the bill goes flat:

* a Hetzner box for ~€5–6/month
* pile twenty small sites on it before the number moves
* the marginal cost of one more small site is basically RAM

That's the Netlify "free for static" feeling, extended to PHP and containers.

And it does proper preview deployments:

* each PR gets its own isolated deploy on a unique subdomain
* the GitHub app posts the URL straight onto the PR
* it tears the whole thing down when you merge

Same build strategy as production, so a Laravel preview behaves like the real thing.

For an agency where a client has several PRs open at once, those previews cost nothing extra. They're just more containers on the box you're already paying for.

Try that on a per-environment managed plan and watch the meter spin.

Bonus, given my GCP database: put the box in a German or Finnish Hetzner region and you're a few milliseconds from GCP's Belgian region.

The database doesn't move. The latency stays boring.

The catch is the obvious one.

**You own the ops.**

* backups
* log aggregation
* alerting
* the 2 a.m. "why is the proxy unhealthy"

That's all yours now.

I already self-host a media stack at home, so this doesn't scare me.

But it's a real cost. And pretending otherwise is how people end up with a single unbacked-up VPS holding their entire client portfolio.

Don't be that person.

And there's a worse catch hiding inside the economics I just praised.

"Pile twenty small sites on one box" is the cheap part *and* the dangerous part. Same fact, two faces.

Because the moment one site goes crazy, everything shares the fall:

* one runaway PHP process eats the CPU
* one memory leak chews through the RAM
* one client's launch gets hugged to death

...and **all twenty sites go down together.** A client who's done nothing wrong is offline because a neighbour misbehaved.

That's the opposite of what containers are *for*.

Containers can isolate. They can cap CPU and memory per service. They can scale a busy one out and leave the quiet ones alone. They can spread across more than one machine so a bad box isn't a bad day.

A flat single-VPS Coolify setup throws most of that away. You get the container *packaging* but not the container *resilience*. Everything lands back on one shared kernel, fighting over one finite pile of RAM.

Right model. Stupid placement.

And no amount of "it's only €6/month" makes shared fate okay for a portfolio of client apps.

---

The obvious cousin here is **Laravel Forge**. Worth saying why I didn't go that way.

Forge does roughly the same job. It provisions and deploys to a VPS *you* bring, wires up Nginx, PHP, queues, SSL, the lot. It's more polished and more PHP-native than Coolify at it.

But:

* it's a monthly subscription
* on team plans it's priced **per seat**

And that's the part that sticks in my throat.

I'd be paying a recurring fee, per person, to deploy to a server I'm *already* renting and paying for separately.

Forge never touches the box's bill. That stays mine. It just adds a SaaS line item on top to manage it.

For a one-person agency, maybe that math pencils out for the convenience.

For me, Coolify does the same thing, open-source, with the subscription swapped for "you maintain it."

I'm signing up for the ops either way. I'd rather not also rent the control panel.

## Contestant 4: Laravel Cloud

Here's where the PHP gap I'd been complaining about narrowed right in front of me.

A week ago, June 2nd, Laravel Cloud shipped full-stack scale-to-zero.

Not just the compute. The whole thing.

Your app **and** its serverless Postgres go to sleep when there's no traffic, and wake on the first request in under half a second.

That last bit matters.

Sub-500ms wake means scale-to-zero is invisible to a visitor. That's the difference between a cost optimisation and a bad first impression.

The pricing is refreshingly legible:

* Starter is **$5/month**
* comes with $5 of usage credit
* scale-to-zero on by default
* custom domains included

Their own worked example is a content site with a few thousand monthly readers, sitting comfortably inside that credit. Effective compute-and-database cost: zero.

For a barely-used app, you pay the plan fee and not much else. And you can set a hard spending cap so a crawler hammering your endpoints can't turn a $10 month into an $80 one.

This is the thing I'd said PHP didn't have.

A managed platform, built by the framework's own team, where an idle Laravel app, database and all, costs roughly the price of a coffee.

The serverless Postgres sleeping next to the compute is the part Fly couldn't match.

The asterisk: previews live on the Growth tier at **$20/month**, not the $5 Starter.

So "cheap idle hosting" and "client previews on the same app" aren't the same line item here.

And it's Laravel-shaped by design. Never going to be the one home for my static miscellany.

## Contestant 5: Sevalla

A quick word, because it earns one.

Sevalla is Kinsta's app-hosting product. It's the most general managed Vercel-alike that genuinely does PHP, containers, and static, with per-PR previews and no extra CLI tooling.

Clean dashboard. Sensible deploys.

But:

* it's GCP-backed under the hood, like Firebase, just abstracted away from the console I didn't like
* the pricing is per-app, which adds up fast when "all my sites" is a long list of small ones

A perfectly good option. Just not *mine*.

Same reason a single flat VPS keeps beating per-app billing when you've got a fleet of little sites.

## Contestant 6: Cloudflare

I saved this one for a reason.

All my domains already point at Cloudflare.

So the question wasn't "should I add Cloudflare." I'm already standing in the building.

It was "how much of the hosting can the building do?"

The answer split clean down the middle of my problem.

**For the static and JS sites, Cloudflare is arguably the best home on this whole list. And nearly free.**

* Pages gives every PR a unique preview URL that updates as you push
* exactly the client-preview flow I want, for nothing
* DNS, SSL, CDN, DDoS protection already wired, because I live there
* no new vendor surface at all

And the GCP-database angle paid off in a way I didn't expect: **Hyperdrive.**

It's built to make an edge worker's connection to an *external* managed database fast. Pooling plus caching. And it explicitly supports Postgres and MySQL on AWS, Azure, and GCP.

So a Cloudflare-hosted JS app could talk to my existing GCP database performantly, without moving the database an inch.

One restriction: Hyperdrive is a JavaScript/TypeScript thing. It does nothing for PHP.

Which is exactly where Cloudflare hits the wall.

Workers can't run PHP. They're V8 isolates. JS and WASM only.

The escape hatch is Cloudflare Containers:

* can run a Laravel container
* does scale to zero
* billed per 10ms of active runtime, on top of the $5 Workers Paid plan

Technically viable. But:

* it's young
* you're back to maintaining Dockerfiles
* there's a cold start to wear
* and the irony writes itself: Cloudflare benchmarks its container pricing against Google Cloud Run, the very thing I said was too fiddly for small containers

Putting a session-heavy Livewire monolith on bursty scale-to-zero containers in beta is not where I want a client's app to live in 2026.

So Cloudflare hits the same PHP wall as Firebase.

But with a far better static story. And the fact that I'm already there.

## The thing nobody put on the pricing page

Somewhere around contestant four, the actual lesson clicked. And it reframed the whole hunt.

For a barely-used app, the compute price is almost irrelevant.

**Everybody** scales compute to zero now. Fly, Laravel Cloud, Cloudflare, all of them.

Idle compute is a solved problem. It costs roughly nothing everywhere.

The entire decision lives in one place:

**What can't scale to zero.**

And the answer, nine times out of ten, is the database.

That's the lens that actually separated these platforms:

* Laravel Cloud sleeps the database alongside the app, so an idle stack genuinely costs the floor
* Fly's managed Postgres refuses to sleep and floors at $38, so its "scale to zero" only ever applied to the cheap half of the bill
* Cloudflare doesn't care, because I'd point it at my GCP database anyway

Stop staring at the per-second compute rate.

Start asking "what's still metered at 3 a.m. when nobody's awake."

The comparison gets a lot shorter.

> The cost of a scale-to-zero app is the cost of the thing that can't.

Write that one on a sticky note.

## Plot twist: there is no single roof

I went looking for one platform.

I'm not going to find one. And I've made my peace with it.

The reason is structural, not a failing of any vendor.

The JavaScript/PHP boundary is a real architectural seam.

* the tools that are brilliant at the static, edge, per-request JS world (Cloudflare, Vercel, Netlify) are built on a runtime model, isolates and functions, that PHP doesn't fit
* the tools that are brilliant at PHP (Laravel Cloud, a Coolify box, Forge) are built around long-running processes, queue workers, persistent request handling

Force one platform to be excellent at both, and you end up with a Laravel container wedged into an edge runtime, cold-starting at a client while they refresh and frown.

So I stopped fighting the seam.

And started designing around it.

## What I actually landed on

Cloudflare isn't my one roof.

It's my *front door*. And the home for half the house.

Concretely:

* the Astro, static and JS sites go on **Cloudflare Pages**. Free, free previews, already configured, with Hyperdrive to the GCP database for any JS app that needs it
* the Laravel and Livewire apps go on **Laravel Cloud** (for the polish and the database-that-sleeps) or a **Coolify box** (when I want flat-rate hosting with unlimited previews and don't mind owning the ops)
* **Cloudflare sits in front of all of it** regardless. DNS, CDN, SSL, WAF. One front door, no matter which engine room the request ends up in

That's two platforms instead of one.

The line between them is at least the line that already exists in my stack. And I'd be running Cloudflare across the whole estate either way.

But let's be honest about what this is.

It's a workaround.

Two dashboards. Two mental models. Two places to check when something's on fire. I talked myself into "one coherent setup," but it's coherent the way a binder of taped-together receipts is coherent. It works because I drew the lines, not because anyone built it that way.

That's not the thing I went looking for.

## So, about that PHP gap

Here's the part that surprised me. And the reason this is a sequel, not a retraction.

When I wrote that PHP's deployment story lagged JavaScript, the strongest counter was always:

*"Name one thing JS deploy has that PHP can't get."*

A year ago I had a list.

This week that list got shorter by a big item: a managed platform where an idle full-stack PHP app, database included, sleeps to nearly nothing and wakes in under half a second.

That's not catching up.

That's **caught up**, on the single feature people pointed at most.

The gap isn't gone.

PHP still doesn't have a Cloudflare-Pages-grade "push a static site and forget it costs anything" story. Because PHP isn't static, and never will be.

But the distance between deploying PHP and deploying JS is the smallest I've ever seen it.

The frameworks are doing the work the language community used to bodge together by hand.

So the PHP gap is closing. Good.

That still didn't get me the thing I actually wanted.

## What I actually wanted

Let me say it plainly, because I danced around it for six contestants.

I wanted **one provider**.

* JS apps
* PHP behind real containers
* workers and queues
* databases
* every app I run, in one place
* one nice, reliable UI to see and manage all of it

That product doesn't exist. Not as one box. Every option on this list is excellent at a slice and silent on the rest.

So I don't get to say "these were better." They weren't.

They were a pile of good slices that don't add up to the whole.

## The closest thing is Coolify. And that's the tell.

Here's what kept nagging me after the dust settled.

The only contestant that even *tried* to be the whole thing was Coolify.

One box. JS, PHP, containers, databases, workers, all of it, all in one dashboard. On infrastructure I already pay for. That's the shape of what I want.

And notice what it does to that "structural seam" I was so sure about: it dodges it. The seam is only real if you commit to the edge, isolates-and-functions model where PHP doesn't fit. Step back to plain containers on a box and the seam quietly disappears. JS and PHP are just two containers again.

So why didn't I just stop there and call it?

Because the capability was never Coolify's problem. **The experience was.**

* container file management that you babysit by hand
* config sprawl the moment you step off the happy path
* a UI that's fine until it isn't, and then you're back in SSH and YAML
* one box by default, with shared fate baked in, and no obvious on-ramp to spreading load across machines
* enough rough edges that I wouldn't hand a client's production app to it without flinching

Coolify proves the model works. What it's missing isn't features.

It's polish. Reliability. Sane defaults that don't quietly put twenty clients on one kernel. A UI I'd actually trust at 2 a.m.

And that's a much smaller, much more interesting problem than "go invent a new cloud."

## So maybe the answer isn't a host at all

Maybe I've been auditioning the wrong category this whole time.

I don't need a *seventh provider*.

I need a better, more reliable **layer** on top of the boxes I already own. One that actually uses what containers can do:

* real resource limits, so one site can't starve the rest
* isolation that means a neighbour crashing isn't my client's outage
* scaling a busy app out, and spreading across more than one machine, without it becoming a Kubernetes research project

The thing that turns "Coolify, but I'm nervous" into "all my apps, in one place, and I trust it at 2 a.m."

Which is, suspiciously, the exact shape of the thing I've already been building in public.

👉 [getcoral.dev](https://getcoral.dev)

Funny how a hosting hunt ends up pointing right back at the project on your own desk.

These weren't the hosts I was looking for.

Maybe none of them are.

Maybe I have to build it.

---

*Chasing the same one-provider dream across the JS/PHP seam? Tell me how you've split it. Find me [@ElianCodes](https://x.com/eliancodes).*
