"use client"

import { useState, useRef, useEffect } from 'react'
import { Volume2, Play, Square } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const DEMO_SCRIPT = `Hi there! Thanks for reaching out to Zenvaio. I'm your AI sales agent, and I'm here to help you grow your business faster than ever before.

At Zenvaio, we build done-for-you AI voice agents that call your new leads in under 30 seconds — 24 hours a day, 7 days a week. No missed calls. No lost opportunities. Just instant, intelligent follow-up every single time.

Our agents qualify your prospects, answer their questions naturally, and book appointments directly into your calendar — all without you lifting a finger.

We've already helped over 22 businesses across North America recover thousands of dollars in lost revenue every single month.

If you're ready to stop losing leads and start closing more deals on autopilot, Zenvaio is your solution. Let's get started today.`

export function VoiceDemoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [supported, setSupported] = useState(true)
  const [voiceReady, setVoiceReady] = useState(false)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setSupported(false)
      return
    }

    // voices load async in most browsers
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices()
      if (voices.length > 0) setVoiceReady(true)
    }

    loadVoices()
    window.speechSynthesis.onvoiceschanged = loadVoices
  }, [])

  const getBestFemaleVoice = (): SpeechSynthesisVoice | null => {
    const voices = window.speechSynthesis.getVoices()

    // Priority order — best natural female English voices
    const preferred = [
      'Samantha',       // macOS/iOS — most natural
      'Karen',          // macOS Australian
      'Moira',          // macOS Irish
      'Tessa',          // macOS South African
      'Zira',           // Windows
      'Susan',          // Windows
      'Google US English Female',
      'Microsoft Zira',
      'Microsoft Jenny',
      'en-US-Neural2-F',
    ]

    for (const name of preferred) {
      const match = voices.find(v => v.name.includes(name))
      if (match) return match
    }

    // fallback: any English female-ish voice
    const enFemale = voices.find(
      v => v.lang.startsWith('en') && !v.name.toLowerCase().includes('male')
    )
    return enFemale || voices.find(v => v.lang.startsWith('en')) || null
  }

  const togglePlay = () => {
    if (!supported) return

    if (isPlaying) {
      window.speechSynthesis.cancel()
      setIsPlaying(false)
      return
    }

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(DEMO_SCRIPT)
    const voice = getBestFemaleVoice()
    if (voice) utterance.voice = voice

    utterance.rate = 0.95      // slightly slower = more natural
    utterance.pitch = 1.05     // slightly higher = more feminine
    utterance.volume = 1

    utterance.onend = () => setIsPlaying(false)
    utterance.onerror = () => setIsPlaying(false)

    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
    setIsPlaying(true)
  }

  return (
    <section id="voice-demo" className="bg-white py-24">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1B6FFF]/20 bg-[#EFF6FF] px-4 py-2">
              <Volume2 className="h-4 w-4 text-[#1B6FFF]" />
              <span className="text-sm font-medium text-[#1B6FFF]">
                Hear the Future
              </span>
            </div>

            {/* Title */}
            <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl">
              Experience what a Zenvaio AI agent sounds like.
            </h2>

            {/* Subtitle */}
            <p className="mb-12 max-w-xl text-pretty text-lg text-[#475569]">
              No robotic voices. Just pure, human-like sales intelligence.
            </p>

            {/* Audio Card */}
            <div className="w-full max-w-md rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-lg card-hover">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#0F172A]">
                  Zenvaio Sales Agent
                </h3>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 pulse-dot"></span>
                  <span className="text-sm text-[#64748B]">
                    {isPlaying ? 'Speaking' : 'Ready'}
                  </span>
                </div>
              </div>

              {!supported && (
                <p className="mb-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-500">
                  Your browser does not support audio playback. Try Chrome or Safari.
                </p>
              )}

              {/* Waveform visual when playing */}
              {isPlaying && (
                <div className="mb-4 flex h-10 items-end justify-center gap-[3px]">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-[3px] rounded-full bg-[#1B6FFF]"
                      style={{
                        height: `${20 + Math.sin(i * 0.8) * 14}px`,
                        animation: `waveBar 0.8s ease-in-out ${i * 0.04}s infinite alternate`,
                        opacity: 0.7 + (i % 3) * 0.1,
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Play Button */}
              <button
                onClick={togglePlay}
                disabled={!supported}
                className={`btn-apple flex w-full items-center justify-center gap-3 px-6 py-4 text-base font-medium transition-all disabled:opacity-40 ${
                  isPlaying
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-[#1B6FFF] text-white hover:bg-[#1557CC] shadow-[0_0_20px_rgba(27,111,255,0.3)]'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Square className="h-5 w-5" />
                    Stop Demo
                  </>
                ) : (
                  <>
                    <Play className="h-5 w-5" />
                    Play Live Demo
                  </>
                )}
              </button>

              {/* Speaking indicator */}
              {isPlaying && (
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-[#1B6FFF]">
                  <span className="flex gap-1">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#1B6FFF]" />
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#1B6FFF] delay-75" />
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#1B6FFF] delay-150" />
                  </span>
                  AI speaking...
                </div>
              )}

              <p className="mt-4 text-xs text-[#94A3B8]">
                Best experienced on Chrome or Safari with volume on
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <style jsx>{`
        @keyframes waveBar {
          from { transform: scaleY(0.4); }
          to   { transform: scaleY(1.2); }
        }
      `}</style>
    </section>
  )
}
