"use client"

import { useState, useEffect, useRef } from 'react'
import { Volume2, Play, Square } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const SCRIPT = `Hi! I'm Sofia, your Zenvaio AI sales agent. 
At Zenvaio, we call your new leads in under 30 seconds — day or night — so you never lose another opportunity to a missed call. 
I qualify your prospects, answer their questions naturally, and book appointments directly into your calendar. 
Over 22 businesses across North America trust Zenvaio to handle their leads on autopilot. 
Ready to stop losing revenue and start closing more deals? Let's make it happen.`

export function VoiceDemoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [ready, setReady] = useState(false)
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null)

  useEffect(() => {
    const load = () => {
      const voices = window.speechSynthesis.getVoices()
      const preferred = ['Samantha', 'Google US English', 'Microsoft Jenny', 'Zira', 'Karen', 'Moira']
      for (const name of preferred) {
        const match = voices.find(v => v.name.includes(name))
        if (match) { voiceRef.current = match; break }
      }
      if (!voiceRef.current) {
        voiceRef.current = voices.find(v => v.lang.startsWith('en')) || null
      }
      if (voices.length > 0) setReady(true)
    }

    load()
    window.speechSynthesis.onvoiceschanged = load
  }, [])

  const speak = () => {
    if (!window.speechSynthesis) return

    if (isPlaying) {
      window.speechSynthesis.cancel()
      setIsPlaying(false)
      return
    }

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(SCRIPT)
    if (voiceRef.current) utterance.voice = voiceRef.current
    utterance.pitch = 1.08
    utterance.rate = 0.93
    utterance.volume = 1
    utterance.onend = () => setIsPlaying(false)
    utterance.onerror = () => setIsPlaying(false)

    setIsPlaying(true)
    window.speechSynthesis.speak(utterance)
  }

  return (
    <section id="voice-demo" className="bg-white py-24">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1B6FFF]/20 bg-[#EFF6FF] px-4 py-2">
              <Volume2 className="h-4 w-4 text-[#1B6FFF]" />
              <span className="text-sm font-medium text-[#1B6FFF]">Live Demo</span>
            </div>

            <h2 className="mb-4 text-3xl font-semibold text-[#0F172A] sm:text-5xl">
              Experience Zenvaio Intelligence.
            </h2>

            <p className="mb-10 max-w-xl text-lg text-[#475569]">
              No robotic voices. Just pure, human-like sales intelligence.
            </p>

            <div className="w-full max-w-md rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-xl">

              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EFF6FF] text-xl font-bold text-[#1B6FFF]">
                  S
                </div>
                <div className="text-left">
                  <p className="font-semibold text-[#0F172A]">Sofia — Zenvaio Agent</p>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    <span className="text-sm text-[#64748B]">{isPlaying ? 'Speaking now...' : 'Ready'}</span>
                  </div>
                </div>
              </div>

              {isPlaying && (
                <div className="mb-5 flex h-8 items-end justify-center gap-[3px]">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: '3px',
                        borderRadius: '2px',
                        background: '#1B6FFF',
                        height: `${16 + Math.abs(Math.sin(i)) * 16}px`,
                        animation: `wave 0.7s ease-in-out ${i * 0.05}s infinite alternate`,
                      }}
                    />
                  ))}
                </div>
              )}

              <button
                onClick={speak}
                className={`flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-lg font-bold transition-all duration-200 ${
                  isPlaying
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-[#1B6FFF] text-white shadow-[0_0_24px_rgba(27,111,255,0.35)] hover:bg-[#1557CC]'
                }`}
              >
                {isPlaying ? <><Square className="h-5 w-5" /> Stop Demo</> : <><Play className="h-5 w-5" /> Play Live Demo</>}
              </button>

              <p className="mt-4 text-sm text-[#94A3B8]">
                {!ready ? 'Loading voice...' : isPlaying ? 'Sofia is speaking — turn up your volume' : 'Best on Chrome or Safari · Volume on'}
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <style jsx>{`
        @keyframes wave {
          from { transform: scaleY(0.3); }
          to   { transform: scaleY(1); }
        }
      `}</style>
    </section>
  )
}
