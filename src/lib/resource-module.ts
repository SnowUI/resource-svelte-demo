import * as ResourceComponents from '@snowui-design-system/resource-svelte'

type ComponentNames = Record<string, readonly string[]>

const resourceNamespace = ResourceComponents as Record<string, unknown> & {
  componentNames?: ComponentNames
}

export const componentNames: ComponentNames =
  resourceNamespace.componentNames ?? {}

export const resourceComponents = resourceNamespace

