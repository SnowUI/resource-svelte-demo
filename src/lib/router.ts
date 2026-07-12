import { writable } from 'svelte/store'

export const currentPath = writable(
  typeof window !== 'undefined' ? window.location.pathname : '/'
)

// 初始化路由监听
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    currentPath.set(window.location.pathname)
  })
}

export function navigate(path: string) {
  window.history.pushState({}, '', path)
  currentPath.set(path)
}

export function getParams(path: string, pattern: string): Record<string, string> {
  const pathParts = path.split('/').filter(Boolean)
  const patternParts = pattern.split('/').filter(Boolean)
  const params: Record<string, string> = {}

  for (let i = 0; i < patternParts.length; i++) {
    if (patternParts[i].startsWith(':')) {
      const paramName = patternParts[i].slice(1)
      params[paramName] = pathParts[i] || ''
    }
  }

  return params
}

export function matchRoute(path: string, pattern: string): boolean {
  const pathParts = path.split('/').filter(Boolean)
  const patternParts = pattern.split('/').filter(Boolean)

  if (pathParts.length !== patternParts.length) {
    return false
  }

  for (let i = 0; i < patternParts.length; i++) {
    if (!patternParts[i].startsWith(':') && patternParts[i] !== pathParts[i]) {
      return false
    }
  }

  return true
}

