'use client'
import { motion } from 'framer-motion'
import { Search, Lightbulb, Code2, Plug, LifeBuoy } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Анализ бизнеса',
    desc: 'Изучаем ваши процессы, выявляем узкие места и определяем точки максимального эффекта от автоматизации.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Проектирование',
    desc: 'Разрабатываем архитектуру решения, прорабатываем сценарии и согласовываем ТЗ с командой.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Разработка',
    desc: 'Создаём AI-систему с учётом специфики вашего бизнеса. Каждое решение — полностью кастомное.',
  },
  {
    number: '04',
    icon: Plug,
    title: 'Интеграция',
    desc: 'Подключаем к вашим сервисам: CRM, мессенджеры, телефония, сайт. Тестируем на реальных данных.',
  },
  {
    number: '05',
    icon: LifeBuoy,
    title: 'Поддержка',
    desc: 'Сопровождаем систему после запуска: мониторинг, обновления и развитие по мере роста бизнеса.',
  },
]

export default function Process() {
  return (
    <section id="process" className="section-pad relative bg-black/25">
      <div className="divider absolute top-0 left-0 right-0" />

      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 max-w-2xl"
        >
          <span className="badge mb-5">Процесс</span>
          <h2 className="section-heading text-white mb-4">
            Как мы<br />
            <span className="text-gradient">работаем</span>
          </h2>
          <p className="section-sub">
            Прозрачный процесс от первой встречи до работающей системы.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative flex items-start gap-0">
            <div className="absolute top-[28px] left-[56px] right-[56px] h-px">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-full origin-left"
                style={{
                  background: 'linear-gradient(90deg, rgba(171,169,161,0.4) 0%, rgba(171,169,161,0.1) 100%)',
                }}
              />
            </div>

            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex-1 flex flex-col items-center text-center group"
                >
                  {/* Node */}
                  <div className="relative z-10 w-14 h-14 rounded-full glass border border-white/[0.08] flex items-center justify-center mb-6 group-hover:border-brand/30 group-hover:bg-brand/[0.08] transition-all duration-300">
                    <Icon size={20} className="text-brand" />
                  </div>

                  <div className="text-[11px] font-mono text-brand/60 mb-2 tracking-widest">{s.number}</div>
                  <h3 className="text-[15px] font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-[13px] text-white/40 leading-relaxed max-w-[180px]">{s.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden space-y-0">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex gap-5 group"
              >
                {/* Left column: icon + line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full glass border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:border-brand/30 group-hover:bg-brand/[0.08] transition-all duration-300">
                    <Icon size={18} className="text-brand" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-3 mb-3 bg-gradient-to-b from-white/10 to-transparent min-h-[40px]" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8">
                  <div className="text-[11px] font-mono text-brand/60 mb-1 tracking-widest">{s.number}</div>
                  <h3 className="text-[16px] font-semibold text-white mb-1.5">{s.title}</h3>
                  <p className="text-[13px] text-white/40 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
