"use client";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

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
            <Button
              variant="linkblock"
              size="lg"
              className="gap-2 group"
              as="link"
              href="/connect"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(116,67,244,0.15)_0%,transparent_70%)] pointer-events-none" />
      </section>
    </ScrollReveal>
  );
}
