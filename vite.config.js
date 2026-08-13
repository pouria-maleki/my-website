import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: { sourcemap: true },
  // react-helmet-async v2 exposes named exports only. Bundling it into the
  // SSR build avoids Node/Vite ESM-CJS interop issues during prerendering.
  ssr: {
    noExternal: ['react-helmet-async']
  }
})
