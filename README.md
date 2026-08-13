# Pouria Maleki — React Research Portfolio

A bilingual (FA/EN), responsive research portfolio and blog built with React, Vite, Tailwind CSS and React Router.

## Features

- Instant FA/EN switching with synchronized `lang`, `dir`, font and localized content
- Dark/light theme with persisted preference
- Responsive portfolio sections and research blog
- `/blog/:slug` article routing
- Markdown rendering with GFM tables and copyable code blocks
- Dynamic SEO through `react-helmet-async`
- Canonical, hreflang, Open Graph, Twitter Card and Article JSON-LD metadata
- Build-time static route shells with SEO metadata for crawlers
- `robots.txt` and generated `sitemap.xml`
- Lazy-loaded article images with localized alt text
- GitHub Pages SPA fallback and Vercel rewrite configuration
- GitHub Actions deployment workflow

## Local development

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

The build output is created in `dist/`. The post-build script also creates static route HTML files and the sitemap.

## Deploy to GitHub Pages

1. Push the project to the `main` branch.
2. In GitHub repository settings, set **Pages → Source** to **GitHub Actions**.
3. The included `.github/workflows/deploy.yml` builds and deploys `dist/`.
4. `public/CNAME` preserves the custom domain `pouriamaleki.com`.

## Deploy to Vercel

Import the repository into Vercel. Framework detection should select Vite automatically. Build command: `npm run build`; output directory: `dist`.

## Content editing

- Site translations: `src/data/translations.js`
- Research articles: `src/data/articles.js`
- Academic references/social links: `src/data/site.js`
- Main portfolio page: `src/pages/Home.jsx`

Article content is stored in both Persian and English as Markdown strings, so new posts can be added without changing the renderer.
