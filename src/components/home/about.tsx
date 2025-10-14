"use client";

import { ScrollReveal } from "@/components/effects/scroll-reveal";
import Globe from "@/components/ui/globe";
import { motion } from "framer-motion";
import { LucideBolt, LucideMessageSquare, LucideWrench } from "lucide-react";

interface AboutUsProps {
  enable3D?: boolean;
}

export function AboutUs({ enable3D = true }: AboutUsProps) {
  const values = [
    {
      icon: LucideBolt,
      title: "Small Team, Big Results",
      desc: "You work directly with us — no layers, no delays.",
    },
    {
      icon: LucideMessageSquare,
      title: "Transparent Process",
      desc: "Clear scope, timeline, and pricing from day one.",
    },
    {
      icon: LucideWrench,
      title: "Built for Growth",
      desc: "Clean, scalable code ready for your next step.",
    },
  ];

  return (
    <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
      <section className="w-full min-h-screen bg-background text-foreground px-6 md:px-12 lg:px-24 py-20 md:py-32 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        {/* Text Section */}
        <div className="w-full md:w-1/2 lg:w-2/5 space-y-8 text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              We make it easy to build something great.
            </h2>
            <p className="text-muted-foreground text-lg">
              We handle design, code, and deployment. So you can focus on your
              idea.
            </p>
          </div>

          {/* Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-6 mt-10">
            {values.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 border border-background bg-card/50 hover:border-primary/40 backdrop-blur-sm text-left"
              >
                <Icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-1">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Globe Section */}
        <div className="relative w-full md:w-1/2 lg:w-3/5 flex items-center justify-center h-[320px] sm:h-[400px] md:h-[520px] lg:h-[600px] xl:h-[680px]">
          {enable3D ? (
            <Globe
              className="w-full h-full max-w-[680px]"
              theta={0.35}
              dark={0.85}
              scale={1.2}
              diffuse={1.5}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-background/50 rounded-2xl flex items-center justify-center">
              <p className="text-muted-foreground text-center p-4">
                3D Globe Disabled
              </p>
            </div>
          )}
        </div>
      </section>
    </ScrollReveal>
  );
}
