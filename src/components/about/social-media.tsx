"use client";

import { useRef, useMemo } from 'react';
import { Linkedin, Twitter, Instagram, Github, Dribbble, Figma } from 'lucide-react';
import Blocks from '@/components/ui/blocks';
import { ScrollReveal } from '@/components/effects/scroll-reveal'

const socialMedia = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: <Linkedin className="w-6 h-6" />,
    color: 'text-[#0077b5]',
    username: '@pixelfreight'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: <Twitter className="w-6 h-6" />,
    color: 'text-[#1DA1F2]',
    username: '@pixelfreight'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: <Instagram className="w-6 h-6" />,
    color: 'text-[#E1306C]',
    username: '@pixelfreight'
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: <Github className="w-6 h-6" />,
    color: 'text-foreground',
    username: 'pixelfreight'
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com',
    icon: <Dribbble className="w-6 h-6" />,
    color: 'text-[#EA4C89]',
    username: 'pixelfreight'
  },
  {
    name: 'Figma',
    url: 'https://figma.com',
    icon: <Figma className="w-6 h-6" />,
    color: 'text-[#F24E1E]',
    username: '@pixelfreight'
  },
];

export function SocialMedia() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate random positions for social media items
  const activeDivs = useMemo(() => {
    const positions: Record<number, Set<number>> = {};

    // Place each social media item in a random position
    socialMedia.forEach((_, index) => {
      const row = Math.floor(Math.random() * 4); // 0-3 rows
      const col = Math.floor(Math.random() * 8); // 0-7 columns

      // Ensure each item is in its own 2x2 block
      if (!positions[row]) positions[row] = new Set();
      positions[row].add(col);

      // Mark adjacent blocks as used
      if (col < 7) positions[row].add(col + 1);
      if (row < 3) {
        if (!positions[row + 1]) positions[row + 1] = new Set();
        positions[row + 1].add(col);
        if (col < 7) positions[row + 1].add(col + 1);
      }
    });

    return positions;
  }, []);

  return (
    <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Connect With Us
          </h2>

          <div
            ref={containerRef}
            className="h-[600px] md:h-[700px] overflow-hidden relative before:absolute before:w-full before:h-full before:bg-gradient-to-t before:from-background before:to-transparent before:z-[1] before:pointer-events-none"
          >
            <Blocks
              activeDivsClass="bg-background/80 backdrop-blur-sm"
              divClass="border-foreground/5"
              classname="w-full h-full"
              containerRef={containerRef}
              activeDivs={activeDivs}
            />

            {/* Social Media Items */}
            <div className="absolute inset-0 z-10 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-8">
              {socialMedia.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-6 rounded-lg bg-background/80 backdrop-blur-sm border border-foreground/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 flex flex-col items-center justify-center text-center`}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`,
                    opacity: 0,
                    transform: 'translateY(20px)'
                  }}
                >
                  <div className={`${social.color} mb-3`}>
                    {social.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{social.name}</h3>
                  <p className="text-foreground/60 text-sm">{social.username}</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </a>
              ))}
            </div>

            <style jsx global>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
