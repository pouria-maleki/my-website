import { ArrowUpRight, BookOpen, Quote, Sparkles } from 'lucide-react'
import liveData from '../data/live-data.json'
import { articles } from '../data/articles'
import { SITE } from '../data/site'
import { useApp } from '../context/AppContext'

export default function ResearchImpact() {
  const { lang } = useApp()
  const scholar = liveData?.semanticScholar || {}
  const author = scholar.author
  const papers = (scholar.papers || []).slice().sort((a,b) => (b.year || 0) - (a.year || 0)).slice(0, 6)
  const publicationCount = author?.paperCount || Math.max(articles.filter(a => a.publicationType !== 'Thesis').length, 5)
  const hasMetrics = Number.isFinite(author?.citationCount) || Number.isFinite(author?.hIndex)
  return <div className="research-impact-shell">
    <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr]">
      <div>
        <div className="eyebrow"><Sparkles size={15}/>{lang === 'fa' ? 'پروفایل علمی زنده' : 'Live scholarly profile'}</div>
        <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">{lang === 'fa' ? 'انتشارات و اثرگذاری پژوهشی' : 'Publications & research impact'}</h2>
        <p className="mt-4 leading-8 text-slate-500 dark:text-slate-400">{lang === 'fa' ? 'فهرست علمی در زمان Build از Semantic Scholar همگام می‌شود و لینک Google Scholar و ResearchGate همیشه در دسترس است.' : 'The scholarly index is synced from Semantic Scholar at build time, while Google Scholar and ResearchGate remain one click away.'}</p>
        <div className="mt-7 grid grid-cols-2 gap-3">
          <div className="metric-tile"><strong>{publicationCount}+</strong><span>{lang === 'fa' ? 'اثر پژوهشی' : 'research works'}</span></div>
          <div className="metric-tile"><strong>{hasMetrics ? (author?.citationCount ?? '—') : 'Live'}</strong><span>{lang === 'fa' ? 'استناد ثبت‌شده' : 'indexed citations'}</span></div>
          <div className="metric-tile"><strong>{hasMetrics ? (author?.hIndex ?? '—') : 'S2'}</strong><span>h-index</span></div>
          <div className="metric-tile"><strong>{articles.length}</strong><span>{lang === 'fa' ? 'یادداشت پژوهشی' : 'research articles'}</span></div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2"><a className="btn-secondary !px-4 !py-2 text-sm" href={SITE.social.scholar} target="_blank" rel="noreferrer">Google Scholar<ArrowUpRight size={15}/></a><a className="btn-secondary !px-4 !py-2 text-sm" href={SITE.social.researchGate} target="_blank" rel="noreferrer">ResearchGate<ArrowUpRight size={15}/></a>{author?.url && <a className="btn-secondary !px-4 !py-2 text-sm" href={author.url} target="_blank" rel="noreferrer">Semantic Scholar<ArrowUpRight size={15}/></a>}</div>
      </div>
      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3"><div className="text-sm font-black">{lang === 'fa' ? 'آثار ایندکس‌شده اخیر' : 'Recent indexed works'}</div><Quote size={18} className="text-blue-500"/></div>
        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {(papers.length ? papers : articles.slice(0,5).map(a => ({ title:a.title.en, year:a.date, venue:a.venue, url:a.sourceUrl, citationCount:null }))).map((paper, index) => <a key={`${paper.title}-${index}`} href={paper.url || SITE.social.scholar} target="_blank" rel="noreferrer" className="group flex gap-4 py-4 first:pt-1">
            <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-xl bg-slate-100 text-xs font-black text-slate-500 dark:bg-slate-900">{String(index + 1).padStart(2,'0')}</span>
            <span className="min-w-0 flex-1"><span className="block text-sm font-bold leading-6 group-hover:text-blue-600">{paper.title}</span><span className="mt-1 block text-xs text-slate-500">{[paper.venue, paper.year].filter(Boolean).join(' · ')}{Number.isFinite(paper.citationCount) ? ` · ${paper.citationCount} ${lang === 'fa' ? 'استناد' : 'citations'}` : ''}</span></span><ArrowUpRight size={15} className="mt-1 shrink-0 text-slate-400 transition group-hover:text-blue-500"/>
          </a>)}
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-400"><BookOpen size={14}/>{liveData.syncedAt ? `${lang === 'fa' ? 'آخرین همگام‌سازی:' : 'Last sync:'} ${liveData.syncedAt.slice(0,10)}` : (lang === 'fa' ? 'داده پشتیبان محلی؛ همگام‌سازی در GitHub Actions انجام می‌شود.' : 'Local fallback; sync runs in GitHub Actions.')}</div>
      </div>
    </div>
  </div>
}
