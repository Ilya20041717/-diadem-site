'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingDown, Clock, Zap, TrendingUp, Rocket, Puzzle, Shield } from 'lucide-react'

const benefits = [
  {
    icon: TrendingDown,
    title: 'Снижение затрат\nна персонал',
    desc: 'AI берёт на себя рутинные задачи, сокращая потребность в найме и высвобождая команду для стратегических задач.',
    metric: '-40%',
    metricLabel: 'затрат на операции',
    size: 'large',
  },
  {
    icon: Clock,
    title: 'Работа 24/7',
    desc: 'AI-системы не устают, не болеют и не уходят в отпуск.',
    size: 'small',
  },
  {
    icon: Zap,
    title: 'Скорость\nобработки заявок',
    desc: 'Заявки обрабатываются мгновенно — ни одна не теряется и не ждёт.',
    metric: '×10',
    metricLabel: 'быстрее',
    size: 'medium',
  },
  {
    icon: TrendingUp,
    title: 'Рост конверсии',
    desc: 'Персонализированные сценарии общения и мгновенные ответы конвертируют больше лидов в клиентов.',
    metric: '+43%',
    metricLabel: 'конверсия',
    size: 'medium',
  },
  {
    icon: Rocket,
    title: 'Быстрое\nвнедрение',
    desc: 'От брифа до запуска — 2–4 недели.',
    size: 'small',
  },
  {
    icon: Puzzle,
    title: 'Индивидуальные\nрешения',
    desc: 'Разрабатываем решения под ваши процессы, не подгоняем бизнес под шаблон.',
    metric: '100%',
    metricLabel: 'кастомизация',
    size: 'large',
  },
  {
    icon: Shield,
    title: 'Поддержка\nи развитие',
    desc: 'Сопровождаем систему после запуска: обновления, мониторинг и развитие.',
    size: 'small',
  },
]

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return
    const num = parseInt(value.replace(/[^0-9]/g, ''))
    const prefix = value.match(/^[^0-9]*/)?.[0] ?? ''
    const suffix = value.match(/[^0-9]*$/)?.[0] ?? ''
    const duration = 1200
    const step = (timestamp: number, startTime: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(`${prefix}${Math.round(eased * num)}${suffix}`)
      if (progress < 1) requestAnimationFrame(t => step(t, startTime))
    }
    requestAnimationFrame(t => step(t, t))
  }, [inView, value])

  return <div ref={ref}>{display}</div>
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Benefits() {
  return (
    <section id="benefits" className="section-pad relative bg-black/25">
      <div className="divider absolute top-0 left-0 right-0" />

      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 max-w-2xl"
        >
          <span className="badge mb-5">Преимущества</span>
          <h2 className="section-heading text-white mb-4">
            Почему выбирают<br />
            <span className="text-gradient">Diadem</span>
          </h2>
          <p className="section-sub">
            Измеримые результаты с первых недель работы.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {benefits.map((b) => {
            const Icon = b.icon
            const isLarge = b.size === 'large'
            return (
              <motion.div
                key={b.title}
                variants={item}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className={`glass glass-hover rounded-2xl p-7 cursor-default group relative overflow-hidden ${isLarge ? 'sm:col-span-1 lg:row-span-1' : ''}`}
              >
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand/[0.03] blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-5 group-hover:bg-brand/20 group-hover:border-brand/40 transition-all duration-300">
                    <Icon size={18} className="text-brand" />
                  </div>

                  <h3 className="text-[15px] font-semibold text-white mb-2 whitespace-pre-line leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-[13px] text-white/40 leading-relaxed mb-4">
                    {b.desc}
                  </p>

                  {b.metric && (
                    <div className="mt-auto">
                      <div className="text-3xl font-bold text-brand leading-none mb-0.5">
                        <AnimatedNumber value={b.metric} />
                      </div>
                      <div className="text-xs text-white/30">{b.metricLabel}</div>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
