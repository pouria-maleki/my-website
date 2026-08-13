export function stripLocalePrefix(pathname = '/') {
  if (pathname === '/fa') return '/'
  if (pathname.startsWith('/fa/')) return pathname.slice(3) || '/'
  return pathname || '/'
}

export function localizedPath(path = '/', lang = 'en') {
  const [pathAndSearch, hash = ''] = path.split('#')
  const [pathnameRaw, search = ''] = pathAndSearch.split('?')
  const pathname = stripLocalePrefix(pathnameRaw || '/')
  const normalized = pathname === '/' ? '/' : `/${pathname.replace(/^\/+|\/+$/g, '')}`
  const localized = lang === 'fa' ? (normalized === '/' ? '/fa' : `/fa${normalized}`) : normalized
  return `${localized}${search ? `?${search}` : ''}${hash ? `#${hash}` : ''}`
}

export function getLanguageFromPath(pathname = '/') {
  return pathname === '/fa' || pathname.startsWith('/fa/') ? 'fa' : 'en'
}
