"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaPinterest, FaFacebookF } from "react-icons/fa";
import "./seriffont.css";

export function LittleStoriesFooter() {
  return (
    <footer className="relative bg-[#e9e5de] text-[#2c2c2c] pt-24 pb-12">
      {/* Top Divider / Border */}
      <div className="absolute inset-x-0 top-0 h-px bg-[#b2a693]/40" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3 md:gap-16 md:px-10 lg:px-12"
      >
        {/* Left - Logo */}
        <div className="flex flex-col items-start justify-start">
          <p className="font-serif text-4xl text-[#2c2c2c]">L</p>
        </div>

        {/* Middle - Navigation */}
        <div className="grid grid-cols-2 gap-6 text-sm text-[#5b5149]">
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#2c2c2c] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2c2c2c] transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2c2c2c] transition-colors">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2c2c2c] transition-colors">
                Stories
              </a>
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#2c2c2c] transition-colors">
                Experience
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2c2c2c] transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2c2c2c] transition-colors">
                Education
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#2c2c2c] transition-colors">
                Journal
              </a>
            </li>
          </ul>
        </div>

        {/* Right - Tagline + Social */}
        <div className="flex flex-col items-start justify-between gap-6 text-sm">
          <p className="font-tnri text-[#5b5149]/80">
            The timeless, elegant images <br />
            you’ll treasure for lifetimes.
          </p>
          <div className="flex items-center gap-4 text-[#2c2c2c]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#b2a693]"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#b2a693]"
            >
              <FaPinterest size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#b2a693]"
            >
              <FaFacebookF size={16} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom copyright */}
      <div className="mt-16 border-t border-[#b2a693]/30 pt-6 text-center text-xs text-[#5b5149]/70">
        © {new Date().getFullYear()} Little Stories Studio · By Freightpx
      </div>
    </footer>
  );
}
