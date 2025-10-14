"use client";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { PenTool, Cpu, Compass } from "lucide-react";

export function AboutPhilosophy() {
  const values = [
    {
      icon: PenTool,
      title: "Design with Purpose",
      desc: "Every interface is intentional — crafted for clarity and emotion.",
    },
    {
      icon: Cpu,
      title: "Engineered for Performance",
      desc: "Clean, scalable code designed for speed, stability, and longevity.",
    },
    {
      icon: Compass,
      title: "Driven by Curiosity",
      desc: "We constantly explore new ideas and technologies to evolve our craft.",
    },
  ];

  return (
    <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
      <section className="w-full bg-[#1e1e1e] text-white px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-white/10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
            Our Philosophy
          </h2>
          <p className="text-white/70 text-lg max-w-2xl">
            Freight Pixel is built on clarity, precision, and creativity —
            blending design thinking with technical execution to craft products
            that feel effortless and built to last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#1e1e1e] border border-transparent hover:border-[#7443f4]/70 transition-all p-10"
            >
              <Icon className="w-8 h-8 text-[#7443f4] mb-6" />
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
