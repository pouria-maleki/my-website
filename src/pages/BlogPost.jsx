import { ArrowLeft, ArrowUpRight, ExternalLink, Github, GraduationCap, Link as LinkIcon, Linkedin, Send } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import MarkdownContent from '../components/MarkdownContent'
import SEO from '../components/SEO'
import SocialLinks from '../components/SocialLinks'
import { useApp } from '../context/AppContext'
import { articles, getArticle } from '../data/articles'
import { SITE } from '../data/site'
import { localizedPath } from '../utils/routes'

export default function BlogPost() {
  const { slug } = useParams(); const { lang, t } = useApp(); const article = getArticle(slug)
  if (!article) return <Navigate to={localizedPath('/404',lang)} replace />
  const title = article.title[lang], excerpt = article.excerpt[lang]
  const pagePath = localizedPath(`/blog/${article.slug}`,lang)
  const pageUrl = `${SITE.url}${pagePath}`
  const enc = encodeURIComponent
  const related = articles.filter(a => a.slug !== article.slug).filter(a => a.category.en === article.category.en || a.date === article.date).slice(0,2)
  const copy = () => { if (typeof navigator !== 'undefined' && navigator.clipboard) navigator.clipboard.writeText(pageUrl) }
  const backIcon = <ArrowLeft size={16} className={lang === 'fa' ? 'rotate-180' : ''}/>
  return <><SEO path={`/blog/${article.slug}`} title={`${title} | ${lang === 'fa' ? 'پوریا ملکی (Pouria Maleki)' : 'Pouria Maleki'}`} description={excerpt} image={article.image} type="article" article={article}/><main className="pb-20">
    <div className="container-shell pt-8"><Link to={localizedPath('/blog',lang)} className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600">{backIcon}{t.blog.back}</Link></div>
    <article className="container-shell mt-8"><header className="mx-auto max-w-4xl"><nav aria-label="Breadcrumb" className="mb-5 text-xs font-bold text-slate-400"><Link to={localizedPath('/',lang)}>{lang === 'fa' ? 'خانه' : 'Home'}</Link><span className="mx-2">/</span><Link to={localizedPath('/blog',lang)}>{lang === 'fa' ? 'وبلاگ' : 'Blog'}</Link></nav><div className="mb-5 flex flex-wrap gap-2 text-sm font-bold"><span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">{article.category[lang]}</span><span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 dark:bg-slate-800 dark:text-slate-300">{article.date}</span><span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 dark:bg-slate-800 dark:text-slate-300">{article.readTime} {t.blog.min}</span></div><h1 className="text-4xl font-black leading-tight tracking-[-.04em] sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-6 text-xl leading-9 text-slate-600 dark:text-slate-300">{excerpt}</p><div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500"><Link to={localizedPath('/about',lang)} className="font-black text-slate-800 hover:text-blue-600 dark:text-slate-200">{lang === 'fa' ? 'پوریا ملکی · Pouria Maleki' : 'Pouria Maleki · پوریا ملکی'}</Link>{article.venue && <span>{article.venue}</span>}{article.doi && <a href={`https://doi.org/${article.doi}`} target="_blank" rel="noreferrer" className="font-semibold hover:text-blue-600">DOI: {article.doi}</a>}</div></header>
    <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900"><img src={article.image} alt={`${title} — ${lang === 'fa' ? 'مقاله پژوهشی پوریا ملکی' : 'research article by Pouria Maleki'}`} fetchPriority="high" decoding="async" className="aspect-[16/7] w-full object-cover"/></div>
    <div className="mx-auto mt-10 grid max-w-5xl gap-10 lg:grid-cols-[1fr_235px]"><div className={`prose prose-slate max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-headings:font-black prose-a:text-blue-600 prose-img:rounded-2xl ${lang === 'fa' ? 'prose-p:leading-9' : 'prose-p:leading-8'}`}><MarkdownContent content={article.content[lang]}/><div className="not-prose mt-10 flex flex-wrap gap-3">{article.sourceUrl && <a href={article.sourceUrl} target="_blank" rel="noreferrer" className="btn-secondary">{t.blog.source}<ExternalLink size={17}/></a>}{article.githubUrl && <a href={article.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary"><Github size={17}/>{lang === 'fa' ? 'کد / دیتاست در GitHub' : 'Code / dataset on GitHub'}</a>}{article.doi && <a href={`https://doi.org/${article.doi}`} target="_blank" rel="noreferrer" className="btn-secondary"><GraduationCap size={17}/>DOI<ArrowUpRight size={15}/></a>}</div></div>
      <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start"><div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800"><div className="mb-3 text-sm font-bold">{t.blog.share}</div><div className="grid gap-2"><a className="share-btn" target="_blank" rel="noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(pageUrl)}`}><Linkedin size={17}/>LinkedIn</a><a className="share-btn" target="_blank" rel="noreferrer" href={`https://t.me/share/url?url=${enc(pageUrl)}&text=${enc(title)}`}><Send size={17}/>Telegram</a><button className="share-btn" onClick={copy}><LinkIcon size={17}/>{t.blog.copy}</button></div></div><div className="rounded-2xl border border-slate-200 p-4 text-sm dark:border-slate-800"><div className="font-black">{lang === 'fa' ? 'نویسنده / پژوهشگر' : 'Author / researcher'}</div><Link to={localizedPath('/about',lang)} className="mt-3 block font-black text-blue-600">Pouria Maleki</Link><p className="mt-2 leading-6 text-slate-500">{lang === 'fa' ? 'هوش مصنوعی · بینایی ماشین · سیستم‌های کنترل' : 'AI · Computer Vision · Control Systems'}</p><SocialLinks compact className="mt-3"/></div></aside>
    </div></article>
    {related.length > 0 && <section className="section-pad !pb-0"><div className="container-shell"><h2 className="text-3xl font-black">{lang === 'fa' ? 'پژوهش‌های مرتبط' : 'Related research'}</h2><div className="mt-7 grid gap-6 md:grid-cols-2">{related.map(a => <BlogCard key={a.slug} article={a}/>)}</div></div></section>}
  </main></>
}
