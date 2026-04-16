# antoanpopov.com

Source code for my personal portfolio site at [antoanpopov.com](https://antoanpopov.com).

## About

Twenty years of shipping software — from senior frontend developer to engineering manager. This site is the single page that ties it all together: career history, writing, and contact info.

## Stack

- **Next.js 16** (App Router, static export)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **MDX** for blog posts (via `next-mdx-remote` + `shiki` syntax highlighting)
- **Vercel Analytics**

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/about` | Background and bio |
| `/work` | Career timeline with roles, highlights, and tech stacks |
| `/writing` | Blog — MDX articles with reading time and syntax highlighting |
| `/contact` | Links and contact info |
| `/feed.xml` | RSS feed |

## Local development

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## License

MIT
