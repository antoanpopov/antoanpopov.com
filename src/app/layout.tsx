import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'

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
    default: 'Antoan Popov',
    template: '%s — Antoan Popov',
  },
  description:
    'Engineering Manager and full-stack TypeScript engineer based in Varna, Bulgaria. Building software since 2004.',
  openGraph: {
    title: 'Antoan Popov',
    description:
      'Engineering Manager and full-stack TypeScript engineer. Building software since 2004.',
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
    title: 'Antoan Popov',
    description: 'Engineering Manager and full-stack TypeScript engineer. Building software since 2004.',
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
      </body>
    </html>
  )
}
