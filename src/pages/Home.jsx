import { ArrowRight, Award, BookOpen, BrainCircuit, BriefcaseBusiness, Cpu, Github, GraduationCap, Linkedin, Mail, Microscope, Network, Radar, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import SEO from '../components/SEO'
import { useApp } from '../context/AppContext'
import { articles } from '../data/articles'
import { references, SITE } from '../data/site'

const skills = [
  ['Python / OpenCV / Data', '90%'], ['MATLAB / Simulink', '90%'], ['Deep Learning', '85%'], ['Computer Vision / YOLO', '85%'], ['Reinforcement Learning', '82%'], ['Embedded / IoT', '80%']
]

export default function Home() {
  const { lang, t } = useApp()
  const fa = lang === 'fa'
  const experiences = fa ? [
    ['۲۰۲۱–اکنون','توسعه‌دهنده ارشد سامانه تشخیص سرطان معده و روده بزرگ','شرکت دانش‌بنیان، همدان','توسعه سخت‌افزار، برچسب‌گذاری تصاویر پزشکی، پیاده‌سازی الگوریتم و اعتبارسنجی بالینی با دقت تشخیص ۹۸٪.'],
    ['۲۰۱۸–۲۰۲۱','کارشناسی ارشد مهندسی برق – کنترل','دانشگاه بوعلی سینا','معدل معادل ۳٫۹۱/۴ و رتبه اول ورودی. پایان‌نامه: کنترل هوشمند چراغ راهنمایی با شبکه‌های عصبی عمیق و یادگیری تقویتی.'],
    ['۲۰۱۸–اکنون','مدرس الکترونیک','وزارت آموزش و پرورش، همدان','تدریس مدار، PCB، AutoCAD Electrical، میکروکنترلرهای AVR/ARM و سیستم‌های اتوماسیون.'],
    ['۲۰۱۲–۲۰۱۷','کارشناسی مهندسی برق – کنترل','دانشگاه صنعتی همدان','پایان‌نامه: کنترل کم‌مصرف سیستم تهویه با کنترل لغزشی و انرژی باد.']
  ] : [
    ['2021–Present','Lead Developer · Gastric & Colon Cancer Detection Device','Knowledge-Based Company, Hamedan','Hardware development, medical-image labeling, algorithm implementation and clinical validation with 98% diagnostic accuracy.'],
    ['2018–2021','M.S. Electrical Engineering · Control Systems','Bu-Ali Sina University','3.91/4 GPA and ranked first in cohort. Thesis: intelligent traffic-signal control using deep neural networks and reinforcement learning.'],
    ['2018–Present','Electronics Teacher','Ministry of Education, Hamedan','Teaching circuits, PCB design, AutoCAD Electrical, AVR/ARM microcontrollers and automation systems.'],
    ['2012–2017','B.S. Electrical Engineering · Control Systems','Hamedan University of Technology','Thesis on energy-saving air-conditioning control with sliding-mode control and wind power.']
  ]
  const projects = fa ? [
    ['تشخیص سرطان با هوش مصنوعی','سامانه تشخیص سرطان معده و روده بزرگ با دقت ۹۸٪ و اعتبارسنجی بالینی.'],
    ['کنترل ترافیک با DQN','عامل یادگیری تقویتی در محیط SUMO برای بهینه‌سازی فاز چراغ چهارراه و استفاده از YOLO برای تخمین تراکم.'],
    ['بینایی ماشین برای خودروها','طراحی دیتاست‌های اختصاصی خودرو و ارزیابی چند نسل YOLO برای تشخیص در شرایط واقعی.'],
    ['مدیریت انرژی هوشمند','کنترل فازی و تطبیقی غیرخطی برای هماهنگی بارهای سرمایشی با انرژی تجدیدپذیر.']
  ] : [
    ['AI Cancer Detection','Gastric and colon cancer detection system with 98% diagnostic accuracy and clinical validation.'],
    ['DQN Traffic Control','Reinforcement-learning agent in SUMO for optimizing intersection phases with YOLO-based traffic estimation.'],
    ['Vehicle Computer Vision','Domain-specific vehicle datasets and multi-generation YOLO evaluation for real-world detection.'],
    ['Intelligent Energy Management','Fuzzy and adaptive nonlinear control for coordinating cooling loads with renewable energy.']
  ]

  return <>
    <SEO title={fa ? 'پوریا ملکی | پژوهشگر هوش مصنوعی و مهندس سیستم‌های کنترل' : 'Pouria Maleki | AI Researcher & Control Systems Engineer'} description={fa ? 'وب‌سایت پژوهشی پوریا ملکی در زمینه هوش مصنوعی، یادگیری عمیق، یادگیری تقویتی، بینایی ماشین، کنترل هوشمند و سیستم‌های مهندسی.' : 'Research portfolio of Pouria Maleki: AI, deep learning, reinforcement learning, computer vision, intelligent control and engineering systems.'} />

    <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
      <div className="hero-grid absolute inset-0 opacity-60" />
      <div className="container-shell relative grid min-h-[76vh] items-center gap-12 py-20 lg:grid-cols-[1.2fr_.8fr] lg:py-28">
        <div>
          <div className="eyebrow"><Sparkles size={15}/>{t.hero.badge}</div>
          <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-[-.04em] sm:text-6xl lg:text-7xl">{fa ? 'پوریا ملکی' : 'Pouria Maleki'}</h1>
          <p className="mt-6 max-w-3xl text-xl font-semibold leading-9 text-slate-700 dark:text-slate-300 md:text-2xl">{t.hero.title}</p>
          <p className="mt-3 max-w-3xl leading-8 text-slate-500 dark:text-slate-400">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#research" className="btn-primary">{t.hero.primary}<ArrowRight size={18}/></a><a href={`mailto:${SITE.email}`} className="btn-secondary"><Mail size={18}/>{t.hero.secondary}</a></div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300"><span className="mini-chip"><Award size={15}/>{t.hero.award}</span><span className="mini-chip"><GraduationCap size={15}/>{t.hero.rank}</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-violet-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/60 bg-white/70 p-3 shadow-2xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/70"><img src="/images/profile.png" alt={fa ? 'پوریا ملکی، پژوهشگر هوش مصنوعی و مهندس برق' : 'Pouria Maleki, AI researcher and electrical engineer'} className="aspect-[4/5] w-full rounded-[1.8rem] object-cover" /></div>
          <div className="relative mt-4 flex justify-center gap-2"><a className="icon-btn" href={SITE.social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/></a><a className="icon-btn" href={SITE.social.github} target="_blank" rel="noreferrer"><Github size={18}/></a><a className="icon-btn" href={`mailto:${SITE.email}`}><Mail size={18}/></a></div>
        </div>
      </div>
    </section>

    <section id="about" className="section-pad"><div className="container-shell grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
      <div><div className="eyebrow">{t.about.eyebrow}</div><h2 className="section-title mt-5">{t.about.title}</h2></div>
      <div className="space-y-5 text-lg leading-9 text-slate-600 dark:text-slate-300"><p>{t.about.p1}</p><p>{t.about.p2}</p><p>{t.about.p3}</p></div>
      <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[['4+',t.stats[0]],['98%',t.stats[1]],['3.91',t.stats[2]],['6+',t.stats[3]]].map(([n,l])=><div key={l} className="stat-card"><strong>{n}</strong><span>{l}</span></div>)}</div>
    </div></section>

    <section className="section-pad bg-slate-50 dark:bg-slate-900/40"><div className="container-shell"><div className="section-heading"><div><div className="eyebrow"><BrainCircuit size={15}/>{t.sections.expertise}</div><h2 className="section-title mt-4">{fa ? 'ابزارها و توانمندی‌های فنی' : 'Technical stack & capabilities'}</h2></div></div><div className="mt-10 grid gap-4 md:grid-cols-2">{skills.map(([s,p])=><div key={s} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950"><div className="flex justify-between gap-4 font-semibold"><span>{s}</span><span>{p}</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{width:p}}/></div></div>)}</div></div></section>

    <section className="section-pad"><div className="container-shell"><div className="eyebrow"><BriefcaseBusiness size={15}/>{t.sections.experience}</div><h2 className="section-title mt-4">{fa ? 'مسیر حرفه‌ای و دانشگاهی' : 'Academic & professional journey'}</h2><div className="mt-10 grid gap-5 lg:grid-cols-2">{experiences.map(([date,title,place,text])=><article key={title} className="card"><div className="text-sm font-bold text-blue-600 dark:text-blue-400">{date}</div><h3 className="mt-3 text-xl font-bold">{title}</h3><p className="mt-1 text-sm font-semibold text-slate-500">{place}</p><p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">{text}</p></article>)}</div></div></section>

    <section id="research" className="section-pad bg-slate-950 text-white"><div className="container-shell"><div className="eyebrow border-white/15 bg-white/5 text-cyan-200"><Microscope size={15}/>{t.sections.projects}</div><h2 className="section-title mt-4 max-w-3xl text-white">{fa ? 'پژوهش‌هایی در مرز هوش مصنوعی و مهندسی' : 'Research at the boundary of AI and engineering'}</h2><div className="mt-10 grid gap-5 md:grid-cols-2">{projects.map(([title,text],i)=><article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/10"><div className="mb-7 grid size-11 place-items-center rounded-2xl bg-white/10">{[<Cpu key="1"/>,<Network key="2"/>,<Radar key="3"/>,<BrainCircuit key="4"/>][i]}</div><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-300">{text}</p></article>)}</div></div></section>

    <section className="section-pad"><div className="container-shell"><div className="section-heading"><div><div className="eyebrow"><BookOpen size={15}/>{t.sections.latest}</div><h2 className="section-title mt-4">{t.blog.title}</h2></div><Link className="btn-secondary" to={`/blog?lang=${lang}`}>{t.blog.all}<ArrowRight size={18}/></Link></div><div className="mt-10 grid gap-6 lg:grid-cols-3">{articles.slice(0,3).map(a=><BlogCard key={a.slug} article={a}/>)}</div></div></section>

    <section className="section-pad bg-slate-50 dark:bg-slate-900/40"><div className="container-shell"><div className="eyebrow"><GraduationCap size={15}/>{t.sections.refs}</div><h2 className="section-title mt-4">{fa ? 'شبکه علمی و مراجع دانشگاهی' : 'Academic network & references'}</h2><div className="mt-10 grid gap-4 md:grid-cols-2">{references.map(r=><article key={r.email} className="card"><h3 className="text-lg font-bold">{r.name}</h3><p className="mt-1 font-semibold text-blue-600 dark:text-blue-400">{r.role[lang]}</p><p className="mt-3 text-sm leading-6 text-slate-500">{r.affiliation[lang]}</p><a href={`mailto:${r.email}`} className="mt-4 inline-block text-sm font-semibold">{r.email}</a></article>)}</div></div></section>

    <section id="contact" className="section-pad"><div className="container-shell"><div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white md:p-12"><div className="max-w-3xl"><div className="text-sm font-bold uppercase tracking-[.18em] text-blue-100">{t.sections.contact}</div><h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{fa ? 'برای پژوهش، دکتری و پروژه‌های هوشمند گفتگو کنیم.' : 'Let’s collaborate on research, PhD work and intelligent systems.'}</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">{t.contact.text}</p><a className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-700" href={`mailto:${SITE.email}`}><Mail size={18}/>{t.contact.email}</a></div></div></div></section>
  </>
}
