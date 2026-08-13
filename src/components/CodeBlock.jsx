import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { useApp } from '../context/AppContext'

export default function CodeBlock({ children, className }) {
  const [copied, setCopied] = useState(false)
  const { t } = useApp()
  const code = String(children).replace(/\n$/, '')
  const copy = async () => { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1800) }
  return <div className="not-prose my-7 overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 text-slate-100" dir="ltr">
    <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2 text-xs text-slate-400"><span>{className?.replace('language-', '') || 'code'}</span><button onClick={copy} className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 hover:bg-slate-800">{copied ? <Check size={14}/> : <Copy size={14}/>} {copied ? t.blog.copied : t.blog.copy}</button></div>
    <pre className="overflow-x-auto p-4 text-sm leading-6"><code>{code}</code></pre>
  </div>
}
