'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Stethoscope, Briefcase, ShoppingCart, Building2, Check, ArrowRight } from 'lucide-react'

const niches = [
  {
    id: 'service',
    icon: Stethoscope,
    title: 'Сервисный бизнес',
    subtitle: 'Клиники, салоны, сервисные центры',
    before: 'Заявки теряются между мессенджерами, запись и распределение ведутся вручную.',
    automation: [
      'AI-бот принимает заявки и отвечает 24/7',
      'Авто-подтверждение записи и напоминания',
      'Интеграция с CRM и таблицами',
    ],
  },
  {
    id: 'b2b',
    icon: Briefcase,
    title: 'B2B-продажи',
    subtitle: 'Агентства, консалтинг, услуги',
    before: 'Лиды приходят из разных источников, менеджеры отвечают слишком долго.',
    automation: [
      'AI-квалификация и scoring лидов',
      'Маршрутизация по менеджерам и SLA',
      'Отчёты по воронке в реальном времени',
    ],
  },
  {
    id: 'ecom',
    icon: ShoppingCart,
    title: 'E-commerce',
    subtitle: 'Интернет-магазины и маркетплейсы',
    before: 'Клиенты задают одни и те же вопросы, статусы заказов проверяются вручную.',
    automation: [
      'AI-бот отвечает на вопросы и оформляет заказ',
      'Статусы заказов 24/7',
      'Автоворонки повторных продаж',
    ],
  },
  {
    id: 'realty',
    icon: Building2,
    title: 'Недвижимость',
    subtitle: 'Агентства, застройщики, аренда',
    before: 'Заявки приходят в чаты, подбор объектов делается вручную.',
    automation: [
      'AI-квиз подбирает объекты под запрос',
      'Сквозная фиксация заявок в CRM',
      'Сценарии догрева и напоминания',
    ],
  },
]

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function Industries() {
  const [active, setActive] = useState(niches[0].id)
  const cur = niches.find((n) => n.id === active) ?? niches[0]
  const Icon = cur.icon

  return (
    <section id="industries" className="section-pad relative">
      <div className="divider absolute top-0 left-0 right-0" />
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="mb-14 max-w-2xl"
        >
          <span className="badge mb-5">Отрасли</span>
          <h2 className="section-heading text-white mb-4">
            Решения под<br />
            <span className="text-gradient">вашу нишу</span>
          </h2>
          <p className="section-sub">
            Понимаем специфику процессов в каждой сфере и автоматизируем именно ваши узкие места.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[340px_1fr] gap-5">
          {/* Selector */}
          <div className="flex flex-col gap-2.5">
            {niches.map((n) => {
              const NIcon = n.icon
              const isActive = n.id === active
              return (
                <button
                  key={n.id}
                  onClick={() => setActive(n.id)}
                  className={`flex items-center gap-4 text-left rounded-2xl p-4 border transition-all duration-300 ${
                    isActive
                      ? 'glass border-brand/30 bg-brand/[0.06]'
                      : 'border-white/[0.06] hover:border-white/15 hover:bg-white/[0.03]'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                      isActive ? 'bg-brand/20 border border-brand/40' : 'bg-white/[0.04] border border-white/10'
                    }`}
                  >
                    <NIcon size={19} className={isActive ? 'text-brand' : 'text-white/50'} />
                  </div>
                  <div className="min-w-0">
                    <div className={`text-[15px] font-semibold ${isActive ? 'text-white' : 'text-white/70'}`}>
                      {n.title}
                    </div>
                    <div className="text-[12px] text-white/40 truncate">{n.subtitle}</div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Detail */}
          <div className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden min-h-[340px]">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-brand/[0.04] blur-3xl pointer-events-none" />
            <AnimatePresence mode="wait">
              <motion.div
                key={cur.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease }}
                className="relative z-10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/15 border border-brand/30 flex items-center justify-center">
                    <Icon size={22} className="text-brand" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{cur.title}</h3>
                    <p className="text-[13px] text-white/40">{cur.subtitle}</p>
                  </div>
                </div>

                <div className="mb-7 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                  <div className="text-[11px] uppercase tracking-widest text-white/35 mb-1.5">Было</div>
                  <p className="text-[14px] text-white/60 leading-relaxed">{cur.before}</p>
                </div>

                <div className="text-[11px] uppercase tracking-widest text-brand/70 mb-3">Стало с Diadem</div>
                <ul className="space-y-3">
                  {cur.automation.map((a) => (
                    <li key={a} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-brand" />
                      </span>
                      <span className="text-[14px] text-white/80 leading-snug">{a}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-brand hover:gap-3 transition-all"
                >
                  Обсудить решение для вашей ниши
                  <ArrowRight size={15} />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
