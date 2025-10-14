"use client";

import * as React from "react";
import { ScrollReveal } from "@/components/effects/scroll-reveal";

export function ContactHero() {
  return (
    <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
      <section className="relative w-full min-h-[60vh] bg-[#181818] flex flex-col items-start justify-center px-6 md:px-12 lg:px-24 py-32 border-b border-white/10 overflow-hidden">
        {/* Subtle animated grid background */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.5] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:32px_32px]"
        />
        {/* Soft vignette */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_70%,rgba(0,0,0,0.8)_100%)]" />

        {/* Content */}
        <div className="relative max-w-4xl z-10">
          <span className="text-[#7443f4] text-sm md:text-base font-mono uppercase tracking-widest mb-6 block">
            Connect with us
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6">
            Let’s Build Something <br /> Great Together
          </h1>

          <p className="text-white/70 text-base md:text-lg max-w-2xl">
            Whether it’s a website, an app, or a creative project — we’d love to
            hear from you. Let’s collaborate and bring your ideas to life.
          </p>
        </div>
      </section>
    </ScrollReveal>
  );
}
