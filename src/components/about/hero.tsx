"use client";
import { ScrollReveal } from "@/components/effects/scroll-reveal";

export function AboutHero() {
  return (
    <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
      <section className="relative bg-[#181818] py-32 md:py-40 min-h-[60vh] w-full overflow-hidden border-b border-white/10">
        {/* Animated grid background */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.5] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:32px_32px]"
        />

        <div className="relative container mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-start justify-center min-h-[60vh] space-y-6 z-10">
          <span className="text-xs md:text-sm font-mono tracking-widest text-[#7443f4]/90 uppercase">
            Craft Meets Code
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
            We turn ideas into digital reality.
          </h1>
          <div className="h-[2px] w-20 bg-[#7443f4]/80" />
          <p className="text-white/70 text-base md:text-lg max-w-2xl">
            Freight Pixel is an independent studio creating fast, beautiful, and
            scalable digital experiences — where design meets engineering.
          </p>
        </div>
      </section>
    </ScrollReveal>
  );
}
