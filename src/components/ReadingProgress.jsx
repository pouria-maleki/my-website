import { useEffect, useState } from 'react'

export default function ReadingProgress(){
  const [value,setValue] = useState(0)
  useEffect(() => {
    const update = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      setValue(Math.min(100, Math.max(0, (window.scrollY / max) * 100)))
    }
    update(); window.addEventListener('scroll', update, { passive:true }); window.addEventListener('resize', update)
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  },[])
  return <div className="fixed inset-x-0 top-0 z-[70] h-0.5 bg-transparent" aria-hidden="true"><div className="h-full bg-blue-600 transition-[width] duration-100 dark:bg-cyan-400" style={{width:`${value}%`}}/></div>
}
