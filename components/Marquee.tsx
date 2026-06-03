'use client'
/* eslint-disable @next/next/no-img-element */

const models = [
  { src: '/logos/openai.svg', name: 'ChatGPT' },
  { src: '/logos/claude.svg', name: 'Claude' },
  { src: '/logos/googlegemini.svg', name: 'Gemini' },
  { src: '/logos/deepseek.svg', name: 'DeepSeek' },
  { src: '/logos/perplexity.svg', name: 'Perplexity' },
  { src: '/logos/mistralai.svg', name: 'Mistral' },
  { src: '/logos/meta.svg', name: 'Llama' },
  { src: '/logos/huggingface.svg', name: 'Hugging Face' },
  { src: '/logos/ollama.svg', name: 'Ollama' },
]

const integrations = [
  'Telegram', 'amoCRM', 'Битрикс24', 'WhatsApp', 'Google Sheets',
  'RetailCRM', '1С', 'ЮKassa', 'GetCourse', 'n8n', 'Авито', 'API',
]

function LogoRow({ items }: { items: { src: string; name: string }[] }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-mask overflow-hidden">
      <div className="marquee-track">
        {doubled.map((m, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-7 group">
            <img
              src={m.src}
              alt={m.name}
              className="h-6 w-auto invert opacity-45 group-hover:opacity-90 transition-opacity"
            />
            <span className="text-[15px] font-medium text-white/45 group-hover:text-white/85 transition-colors whitespace-nowrap">
              {m.name}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

function TextRow({ items }: { items: string[] }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-mask overflow-hidden">
      <div className="marquee-track" style={{ animationDirection: 'reverse', animationDuration: '38s' }}>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center mx-3">
            <span className="text-[15px] font-medium text-white/40 hover:text-white/80 transition-colors whitespace-nowrap">
              {item}
            </span>
            <span className="ml-6 w-1 h-1 rounded-full bg-brand/40" />
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <section className="relative py-14 bg-black/20 overflow-hidden">
      <div className="divider absolute top-0 left-0 right-0" />
      <div className="container-site mb-8">
        <p className="text-center text-[12px] uppercase tracking-widest text-white/35">
          Работаем на базе ведущих нейросетей и встраиваемся в ваши системы
        </p>
      </div>
      <div className="space-y-6">
        <LogoRow items={models} />
        <TextRow items={integrations} />
      </div>
    </section>
  )
}
