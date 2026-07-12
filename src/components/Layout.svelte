<script lang="ts">
  import Sidebar from './Sidebar.svelte'
  import TopBar from './TopBar.svelte'
  import type { Snippet } from 'svelte'

  interface Props {
    children?: Snippet
  }

  let { children }: Props = $props()
</script>

<div class="flex min-h-screen bg-gray-50">
  <Sidebar />
  <div class="flex-1 flex flex-col">
    <TopBar />
    <main class="flex-1 p-8">
      {#if children}
        {@render children()}
      {/if}
    </main>
  </div>
</div>

