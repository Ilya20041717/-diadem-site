'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import type { MotionValue } from 'framer-motion'
import NeuralSphere from './three/NeuralSphere'

export default function HeroScene({
  progress,
  reduce,
}: {
  progress: MotionValue<number>
  reduce: boolean
}) {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 6.5], fov: 50 }}
    >
      <Suspense fallback={null}>
        <NeuralSphere progress={progress} reduce={reduce} />
      </Suspense>
    </Canvas>
  )
}
