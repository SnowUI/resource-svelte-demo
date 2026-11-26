# SnowUI Resource Svelte Demo — AI Entry

Public SvelteKit demonstration app showcasing `@snowui-design-system/resource-svelte` asset imports, icon collections, weights, and `IconProvider` usage.

## Entrypoints

- Overview & local commands: [README.md](./README.md)
- Upstream package repository: https://github.com/SnowUI/resource-svelte
- Named material export catalog: https://snowui.dev/llms/resources.json
- SnowUI AI documentation: https://snowui.dev/llms-en.txt (Chinese: https://snowui.dev/llms.txt)

## Guidelines for AI

1. Consume `@snowui-design-system/resource-svelte` exclusively through its public package exports; do not hardcode machine-local filesystem paths.
2. Check exact asset export names against https://snowui.dev/llms/resources.json before adding imports.
