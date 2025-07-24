'use client'

import { useEffect, useRef } from 'react'
import Globe from 'globe.gl'
import { generateDots } from '@/utils/generatedots'

export function AboutUs() {
  const globeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!globeRef.current) return

    const globe = new Globe(globeRef.current)
      .globeImageUrl('')
      .backgroundColor('#000')
      .showAtmosphere(false)
      .pointOfView({ lat: 20, lng: 0, altitude: 2 }, 0)

    // Add dots
    const dots = generateDots(1000)
    globe
      .pointsData(dots)
      .pointLat('lat')
      .pointLng('lng')
      .pointAltitude(0.01)
      .pointColor(() => '#a15fff')
      .pointRadius('size')
      .pointsMerge(true)

    // Auto-rotate
    globe.controls().autoRotate = true
    globe.controls().autoRotateSpeed = 0.6

    // Resize handling
    const resize = () => {
      globe.width(globeRef.current!.clientWidth)
      globe.height(globeRef.current!.clientHeight)
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <section className="w-full min-h-screen bg-black text-white px-6 md:px-12 lg:px-18 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-7xl">
          We provide high quality and affordable IT services
        </h1>
        <p className="text-gray-300 text-base md:hidden">
          We specialize in crafting mesmerizing web applications that don't break the bank. We deliver premium quality at accessible prices, because great design shouldn't be a luxury.
        </p>
      </div>

      {/* Globe Section */}
      <div className="md:w-1/2 w-full h-[300px] md:h-[500px] relative">
        <div ref={globeRef} className="w-full h-full" />
        <p className="text-gray-300 text-sm hidden md:block absolute bottom-0 left-0 right-0 px-4 text-center">
          We specialize in crafting mesmerizing web applications that don't break the bank. We deliver premium quality at accessible prices, because great design shouldn't be a luxury.
        </p>
      </div>
    </section>
  )
}
