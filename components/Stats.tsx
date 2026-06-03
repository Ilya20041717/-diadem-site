'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const kpis = [
  { value: '80%', label: 'снижение ручной работы', desc: 'Рутинные операции выполняются автоматически' },
  { value: '24/7', label: 'работа без выходных', desc: 'AI-системы не устают и не уходят в отпуск' },
  { value: '<1 сек', label: 'время реакции', desc: 'Мгновенная обработка событий и ответы' },
  { value: '100%', label: 'контроль процессов', desc: 'Прозрачность и управляемость на каждом этапе' },
]

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(value.replace(/[0-9]/g, '0'))

  useEffect(() => {
    if (!inView) return
    const num = parseInt(value.replace(/[^0-9]/g, ''))
    if (!num) { setDisplay(value); return }
    const prefix = value.match(/^[^0-9]*/)?.[0] ?? ''
    const suffix = value.match(/[^0-9]*$/)?.[0] ?? ''
    const duration = 1300
    const stepFn = (t: number, start: number) => {
      const p = Math.min((t - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(`${prefix}${Math.round(eased * num)}${suffix}`)
      if (p < 1) requestAnimationFrame((n) => stepFn(n, start))
    }
    requestAnimationFrame((n) => stepFn(n, n))
  }, [inView, value])

  return <span ref={ref}>{display}</span>
}

export default function Stats() {
  return (
    <section className="relative py-20 bg-black/25">
      <div className="divider absolute top-0 left-0 right-0" />
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <span className="badge mb-5">Результаты</span>
          <h2 className="section-heading text-white">
            Что получает <span className="text-gradient">бизнес</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass glass-hover rounded-2xl p-7 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient leading-none mb-3">
                <Counter value={k.value} />
              </div>
              <div className="text-[14px] font-semibold text-white mb-1.5">{k.label}</div>
              <div className="text-[12px] text-white/40 leading-relaxed">{k.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
