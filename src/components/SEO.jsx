import { Helmet } from 'react-helmet-async'
import { SITE } from '../data/site'
import { useApp } from '../context/AppContext'
import { localizedPath } from '../utils/routes'
import liveData from '../data/live-data.json'

const absolute = (path) => path?.startsWith('http') ? path : `${SITE.url}${path || '/'}`

function personSchema(lang) {
  const s2 = liveData?.semanticScholar?.author?.url
  return {
    '@type': 'Person', '@id': SITE.personId,
    name: SITE.name,
    alternateName: SITE.aliases.filter(name => name !== SITE.name),
    url: `${SITE.url}${localizedPath('/about', lang)}`,
    image: `${SITE.url}/images/profile.webp`,
    email: SITE.email,
    jobTitle: lang === 'fa' ? 'پژوهشگر هوش مصنوعی و مهندس سیستم‌های کنترل' : 'AI Researcher & Control Systems Engineer',
    description: lang === 'fa' ? 'پوریا ملکی، پژوهشگر هوش مصنوعی، مهندس برق و متخصص سیستم‌های کنترل با تمرکز بر بینایی ماشین، یادگیری تقویتی و سامانه‌های هوشمند.' : 'Pouria Maleki is an AI researcher and electrical/control systems engineer working on computer vision, reinforcement learning and intelligent engineering systems.',
    homeLocation: { '@type': 'Place', name: SITE.location.en },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Bu-Ali Sina University' },
      { '@type': 'CollegeOrUniversity', name: 'Hamedan University of Technology' }
    ],
    knowsAbout: ['Artificial Intelligence','Computer Vision','YOLO','Deep Learning','Reinforcement Learning','Control Systems','Intelligent Transportation Systems','Embedded Systems','IoT','MATLAB','Python'],
    sameAs: [SITE.social.linkedin, SITE.social.github, SITE.social.scholar, SITE.social.researchGate, s2].filter(Boolean)
  }
}

export default function SEO({ title, description, path = '/', image = '/blog/iranian-vehicle-dataset.svg', type = 'website', article, pageType = 'page', noIndex = false }) {
  const { lang } = useApp()
  const basePath = path.startsWith('/') ? path : `/${path}`
  const canonicalPath = localizedPath(basePath, lang)
  const canonical = `${SITE.url}${canonicalPath}`
  const alternateLang = lang === 'en' ? 'fa' : 'en'
  const alternate = `${SITE.url}${localizedPath(basePath, alternateLang)}`
  const xDefault = `${SITE.url}${localizedPath(basePath, 'en')}`
  const imageUrl = absolute(image)
  const person = personSchema(lang)
  const graph = []

  if (pageType === 'home') {
    graph.push({ '@type': 'WebSite', '@id': `${SITE.url}/#website`, url: SITE.url, name: SITE.name, alternateName: SITE.faName, inLanguage: ['en','fa'], publisher: { '@id': SITE.personId } })
    graph.push(person)
  }
  if (pageType === 'about') {
    graph.push({ '@type': 'ProfilePage', '@id': `${canonical}#profile`, url: canonical, name: title, description, inLanguage: lang, mainEntity: { '@id': SITE.personId }, dateModified: liveData?.syncedAt?.slice(0,10) || undefined })
    graph.push(person)
  }
  if (pageType === 'blog') {
    graph.push({ '@type': 'CollectionPage', '@id': `${canonical}#collection`, url: canonical, name: title, description, inLanguage: lang, author: { '@id': SITE.personId } })
    graph.push(person)
  }
  if (article) {
    const authorUrl = `${SITE.url}${localizedPath('/about', lang)}`
    const keywords = article.keywords?.[lang] || article.keywords?.en || []
    graph.push({
      '@type': 'BlogPosting', '@id': `${canonical}#article`,
      url: canonical, mainEntityOfPage: canonical, headline: title, description, image: [imageUrl], inLanguage: lang,
      datePublished: article.date, dateModified: article.date,
      author: { '@type': 'Person', '@id': SITE.personId, name: SITE.name, url: authorUrl },
      publisher: { '@id': SITE.personId },
      articleSection: article.category?.[lang], keywords: keywords.join(', '),
      isBasedOn: article.sourceUrl || undefined
    })
    graph.push({
      '@type': article.publicationType === 'Thesis' ? 'CreativeWork' : 'ScholarlyArticle',
      '@id': `${canonical}#scholarly-work`, name: article.title.en, alternateName: article.title.fa,
      author: (article.authors || [SITE.name]).map(name => ({ '@type': 'Person', name, ...(name === SITE.name ? { '@id': SITE.personId } : {}) })),
      datePublished: article.date, isPartOf: article.venue ? { '@type': 'CreativeWork', name: article.venue } : undefined,
      identifier: article.doi ? { '@type': 'PropertyValue', propertyID: 'DOI', value: article.doi } : undefined,
      sameAs: [article.sourceUrl, article.doi ? `https://doi.org/${article.doi}` : null, article.githubUrl].filter(Boolean),
      keywords: (article.keywords?.en || []).join(', ')
    })
    if (article.dataset) graph.push({
      '@type': 'Dataset', '@id': `${canonical}#dataset`, name: article.dataset.name, description: article.dataset.description,
      creator: { '@id': SITE.personId }, url: article.dataset.distributionUrl || canonical,
      license: article.dataset.license || undefined,
      distribution: article.dataset.distributionUrl ? [{ '@type': 'DataDownload', contentUrl: article.dataset.distributionUrl }] : undefined,
      keywords: (article.keywords?.en || []).join(', ')
    })
    graph.push({ '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: lang === 'fa' ? 'خانه' : 'Home', item: `${SITE.url}${localizedPath('/', lang)}` },
      { '@type': 'ListItem', position: 2, name: lang === 'fa' ? 'وبلاگ پژوهشی' : 'Research Blog', item: `${SITE.url}${localizedPath('/blog', lang)}` },
      { '@type': 'ListItem', position: 3, name: title, item: canonical }
    ] })
    graph.push(person)
  }

  const schema = graph.length ? { '@context': 'https://schema.org', '@graph': graph } : null
  return <Helmet>
    <html lang={lang} dir={lang === 'fa' ? 'rtl' : 'ltr'} />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="author" content="Pouria Maleki" />
    <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'} />
    <link rel="canonical" href={canonical} />
    <link rel="alternate" hrefLang={lang} href={canonical} />
    <link rel="alternate" hrefLang={alternateLang} href={alternate} />
    <link rel="alternate" hrefLang="x-default" href={xDefault} />
    <meta property="og:type" content={type} />
    <meta property="og:site_name" content="Pouria Maleki · پوریا ملکی" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:image:alt" content={title} />
    <meta property="og:locale" content={lang === 'fa' ? 'fa_IR' : 'en_US'} />
    <meta property="og:locale:alternate" content={lang === 'fa' ? 'en_US' : 'fa_IR'} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageUrl} />
    <meta name="twitter:image:alt" content={title} />
    {article?.category?.[lang] && <meta property="article:section" content={article.category[lang]} />}
    {article?.authors?.map((author) => <meta key={author} property="article:author" content={author} />)}
    {article?.keywords?.[lang]?.map((tag) => <meta key={tag} property="article:tag" content={tag} />)}
    {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
  </Helmet>
}
