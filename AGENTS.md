# AGENTS.md

## Stack

pnpm + Vite + TypeScript + Svelte 5 + SvelteKit + Tailwind CSS v4 + ESLint + Prettier.
Static output via `adapter-static`, deployed to GitHub Pages with GitHub Actions.

## Commands

- `pnpm dev`：本地开发，base 为空。
- `pnpm build`：静态构建，产物在 `build/`。
- `pnpm preview`：预览构建产物。
- `pnpm check`：类型检查。
- `pnpm lint`：格式检查加 ESLint。
- `pnpm format`：写回格式。
- Node 需要 >= 22.17。

## Structure

```
src/
├── app.css             # Tailwind 入口
├── app.d.ts            # App 全局类型
├── app.html            # 页面外壳
├── lib/                # 共享代码，经 #lib 引用
│   ├── index.ts        # 库入口，按需补再导出
│   ├── assets/         # 图片等资源
│   ├── components/     # 通用组件
│   ├── hooks/          # 可复用逻辑
│   └── utils/          # 工具函数
└── routes/             # 文件路由
    ├── +layout.svelte  # 全局布局，引入 app.css
    ├── +layout.ts      # 全站预渲染开关
    └── +page.svelte    # 首页演示
```

- 空目录用 `.gitkeep` 占位，删除占位文件不影响构建。
- `#lib` 注册在两处：`package.json` 的 `imports` 给构建用，`tsconfig.json` 的 `paths` 给 CLI 和编辑器用。两处指向同一目录。
- 新页面按 `about/+page.svelte` 这类目录加。hooks、service-worker、params 暂不需要，用到时再加。

## Naming

- 路由文件照 Kit 固定名：`+page`、`+layout`、`+error`、`+server`。不得自创。
- 组件用 kebab-case 目录加 `index.ts` 入口，如 `user-card/index.ts`。实现文件与目录同名，如 `user-card.svelte`。
- 对外导出名保持 PascalCase，如 `UserCard`。Svelte 标签必须大写开头。
- TS 和 JS 用 kebab-case，如 `format-date.ts`。含 runes 的文件必须以 `.svelte.ts` 结尾。可复用逻辑用 `use` 开头，如 `use-media-query.svelte.ts`。
- 资源文件和路由目录用小写 kebab-case，如 `hero-banner.svg`、`about-us/`。

## Conventions

- SvelteKit 3 项目配置写在 `vite.config.ts` 的 `sveltekit()` 插件里，不再使用 `svelte.config.js`。
- `tsconfig.json` 继承 `$app/tsconfig`，保持 `include` 和 `exclude` 不变。
- `$app/paths` 没有 `base` 导出，路径使用 `asset()` 和 `resolve()`。
- 生产环境 base 取 `/svelte-pages-template`，见 `vite.config.ts`。改仓库名时同步改这里。
- 全站预渲染（`src/routes/+layout.ts`）。SPA 回退页是 `404.html`。`static/.nojekyll` 必须保留。
- TypeScript 锁定 6.0.3。7.x 缺少旧版 JS 接口，会导致 Kit 同步崩溃，升级前先验证。
- Tailwind CSS v4 采用 CSS 优先配置，入口是 `src/app.css` 的 `@import 'tailwindcss'`。
- 组件使用 Svelte 5 runes 写法。页面标题放在各页面的 `<svelte:head>` 里，不写进 `app.html`。
- ESLint 使用扁平配置 `eslint.config.ts`，经 `eslint/config` 的 `defineConfig` 组织。
- 部署流程在 `.github/workflows/deploy.yml`：main 分支推送构建，经官方 Pages 动作发布，全部动作运行在 node24。

## Docs

- README 记录用法、部署、改名步骤。改 base、流程、脚本时同步更新 README。
