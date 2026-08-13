import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import { AppProvider } from './context/AppContext'
import './index.css'

const root = document.getElementById('root')
const app = <React.StrictMode><HelmetProvider><BrowserRouter><AppProvider><App/></AppProvider></BrowserRouter></HelmetProvider></React.StrictMode>
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
