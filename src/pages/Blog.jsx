import { BookOpen, Search, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import BlogCard from '../components/BlogCard'
import ResearchImpact from '../components/ResearchImpact'
import SEO from '../components/SEO'
import { useApp } from '../context/AppContext'
import { articles } from '../data/articles'

export default function Blog() {
  const { lang, t } = useApp(); const fa = lang === 'fa'
  const [filter,setFilter] = useState('all')
  const [query,setQuery] = useState('')
  const categories = useMemo(() => [...new Set(articles.map(a => a.category[lang]))], [lang])
  const featured = articles.filter(a => a.featured).slice(0,2)
  const visible = articles.filter(a => {
    const categoryOk = filter === 'all' || a.category[lang] === filter
    const haystack = `${a.title[lang]} ${a.excerpt[lang]} ${(a.keywords?.[lang] || []).join(' ')}`.toLowerCase()
    return categoryOk && haystack.includes(query.trim().toLowerCase())
  })

  return <><SEO pageType="blog" path="/blog" title={fa ? 'وبلاگ پژوهشی پوریا ملکی | بینایی ماشین، هوش مصنوعی و کنترل هوشمند' : 'Pouria Maleki Research Blog | Object Detection, AI & Intelligent Control'} description={fa ? 'مقالات و یادداشت‌های پژوهشی پوریا ملکی درباره تشخیص شیء، طراحی دیتاست، YOLO و R-CNN، یادگیری تقویتی، کنترل ترافیک، ریسک سیلاب، انرژی هوشمند و سیستم‌های نهفته.' : 'Research articles and first-hand engineering notes by Pouria Maleki on object detection, dataset design, YOLO and R-CNN, reinforcement learning, intelligent traffic control, flood-risk AI, energy management and edge systems.'}/><main>
    <section className="relative overflow-hidden border-b border-slate-200 py-20 dark:border-slate-800 md:py-28"><div className="hero-grid absolute inset-0"/><div className="container-shell relative"><div className="max-w-4xl"><div className="eyebrow"><BookOpen size={15}/>{t.blog.eyebrow}</div><h1 className="mt-5 text-4xl font-black tracking-[-.045em] sm:text-5xl lg:text-6xl">{fa ? 'مقالات منتشرشده، یادداشت‌های پژوهشی و تجربه‌های مهندسی' : 'Published research, technical notes & engineering lessons'}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">{fa ? 'این بخش فقط خلاصه مقاله نیست؛ هدف این است که مسئله، داده، روش، نتیجه، محدودیت و درس مهندسی هر پروژه را به زبان خوانا توضیح دهد.' : 'This is more than a publication list: each post explains the problem, data, method, result, limitations and engineering lesson behind the work.'}</p><div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-700 dark:text-emerald-300"><span className="live-dot"/>{fa ? 'متادیتای مقالات از DOI و استنادها از Semantic Scholar هنگام Build به‌روزرسانی می‌شوند' : 'Publication metadata is refreshed from DOI records and citations from Semantic Scholar during build'}</div></div></div></section>

    <section className="section-pad !pb-0"><div className="container-shell"><div className="eyebrow"><Sparkles size={15}/>{fa ? 'برای شروع' : 'Start here'}</div><h2 className="section-title mt-4">{fa ? 'دو مطلبی که بهترین تصویر از مسیر پژوهشی من می‌دهند' : 'Two posts that best explain how I approach research'}</h2><div className="mt-8 grid gap-6 lg:grid-cols-2">{featured.map(a => <BlogCard key={a.slug} article={a}/>)}</div></div></section>

    <section className="section-pad bg-slate-50 dark:bg-slate-900/40"><div className="container-shell"><ResearchImpact/></div></section>

    <section className="section-pad"><div className="container-shell">
      <div className="section-heading"><div><div className="eyebrow"><BookOpen size={15}/>{fa ? 'آرشیو پژوهشی' : 'Research archive'}</div><h2 className="section-title mt-4">{fa ? `${articles.length} مقاله و یادداشت پژوهشی` : `${articles.length} research articles & notes`}</h2></div></div>
      <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center"><label className="relative block"><Search size={18} className="absolute start-4 top-1/2 -translate-y-1/2 text-slate-400"/><input value={query} onChange={e=>setQuery(e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-white py-3 ps-11 pe-4 outline-none transition focus:border-blue-500 dark:border-slate-800 dark:bg-slate-900" placeholder={fa ? 'جستجو در عنوان، موضوع یا کلیدواژه...' : 'Search titles, topics or keywords...'}/></label><div className="flex flex-wrap gap-2"><button onClick={()=>setFilter('all')} className={`rounded-xl px-4 py-2 text-sm font-bold transition ${filter==='all'?'bg-slate-950 text-white dark:bg-white dark:text-slate-950':'border border-slate-200 bg-white text-slate-500 dark:border-slate-800 dark:bg-slate-900'}`}>{fa?'همه':'All'}</button>{categories.map(c=><button key={c} onClick={()=>setFilter(c)} className={`rounded-xl px-4 py-2 text-sm font-bold transition ${filter===c?'bg-slate-950 text-white dark:bg-white dark:text-slate-950':'border border-slate-200 bg-white text-slate-500 dark:border-slate-800 dark:bg-slate-900'}`}>{c}</button>)}</div></div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">{visible.map(a=><BlogCard key={a.slug} article={a}/>)}</div>{!visible.length && <div className="mt-10 rounded-3xl border border-dashed border-slate-300 p-10 text-center text-slate-500 dark:border-slate-700">{fa ? 'مطلبی با این فیلتر پیدا نشد.' : 'No posts matched this filter.'}</div>}
    </div></section>
  </main></>
}
