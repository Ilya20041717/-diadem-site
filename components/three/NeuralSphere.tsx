'use client'
import { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import type { MotionValue } from 'framer-motion'

// Each logo appears once. Colors tuned to read on a dark background.
const LOGOS: { url: string; color: string }[] = [
  // Neural networks / AI
  { url: '/logos/openai.svg', color: '#10A37F' },
  { url: '/logos/claude.svg', color: '#D97757' },
  { url: '/logos/googlegemini.svg', color: '#4D8EF7' },
  { url: '/logos/deepseek.svg', color: '#4D6BFE' },
  { url: '/logos/perplexity.svg', color: '#20B8CD' },
  { url: '/logos/mistralai.svg', color: '#FA520F' },
  { url: '/logos/meta.svg', color: '#0866FF' },
  { url: '/logos/huggingface.svg', color: '#FFD21E' },
  { url: '/logos/ollama.svg', color: '#ECECEC' },
  { url: '/logos/elevenlabs.svg', color: '#E6E6E6' },
  { url: '/logos/replicate.svg', color: '#E6E6E6' },
  { url: '/logos/langchain.svg', color: '#4CC5B0' },
  { url: '/logos/githubcopilot.svg', color: '#E6E6E6' },
  { url: '/logos/suno.svg', color: '#E6E6E6' },
  { url: '/logos/nvidia.svg', color: '#76B900' },
  { url: '/logos/googlecolab.svg', color: '#F9AB00' },
  { url: '/logos/kaggle.svg', color: '#20BEFF' },
  // Integrations / services
  { url: '/logos/telegram.svg', color: '#26A5E4' },
  { url: '/logos/whatsapp.svg', color: '#25D366' },
  { url: '/logos/discord.svg', color: '#5865F2' },
  { url: '/logos/vk.svg', color: '#0077FF' },
  { url: '/logos/slack.svg', color: '#36C5F0' },
  { url: '/logos/notion.svg', color: '#ECECEC' },
  { url: '/logos/zapier.svg', color: '#FF4F00' },
  { url: '/logos/make.svg', color: '#A78BFA' },
  { url: '/logos/n8n.svg', color: '#EA4B71' },
  { url: '/logos/airtable.svg', color: '#18BFFF' },
  { url: '/logos/hubspot.svg', color: '#FF7A59' },
  { url: '/logos/stripe.svg', color: '#7A73FF' },
  { url: '/logos/figma.svg', color: '#F24E1E' },
  { url: '/logos/github.svg', color: '#E6E6E6' },
  { url: '/logos/wordpress.svg', color: '#4596D1' },
  { url: '/logos/trello.svg', color: '#4B9FFF' },
  { url: '/logos/gmail.svg', color: '#EA4335' },
  { url: '/logos/googlesheets.svg', color: '#34A853' },
  { url: '/logos/googledrive.svg', color: '#4796E3' },
  { url: '/logos/googledocs.svg', color: '#4285F4' },
  { url: '/logos/googlecalendar.svg', color: '#4285F4' },
  { url: '/logos/googleforms.svg', color: '#8E5BD9' },
]

const L = LOGOS.length
const FILL = 250 // extra glowing dots to make the assembled sphere dense
const TOTAL = FILL + L
const DIA_INDEX = L // a sphere node reserved for the Diadem brand mark
const MAX_EDGES = 150
const RADIUS = 2.6

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)
const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v)

function makeDotTexture() {
  const s = 64
  const c = document.createElement('canvas')
  c.width = c.height = s
  const ctx = c.getContext('2d')!
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2)
  g.addColorStop(0, 'rgba(255,255,255,1)')
  g.addColorStop(0.4, 'rgba(255,255,255,0.55)')
  g.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, s, s)
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

/** Rasterize an SVG logo and tint it with the given brand color. */
function makeLogoTexture(url: string, color: string) {
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')!
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  const img = new Image()
  img.onload = () => {
    const pad = size * 0.14
    ctx.clearRect(0, 0, size, size)
    ctx.drawImage(img, pad, pad, size - pad * 2, size - pad * 2)
    ctx.globalCompositeOperation = 'source-in'
    ctx.fillStyle = color
    ctx.fillRect(0, 0, size, size)
    ctx.globalCompositeOperation = 'source-over'
    tex.needsUpdate = true
  }
  img.src = url
  return tex
}

export default function NeuralSphere({
  progress,
  reduce,
}: {
  progress: MotionValue<number>
  reduce: boolean
}) {
  const group = useRef<THREE.Group>(null)
  const pointsRef = useRef<THREE.Points>(null)
  const pointsMat = useRef<THREE.PointsMaterial>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  const lineMat = useRef<THREE.LineBasicMaterial>(null)
  const spriteRefs = useRef<(THREE.Sprite | null)[]>([])
  const introStart = useRef(0)
  const drawRangeSet = useRef(false)
  const { camera } = useThree()

  // Diadem brand mark — orbits among the logos, then flies into the camera
  const diademRef = useRef<THREE.Sprite>(null)
  const diademMat = useRef<THREE.SpriteMaterial>(null)
  const diademTex = useTexture('/diadem-mark.png')

  const dotTex = useMemo(makeDotTexture, [])
  const logoTextures = useMemo(() => LOGOS.map((l) => makeLogoTexture(l.url, l.color)), [])

  const data = useMemo(() => {
    const assembled = new Float32Array(TOTAL * 3)
    const scattered = new Float32Array(TOTAL * 3)
    const colors = new Float32Array(TOTAL * 3)
    const golden = Math.PI * (3 - Math.sqrt(5))
    const tint = new THREE.Color()

    for (let i = 0; i < TOTAL; i++) {
      const y = 1 - (i / (TOTAL - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = golden * i
      const jitter = i < L ? 1 : 0.7 + Math.random() * 0.3
      assembled[i * 3] = Math.cos(theta) * r * RADIUS * jitter
      assembled[i * 3 + 1] = y * RADIUS * jitter
      assembled[i * 3 + 2] = Math.sin(theta) * r * RADIUS * jitter

      const su = Math.random() * 2 - 1
      const st = Math.random() * Math.PI * 2
      const sr = Math.sqrt(1 - su * su)
      const dist = 3.4 + Math.random() * 4.2
      scattered[i * 3] = Math.cos(st) * sr * dist
      // Bias the swarm downward so logos don't fly up behind the fixed header
      scattered[i * 3 + 1] = su * dist * 0.55 - 1.1
      scattered[i * 3 + 2] = Math.sin(st) * sr * dist

      // logo-node dots glow in their brand color, fillers silver-white
      if (i < L) tint.set(LOGOS[i].color)
      else tint.set('#cfd2e0')
      colors[i * 3] = tint.r
      colors[i * 3 + 1] = tint.g
      colors[i * 3 + 2] = tint.b
    }

    const edges: number[] = []
    const threshold = 0.62 * RADIUS
    outer: for (let i = 0; i < TOTAL; i++) {
      let made = 0
      for (let j = i + 1; j < TOTAL && made < 2; j++) {
        const dx = assembled[i * 3] - assembled[j * 3]
        const dy = assembled[i * 3 + 1] - assembled[j * 3 + 1]
        const dz = assembled[i * 3 + 2] - assembled[j * 3 + 2]
        if (dx * dx + dy * dy + dz * dz < threshold * threshold) {
          edges.push(i, j); made++
          if (edges.length / 2 >= MAX_EDGES) break outer
        }
      }
    }
    return {
      assembled, scattered, colors,
      edges: Int32Array.from(edges),
      edgeCount: edges.length / 2,
      linePos: new Float32Array(MAX_EDGES * 2 * 3),
    }
  }, [])

  const cur = useMemo(() => new Float32Array(TOTAL * 3), [])

  useFrame((state, delta) => {
    if (introStart.current === 0) introStart.current = state.clock.elapsedTime
    if (!drawRangeSet.current && linesRef.current) {
      linesRef.current.geometry.setDrawRange(0, data.edgeCount * 2)
      drawRangeSet.current = true
    }

    const scroll = clamp01(progress.get())
    const scrollDisperse = easeInOut(scroll)
    const introT = clamp01((state.clock.elapsedTime - introStart.current) / 1.8)
    const introDisperse = reduce ? 0 : 1 - easeInOut(introT)
    // Position spread: intro assembles, then scroll scatters
    const posDisperse = reduce ? 0 : Math.max(introDisperse, scrollDisperse)
    // Logos reveal only on scroll (so the initial sphere is pure dots)
    const reveal = reduce ? 0 : clamp01((scrollDisperse - 0.06) / 0.28)

    const { assembled, scattered, edges, edgeCount, linePos } = data
    for (let k = 0; k < TOTAL * 3; k++) {
      cur[k] = assembled[k] + (scattered[k] - assembled[k]) * posDisperse
    }

    if (pointsRef.current) {
      const attr = pointsRef.current.geometry.getAttribute('position') as THREE.BufferAttribute
      ;(attr.array as Float32Array).set(cur)
      attr.needsUpdate = true
    }
    if (pointsMat.current) pointsMat.current.opacity = 1 - reveal // dots fade as logos appear

    // Logos fade in at their node positions
    for (let i = 0; i < L; i++) {
      const s = spriteRefs.current[i]
      if (!s) continue
      s.position.set(cur[i * 3], cur[i * 3 + 1], cur[i * 3 + 2])
      ;(s.material as THREE.SpriteMaterial).opacity = reveal
      s.visible = reveal > 0.01
    }

    if (linesRef.current) {
      for (let e = 0; e < edgeCount; e++) {
        const a = edges[e * 2] * 3
        const b = edges[e * 2 + 1] * 3
        const o = e * 6
        linePos[o] = cur[a]; linePos[o + 1] = cur[a + 1]; linePos[o + 2] = cur[a + 2]
        linePos[o + 3] = cur[b]; linePos[o + 4] = cur[b + 1]; linePos[o + 5] = cur[b + 2]
      }
      const lattr = linesRef.current.geometry.getAttribute('position') as THREE.BufferAttribute
      ;(lattr.array as Float32Array).set(linePos)
      lattr.needsUpdate = true
    }
    if (lineMat.current) lineMat.current.opacity = 0.18 * (1 - posDisperse)

    if (group.current) {
      group.current.rotation.y += reduce ? 0 : delta * (0.07 + posDisperse * 0.1)
      group.current.rotation.x = reduce ? 0 : Math.sin(state.clock.elapsedTime * 0.12) * 0.05
    }

    const targetZ = 6.6 + posDisperse * 1.4
    camera.position.z += (targetZ - camera.position.z) * Math.min(1, delta * 3)
    camera.lookAt(0, 0, 0)

    // Diadem mark: just another node — orbits and scatters among the logos
    if (diademRef.current) {
      const i = DIA_INDEX
      diademRef.current.position.set(cur[i * 3], cur[i * 3 + 1], cur[i * 3 + 2])
      const op = reduce ? 1 : reveal
      diademRef.current.visible = op > 0.01
      if (diademMat.current) diademMat.current.opacity = op
    }
  })

  return (
    <group ref={group} position={[0, -0.7, 0]}>
      {/* Glowing dots — the initial sphere */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[data.assembled.slice(), 3]} />
          <bufferAttribute attach="attributes-color" args={[data.colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={pointsMat}
          map={dotTex}
          size={0.14}
          sizeAttenuation
          vertexColors
          transparent
          opacity={1}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Colored logos that emerge as the dots scatter */}
      {LOGOS.map((_, i) => (
        <sprite
          key={i}
          ref={(el) => { spriteRefs.current[i] = el }}
          scale={[0.6, 0.6, 1]}
          visible={false}
        >
          <spriteMaterial
            map={logoTextures[i]}
            transparent
            opacity={0}
            depthWrite={false}
            depthTest={false}
          />
        </sprite>
      ))}

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[data.linePos, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          ref={lineMat}
          color={'#8e8cf0'}
          transparent
          opacity={0.16}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Diadem brand mark — just another node, orbiting among the logos */}
      <sprite ref={diademRef} scale={[0.85, 0.85, 1]} visible={false}>
        <spriteMaterial
          ref={diademMat}
          map={diademTex}
          transparent
          opacity={0}
          depthWrite={false}
          depthTest={false}
        />
      </sprite>
    </group>
  )
}
