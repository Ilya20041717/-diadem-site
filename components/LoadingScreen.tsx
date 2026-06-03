'use client'
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

export default function LoadingScreen() {
  const [show, setShow] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    try {
      if (sessionStorage.getItem('diadem_intro_done')) return
    } catch { /* ignore */ }
    setShow(true)
    const t = setTimeout(() => {
      setShow(false)
      try { sessionStorage.setItem('diadem_intro_done', '1') } catch { /* ignore */ }
    }, reduce ? 600 : 1700)
    return () => clearTimeout(t)
  }, [reduce])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-[#0A0A0A]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <motion.img
            src="/diadem-mark.png"
            alt="Diadem"
            initial={{ opacity: 0, scale: 0.8, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-16 h-16 object-contain"
          />
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display text-[15px] font-semibold uppercase text-white/90 mt-5 ml-[0.4em]"
          >
            Diadem
          </motion.span>
          <div className="mt-6 h-px w-28 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-brand to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
