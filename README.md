# Pouria Maleki — Living Research Portfolio v5

A bilingual, SEO-first academic/research portfolio for **Pouria Maleki**. Built with React, Vite, Tailwind CSS and React Router, with static prerendering for important EN/FA routes.

## What changed in v5

- Publication titles, dates and venues are no longer inferred from an author-name search.
- DOI-linked works use verified local metadata and refresh from **Crossref DOI metadata** at build time.
- Paper-level citation counts refresh from **Semantic Scholar by exact DOI**, avoiding author-name ambiguity.
- Google Scholar remains prominently linked as the primary scholarly profile; the site does not scrape Scholar pages.
- Published-paper cards now use the official bibliographic title instead of an editorial rewrite.
- Added a visual **Research Lineage**: 2021 M.S. thesis → vehicle perception → published datasets/papers → current LSTM-enhanced traffic-control manuscript.
- Added a high-level **AI-Assisted Gastrointestinal Lesion Detection** case study using real project imagery.
- The medical case study intentionally omits implementation/integration details to protect company IP.
- Medical model metrics are shown only in the case-study context and are explicitly labeled as project/model evaluation, not clinical claims.
- Added a dedicated **Intelligent Traffic Signal Control with Deep Q-Learning** case study using original figures from the research presentation.
- Added a short bilingual research update for the new LSTM-enhanced traffic-control manuscript, marked **Manuscript in preparation** rather than submitted/under review.
- Replaced several generic blog thumbnails with real figures from the research presentation.
- Removed the old “98% accuracy” homepage emphasis; the homepage now highlights published works, public datasets, GPA and automatically calculated teaching experience.
- Teaching experience continues to calculate automatically from 2018.
- Project pages are prerendered, localized and included in `sitemap.xml` with SEO metadata.

## Live-data strategy

The site deliberately separates **bibliographic truth** from **citation freshness**:

- Crossref / DOI metadata → official title, publication date, venue and authors for DOI-linked works.
- Semantic Scholar exact DOI lookup → citation count for each DOI-linked work.
- GitHub API → public repositories, stars, forks, language and update date.
- Google Scholar → prominent direct profile link, not scraped.
- If any API is unavailable, the build continues using verified local fallback metadata.

GitHub Actions rebuilds on every push and every Monday.

## URL structure

```text
/                                   English home
/about                              English profile
/blog                               English research blog
/blog/:slug                         English article
/projects/:slug                     English case study
/fa                                 Persian home
/fa/about                           Persian profile
/fa/blog                            Persian research blog
/fa/blog/:slug                      Persian article
/fa/projects/:slug                  Persian case study
```

Current case studies:

```text
/projects/ai-gastrointestinal-lesion-detection
/projects/intelligent-traffic-control-dql
```

## Main content files

```text
src/data/publications.js   Verified publication metadata / DOI records
src/data/articles.js       Bilingual blog and research notes
src/data/projects.js       Public-safe case-study content
src/data/skills.js         Evidence-based capability cards
src/data/site.js           Social/profile links
src/data/translations.js   Main EN/FA UI copy
scripts/sync-live-data.mjs DOI/citation/GitHub refresh
scripts/prerender.mjs      Static routes + sitemap generation
```

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The build:

1. Refreshes DOI publication metadata, citations and GitHub data.
2. Builds the React client bundle.
3. Builds the SSR rendering bundle.
4. Prerenders EN/FA pages, articles and case studies.
5. Generates `sitemap.xml`, `404.html` and `200.html`.

The deployable output is `dist/`.

## GitHub Pages

The repository includes `.github/workflows/deploy.yml`.

1. Upload/commit the project to `main`.
2. **Settings → Pages → Source: GitHub Actions**.
3. Keep custom domain `pouriamaleki.com`.
4. Verify the **Deploy to GitHub Pages** workflow is green.

## Confidential project content

The medical-AI case study is intentionally public-safe. It describes the problem, role, visible outputs and model-evaluation metrics, but does **not** publish internal connectivity, integration architecture, hardware topology or proprietary implementation details.
