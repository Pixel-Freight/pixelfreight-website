import * as React from 'react';
import { ScrollReveal } from '@/components/effects/scroll-reveal';


export function ContactHero() {
  return (
    <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
      <span className="text-purple-400 text-sm font-medium mb-4 tracking-widest block">
        connect with us
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-7xl mb-2 leading-tight">
        Let’s Build Something <br /> Great Together
      </h1>
    </ScrollReveal>
  );
}