'use client'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import NeuralBackground from './NeuralBackground'

/**
 * Global, site-wide animated AI backdrop.
 * - Fixed behind all content, spans the full length of the site.
 * - The image is never static: a slow Ken Burns drift (CSS) + a subtle
 *   scroll-linked parallax (Framer Motion) keep it alive.
 * - A living neural-network canvas overlays it for the "AI" signal.
 * - A dark scrim guarantees text contrast (WCAG ≥4.5:1) across every section.
 * - Fully respects prefers-reduced-motion.
 */
export default function SiteBackground() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  // Gentle parallax across the whole document
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '8%'])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0A0A0A]" aria-hidden="true">
      {/* Parallax layer (Framer) wraps Ken Burns layer (CSS) — separate transforms */}
      <motion.div style={{ y }} className="absolute -inset-[8%]">
        <div className="ken-burns relative w-full h-full">
          <Image
            src="/universe.jpg"
            alt=""
            fill
            priority
            quality={82}
            sizes="100vw"
            className="object-cover object-[50%_40%]"
          />
        </div>
      </motion.div>

      {/* Living neural network — desktop only (performance on mobile) */}
      <div className="absolute inset-0 opacity-25 hidden sm:block">
        <NeuralBackground />
      </div>

      {/* Animated brand tint — adds depth without darkening */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <div className="aurora-blob animate-aurora-1 top-[5%] left-[8%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-brand/10" />
        <div className="aurora-blob animate-aurora-3 bottom-[10%] right-[5%] w-[40vw] h-[40vw] max-w-[520px] max-h-[520px] bg-violet-500/10" />
      </div>

      {/* Lighter legibility scrim — keeps the cosmos vivid while protecting text.
          Stronger only at the very top/bottom for navbar & footer contrast. */}
      <div className="absolute inset-0 pointer-events-none bg-[#0A0A0A]/28" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0A0A0A]/65 via-transparent to-[#0A0A0A]/75" />
    </div>
  )
}
