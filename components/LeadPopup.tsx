'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, ArrowRight } from 'lucide-react'

const STORAGE_KEY = 'diadem_lead_popup_seen'
const SNOOZE_MS = 24 * 60 * 60 * 1000 // don't re-show for a day after dismiss
const DELAY_MS = 22000 // time-on-site trigger (best practice: not before ~20s)
const SCROLL_TRIGGER = 0.5 // or when half the page is read

export default function LeadPopup() {
  const [open, setOpen] = useState(false)
  const firedRef = useRef(false)

  useEffect(() => {
    try {
      const seen = Number(localStorage.getItem(STORAGE_KEY) || 0)
      if (seen && Date.now() - seen < SNOOZE_MS) return
    } catch { /* ignore */ }

    const fire = () => {
      if (firedRef.current) return
      firedRef.current = true
      setOpen(true)
      cleanup()
    }
    const onScroll = () => {
      const sc = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight)
      if (sc >= SCROLL_TRIGGER) fire()
    }
    const timer = window.setTimeout(fire, DELAY_MS)
    window.addEventListener('scroll', onScroll, { passive: true })
    function cleanup() {
      window.clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
    return cleanup
  }, [])

  const close = () => {
    setOpen(false)
    try { localStorage.setItem(STORAGE_KEY, String(Date.now())) } catch { /* ignore */ }
  }

  const go = () => {
    close()
    document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          className="fixed z-[70] bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 w-auto sm:w-[360px]"
        >
          <div className="glass rounded-2xl border border-white/10 p-6 relative overflow-hidden shadow-[0_24px_70px_-15px_rgba(0,0,0,0.7)]">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-brand/15 blur-3xl pointer-events-none" />
            <button
              onClick={close}
              aria-label="Закрыть"
              className="absolute top-3 right-3 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/[0.06] transition-all"
            >
              <X size={15} />
            </button>

            <span className="badge mb-4">
              <Sparkles size={11} />
              Бесплатно
            </span>
            <h3 className="font-display text-[22px] font-semibold text-white leading-snug mb-2">
              Обсудим ваш проект?
            </h3>
            <p className="text-[13.5px] text-white/55 leading-relaxed mb-5">
              За 24 часа проведём бесплатный аудит процессов и покажем, что можно автоматизировать уже сейчас — с расчётом эффекта.
            </p>
            <button onClick={go} className="btn-primary w-full justify-center">
              Получить аудит
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
