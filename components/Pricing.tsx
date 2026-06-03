'use client'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    title: 'Пилот',
    price: 'от 60 000 ₽',
    desc: 'Проверяем гипотезу на одном процессе и показываем эффект.',
    items: ['Срок 1–2 недели', '1 сценарий автоматизации', 'Подключение Telegram', 'Базовая аналитика'],
    featured: false,
  },
  {
    title: 'Стандарт',
    price: '120 000–250 000 ₽',
    desc: 'Автоматизация ключевых цепочек продаж и поддержки.',
    items: ['2–4 сценария', 'Интеграции CRM / таблицы / почта', 'Отчёты и аналитика', 'Сопровождение 1 месяц'],
    featured: true,
  },
  {
    title: 'Расширенный',
    price: 'от 300 000 ₽',
    desc: 'Комплексная система с интеграциями и масштабированием.',
    items: ['5+ сценариев', 'Несколько отделов', 'Кастомные интеграции', 'Приоритетная поддержка'],
    featured: false,
  },
]

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad relative">
      <div className="divider absolute top-0 left-0 right-0" />
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="mb-14 max-w-2xl"
        >
          <span className="badge mb-5">Стоимость</span>
          <h2 className="section-heading text-white mb-4">
            Прозрачные<br />
            <span className="text-gradient">тарифы</span>
          </h2>
          <p className="section-sub">
            Начните с пилота — окупите его на одном процессе, затем масштабируйте.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease }}
              whileHover={{ y: -4 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                p.featured
                  ? 'glass border border-brand/30 bg-brand/[0.05]'
                  : 'glass glass-hover'
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 badge !py-1.5 !text-[10px] bg-brand/20 border-brand/40 text-white">
                  Популярный
                </span>
              )}
              <h3 className="text-[13px] uppercase tracking-widest text-white/50 mb-3">{p.title}</h3>
              <div className="text-3xl font-bold text-white mb-3">{p.price}</div>
              <p className="text-[13px] text-white/45 leading-relaxed mb-6">{p.desc}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-brand" />
                    </span>
                    <span className="text-[13.5px] text-white/70">{it}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })}
                className={p.featured ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}
              >
                Выбрать
                <ArrowRight size={15} />
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[13px] text-white/35 mt-8">
          Не знаете, что выбрать? Получите бесплатный аудит — подберём оптимальный вариант.
        </p>
      </div>
    </section>
  )
}
