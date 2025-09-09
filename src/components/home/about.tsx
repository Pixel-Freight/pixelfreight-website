'use client'
import { ScrollReveal } from '@/components/effects/scroll-reveal';
import Globe from '@/components/ui/globe';

interface AboutUsProps {
  enable3D?: boolean;
}

export function AboutUs({ enable3D = true }: AboutUsProps) {

  return (
    <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
      <section className="w-full min-h-screen bg-black text-white px-6 md:px-12 lg:px-18 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6 basis-1/2 xl:basis-1/3">
          <h1 className="text-4xl md:text-5xl lg:text-7xl">
            We provide high quality and affordable IT services
          </h1>
          <p className="text-gray-300 text-base md:hidden">
            We specialize in crafting mesmerizing web applications that don&apos;t break the bank. We deliver premium quality at accessible prices, because great design shouldn&apos;t be a luxury.
          </p>
        </div>

        {/* Globe Section */}
        <div className="md:w-1/2 w-full h-[300px] md:h-[500px] relative basis-1/2 xl:basis-1/3">
          {enable3D ? (
            <Globe/>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-black/50 rounded-lg flex items-center justify-center">
              <p className="text-gray-400 text-center p-4">3D Globe Disabled</p>
            </div>
          )}
          <p className="text-gray-300 hidden md:block absolute bottom-0 left-0 right-0 px-4 text-center md:text-right">
            We specialize in crafting mesmerizing web applications that don&apos;t break the bank. We deliver premium quality at accessible prices, because great design shouldn&apos;t be a luxury.
          </p>
        </div>
      </section>
    </ScrollReveal>
  )
}