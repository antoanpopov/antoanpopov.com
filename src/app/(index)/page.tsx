import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/site/Hero'
import Section from '@/components/ui/Section'
import Divider from '@/components/ui/Divider'
import ExternalLink from '@/components/ui/ExternalLink'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs font-bold tracking-widest text-accent uppercase mb-6">
      {children}
    </p>
  )
}

function Tag({ children, variant = 'accent' }: { children: string; variant?: 'accent' | 'amber' | 'muted' }) {
  const styles = {
    accent: 'border-accent/40 text-accent bg-accent/8',
    amber: 'border-amber/40 text-amber bg-amber/8',
    muted: 'border-border-strong text-text-muted bg-bg-elevated',
  }
  return (
    <span
      className={`inline-block font-mono text-xs px-2 py-0.5 border ${styles[variant]}`}
    >
      {children}
    </span>
  )
}

const expertise = [
  { label: 'Engineering Management', variant: 'accent' as const },
  { label: 'TypeScript', variant: 'accent' as const },
  { label: 'React / Next.js', variant: 'accent' as const },
  { label: 'React Native', variant: 'accent' as const },
  { label: 'Node.js', variant: 'accent' as const },
  { label: 'Worker Threads', variant: 'muted' as const },
  { label: 'KafkaJS', variant: 'muted' as const },
  { label: 'Software Architecture', variant: 'muted' as const },
  { label: 'Cross-platform UI', variant: 'muted' as const },
  { label: 'Storybook', variant: 'muted' as const },
  { label: 'Fintech', variant: 'amber' as const },
  { label: 'Crypto', variant: 'amber' as const },
  { label: 'MedTech', variant: 'amber' as const },
]

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6">

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-6 pt-4">
        <Hero />
        <div className="shrink-0 mb-6 md:mb-28">
          <Image
            src="/antoan.jpg"
            alt="Antoan Popov"
            width={160}
            height={160}
            className="border border-border-strong grayscale hover:grayscale-0 transition-all duration-500"
            priority
          />
        </div>
      </div>

      <Divider />

      {/* ── Who I am ────────────────────────────────────────────────────────── */}
      <Section className="py-12 max-w-2xl">
        <SectionLabel>Who I am</SectionLabel>
        <p className="text-text leading-relaxed mb-4">
          Engineering Manager and full-stack TypeScript engineer based in{' '}
          <span className="text-accent font-mono">Varna, Bulgaria</span>.
          I started writing HTML in{' '}
          <span className="text-amber font-mono font-bold">2004</span>{' '}
          from a tutorial I found on a floppy disk. Built my first paid project at{' '}
          <span className="text-amber font-mono font-bold">16</span>.
          Twenty years later I&apos;m still writing code and leading the teams that ship it.
        </p>
        <p className="text-text-muted leading-relaxed mb-4">
          The first decade was PHP and MySQL — pushing relational databases past their
          nested-join limits, and building a Windows desktop app in C# that took a
          translation company from 2,000 to{' '}
          <span className="text-text font-semibold">40,000 words per day</span>.
        </p>
        <p className="text-text-muted leading-relaxed">
          The last decade-plus has been exclusively JavaScript and TypeScript: Node.js on
          the backend; React, Angular, React Native, and Next.js on the front. Along the
          way: cross-platform component libraries, real-time trading platforms,
          medical-device companion apps, application-security tooling.
        </p>
      </Section>

      <Divider />

      {/* ── What I do ───────────────────────────────────────────────────────── */}
      <Section className="py-12 max-w-2xl">
        <SectionLabel>What I do</SectionLabel>
        <div className="space-y-4 mb-8">
          {[
            {
              title: 'Cross-platform component libraries',
              desc: 'React Native + react-native-web → shared UI between mobile and web, with auto-generated Storybook for designers.',
            },
            {
              title: 'Untangle performance disasters',
              desc: 'Most recently: refactored a 30k-line server.js by moving heavy Kafka order-book traffic into worker threads. Same runtime, dramatically lower latency.',
            },
            {
              title: 'Lead frontend & full-stack teams',
              desc: '5–10 engineers as Software Architect or Engineering Manager. Hands-on — I write code with the team and stay close to the work.',
            },
            {
              title: 'Set technical direction',
              desc: 'Stack selection, architecture foundations, CI/CD, testing strategy, performance budgets for new projects.',
            },
          ].map(({ title, desc }) => (
            <div key={title} className="flex gap-4">
              <span className="text-accent font-mono mt-1 shrink-0">▸</span>
              <div>
                <span className="text-text font-semibold">{title}</span>
                <span className="text-text-muted"> — {desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {expertise.map(({ label, variant }) => (
            <Tag key={label} variant={variant}>{label}</Tag>
          ))}
        </div>
      </Section>

      <Divider />

      {/* ── How I work ──────────────────────────────────────────────────────── */}
      <Section className="py-12 max-w-2xl">
        <SectionLabel>How I work</SectionLabel>
        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            I lead hands-on. I write code with the team, review PRs, and stay close to
            the work.{' '}
            <span className="text-text">
              I don&apos;t believe a senior engineer who stops writing code is still a senior engineer.
            </span>
          </p>
          <p>
            I&apos;m drawn to the parts of a codebase that everyone else has given up on —
            the 30,000-line server.js that{' '}
            <span className="text-accent font-mono text-sm">&ldquo;just can&apos;t be faster&rdquo;</span>{' '}
            or the legacy component that{' '}
            <span className="text-accent font-mono text-sm">&ldquo;we don&apos;t touch anymore.&rdquo;</span>{' '}
            Most of the time the runtime isn&apos;t the problem. The architecture is.
          </p>
          <p>
            I think a lot about readability. Most code is read far more than it&apos;s
            written, and the discipline of writing code your future colleagues will thank
            you for is — in my experience — the single highest-leverage skill in the field.
          </p>
        </div>
      </Section>

      <Divider />

      {/* ── Currently ───────────────────────────────────────────────────────── */}
      <Section className="py-12">
        <SectionLabel>Currently</SectionLabel>
        <ul className="space-y-3 font-mono text-sm" role="list">
          <li className="flex gap-3">
            <span className="text-accent shrink-0">·</span>
            <span className="text-text">
              Open to remote roles as{' '}
              <span className="text-accent">Engineering Manager</span>{' '}
              or{' '}
              <span className="text-accent">Senior/Staff IC</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber shrink-0">·</span>
            <span className="text-text-muted">
              Modernizing{' '}
              <ExternalLink href="https://pearlskin.net" className="text-text-muted hover:text-accent">
                pearlskin.net
              </ExternalLink>{' '}
              (Laravel 13, React)
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-text-faint shrink-0">·</span>
            <span className="text-text-faint">
              Considering whether the JS ecosystem really needs another monorepo tool
            </span>
          </li>
        </ul>
      </Section>

      <Divider />

      {/* ── CTAs ────────────────────────────────────────────────────────────── */}
      <Section className="py-12 pb-20">
        <SectionLabel>Explore</SectionLabel>
        <nav aria-label="Page shortcuts" className="flex flex-col sm:flex-row gap-5">
          <Link
            href="/work"
            className="group flex items-center gap-3 border border-border hover:border-accent transition-colors px-5 py-4"
          >
            <span className="font-mono text-accent group-hover:text-accent text-lg">→</span>
            <div>
              <div className="font-mono text-sm text-text group-hover:text-accent transition-colors">
                See what I&apos;ve built
              </div>
              <div className="font-mono text-xs text-text-faint mt-0.5">
                20 years of career history
              </div>
            </div>
          </Link>
          <Link
            href="/contact"
            className="group flex items-center gap-3 border border-border hover:border-amber transition-colors px-5 py-4"
          >
            <span className="font-mono text-amber group-hover:text-amber text-lg">→</span>
            <div>
              <div className="font-mono text-sm text-text group-hover:text-amber transition-colors">
                Get in touch
              </div>
              <div className="font-mono text-xs text-text-faint mt-0.5">
                Open to remote roles
              </div>
            </div>
          </Link>
          <Link
            href="/writing"
            className="group flex items-center gap-3 border border-border hover:border-border-strong transition-colors px-5 py-4"
          >
            <span className="font-mono text-text-muted text-lg">→</span>
            <div>
              <div className="font-mono text-sm text-text-muted group-hover:text-text transition-colors">
                Writing
              </div>
              <div className="font-mono text-xs text-text-faint mt-0.5">
                Notes on engineering
              </div>
            </div>
          </Link>
        </nav>
      </Section>

    </div>
  )
}
