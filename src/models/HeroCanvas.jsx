import React, { useRef, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Float, ContactShadows, Environment, Html } from '@react-three/drei'
import * as THREE from 'three'

/* ── Model (provided spec) ─────────────────────────────── */
function Model(props) {
  const { nodes, materials } = useGLTF('/muscular_bodybuilder_boxing_fighter.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material_0}
        rotation={[Math.PI / -110, -2, 0]}
      />
    </group>
  )
}
useGLTF.preload('/muscular_bodybuilder_boxing_fighter.glb')

/* ── Fallback placeholder (when model isn't loaded) ─────── */
function FallbackFighter(props) {
  const mesh = useRef()
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.4
    }
  })
  return (
    <group {...props}>
      {/* Torso */}
      <mesh ref={mesh} castShadow>
        <cylinderGeometry args={[0.4, 0.35, 1.2, 16]} />
        <meshStandardMaterial color="#222" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 1, 0]} castShadow>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#333" metalness={0.5} roughness={0.5} />
      </mesh>
      {/* Left Arm */}
      <mesh position={[-0.65, 0.2, 0]} rotation={[0, 0, -0.5]} castShadow>
        <cylinderGeometry args={[0.12, 0.1, 0.9, 12]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Right Arm */}
      <mesh position={[0.65, 0.2, 0]} rotation={[0, 0, 0.5]} castShadow>
        <cylinderGeometry args={[0.12, 0.1, 0.9, 12]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Legs */}
      <mesh position={[-0.2, -1.1, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.12, 1.0, 12]} />
        <meshStandardMaterial color="#111" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[0.2, -1.1, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.12, 1.0, 12]} />
        <meshStandardMaterial color="#111" metalness={0.5} roughness={0.5} />
      </mesh>
    </group>
  )
}

/* ── Scene wrapper with scroll animation ───────────────── */
function Scene({ scrollProgress, isMobile }) {
  const groupRef = useRef()
  const lightRef = useRef()
  const { camera } = useThree()

  useFrame((state) => {
    const t = state.clock.elapsedTime

    if (isMobile) {
      if (groupRef.current) {
        groupRef.current.rotation.y = t * 0.3
      }
      return
    }

    // Scroll-based animation
    const sp = scrollProgress

    if (groupRef.current) {
      // Slow rotation based on time + scroll
      groupRef.current.rotation.y = t * 0.25 + sp * Math.PI * 1.5
      // Float effect
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.08 - sp * 0.3
      // Punch lean
      groupRef.current.rotation.z = Math.sin(t * 1.2) * 0.03
    }

    // Camera zoom on scroll
    camera.position.z = 4.5 - sp * 1.2
    camera.position.y = 12.5 + sp * 0.3
    camera.lookAt(0, 0.5, 0)

    // Dynamic light
    if (lightRef.current) {
      lightRef.current.intensity = 2 + Math.sin(t * 2) * 0.5 + sp * 1.5
      lightRef.current.position.x = Math.sin(t * 0.5) * 3
    }
  })

  return (
    <>
      {/* Ambient */}
      <ambientLight intensity={0.4} />

      {/* Key Light — warm orange/red (gym energy) */}
      <pointLight ref={lightRef} position={[3, 3, 3]} intensity={2.5} color="#ff6b00" distance={20} />

      {/* Fill light — cool contrast */}
      <pointLight position={[-3, 2, -2]} intensity={1.2} color="#4040ff" distance={15} />

      {/* Rim light — hard edge highlight */}
      <spotLight
        position={[0, 8, -3]}
        intensity={3}
        color="#ffffff"
        angle={0.3}
        penumbra={0.8}
        castShadow
      />

      {/* Ground glow */}
      <pointLight position={[0, -2, 0]} intensity={0.5} color="#e8230a" distance={5} />

      <Suspense fallback={
        <Html center>
          <div style={{ color: 'var(--accent-orange)', fontFamily: 'var(--font-display)', letterSpacing: '2px', fontSize: '14px', textAlign: 'center' }}>
            <div style={{ marginBottom: '8px' }}>⚡</div>
            LOADING MODEL...
          </div>
        </Html>
      }>
        <Float
          speed={isMobile ? 0 : 1.5}
          rotationIntensity={isMobile ? 0 : 0.3}
          floatIntensity={isMobile ? 0 : 0.4}
        >
          <group ref={groupRef} position={[0, 0, 0]} scale={isMobile ? 1.2 : 1.5}>
            <Model />
          </group>
        </Float>
      </Suspense>

      <ContactShadows
        position={[0, -2.2, 0]}
        opacity={0.5}
        scale={8}
        blur={2}
        color="#e8230a"
      />
    </>
  )
}

/* ── ModelErrorBoundary ─────────────────────────────────── */
class ModelErrorBoundary extends React.Component {
  state = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true } }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          width: '100%', height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', gap: '16px',
        }}>
          <div style={{ fontSize: '80px', animation: 'float 3s ease-in-out infinite' }}>🥊</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '3px', color: 'var(--accent-orange)' }}>
            FIGHTER AWAITS
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-ui)', textAlign: 'center', maxWidth: '200px' }}>
            Place the .glb model in /public folder to activate
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

/* ── Main HeroCanvas export ─────────────────────────────── */
export default function HeroCanvas() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = window.innerHeight
      setScrollProgress(Math.min(scrollY / maxScroll, 1))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ModelErrorBoundary>
      <Canvas
        shadows
        camera={{ position: [6, 10, 5], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)}
      >
        <Scene scrollProgress={scrollProgress} isMobile={isMobile} />
      </Canvas>
    </ModelErrorBoundary>
  )
}
