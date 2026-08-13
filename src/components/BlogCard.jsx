import { ArrowUpRight, CalendarDays, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function BlogCard({ article }) {
  const { lang, t } = useApp()
  return <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-glow dark:border-slate-800 dark:bg-slate-900">
    <Link to={`/blog/${article.slug}?lang=${lang}`} className="block overflow-hidden bg-slate-100 dark:bg-slate-800">
      <img src={article.image} alt={article.title[lang]} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
    </Link>
    <div className="p-6">
      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500"><span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">{article.category[lang]}</span><span className="inline-flex items-center gap-1"><CalendarDays size={14}/>{article.date}</span><span className="inline-flex items-center gap-1"><Clock3 size={14}/>{article.readTime} {t.blog.min}</span></div>
      <h2 className="text-xl font-bold leading-snug tracking-tight md:text-2xl"><Link to={`/blog/${article.slug}?lang=${lang}`}>{article.title[lang]}</Link></h2>
      <p className="mt-3 line-clamp-3 leading-7 text-slate-600 dark:text-slate-400">{article.excerpt[lang]}</p>
      <Link to={`/blog/${article.slug}?lang=${lang}`} className="mt-5 inline-flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400">{t.blog.read}<ArrowUpRight size={17}/></Link>
    </div>
  </article>
}
