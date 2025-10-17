"use client";

import { motion } from "framer-motion";
import "./seriffont.css";

export function LittleStoriesContact() {
  const marqueeText =
    "Follow us on Instagram · View our stories · Say hello · Capture love ·";

  return (
    <section
      id="contact"
      className="relative bg-[#2c2c2c] text-[#f3efe7] overflow-hidden"
    >
      {/* --- Top Social Marquee --- */}
      <div className="relative w-full overflow-hidden border-b border-[#5b5149]/50 bg-[#1f1f1f]">
        <motion.div
          className="flex whitespace-nowrap py-3"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="mx-6 text-sm uppercase tracking-[0.35em] text-[#b2a693]"
            >
              {marqueeText}
            </span>
          ))}
        </motion.div>
      </div>

      {/* --- Contact Content --- */}
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_1fr] md:px-10 lg:px-12">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#b2a693]">
            Let’s begin
          </p>
          <h2 className="font-tnri text-4xl md:text-5xl leading-tight">
            Your story
          </h2>
          <p className="text-base leading-relaxed text-[#e4e4e4]/80 md:text-lg max-w-md">
            Tell us about your day, your people, and your vision — we’ll listen,
            and capture what matters. Every story starts with a conversation.
          </p>

          <div className="space-y-2 pt-6 text-sm text-[#e4e4e4]/80">
            <p>
              <span className="text-[#b2a693]">Email:</span>{" "}
              <a
                href="mailto:hello@littlestories.studio"
                className="underline underline-offset-4 hover:text-[#b2a693]"
              >
                hello@littlestories.studio
              </a>
            </p>
            <p>
              <span className="text-[#b2a693]">Instagram:</span>{" "}
              <a
                href="https://instagram.com/littlestories.studio"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-[#b2a693]"
              >
                @littlestories.studio
              </a>
            </p>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="border border-[#5b5149]/40 bg-[#1a1a1a]/80 p-8 backdrop-blur-sm"
        >
          <form className="space-y-6">
            <div>
              <label
                htmlFor="ls-name"
                className="block text-xs uppercase tracking-[0.3em] text-[#b2a693]"
              >
                Name
              </label>
              <input
                id="ls-name"
                type="text"
                placeholder="How should we address you?"
                className="mt-2 w-full border border-[#5b5149]/40 bg-[#2c2c2c] px-4 py-3 text-[#f3efe7] placeholder:text-[#f3efe7]/40 focus:border-[#b2a693] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="ls-email"
                className="block text-xs uppercase tracking-[0.3em] text-[#b2a693]"
              >
                Email
              </label>
              <input
                id="ls-email"
                type="email"
                placeholder="we@yourstudio.com"
                className="mt-2 w-full border border-[#5b5149]/40 bg-[#2c2c2c] px-4 py-3 text-[#f3efe7] placeholder:text-[#f3efe7]/40 focus:border-[#b2a693] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="ls-message"
                className="block text-xs uppercase tracking-[0.3em] text-[#b2a693]"
              >
                Message
              </label>
              <textarea
                id="ls-message"
                rows={5}
                placeholder="Tell us about the story you want to tell."
                className="mt-2 w-full border border-[#5b5149]/40 bg-[#2c2c2c] px-4 py-3 text-[#f3efe7] placeholder:text-[#f3efe7]/40 focus:border-[#b2a693] focus:outline-none resize-none"
              />
            </div>

            <button
              type="button"
              className="w-full border border-[#b2a693] bg-[#b2a693] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#2c2c2c] transition-colors hover:bg-[#a49482]"
            >
              Send Message
            </button>
            <p className="text-xs text-[#f3efe7]/50">
              This demo form illustrates the styling only. In production, it can
              connect to your preferred email handler.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
