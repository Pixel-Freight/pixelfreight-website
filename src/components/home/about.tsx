'use client'
import { ScrollReveal } from '@/components/effects/scroll-reveal';
import Globe from '@/components/ui/globe';

interface AboutUsProps {
  enable3D?: boolean;
}

export function AboutUs({ enable3D = true }: AboutUsProps) {

  return (
    <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
      <section className="w-full min-h-screen bg-black text-white px-4 sm:px-8 md:px-12 lg:px-24 py-16 md:py-24 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-4 md:space-y-6 w-full md:w-1/2 lg:w-2/5 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            We provide high quality and affordable IT services
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed md:hidden">
            We specialize in crafting mesmerizing web applications that don&apos;t break the bank. We deliver premium quality at accessible prices, because great design shouldn&apos;t be a luxury.
          </p>
          <p className="text-gray-300 hidden md:block text-base md:text-lg leading-relaxed">
            We specialize in crafting mesmerizing web applications that don&apos;t break the bank. We deliver premium quality at accessible prices, because great design shouldn&apos;t be a luxury.
          </p>
        </div>

        {/* Globe Section */}
        <div className="relative w-full md:w-1/2 lg:w-3/5 flex items-center justify-center h-[320px] sm:h-[380px] md:h-[520px] lg:h-[600px] xl:h-[680px]">
          {enable3D ? (
            <Globe
              className="w-full h-full max-w-[680px]"
              theta={0.35}
              dark={0.85}
              scale={1.2}
              diffuse={1.5}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-black/50 rounded-2xl flex items-center justify-center">
              <p className="text-gray-400 text-center p-4">3D Globe Disabled</p>
            </div>
          )}
        </div>
      </section>
    </ScrollReveal>
  )
}