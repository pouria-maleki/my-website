import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { useApp } from '../context/AppContext'
export default function NotFound(){ const {lang,t}=useApp(); return <><SEO path="/404" title={`${t.notFound.title} | Pouria Maleki`} description={t.notFound.text}/><main className="container-shell grid min-h-[65vh] place-items-center py-20 text-center"><div><div className="text-8xl font-black text-blue-600">404</div><h1 className="mt-5 text-3xl font-black">{t.notFound.title}</h1><p className="mt-3 text-slate-500">{t.notFound.text}</p><Link className="btn-primary mt-7" to={`/?lang=${lang}`}>{t.notFound.action}</Link></div></main></> }
