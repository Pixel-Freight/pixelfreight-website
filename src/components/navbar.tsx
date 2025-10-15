"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu, X, SquareArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const isPromoClosed = sessionStorage.getItem("promoClosed");
    if (isPromoClosed === "true") setShowPromo(false);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
        setShowPromo(false);
      } else {
        setIsScrolled(false);
        if (sessionStorage.getItem("promoClosed") !== "true")
          setShowPromo(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closePromo = () => {
    setShowPromo(false);
    sessionStorage.setItem("promoClosed", "true");
  };

  return (
    <>
      {/* Promo Bar */}
      {showPromo && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground text-sm font-medium py-2 overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <div className="animate-marquee whitespace-nowrap">
              {Array(4)
                .fill(
                  "🚀 Launch Promo: Get up to 50% OFF on all services! Limited time offer."
                )
                .map((text, i) => (
                  <span key={i} className="mx-4">
                    {text}
                  </span>
                ))}
            </div>
            <button
              onClick={closePromo}
              className="absolute right-10 top-1/2 -translate-y-1/2 hover:bg-white/20 rounded-full p-1"
              aria-label="Close promo"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <header
        className={`fixed left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-primary/40 transition-all duration-300 ${
          isScrolled ? "top-0" : showPromo ? "top-10" : "top-0"
        }`}
      >
        <div className="flex items-center justify-between h-20 px-6 md:px-12 py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Image
              src="/logo-text.svg" // 👈 replace with your actual logo file (e.g. /logo.png)
              alt="PixelFreight Logo"
              width={28}
              height={28}
              className="w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 justify-end">
            <div className="flex items-center gap-2">
              <Button variant="ghost" as="link" href="/web">
                Web
              </Button>
              <Button variant="ghost" as="link" href="/game/tinychaos">
                Game
              </Button>
              <Button variant="ghost" as="link" href="/about">
                About
              </Button>
            </div>
            <div className="w-px h-6 bg-border/40 mx-2" />
            <Button
              variant="linkblock"
              className="gap-2"
              as="link"
              href="/connect"
            >
              Connect
              <SquareArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden relative z-[80] ${
              isMenuOpen ? "text-primary" : ""
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[70] md:hidden h-screen w-screen"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
            >
              {/* Solid blurred background */}
              <div className="absolute inset-0 bg-background/95 backdrop-blur-lg" />

              {/* Optional subtle grid texture */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.25] pointer-events-none
          bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[length:32px_32px]"
              />

              {/* Centered content container with full height */}
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
                transition={{ duration: 0.25 }}
                className="relative flex flex-col justify-center items-center h-full w-full px-8 text-center"
              >
                <motion.nav
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                    },
                    closed: {
                      transition: {
                        staggerChildren: 0.06,
                        staggerDirection: -1,
                      },
                    },
                  }}
                  className="space-y-4 w-full max-w-sm"
                >
                  {[
                    { href: "/web", label: "Web" },
                    { href: "/game/tinychaos", label: "Game" },
                    { href: "/about", label: "About" },
                  ].map((item) => (
                    <motion.div
                      key={item.href}
                      variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: 10 },
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-3xl font-medium text-white/90 hover:text-primary transition-colors py-3"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 10 },
                    }}
                    className="pt-8"
                  >
                    <Link
                      href="/connect"
                      onClick={() => setIsMenuOpen(false)}
                      className="inline-flex items-center justify-center gap-2 bg-[#7443f4] hover:bg-[#8658ff]
                         transition-colors w-full py-4 text-lg font-medium text-white"
                    >
                      Connect
                      <SquareArrowUpRight className="h-5 w-5" />
                    </Link>
                  </motion.div>
                </motion.nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
