"use client";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { SiInstagram } from "react-icons/si";

export function AboutConnect() {
  return (
    <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
      <section className="w-full bg-[#1e1e1e] text-white px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-white/10 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          Connect With Us
        </h2>
        <p className="text-white/70 text-lg mb-10">
          Follow our journey and see what we’re creating next.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="https://www.instagram.com/freightpx/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/70 hover:text-[#7443f4] transition-colors"
          >
            <SiInstagram className="w-6 h-6" />
            <span>@freightpx</span>
          </a>

          <a
            href="mailto:hello@freightpx.com"
            className="text-white/70 hover:text-[#7443f4] transition-colors"
          >
            hello@freightpx.com
          </a>
        </div>
      </section>
    </ScrollReveal>
  );
}
