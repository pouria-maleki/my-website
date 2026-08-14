import { ArrowRight, BrainCircuit, Database, Radar, Route } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { localizedPath } from '../utils/routes'

export default function ResearchJourney() {
  const { lang } = useApp()
  const fa = lang === 'fa'
  const steps = fa ? [
    ['۲۰۲۱','پایان‌نامه ارشد','کنترل هوشمند چراغ راهنمایی با Deep Q-Learning', BrainCircuit],
    ['۲۰۲۴','ادراک خودرو','تشخیص خودرو و خودروهای امدادی با بینایی ماشین', Radar],
    ['۲۰۲۴','دیتاست دامنه‌محور','دیتاست خودروهای ایرانی و ارزیابی تشخیص شیء', Database],
    ['اکنون','توسعه بخش کنترل','مقاله جدید در ادامه مسیر کنترل ترافیک مبتنی بر Deep Q-Learning در حال آماده‌سازی برای داوری', Route]
  ] : [
    ['2021','M.S. thesis','Intelligent traffic-signal control with Deep Q-Learning', BrainCircuit],
    ['2024','Vehicle perception','Object detection for vehicles and emergency-vehicle classes', Radar],
    ['2024','Domain-specific data','Iranian vehicle dataset and object-detection evaluation', Database],
    ['Now','Control-side extension','New Deep Q-Learning traffic-control manuscript being prepared for peer review', Route]
  ]
  return <div className="journey-shell">
    <div className="max-w-3xl">
      <div className="eyebrow"><Route size={15}/>{fa ? 'مسیر پژوهشی' : 'Research lineage'}</div>
      <h2 className="section-title mt-4">{fa ? 'یک مسئله، چند خروجی پژوهشی' : 'One research problem, multiple scientific outputs'}</h2>
      <p className="mt-4 leading-8 text-slate-500 dark:text-slate-400">{fa ? 'پژوهش ترافیک من از پایان‌نامه ارشد شروع شد، بخش ادراک آن به دو مقاله و دیتاست عمومی رسید و اکنون بخش کنترل با یک روش جدیدتر در حال توسعه برای ارسال به داوری است.' : 'My traffic research started with the M.S. thesis, the perception side evolved into two publications and public datasets, and the control side is now being extended into a new manuscript.'}</p>
    </div>
    <div className="mt-10 grid gap-4 lg:grid-cols-4">
      {steps.map(([date,title,text,Icon], index) => <div key={title} className="journey-step">
        <div className="flex items-center justify-between"><div className="grid size-10 place-items-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-cyan-300"><Icon size={19}/></div>{index < steps.length - 1 && <ArrowRight className="hidden text-slate-300 lg:block dark:text-slate-700" size={20}/>}</div>
        <div className="mt-5 text-xs font-black uppercase tracking-[.14em] text-blue-600 dark:text-cyan-300">{date}</div>
        <h3 className="mt-2 font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
      </div>)}
    </div>
    <Link className="mt-7 inline-flex items-center gap-2 font-black text-blue-600" to={localizedPath('/projects/intelligent-traffic-control-dql',lang)}>{fa ? 'مشاهده داستان کامل پروژه ترافیک' : 'Explore the full traffic case study'}<ArrowRight size={17}/></Link>
  </div>
}
