import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    sourcemap: true
  },

  // Fix SSR / prerender compatibility with react-helmet-async
  ssr: {
    noExternal: ['react-helmet-async']
  }
})
