'use client'
import { motion } from 'framer-motion'
import { Mail, Send, Phone } from 'lucide-react'

const serviceLinks = [
  'AI-менеджер продаж',
  'Telegram-боты',
  'Автоматизация заявок',
  'AI-поддержка клиентов',
  'Интеграция с CRM',
]

const companyLinks = [
  { label: 'Кейсы', href: '#cases' },
  { label: 'Процесс', href: '#process' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'Политика конфиденциальности', href: '#' },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-black/40">
      <div className="divider" />

      <div className="container-site py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#"
              onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="flex items-center gap-2.5 group mb-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/diadem-mark.png" alt="Diadem" className="w-7 h-7 flex-shrink-0 object-contain" />
              <span className="text-[15px] font-semibold tracking-[0.18em] text-white uppercase">Diadem</span>
            </a>
            <p className="text-[13px] text-white/35 leading-relaxed mb-6 max-w-[220px]">
              Автоматизируем бизнес с помощью искусственного интеллекта.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://t.me/Diadem_Al"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-9 h-9 rounded-xl border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all"
              >
                <Send size={15} />
              </a>
              <a
                href="mailto:Diadem.comp@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-xl border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[12px] font-semibold text-white/40 uppercase tracking-widest mb-5">Услуги</h4>
            <ul className="space-y-3">
              {serviceLinks.map(s => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-[14px] text-white/50 hover:text-white transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[12px] font-semibold text-white/40 uppercase tracking-widest mb-5">Компания</h4>
            <ul className="space-y-3">
              {companyLinks.map(l => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-[14px] text-white/50 hover:text-white transition-colors text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-[12px] font-semibold text-white/40 uppercase tracking-widest mb-5">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+79777772770"
                  className="flex items-center gap-2 text-[14px] text-white/50 hover:text-white transition-colors"
                >
                  <Phone size={13} className="text-brand/60" />
                  +7 (977) 777-27-70
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/Diadem_Al"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[14px] text-white/50 hover:text-white transition-colors"
                >
                  <Send size={13} className="text-brand/60" />
                  @Diadem_Al
                </a>
              </li>
              <li>
                <a
                  href="mailto:Diadem.comp@gmail.com"
                  className="flex items-center gap-2 text-[14px] text-white/50 hover:text-white transition-colors"
                >
                  <Mail size={13} className="text-brand/60" />
                  Diadem.comp@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-white/25">
            © {new Date().getFullYear()} Diadem. Все права защищены.
          </p>
          <p className="text-[13px] text-white/20">
            AI Automation Platform
          </p>
        </div>
      </div>
    </footer>
  )
}
