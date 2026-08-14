import { ArrowLeft, ArrowRight, BrainCircuit, CheckCircle2, ExternalLink, LockKeyhole, Microscope } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import { useApp } from '../context/AppContext'
import { getCaseStudy } from '../data/projects'
import { localizedPath } from '../utils/routes'
import NotFound from './NotFound'

export default function ProjectCaseStudy() {
  const { slug } = useParams()
  const { lang } = useApp()
  const fa = lang === 'fa'
  const project = getCaseStudy(slug)
  if (!project) return <NotFound/>
  const medical = project.slug === 'ai-gastrointestinal-lesion-detection'
  const title = project.title[lang]
  const description = project.summary[lang]

  return <>
    <SEO pageType="project" path={`/projects/${project.slug}`} title={`${title} | ${fa ? 'پوریا ملکی' : 'Pouria Maleki'}`} description={description} image={project.heroImage}/>
    <main>
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="hero-grid absolute inset-0"/>
        <div className="container-shell relative py-16 md:py-24">
          <Link to={localizedPath('/#research',lang)} className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600">{fa ? <ArrowRight size={16}/> : <ArrowLeft size={16}/>} {fa ? 'بازگشت به پژوهش‌ها' : 'Back to research'}</Link>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <div className="eyebrow"><Microscope size={15}/>{project.status[lang]}</div>
              <h1 className="mt-5 text-4xl font-black tracking-[-.045em] sm:text-5xl lg:text-6xl">{title}</h1>
              <p className="mt-6 text-lg leading-9 text-slate-600 dark:text-slate-300">{description}</p>
              <p className="mt-5 leading-8 text-slate-500"><strong className="text-slate-800 dark:text-slate-200">{fa ? 'نقش من: ' : 'My role: '}</strong>{project.role[lang]}</p>
              <div className="mt-6 flex flex-wrap gap-2">{project.tags.map(tag=><span className="tech-pill" key={tag}>{tag}</span>)}</div>
            </div>
            <div className="case-hero"><img src={project.heroImage} alt={title} width="1800" height={medical ? '366' : '1012'} className="w-full object-cover"/></div>
          </div>
        </div>
      </section>

      {medical ? <>
        <section className="section-pad"><div className="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div className="case-device"><img loading="lazy" src={project.secondaryImage} alt={fa ? 'نمونه اولیه دستگاه کمک‌تشخیصی هوشمند' : 'AI-assisted diagnostic prototype'} width="800" height="500"/></div>
          <div>
            <div className="eyebrow"><BrainCircuit size={15}/>{fa ? 'خلاصه عمومی پروژه' : 'Public project overview'}</div>
            <h2 className="section-title mt-4">{fa ? 'هوش مصنوعی به‌عنوان دستیار تحلیل تصاویر آندوسکوپی' : 'AI as an assistant for endoscopic-image analysis'}</h2>
            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">{fa ? 'این پروژه روی شناسایی پولیپ‌های آدنوماتوز و هایپرپلاستیک و مشخص‌کردن ضایعات مشکوک در تصاویر آندوسکوپی تمرکز داشت. هدف، ساخت یک نمونه اولیه کاربردی برای کمک به تحلیل سریع‌تر و دقیق‌تر تصاویر بود.' : 'The project focused on identifying adenomatous and hyperplastic polyps and highlighting suspicious lesions in endoscopic imagery. The goal was an applied prototype that could assist faster, more consistent image review.'}</p>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">{project.metrics.map(metric=><div className="metric-tile" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
            <div className="confidential-note mt-7"><LockKeyhole size={18}/><p>{project.note[lang]}</p></div>
          </div>
        </div></section>
        <section className="section-pad bg-slate-50 dark:bg-slate-900/40"><div className="container-shell"><h2 className="section-title">{fa ? 'آنچه می‌توانم به‌صورت عمومی نشان دهم' : 'What I can share publicly'}</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{(fa ? ['توسعه الگوریتم تشخیص شیء روی تصاویر پزشکی','برچسب‌گذاری و آماده‌سازی داده‌های تصویری','توسعه و ارزیابی نمونه اولیه سخت‌افزاری'] : ['Object-detection algorithm development for medical imagery','Medical-image labeling and dataset preparation','Prototype hardware development and project evaluation']).map(item=><div className="card" key={item}><CheckCircle2 className="text-emerald-500"/><p className="mt-4 font-bold leading-7">{item}</p></div>)}</div></div></section>
      </> : <>
        <section className="section-pad"><div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div><div className="eyebrow"><BrainCircuit size={15}/>{fa ? 'پایان‌نامه کارشناسی ارشد · ۲۰۲۱' : 'M.S. thesis · 2021'}</div><h2 className="section-title mt-4">{fa ? 'از ادراک خودرو تا تصمیم‌گیری چراغ راهنمایی' : 'From vehicle perception to traffic-signal decisions'}</h2><p className="mt-5 leading-8 text-slate-500">{project.summary[lang]}</p><div className="mt-7 space-y-3">{project.highlights[lang].map(item=><div key={item} className="flex gap-3"><CheckCircle2 className="mt-1 shrink-0 text-emerald-500" size={18}/><p className="leading-7 text-slate-600 dark:text-slate-300">{item}</p></div>)}</div></div>
            <div className="case-gallery"><img src={project.gallery[0]} alt={fa ? 'مدل چهارراه در پژوهش کنترل ترافیک' : 'Four-way intersection model used in traffic-control research'} loading="lazy"/><img src={project.gallery[1]} alt={fa ? 'نمونه ادراک و تشخیص خودرو' : 'Vehicle perception and object-detection example'} loading="lazy"/></div>
          </div>
        </div></section>
        <section className="section-pad bg-slate-950 text-white"><div className="container-shell"><div className="max-w-4xl"><div className="eyebrow border-white/15 bg-white/5 text-cyan-200">{fa ? 'ادامه پژوهش' : 'Current extension'}</div><h2 className="mt-5 text-3xl font-black sm:text-4xl">{fa ? 'بخش کنترل هنوز ادامه دارد.' : 'The control side is still evolving.'}</h2><p className="mt-5 text-lg leading-9 text-slate-300">{project.currentWork[lang]}</p><Link className="mt-7 inline-flex items-center gap-2 font-black text-cyan-300" to={localizedPath('/blog/deep-reinforcement-learning-traffic-signals',lang)}>{fa ? 'یادداشت پایان‌نامه' : 'Read the thesis note'}<ExternalLink size={16}/></Link></div></div></section>
      </>}
    </main>
  </>
}
