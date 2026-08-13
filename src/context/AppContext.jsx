import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { translations } from '../data/translations'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const queryLang = new URLSearchParams(location.search).get('lang')
  const [lang, setLangState] = useState(() => (queryLang === 'fa' || queryLang === 'en' ? queryLang : localStorage.getItem('lang') || 'en'))
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if ((params.get('lang') === 'fa' || params.get('lang') === 'en') && params.get('lang') !== lang) setLangState(params.get('lang'))
  }, [location.search, lang])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr'
    document.body.classList.toggle('font-fa', lang === 'fa')
    localStorage.setItem('lang', lang)
  }, [lang])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const setLang = (next) => {
    setLangState(next)
    const params = new URLSearchParams(location.search)
    params.set('lang', next)
    navigate({ pathname: location.pathname, search: `?${params.toString()}`, hash: location.hash }, { replace: true })
  }

  const value = useMemo(() => ({ lang, setLang, theme, setTheme, t: translations[lang], dir: lang === 'fa' ? 'rtl' : 'ltr' }), [lang, theme])
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => useContext(AppContext)
