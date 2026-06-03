'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Услуги', href: '#services' },
  { label: 'Отрасли', href: '#industries' },
  { label: 'Кейсы', href: '#cases' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#cta' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight the nav item for the section in view
  useEffect(() => {
    const ids = links.map((l) => l.href.replace('#', ''))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(`#${e.target.id}`) })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const handleLink = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/[0.05]'
            : 'bg-transparent'
        )}
      >
        <div className="container-site">
          <nav className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <a
              href="#"
              onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="flex items-center gap-2.5 group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/diadem-mark.png"
                alt="Diadem"
                className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span className="font-display relative top-[3px] text-[15px] sm:text-[18px] font-semibold tracking-[0.28em] sm:tracking-[0.34em] text-white/95 uppercase">
                Diadem
              </span>
            </a>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1">
              {links.map(l => (
                <li key={l.label}>
                  <button
                    onClick={() => handleLink(l.href)}
                    className={cn(
                      'px-4 py-2 text-sm transition-colors duration-200 rounded-lg hover:bg-white/[0.04]',
                      active === l.href ? 'text-white' : 'text-white/50 hover:text-white'
                    )}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleLink('#cta')}
                className="hidden md:flex btn-primary !py-2.5 !px-6 !text-sm"
              >
                Обсудить проект
              </button>
              <button
                onClick={() => setOpen(v => !v)}
                className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
                aria-label="Меню"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 md:hidden"
          >
            <div className="container-site pb-4">
              <div className="glass rounded-2xl overflow-hidden">
                <ul className="py-2">
                  {links.map(l => (
                    <li key={l.label}>
                      <button
                        onClick={() => handleLink(l.href)}
                        className="w-full text-left px-6 py-3.5 text-[15px] text-white/70 hover:text-white hover:bg-white/[0.04] transition-colors"
                      >
                        {l.label}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="px-4 pb-4">
                  <button
                    onClick={() => handleLink('#cta')}
                    className="btn-primary w-full justify-center"
                  >
                    Обсудить проект
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
