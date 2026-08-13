import { ArrowUpRight, BookOpen, GitFork, Github, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import liveData from '../data/live-data.json'
import { useApp } from '../context/AppContext'
import { localizedPath } from '../utils/routes'

const curated = {
  'Iranian-Vehicle-images-dataset-for-detection': {
    blog: 'iranian-vehicle-dataset-yolov8',
    en: 'A public, domain-specific dataset of 3,000 Iranian vehicle images for YOLO-based object detection.',
    fa: 'دیتاست عمومی و بومی شامل ۳۰۰۰ تصویر خودروهای ایرانی برای تشخیص شیء مبتنی بر YOLO.'
  },
  'TVD-dataset': {
    blog: 'vehicle-detection-yolo-emergency-vehicles',
    en: 'A 29,759-image, seven-class vehicle benchmark with dedicated ambulance and fire-truck classes.',
    fa: 'بنچمارک ۲۹٬۷۵۹ تصویری و هفت‌کلاسه با کلاس مستقل آمبولانس و خودروی آتش‌نشانی.'
  }
}

function usefulRepos() {
  const repos = liveData?.github?.repos || []
  return repos.filter(r => !r.fork && !['my-website', 'pouria-maleki'].includes(r.name)).sort((a,b) => {
    const ca = curated[a.name] ? 1 : 0, cb = curated[b.name] ? 1 : 0
    if (ca !== cb) return cb - ca
    return (b.stargazers_count || 0) - (a.stargazers_count || 0)
  }).slice(0, 6)
}

export default function LiveGithubProjects() {
  const { lang } = useApp()
  const repos = usefulRepos()
  const profile = liveData?.github?.profile
  const formatUpdated = (value) => {
    if (!value) return null
    try { return new Intl.DateTimeFormat(lang === 'fa' ? 'fa-IR' : 'en-US', { year:'numeric', month:'short' }).format(new Date(value)) } catch { return null }
  }
  if (!repos.length) return null
  return <div>
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-slate-500"><span className="live-dot"/><span>{lang === 'fa' ? 'همگام‌سازی خودکار از GitHub' : 'Auto-synced from GitHub'}</span>{Number.isFinite(profile?.public_repos) && <span className="text-slate-400">· {profile.public_repos} {lang === 'fa' ? 'مخزن عمومی' : 'public repos'}</span>}</div>
      <a href="https://github.com/pouria-maleki" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline"><Github size={17}/>{lang === 'fa' ? 'مشاهده همه مخزن‌ها' : 'View all repositories'}<ArrowUpRight size={15}/></a>
    </div>
    <div className="grid gap-5 md:grid-cols-2">{repos.map(repo => {
      const info = curated[repo.name]
      const desc = info?.[lang] || repo.description || (lang === 'fa' ? 'پروژه عمومی در GitHub' : 'Public GitHub project')
      return <article key={repo.name} className="github-card group">
        <div className="flex items-start justify-between gap-4"><div className="grid size-11 place-items-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950"><Github size={20}/></div><a href={repo.html_url} target="_blank" rel="noreferrer" className="icon-btn !size-9" aria-label={`Open ${repo.name}`}><ArrowUpRight size={16}/></a></div>
        <h3 className="mt-5 break-words text-lg font-black tracking-tight">{repo.name}</h3>
        <p className="mt-3 min-h-[3.5rem] text-sm leading-7 text-slate-500 dark:text-slate-400">{desc}</p>
        <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500">{repo.language && <span className="mini-chip !py-1"><span className="size-2 rounded-full bg-blue-500"/>{repo.language}</span>}<span className="inline-flex items-center gap-1"><Star size={14}/>{repo.stargazers_count || 0}</span><span className="inline-flex items-center gap-1"><GitFork size={14}/>{repo.forks_count || 0}</span>{formatUpdated(repo.updated_at) && <span className="text-slate-400">{lang === 'fa' ? 'بروزرسانی' : 'updated'} {formatUpdated(repo.updated_at)}</span>}</div>
        {info?.blog && <Link to={localizedPath(`/blog/${info.blog}`, lang)} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-600 transition group-hover:gap-3 dark:text-cyan-300"><BookOpen size={16}/>{lang === 'fa' ? 'داستان پژوهش و نتایج' : 'Research story & results'}<ArrowUpRight size={14}/></Link>}
      </article>
    })}</div>
  </div>
}
