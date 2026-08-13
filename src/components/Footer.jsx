import { Github, Linkedin, Mail } from 'lucide-react'
import { SITE } from '../data/site'
import { useApp } from '../context/AppContext'

export default function Footer() {
  const { t } = useApp()
  return <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
    <div className="container-shell flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-start">
      <div><strong>Pouria Maleki</strong><p className="mt-1 text-sm text-slate-500">{t.footer}</p></div>
      <div className="flex items-center gap-2"><a className="icon-btn" href={SITE.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a><a className="icon-btn" href={SITE.social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a className="icon-btn" href={`mailto:${SITE.email}`} aria-label="Email"><Mail size={18}/></a></div>
    </div>
  </footer>
}
