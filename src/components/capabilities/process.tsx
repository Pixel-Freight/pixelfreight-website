"use client";

import { motion, Variants } from "framer-motion";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

export function ProcessScrollReveal() {
  const steps = [
    {
      id: "01",
      icon: Search,
      title: "Discover",
      desc: "We start by understanding your goals, audience, and the challenges your product solves.",
    },
    {
      id: "02",
      icon: PenTool,
      title: "Design",
      desc: "We create clear, intuitive interfaces that balance aesthetics with usability.",
    },
    {
      id: "03",
      icon: Code2,
      title: "Build",
      desc: "We write clean, scalable code to bring your design to life across devices.",
    },
    {
      id: "04",
      icon: Rocket,
      title: "Launch & Support",
      desc: "We deploy, monitor, and optimize your product for long-term success.",
    },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
      <section className="relative w-full bg-black text-white px-6 md:px-12 lg:px-24 py-32 overflow-hidden">
        {/* Section Heading */}
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            How We Work
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            A streamlined process focused on clarity, quality, and
            collaboration.
          </p>
        </div>

        {/* Animated Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative flex flex-col gap-24 max-w-4xl mx-auto"
        >
          {steps.map(({ id, icon: Icon, title, desc }) => (
            <motion.div
              key={id}
              variants={item}
              className="relative flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              {/* Number + Icon */}
              <div className="flex items-center gap-4 w-full md:w-1/3">
                <div className="flex-shrink-0 w-12 h-12 border border-[#7443f4]/50 text-[#7443f4] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-mono text-white/60">{id}</span>
              </div>

              {/* Text */}
              <div className="w-full md:w-2/3">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                  {title}
                </h3>
                <p className="text-white/70 text-base leading-relaxed max-w-lg">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </ScrollReveal>
  );
}
