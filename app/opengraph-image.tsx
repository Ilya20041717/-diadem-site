import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Diadem — AI Automation Platform'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(120% 120% at 50% 0%, #1a1530 0%, #0A0A0A 60%)',
          color: '#fff',
        }}
      >
        <div
          style={{
            fontSize: 104,
            fontWeight: 700,
            letterSpacing: 24,
            paddingLeft: 24,
            background: 'linear-gradient(120deg,#ffffff,#ead9b3,#ABA9A1)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          DIADEM
        </div>
        <div style={{ fontSize: 30, letterSpacing: 8, color: '#ABA9A1', marginTop: 8 }}>
          AI AUTOMATION PLATFORM
        </div>
        <div style={{ fontSize: 26, color: 'rgba(255,255,255,0.55)', marginTop: 40 }}>
          Telegram-bots · AI managers · CRM integrations · 24/7
        </div>
      </div>
    ),
    { ...size }
  )
}
