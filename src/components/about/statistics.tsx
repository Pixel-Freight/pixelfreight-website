"use client";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { motion } from "framer-motion";

export function AboutStats() {
  const stats = [
    { num: 5, suffix: "+", label: "Years of combined experience" },
    { num: 10, suffix: "+", label: "Projects delivered" },
    { num: 98, suffix: "%", label: "Positive feedback" },
  ];

  return (
    <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
      <section className="w-full bg-[#1e1e1e] text-white px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-white/10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
            What We’ve Done
          </h2>
          <p className="text-white/70 text-lg max-w-2xl">
            Our experience spans design, development, and deployment — backed by
            years of practical craft.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 text-center">
          {stats.map(({ num, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1e1e1e] p-10"
            >
              <div className="text-5xl font-bold text-[#7443f4]">
                {num}
                {suffix}
              </div>
              <p className="text-white/70 text-sm mt-2">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
