'use client';

import * as React from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  category: 'featured' | 'website' | 'web-apps';
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    category: 'website',
    image: '/images/projects/ecommerce.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '/work/ecommerce-platform'
  },
  {
    id: '2',
    title: 'Mobile App Design',
    category: 'web-apps',
    image: '/images/projects/mobile-app.png',
    tags: ['Figma', 'UI Design', 'Prototyping'],
    link: '/work/mobile-app-design'
  },
  {
    id: '3',
    title: 'Brand Identity',
    category: 'featured',
    image: '/images/projects/branding.png',
    tags: ['Logo Design', 'Brand Guidelines', 'Print'],
    link: '/work/brand-identity'
  },
  {
    id: '4',
    title: 'Web Application',
    category: 'web-apps',
    image: '/images/projects/web-app.png',
    tags: ['React', 'TypeScript', 'GraphQL'],
    link: '/work/web-application'
  },
];

export function ProjectShowcase() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const cardsRef = React.useRef<HTMLAnchorElement[]>([]);

  React.useLayoutEffect(() => {
    const total = projects.length;
    if (!containerRef.current) return;

    // make the section tall so scroll can progress through all cards
    const sectionHeight = window.innerHeight * total;
    containerRef.current.style.height = `${sectionHeight}px`;

    // initial set to avoid layout flash
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.set(card, { scale: 0.8, y: 100, opacity: 0.6 });
      }
    });

    // create ScrollTrigger controlling the stack progress
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: () => `+=${sectionHeight - window.innerHeight}`,
      scrub: 0.35, // smooth interpolation
      markers: true, // keep markers while tuning; remove when done
      onUpdate: (self) => {
        // map progress [0..1] to [0..(total-1)] so we get fractional active index
        const scrollProgress = self.progress * (total - 1);

        cardsRef.current.forEach((card, i) => {
          if (!card) return;
          const distance = i - scrollProgress; // 0 => active
          // tweakable parameters:
          const baseActiveScale = 0.95;     // active card max scale (slightly <1 so peers visible)
          const scaleStep = 0.14;          // how fast scale decreases per index distance
          const yStep = 90;                // spacing multiplier for Y offset
          const opacityStep = 0.35;        // how fast opacity drops

          // compute values
          let scale = baseActiveScale - Math.abs(distance) * scaleStep;
          scale = Math.max(scale, 0.55); // minimum scale cap

          // push past cards (distance < 0) further upward: multiply by 1.1 for negative distances
          const y = distance < 0 ? distance * (yStep * 1.1) : distance * yStep;

          let opacity = 1 - Math.abs(distance) * opacityStep;
          opacity = Math.max(opacity, 0.12);

          // make sure active card is on top
          const zIndex = Math.round(1000 - Math.abs(distance) * 10);

          // animate to computed state
          gsap.to(card, {
            scale,
            y,
            opacity,
            zIndex,
            duration: 0.35,
            ease: 'power2.out',
            overwrite: 'auto'
          });
        });
      },
    });

    // refresh once to ensure correct positions on load
    ScrollTrigger.refresh();

    return () => {
      st.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-[var(--background)]">
        {projects.map((project, i) => (
          <Link
            key={project.id}
            href={project.link}
            ref={(el) => {
              if (el) cardsRef.current[i] = el as HTMLAnchorElement;
            }}
            className="absolute w-[70%] aspect-video rounded-xl overflow-hidden shadow-2xl group"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transformOrigin: 'center center'
            }}
          >
            {/* Overlay gradient */}
            <div
              className="absolute inset-0 
            bg-gradient-to-t from-black/70 via-black/30 to-transparent
            transition-all duration-500 ease-out
            group-hover:from-black/80 group-hover:via-black/50 group-hover:to-black/10
            group-hover:backdrop-blur-sm"
            />

            {/* Content — hidden until hover */}
            <div
              className="absolute inset-0 flex flex-col justify-end p-6
            opacity-0 translate-y-6
            transition-all duration-500 ease-out
            group-hover:opacity-100 group-hover:translate-y-0"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/90 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}