<script lang="ts">
  import { navigate, currentPath } from '../lib/router'
  import { componentNames } from '../lib/resource-module'
  import { getIconCount } from '../lib/components'

  const categories = $derived([
    { name: '首页', path: '/', icon: '🏠' },
    { name: '图标', path: '/category/icons', icon: '🎨', count: getIconCount() },
    { name: '头像', path: '/category/avatars', icon: '👤', count: componentNames?.avatars?.length || 0 },
    { name: '背景', path: '/category/backgrounds', icon: '🖼️', count: componentNames?.backgrounds?.length || 0 },
    { name: '表情', path: '/category/emoji', icon: '😊', count: componentNames?.emoji?.length || 0 },
    { name: '插画', path: '/category/illustrations', icon: '🎭', count: componentNames?.illustrations?.length || 0 },
    { name: '标志', path: '/category/logos', icon: '🏷️', count: componentNames?.logos?.length || 0 },
    { name: '光标', path: '/category/cursors', icon: '🖱️', count: componentNames?.cursors?.length || 0 },
    { name: '图片', path: '/category/images', icon: '📷', count: componentNames?.images?.length || 0 },
  ])

  let path = $derived($currentPath)
</script>

<aside class="w-64 bg-white border-r border-gray-200 flex flex-col">
  <div class="p-6 border-b border-gray-200">
    <h1 class="text-2xl font-bold text-gray-900">SnowUI</h1>
    <p class="text-sm text-gray-500 mt-1">Design Resource</p>
  </div>
  <nav class="flex-1 overflow-y-auto p-4">
    {#each categories as category}
      <button
        onclick={() => navigate(category.path)}
        class="w-full flex items-center justify-between px-4 py-3 mb-1 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-left {path === category.path ? 'bg-primary-50 text-primary-600 font-medium' : ''}"
      >
        <div class="flex items-center gap-3">
          <span class="text-xl">{category.icon}</span>
          <span>{category.name}</span>
        </div>
        {#if category.count}
          <span class="text-xs bg-gray-200 px-2 py-1 rounded-full">{category.count}</span>
        {/if}
      </button>
    {/each}
  </nav>
</aside>

