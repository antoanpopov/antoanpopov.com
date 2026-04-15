import type { Metadata } from 'next'
import Divider from '@/components/ui/Divider'
import ExternalLink from '@/components/ui/ExternalLink'

export const metadata: Metadata = {
  title: 'Get in touch',
  description: 'Contact Antoan Popov — engineering manager and TypeScript engineer open to remote roles.',
}

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="font-mono text-4xl md:text-5xl font-bold mb-4">Get in touch</h1>

      <Divider className="my-8" />

      <div className="max-w-xl space-y-8 text-text">
        <div>
          <p className="text-text-muted mb-4">The fastest way to reach me:</p>
          <a
            href="mailto:antoanpopoff@gmail.com"
            className="font-mono text-lg text-accent link-underline hover:text-accent-dim transition-colors"
          >
            antoanpopoff@gmail.com
          </a>
        </div>

        <div>
          <p className="text-text-muted mb-4">You can also find me at:</p>
          <ul className="space-y-3 font-mono text-sm" role="list">
            <li>
              <span className="text-text-faint mr-3">·</span>
              <ExternalLink href="https://www.linkedin.com/in/antoan-popov">
                LinkedIn — linkedin.com/in/antoan-popov
              </ExternalLink>
            </li>
            <li>
              <span className="text-text-faint mr-3">·</span>
              <ExternalLink href="https://github.com/antoanpopov">
                GitHub — github.com/antoanpopov
              </ExternalLink>
            </li>
            <li>
              <span className="text-text-faint mr-3">·</span>
              <ExternalLink href="https://twitter.com/AntoanPopoff">
                X — @AntoanPopoff
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
