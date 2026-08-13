import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CodeBlock from './CodeBlock'

export const normalizeMarkdown = (content = '') => content.replace(/^#\s+.*(?:\r?\n)+/, '')
export const headingId = (value = '') => String(value)
  .toLowerCase()
  .trim()
  .replace(/[`*_~]/g, '')
  .replace(/[^\p{L}\p{N}\s-]/gu, '')
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-')

function textFromChildren(children) {
  return Array.isArray(children) ? children.join('') : String(children ?? '')
}

export default function MarkdownContent({ content }) {
  const normalized = normalizeMarkdown(content)
  return <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
    h1({ children }) { const text = textFromChildren(children); return <h2 id={headingId(text)}>{children}</h2> },
    h2({ children }) { const text = textFromChildren(children); return <h2 id={headingId(text)}>{children}</h2> },
    h3({ children }) { const text = textFromChildren(children); return <h3 id={headingId(text)}>{children}</h3> },
    code({ className, children, ...props }) { const isBlock = Boolean(className) || String(children).includes('\n'); return isBlock ? <CodeBlock className={className}>{children}</CodeBlock> : <code className="rounded bg-slate-100 px-1.5 py-0.5 dark:bg-slate-800" {...props}>{children}</code> },
    a({ children, ...props }) { return <a {...props} target="_blank" rel="noreferrer">{children}</a> }
  }}>{normalized}</ReactMarkdown>
}
