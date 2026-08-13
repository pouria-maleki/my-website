import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CodeBlock from './CodeBlock'

export default function MarkdownContent({ content }) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
    code({ className, children, ...props }) { const isBlock = Boolean(className) || String(children).includes('\n'); return isBlock ? <CodeBlock className={className}>{children}</CodeBlock> : <code className="rounded bg-slate-100 px-1.5 py-0.5 dark:bg-slate-800" {...props}>{children}</code> },
    a({ children, ...props }) { return <a {...props} target="_blank" rel="noreferrer">{children}</a> }
  }}>{content}</ReactMarkdown>
}
