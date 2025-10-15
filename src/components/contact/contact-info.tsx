import * as React from "react";
import { ScrollReveal } from "@/components/effects/scroll-reveal";

export function ContactInfo() {
  return (
    <ScrollReveal delay={0.7} yOffset={30} duration={1.5}>
      <div className="flex flex-col justify-center items-start md:items-end h-full">
        <div className="max-w-md text-sm text-gray-300 mb-8 text-right tracking-widest">
          Got a project in mind? Questions? Ideas? We’d love to hear from you.
          Reach out and let’s start creating something amazing.
        </div>
        <div className="text-xs text-gray-400 mb-4 text-right w-full flex justify-end flex-row">
          <a
            href="mailto:hello@freightpx.com"
            className="hover:text-purple-400 transition"
          >
            hello@freightpx.com
          </a>
          <span className="flex ml-4">
            <a
              href="https://instagram.com/freightpx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 mx-1"
            >
              {/* Instagram SVG */}
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </ScrollReveal>
  );
}
