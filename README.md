# SnowUI Resource Svelte Demo

SnowUI Svelte 资源展示站，用于验证 `@snowui-design-system/resource-svelte` 的图标、头像、背景、插画、图片、Logo，以及图标库切换能力。

仓库：[SnowUI/resource-svelte-demo](https://github.com/SnowUI/resource-svelte-demo)

## 技术栈

- Svelte 5
- TypeScript
- Vite
- UnoCSS
- `@snowui-design-system/resource-svelte`

## 开发

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm run preview
```

## 图标库切换验证

Demo 应覆盖两类用法：

```svelte
<script lang="ts">
  import { FourLeafClover, Icon, IconProvider } from "@snowui-design-system/resource-svelte";
</script>

<FourLeafClover size={24} />

<IconProvider collection="phosphor" fallbackCollections={["snowui"]}>
  <Icon name="arrow-line-right" />
</IconProvider>
```

直接组件模式验证兼容性；`Icon + IconProvider` 验证 `usageName` 在 SnowUI / Phosphor / 未来 Iconify collection 之间切换时页面代码不变。

## 发布与同步

本项目是展示站，不发布到 npm，只构建并同步 GitHub。

本地目录目前需要首次绑定独立仓库时，使用：

```bash
/Users/yuan/Project/snowui/scripts/publish-and-sync.sh --target resource-svelte-demo --init-missing-git --fix-remote --message "chore: update resource svelte demo" --yes
```

之后常规同步：

```bash
/Users/yuan/Project/snowui/scripts/publish-and-sync.sh --target resource-svelte-demo --message "chore: update resource svelte demo" --yes
```

如需只看动作：

```bash
/Users/yuan/Project/snowui/scripts/publish-and-sync.sh --target resource-svelte-demo --dry-run
```

## 维护约定

- `package.json` 保持 `private: true`
- 依赖 `@snowui-design-system/resource-svelte`
- 展示站需要同步覆盖直接组件模式和通用图标模式
- GitHub 仓库为新建仓库 `SnowUI/resource-svelte-demo`，本地首次同步需要独立 `.git`
