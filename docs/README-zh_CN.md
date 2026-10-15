# svelte-pages-template

[English](../README.md) | 简体中文

[![Deploy](https://github.com/AlfredClark/svelte-pages-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/AlfredClark/svelte-pages-template/actions/workflows/deploy.yml) [![Quality](https://github.com/AlfredClark/svelte-pages-template/actions/workflows/quality.yml/badge.svg)](https://github.com/AlfredClark/svelte-pages-template/actions/workflows/quality.yml)

基于 Svelte 的 GitHub Pages 开发模板。SvelteKit + Svelte 5 + Tailwind CSS v4 静态模板，经 GitHub Actions 部署到 GitHub Pages。

## 特性

- pnpm + Vite + TypeScript + Svelte 5 + SvelteKit（`adapter-static`）
- Tailwind CSS v4（Vite 插件，CSS 优先配置）
- ESLint + Prettier（Svelte 和 TypeScript 开箱即用）
- GitHub Actions 工作流：推送到 `main` 分支构建，部署到 GitHub Pages
- 子路径就绪：`base` 取 `/svelte-pages-template`，`404.html` 回退，`.nojekyll`

## 快速开始

```sh
pnpm install
pnpm dev        # 本地开发，base 为空
pnpm check      # 类型检查
pnpm lint       # 格式检查加 ESLint
pnpm build      # 静态产物输出到 build/
```

## 部署

1. 推送到 `main` 分支。
2. 在仓库设置里把 Pages 源设为 **GitHub Actions**。
3. 站点发布在 `https://<user>.github.io/svelte-pages-template/`。

## 改名

仓库改名后，同步改 `vite.config.ts` 里的 `base`：

```ts
paths: {
  base: process.argv.includes('dev') ? '' : '/<repo-name>';
}
```
