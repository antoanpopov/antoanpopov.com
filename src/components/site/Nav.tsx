'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/work', label: 'work' },
  { href: '/writing', label: 'writing' },
  { href: '/contact', label: 'contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <header className="border-b border-border sticky top-0 z-40 bg-bg">
      <nav
        className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-6"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-widest text-text hover:text-accent transition-colors uppercase"
        >
          Antoan Popov
        </Link>

        <ul className="flex items-center gap-6 list-none m-0 p-0 flex-wrap" role="list">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + '/')
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-mono text-sm transition-colors relative link-underline ${
                    isActive
                      ? 'text-accent after:scale-x-100'
                      : 'text-text-muted hover:text-text'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
