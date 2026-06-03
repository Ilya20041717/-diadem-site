'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Scale, Factory, Shield, Briefcase, Boxes, Headset, X, Check, Clock } from 'lucide-react'

type CaseItem = {
  icon: typeof Scale
  industry: string
  title: string
  description: string
  metric: string
  metricLabel: string
  tags: string[]
  color: string
  accent: string
  problem: string
  solution: string[]
  stack: string[]
  results: string[]
  duration: string
}

const cases: CaseItem[] = [
  {
    icon: Scale,
    industry: 'Банкротство физлиц',
    title: 'AI-менеджер и личный кабинет клиента',
    description: 'Telegram-бот + ИИ-менеджер ведёт первичную консультацию 24/7, записывает на услуги и передаёт тёплых лидов в CRM.',
    metric: '−50%',
    metricLabel: 'нагрузка менеджеров',
    tags: ['AI-менеджер', 'Личный кабинет', 'CRM'],
    color: 'from-blue-500/10 to-transparent',
    accent: 'bg-blue-500/20 border-blue-500/30 text-blue-300',
    problem: 'Менеджеры тонули в однотипных первичных консультациях, клиенты не понимали статус своего дела, а заявки терялись между мессенджерами.',
    solution: [
      'ИИ-менеджер в Telegram ведёт первичную консультацию и квалифицирует обращение 24/7',
      'Личный кабинет клиента с актуальным статусом дела',
      'Автозапись на услуги и передача тёплых лидов ответственному менеджеру',
      'Сквозная интеграция с CRM',
    ],
    stack: ['Telegram', 'ИИ-менеджер (GPT)', 'Личный кабинет', 'CRM'],
    results: [
      '−40–60% нагрузки на менеджеров',
      'Круглосуточная квалификация без участия команды',
      'Рост конверсии в договор',
      'Меньше повторных вопросов по статусу дела',
    ],
    duration: '3–4 недели',
  },
  {
    icon: Factory,
    industry: 'Металлопрокат',
    title: 'Автогенерация коммерческих предложений',
    description: 'ИИ обрабатывает запрос, сверяется с остатками склада и за минуты формирует КП в PDF/Excel с расчётом НДС, доставки и скидок.',
    metric: '1–2 мин',
    metricLabel: 'КП вместо часов',
    tags: ['ИИ-обработка', 'Склад', 'КП в PDF'],
    color: 'from-amber-500/10 to-transparent',
    accent: 'bg-amber-500/20 border-amber-500/30 text-amber-300',
    problem: 'На подготовку коммерческого предложения уходили часы: менеджеры вручную сверяли остатки склада и цены и ошибались в расчётах НДС, доставки и скидок.',
    solution: [
      'ИИ принимает запрос из Telegram, WhatsApp или с сайта',
      'Подключение к базе склада с актуальными остатками и ценами',
      'Автогенерация КП в PDF/Excel с расчётом НДС, доставки и скидок',
      'Готовое предложение отправляется клиенту в один клик',
    ],
    stack: ['ИИ-обработка', 'База склада', 'PDF / Excel', '3 канала приёма'],
    results: [
      'КП за 1–2 минуты вместо нескольких часов',
      'Исключены ошибки в расчётах',
      '3 канала приёма запросов в одном окне',
      'Заметный рост скорости продаж',
    ],
    duration: 'под ключ, ~4 недели',
  },
  {
    icon: Shield,
    industry: 'Охранная компания',
    title: 'Контроль обходов через NFC и Telegram',
    description: 'NFC-метки на маршрутах и контроль в реальном времени с автоматическими отчётами руководителям в Telegram.',
    metric: '−65%',
    metricLabel: 'ручной нагрузки',
    tags: ['NFC', 'Telegram', 'Геоконтроль'],
    color: 'from-emerald-500/10 to-transparent',
    accent: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300',
    problem: 'Обходы фиксировались вручную, не было прозрачности маршрутов, и руководители не видели реальную картину происходящего на объектах.',
    solution: [
      'NFC-метки на ключевых точках маршрута',
      'Отметка обхода через телефон с фиксацией времени и геопозиции',
      'Контроль маршрутов в реальном времени',
      'Автоматические отчёты руководителям в Telegram',
    ],
    stack: ['NFC', 'Telegram', 'Геолокация', 'Дашборд'],
    results: [
      '−65% ручной нагрузки на администрирование',
      'Дисциплина и контроль 24/7',
      'Полная прозрачность маршрутов',
      'Отчёты формируются автоматически',
    ],
    duration: '2–3 недели',
  },
  {
    icon: Briefcase,
    industry: 'B2B-продажи',
    title: 'Единый бот квалификации лидов',
    description: 'Лиды из всех источников собираются в одном Telegram-боте с AI-квалификацией и маршрутизацией по менеджерам.',
    metric: '+28%',
    metricLabel: 'конверсия в сделку',
    tags: ['AI-квалификация', 'CRM', 'SLA'],
    color: 'from-violet-500/10 to-transparent',
    accent: 'bg-violet-500/20 border-violet-500/30 text-violet-300',
    problem: 'Лиды приходили из разных источников и терялись в переписке, ответ занимал часы, а прозрачной воронки продаж не было.',
    solution: [
      'Единый Telegram-бот собирает лиды из всех каналов',
      'ИИ квалифицирует и оценивает качество лида',
      'Маршрутизация по менеджерам с контролем SLA',
      'Отчёты по воронке в реальном времени',
    ],
    stack: ['Telegram', 'AI-квалификация', 'CRM', 'SLA-маршрутизация'],
    results: [
      'Ответ за 3 минуты вместо часов',
      '+28% конверсии в сделку',
      'Ни один лид не теряется',
      'Прозрачная управляемая воронка',
    ],
    duration: '~3 недели',
  },
  {
    icon: Boxes,
    industry: 'Сеть табачных магазинов',
    title: 'Контроль неснижаемых остатков',
    description: 'Учёт остатков по каждому магазину и SKU, пороги, уведомления о минимуме и автозаявки на пополнение.',
    metric: '100%',
    metricLabel: 'контроль остатков',
    tags: ['Учёт', 'Пороги SKU', 'Автозаявки'],
    color: 'from-rose-500/10 to-transparent',
    accent: 'bg-rose-500/20 border-rose-500/30 text-rose-300',
    problem: 'Пустые полки по ходовым позициям приводили к потере выручки, а учёт остатков вёлся вручную по каждому магазину.',
    solution: [
      'Учёт остатков по каждому магазину и SKU',
      'Пороги неснижаемого остатка с уведомлениями о минимуме',
      'Автоматические заявки на пополнение',
      'Аналитика продаж и оборачиваемости',
    ],
    stack: ['Учёт остатков', 'Пороги SKU', 'Автозаявки', 'Аналитика'],
    results: [
      'Стабильное наличие ходовых позиций',
      'Меньше потерь продаж из-за пустых полок',
      'Контроль по каждой торговой точке',
      'Решения о закупке — на данных, а не на ощущениях',
    ],
    duration: '3–4 недели',
  },
  {
    icon: Headset,
    industry: 'Сервисная компания',
    title: 'Автоматизация заявок и уведомлений',
    description: 'Автоматическое назначение заявок ответственным, статусы и уведомления клиентам в едином окне.',
    metric: '−40%',
    metricLabel: 'срок обработки',
    tags: ['Автоназначение', 'Уведомления', 'CRM'],
    color: 'from-cyan-500/10 to-transparent',
    accent: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-300',
    problem: 'Заявки распределялись вручную, возникала путаница в статусах, а клиенты не получали своевременных уведомлений.',
    solution: [
      'Автоматическое назначение заявок ответственным',
      'Единое окно со статусами по всем обращениям',
      'Автоуведомления клиентам на каждом этапе',
      'Интеграция с CRM и таблицами',
    ],
    stack: ['Автоназначение', 'Уведомления', 'CRM', 'Единое окно'],
    results: [
      '−40% срок обработки заявки',
      'Меньше ошибок и потерянных обращений',
      'Клиенты всегда в курсе статуса',
      'Прозрачная нагрузка по команде',
    ],
    duration: '2–3 недели',
  },
]

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Cases() {
  const [active, setActive] = useState<CaseItem | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null) }
    if (active) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section id="cases" className="section-pad relative">
      <div className="divider absolute top-0 left-0 right-0" />

      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 max-w-2xl"
        >
          <span className="badge mb-5">Кейсы</span>
          <h2 className="section-heading text-white mb-4">
            Реальные результаты<br />
            <span className="text-gradient">наших клиентов</span>
          </h2>
          <p className="section-sub">
            Нажмите на кейс, чтобы увидеть задачу, решение и измеримый результат.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {cases.map((c) => {
            const Icon = c.icon
            return (
              <motion.button
                key={c.title}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => setActive(c)}
                className="glass glass-hover rounded-2xl overflow-hidden group cursor-pointer text-left"
              >
                <div className={`h-36 bg-gradient-to-br ${c.color} flex items-center justify-center relative`}>
                  <div className="absolute inset-0 bg-[#1A1A1A]/40" />
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                    <Icon size={24} className="text-white/70" />
                  </div>
                  <div className="absolute top-4 right-4 text-right">
                    <div className="text-3xl font-bold text-white leading-none">{c.metric}</div>
                    <div className="text-xs text-white/50 mt-0.5">{c.metricLabel}</div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="text-[11px] text-white/40 uppercase tracking-widest mb-1.5">{c.industry}</div>
                      <h3 className="text-[16px] font-semibold text-white leading-snug">{c.title}</h3>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.06] group-hover:border-white/20 transition-all">
                      <ArrowUpRight size={14} className="text-white/50" />
                    </div>
                  </div>
                  <p className="text-[13px] text-white/45 leading-relaxed mb-4">{c.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {c.tags.map((tag) => (
                        <span key={tag} className={`text-[11px] px-2.5 py-1 rounded-full border ${c.accent} font-medium`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="mt-4 inline-block text-[12px] font-medium text-brand/80 group-hover:text-brand transition-colors">
                    Подробнее →
                  </span>
                </div>
              </motion.button>
            )
          })}
        </motion.div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative z-10 w-full max-w-2xl max-h-[88vh] overflow-y-auto glass rounded-3xl border border-white/10"
            >
              <div className={`h-28 bg-gradient-to-br ${active.color} relative flex items-end`}>
                <div className="absolute inset-0 bg-[#0F0F0F]/50" />
                <button
                  onClick={() => setActive(null)}
                  aria-label="Закрыть"
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all"
                >
                  <X size={16} />
                </button>
                <div className="relative z-10 p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.08] border border-white/10 flex items-center justify-center flex-shrink-0">
                    {(() => { const I = active.icon; return <I size={22} className="text-white/80" /> })()}
                  </div>
                  <div>
                    <div className="text-[11px] text-white/50 uppercase tracking-widest">{active.industry}</div>
                    <h3 className="text-xl font-semibold text-white leading-tight">{active.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-7">
                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <div className="text-4xl font-bold text-gradient leading-none">{active.metric}</div>
                    <div className="text-xs text-white/45 mt-1">{active.metricLabel}</div>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-white/55">
                    <Clock size={15} className="text-brand/70" />
                    Срок внедрения: <span className="text-white/80 font-medium">{active.duration}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-[12px] uppercase tracking-widest text-white/40 mb-2">Задача</h4>
                  <p className="text-[15px] text-white/70 leading-relaxed">{active.problem}</p>
                </div>

                <div>
                  <h4 className="text-[12px] uppercase tracking-widest text-brand/70 mb-3">Что сделали</h4>
                  <ul className="space-y-2.5">
                    {active.solution.map((s) => (
                      <li key={s} className="flex items-start gap-3">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center flex-shrink-0">
                          <Check size={12} className="text-brand" />
                        </span>
                        <span className="text-[14px] text-white/75 leading-snug">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[12px] uppercase tracking-widest text-white/40 mb-3">Стек и инструменты</h4>
                  <div className="flex flex-wrap gap-2">
                    {active.stack.map((t) => (
                      <span key={t} className="text-[12px] px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-brand/20 bg-brand/[0.05] p-5">
                  <h4 className="text-[12px] uppercase tracking-widest text-brand/80 mb-3">Результат</h4>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {active.results.map((r) => (
                      <li key={r} className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                        <span className="text-[14px] text-white/80 leading-snug">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => { setActive(null); document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="btn-primary w-full justify-center"
                >
                  Хочу так же — обсудить проект
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
