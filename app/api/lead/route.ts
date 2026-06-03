import { NextResponse } from 'next/server'

const TELEGRAM_API = 'https://api.telegram.org/bot'

function esc(s: unknown) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function POST(req: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  const threadId = process.env.TELEGRAM_THREAD_ID

  if (!token || !chatId) {
    return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 500 })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 })
  }

  // Honeypot anti-spam
  if (body.company) {
    return NextResponse.json({ ok: true })
  }

  const name = esc(body.name)
  const phone = esc(body.phone)
  const telegram = esc(body.telegram)
  const source = esc(body.source || 'Сайт Diadem')
  const answers = body.answers as Record<string, string> | undefined

  if (!name && !phone && !telegram) {
    return NextResponse.json({ ok: false, error: 'empty' }, { status: 400 })
  }

  const lines = [
    '🟣 <b>Новая заявка — Diadem</b>',
    '',
    name ? `👤 <b>Имя:</b> ${name}` : '',
    phone ? `📞 <b>Телефон:</b> ${phone}` : '',
    telegram ? `✈️ <b>Telegram:</b> ${telegram}` : '',
    `🔗 <b>Источник:</b> ${source}`,
  ]

  if (answers && typeof answers === 'object') {
    lines.push('', '<b>Ответы квиза:</b>')
    for (const [q, a] of Object.entries(answers)) {
      lines.push(`• ${esc(q)}: <b>${esc(a)}</b>`)
    }
  }

  lines.push('', `🕓 ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })} МСК`)

  const payload: Record<string, unknown> = {
    chat_id: chatId,
    text: lines.filter(Boolean).join('\n'),
    parse_mode: 'HTML',
    disable_web_page_preview: true,
  }
  if (threadId) payload.message_thread_id = Number(threadId)

  try {
    const r = await fetch(`${TELEGRAM_API}${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!r.ok) {
      const details = await r.text()
      return NextResponse.json({ ok: false, error: 'telegram_failed', details }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'network' }, { status: 502 })
  }
}
