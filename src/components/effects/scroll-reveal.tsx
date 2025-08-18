"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// Register the plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
  triggerOnce?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  yOffset = 20,
  duration = 0.8,
  triggerOnce = false,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      y: yOffset
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 85%",  // Start animation when element is 85% from top of viewport
          end: "bottom 15%", // End animation when element is 15% from bottom
          toggleActions: "play reverse play reverse",
          onEnter: () => {
            gsap.to(element, {
              opacity: 1,
              y: 0,
              duration: duration,
              delay: delay,
              ease: "power3.out"
            });
          },
          onEnterBack: () => {
            if (!triggerOnce) {
              gsap.to(element, {
                opacity: 1,
                y: 0,
                duration: duration,
                ease: "power3.out"
              });
            }
          }
        }
      });

      return () => {
        tl.kill();
      };
    }, element);

    return () => ctx.revert();
  }, [delay, yOffset, duration, triggerOnce]);

  return (
    <div
      ref={elementRef}
      className={cn("will-change-transform", className)}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;