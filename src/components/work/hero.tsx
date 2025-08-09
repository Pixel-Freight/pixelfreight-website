import * as React from 'react';
import { ScrollReveal } from '@/components/effects/scroll-reveal';
import { SplitTextReveal } from '@/components/effects/split-text-reveal';

export function WorkHero() {
  return (
    <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
      <section className="relative bg-[#181818] py-24 md:py-36 min-h-[60vh] w-full overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-16">
            <div className="w-full md:w-1/2">
              <span className="text-xs md:text-sm font-mono text-[#a78bfa] tracking-widest uppercase block mb-4">
                <SplitTextReveal>
                  From Vision to Execution
                </SplitTextReveal>
              </span>
              <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-8 md:mb-0">
                <SplitTextReveal>
                  We Deliver
                </SplitTextReveal>
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
                <SplitTextReveal>
                  Every project we take on is a blend of thoughtful design, smart development, and client collaboration.
                </SplitTextReveal>
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
