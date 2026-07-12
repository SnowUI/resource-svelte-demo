<script lang="ts">
  import { componentNames, resourceComponents } from '../lib/resource-module'

  interface Props {
    category: keyof typeof componentNames | 'icons'
    componentName: string
  }

  let { category, componentName }: Props = $props()
  
  let codeVisible = $state(false)

  // 动态获取组件
  const componentKey = componentName
  const Component =
    (resourceComponents as Record<string, unknown>)[componentKey] || null

  const usageCode = `import { ${componentName} } from '@snowui-design-system/resource-svelte'

<${componentName} />`
</script>

<div
  class="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-all cursor-pointer"
  onclick={() => codeVisible = !codeVisible}
>
  <div class="aspect-square flex items-center justify-center bg-gray-50 rounded-lg mb-3 overflow-hidden p-4">
    {#if Component}
      <svelte:component this={Component} class="w-full h-full object-contain" />
    {:else}
      <div class="text-gray-400 text-sm">组件未找到</div>
    {/if}
  </div>
  
  <h3 class="font-medium text-gray-900 text-sm mb-2 truncate">{componentName}</h3>
  
  {#if codeVisible}
    <div class="mt-3 pt-3 border-t border-gray-200">
      <pre class="text-xs bg-gray-50 p-2 rounded overflow-x-auto"><code>{usageCode}</code></pre>
    </div>
  {/if}
</div>

