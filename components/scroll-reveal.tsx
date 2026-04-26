"use client"

import { useScrollReveal } from '@/hooks/use-scroll-reveal'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
}

export function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  const { ref, isRevealed } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isRevealed ? 'revealed' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
