# The Elian.codes site

The full source code for Elian's personal website and blog.

## Current stack

The site is built with [Astro](https://astro.build), plain CSS, and an internal component/design system. It is deployed on [Vercel](https://vercel.com).

## Previous technologies

This website has gone through a few iterations over time. Earlier versions used:

- [Nuxt](https://nuxtjs.org)
- [Vue](https://vuejs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Firebase Functions](https://firebase.google.com/docs/functions)

## Deployment and hosting

The website is currently hosted on Vercel, with DNS managed through [Cloudflare](https://www.cloudflare.com).

```bash
pnpm dev
pnpm build
pnpm preview
```

## Notes

- Most UI is built in Astro components with component-scoped CSS.
- Interactive pieces use small amounts of vanilla JavaScript.
- Content is powered by Astro content collections.
