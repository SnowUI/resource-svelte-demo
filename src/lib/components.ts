import { componentNames, resourceComponents } from './resource-module'

// 获取所有图标组件名称
export function getAllIconNames(): string[] {
  try {
    if (!resourceComponents) {
      return []
    }
    
    if (!componentNames) {
      return []
    }
    
    const otherCategories = new Set([
      ...(componentNames.avatars || []),
      ...(componentNames.backgrounds || []),
      ...(componentNames.cursors || []),
      ...(componentNames.emoji || []),
      ...(componentNames.illustrations || []),
      ...(componentNames.images || []),
      ...(componentNames.logos || []),
      'componentNames',
      'icons',
      'ComponentCategory',
      'IconName',
    ])
    
    const iconNames: string[] = []
    const allKeys = Object.keys(resourceComponents)
    
    for (const key of allKeys) {
      // 跳过已知的其他分类和特殊导出
      if (otherCategories.has(key)) {
        continue
      }
      
      const value = resourceComponents[key]
      
      // Svelte 组件在运行时可能是函数或对象
      // 只要不是基本类型（string, number, boolean, null, undefined），就认为是组件
      if (
        value !== null &&
        value !== undefined &&
        (typeof value === 'object' || typeof value === 'function') &&
        !Array.isArray(value)
      ) {
        iconNames.push(key)
      }
    }
    
    return iconNames.sort()
  } catch (error) {
    console.error('Error getting icon names:', error)
    return []
  }
}

// 获取图标数量
export function getIconCount(): number {
  return getAllIconNames().length
}

