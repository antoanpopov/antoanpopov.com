import ExternalLink from '@/components/ui/ExternalLink'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-4xl mx-auto px-6 py-6 font-mono text-sm text-text-faint flex flex-wrap gap-x-4 gap-y-2 items-center justify-between">
        <span>{year} — Built by Antoan Popov</span>
        <span className="flex items-center gap-4">
          <ExternalLink
            href="https://www.linkedin.com/in/antoan-popov"
            className="text-text-faint hover:text-accent text-sm"
          >
            LinkedIn
          </ExternalLink>
          <ExternalLink
            href="https://github.com/antoanpopov"
            className="text-text-faint hover:text-accent text-sm"
          >
            GitHub
          </ExternalLink>
          <ExternalLink
            href="https://twitter.com/AntoanPopoff"
            className="text-text-faint hover:text-accent text-sm"
          >
            X
          </ExternalLink>
        </span>
      </div>
    </footer>
  )
}
