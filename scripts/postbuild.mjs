import { readFileSync, writeFileSync, copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { articles } from '../src/data/articles.js'

const root = process.cwd()
const dist = resolve(root, 'dist')
const site = 'https://pouriamaleki.com'
const baseHtml = readFileSync(resolve(dist, 'index.html'), 'utf8')
const esc = (s) => String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;')

function withSeo(html, { title, description, path='/', image='/blog/iranian-vehicle-dataset.svg', article=null }) {
  const canonical = `${site}${path}?lang=en`
  const imageUrl = `${site}${image}`
  const schema = article ? `<script type="application/ld+json">${JSON.stringify({ '@context':'https://schema.org','@type':'Article',headline:title,description,inLanguage:'en',datePublished:article.date,dateModified:article.date,author:{'@type':'Person',name:'Pouria Maleki',url:site},mainEntityOfPage:canonical,image:imageUrl })}</script>` : ''
  const tags = `
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" hreflang="en" href="${canonical}" />
    <link rel="alternate" hreflang="fa" href="${site}${path}?lang=fa" />
    <link rel="alternate" hreflang="x-default" href="${canonical}" />
    <meta property="og:type" content="${article ? 'article' : 'website'}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${imageUrl}" />
    ${schema}`
  return html.replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`).replace('</head>', `${tags}\n  </head>`)
}

const pages = [
  { path:'/', title:'Pouria Maleki | AI Researcher & Control Systems Engineer', description:'Research portfolio of Pouria Maleki: AI, deep learning, reinforcement learning, computer vision, intelligent control and engineering systems.' },
  { path:'/blog', title:'Research Blog | Pouria Maleki', description:'Research notes and readable summaries on AI, computer vision, reinforcement learning, intelligent control, flood-risk modeling and sustainable energy.' },
  ...articles.map((a) => ({ path:`/blog/${a.slug}`, title:`${a.title.en} | Pouria Maleki`, description:a.excerpt.en, image:a.image, article:a }))
]

for (const page of pages) {
  const target = page.path === '/' ? resolve(dist, 'index.html') : resolve(dist, page.path.slice(1), 'index.html')
  mkdirSync(resolve(target, '..'), { recursive:true })
  writeFileSync(target, withSeo(baseHtml, page))
}

const urls = pages.map((p) => p.path)
const sitemap = urls.flatMap((url) => ['en','fa'].map((lang) => `  <url><loc>${site}${url}?lang=${lang}</loc><changefreq>monthly</changefreq><priority>${url === '/' ? '1.0' : url === '/blog' ? '0.9' : '0.8'}</priority></url>`))
writeFileSync(resolve(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap.join('\n')}\n</urlset>\n`)
if (existsSync(resolve(dist, 'index.html'))) copyFileSync(resolve(dist, 'index.html'), resolve(dist, '200.html'))
