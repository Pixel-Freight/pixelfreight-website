"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { aboutPhotos } from "./data";

export function LittleStoriesAbout() {
  const [index, setIndex] = useState(0);

  // Auto-rotate photos every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % aboutPhotos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = aboutPhotos[index];

  return (
    <section
      id="about"
      className="relative isolate flex flex-col md:flex-row min-h-screen overflow-hidden"
    >
      {/* Left - full background photo */}
      <div className="relative flex-2 h-[60vh] md:h-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={current.description}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Optional gradient overlay for better balance */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
      </div>

      {/* Right - text panel */}
      <div className="flex-3 bg-[#3a372f] text-[#f5f1eb] flex items-center">
        <div className="relative z-10 mx-24 flex max-w-6xl flex-col gap-10 px-6 md:px-10 lg:px-12 py-24">
          <div className="max-w-lg space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-xs uppercase tracking-[0.35em] text-[#d4cfc6]/80"
            >
              Behind the lens
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="font-serif text-5xl md:text-6xl leading-tight"
            >
              Little Stories Studio
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base leading-relaxed text-[#d4cfc6] md:text-lg"
            >
              Dedicated to capturing timeless, editorial wedding moments
              blending sincerity and style into every frame. Each story is
              approached with calm direction, film-inspired tonality, and an
              appreciation for honest emotion.
            </motion.p>

            <motion.a
              href="#gallery"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="inline-block mt-2 border-b border-[#d4cfc6]/60 text-sm uppercase tracking-[0.25em] text-[#d4cfc6] hover:text-[#ffffff] hover:border-[#ffffff] transition-colors"
            >
              Learn More
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
