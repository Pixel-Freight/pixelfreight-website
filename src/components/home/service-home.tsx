"use client";

import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { Button } from "../ui/button";
import { Monitor, Layers, Server, Cloud } from "lucide-react";

export function ServiceHome() {
  const services = [
    {
      icon: Monitor,
      title: "Website Development",
      desc: "Fast, modern, mobile-first sites tailored to your brand.",
    },
    {
      icon: Layers,
      title: "Web Applications",
      desc: "Dashboards, booking systems, and tools built for performance.",
    },
    {
      icon: Server,
      title: "Backend Development",
      desc: "APIs, automation, and data logic that keep everything running.",
    },
    {
      icon: Cloud,
      title: "Hosting & Maintenance",
      desc: "Secure deployment and reliable support for your live product.",
    },
  ];

  return (
    <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
      <section className="w-full bg-black text-foreground px-6 md:px-12 lg:px-24 py-24 md:py-32">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Our Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            We design and develop websites, apps, and backend systems that
            perform beautifully and scale easily.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-black p-10 flex flex-col justify-start items-start border border-transparent hover:border-primary/60 transition-colors duration-300"
            >
              <Icon className="w-8 h-8 text-primary mb-6 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <Button
            variant="linkblock"
            size="lg"
            className="gap-2 group"
            as="link"
            href="/web"
          >
            See Full Capabilities
          </Button>
        </div>
      </section>
    </ScrollReveal>
  );
}
