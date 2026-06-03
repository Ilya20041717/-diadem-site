'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Clock, ArrowUpRight } from 'lucide-react'

type Article = {
  tag: string
  title: string
  excerpt: string
  read: string
  body: string[]
}

const articles: Article[] = [
  {
    tag: 'Продажи',
    title: 'Почему скорость ответа решает больше, чем скрипт',
    excerpt: 'Лид, которому ответили за 5 минут, конвертируется в разы лучше. Разбираем, как AI закрывает «золотой час».',
    read: '4 мин',
    body: [
      'Большинство сделок теряется не из-за плохого продукта, а из-за медленного первого касания. Пока менеджер освободится и перезвонит, клиент уже написал трём конкурентам.',
      'AI-менеджер отвечает в момент обращения — в любой канал и в любое время. Он квалифицирует лида, отвечает на типовые вопросы и фиксирует контакт в CRM, пока человек ещё «горячий».',
      'На практике переход от ответа «в течение дня» к ответу «за секунды» поднимает конверсию входящих на десятки процентов — без увеличения штата. Менеджеры подключаются уже к тёплым, квалифицированным диалогам.',
      'Вывод: автоматизировать стоит не «общение вообще», а именно первый отклик и квалификацию. Это самая дешёвая в внедрении и самая окупаемая точка.',
    ],
  },
  {
    tag: 'Процессы',
    title: 'С чего начать автоматизацию: правило одного процесса',
    excerpt: 'Не нужно автоматизировать всё сразу. Объясняем, как выбрать первый процесс и окупить пилот за недели.',
    read: '5 мин',
    body: [
      'Главная ошибка — пытаться оцифровать весь бизнес одним проектом. Это долго, дорого и рискованно. Гораздо эффективнее найти один процесс, который болит сильнее всего.',
      'Хороший кандидат на пилот — процесс с тремя признаками: он повторяется много раз в день, отнимает время дорогих сотрудников и легко измеряется (заявки, КП, ответы поддержке).',
      'Запускаем пилот на 1–2 недели, снимаем метрики до и после и считаем эффект в деньгах. Если пилот окупился — масштабируем на соседние процессы. Если нет — мы потеряли недели, а не месяцы.',
      'Такой подход снижает риск до минимума и быстро даёт результат, который видно в отчётах, а не в презентации.',
    ],
  },
  {
    tag: 'Технологии',
    title: 'Telegram как операционная система бизнеса',
    excerpt: 'Почему привычный мессенджер становится полноценной панелью управления — от заявок до отчётов.',
    read: '4 мин',
    body: [
      'Telegram уже стоит у всех — и у клиентов, и у сотрудников. Это огромное преимущество: не нужно внедрять новый софт и учить команду работать в незнакомом интерфейсе.',
      'Через бота можно принимать и распределять заявки, согласовывать документы, получать уведомления о важных событиях, видеть отчёты и управлять процессами — не выходя из мессенджера.',
      'Для клиента это тоже удобно: запись, статус заказа, поддержка и КП приходят туда, где он и так проводит время. Конверсия выше, потому что нет лишних шагов.',
      'Telegram Mini Apps позволяют встроить полноценные веб-интерфейсы прямо в чат — от личного кабинета до калькулятора. Это дёшево в поддержке и мгновенно доступно пользователю.',
    ],
  },
  {
    tag: 'Деньги',
    title: 'Как считать окупаемость AI-внедрения',
    excerpt: 'Простая формула, которая показывает, через сколько недель автоматизация вернёт вложения.',
    read: '6 мин',
    body: [
      'Чтобы решение не превратилось в «игрушку», эффект нужно считать в деньгах с самого начала. Берём три величины: сэкономленные часы, прирост конверсии и снижение потерь.',
      'Сэкономленные часы = количество рутинных операций × время на каждую × стоимость часа сотрудника. Часто только это уже окупает внедрение за месяц-два.',
      'Прирост конверсии считаем по воронке: быстрее ответ и квалификация → больше доведённых до сделки лидов при том же трафике. Даже +10–15% к конверсии — это заметные деньги.',
      'Снижение потерь — про заявки, которые раньше терялись, и ошибки, которые теперь не происходят. Сложив всё, получаем срок окупаемости. У большинства наших проектов он измеряется неделями, а не годами.',
    ],
  },
]

const ease = [0.25, 0.46, 0.45, 0.94] as const

export default function Insights() {
  const [active, setActive] = useState<Article | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null) }
    if (active) { document.addEventListener('keydown', onKey); document.body.style.overflow = 'hidden' }
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [active])

  return (
    <section id="insights" className="section-pad relative">
      <div className="divider absolute top-0 left-0 right-0" />
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease }}
          className="mb-14 max-w-2xl"
        >
          <span className="badge mb-5">Insights</span>
          <h2 className="section-heading text-white mb-4">
            Экспертиза,<br />
            <span className="text-gradient">а не теория</span>
          </h2>
          <p className="section-sub">Короткие материалы о том, как автоматизация реально влияет на деньги бизнеса.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.map((a, i) => (
            <motion.button
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
              whileHover={{ y: -4 }}
              onClick={() => setActive(a)}
              className="glass glass-hover rounded-2xl p-6 text-left flex flex-col group h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] uppercase tracking-widest text-brand/70">{a.tag}</span>
                <span className="flex items-center gap-1 text-[11px] text-white/35"><Clock size={11} />{a.read}</span>
              </div>
              <h3 className="text-[16px] font-semibold text-white leading-snug mb-3">{a.title}</h3>
              <p className="text-[13px] text-white/45 leading-relaxed flex-1">{a.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-brand/80 group-hover:text-brand transition-colors">
                Читать <ArrowUpRight size={13} />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setActive(null)} />
            <motion.article
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.3, ease }}
              className="relative z-10 w-full max-w-2xl max-h-[88vh] overflow-y-auto glass rounded-3xl border border-white/10 p-7 sm:p-10"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Закрыть"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all"
              >
                <X size={16} />
              </button>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] uppercase tracking-widest text-brand/70">{active.tag}</span>
                <span className="flex items-center gap-1 text-[11px] text-white/35"><Clock size={11} />{active.read}</span>
              </div>
              <h3 className="font-display text-[26px] font-semibold text-white leading-tight mb-6">{active.title}</h3>
              <div className="space-y-4">
                {active.body.map((p, idx) => (
                  <p key={idx} className="text-[15px] text-white/70 leading-relaxed">{p}</p>
                ))}
              </div>
              <button
                onClick={() => { setActive(null); document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary w-full justify-center mt-8"
              >
                Обсудить мой проект
                <ArrowUpRight size={16} />
              </button>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
