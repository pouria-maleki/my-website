import SocialLinks from './SocialLinks'
import { useApp } from '../context/AppContext'
import { localizedPath } from '../utils/routes'
import { Link } from 'react-router-dom'

export default function Footer() {
  const { lang, t } = useApp()
  return <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
    <div className="container-shell grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
      <div><Link to={localizedPath('/about', lang)} className="text-lg font-black">{lang === 'fa' ? 'پوریا ملکی · Pouria Maleki' : 'Pouria Maleki · پوریا ملکی'}</Link><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">{t.footer}</p></div>
      <SocialLinks compact />
    </div>
    <div className="container-shell mt-7 border-t border-slate-200 pt-6 text-xs text-slate-400 dark:border-slate-800">© {new Date().getFullYear()} Pouria Maleki · {lang === 'fa' ? 'وب‌سایت پژوهشی و رزومه علمی' : 'Research portfolio & academic profile'}</div>
  </footer>
}
