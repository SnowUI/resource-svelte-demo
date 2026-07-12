declare module '@snowui-design-system/resource-svelte' {
  import type { SvelteComponentTyped } from 'svelte'

  type SnowUIComponent = typeof SvelteComponentTyped<any, any, any>

  export interface ComponentNames {
    avatars?: readonly string[]
    backgrounds?: readonly string[]
    cursors?: readonly string[]
    emoji?: readonly string[]
    illustrations?: readonly string[]
    images?: readonly string[]
    logos?: readonly string[]
  }

  export type ComponentCategory = keyof ComponentNames
  export type IconName = string

  type SnowUIResourceModule = Record<string, SnowUIComponent> & {
    componentNames: ComponentNames
  }

  const resource: SnowUIResourceModule
  export = resource
}

