import * as React from 'react';
import { ScrollReveal } from '@/components/effects/scroll-reveal';

export function ContactInfo() {
  return (
    <ScrollReveal delay={0.7} yOffset={30} duration={1.5}>
      <div className="flex flex-col justify-center items-start md:items-end h-full">
        <div className="max-w-md text-sm text-gray-300 mb-8 text-right tracking-widest">
          Got a project in mind? Questions? Ideas? We’d love to hear from you. Reach out and let’s start creating something amazing.
        </div>
        <div className="text-xs text-gray-400 mb-4 text-right w-full flex justify-end flex-row">
          <a href="mailto:hello@pixelfreight.com" className="hover:text-purple-400 transition">
            hello@pixelfreight.com
          </a>
          <span className="flex ml-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 mx-1">
              {/* Instagram SVG */}
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 mx-1">
              {/* LinkedIn SVG */}
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75 0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75c0 .965-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.869 0-2.156 1.459-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.6v5.596z" /></svg>
            </a>
          </span>
        </div>
      </div>
    </ScrollReveal >
  );
}