"use client";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutCTA() {
  return (
    <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
      <section className="relative w-full bg-gradient-to-b from-[#111111] via-[#151515] to-[#1e1e1e] text-white px-6 md:px-12 lg:px-24 py-32 border-t border-white/10 overflow-hidden text-center">
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            Let’s Create Something Extraordinary
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Whether it’s a website, application, or game — we’re ready to bring
            your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/connect"
              className="inline-flex items-center justify-center gap-2 bg-[#7443f4] hover:bg-[#8658ff] transition-colors px-8 py-4 text-lg font-medium text-white"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(116,67,244,0.15)_0%,transparent_70%)] pointer-events-none" />
      </section>
    </ScrollReveal>
  );
}
