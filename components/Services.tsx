'use client'
import { motion } from 'framer-motion'
import {
  BrainCircuit, MessageSquare, Zap, Headphones,
  Database, UserCheck, FileText, Settings2
} from 'lucide-react'

const services = [
  {
    icon: BrainCircuit,
    title: 'AI-менеджер продаж',
    desc: 'Умный ассистент, который ведёт переговоры, квалифицирует лидов и закрывает сделки без участия человека.',
  },
  {
    icon: MessageSquare,
    title: 'Telegram-боты',
    desc: 'Разрабатываем многофункциональных ботов для автоматизации общения, продаж и уведомлений в Telegram.',
  },
  {
    icon: Zap,
    title: 'Автоматизация заявок',
    desc: 'Мгновенная обработка входящих заявок, распределение по ответственным и постановка задач в CRM.',
  },
  {
    icon: Headphones,
    title: 'AI-поддержка клиентов',
    desc: 'Круглосуточная поддержка, ответы на вопросы, решение типовых обращений без нагрузки на команду.',
  },
  {
    icon: Database,
    title: 'Интеграция с CRM',
    desc: 'Подключаем AI-решения к вашей CRM-системе: amoCRM, Битрикс24, RetailCRM и другим платформам.',
  },
  {
    icon: UserCheck,
    title: 'AI-ассистенты для сотрудников',
    desc: 'Внутренние AI-помощники для команды — ответы на регламенты, поиск информации, помощь в задачах.',
  },
  {
    icon: FileText,
    title: 'Автоматизация документооборота',
    desc: 'Генерация договоров, актов, отчётов и другой документации на основе данных из систем учёта.',
  },
  {
    icon: Settings2,
    title: 'Автоматизация бизнес-процессов',
    desc: 'Оцифровка и автоматизация сквозных процессов: от обращения клиента до выполненного заказа.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="divider absolute top-0 left-0 right-0" />
      </div>

      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 max-w-2xl"
        >
          <span className="badge mb-5">Услуги</span>
          <h2 className="section-heading text-white mb-4">
            Решения, которые<br />
            <span className="text-gradient">меняют правила игры</span>
          </h2>
          <p className="section-sub">
            Комплекс AI-инструментов для полной автоматизации вашего бизнеса.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((s) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass glass-hover rounded-2xl p-6 cursor-default group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-5 group-hover:bg-brand/20 group-hover:border-brand/40 transition-all duration-300">
                  <Icon size={18} className="text-brand" />
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-[13px] text-white/40 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
