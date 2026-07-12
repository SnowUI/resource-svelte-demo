<script lang="ts">
  import { currentPath, getParams } from '../lib/router'
  import { componentNames } from '../lib/resource-module'
  import { getAllIconNames } from '../lib/components'
  import ComponentCard from '../components/ComponentCard.svelte'

  let path = $derived($currentPath)

  const routeParams = $derived.by(() => getParams(path, '/category/:category'))
  let category = $derived.by(() => (routeParams?.category || 'icons') as keyof typeof componentNames | 'icons')
  
  // 如果是 icons 分类，使用动态获取的图标列表
  let components = $derived.by(() => {
    const cat = category // 确保捕获 category 的变化
    if (cat === 'icons') {
      return getAllIconNames()
    }
    return componentNames?.[cat as keyof typeof componentNames] || []
  })
  
  // 当分类改变时，重置搜索查询
  let searchQuery = $state('')
  $effect(() => {
    // 当 category 改变时，重置搜索
    const _ = category
    searchQuery = ''
  })
  
  let filteredComponents = $derived.by(() => {
    const query = searchQuery
    const comps = components
    if (query) {
      return comps.filter(name => name.toLowerCase().includes(query.toLowerCase()))
    }
    return comps
  })

  const categoryLabels: Record<string, string> = {
    icons: '图标',
    avatars: '头像',
    backgrounds: '背景',
    emoji: '表情',
    illustrations: '插画',
    logos: '标志',
    cursors: '光标',
    images: '图片',
  }

  const categoryIcon: Record<string, string> = {
    icons: '🎨',
    avatars: '👤',
    backgrounds: '🖼️',
    emoji: '😊',
    illustrations: '🎭',
    logos: '🏷️',
    cursors: '🖱️',
    images: '📷',
  }
</script>

<div class="max-w-7xl mx-auto">
  <div class="mb-8">
    <div class="flex items-center gap-3 mb-4">
      <span class="text-4xl">{categoryIcon[category] || '📦'}</span>
      <div>
        <h1 class="text-3xl font-bold text-gray-900">{categoryLabels[category] || category}</h1>
        <p class="text-gray-500 mt-1">{components.length} 个组件</p>
      </div>
    </div>
    
    <div class="relative max-w-md">
      <input
        type="text"
        bind:value={searchQuery}
        placeholder="搜索组件名称..."
        class="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
    </div>
  </div>

  {#key category}
    {#if filteredComponents.length === 0}
      <div class="text-center py-12">
        <p class="text-gray-500">没有找到匹配的组件</p>
      </div>
    {:else}
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {#each filteredComponents as componentName}
          <ComponentCard {category} {componentName} />
        {/each}
      </div>
    {/if}
  {/key}
</div>

