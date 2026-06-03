'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'Сколько времени занимает внедрение?',
    a: 'Пилот на одном процессе запускаем за 1–2 недели. Комплексные системы с интеграциями — от 2 до 4 недель. Начинаем с быстрого результата, чтобы вы увидели эффект как можно раньше.',
  },
  {
    q: 'Сколько это стоит?',
    a: 'Пилот — от 60 000 ₽, стандартная автоматизация ключевых цепочек — 120 000–250 000 ₽, комплексная система с интеграциями — от 300 000 ₽. Точную смету даём после бесплатного аудита процессов.',
  },
  {
    q: 'Что входит в бесплатный аудит?',
    a: 'За 24 часа разбираем ваши процессы, находим узкие места, где теряются заявки и время, и составляем план автоматизации с оценкой эффекта. Без обязательств.',
  },
  {
    q: 'С какими системами вы интегрируетесь?',
    a: 'amoCRM, Битрикс24, RetailCRM, Google Sheets, 1С, Telegram, WhatsApp, платёжные системы и любые сервисы с API. Если у вас своя система — подключимся через API.',
  },
  {
    q: 'Это безопасно для данных клиентов?',
    a: 'Да. Соблюдаем конфиденциальность, разграничиваем доступы и размещаем решения в защищённом контуре. Все данные остаются под вашим контролем.',
  },
  {
    q: 'Что происходит после запуска?',
    a: 'Сопровождаем систему: мониторинг, обновления и развитие по мере роста бизнеса. Вы не остаётесь один на один с решением — отвечаем за результат.',
  },
]

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-pad relative bg-black/25">
      <div className="divider absolute top-0 left-0 right-0" />
      <div className="container-site">
        <div className="grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="badge mb-5">FAQ</span>
            <h2 className="section-heading text-white mb-4">
              Частые<br />
              <span className="text-gradient">вопросы</span>
            </h2>
            <p className="section-sub">
              Не нашли ответ? Напишите нам — ответим в течение рабочего дня.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="space-y-3"
          >
            {faqs.map((f, i) => {
              const isOpen = open === i
              return (
                <div
                  key={i}
                  className={`glass rounded-2xl overflow-hidden border transition-colors ${
                    isOpen ? 'border-brand/25' : 'border-white/[0.06]'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  >
                    <span className="text-[15px] font-medium text-white">{f.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0 w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-white/60"
                    >
                      <Plus size={15} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-[14px] text-white/55 leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
