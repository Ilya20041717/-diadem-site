'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Phone } from 'lucide-react'

const channels = [
  { label: 'Telegram', href: 'https://t.me/Diadem_Al', Icon: Send, color: 'bg-[#26A5E4]' },
  { label: 'WhatsApp', href: 'https://wa.me/79777772770', Icon: MessageCircle, color: 'bg-[#25D366]' },
  { label: 'Позвонить', href: 'tel:+79777772770', Icon: Phone, color: 'bg-brand' },
]

export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed z-[65] left-4 bottom-4 sm:left-6 sm:bottom-6 flex flex-col items-start gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2.5"
          >
            {channels.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0, transition: { delay: i * 0.05 } }}
                className="flex items-center gap-3 group"
              >
                <span className={`w-11 h-11 rounded-full ${c.color} flex items-center justify-center text-white shadow-lg shadow-black/30`}>
                  <c.Icon size={18} />
                </span>
                <span className="px-3 py-1.5 rounded-lg glass text-[13px] font-medium text-white/90 whitespace-nowrap">
                  {c.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Связаться"
        className="w-14 h-14 rounded-full bg-brand text-[#0A0A0A] flex items-center justify-center shadow-[0_10px_30px_-6px_rgba(171,169,161,0.5)] relative"
      >
        {!open && (
          <span className="absolute inset-0 rounded-full bg-brand/50 animate-ping" style={{ animationDuration: '2.5s' }} />
        )}
        <span className="relative">
          {open ? <X size={22} /> : <MessageCircle size={24} />}
        </span>
      </motion.button>
    </div>
  )
}
