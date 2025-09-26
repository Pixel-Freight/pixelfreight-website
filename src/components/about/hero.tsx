import * as React from 'react';
import { ScrollReveal } from '@/components/effects/scroll-reveal';

export function AboutHero() {
  return (
    <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
      <section className="relative bg-[#181818] py-24 md:py-36 min-h-[60vh] w-full overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-16">
            <div className="w-full md:w-1/2">
              <span className="text-xs md:text-sm font-mono text-[#a78bfa] tracking-widest uppercase block mb-4">
                Our Story, Your Success
              </span>
              <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-8 md:mb-0">
                From Idea to Impact. Your Vision, Realized.
              </h1>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-16">
            <div className="w-full md:w-1/2">
            </div>
            <div className="w-full md:w-1/2 flex md:justify-end mt-8 md:mt-0">
              <p className="text-xs md:text-sm text-right text-white/80 max-w-md font-mono">
                We&apos;re a collective of thinkers, creators, and problem-solvers dedicated to bridging the gap between a powerful vision and a remarkable reality. We exist to build what&apos;s next, together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
