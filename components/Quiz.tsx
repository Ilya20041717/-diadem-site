'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check, Sparkles, CheckCircle2, Loader2 } from 'lucide-react'

const steps = [
  {
    key: 'Сфера',
    q: 'В какой сфере ваш бизнес?',
    options: ['Услуги / сервис', 'B2B / агентство', 'E-commerce / маркетплейсы', 'Недвижимость', 'Другое'],
  },
  {
    key: 'Задача',
    q: 'Что хотите автоматизировать в первую очередь?',
    options: ['Продажи и заявки', 'Поддержку клиентов', 'Внутренние процессы', 'Документы и КП'],
  },
  {
    key: 'Объём',
    q: 'Сколько обращений в месяц?',
    options: ['До 50', '50–200', '200–1000', 'Больше 1000'],
  },
]

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function Quiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [contact, setContact] = useState({ name: '', phone: '' })
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const total = steps.length + 1
  const progress = Math.round(((step) / total) * 100)

  const pick = (key: string, value: string) => {
    setAnswers((a) => ({ ...a, [key]: value }))
    setTimeout(() => setStep((s) => s + 1), 220)
  }

  const submit = async () => {
    if (!contact.name.trim() || !contact.phone.trim()) return
    setState('loading')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contact.name,
          phone: contact.phone,
          source: 'Квиз «AI-аудит за 2 минуты»',
          answers,
        }),
      })
      if (!res.ok) throw new Error()
      setState('success')
    } catch {
      setState('error')
    }
  }

  return (
    <section id="quiz" className="section-pad relative bg-black/25">
      <div className="divider absolute top-0 left-0 right-0" />
      <div className="container-site">
        <div className="grid lg:grid-cols-[400px_1fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="badge mb-5">
              <Sparkles size={11} />
              Бесплатно · 2 минуты
            </span>
            <h2 className="section-heading text-white mb-4">
              AI-аудит<br />
              <span className="text-gradient">вашего бизнеса</span>
            </h2>
            <p className="section-sub">
              Ответьте на 3 вопроса — подберём решения под вашу задачу и рассчитаем эффект. Результат пришлём и обсудим.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="glass rounded-3xl p-7 sm:p-9 min-h-[360px] flex flex-col"
          >
            {/* Progress */}
            {state !== 'success' && (
              <div className="mb-7">
                <div className="flex justify-between text-[12px] text-white/40 mb-2">
                  <span>Шаг {Math.min(step + 1, total)} из {total}</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-1 rounded-full bg-white/[0.08] overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-brand to-white/80"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease }}
                  />
                </div>
              </div>
            )}

            <AnimatePresence mode="wait">
              {state === 'success' ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex-1 flex flex-col items-center justify-center text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <CheckCircle2 size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Заявка принята!</h3>
                  <p className="text-white/55 text-[15px] max-w-sm">
                    Подготовим персональную подборку решений под вашу задачу и свяжемся в течение рабочего дня.
                  </p>
                </motion.div>
              ) : step < steps.length ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3, ease }}
                  className="flex-1"
                >
                  <h3 className="text-[19px] font-semibold text-white mb-6">{steps[step].q}</h3>
                  <div className="grid gap-2.5">
                    {steps[step].options.map((opt) => {
                      const selected = answers[steps[step].key] === opt
                      return (
                        <button
                          key={opt}
                          onClick={() => pick(steps[step].key, opt)}
                          className={`flex items-center justify-between gap-3 text-left rounded-xl px-5 py-4 border transition-all ${
                            selected
                              ? 'border-brand/40 bg-brand/[0.08] text-white'
                              : 'border-white/[0.08] text-white/70 hover:border-white/20 hover:bg-white/[0.03]'
                          }`}
                        >
                          <span className="text-[15px]">{opt}</span>
                          <span className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${selected ? 'bg-brand border-brand' : 'border-white/20'}`}>
                            {selected && <Check size={12} className="text-[#0A0A0A]" />}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                  {step > 0 && (
                    <button onClick={() => setStep((s) => s - 1)} className="mt-6 inline-flex items-center gap-2 text-[13px] text-white/45 hover:text-white/80 transition-colors">
                      <ArrowLeft size={14} /> Назад
                    </button>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3, ease }}
                  className="flex-1"
                >
                  <h3 className="text-[19px] font-semibold text-white mb-2">Куда прислать результат?</h3>
                  <p className="text-[13px] text-white/45 mb-6">Подберём решения и рассчитаем эффект под ваши ответы.</p>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      value={contact.name}
                      onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[15px] text-white placeholder-white/25 outline-none focus:border-brand/40 transition-all"
                    />
                    <input
                      type="tel"
                      placeholder="Телефон или Telegram"
                      value={contact.phone}
                      onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[15px] text-white placeholder-white/25 outline-none focus:border-brand/40 transition-all"
                    />
                  </div>
                  {state === 'error' && (
                    <p className="mt-3 text-[13px] text-red-400">Не удалось отправить — напишите нам в Telegram @Diadem_Al</p>
                  )}
                  <button
                    onClick={submit}
                    disabled={state === 'loading' || !contact.name.trim() || !contact.phone.trim()}
                    className="btn-primary w-full justify-center mt-5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {state === 'loading' ? (<><Loader2 size={16} className="animate-spin" /> Отправка...</>) : (<>Получить результат <ArrowRight size={16} /></>)}
                  </button>
                  <button onClick={() => setStep((s) => s - 1)} className="mt-4 inline-flex items-center gap-2 text-[13px] text-white/45 hover:text-white/80 transition-colors">
                    <ArrowLeft size={14} /> Назад
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
