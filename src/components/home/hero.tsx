'use client';

import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { ScrollReveal } from '@/components/effects/scroll-reveal';

const SpotlightGrid = dynamic(
    () => import('@/components/effects/spotlight-grid'),
    { ssr: false }
);

export function Hero() {
    return (
        <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
            <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
                {/* Background with spotlight grid */}
                <div className="absolute inset-0 -z-10">
                    <SpotlightGrid />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background/80 to-background/90" />
                </div>

                <div className="px-6 md:px-12 lg:px-18 py-20">
                    <div className="max-w-4xl mx-auto text-left relative z-10">
                        {/* Pre-heading */}
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            We&apos;re currently accepting new projects
                        </div>

                        {/* Main heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 leading-[1.1] py-1">
                            <span className="block mb-4">Loading Excellence</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-20">
                            pixels by pixels.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="linkblock" size="lg" className="gap-2 group" as="link" href="/connect">
                                Start a Project
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button variant="ghost" size="lg" as="link" href="/work">
                                View Our Work
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollReveal>
    );
}
