'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function ParallaxBanner() {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  // Image drifts within its oversized container as the section passes through
  const imageY = useTransform(scrollYProgress, [0, 1], ['-12%', reduceMotion ? '-12%' : '12%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, reduceMotion ? 1.1 : 1.25])
  // Foreground text counter-parallax for depth
  const textY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 60, reduceMotion ? 0 : -60])

  return (
    <section
      ref={ref}
      className="relative h-[80vh] min-h-[520px] flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Parallax cosmic image */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-x-0 -top-[20%] h-[140%] will-change-transform"
      >
        <Image
          src="/hero-space.jpg"
          alt=""
          fill
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Legibility + seamless top/bottom blend into the page */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(110%_80%_at_50%_50%,rgba(10,10,10,0.35)_0%,rgba(10,10,10,0.75)_70%,rgba(10,10,10,0.95)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-32 pointer-events-none bg-gradient-to-b from-[#0A0A0A] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-[#0A0A0A] to-transparent" />

      {/* Foreground statement */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 container-site text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="badge mb-6"
        >
          Масштаб без границ
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="section-heading text-white max-w-4xl mx-auto"
        >
          AI, который масштабирует ваш бизнес со&nbsp;скоростью{' '}
          <span className="text-gradient">света</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="section-sub max-w-xl mx-auto mt-6 text-white/60"
        >
          Пока вы спите — наши системы обрабатывают заявки, ведут переговоры и закрывают сделки.
        </motion.p>
      </motion.div>
    </section>
  )
}
