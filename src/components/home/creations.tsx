'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export function Creations() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const rendererRef = {
      current: new THREE.WebGLRenderer({ antialias: true, alpha: true })
    }

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / 500, 0.1, 1000)
    camera.position.set(0, 20, 40)

    rendererRef.current.setSize(window.innerWidth, 500)
    mountRef.current.appendChild(rendererRef.current.domElement)

    const controls = new OrbitControls(camera, rendererRef.current.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.4
    controls.target.set(0, 0, 0)

    // Terrain config
    const rows = 50
    const cols = 50
    const spacing = 1.5

    const group = new THREE.Group()

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = (col - cols / 2) * spacing
        const z = (row - rows / 2) * spacing

        // Multi-octave fake noise
        let y = 0
        let amplitude = 5
        let frequency = 0.1
        for (let o = 0; o < 4; o++) {
          const nx = x * frequency + o * 10
          const nz = z * frequency + o * 10
          y += (Math.sin(nx) * Math.cos(nz * 1.3) + 1) * 0.5 * amplitude
          amplitude *= 0.4
          frequency *= 2
        }
        y += (Math.random() - 0.5) * 0.5 // random offset

        const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1)
        const material = new THREE.MeshBasicMaterial({ color: '#7443f4' })
        const dot = new THREE.Mesh(geometry, material)

        dot.position.set(x, y, z)
        group.add(dot)
      }
    }

    scene.add(group)

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      rendererRef.current.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / 500
      camera.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, 500)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current && rendererRef.current.domElement) {
        rendererRef.current.dispose()
        if (mountRef.current.contains(rendererRef.current.domElement)) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          mountRef.current.removeChild(rendererRef.current.domElement)
        }
      }
    }
  }, [])

  return (
    <section className="w-full min-h-screen bg-black text-white px-6 md:px-12 lg:px-18 py-20 flex flex-col gap-12">
      {/* Text Section */}
      <div className="w-full text-right space-y-6">
        <h1 className="text-4xl md:text-7xl text-[#7443f4]">CREATIONS</h1>
        <p className="text-white text-base">
          LANDING PAGE / WEB-APP / CMS / DATABASE
        </p>
      </div>

      {/* Terrain Canvas */}
      <div ref={mountRef} className="w-full flex justify-center items-center" />
    </section>
  )
}
