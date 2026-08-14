import { Activity, ArrowRight, Award, BookOpen, BrainCircuit, BriefcaseBusiness, Cpu, Database, GraduationCap, Mail, Microscope, Network, Radar, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import InteractiveSkillCard from '../components/InteractiveSkillCard'
import LiveGithubProjects from '../components/LiveGithubProjects'
import ResearchImpact from '../components/ResearchImpact'
import ResearchJourney from '../components/ResearchJourney'
import SocialLinks from '../components/SocialLinks'
import SEO from '../components/SEO'
import { useApp } from '../context/AppContext'
import { articles } from '../data/articles'
import { references, SITE } from '../data/site'
import { skillGroups } from '../data/skills'
import { TEACHING_START_YEAR, yearsSince } from '../utils/dates'
import { localizedPath } from '../utils/routes'

export default function Home() {
  const { lang, t } = useApp()
  const fa = lang === 'fa'
  const teachingYears = yearsSince(TEACHING_START_YEAR)
  const experiences = fa ? [
    ['۲۰۲۱–اکنون','توسعه سامانه هوشمند کمک‌تشخیصی ضایعات دستگاه گوارش','شرکت دانش‌بنیان، همدان','توسعه الگوریتم هوش مصنوعی، برچسب‌گذاری تصاویر پزشکی و توسعه سخت‌افزار نمونه اولیه؛ جزئیات یکپارچه‌سازی برای حفظ مالکیت فکری منتشر نمی‌شود.'],
    [`۲۰۱۸–اکنون · ${teachingYears}+ سال`,'مدرس الکترونیک','وزارت آموزش و پرورش، همدان','تدریس برق و مغناطیس، مدار، PCB، AutoCAD Electrical، میکروکنترلرهای AVR/ARM و نصب و راه‌اندازی سامانه‌های اتوماسیون.'],
    ['۲۰۱۸–۲۰۲۱','کارشناسی ارشد مهندسی برق – کنترل','دانشگاه بوعلی سینا','معدل معادل ۳٫۹۱/۴ و رتبه اول ورودی. پایان‌نامه: کنترل هوشمند چراغ راهنمایی با Deep Q-Learning، بینایی ماشین و شبیه‌سازی SUMO.'],
    ['۲۰۱۲–۲۰۱۷','کارشناسی مهندسی برق – کنترل','دانشگاه صنعتی همدان','پایان‌نامه: کنترل کم‌مصرف سیستم تهویه با کنترل لغزشی و انرژی باد.']
  ] : [
    ['2021–Present','AI-Assisted Gastrointestinal Lesion Detection System','Knowledge-Based Company, Hamedan','AI algorithm development, medical-image labeling and prototype hardware development; implementation and integration details remain private to protect company IP.'],
    [`2018–Present · ${teachingYears}+ years`,'Electronics Teacher','Ministry of Education, Hamedan','Teaching electricity and magnetism, circuits, PCB design, AutoCAD Electrical, AVR/ARM microcontrollers and automation-system installation.'],
    ['2018–2021','M.S. Electrical Engineering · Control Systems','Bu-Ali Sina University','3.91/4 GPA and ranked first in cohort. Thesis on intelligent traffic-signal control with Deep Q-Learning, computer vision and SUMO simulation.'],
    ['2012–2017','B.S. Electrical Engineering · Control Systems','Hamedan University of Technology','Thesis on energy-saving air-conditioning control with sliding-mode control and wind power.']
  ]

  const projects = fa ? [
    { title:'سامانه هوشمند کمک‌تشخیصی ضایعات دستگاه گوارش', text:'توسعه نمونه اولیه برای شناسایی دقیق پولیپ‌ها و ضایعات مشکوک در تصاویر آندوسکوپی با بینایی ماشین و تشخیص شیء.', icon: Activity, project:'ai-gastrointestinal-lesion-detection', image:'/images/projects/medical-detections.webp' },
    { title:'کنترل هوشمند ترافیک با Deep Q-Learning', text:'پایان‌نامه کارشناسی ارشد در دانشگاه بوعلی سینا؛ از ادراک خودرو تا تصمیم‌گیری تطبیقی چراغ راهنمایی در SUMO.', icon: Network, project:'intelligent-traffic-control-dql', image:'/images/projects/traffic-rl-loop.webp' },
    { title:'تشخیص شیء و ادراک خودرو', text:'طراحی دیتاست، تشخیص شیء با خانواده YOLO و مطالعه روش‌های ناحیه‌محور برای سناریوهای شهری و خودروهای امدادی.', icon: Radar, blog:'vehicle-detection-yolo-emergency-vehicles' },
    { title:'مدیریت انرژی هوشمند', text:'کنترل فازی و تطبیقی غیرخطی برای هماهنگی بارهای سرمایشی با انرژی تجدیدپذیر.', icon: BrainCircuit, blog:'sustainable-energy-fuzzy-control' }
  ] : [
    { title:'AI-Assisted Gastrointestinal Lesion Detection System', text:'An applied prototype for high-precision identification of polyps and suspicious gastrointestinal lesions in endoscopic imagery.', icon: Activity, project:'ai-gastrointestinal-lesion-detection', image:'/images/projects/medical-detections.webp' },
    { title:'Intelligent Traffic Control with Deep Q-Learning', text:'M.S. thesis research at Bu-Ali Sina University, linking vehicle perception with adaptive traffic-signal decisions in SUMO.', icon: Network, project:'intelligent-traffic-control-dql', image:'/images/projects/traffic-rl-loop.webp' },
    { title:'Object Detection & Vehicle Perception', text:'Dataset engineering and object detection with the YOLO family, including dedicated emergency-vehicle classes for intelligent transportation.', icon: Radar, blog:'vehicle-detection-yolo-emergency-vehicles' },
    { title:'Intelligent Energy Management', text:'Fuzzy and adaptive nonlinear control for coordinating cooling loads with renewable energy.', icon: BrainCircuit, blog:'sustainable-energy-fuzzy-control' }
  ]

  return <>
    <SEO pageType="home" title={fa ? 'پوریا ملکی | پژوهشگر هوش مصنوعی، بینایی ماشین و سیستم‌های کنترل' : 'Pouria Maleki | AI Researcher, Computer Vision & Control Systems'} description={fa ? 'وب‌سایت رسمی پوریا ملکی؛ پژوهشگر هوش مصنوعی و مهندس برق با تمرکز بر بینایی ماشین، تشخیص شیء، یادگیری تقویتی، کنترل هوشمند، حمل‌ونقل و هوش مصنوعی پزشکی.' : 'Official research portfolio of Pouria Maleki, an AI researcher and electrical/control systems engineer working on computer vision, object detection, reinforcement learning, intelligent transportation and applied medical AI.'} />

    <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
      <div className="hero-grid absolute inset-0 opacity-70" />
      <div className="orb orb-a"/><div className="orb orb-b"/>
      <div className="container-shell relative grid min-h-[82vh] items-center gap-12 py-20 lg:grid-cols-[1.18fr_.82fr] lg:py-28">
        <div>
          <div className="eyebrow"><Sparkles size={15}/>{t.hero.badge}</div>
          <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-[-.05em] sm:text-6xl lg:text-7xl">{fa ? 'پوریا ملکی' : 'Pouria Maleki'}</h1>
          <p className="mt-6 max-w-3xl text-xl font-semibold leading-9 text-slate-700 dark:text-slate-300 md:text-2xl">{t.hero.title}</p>
          <p className="mt-3 max-w-3xl leading-8 text-slate-500 dark:text-slate-400">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#research" className="btn-primary">{t.hero.primary}<ArrowRight size={18}/></a><Link to={localizedPath('/about',lang)} className="btn-secondary"><Microscope size={18}/>{fa ? 'پروفایل کامل' : 'Full profile'}</Link></div>
          <SocialLinks className="mt-7" />
          <div className="mt-7 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300"><span className="mini-chip"><Award size={15}/>{t.hero.award}</span><span className="mini-chip"><GraduationCap size={15}/>{t.hero.rank}</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-[2.8rem] bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-violet-500/20 blur-2xl" />
          <div className="profile-frame relative overflow-hidden rounded-[2.25rem] border border-white/60 bg-white/70 p-3 shadow-2xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/70"><img src="/images/profile.webp" width="1200" height="1195" alt={fa ? 'پوریا ملکی، پژوهشگر هوش مصنوعی و مهندس سیستم‌های کنترل' : 'Pouria Maleki, AI researcher and control systems engineer'} fetchPriority="high" decoding="async" className="aspect-[4/5] w-full rounded-[1.8rem] object-cover" /></div>
          <div className="floating-tag floating-tag-a"><Database size={15}/><span>Object Detection · Datasets</span></div>
          <div className="floating-tag floating-tag-b"><Cpu size={15}/><span>AI · Control</span></div>
        </div>
      </div>
    </section>

    <section id="about" className="section-pad"><div className="container-shell grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
      <div><div className="eyebrow">{t.about.eyebrow}</div><h2 className="section-title mt-5">{t.about.title}</h2></div>
      <div className="space-y-5 text-lg leading-9 text-slate-600 dark:text-slate-300"><p>{t.about.p1}</p><p>{t.about.p2}</p><p>{t.about.p3}</p><Link to={localizedPath('/about',lang)} className="inline-flex items-center gap-2 font-black text-blue-600">{fa ? 'بیوگرافی، سوابق و لینک‌های علمی' : 'Biography, credentials & scholarly links'}<ArrowRight size={17}/></Link></div>
      <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[['5',t.stats[0]],['2',t.stats[1]],['3.91/4',t.stats[2]],[`${teachingYears}+`,t.stats[3]]].map(([n,l])=><div key={l} className="stat-card"><strong>{n}</strong><span>{l}</span></div>)}</div>
    </div></section>

    <section className="section-pad bg-slate-50 dark:bg-slate-900/40"><div className="container-shell"><ResearchImpact/></div></section>

    <section className="section-pad"><div className="container-shell"><ResearchJourney/></div></section>

    <section className="section-pad bg-slate-50 dark:bg-slate-900/40"><div className="container-shell"><div className="section-heading"><div><div className="eyebrow"><BrainCircuit size={15}/>{t.sections.expertise}</div><h2 className="section-title mt-4">{fa ? 'مهارت‌هایی که با پروژه و نتیجه اثبات شده‌اند' : 'Capabilities demonstrated through real projects'}</h2><p className="mt-4 max-w-2xl leading-8 text-slate-500">{fa ? 'روی کارت‌ها حرکت کن؛ هر مهارت ابزارها و پروژه‌هایی را نشان می‌دهد که واقعاً در آن استفاده شده است.' : 'Move across the cards: each capability reveals the tools and real projects where it has been applied.'}</p></div></div><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{skillGroups.map((skill,i)=><InteractiveSkillCard key={skill.id} skill={skill} index={i}/>)}</div></div></section>

    <section className="section-pad"><div className="container-shell"><div className="eyebrow"><BriefcaseBusiness size={15}/>{t.sections.experience}</div><h2 className="section-title mt-4">{fa ? 'مسیر حرفه‌ای، آموزشی و دانشگاهی' : 'Academic, teaching & professional journey'}</h2><p className="mt-4 max-w-3xl leading-8 text-slate-500">{fa ? `سابقه تدریس از سال ۱۳۹۷/۲۰۱۸ به‌صورت خودکار محاسبه می‌شود و در سال‌های آینده نیازی به ویرایش دستی ندارد.` : `Teaching experience is calculated automatically from 2018, so the displayed duration stays current without yearly manual edits.`}</p><div className="mt-10 grid gap-5 lg:grid-cols-2">{experiences.map(([date,title,place,text])=><article key={title} className="card timeline-card"><div className="text-sm font-bold text-blue-600 dark:text-blue-400">{date}</div><h3 className="mt-3 text-xl font-bold">{title}</h3><p className="mt-1 text-sm font-semibold text-slate-500">{place}</p><p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">{text}</p></article>)}</div></div></section>

    <section id="research" className="section-pad bg-slate-950 text-white"><div className="container-shell"><div className="eyebrow border-white/15 bg-white/5 text-cyan-200"><Microscope size={15}/>{t.sections.projects}</div><h2 className="section-title mt-4 max-w-3xl text-white">{fa ? 'پژوهش‌هایی در مرز هوش مصنوعی و مهندسی' : 'Research at the boundary of AI and engineering'}</h2><div className="mt-10 grid gap-5 md:grid-cols-2">{projects.map(({title,text,icon:Icon,blog,project,image})=><article key={title} className="research-card group overflow-hidden">{image && <div className="-mx-7 -mt-7 mb-6 overflow-hidden border-b border-white/10"><img src={image} alt="" loading="lazy" className="aspect-[16/6] w-full object-cover opacity-85 transition duration-500 group-hover:scale-[1.025] group-hover:opacity-100"/></div>}<div className="mb-5 grid size-11 place-items-center rounded-2xl bg-white/10 transition group-hover:scale-110 group-hover:bg-cyan-400/15"><Icon/></div><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-300">{text}</p>{(blog || project) && <Link to={localizedPath(project ? `/projects/${project}` : `/blog/${blog}`,lang)} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300">{fa ? 'مشاهده جزئیات' : 'Explore case study'}<ArrowRight size={15}/></Link>}</article>)}</div></div></section>

    <section className="section-pad"><div className="container-shell"><div className="section-heading"><div><div className="eyebrow"><Cpu size={15}/>{fa ? 'کد و داده باز' : 'Open code & datasets'}</div><h2 className="section-title mt-4">{fa ? 'پروژه‌های GitHub، به‌صورت خودکار' : 'GitHub projects, automatically synced'}</h2><p className="mt-4 max-w-2xl leading-8 text-slate-500">{fa ? 'مخزن‌های پژوهشی عمومی در زمان Build خوانده می‌شوند؛ پروژه جدیدی که در GitHub منتشر کنی می‌تواند بدون ویرایش دستی وارد این بخش شود.' : 'Public research repositories are read at build time, so future GitHub projects can appear here without manually rewriting the portfolio.'}</p></div></div><div className="mt-10"><LiveGithubProjects/></div></div></section>

    <section className="section-pad bg-slate-50 dark:bg-slate-900/40"><div className="container-shell"><div className="section-heading"><div><div className="eyebrow"><BookOpen size={15}/>{t.sections.latest}</div><h2 className="section-title mt-4">{t.blog.title}</h2></div><Link className="btn-secondary" to={localizedPath('/blog',lang)}>{t.blog.all}<ArrowRight size={18}/></Link></div><div className="mt-10 grid gap-6 lg:grid-cols-3">{articles.slice(0,3).map(a=><BlogCard key={a.slug} article={a}/>)}</div></div></section>

    <section className="section-pad"><div className="container-shell"><div className="eyebrow"><GraduationCap size={15}/>{t.sections.refs}</div><h2 className="section-title mt-4">{fa ? 'شبکه علمی و مراجع دانشگاهی' : 'Academic network & references'}</h2><div className="mt-10 grid gap-4 md:grid-cols-2">{references.map(r=><article key={r.email} className="card"><h3 className="text-lg font-bold">{r.name}</h3><p className="mt-1 font-semibold text-blue-600 dark:text-blue-400">{r.role[lang]}</p><p className="mt-3 text-sm leading-6 text-slate-500">{r.affiliation[lang]}</p><a href={`mailto:${r.email}`} className="mt-4 inline-block text-sm font-semibold">{r.email}</a></article>)}</div></div></section>

    <section id="contact" className="section-pad"><div className="container-shell"><div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white md:p-12"><div className="max-w-3xl"><div className="text-sm font-bold uppercase tracking-[.18em] text-blue-100">{t.sections.contact}</div><h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{fa ? 'برای پژوهش، دکتری و پروژه‌های هوشمند گفتگو کنیم.' : 'Let’s collaborate on research, PhD work and intelligent systems.'}</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">{t.contact.text}</p><a className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-700" href={`mailto:${SITE.email}`}><Mail size={18}/>{t.contact.email}</a><SocialLinks className="mt-6 [&_.social-chip]:border-white/25 [&_.social-chip]:bg-white/10 [&_.social-chip]:text-white [&_.social-chip:hover]:bg-white/20" /></div></div></div></section>
  </>
}
