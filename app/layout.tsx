import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import SiteBackground from '@/components/SiteBackground'
import LoadingScreen from '@/components/LoadingScreen'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

// Elegant editorial serif for headings & wordmark — premium "Classic Elegant" pairing
const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://diademai.ru'),
  title: { default: 'Diadem — Автоматизация бизнеса с AI', template: '%s · Diadem' },
  description: 'Студия автоматизации бизнеса на базе искусственного интеллекта. Telegram-боты, AI-менеджеры, интеграции с CRM. Бесплатный аудит процессов за 24 часа.',
  applicationName: 'Diadem',
  keywords: ['AI автоматизация', 'искусственный интеллект бизнес', 'telegram боты', 'AI менеджер продаж', 'автоматизация заявок', 'CRM интеграция', 'AI агентство'],
  openGraph: {
    title: 'Diadem — Автоматизация бизнеса с AI',
    description: 'Внедряем AI-решения, которые заменяют рутину, увеличивают продажи и работают 24/7.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Diadem',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diadem — Автоматизация бизнеса с AI',
    description: 'AI-решения, которые заменяют рутину и работают 24/7.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased bg-[#0A0A0A] text-white`}>
        <LoadingScreen />
        <SiteBackground />
        {children}
      </body>
    </html>
  )
}
