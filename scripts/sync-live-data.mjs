import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const output = resolve(process.cwd(), 'src/data/live-data.json')
let current
try { current = JSON.parse(readFileSync(output, 'utf8')) } catch { current = {} }

const knownTitles = [
  'Iranian Vehicle Images Dataset for Object Detection Algorithm',
  'Object Detection for Vehicles with Yolo',
  'Flood Risk Analysis with Deep Learning',
  'Sustainable Energy Management in Multi-Unite Cooling Systems With Fuzzy Logic and Adaptive Nonlinear Control',
  'Offline voice detection in smart homes'
]
const norm = (s='') => s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim()
const known = knownTitles.map(norm)

async function getJson(url, headers = {}) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 10000)
  try {
    const res = await fetch(url, { headers: { 'User-Agent':'pouriamaleki.com-build-sync', 'Accept':'application/json', ...headers }, signal: controller.signal })
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
    return await res.json()
  } finally { clearTimeout(timer) }
}

function titleScore(papers = []) {
  const titles = papers.map(p => norm(p.title))
  return known.reduce((score, target) => score + (titles.some(t => t === target || t.includes(target) || target.includes(t)) ? 1 : 0), 0)
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

async function syncSemanticScholar() {
  const fields = 'name,url,paperCount,citationCount,hIndex,papers.title,papers.year,papers.venue,papers.url,papers.citationCount,papers.externalIds,papers.authors'
  const key = process.env.SEMANTIC_SCHOLAR_API_KEY
  const headers = key ? { 'x-api-key': key } : {}
  const search = await getJson(`https://api.semanticscholar.org/graph/v1/author/search?query=${encodeURIComponent('Pouria Maleki')}&limit=10&fields=${encodeURIComponent(fields)}`, headers)
  const candidates = (search.data || []).map(a => ({ ...a, _score:titleScore(a.papers || []) })).sort((a,b) => b._score - a._score)
  const best = candidates[0]
  if (!best || best._score < 2) throw new Error(`Could not disambiguate Semantic Scholar author (best score ${best?._score || 0})`)
  const papers = (best.papers || []).filter(p => p?.title).map(p => ({
    paperId:p.paperId, title:p.title, year:p.year, venue:p.venue, url:p.url, citationCount:p.citationCount,
    externalIds:p.externalIds, authors:(p.authors || []).map(a => a.name)
  }))
  return {
    status:'live',
    matchScore:best._score,
    author:{ authorId:best.authorId, name:best.name, url:best.url, paperCount:best.paperCount, citationCount:best.citationCount, hIndex:best.hIndex },
    papers
  }
}

const next = { ...current }
try { next.github = await syncGitHub(); console.log(`GitHub sync: ${next.github.repos.length} repos`) }
catch (error) { console.warn(`GitHub sync skipped: ${error.message}`); next.github = current.github || { status:'fallback', profile:null, repos:[] } }
try { next.semanticScholar = await syncSemanticScholar(); console.log(`Semantic Scholar sync: ${next.semanticScholar.author.name} (${next.semanticScholar.matchScore} known-title matches)`) }
catch (error) { console.warn(`Semantic Scholar sync skipped: ${error.message}`); next.semanticScholar = current.semanticScholar || { status:'fallback', author:null, papers:[] } }

if (next.github?.status === 'live' || next.semanticScholar?.status === 'live') next.syncedAt = new Date().toISOString()
writeFileSync(output, `${JSON.stringify(next, null, 2)}\n`)
