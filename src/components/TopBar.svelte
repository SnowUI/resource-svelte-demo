<script lang="ts">
  let searchQuery = $state('')
</script>

<header class="bg-white border-b border-gray-200 px-8 py-4">
  <div class="flex items-center gap-4">
    <div class="flex-1 relative">
      <input
        type="text"
        bind:value={searchQuery}
        placeholder="搜索组件..."
        class="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
    </div>
  </div>
</header>

