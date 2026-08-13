import { ArrowUpRight, CalendarDays, Clock3, Github, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { localizedPath } from '../utils/routes'

export default function BlogCard({ article }) {
  const { lang, t } = useApp()
  const href = localizedPath(`/blog/${article.slug}`, lang)
  return <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-glow dark:border-slate-800 dark:bg-slate-900">
    <Link to={href} className="block overflow-hidden bg-slate-100 dark:bg-slate-800">
      <img src={article.image} alt={`${article.title[lang]} — ${lang === 'fa' ? 'پژوهش پوریا ملکی' : 'research by Pouria Maleki'}`} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.035]" />
    </Link>
    <div className="p-6">
      <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold">
        {article.kind?.[lang] && <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-3 py-1 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300"><Sparkles size={12}/>{article.kind[lang]}</span>}
        <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">{article.category[lang]}</span>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500"><span className="inline-flex items-center gap-1"><CalendarDays size={14}/>{article.date}</span><span className="inline-flex items-center gap-1"><Clock3 size={14}/>{article.readTime} {t.blog.min}</span>{article.githubUrl && <span title="Related GitHub repository" className="inline-flex items-center gap-1"><Github size={14}/>GitHub</span>}</div>
      <h2 className="text-xl font-bold leading-snug tracking-tight md:text-2xl"><Link to={href}>{article.title[lang]}</Link></h2>
      {article.venue && <div className="mt-2 text-xs font-bold text-slate-400">{article.venue}</div>}
      <p className="mt-3 line-clamp-3 leading-7 text-slate-600 dark:text-slate-400">{article.excerpt[lang]}</p>
      {article.takeaways?.[lang]?.[0] && <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-600 dark:bg-slate-800/60 dark:text-slate-300">{article.takeaways[lang][0]}</div>}
      <Link to={href} className="mt-5 inline-flex items-center gap-2 font-bold text-blue-600 transition group-hover:gap-3 dark:text-blue-400">{t.blog.read}<ArrowUpRight size={17}/></Link>
    </div>
  </article>
}
