"use client";

import { ScrollReveal } from "@/components/effects/scroll-reveal";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiVercel,
  SiGithub,
  SiFigma,
  SiUnity,
  SiVuedotjs,
} from "react-icons/si";
import { motion } from "framer-motion";

export function TechStackMarquee() {
  const stack = [
    {
      category: "Frontend",
      icons: [SiReact, SiNextdotjs, SiVuedotjs, SiTypescript, SiTailwindcss],
      duration: 20,
      direction: "left",
    },
    {
      category: "Backend",
      icons: [SiNodedotjs, SiGo, SiPostgresql, SiMongodb, SiFirebase],
      duration: 24,
      direction: "right",
    },
    {
      category: "Tools & Platforms",
      icons: [SiDocker, SiVercel, SiGithub, SiFigma, SiUnity],
      duration: 28,
      direction: "left",
    },
  ];

  return (
    <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
      <section className="relative w-full bg-[#1e1e1e] text-white px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-white/10 overflow-hidden">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          {/* Left Column - Text */}
          <div className="w-full md:w-1/3 space-y-6 sticky top-24 self-start pb-24 sm:pb-0">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
              Our Technology Stack
            </h2>
            <p className="text-white/70 text-lg max-w-md">
              We build with proven technologies — tools that empower
              performance, stability, and creative freedom.
            </p>
          </div>

          {/* Right Column - Marquee Strips */}
          <div className="w-full md:w-2/3 flex flex-col gap-12 relative overflow-hidden">
            {stack.map(({ category, icons, duration, direction }, i) => (
              <div key={category} className="flex flex-col gap-6">
                <h3 className="text-sm font-mono tracking-widest text-[#7443f4]/90 uppercase">
                  {category}
                </h3>

                {/* Marquee Row */}
                <div className="relative overflow-hidden">
                  {/* Fade mask on edges */}
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#1e1e1e] via-transparent to-[#1e1e1e]" />

                  <motion.div
                    className="flex gap-10"
                    animate={{
                      x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
                    }}
                    transition={{
                      ease: "linear",
                      duration,
                      repeat: Infinity,
                    }}
                  >
                    {[...icons, ...icons].map((Icon, idx) => (
                      <div
                        key={`${category}-${idx}`}
                        className="group flex flex-col items-center justify-center w-20"
                      >
                        <Icon className="w-10 h-10 text-white/70 group-hover:text-[#7443f4] transition-colors duration-300" />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
