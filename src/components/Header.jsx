import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Github, GraduationCap, Linkedin, Menu, Moon, Sun, X } from 'lucide-react'
import SocialLinks from './SocialLinks'
import { useApp } from '../context/AppContext'
import { SITE } from '../data/site'
import { localizedPath } from '../utils/routes'

export default function Header() {
  const { lang, setLang, theme, setTheme, t } = useApp()
  const [open, setOpen] = useState(false)
  const links = [
    [localizedPath('/', lang), t.nav.home],
    [localizedPath('/about', lang), t.nav.about],
    [localizedPath('/#research', lang), t.nav.research],
    [localizedPath('/blog', lang), t.nav.blog],
    [localizedPath('/#contact', lang), t.nav.contact]
  ]
  const quickSocials = [
    [SITE.social.linkedin, 'LinkedIn', Linkedin],
    [SITE.social.github, 'GitHub', Github],
    [SITE.social.scholar, 'Google Scholar', GraduationCap]
  ]
  return <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/75">
    <div className="container-shell flex h-16 items-center justify-between gap-4">
      <Link to={localizedPath('/', lang)} className="group flex items-center gap-3 font-bold tracking-tight" aria-label="Pouria Maleki home">
        <span className="grid size-9 place-items-center rounded-xl bg-slate-950 text-sm text-white shadow-lg transition group-hover:-rotate-6 group-hover:scale-105 dark:bg-white dark:text-slate-950">PM</span>
        <span className="hidden sm:inline">{lang === 'fa' ? 'پوریا ملکی' : 'Pouria Maleki'}</span>
      </Link>
      <nav className="hidden items-center gap-1 lg:flex">
        {links.map(([href, label]) => href.includes('#') ? <a key={href} className="nav-link" href={href}>{label}</a> : <NavLink key={href} to={href} className={({isActive}) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>{label}</NavLink>)}
      </nav>
      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-1 xl:flex" aria-label={lang === 'fa' ? 'لینک‌های حرفه‌ای سریع' : 'Quick professional links'}>
          {quickSocials.map(([href,label,Icon]) => <a key={label} href={href} target="_blank" rel="me noreferrer" className="icon-btn" aria-label={label} title={label}><Icon size={18}/></a>)}
        </div>
        <div className="flex rounded-xl border border-slate-200 p-1 text-xs font-bold dark:border-slate-800" aria-label="Language switcher">
          {['fa','en'].map((item) => <button key={item} onClick={() => setLang(item)} className={`rounded-lg px-2.5 py-1.5 transition ${lang === item ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950' : 'text-slate-500 hover:text-slate-950 dark:hover:text-white'}`}>{item.toUpperCase()}</button>)}
        </div>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="icon-btn" aria-label="Toggle color theme">{theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}</button>
        <button className="icon-btn lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">{open ? <X size={20}/> : <Menu size={20}/>}</button>
      </div>
    </div>
    {open && <div className="container-shell border-t border-slate-200 py-3 dark:border-slate-800 lg:hidden">
      {links.map(([href,label]) => href.includes('#') ? <a key={href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-medium" href={href}>{label}</a> : <Link key={href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-medium" to={href}>{label}</Link>)}
      <div className="mt-2 border-t border-slate-200 pt-4 dark:border-slate-800"><SocialLinks compact /></div>
    </div>}
  </header>
}
