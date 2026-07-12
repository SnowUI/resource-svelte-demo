<script lang="ts">
  import { currentPath } from './lib/router'
  import { matchRoute } from './lib/router'
  import Home from './pages/Home.svelte'
  import Category from './pages/Category.svelte'
  import Layout from './components/Layout.svelte'

  let path = $derived($currentPath)
</script>

<Layout>
  {#if matchRoute(path, '/')}
    <Home />
  {:else if matchRoute(path, '/category/:category')}
    <Category />
  {/if}
</Layout>

