'use client'

import React, { useRef, useEffect, ElementType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SplitTextRevealProps<T extends ElementType = "div"> {
  children: string;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
  stagger?: number;
  triggerOnce?: boolean;
  as?: T;
}

export function SplitTextReveal<T extends ElementType = "div">({
  children,
  className,
  delay = 0.2,
  yOffset = 20,
  duration = 0.7,
  stagger = 0.1,
  triggerOnce = false,
  as: Component = "span" as unknown as T,
}: SplitTextRevealProps<T> & React.ComponentPropsWithoutRef<T>) {
  const containerRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = wordsRef.current;
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(words, {
        opacity: 0,
        y: yOffset,
        display: "inline-block",
        whiteSpace: "pre"
      });

      // Create animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          onEnter: () => {
            gsap.to(words, {
              opacity: 1,
              y: 0,
              duration: duration,
              delay,
              stagger: stagger,
              ease: "back.out(1.2)"
            });
          },
          onEnterBack: !triggerOnce ? () => {
            gsap.to(words, {
              opacity: 1,
              y: 0,
              duration: duration,
              stagger: stagger,
              ease: "back.out(1.2)"
            });
          } : undefined
        }
      });

      return () => {
        tl.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, [children, delay, yOffset, duration, stagger, triggerOnce]);

  // Split text into words
  const words = children.split(" ").map((word, i) => (
    <span
      key={i}
      ref={el => { if (el) wordsRef.current[i] = el; }}
      className="inline-block"
    >
      {word}{' '}
    </span>
  ));

  return React.createElement(
    Component,
    {
      ref: containerRef,
      className: cn("inline-block", className),
    },
    words
  );
}