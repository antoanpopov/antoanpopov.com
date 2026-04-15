'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/work', label: 'work' },
  { href: '/writing', label: 'writing' },
  { href: '/contact', label: 'contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close drawer on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handle = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', handle)
    return () => document.removeEventListener('keydown', handle)
  }, [open])

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="border-b border-border sticky top-0 z-40 bg-bg relative">
      <nav
        className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-widest text-text hover:text-accent transition-colors uppercase"
        >
          Antoan Popov
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0" role="list">
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

        {/* Mobile hamburger toggle */}
        <button
          className="md:hidden font-mono text-sm text-text-muted hover:text-accent transition-colors px-1 py-1"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '[ close ]' : '[ menu ]'}
        </button>
      </nav>

      {/* Mobile drawer — absolute to sticky header so it always sits flush below the bar */}
      {open && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
          className="md:hidden absolute top-full left-0 right-0 h-[100dvh] bg-bg border-t border-border flex flex-col"
        >
          <ul role="list" className="list-none m-0 p-0 flex flex-col px-6 pt-10 gap-2">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || pathname.startsWith(href + '/')
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-mono text-4xl font-bold py-3 flex items-center gap-3 transition-colors ${
                      isActive ? 'text-accent' : 'text-text hover:text-accent'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-accent text-2xl" aria-hidden="true">
                      {isActive ? '▸' : '·'}
                    </span>
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <p className="px-6 mt-auto pb-10 font-mono text-xs text-text-muted">
            antoanpopov.com
          </p>
        </div>
      )}
    </header>
  )
}
