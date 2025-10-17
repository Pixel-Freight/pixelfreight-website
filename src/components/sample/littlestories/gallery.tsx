"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { littleStoriesPhotos } from "./data";
import "./seriffont.css";

export function LittleStoriesGallery() {
  const photos = useMemo(() => littleStoriesPhotos, []);

  return (
    <section
      id="gallery"
      className="relative bg-[#e9e5de] py-32 text-[#2c2c2c] overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(178,166,147,0.25),_transparent_60%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 md:px-10 lg:px-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <h2 className="font-tnri text-5xl md:text-6xl text-[#2c2c2c]">
            Stories in Light
          </h2>
          <p className="text-[#5b5149] text-base md:text-lg max-w-2xl mx-auto">
            A gentle curation of moments that move — soft, timeless, and true.
          </p>
        </header>

        {/* Photo grid */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {photos.map((photo, index) => {
            const randomDelay = (index % 5) * 1.5; // offset start time for variety
            const randomDuration = 10 + (index % 4) * 2; // vary motion duration

            return (
              <motion.figure
                key={photo.id}
                initial={{ opacity: 0, scale: 1.02 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="group relative overflow-hidden border border-[#b2a693]/40 bg-[#f5f1eb]"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: randomDuration,
                    delay: randomDelay,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="relative h-96 w-full"
                >
                  <Image
                    src={photo.src}
                    alt={photo.description}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.08]"
                  />
                </motion.div>

                {/* Hover caption */}
                <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#2c2c2c]/80 via-[#2c2c2c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out px-6 pb-8">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#e9e5de]/80">
                    {photo.client}
                  </span>
                  <span className="text-lg font-medium text-[#f9f8f6]">
                    {photo.title}
                  </span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
