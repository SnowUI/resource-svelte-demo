<!-- AI-CONTRACT: tier=L1 | id=snowui-resource-svelte-demo | scope=snowui/resource-svelte-demo -->
# SnowUI Resource Svelte Demo 仓库规则（L1）

读者：在 `snowui/resource-svelte-demo` 工作的维护者与 AI。本内部私有仓库提供 `@snowui-design-system/resource-svelte` 全量图标、头像、插画、Logo 与背景资产的分类浏览与检索演示应用。

## 红线与章节索引

- `[RSD-READ-01]` 必读顺序：[Project/AGENTS.md](../../AGENTS.md) → [snowui/AGENTS.md](../AGENTS.md) → 本文件 → 命中专题 → §1
- `[RSD-CONSUME-01]` 仅消费 `@snowui-design-system/resource-svelte` 公开导出，不在演示层硬编码复制上游 SVG 资产 → §2
- `[RSD-GATE-TEST]` 未收到 Owner 验收指令严禁运行 `scripts/icon-names.test.mjs` 等测试脚本；私有根 [README.md](README.md) 保持 ≤ 5 行中文指针 → §2

## 1. 启动阅读链与一跳路由

开始任何任务前，先完成 `[Project/AGENTS.md](../../AGENTS.md) → [snowui/AGENTS.md](../AGENTS.md) → 本文件`（独立检出缺少上层规则时先说明缺口，不假称已读取），再按意图一跳直达：

| 任务意图 | 本仓与共享权威落点 |
| --- | --- |
| 应用入口、路由与资源加载 | [src/main.ts](src/main.ts) · [src/App.svelte](src/App.svelte) · [src/lib/resource-module.ts](src/lib/resource-module.ts) · [src/lib/icon-names.ts](src/lib/icon-names.ts) |
| 首页与分类浏览视图 | [src/pages/Home.svelte](src/pages/Home.svelte) · [src/pages/Category.svelte](src/pages/Category.svelte) · [src/components/Layout.svelte](src/components/Layout.svelte) |
| 构建配置与测试脚本（仅验收时运行） | [package.json](package.json) · [vite.config.ts](vite.config.ts) · [scripts/icon-names.test.mjs](scripts/icon-names.test.mjs) |
| 上游 Svelte 资源包与样式规范 | [../resource-svelte/AGENTS.md](../resource-svelte/AGENTS.md) · [../resource-base/AGENTS.md](../resource-base/AGENTS.md) · [StyleSpec.md](../docs/standards/StyleSpec.md) |

## 2. 仓库职责与维护边界

1. **动态资源映射**：分类列表与图标名称解析跟随 `@snowui-design-system/resource-svelte` 导出同步；上游资源集更新后优先通过公开导出刷新，不手写维护重复资产表。
2. **声明式界面与语言分工**：页面组件保持声明式结构，代码注释统一使用英文，根 [README.md](README.md) 保持极简中文指针且不保留无正文文档空壳页。
3. **开发与验收节奏**：日常调试使用 `pnpm dev` / `pnpm build`；单元测试与全仓验收等待 Owner 明确验收指令。
