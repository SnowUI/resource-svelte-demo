import { componentNames, resourceComponents } from './resource-module'
import { collectIconNames } from './icon-names.ts'

// 获取所有图标组件名称
export function getAllIconNames(): string[] {
  return collectIconNames(resourceComponents, componentNames)
}

// 获取图标数量
export function getIconCount(): number {
  return getAllIconNames().length
}

