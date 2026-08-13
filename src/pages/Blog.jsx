import BlogCard from '../components/BlogCard'
import SEO from '../components/SEO'
import { useApp } from '../context/AppContext'
import { articles } from '../data/articles'

export default function Blog() {
  const { lang, t } = useApp(); const fa = lang === 'fa'
  return <><SEO path="/blog" title={fa ? 'وبلاگ پژوهشی پوریا ملکی | هوش مصنوعی، کنترل و بینایی ماشین' : 'Research Blog | Pouria Maleki'} description={t.blog.desc}/><main className="section-pad"><div className="container-shell"><div className="max-w-3xl"><div className="eyebrow">{t.blog.eyebrow}</div><h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">{t.blog.title}</h1><p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">{t.blog.desc}</p></div><div className="mt-12 grid gap-6 md:grid-cols-2">{articles.map(a=><BlogCard key={a.slug} article={a}/>)}</div></div></main></>
}
