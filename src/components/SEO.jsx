import { Helmet } from 'react-helmet-async'
import { SITE } from '../data/site'
import { useApp } from '../context/AppContext'

export default function SEO({ title, description, path = '/', image = '/blog/iranian-vehicle-dataset.svg', type = 'website', article }) {
  const { lang } = useApp()
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  const canonical = `${SITE.url}${cleanPath}?lang=${lang}`
  const altLang = lang === 'en' ? 'fa' : 'en'
  const alternate = `${SITE.url}${cleanPath}?lang=${altLang}`
  const imageUrl = image.startsWith('http') ? image : `${SITE.url}${image}`
  const schema = article ? {
    '@context': 'https://schema.org', '@type': 'Article', headline: title, description,
    inLanguage: lang, datePublished: article.date, dateModified: article.date,
    author: { '@type': 'Person', name: SITE.name, url: SITE.url },
    publisher: { '@type': 'Person', name: SITE.name }, mainEntityOfPage: canonical, image: imageUrl
  } : null

  return <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <link rel="alternate" hrefLang={lang} href={canonical} />
    <link rel="alternate" hrefLang={altLang} href={alternate} />
    <link rel="alternate" hrefLang="x-default" href={`${SITE.url}${cleanPath}?lang=en`} />
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:locale" content={lang === 'fa' ? 'fa_IR' : 'en_US'} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageUrl} />
    {article && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
  </Helmet>
}
