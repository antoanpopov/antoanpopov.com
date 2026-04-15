import type { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Divider from '@/components/ui/Divider'
import WorkEntry from '@/components/site/WorkEntry'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Career history — a vertical slice through twenty years of shipping software.',
}

const workEntries = [
  {
    company: '90K Capital',
    role: 'Software Engineering Manager',
    period: 'Sep 2025 – Apr 2026',
    intro:
      'Crypto trading firm. Frontend Team Lead for a team of 5. Departed April 2026 as part of a company-wide restructuring affecting ~95% of staff.',
    bullets: [
      'Refactored a 30,000-line monolithic server.js into a worker-thread architecture, moving heavy KafkaJS order-book traffic off the main thread. Overturned the team\'s "Node just sucks" consensus by proving the bottleneck was design, not the runtime.',
      'Built a client-facing OTC crypto trading platform on Next.js + React + TypeScript with real-time WebSocket-driven order book updates.',
      'Built a parallel internal admin platform with API key management, reporting, and ops tooling.',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Worker Threads', 'KafkaJS'],
  },
  {
    company: 'Nexo',
    role: 'Software Engineering Manager',
    period: '2022 – Sep 2025',
    intro:
      'Global crypto wealth platform. Engineering Manager for a frontend team of 5 within a chunked team structure, contributing to the Nexo web and mobile apps used by millions.',
    bullets: [
      'Designed and led development of a cross-platform component library shared between web and mobile (React + React Native), with full unit and e2e test coverage.',
      'Made the React Native components renderable on the web via react-native-web, then auto-generated a Storybook so designers and engineers had one source of truth for every component — closing the design-engineering gap.',
      'Managed the team end to end: hiring input, 1-on-1s, code review, technical mentorship, sprint planning.',
    ],
    tags: ['TypeScript', 'React', 'React Native', 'react-native-web', 'Storybook', 'Jest', 'Detox'],
  },
  {
    company: 'MentorMate',
    role: 'Senior Frontend Developer → Frontend / Software Architect',
    period: '2018 – 2022',
    intro:
      'Joined as Senior Frontend Developer; promoted to Software Architect with responsibility for tech-stack selection and architectural foundations across multiple client engagements. Led project teams of 5–10 engineers.',
    bullets: [
      'Real-time commodities exchange and market-data platform for a major US market-data and analytics company. Angular + WebSockets, high-frequency data streams.',
      'Mobile companion app for an FDA-regulated implantable spinal neuromodulation device at a Fortune 500 medical-device company. Patients use the app to monitor and adjust their implant in real time.',
      'Real-time sports-betting platform for a European betting operator. Angular + WebSockets.',
      'Application-security platform for a US AppSec company. Built on Node.js, monkey-patches third-party libraries at runtime to detect vulnerabilities across a customer\'s codebase and UI.',
      'Talks: Front-end Practice Overview · JS Stack & Hybrid (2018), Readable Code (2019), MentorMate Explains: Progressive Web Apps (2021).',
    ],
    tags: ['Angular', 'React', 'Node.js', 'TypeScript', 'WebSockets'],
  },
  {
    company: 'VM5',
    role: 'Backend Developer (with full-stack responsibilities)',
    period: '2016 – 2018',
    intro:
      'Bulgarian web software company. Joined as backend dev but took the frontend layer too — was the most experienced person on the team for CSS and JS.',
    bullets: [
      'Built and maintained client web applications on the latest versions of Laravel and CodeIgniter.',
      'Engineered relational data models that required deeply nested SQL JOINs — repeatedly hitting and working around MySQL\'s join limits via query optimization, denormalization, and careful index design.',
    ],
    tags: ['PHP', 'Laravel', 'CodeIgniter', 'MySQL', 'JavaScript'],
  },
  {
    company: 'Protext Translations Ltd',
    role: 'Software Developer',
    period: '2014 – 2020 · London → Remote from Bulgaria',
    intro:
      'Designed and built a Windows desktop application (C#) that became the operational core of the business.',
    bullets: [
      'Drag-and-drop ingestion of Word and PDF source documents with automatic source/target language detection.',
      'Machine translation with full source-document formatting preserved, automated project filing, word counting, and team notifications.',
      'Company throughput rose from ~2,000 words/day to 20,000–40,000 words/day — a 10–20× productivity gain. Also formed the basis of my Bachelor\'s thesis on hybrid machine translation.',
    ],
    tags: ['C#', '.NET', 'WPF', 'Windows desktop'],
  },
  {
    company: '158 Ltd',
    role: 'Senior Full-Stack Developer (started as Intern)',
    period: '2012 – 2014',
    intro:
      'Varna-based web agency. Joined as an intern; promoted to Senior Full-Stack. The school of hard knocks for a generation of Bulgarian developers entering the field — and the foundation of everything shipped since.',
    bullets: [
      'Delivered custom web applications across a wide range of client industries on tight deadlines and constantly shifting scope.',
    ],
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    period: '2006 – 2012',
    intro:
      'Self-taught through high school and the early university years. First paid client at 16 — a website for a local real estate agency.',
    bullets: [
      'E-commerce site for a PC-hardware retailer and assorted gaming-community sites.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
  {
    company: 'Pearlskin',
    role: 'Designer & Developer (ongoing freelance)',
    period: '2014 – Present',
    intro:
      'Design, build, and ongoing maintenance of the website for Pearl Skin, a leading aesthetic dermatology clinic in Varna. Live in production since 2014, multilingual (BG/EN/RU), with a custom CMS and reservation system. Currently undergoing a full modernization to Laravel 13 + React.',
    bullets: [],
    tags: ['PHP', 'Laravel', 'React', 'MySQL'],
    link: 'https://pearlskin.net',
  },
]

export default function Work() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="font-mono text-xs font-bold tracking-widest text-accent uppercase mb-3">
        Career
      </p>
      <h1 className="font-mono text-4xl md:text-5xl font-bold mb-4 text-text">Work</h1>
      <p className="text-text-muted mb-12">
        A vertical slice through twenty years of shipping software.
      </p>

      <Divider className="mb-0" />

      {workEntries.map((entry, i) => (
        <Section key={entry.company}>
          <WorkEntry {...entry} />
          {i < workEntries.length - 1 && <Divider />}
        </Section>
      ))}
    </div>
  )
}
