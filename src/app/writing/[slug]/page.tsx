import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllSlugs } from '@/lib/posts'
import MDXContent from '@/components/site/MDXContent'
import Divider from '@/components/ui/Divider'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/writing"
        aria-label="Back to all posts"
        className="font-mono text-xs text-text-muted hover:text-accent transition-colors inline-flex items-center gap-2 mb-12"
      >
        <span aria-hidden="true">←</span> Writing
      </Link>

      <header className="mb-10">
        <p className="font-mono text-xs font-bold tracking-widest text-accent uppercase mb-4" aria-hidden="true">
          Essay
        </p>
        <h1 className="font-mono text-3xl md:text-4xl font-bold text-text mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 font-mono text-sm text-text-muted">
          <time dateTime={post.date}>{formattedDate}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      <Divider className="mb-10" />

      <article className="max-w-2xl">
        <MDXContent source={post.content} />
      </article>

      <Divider className="mt-16 mb-10" />

      <nav aria-label="Post navigation" className="flex items-center justify-between font-mono text-sm">
        <Link href="/writing" aria-label="Back to all posts" className="text-text-muted hover:text-accent transition-colors">
          <span aria-hidden="true">← </span>All posts
        </Link>
        <Link href="/contact" className="text-text-muted hover:text-accent transition-colors">
          Get in touch <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </div>
  )
}
