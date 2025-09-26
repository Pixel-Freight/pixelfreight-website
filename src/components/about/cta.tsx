import React from 'react';
import { ScrollReveal } from '@/components/effects/scroll-reveal';
import { Button } from '../ui/button';

export function CTA() {
  return (
    <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-background p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our story is about building the future.
            </h2>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              You have the vision. We have the team to help you build it. Let&apos;s write the next chapter together.
            </p>
            <Button variant="linkblock" size="lg" className="gap-2 group" as="link" href="/connect">
              Let&apos;s Build Something Great
            </Button>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
