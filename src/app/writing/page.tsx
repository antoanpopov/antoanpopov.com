import type { Metadata } from 'next'
import Divider from '@/components/ui/Divider'

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Notes on engineering, architecture, and twenty years of watching the JS ecosystem reinvent itself.',
}

export default function Writing() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="font-mono text-4xl md:text-5xl font-bold mb-4">Writing</h1>

      <Divider className="my-8" />

      <p className="text-text-muted leading-relaxed max-w-2xl">
        Notes on engineering, architecture, and twenty years of watching the JS
        ecosystem reinvent itself. New posts coming soon.
      </p>
    </div>
  )
}
