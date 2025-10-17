"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import "./seriffont.css";
import { Send } from "lucide-react";
import Image from "next/image";

const sections = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function LittleStoriesNav() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;
      const rect = aboutSection.getBoundingClientRect();
      const topOffset = 80;
      setVisible(rect.top <= topOffset);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: visible ? 1 : 0,
          y: visible ? 0 : -10,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 z-50 flex w-full items-center justify-between border-b border-[#b2a693]/40 bg-[#f3efe7]/95 backdrop-blur-md px-8 py-4 shadow-sm transition-all duration-500",
          "text-[0.75rem] uppercase tracking-[0.3em] text-[#2c2c2c]"
        )}
      >
        {/* Left: Logo */}
        <Link href="#hero" className="flex items-center">
          {/* Mobile logo */}
          <Image
            src="/images/sample/littlestories/logo.svg"
            alt="Little Stories Symbol Logo"
            width={40}
            height={40}
            className="block md:hidden w-8 h-8"
            priority
          />

          {/* Desktop logo */}
          <Image
            src="/images/sample/littlestories/logo-full.svg"
            alt="Little Stories Full Logo"
            width={160}
            height={40}
            className="hidden md:block w-28 md:w-36 h-auto"
            priority
          />
        </Link>

        {/* Right: Book + Burger */}
        <div className="flex items-center gap-8">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-none border border-[#5b5149] px-3 md:px-5 py-2 text-[0.65rem] tracking-[0.3em] uppercase transition-colors hover:bg-[#5b5149] hover:text-[#f3efe7]"
          >
            <span>Book a Session</span>
            <Send className="w-3.5 h-3.5 md:w-4 md:h-4" strokeWidth={1.5} />
          </Link>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="relative flex h-5 w-6 flex-col justify-between"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="block h-[1px] w-full bg-[#2c2c2c] transition-all duration-300"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block h-[1px] w-full bg-[#2c2c2c] transition-all duration-300"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="block h-[1px] w-full bg-[#2c2c2c] transition-all duration-300"
            />
          </button>
        </div>
      </motion.nav>

      {/* MENU PANEL */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Right Slide Menu */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 150 }}
              className="fixed right-0 top-0 z-[70] h-full md:w-1/2 bg-[#e9e5de] border-l border-[#b2a693]/40 shadow-2xl flex flex-col justify-center px-12"
            >
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.12,
                      delayChildren: 0.2,
                    },
                  },
                }}
                className="space-y-8 text-right"
              >
                {sections.map((section) => (
                  <motion.li
                    key={section.href}
                    variants={{
                      hidden: { opacity: 0, x: 40 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Link
                      href={section.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-tnri text-5xl text-[#2c2c2c] hover:text-[#5b5149] transition-colors"
                    >
                      {section.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-8 right-8 text-[#2c2c2c] text-sm tracking-[0.3em] uppercase hover:text-[#5b5149] transition-colors"
              >
                Close
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
