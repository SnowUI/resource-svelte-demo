<script lang="ts">
  import { navigate } from '../lib/router'
  import { componentNames } from '../lib/resource-module'
  import { getIconCount } from '../lib/components'

  const categories = $derived([
    { name: '图标', path: '/category/icons', icon: '🎨', count: getIconCount(), color: 'bg-blue-50 text-blue-600' },
    { name: '头像', path: '/category/avatars', icon: '👤', count: componentNames?.avatars?.length || 0, color: 'bg-purple-50 text-purple-600' },
    { name: '背景', path: '/category/backgrounds', icon: '🖼️', count: componentNames?.backgrounds?.length || 0, color: 'bg-green-50 text-green-600' },
    { name: '表情', path: '/category/emoji', icon: '😊', count: componentNames?.emoji?.length || 0, color: 'bg-yellow-50 text-yellow-600' },
    { name: '插画', path: '/category/illustrations', icon: '🎭', count: componentNames?.illustrations?.length || 0, color: 'bg-pink-50 text-pink-600' },
    { name: '标志', path: '/category/logos', icon: '🏷️', count: componentNames?.logos?.length || 0, color: 'bg-indigo-50 text-indigo-600' },
    { name: '光标', path: '/category/cursors', icon: '🖱️', count: componentNames?.cursors?.length || 0, color: 'bg-gray-50 text-gray-600' },
    { name: '图片', path: '/category/images', icon: '📷', count: componentNames?.images?.length || 0, color: 'bg-orange-50 text-orange-600' },
  ])

  const totalComponents = $derived(
    getIconCount() + (componentNames 
      ? Object.values(componentNames).reduce((sum, arr) => sum + (arr?.length || 0), 0)
      : 0)
  )
</script>

<div class="max-w-7xl mx-auto">
  <div class="mb-12">
    <h1 class="text-4xl font-bold text-gray-900 mb-4">SnowUI Design Resource</h1>
    <p class="text-lg text-gray-600">
      一个丰富的设计资源库，包含 {totalComponents} 个精心设计的组件
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each categories as category}
      <button
        onclick={() => navigate(category.path)}
        class="w-full block p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:scale-105 text-left"
      >
        <div class="flex items-center justify-between mb-4">
          <span class="text-4xl">{category.icon}</span>
          <span class="text-2xl font-bold text-gray-900">{category.count}</span>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
        <p class="text-sm text-gray-500">查看所有 {category.name} 组件</p>
      </button>
    {/each}
  </div>

  <div class="mt-12 p-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl text-white">
    <h2 class="text-2xl font-bold mb-4">开始使用</h2>
    <p class="mb-4 text-primary-50">
      安装 <code class="bg-white/20 px-2 py-1 rounded">@snowui-design-system/resource-svelte</code> 包开始使用这些组件
    </p>
    <pre class="bg-black/20 p-4 rounded-lg overflow-x-auto"><code>npm install @snowui-design-system/resource-svelte</code></pre>
  </div>
</div>

