import { ArrowUpRight, BookOpen, Database, Quote, Sparkles } from 'lucide-react'
import liveData from '../data/live-data.json'
import { publications } from '../data/publications'
import { SITE } from '../data/site'
import { useApp } from '../context/AppContext'

function prettyDate(value, lang) {
  if (!value) return '—'
  const [year, month, day] = value.split('-').map(Number)
  if (!year) return value
  if (!month) return String(year)
  const locale = lang === 'fa' ? 'fa-IR-u-ca-gregory' : 'en-US'
  try {
    return new Intl.DateTimeFormat(locale, { year:'numeric', month:'short', ...(day ? { day:'numeric' } : {}) }).format(new Date(Date.UTC(year, month - 1, day || 1)))
  } catch { return value }
}

export default function ResearchImpact() {
  const { lang } = useApp()
  const liveItems = liveData?.publications?.items || []
  const liveById = new Map(liveItems.map(item => [item.id, item]))
  const works = publications
    .map(pub => ({ ...pub, ...(liveById.get(pub.id) || {}) }))
    .sort((a,b) => String(b.publishedDate || b.year).localeCompare(String(a.publishedDate || a.year)))
  const summary = liveData?.publications?.summary || { publicationCount:publications.length, citationCount:0, liveCitationWorks:0 }
  const totalCitations = summary.liveCitationWorks ? summary.citationCount : null

  return <div className="research-impact-shell">
    <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr]">
      <div>
        <div className="eyebrow"><Sparkles size={15}/>{lang === 'fa' ? 'فهرست علمی تأییدشده' : 'Verified scholarly record'}</div>
        <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">{lang === 'fa' ? 'انتشارات و استنادهای پژوهشی' : 'Publications & research citations'}</h2>
        <p className="mt-4 leading-8 text-slate-500 dark:text-slate-400">
          {lang === 'fa'
            ? 'برای مقالات دارای DOI، عنوان، تاریخ و محل انتشار بر اساس رکورد تأییدشده نگهداری و هنگام Build با Crossref کنترل می‌شود؛ تعداد استناد همان مقالات نیز با DOI از Semantic Scholar به‌روزرسانی می‌شود. Google Scholar به‌عنوان پروفایل علمی اصلی در دسترس است.'
            : 'DOI-linked papers use verified bibliographic records checked against Crossref during build; their paper-level citation counts are refreshed by exact DOI from Semantic Scholar. Google Scholar remains the primary scholarly-profile link.'}
        </p>
        <div className="mt-7 grid grid-cols-2 gap-3">
          <div className="metric-tile"><strong>{publications.length}</strong><span>{lang === 'fa' ? 'مقاله منتشرشده' : 'published works'}</span></div>
          <div className="metric-tile"><strong>{totalCitations ?? 'Live'}</strong><span>{lang === 'fa' ? 'استناد DOI-indexed' : 'DOI-linked citations'}</span></div>
          <div className="metric-tile"><strong>2</strong><span>{lang === 'fa' ? 'دیتاست عمومی' : 'public datasets'}</span></div>
          <div className="metric-tile"><strong>2021</strong><span>{lang === 'fa' ? 'پایان‌نامه ارشد DQL' : 'DQL M.S. thesis'}</span></div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <a className="btn-secondary !px-4 !py-2 text-sm" href={SITE.social.scholar} target="_blank" rel="noreferrer">Google Scholar<ArrowUpRight size={15}/></a>
          <a className="btn-secondary !px-4 !py-2 text-sm" href={SITE.social.researchGate} target="_blank" rel="noreferrer">ResearchGate<ArrowUpRight size={15}/></a>
          <a className="btn-secondary !px-4 !py-2 text-sm" href={SITE.social.github} target="_blank" rel="noreferrer"><Database size={15}/>Datasets & Code</a>
        </div>
      </div>
      <div className="rounded-[1.75rem] border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950 sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="text-sm font-black">{lang === 'fa' ? 'آثار منتشرشده' : 'Published works'}</div>
          <Quote size={18} className="text-blue-500"/>
        </div>
        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {works.map((paper, index) => <article key={paper.id} className="group flex gap-4 py-4 first:pt-1">
            <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-xl bg-slate-100 text-xs font-black text-slate-500 dark:bg-slate-900">{String(index + 1).padStart(2,'0')}</span>
            <div className="min-w-0 flex-1">
              <a href={paper.paperUrl || (paper.doi ? `https://doi.org/${paper.doi}` : SITE.social.scholar)} target="_blank" rel="noreferrer" className="block text-sm font-bold leading-6 transition group-hover:text-blue-600">{paper.officialTitle}</a>
              <div className="mt-1 text-xs leading-5 text-slate-500">{paper.venue}</div>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-slate-400">
                <span>{prettyDate(paper.publishedDate, lang)}</span>
                {paper.doi && <a className="hover:text-blue-500" href={`https://doi.org/${paper.doi}`} target="_blank" rel="noreferrer">DOI</a>}
                {Number.isFinite(paper.citationCount) && <span>{paper.citationCount} {lang === 'fa' ? 'استناد · Semantic Scholar' : 'citations · Semantic Scholar'}</span>}
                {paper.githubUrl && <a className="hover:text-blue-500" href={paper.githubUrl} target="_blank" rel="noreferrer">GitHub</a>}
              </div>
            </div>
            <ArrowUpRight size={15} className="mt-1 shrink-0 text-slate-400 transition group-hover:text-blue-500"/>
          </article>)}
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-400"><BookOpen size={14}/>{liveData.syncedAt ? `${lang === 'fa' ? 'آخرین همگام‌سازی:' : 'Last metadata refresh:'} ${liveData.syncedAt.slice(0,10)}` : (lang === 'fa' ? 'متادیتای تأییدشده محلی؛ همگام‌سازی آنلاین هنگام Build انجام می‌شود.' : 'Verified local metadata; online refresh runs during build.')}</div>
      </div>
    </div>
  </div>
}
