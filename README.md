# The Elian.codes site

The full source code for Elian's personal website and blog.

## Current stack

- [Astro](https://astro.build) 7, fully static, with plain component-scoped CSS
- [Vite+](https://viteplus.dev) (`vp`) for formatting, linting and type-aware checks
- [Void](https://void.cloud) deploying to Cloudflare Workers static assets
- Design: V5 "Signal" (fluo pink `#FF48B0`, process blue `#0078BF`, Big Shoulders Display, Martian Mono, Archivo)

## Getting started

Requires Node `^24.22.0 || >=26.12.0` (see `.node-version`) and pnpm 10.

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm check      # vp: format, lint, type-check
pnpm build      # astro check + astro build → dist/
```

## Content

Everything on the site is computed from content collections in `src/data/`:

| Source       | What it feeds                                                                         |
| ------------ | ------------------------------------------------------------------------------------- |
| `blog/*.md`  | Articles, tag pages, RSS (`/blog.xml`), markdown twins (`/blog/<slug>.md`), OG images |
| `tour.yaml`  | Every talk, panel, stream and podcast: the tour log, home stats, "caught on stage"    |
| `talks.yaml` | Bookable talks in the speaker kit                                                     |
| `site.ts`    | Navigation, socials, lineup, organized events, bio, ticker copy                       |

Add a talk by adding an entry to `tour.yaml`; the counts for stages, countries and continents update everywhere.

## Deployment and hosting

Pushes to `main` deploy through GitHub Actions (`.github/workflows/ci.yml`): check, build, then
`void deploy --platform cloudflare --dir dist` to the `elian-codes` Worker.

The deploy job needs:

- secret `CLOUDFLARE_API_TOKEN` (Workers Scripts: Edit)
- secret `CLOUDFLARE_ACCOUNT_ID` (only if the token can reach more than one account)
- variable `ENABLE_ANALYTICS` set to `true` to load analytics in the production build (optional)

Deploying by hand:

```bash
pnpm build
pnpm exec void deploy --platform cloudflare --dir dist
```

Redirects and headers live in `public/_redirects` and `public/_headers`. DNS is managed through [Cloudflare](https://www.cloudflare.com).

## Previous technologies

This website has gone through a few iterations over time. Earlier versions used:

- Astro on [Vercel](https://vercel.com)
- [Nuxt](https://nuxtjs.org)
- [Vue](https://vuejs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Firebase Functions](https://firebase.google.com/docs/functions)
