"use client"

import { useState, useEffect } from 'react'
import { MessageCircle, ArrowUp, X, Send } from 'lucide-react'

const chatResponses: Record<string, string> = {
  pricing: "Our pricing starts at $399/mo for Quick Start, $999/mo for Pro (most popular), and $499/mo for Pro Saver with a $3,800 setup fee. All plans include $0.65/min usage. Would you like me to explain the differences?",
  demo: "You can experience Zen right now! Scroll to the 'Experience Zen in Action' section and fill out the form. You'll receive a call from Zen within 30 seconds demonstrating our AI voice technology.",
  features: "Zen offers instant response (<30s), smart qualification, automated booking, persistent follow-ups, CRM integration with HubSpot/Salesforce/Zoho, and 24/7 coverage. What feature interests you most?",
  how: "It's simple! 1) A lead submits a form, 2) Zen calls them within 30 seconds, 3) Zen qualifies them with your custom questions, 4) Qualified leads are booked into your calendar. You only talk to ready-to-buy prospects!",
  default: "Hi! I'm Zen Assistant. I can help you with information about our pricing, features, how Zen works, or scheduling a demo. What would you like to know?",
}

function getResponse(message: string): string {
  const lowerMessage = message.toLowerCase()
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
    return chatResponses.pricing
  }
  if (lowerMessage.includes('demo') || lowerMessage.includes('try') || lowerMessage.includes('test')) {
    return chatResponses.demo
  }
  if (lowerMessage.includes('feature') || lowerMessage.includes('what') || lowerMessage.includes('do')) {
    return chatResponses.features
  }
  if (lowerMessage.includes('how') || lowerMessage.includes('work')) {
    return chatResponses.how
  }
  return chatResponses.default
}

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: chatResponses.default }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }])
    setInputValue('')
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      setMessages((prev) => [...prev, { role: 'assistant', content: getResponse(userMessage) }])
    }, 1000)
  }

  return (
    <>
      {/* Scroll to Top Button - Bottom Left */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[#E2E8F0] text-[#0F172A] shadow-lg transition-all hover:scale-105 animate-fadeIn"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* WhatsApp Button - Bottom Right */}
      <a
        href="https://wa.me/14378881234?text=Hello%20Zenvaio%2C%20I%27m%20interested%20in%20your%20AI%20voice%20solutions"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-105"
        aria-label="Contact us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* AI Chat Button - Above WhatsApp */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1B6FFF] text-white shadow-lg shadow-[#1B6FFF]/30 transition-all hover:scale-105"
        aria-label="Open AI Chat"
      >
        {isChatOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Panel */}
      {isChatOpen && (
        <div className="fixed bottom-40 right-6 z-50 w-80 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xl animate-fadeIn sm:w-96">
          {/* Chat Header */}
          <div className="flex items-center gap-3 rounded-t-2xl bg-[#1B6FFF] px-4 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Zen Assistant</h3>
              <p className="text-xs text-white/80">Online</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-72 overflow-y-auto p-4 bg-[#F8FAFC]">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                      message.role === 'user'
                        ? 'bg-[#1B6FFF] text-white'
                        : 'bg-white border border-[#E2E8F0] text-[#475569]'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl bg-white border border-[#E2E8F0] px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-[#94A3B8] typing-dot"></span>
                    <span className="h-2 w-2 rounded-full bg-[#94A3B8] typing-dot"></span>
                    <span className="h-2 w-2 rounded-full bg-[#94A3B8] typing-dot"></span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Chat Input */}
          <div className="border-t border-[#E2E8F0] p-4 bg-white rounded-b-2xl">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#1B6FFF] focus:outline-none"
              />
              <button
                onClick={handleSendMessage}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B6FFF] text-white transition-colors hover:bg-[#1557CC]"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
