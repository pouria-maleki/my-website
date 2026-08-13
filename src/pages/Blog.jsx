import { BookOpen, Sparkles } from 'lucide-react'
import BlogCard from '../components/BlogCard'
import ResearchImpact from '../components/ResearchImpact'
import SEO from '../components/SEO'
import { useApp } from '../context/AppContext'
import { articles } from '../data/articles'

export default function Blog() {
  const { lang, t } = useApp(); const fa = lang === 'fa'
  return <><SEO pageType="blog" path="/blog" title={fa ? 'مقالات و وبلاگ پژوهشی پوریا ملکی (Pouria Maleki) | AI، YOLO و کنترل' : 'Pouria Maleki Research Blog | AI, YOLO, Computer Vision & Control'} description={fa ? 'فهرست مقالات، پژوهش‌ها و یادداشت‌های فنی پوریا ملکی درباره YOLO، دیتاست خودرو، یادگیری تقویتی، کنترل ترافیک، ریسک سیلاب، انرژی هوشمند و IoT.' : 'Research articles and technical notes by Pouria Maleki on YOLO, vehicle datasets, reinforcement learning, traffic control, flood-risk AI, intelligent energy management and IoT.'}/><main>
    <section className="relative overflow-hidden border-b border-slate-200 py-20 dark:border-slate-800 md:py-28"><div className="hero-grid absolute inset-0"/><div className="container-shell relative"><div className="max-w-4xl"><div className="eyebrow"><BookOpen size={15}/>{t.blog.eyebrow}</div><h1 className="mt-5 text-4xl font-black tracking-[-.045em] sm:text-5xl lg:text-6xl">{t.blog.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">{t.blog.desc}</p><div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-700 dark:text-emerald-300"><span className="live-dot"/>{fa ? 'فهرست علمی در Build از Semantic Scholar و GitHub همگام می‌شود' : 'Scholarly data is synced from Semantic Scholar and GitHub during build'}</div></div></div></section>
    <section className="section-pad bg-slate-50 dark:bg-slate-900/40"><div className="container-shell"><ResearchImpact/></div></section>
    <section className="section-pad"><div className="container-shell"><div className="section-heading"><div><div className="eyebrow"><Sparkles size={15}/>{fa ? 'نسخه خوانا و دوزبانه' : 'Readable bilingual editions'}</div><h2 className="section-title mt-4">{fa ? `${articles.length} مطلب پژوهشی و فنی` : `${articles.length} research & engineering stories`}</h2></div></div><div className="mt-12 grid gap-6 md:grid-cols-2">{articles.map(a=><BlogCard key={a.slug} article={a}/>)}</div></div></section>
  </main></>
}
