import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import NotFound from './pages/NotFound'

function ScrollManager(){
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 50)
    else window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])
  return null
}

export default function App(){
  return <><ScrollManager/><Header/><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/blog/:slug" element={<BlogPost/>}/>
    <Route path="/fa" element={<Home/>}/>
    <Route path="/fa/about" element={<About/>}/>
    <Route path="/fa/blog" element={<Blog/>}/>
    <Route path="/fa/blog/:slug" element={<BlogPost/>}/>
    <Route path="/404" element={<NotFound/>}/>
    <Route path="/fa/404" element={<NotFound/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes><Footer/></>
}
