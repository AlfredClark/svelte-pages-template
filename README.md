# svelte-pages-template

English | [简体中文](docs/README-zh_CN.md)

[![Deploy](https://github.com/AlfredClark/svelte-pages-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/AlfredClark/svelte-pages-template/actions/workflows/deploy.yml) [![Quality](https://github.com/AlfredClark/svelte-pages-template/actions/workflows/quality.yml/badge.svg)](https://github.com/AlfredClark/svelte-pages-template/actions/workflows/quality.yml)

SvelteKit + Svelte 5 + Tailwind CSS v4 static template, deployed to GitHub Pages with GitHub Actions.

## Features

- pnpm + Vite + TypeScript + Svelte 5 + SvelteKit (`adapter-static`)
- Tailwind CSS v4 (Vite plugin, CSS-first config)
- ESLint + Prettier (Svelte and TypeScript ready)
- GitHub Actions workflow: build on push to `main`, deploy to GitHub Pages
- Sub-path ready: `base` is `/svelte-pages-template`, `404.html` fallback, `.nojekyll`

## Quick start

```sh
pnpm install
pnpm dev        # local dev, base is ''
pnpm check      # svelte-check
pnpm lint       # prettier --check + eslint
pnpm build      # static output in build/
```

## Deploy

1. Push to the `main` branch.
2. In the repository settings, set Pages source to **GitHub Actions**.
3. The site is published at `https://<user>.github.io/svelte-pages-template/`.

## Rename

If the repository name changes, update the `base` in `vite.config.ts`:

```ts
paths: {
  base: process.argv.includes('dev') ? '' : '/<repo-name>';
}
```
