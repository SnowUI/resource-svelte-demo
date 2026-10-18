// 资源组件必须可调用；分类索引等普通对象不能作为 Svelte 组件渲染。
export function collectIconNames(
  resources: Record<string, unknown>,
  categories: Record<string, readonly string[]>,
): string[] {
  const otherNames = new Set(Object.values(categories).flat());
  return Object.entries(resources)
    .filter(([name, value]) => !otherNames.has(name) && typeof value === 'function')
    .map(([name]) => name)
    .sort();
}
