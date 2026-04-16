interface WorkEntryProps {
  company: string
  role: string
  period: string
  intro?: string
  bullets: string[]
  tags?: string[]
  link?: string
  repoUrl?: string
}

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-block font-mono text-xs px-2 py-0.5 border border-accent/40 text-accent bg-accent/8">
      {children}
    </span>
  )
}

export default function WorkEntry({
  company,
  role,
  period,
  intro,
  bullets,
  tags,
  link,
  repoUrl,
}: WorkEntryProps) {
  return (
    <article className="py-10">
      <header className="mb-4">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1">
          <h2 className="font-mono text-2xl font-bold text-text">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                {company}
              </a>
            ) : (
              company
            )}
          </h2>
          <span className="font-mono text-sm text-amber">{period}</span>
        </div>
        <p className="font-mono text-sm text-text-muted">{role}</p>
      </header>

      {intro && (
        <p className="text-text-muted mb-5 leading-relaxed text-sm">{intro}</p>
      )}

      {bullets.length > 0 && (
        <ul className="space-y-2.5 mb-5" role="list">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-text leading-relaxed text-sm">
              <span className="text-accent font-mono shrink-0 mt-px" aria-hidden="true">▸</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {repoUrl && (
        <p className="text-sm mb-5">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-accent hover:text-text transition-colors"
          >
            ↗ View open-source reference repo
          </a>
        </p>
      )}

      {tags && tags.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-4 list-none" role="list" aria-label={`Technologies used at ${company}`}>
          {tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
