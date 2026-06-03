'use client'
import { useRef, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

// WebGL scene is client-only — never SSR it
const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false })

const stats = [
  { value: '200+', label: 'Проектов внедрено' },
  { value: '24/7', label: 'Работа AI-систем' },
  { value: '×3', label: 'Рост обработки заявок' },
]

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const reduceMotion = useReducedMotion() ?? false
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 640px)')
    setIsDesktop(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Content fades & lifts away as the sphere disassembles
  const contentOpacity = useTransform(scrollYProgress, [0, 0.32], [1, reduceMotion ? 1 : 0])
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, reduceMotion ? 0 : -70])
  const auroraY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -120])
  const hintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight * 1.25, behavior: 'smooth' })
  }

  const heroContent = (
    <div className="relative z-10 flex flex-col items-center justify-center text-center container-site pt-24 pb-12 pointer-events-none flex-1">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease }}
        className="text-gradient section-heading max-w-3xl mx-auto mb-6 px-4"
        style={{ fontSize: 'clamp(26px, 6.5vw, 54px)' }}
      >
        Автоматизируем бизнес с&nbsp;помощью{' '}
        <span className="italic font-medium">искусственного интеллекта</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease }}
        className="section-sub max-w-xl mx-auto mb-12"
      >
        Внедряем AI-решения, которые заменяют рутину, увеличивают продажи и работают 24/7.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease }}
        className="flex flex-col sm:flex-row items-center gap-3 mb-16 pointer-events-auto"
      >
        <motion.button
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-primary"
        >
          Получить консультацию <ArrowRight size={16} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          onClick={() => document.querySelector('#cases')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-secondary"
        >
          Посмотреть кейсы
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45, ease }}
        className="flex items-center gap-0 glass rounded-2xl overflow-hidden w-full max-w-sm sm:w-auto sm:max-w-none"
      >
        {stats.map((s, i) => (
          <div key={s.value} className={`flex-1 sm:flex-none px-4 sm:px-8 py-4 sm:py-5 text-center ${i < stats.length - 1 ? 'border-r border-white/[0.06]' : ''}`}>
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-0.5">{s.value}</div>
            <div className="text-[10px] sm:text-xs text-white/40 whitespace-nowrap">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  )

  // Mobile: simple full-screen hero, no scroll animation, no 3D
  if (!isDesktop) return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 pointer-events-none mix-blend-screen z-0">
        <div className="aurora-blob animate-aurora-1 top-[-10%] left-[10%] w-[80vw] h-[80vw] bg-brand/12" />
        <div className="aurora-blob animate-aurora-3 bottom-[-10%] right-[5%] w-[70vw] h-[70vw] bg-violet-500/10" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.7)_0%,transparent_70%)]" />
      <div className="flex-1 flex flex-col justify-center">
        {heroContent}
      </div>
      <motion.button
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="pb-8 flex flex-col items-center gap-2 text-white/40 z-10"
        aria-label="Прокрутить вниз"
      >
        <span className="text-[11px] tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )

  // Desktop: full scroll-driven 3D sphere animation
  return (
    <section ref={sectionRef} className="relative h-[230vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        <div className="absolute inset-0 z-0">
          <HeroScene progress={scrollYProgress} reduce={reduceMotion} />
        </div>
        <motion.div style={{ y: auroraY }} className="absolute inset-0 pointer-events-none mix-blend-screen z-0">
          <div className="aurora-blob animate-aurora-1 top-[-10%] left-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] bg-brand/12" />
          <div className="aurora-blob animate-aurora-3 bottom-[-15%] right-[10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] bg-violet-500/10" />
        </motion.div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] max-w-[140vw] h-[520px] pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.82)_0%,rgba(10,10,10,0.4)_45%,transparent_72%)]" />
        <div className="absolute top-0 left-0 right-0 h-px z-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        <motion.div style={{ y: contentY, opacity: contentOpacity }} className="flex-1 flex flex-col">
          {heroContent}
        </motion.div>
        <motion.button
          style={{ opacity: hintOpacity }}
          onClick={scrollDown}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
          aria-label="Прокрутить вниз"
        >
          <span className="text-[11px] tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
