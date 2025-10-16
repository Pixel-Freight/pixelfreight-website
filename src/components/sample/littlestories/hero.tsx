"use client";

import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import BlurText from "@/components/effects/blur-text";
import { heroPhotoPool, type LittleStoriesPhoto } from "./data";

type FallingPhoto = LittleStoriesPhoto & {
  instanceId: string;
  x: number;
  rotation: number;
  size: number;
  duration: number;
  delay: number;
};

const MAX_FALLING = 9;

// 🧩 Single falling photo component
function FallingPhotoItem({
  photo,
  onClick,
}: {
  photo: FallingPhoto;
  onClick: (p: LittleStoriesPhoto) => void;
}) {
  const controls = useAnimation();
  const height =
    photo.orientation === "portrait" ? photo.size * 1.4 : photo.size * 0.75;
  const baseFallTime = 10 + Math.random() * 3; // 6–9s range
  const duration = baseFallTime * (photo.size / 200); // scale with size
  const delay = Math.random() * 0.8; // smaller delay range

  useEffect(() => {
    controls.start({
      y: [-100, window.innerHeight + 400],
      opacity: [0, 1, 1, 1, 0],
      rotate: photo.rotation + (Math.random() * 10 - 5),
      transition: {
        times: [0, 0.1, 0.8, 0.9, 1],
        duration,
        delay,
        ease: "easeInOut",
        repeat: Infinity,
      },
    });
  }, [controls, photo]);

  return (
    <motion.button
      type="button"
      className="absolute z-10 pointer-events-auto border border-[#b2a693]/60 bg-[#f8f5ef]/95 shadow-[0_26px_52px_rgba(0,0,0,0.14)]"
      style={{
        left: `${photo.x}%`,
        width: `${photo.size}px`,
        height: `${height}px`,
        rotate: photo.rotation,
      }}
      animate={controls}
      onMouseEnter={() =>
        controls.start({
          scale: 1.08,
          transition: { type: "spring", stiffness: 200, damping: 10 },
        })
      }
      onMouseLeave={() =>
        controls.start({
          scale: 1,
          transition: { type: "spring", stiffness: 200, damping: 10 },
        })
      }
      onClick={() => onClick(photo)}
    >
      <div className="relative h-full w-full">
        <Image
          src={photo.src}
          alt={photo.description}
          fill
          className="object-cover"
          sizes="(max-width:768px) 40vw, 220px"
        />
      </div>
    </motion.button>
  );
}

// 🧩 Main Hero
export function LittleStoriesHero() {
  const [fallingPhotos, setFallingPhotos] = useState<FallingPhoto[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<LittleStoriesPhoto | null>(
    null
  );
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const indexRef = useRef(0);
  const photoPool = useMemo(() => heroPhotoPool, []);

  // ✨ Parallax text
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window;
    const offsetX = e.clientX - innerWidth / 2;
    const offsetY = e.clientY - innerHeight / 2;
    x.set(offsetX / 15);
    y.set(offsetY / 15);
  };

  // 💫 Spawn falling photos after delay
  useEffect(() => {
    const spawnPhoto = () => {
      if (!photoPool.length) return;

      const base = photoPool[indexRef.current % photoPool.length];
      indexRef.current += 1;

      const instance: FallingPhoto = {
        ...base,
        instanceId: `${base.id}-${Date.now()}`,
        x: Math.random() * 80 + 5,
        rotation: Math.random() * 20 - 10,
        size: Math.random() * 70 + 300,
        duration: (Math.random() * 3 + 6) * (Math.random() * 0.5 + 1), // smoother & balanced
        delay: Math.random() * 1.5,
      };

      setFallingPhotos((prev) => {
        const next = [...prev, instance];
        return next.length > MAX_FALLING
          ? next.slice(next.length - MAX_FALLING)
          : next;
      });
    };

    // Delay spawn to wait for text animation
    const startTimeout = setTimeout(() => {
      for (let i = 0; i < 5; i++) spawnPhoto();
      const interval = setInterval(spawnPhoto, 1800);
      timeoutsRef.current.push(interval as unknown as NodeJS.Timeout);
    }, 1500);

    return () => {
      clearTimeout(startTimeout);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, [photoPool]);

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative flex h-screen items-center justify-center overflow-hidden text-[#2c2c2c]"
    >
      {/* ✅ Fixed background separated from transform */}
      <div
        className="fixed inset-0 -z-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070')",
        }}
      />

      {/* Soft beige overlay */}
      <div className="absolute inset-0 -z-20 pointer-events-none bg-gradient-to-b from-[#f5f1eb]/85 to-[#d7d0c3]/75" />

      {/* Floating photos */}
      <div className="absolute inset-0 z-0">
        {fallingPhotos.map((photo) => (
          <FallingPhotoItem
            key={photo.instanceId}
            photo={photo}
            onClick={(p) => setSelectedPhoto(p)}
          />
        ))}
      </div>

      {/* Center text + delayed subtitle */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-10 flex flex-col items-center text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#b2a693]/25 px-5 py-2 text-[0.7rem] uppercase tracking-[0.3em] text-[#5b5149]">
          Photographer / Est. 2019
        </span>

        {/* BlurText animation first */}
        <BlurText
          text="Little Stories"
          delay={100}
          animateBy="words"
          direction="top"
          className="text-6xl md:text-8xl font-light text-[#2c2c2c]"
        />

        {/* Subtitle appears after delay */}
        <motion.p
          className="mt-4 text-base md:text-lg italic text-[#5b5149] max-w-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        >
          Capturing your &quot;little stories&quot; utterly.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4 text-[0.7rem] uppercase tracking-[0.3em]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
        >
          <a
            href="#contact"
            className="border border-[#5b5149] bg-[#2c2c2c] px-6 py-3 text-[#f3efe7] transition-colors hover:bg-[#5b5149]"
          >
            Plan a session
          </a>
          <a
            href="#gallery"
            className="border border-[#5b5149] px-6 py-3 text-[#2c2c2c] transition-colors hover:bg-[#b2a693]/40"
          >
            View gallery
          </a>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#2c2c2c]/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute inset-0"
              onClick={() => setSelectedPhoto(null)}
            />
            <motion.div
              className="relative z-10 w-full max-w-5xl space-y-5 border border-[#5b5149]/40 bg-[#f3efe7]/95 p-6 shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.35em] text-[#5b5149]/70">
                    {selectedPhoto.client}
                  </p>
                  <h3 className="mt-2 text-2xl font-medium text-[#2c2c2c]">
                    {selectedPhoto.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="border border-[#5b5149]/40 px-4 py-2 text-[0.6rem] uppercase tracking-[0.3em] text-[#5b5149] transition-colors hover:bg-[#b2a693]/30"
                >
                  Close
                </button>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-[#5b5149]">
                {selectedPhoto.description}
              </p>
              <div className="relative h-[70vh] min-h-[320px] w-full max-h-[75vh] border border-[#b2a693]/40 bg-black/5">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.description}
                  fill
                  className="object-contain"
                  sizes="(max-width:1024px) 100vw, 70vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
