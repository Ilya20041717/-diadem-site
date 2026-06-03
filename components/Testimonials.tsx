'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Дмитрий Карпов',
    role: 'CEO',
    company: 'ЮрПрактик',
    text: 'Внедрение AI-менеджера от Diadem полностью изменило наш процесс работы с клиентами. Количество обработанных заявок выросло на 43%, а менеджеры наконец занимаются реальной работой, а не ответами на одни и те же вопросы.',
    initials: 'ДК',
  },
  {
    name: 'Алексей Моисеев',
    role: 'Директор',
    company: 'АвтоМастер',
    text: 'Раньше на запись одного клиента уходило 5–10 минут разговора. Сейчас бот сам записывает, напоминает, собирает отзывы. Мы сократили время на администрирование на 70% и при этом не потеряли ни одного клиента.',
    initials: 'АМ',
  },
  {
    name: 'Ирина Захарова',
    role: 'Руководитель отдела продаж',
    company: 'PrimeRealty',
    text: 'Diadem сделали бота, который сам собирает параметры клиента, подбирает объекты из базы и отправляет красивые подборки в Telegram. Конверсия в показы выросла в разы, а агенты больше не тратят время на ручной подбор.',
    initials: 'ИЗ',
  },
  {
    name: 'Сергей Нечаев',
    role: 'Операционный директор',
    company: 'СекьюрГрупп',
    text: 'Система контроля обходов через NFC и Telegram — это именно то, что нам было нужно. Руководители видят всё в режиме реального времени, охранники не могут схитрить, и все отчёты формируются автоматически.',
    initials: 'СН',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = useCallback((dir: number) => {
    setDirection(dir)
    setIndex(i => (i + dir + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => go(1), 5000)
    return () => clearInterval(timer)
  }, [go])

  const t = testimonials[index]

  return (
    <section id="testimonials" className="section-pad relative">
      <div className="divider absolute top-0 left-0 right-0" />

      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-14 max-w-2xl"
        >
          <span className="badge mb-5">Отзывы</span>
          <h2 className="section-heading text-white mb-4">
            Что говорят<br />
            <span className="text-gradient">наши клиенты</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl"
        >
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[280px]">
            {/* Quote icon */}
            <div className="absolute top-8 right-8 text-brand/20">
              <Quote size={48} />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -20 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <p className="text-[17px] text-white/80 leading-[1.8] mb-8 relative z-10">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[13px] font-semibold text-brand">{t.initials}</span>
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-white">{t.name}</div>
                    <div className="text-[13px] text-white/40">{t.role}, {t.company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all"
              aria-label="Предыдущий"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
                  aria-label={`Отзыв ${i + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    i === index
                      ? 'w-6 h-2 bg-brand'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all"
              aria-label="Следующий"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
