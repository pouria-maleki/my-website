import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { articles } from '../src/data/articles.js'

const root = process.cwd()
const dist = resolve(root, 'dist')
const serverEntry = resolve(root, 'dist-ssr/entry-server.js')
if (!existsSync(serverEntry)) throw new Error('SSR bundle not found. Run the SSR Vite build first.')
const { render } = await import(pathToFileURL(serverEntry).href)
const template = readFileSync(resolve(dist, 'index.html'), 'utf8')
const site = 'https://pouriamaleki.com'

const routePairs = [
  ['/', '/fa'],
  ['/about', '/fa/about'],
  ['/blog', '/fa/blog'],
  ...articles.map(a => [`/blog/${a.slug}`, `/fa/blog/${a.slug}`])
]
const routes = routePairs.flat()

function renderDocument(url) {
  const { html: appHtml, helmet } = render(url)
  const fa = url === '/fa' || url.startsWith('/fa/')
  const head = [helmet?.title?.toString(), helmet?.meta?.toString(), helmet?.link?.toString(), helmet?.script?.toString()].filter(Boolean).join('\n    ')
  return template
    .replace(/<html[^>]*>/, `<html lang="${fa ? 'fa' : 'en'}" dir="${fa ? 'rtl' : 'ltr'}">`)
    .replace(/<title>.*?<\/title>/s, '')
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace('</head>', `    ${head}\n  </head>`)
}

function targetFor(url) {
  if (url === '/') return resolve(dist, 'index.html')
  return resolve(dist, url.replace(/^\//,''), 'index.html')
}

for (const route of routes) {
  const target = targetFor(route)
  mkdirSync(resolve(target, '..'), { recursive:true })
  writeFileSync(target, renderDocument(route))
}

writeFileSync(resolve(dist, '404.html'), renderDocument('/404'))
writeFileSync(resolve(dist, '200.html'), renderDocument('/'))

const alternateMap = new Map(routePairs.flatMap(([en,fa]) => [[en,{en,fa}],[fa,{en,fa}]]))
const xml = routes.map(route => {
  const pair = alternateMap.get(route)
  const priority = route === '/' || route === '/fa' ? '1.0' : route.includes('/blog/') ? '0.8' : '0.9'
  return `  <url>\n    <loc>${site}${route}</loc>\n    <xhtml:link rel="alternate" hreflang="en" href="${site}${pair.en}"/>\n    <xhtml:link rel="alternate" hreflang="fa" href="${site}${pair.fa}"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="${site}${pair.en}"/>\n    <changefreq>${route.includes('/blog/') ? 'monthly' : 'weekly'}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
}).join('\n')
writeFileSync(resolve(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${xml}\n</urlset>\n`)

// The SSR bundle is only a build intermediate and must not be deployed with the static site.
rmSync(resolve(root, 'dist-ssr'), { recursive:true, force:true })
console.log(`Prerendered ${routes.length} localized routes + 404.html`) 
