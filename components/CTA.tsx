'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function CTA() {
  const [form, setForm] = useState({ name: '', phone: '', telegram: '' })
  const [state, setState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Partial<typeof form>>({})

  const validate = () => {
    const e: Partial<typeof form> = {}
    if (!form.name.trim()) e.name = 'Введите имя'
    if (!form.phone.trim()) e.phone = 'Введите телефон'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setState('loading')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'Форма «Бесплатный аудит»' }),
      })
      if (!res.ok) throw new Error('failed')
      setState('success')
    } catch {
      setState('error')
    }
  }

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm(f => ({ ...f, [field]: value }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }))
  }

  return (
    <section id="cta" className="section-pad relative bg-black/25 overflow-hidden">
      <div className="divider absolute top-0 left-0 right-0" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-brand/[0.05] blur-[100px]" />
      </div>

      <div className="container-site relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-12"
          >
            <span className="badge mb-5">Бесплатно</span>
            <h2 className="section-heading text-white mb-4">
              Получите бесплатный<br />
              <span className="text-gradient">аудит процессов</span>
            </h2>
            <p className="section-sub max-w-md mx-auto">
              Покажем, какие задачи можно автоматизировать уже сейчас, и рассчитаем потенциальный эффект.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {state === 'success' ? (
              <div className="glass rounded-2xl p-10 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <CheckCircle2 size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Заявка отправлена!</h3>
                  <p className="text-white/50 text-[15px] max-w-xs">
                    Свяжемся с вами в течение рабочего дня для обсуждения деталей аудита.
                  </p>
                </motion.div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="cta-name" className="block text-[13px] text-white/50 mb-2 font-medium">
                      Имя <span className="text-brand/60">*</span>
                    </label>
                    <input
                      id="cta-name"
                      type="text"
                      placeholder="Александр"
                      value={form.name}
                      onChange={e => handleChange('name', e.target.value)}
                      autoComplete="given-name"
                      className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3.5 text-[15px] text-white placeholder-white/20 outline-none transition-all focus:bg-white/[0.06] ${
                        errors.name
                          ? 'border-red-500/50 focus:border-red-500/70'
                          : 'border-white/[0.08] focus:border-brand/40'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-[12px] text-red-400">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="cta-phone" className="block text-[13px] text-white/50 mb-2 font-medium">
                      Телефон <span className="text-brand/60">*</span>
                    </label>
                    <input
                      id="cta-phone"
                      type="tel"
                      placeholder="+7 (999) 000-00-00"
                      value={form.phone}
                      onChange={e => handleChange('phone', e.target.value)}
                      autoComplete="tel"
                      className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3.5 text-[15px] text-white placeholder-white/20 outline-none transition-all focus:bg-white/[0.06] ${
                        errors.phone
                          ? 'border-red-500/50 focus:border-red-500/70'
                          : 'border-white/[0.08] focus:border-brand/40'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-[12px] text-red-400">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Telegram */}
                <div>
                  <label htmlFor="cta-telegram" className="block text-[13px] text-white/50 mb-2 font-medium">
                    Telegram
                  </label>
                  <input
                    id="cta-telegram"
                    type="text"
                    placeholder="@username"
                    value={form.telegram}
                    onChange={e => handleChange('telegram', e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-[15px] text-white placeholder-white/20 outline-none transition-all focus:bg-white/[0.06] focus:border-brand/40"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="btn-primary w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {state === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      Получить аудит
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

                {state === 'error' && (
                  <p className="text-center text-[13px] text-red-400">
                    Не удалось отправить. Напишите нам в{' '}
                    <a href="https://t.me/Diadem_Al" target="_blank" rel="noopener noreferrer" className="underline">Telegram</a>{' '}
                    или позвоните +7 (977) 777-27-70
                  </p>
                )}

                <p className="text-center text-[12px] text-white/25">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="#" className="underline hover:text-white/50 transition-colors">
                    политикой конфиденциальности
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
