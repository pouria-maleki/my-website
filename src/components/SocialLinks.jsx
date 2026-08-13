import { BookOpen, Github, GraduationCap, Linkedin, Mail, Microscope } from 'lucide-react'
import { SITE } from '../data/site'
import { useApp } from '../context/AppContext'

const items = [
  { key: 'linkedin', label: 'LinkedIn', icon: Linkedin },
  { key: 'github', label: 'GitHub', icon: Github },
  { key: 'scholar', label: 'Google Scholar', icon: GraduationCap },
  { key: 'researchGate', label: 'ResearchGate', icon: Microscope },
]

export default function SocialLinks({ compact = false, className = '' }) {
  const { lang } = useApp()
  return <div className={`flex flex-wrap gap-2 ${className}`} aria-label={lang === 'fa' ? 'پروفایل‌های حرفه‌ای و علمی' : 'Professional and scholarly profiles'}>
    {items.map(({ key, label, icon: Icon }) => <a key={key} href={SITE.social[key]} target="_blank" rel="me noreferrer" className={compact ? 'icon-btn' : 'social-chip'} aria-label={label} title={label}><Icon size={compact ? 18 : 17}/>{!compact && <span>{label}</span>}</a>)}
    <a href={`mailto:${SITE.email}`} className={compact ? 'icon-btn' : 'social-chip'} aria-label="Email" title="Email"><Mail size={compact ? 18 : 17}/>{!compact && <span>{lang === 'fa' ? 'ایمیل' : 'Email'}</span>}</a>
  </div>
}
