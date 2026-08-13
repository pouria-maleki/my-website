import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { translations } from '../data/translations'
import { getLanguageFromPath, localizedPath, stripLocalePrefix } from '../utils/routes'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const lang = getLanguageFromPath(location.pathname)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const legacy = new URLSearchParams(location.search).get('lang')
    if (legacy === 'fa' && lang !== 'fa') {
      navigate({ pathname: localizedPath(stripLocalePrefix(location.pathname), 'fa'), hash: location.hash }, { replace: true })
      return
    }
    if (legacy === 'en' && lang !== 'en') {
      navigate({ pathname: localizedPath(stripLocalePrefix(location.pathname), 'en'), hash: location.hash }, { replace: true })
    }
  }, [location.pathname, location.search, location.hash, lang, navigate])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr'
    document.body.classList.toggle('font-fa', lang === 'fa')
    localStorage.setItem('lang', lang)
  }, [lang])

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    setTheme(stored || preferred)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const setLang = (next) => {
    const basePath = stripLocalePrefix(location.pathname)
    navigate({ pathname: localizedPath(basePath, next), hash: location.hash })
  }

  const value = useMemo(() => ({ lang, setLang, theme, setTheme, t: translations[lang], dir: lang === 'fa' ? 'rtl' : 'ltr' }), [lang, theme])
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => useContext(AppContext)
