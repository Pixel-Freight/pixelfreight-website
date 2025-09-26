import Image from 'next/image'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import ScrollReveal from '@/components/effects/scroll-reveal'

export const metadata = {
    title: 'Tiny Chaos — Bullet Heaven Roguelike',
    description: 'Tiny Chaos pushes the bullet heaven genre beyond simple weapon stacking with deep character evolution, co-op, and high replayability.'
}

export default function TinyChaosPage() {
    return (
        <ScrollReveal delay={0.7} yOffset={30} duration={1.5}>
            <div className="relative">
                {/* Hero Section */}
                <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
                    <section className="relative overflow-hidden py-24 md:py-32">
                        {/* Stylized game-like background */}
                        <div className="absolute inset-0 -z-10">
                            <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(147,197,253,0.18),transparent_60%)]" />
                            <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_90%_10%,rgba(192,132,252,0.12),transparent_50%)]" />
                            <div className="absolute inset-0 bg-[radial-gradient(30%_50%_at_10%_20%,rgba(34,197,94,0.10),transparent_50%)]" />
                        </div>
                        <div className="container mx-auto px-6 max-w-4xl text-center">
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Tiny Chaos</h1>
                            <p className="mt-6 text-lg md:text-xl text-foreground/80">
                                Tiny Chaos was born from a desire to push the bullet heaven genre beyond simple weapon stacking.
                            </p>
                            <p className="mt-3 text-lg md:text-xl text-foreground/80">
                                Many survival games focus heavily on upgrading weapons alone but we wanted to create something deeper.
                            </p>
                            <div className="mt-10 mx-auto relative aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-sm">
                                {/* Optional key art placeholder */}
                                <Image
                                    src="/next.svg"
                                    alt="Tiny Chaos background motif"
                                    fill
                                    className="object-contain p-8 opacity-70"
                                    priority
                                />
                            </div>
                        </div>
                    </section>
                </ScrollReveal>
                <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
                    {/* Gameplay Video */}
                    <section className="py-16 md:py-24 border-t border-border">
                        <div className="container mx-auto px-6 max-w-5xl">
                            <h2 className="text-2xl md:text-3xl font-semibold text-center">Gameplay</h2>
                            <p className="mt-2 text-center text-muted-foreground">A quick look at the chaos in motion.</p>
                            <div className="mt-8 relative mx-auto aspect-video w-full overflow-hidden rounded-xl border border-border bg-black">
                                <iframe
                                    className="absolute inset-0 h-full w-full"
                                    src="https://www.youtube.com/embed/VIDEO_ID?rel=0"
                                    title="Tiny Chaos Gameplay"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                            <p className="mt-3 text-center text-xs text-foreground/60">Replace VIDEO_ID with your actual YouTube video ID.</p>
                        </div>
                    </section>
                </ScrollReveal>
                <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
                    {/* Details */}
                    <section className="py-16 md:py-24 border-t border-border">
                        <div className="container mx-auto px-6 max-w-6xl">
                            <h2 className="text-2xl md:text-3xl font-semibold text-center">Details</h2>
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                                <Card className="h-full">
                                    <CardContent>
                                        <CardTitle>Genre</CardTitle>
                                        <CardDescription>
                                            Action, Roguelike, Bullet Heaven, Survival, RPG
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <Card className="h-full">
                                    <CardContent>
                                        <CardTitle>Platform</CardTitle>
                                        <CardDescription>
                                            PC (Windows) — Distributed via Steam and bundled with related titles
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <Card className="h-full">
                                    <CardContent>
                                        <CardTitle>Status</CardTitle>
                                        <CardDescription>
                                            Early Access (Mar 28, 2024 launch)
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <Card className="h-full">
                                    <CardContent>
                                        <CardTitle>Target Audience</CardTitle>
                                        <CardDescription>
                                            Players who enjoy fast paced action, challenging bullet patterns, and cooperative survival gameplay
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>
                <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
                    {/* Feature Highlights */}
                    <section className="py-16 md:py-24 border-t border-border">
                        <div className="container mx-auto px-6 max-w-6xl">
                            <h2 className="text-2xl md:text-3xl font-semibold text-center">What Makes It Unique</h2>
                            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <Card variant="gradient" className="h-full">
                                    <CardContent>
                                        <CardTitle>Unique Genre Blend</CardTitle>
                                        <CardDescription>
                                            Combines fast paced action, roguelike progression, bullet hell elements in most chaos difficulty, survival, and RPG mechanics
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <Card variant="gradient" className="h-full">
                                    <CardContent>
                                        <CardTitle>Strong Co-op Focus</CardTitle>
                                        <CardDescription>
                                            Designed with local and shared screen co-op gameplay at its core, encouraging teamwork and strategic play, characters have synergistic abilities
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <Card variant="gradient" className="h-full">
                                    <CardContent>
                                        <CardTitle>Char Progression &amp; Evo</CardTitle>
                                        <CardDescription>
                                            Gameplay revolves around each character&apos;s unique inherent abilities and a signature weapon, rather than a wide array of generic weapons. A key feature is Character Evolution (Evo), where weapons evolve to unlock new secondary abilities, new weapons, or entirely new mechanics
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <Card variant="gradient" className="h-full">
                                    <CardContent>
                                        <CardTitle>Dynamic and Interactive Stages</CardTitle>
                                        <CardDescription>
                                            Each level is uniquely designed with interactive elements and varying difficulty settings (Easy to Chaos)
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                                <Card variant="gradient" className="h-full md:col-span-2 lg:col-span-1">
                                    <CardContent>
                                        <CardTitle>High Replayability &amp; Unique combo of modifiers</CardTitle>
                                        <CardDescription>
                                            Over 50 special upgrades that can be combined and improves each other upgrades
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>
            </div>
        </ScrollReveal>
    );
}
