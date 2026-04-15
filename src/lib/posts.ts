import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const CONTENT_DIR = path.join(process.cwd(), 'content/writing')

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  readingTime: string
}

export interface Post extends PostMeta {
  content: string
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.mdx?$/, '')
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => /\.mdx?$/.test(f))

  return files
    .map((filename) => {
      const slug = getSlugFromFilename(filename)
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), 'utf-8')
      const { data, content } = matter(raw)
      const stats = readingTime(content)

      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        readingTime: stats.text,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`)
  const mdPath = path.join(CONTENT_DIR, `${slug}.md`)
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null

  if (!filePath) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    readingTime: stats.text,
    content,
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map(getSlugFromFilename)
}
