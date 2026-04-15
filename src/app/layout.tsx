import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://antoanpopov.com'),
  title: {
    default: 'Antoan Popov — Engineering Manager & TypeScript Engineer',
    template: '%s — Antoan Popov',
  },
  description:
    'Engineering Manager and full-stack TypeScript engineer based in Varna, Bulgaria. Twenty years shipping software across fintech, crypto, MedTech, and B2B SaaS. Open to remote roles.',
  openGraph: {
    title: 'Antoan Popov — Engineering Manager & TypeScript Engineer',
    description:
      'Twenty years shipping software. Started with a floppy-disk HTML tutorial in 2004. Engineering Manager and full-stack TypeScript engineer — open to remote roles.',
    url: 'https://antoanpopov.com',
    siteName: 'Antoan Popov',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'Antoan Popov — Building software since 2004',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antoan Popov — Engineering Manager & TypeScript Engineer',
    description:
      'Twenty years shipping software. Started with a floppy-disk HTML tutorial in 2004. Engineering Manager and full-stack TypeScript engineer — open to remote roles.',
    creator: '@AntoanPopoff',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate" type="application/rss+xml" title="Antoan Popov — Writing" href="/feed.xml" />
        <meta name="theme-color" content="#0f1311" />
      </head>
      <body className="min-h-dvh flex flex-col bg-bg text-text">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-bg focus:font-mono text-sm"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
