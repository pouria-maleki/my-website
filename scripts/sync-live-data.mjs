import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { publications } from '../src/data/publications.js'

const output = resolve(process.cwd(), 'src/data/live-data.json')
let current
try { current = JSON.parse(readFileSync(output, 'utf8')) } catch { current = {} }

async function getJson(url, headers = {}) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 12000)
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent':'pouriamaleki.com-build-sync/5.0 (mailto:p.maleki.1994@gmail.com)',
        'Accept':'application/json',
        ...headers
      },
      signal: controller.signal
    })
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
    return await res.json()
  } finally { clearTimeout(timer) }
}

function datePartsToIso(parts) {
  const [year, month, day] = parts || []
  if (!year) return null
  return [String(year), month ? String(month).padStart(2,'0') : null, day ? String(day).padStart(2,'0') : null].filter(Boolean).join('-')
}

function crossrefDate(message) {
  const parts = message?.['published-print']?.['date-parts']?.[0]
    || message?.published?.['date-parts']?.[0]
    || message?.issued?.['date-parts']?.[0]
    || message?.created?.['date-parts']?.[0]
  return datePartsToIso(parts)
}

function crossrefAuthors(message) {
  return (message?.author || []).map(a => [a.given, a.family].filter(Boolean).join(' ')).filter(Boolean)
}

async function syncGitHub() {
  const base = 'https://api.github.com'
  const githubToken = process.env.GITHUB_TOKEN
  const headers = githubToken ? { Authorization:`Bearer ${githubToken}` } : {}
  const [profile, repos] = await Promise.all([
    getJson(`${base}/users/pouria-maleki`, headers),
    getJson(`${base}/users/pouria-maleki/repos?per_page=100&sort=updated&type=owner`, headers)
  ])
  return {
    status: 'live',
    profile: { login:profile.login, name:profile.name, bio:profile.bio, location:profile.location, html_url:profile.html_url, public_repos:profile.public_repos, followers:profile.followers, updated_at:profile.updated_at },
    repos: repos.map(r => ({ name:r.name, full_name:r.full_name, html_url:r.html_url, description:r.description, language:r.language, stargazers_count:r.stargazers_count, forks_count:r.forks_count, watchers_count:r.watchers_count, topics:r.topics, updated_at:r.updated_at, pushed_at:r.pushed_at, fork:r.fork, archived:r.archived, homepage:r.homepage }))
  }
}

async function syncPublication(pub) {
  if (!pub.doi) return { ...pub, status:'fixed', citationCount:null, citationSource:null }

  let crossref = null
  let semantic = null

  try {
    const data = await getJson(`https://api.crossref.org/works/${encodeURIComponent(pub.doi)}?mailto=${encodeURIComponent('p.maleki.1994@gmail.com')}`)
    crossref = data?.message || null
  } catch (error) {
    console.warn(`Crossref ${pub.doi}: ${error.message}`)
  }

  try {
    const key = process.env.SEMANTIC_SCHOLAR_API_KEY
    const headers = key ? { 'x-api-key': key } : {}
    const fields = 'title,year,venue,url,citationCount,publicationDate,authors,externalIds'
    semantic = await getJson(`https://api.semanticscholar.org/graph/v1/paper/${encodeURIComponent(`DOI:${pub.doi}`)}?fields=${encodeURIComponent(fields)}`, headers)
  } catch (error) {
    console.warn(`Semantic Scholar ${pub.doi}: ${error.message}`)
  }

  const crossrefAuthorsList = crossrefAuthors(crossref)
  const crossrefAudit = crossref ? {
    title: crossref?.title?.[0] || null,
    publishedDate: crossrefDate(crossref),
    venue: crossref?.['container-title']?.[0] || null,
    authors: crossrefAuthorsList
  } : null

  return {
    ...pub,
    status: crossref || semantic ? 'live' : 'fallback',
    // Display metadata is intentionally pinned to the verified DOI record in
    // publications.js so a provider-specific date/venue convention cannot
    // silently change what visitors see. Crossref is retained as an audit.
    officialTitle: pub.officialTitle,
    publishedDate: pub.publishedDate,
    year: pub.year,
    venue: pub.venue,
    authors: pub.authors,
    citationCount: Number.isFinite(semantic?.citationCount) ? semantic.citationCount : null,
    citationSource: Number.isFinite(semantic?.citationCount) ? 'Semantic Scholar' : null,
    semanticScholarUrl: semantic?.url || null,
    metadataSource: crossref ? 'Crossref DOI verified + local display record' : 'Local verified metadata',
    crossrefAudit
  }
}

async function syncPublications() {
  const items = []
  for (const pub of publications) items.push(await syncPublication(pub))
  const citationCount = items.reduce((sum, p) => sum + (Number.isFinite(p.citationCount) ? p.citationCount : 0), 0)
  const liveCitationWorks = items.filter(p => Number.isFinite(p.citationCount)).length
  return {
    status: items.some(p => p.status === 'live') ? 'live' : 'fallback',
    items,
    summary: { publicationCount: items.length, citationCount, liveCitationWorks }
  }
}

const next = { ...current }
try {
  next.github = await syncGitHub()
  console.log(`GitHub sync: ${next.github.repos.length} repos`)
} catch (error) {
  console.warn(`GitHub sync skipped: ${error.message}`)
  next.github = current.github || { status:'fallback', profile:null, repos:[] }
}

try {
  next.publications = await syncPublications()
  console.log(`Publication sync: ${next.publications.items.length} verified works`)
} catch (error) {
  console.warn(`Publication sync skipped: ${error.message}`)
  next.publications = current.publications || { status:'fallback', items:publications, summary:{ publicationCount:publications.length, citationCount:0, liveCitationWorks:0 } }
}

// Keep the old field only for backward compatibility with existing deployments.
next.semanticScholar = current.semanticScholar || { status:'fallback', author:null, papers:[] }
if (next.github?.status === 'live' || next.publications?.status === 'live') next.syncedAt = new Date().toISOString()
writeFileSync(output, `${JSON.stringify(next, null, 2)}\n`)
