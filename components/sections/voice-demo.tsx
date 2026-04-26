"use client"

import { useState, useRef } from 'react'
import { Volume2, Play, Square } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

export function VoiceDemoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
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
                  <span className="text-sm text-[#64748B]">Ready</span>
                </div>
              </div>

              {/* Play Button */}
              <button
                onClick={togglePlay}
                className={`btn-apple flex w-full items-center justify-center gap-3 px-6 py-4 text-base font-medium transition-all ${
                  isPlaying
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-[#1B6FFF] text-white hover:bg-[#1557CC] shadow-[0_0_20px_rgba(27,111,255,0.3)]'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Square className="h-5 w-5" />
                    Stop
                  </>
                ) : (
                  <>
                    <Play className="h-5 w-5" />
                    Play Live Demo
                  </>
                )}
              </button>

              {/* AI Speaking Indicator */}
              {isPlaying && (
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-[#1B6FFF]">
                  <span className="flex gap-1">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#1B6FFF]"></span>
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#1B6FFF] delay-75"></span>
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#1B6FFF] delay-150"></span>
                  </span>
                  AI speaking...
                </div>
              )}

              <audio
                ref={audioRef}
                src="https://cdn.openai.com/labs-site-audio/nova.mp3"
                onEnded={handleEnded}
              />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
