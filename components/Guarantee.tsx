'use client'
import { motion } from 'framer-motion'
import { ShieldCheck, Lock, CalendarCheck, LifeBuoy } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: 'Гарантия результата', desc: 'Фиксируем измеримые метрики до старта и доводим систему до них.' },
  { icon: Lock, title: 'NDA и безопасность', desc: 'Подписываем NDA, разграничиваем доступы, данные остаются у вас.' },
  { icon: CalendarCheck, title: 'Фиксированный срок', desc: 'Сроки и смета закреплены в договоре. Без «вечных» доработок.' },
  { icon: LifeBuoy, title: 'Поддержка после запуска', desc: 'Мониторинг, обновления и развитие системы по мере роста.' },
]

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function Guarantee() {
  return (
    <section className="relative py-20">
      <div className="divider absolute top-0 left-0 right-0" />
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="badge mb-5">Гарантии</span>
          <h2 className="section-heading text-white">
            Работаем <span className="text-gradient">прозрачно</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => {
            const Icon = it.icon
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="glass glass-hover rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mx-auto mb-5">
                  <Icon size={20} className="text-brand" />
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-2">{it.title}</h3>
                <p className="text-[13px] text-white/45 leading-relaxed">{it.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
