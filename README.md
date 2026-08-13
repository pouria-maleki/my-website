# Pouria Maleki — Living Research Portfolio v3

A bilingual, SEO-first academic/research portfolio for **Pouria Maleki (پوریا ملکی)**. The project is built with React, Vite, Tailwind CSS and React Router, but it is also statically prerendered at build time so important pages and paper metadata are present in the initial HTML.

## What changed in v3

- Prominent LinkedIn, GitHub, Google Scholar, ResearchGate and email links in the hero, header/mobile navigation, article author cards and footer.
- Separate indexable English and Persian URLs (`/` and `/fa`) with matching `hreflang` links instead of language query parameters.
- A dedicated `/about` and `/fa/about` researcher profile page.
- Evidence-based skills instead of arbitrary percentage bars.
- Pointer-reactive 3D skill cards with spotlight/tilt effects and reduced-motion accessibility support.
- Build-time GitHub sync for public repositories, stars/forks/language/update date, with research repositories linked to their related blog stories.
- Build-time Semantic Scholar sync for scholarly metrics and indexed papers. Google Scholar and ResearchGate remain prominent first-class profile links.
- Weekly GitHub Actions rebuild so public GitHub/research data can refresh without manually editing the site.
- Teaching experience is calculated from `2018` automatically, so the displayed number of years stays current.
- Six bilingual research stories, including the previously missing **Offline Voice Detection in Smart Homes** work.
- Strong entity SEO for `Pouria Maleki`, `پوریا ملکی`, and common transliterations.
- `ProfilePage`, `Person`, `WebSite`, `CollectionPage`, `BlogPosting`, `ScholarlyArticle`, `Dataset` and `BreadcrumbList` JSON-LD where applicable.
- Static prerendering + React hydration for every EN/FA page and article.
- Generated bilingual sitemap and GitHub Pages `404.html` fallback.

## Live-data strategy

The site does **not** scrape Google Scholar pages. Instead:

- Google Scholar is linked prominently as the canonical scholarly profile.
- `scripts/sync-live-data.mjs` uses public GitHub data for repositories.
- The same script uses the Semantic Scholar Academic Graph API for publication/citation metadata when the author can be safely disambiguated against known paper titles.
- If a live source is unavailable, the build does not fail; verified local fallback data stays visible.
- GitHub Actions runs every Monday and on every push to `main`.

Optional: add a repository secret called `SEMANTIC_SCHOLAR_API_KEY` if you have an API key. The workflow also uses GitHub's built-in `GITHUB_TOKEN` for the GitHub API.

## URL structure

```text
/                         English home
/about                    English research profile
/blog                     English research blog
/blog/:slug               English article
/fa                       Persian home
/fa/about                 Persian research profile
/fa/blog                  Persian research blog
/fa/blog/:slug             Persian article
```

## Main project structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── SocialLinks.jsx
│   ├── InteractiveSkillCard.jsx
│   ├── LiveGithubProjects.jsx
│   ├── ResearchImpact.jsx
│   ├── SEO.jsx
│   └── ...
├── context/
│   └── AppContext.jsx
├── data/
│   ├── articles.js
│   ├── skills.js
│   ├── site.js
│   ├── translations.js
│   └── live-data.json
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Blog.jsx
│   ├── BlogPost.jsx
│   └── NotFound.jsx
├── utils/
│   ├── dates.js
│   └── routes.js
├── entry-server.jsx
├── App.jsx
└── main.jsx

scripts/
├── sync-live-data.mjs
└── prerender.mjs
```

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The build performs four jobs:

1. Sync public GitHub and scholarly data.
2. Build the React client bundle.
3. Build an SSR rendering bundle.
4. Prerender all EN/FA routes and generate `sitemap.xml`, `404.html` and `200.html`.

The final deployable directory is `dist/`.

## GitHub Pages deployment

The repository already contains `.github/workflows/deploy.yml`.

1. Upload/commit the project to the repository's `main` branch.
2. Go to **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Keep the custom domain set to `pouriamaleki.com`.
5. Go to **Actions** and verify **Deploy to GitHub Pages** completes successfully.

`public/CNAME` contains `pouriamaleki.com` as an additional safeguard for the generated static artifact.

## Updating content

- Social/profile information: `src/data/site.js`
- Articles and publication metadata: `src/data/articles.js`
- Skills: `src/data/skills.js`
- Main translations: `src/data/translations.js`
- Teaching start year: `src/utils/dates.js`
- Live-data sync behavior: `scripts/sync-live-data.mjs`

## Portfolio-design research applied

The v3 information architecture was shaped after comparing academic-profile guidance and portfolio patterns from more than ten sources, including Rice University, Elsevier, NC State, LSE, UC Berkeley, University of Delaware, Oregon State University, J-PAL, academic portfolio/template guides and researcher-visibility guidance. The recurring ideas applied here are:

- Make identity, role and research direction immediately clear.
- Treat the homepage as a concise navigation/impact layer rather than a full CV dump.
- Put publications, research projects, code/data and scholarly profiles near the top.
- Show evidence and outputs instead of self-rated skill percentages.
- Keep the profile visibly current through recent activity/live data.
- Use stable DOI/source/code/data links for research outputs.
- Provide a dedicated long-form biography/profile page.
- Keep mobile navigation and content scanning simple.
- Make contact and scholarly identity easy to verify.
- Use semantic HTML, structured data and crawlable page-level URLs.

## SEO notes

The site intentionally uses separate localized paths rather than `?lang=fa`, and every important route is prerendered. Article pages include canonical and alternate-language links, Open Graph/Twitter metadata and scholarly structured data. The main profile uses a stable `Person` entity ID and `sameAs` links to LinkedIn, GitHub, Google Scholar, ResearchGate and Semantic Scholar when a verified live author match is available.
