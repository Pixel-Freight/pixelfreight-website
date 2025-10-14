"use client";

import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { PenTool, Monitor, Server, Cloud, Gauge, Plug } from "lucide-react";

export function CapabilitiesGrid() {
  const capabilities = [
    {
      icon: PenTool,
      title: "UI / UX Design",
      desc: "Modern, conversion-focused design systems and intuitive interfaces built in Figma.",
    },
    {
      icon: Monitor,
      title: "Frontend Development",
      desc: "Responsive, fast, and elegant interfaces using React, Next.js, and Tailwind.",
    },
    {
      icon: Server,
      title: "Backend Development",
      desc: "APIs, databases, and automation built for scalability with Node.js and Go.",
    },
    {
      icon: Plug,
      title: "System Integration",
      desc: "We connect APIs, services, and automation tools so your product works seamlessly across platforms.",
    },
    {
      icon: Cloud,
      title: "Infrastructure & Deployment",
      desc: "Continuous delivery pipelines and hosting built for reliability — powered by Vercel, Docker, and Railway.",
    },
    {
      icon: Gauge,
      title: "Optimization & Maintenance",
      desc: "We monitor, optimize, and support your product post-launch for long-term performance.",
    },
  ];

  return (
    <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
      <section className="w-full bg-[#1e1e1e] text-white px-6 md:px-12 lg:px-24 py-24 md:py-32 ">
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
            Our Core Capabilities
          </h2>
          <p className="text-white/70 text-lg max-w-xl">
            We cover every layer of web development — from concept and design to
            infrastructure and performance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {capabilities.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-[#1e1e1e] border border-transparent hover:border-[#7443f4]/70 transition-all p-10 flex flex-col items-start justify-start"
            >
              <Icon className="w-8 h-8 text-[#7443f4] mb-6 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
