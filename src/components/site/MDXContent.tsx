import { MDXRemote } from 'next-mdx-remote/rsc'
import ExternalLink from '@/components/ui/ExternalLink'

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-mono text-3xl font-bold text-text mt-12 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-mono text-2xl font-bold text-text mt-10 mb-3 border-l-2 border-accent pl-3" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-mono text-lg font-bold text-text mt-8 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-text leading-relaxed mb-5" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-5 space-y-2 list-none" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-5 space-y-2 list-decimal list-inside" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="flex gap-3 text-text leading-relaxed">
      <span className="text-accent font-mono shrink-0 mt-px select-none">▸</span>
      <span>{(props as { children?: React.ReactNode }).children}</span>
    </li>
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-amber pl-4 my-6 text-text-muted italic" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="overflow-x-auto text-sm my-6 p-5 bg-bg-elevated border border-border font-mono leading-relaxed [&>code]:bg-transparent [&>code]:p-0 [&>code]:border-0"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="font-mono text-sm text-accent bg-bg-elevated px-1.5 py-0.5 border border-border"
      {...props}
    />
  ),
  a: ({ href = '', children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href.startsWith('http')) {
      return <ExternalLink href={href}>{children as React.ReactNode}</ExternalLink>
    }
    return <a href={href} className="text-accent link-underline" {...props}>{children}</a>
  },
  hr: () => (
    <div className="text-text-faint font-mono text-sm select-none my-10 overflow-hidden whitespace-nowrap">
      {'─'.repeat(60)}
    </div>
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-text" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="text-text-muted italic" {...props} />
  ),
}

interface MDXContentProps {
  source: string
}

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <MDXRemote source={source} components={components} />
  )
}
