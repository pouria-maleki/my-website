import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function Header() {
  const { lang, setLang, theme, setTheme, t } = useApp()
  const [open, setOpen] = useState(false)
  const links = [['/', t.nav.home], ['/#about', t.nav.about], ['/#research', t.nav.research], ['/blog', t.nav.blog], ['/#contact', t.nav.contact]]
  return <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/75">
    <div className="container-shell flex h-16 items-center justify-between gap-4">
      <Link to={`/?lang=${lang}`} className="group flex items-center gap-3 font-bold tracking-tight">
        <span className="grid size-9 place-items-center rounded-xl bg-slate-950 text-sm text-white shadow-lg dark:bg-white dark:text-slate-950">PM</span>
        <span className="hidden sm:inline">Pouria Maleki</span>
      </Link>
      <nav className="hidden items-center gap-1 lg:flex">
        {links.map(([href, label]) => href.includes('#') ? <a key={href} className="nav-link" href={`/?lang=${lang}${href.replace('/', '')}`}>{label}</a> : <NavLink key={href} to={`${href}?lang=${lang}`} className="nav-link">{label}</NavLink>)}
      </nav>
      <div className="flex items-center gap-2">
        <div className="flex rounded-xl border border-slate-200 p-1 text-xs font-bold dark:border-slate-800" aria-label="Language switcher">
          {['fa','en'].map((item) => <button key={item} onClick={() => setLang(item)} className={`rounded-lg px-2.5 py-1.5 transition ${lang === item ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950' : 'text-slate-500 hover:text-slate-950 dark:hover:text-white'}`}>{item.toUpperCase()}</button>)}
        </div>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="icon-btn" aria-label="Toggle color theme">{theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}</button>
        <button className="icon-btn lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">{open ? <X size={20}/> : <Menu size={20}/>}</button>
      </div>
    </div>
    {open && <div className="container-shell border-t border-slate-200 py-3 dark:border-slate-800 lg:hidden">{links.map(([href,label]) => href.includes('#') ? <a key={href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-medium" href={`/?lang=${lang}${href.replace('/', '')}`}>{label}</a> : <Link key={href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-medium" to={`${href}?lang=${lang}`}>{label}</Link>)}</div>}
  </header>
}
