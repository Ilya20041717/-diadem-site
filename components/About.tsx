'use client'
import { motion } from 'framer-motion'
import { Layers, Target, ShieldCheck, Quote } from 'lucide-react'

const values = [
  { icon: Layers, title: 'Системный подход', desc: 'Не разовые скрипты, а решения, которые растут вместе с бизнесом.' },
  { icon: Target, title: 'Бизнес-логика важнее кода', desc: 'Начинаем с задачи и метрик, а не с выбора технологий.' },
  { icon: ShieldCheck, title: 'Отвечаем за результат', desc: 'Сопровождаем систему после запуска и развиваем её.' },
]

const stats = [
  { v: '200+', l: 'проектов внедрено' },
  { v: '6+', l: 'отраслей' },
  { v: '40+', l: 'интеграций' },
  { v: '24/7', l: 'работа систем' },
]

const clients = ['Юр. компании', 'Металлопрокат', 'Автобизнес', 'Охранные предприятия', 'Ритейл', 'Недвижимость', 'B2B-агентства', 'Сервисные центры']

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="divider absolute top-0 left-0 right-0" />
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="badge mb-5">О компании</span>
            <h2 className="section-heading text-white mb-5">
              Команда, которая<br />
              <span className="text-gradient">внедряет, а не продаёт</span>
            </h2>
            <p className="section-sub mb-5">
              Diadem — студия автоматизации бизнеса на базе искусственного интеллекта. Мы выросли из практики: десятки внедрённых Telegram-ботов, AI-ассистентов и интеграций для реальных компаний из разных ниш.
            </p>
            <p className="text-white/55 text-[15px] leading-relaxed mb-8">
              Мы не делаем «бота ради бота». Сначала разбираем процессы, находим, где теряются деньги и время, и только потом строим систему — с измеримым эффектом и понятной окупаемостью.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.l} className="glass rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-gradient leading-none mb-1">{s.v}</div>
                  <div className="text-[11px] text-white/45 leading-tight">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="space-y-4"
          >
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="glass glass-hover rounded-2xl p-6 flex items-start gap-5">
                  <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={19} className="text-brand" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white mb-1.5">{v.title}</h3>
                    <p className="text-[13px] text-white/45 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              )
            })}

            {/* Founder quote */}
            <div className="glass rounded-2xl p-6 relative overflow-hidden">
              <Quote size={40} className="absolute top-4 right-5 text-brand/15" />
              <p className="text-[15px] text-white/75 leading-relaxed italic mb-4 relative z-10">
                «Хороший AI-проект — это не про технологии, а про то, сколько времени и денег он возвращает бизнесу каждый месяц. На это мы и смотрим в первую очередь.»
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center">
                  <span className="font-display text-[15px] font-semibold text-brand">D</span>
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-white">Основатель Diadem</div>
                  <div className="text-[12px] text-white/40">Diadem · AI Automation</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease }}
          className="mt-16"
        >
          <p className="text-center text-[12px] uppercase tracking-widest text-white/35 mb-6">Нам доверяют бизнесы из разных ниш</p>
          <div className="flex flex-wrap justify-center gap-3">
            {clients.map((c) => (
              <span key={c} className="px-4 py-2 rounded-full glass text-[13px] text-white/55 border border-white/[0.07]">
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
