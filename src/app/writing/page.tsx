import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import Divider from '@/components/ui/Divider'

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Notes on engineering, architecture, and twenty years of watching the JS ecosystem reinvent itself.',
}

export default function Writing() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="font-mono text-xs font-bold tracking-widest text-accent uppercase mb-3">
        Writing
      </p>
      <h1 className="font-mono text-4xl md:text-5xl font-bold mb-4 text-text">Notes</h1>
      <p className="text-text-muted mb-12 max-w-xl">
        Notes on engineering, architecture, and twenty years of watching the JS
        ecosystem reinvent itself.
      </p>

      <Divider className="mb-0" />

      {posts.length === 0 ? (
        <p className="font-mono text-sm text-text-faint py-12">
          New posts coming soon.
        </p>
      ) : (
        <ul role="list" className="divide-y divide-border">
          {posts.map((post) => {
            const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })
            return (
              <li key={post.slug}>
                <Link
                  href={`/writing/${post.slug}`}
                  className="group block py-8 hover:bg-bg-elevated transition-colors -mx-4 px-4"
                >
                  <div className="flex items-baseline gap-4 mb-2 flex-wrap">
                    <span className="font-mono text-xs text-amber">{formattedDate}</span>
                    <span className="font-mono text-xs text-text-faint">{post.readingTime}</span>
                  </div>
                  <h2 className="font-mono text-lg font-bold text-text group-hover:text-accent transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-text-muted text-sm leading-relaxed">{post.excerpt}</p>
                  <span className="font-mono text-xs text-accent mt-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
                    Read →
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
