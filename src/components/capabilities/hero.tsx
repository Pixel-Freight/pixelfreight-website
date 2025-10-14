"use client";

import * as React from "react";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { motion } from "framer-motion";

export function CapabilitiesHero() {
  return (
    <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Animated grid background */}
        <motion.div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.5]"
          style={{
            // Two layered linear-gradients to draw a square grid
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px)," +
              "linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px, 64px 64px",
            backgroundPosition: "0px 0px, 0px 0px",
          }}
          animate={{
            // Slow drift to keep it “alive” without being distracting
            backgroundPosition: ["0px 0px, 0px 0px", "16px 16px, 16px 16px"],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Soft vignette to focus center content (no “glow”, just a dark fade) */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_65%,rgba(0,0,0,0.6)_100%)]" />

        {/* Bottom gradient blend to the page background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[#1e1e1e]" />

        {/* Content */}
        <div className="relative container mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-start justify-center min-h-[60vh] space-y-6 z-10">
          <span className="text-xs md:text-sm font-mono tracking-widest text-[#7443f4]/90 uppercase">
            Building the web with precision and creativity
          </span>

          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
            What We Do Best
          </h1>

          {/* Accent line */}
          <div className="h-[2px] w-20 bg-[#7443f4]/80"></div>

          <p className="text-white/70 text-base md:text-lg max-w-2xl">
            Freight Pixel delivers complete digital experiences — from frontend
            to backend, powered by modern tools and clean design.
          </p>
        </div>
      </section>
    </ScrollReveal>
  );
}
