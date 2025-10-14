"use client";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGo,
  SiFigma,
  SiSteam,
} from "react-icons/si";
import { motion } from "framer-motion";

export function TrustStrip() {
  const icons = [
    { Icon: SiReact, label: "React" },
    { Icon: SiNextdotjs, label: "Next.js" },
    { Icon: SiNodedotjs, label: "Node.js" },
    { Icon: SiGo, label: "Go" },
    { Icon: SiFigma, label: "Figma" },
  ];

  return (
    <section className=" bg-background backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 flex flex-col items-center gap-1">
        <p className="text-4xl md:text-5xl font-bold tracking-tight text-center pb-4">
          Powered by modern technologies
        </p>
        <p className="text-base md:text-lg leading-relaxed text-center pb-12">
          Trusted by creators and startups.
        </p>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {icons.map(({ Icon, label }) => (
            <div
              key={label}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              title={label}
            >
              <Icon className="w-8 h-8 md:w-10 md:h-10" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
