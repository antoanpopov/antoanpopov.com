'use client'

import { useEffect, useRef, useState } from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export default function Section({
  children,
  className = '',
  as: Tag = 'section',
}: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${revealed ? 'revealed' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
