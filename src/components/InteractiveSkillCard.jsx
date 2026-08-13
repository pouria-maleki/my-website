import { BrainCircuit, CircuitBoard, Cpu, Network, ScanSearch, Waves } from 'lucide-react'
import { useRef } from 'react'
import { useApp } from '../context/AppContext'

const icons = { brain: BrainCircuit, scan: ScanSearch, network: Network, waves: Waves, cpu: Cpu, circuit: CircuitBoard }

export default function InteractiveSkillCard({ skill, index = 0 }) {
  const { lang } = useApp()
  const ref = useRef(null)
  const Icon = icons[skill.icon] || BrainCircuit

  const move = (event) => {
    const el = ref.current
    if (!el || typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    const x = event.clientX - r.left
    const y = event.clientY - r.top
    const rx = ((y / r.height) - 0.5) * -8
    const ry = ((x / r.width) - 0.5) * 8
    el.style.setProperty('--mx', `${x}px`)
    el.style.setProperty('--my', `${y}px`)
    el.style.setProperty('--rx', `${rx}deg`)
    el.style.setProperty('--ry', `${ry}deg`)
  }
  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return <article ref={ref} onPointerMove={move} onPointerLeave={reset} className="skill-tilt group" style={{ '--delay': `${index * 70}ms` }}>
    <div className="skill-glow" aria-hidden="true" />
    <div className="relative z-10">
      <div className="flex items-start justify-between gap-4">
        <div className="grid size-12 place-items-center rounded-2xl border border-blue-500/15 bg-blue-500/10 text-blue-600 transition duration-300 group-hover:scale-110 group-hover:rotate-3 dark:text-cyan-300"><Icon size={23}/></div>
        <span className="text-xs font-black uppercase tracking-[.18em] text-slate-400">0{index + 1}</span>
      </div>
      <h3 className="mt-6 text-xl font-black tracking-tight">{skill.title[lang]}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{skill.subtitle[lang]}</p>
      <div className="mt-5 flex flex-wrap gap-2">{skill.tools.map(tool => <span key={tool} className="tech-pill">{tool}</span>)}</div>
      <div className="skill-evidence mt-6 border-t border-slate-200/80 pt-5 dark:border-slate-800">
        <div className="mb-3 text-xs font-black uppercase tracking-[.15em] text-blue-600 dark:text-cyan-300">{lang === 'fa' ? 'استفاده‌شده در' : 'Applied in'}</div>
        <div className="space-y-2">{skill.evidence[lang].map(item => <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300"><span className="size-1.5 rounded-full bg-blue-500"/>{item}</div>)}</div>
      </div>
    </div>
  </article>
}
