import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Not found',
}

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32 flex flex-col items-start">
      <p className="font-mono text-xs font-bold tracking-widest text-accent uppercase mb-4">
        404
      </p>
      <h1 className="font-mono text-5xl md:text-7xl font-bold text-text mb-6 leading-tight">
        Not found
        <span className="cursor-blink text-accent inline-block text-4xl md:text-5xl align-baseline ml-2">{'▍'}</span>
      </h1>
      <p className="text-text-muted mb-10 max-w-md">
        This page doesn&apos;t exist. Maybe it moved, maybe it never did.
      </p>
      <div className="flex gap-6 font-mono text-sm">
        <Link href="/" className="text-accent link-underline">
          ← Home
        </Link>
        <Link href="/work" className="text-text-muted hover:text-text transition-colors link-underline">
          Work
        </Link>
        <Link href="/contact" className="text-text-muted hover:text-text transition-colors link-underline">
          Contact
        </Link>
      </div>
    </div>
  )
}
