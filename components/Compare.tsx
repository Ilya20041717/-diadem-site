'use client'
import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

const without = [
  'Заявки теряются между мессенджерами и почтой',
  'Менеджеры заняты рутиной и однотипными ответами',
  'Клиент ждёт ответа часами — и уходит к конкуренту',
  'Нет прозрачной воронки и контроля процессов',
  'Рост = новые сотрудники и рост затрат',
]

const withUs = [
  'Все обращения в одном окне, ни одно не теряется',
  'AI берёт рутину на себя — команда занята важным',
  'Ответ за секунды, 24/7, без выходных',
  'Прозрачная воронка и аналитика в реальном времени',
  'Рост без пропорционального роста штата',
]

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function Compare() {
  return (
    <section className="section-pad relative bg-black/25">
      <div className="divider absolute top-0 left-0 right-0" />
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="badge mb-5">До и после</span>
          <h2 className="section-heading text-white">
            Что меняется <span className="text-gradient">с Diadem</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease }}
            className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7"
          >
            <h3 className="text-[15px] font-semibold text-white/60 mb-6 uppercase tracking-wider">Без автоматизации</h3>
            <ul className="space-y-4">
              {without.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                    <X size={12} className="text-red-400" />
                  </span>
                  <span className="text-[14px] text-white/50 leading-snug">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease }}
            className="rounded-2xl border border-brand/25 bg-brand/[0.05] p-7 relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
            <h3 className="text-[15px] font-semibold text-white mb-6 uppercase tracking-wider relative z-10">С Diadem</h3>
            <ul className="space-y-4 relative z-10">
              {withUs.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-brand/15 border border-brand/40 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-brand" />
                  </span>
                  <span className="text-[14px] text-white/85 leading-snug">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
