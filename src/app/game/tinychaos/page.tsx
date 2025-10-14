import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Tiny Chaos — Bullet Heaven Roguelike",
  description:
    "Tiny Chaos pushes the bullet heaven genre beyond simple weapon stacking with deep character evolution, co-op, and high replayability.",
};

export default function TinyChaosPage() {
  return (
    <main className="bg-[#181818] text-white">
      {/* HERO */}
      <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
        <section className="relative overflow-hidden py-32 md:py-40 border-b border-white/10">
          {/* Animated background grid */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-[0.4] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:32px_32px]"
          />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(116,67,244,0.08)_0%,transparent_70%)]" />

          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Tiny Chaos
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              A bullet heaven roguelike where chaos meets evolution. Survive
              waves of enemies, evolve your character, and master synergistic
              builds with friends in co-op.
            </p>

            {/* Cover art */}
            <div className="mt-12 mx-auto relative aspect-[16/9] w-full max-w-4xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm">
              <Image
                src="/images/tinychaos-keyart.png"
                alt="Tiny Chaos Key Art"
                fill
                className="object-cover opacity-90"
                priority
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* GAMEPLAY VIDEO */}
      <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
        <section className="py-24 border-t border-white/10">
          <div className="container mx-auto px-6 max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Gameplay Preview
            </h2>
            <p className="text-white/70 mb-10">
              Experience the intensity of evolving chaos in motion.
            </p>

            <div className="relative mx-auto aspect-video w-full overflow-hidden border border-white/10 bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/VIDEO_ID?rel=0"
                title="Tiny Chaos Gameplay"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-center text-xs text-white/40">
              Replace VIDEO_ID with your actual YouTube video ID.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* GAME DETAILS */}
      <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
        <section className="py-24 border-t border-white/10">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
              Game Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Genre",
                  desc: "Action, Roguelike, Bullet Heaven, Survival, RPG",
                },
                {
                  title: "Platform",
                  desc: "PC (Windows) — distributed via Steam",
                },
                {
                  title: "Status",
                  desc: "Early Access — Launching March 28, 2024",
                },
                {
                  title: "Target Audience",
                  desc: "Fans of fast-paced action, cooperative gameplay, and deep progression systems.",
                },
              ].map(({ title, desc }) => (
                <Card
                  key={title}
                  className="bg-[#1e1e1e] border border-white/10"
                >
                  <CardContent>
                    <CardTitle className="mb-2 text-[#7443f4]">
                      {title}
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      {desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FEATURES */}
      <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
        <section className="py-24 border-t border-white/10">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
              What Makes It Unique
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Evolving Characters",
                  desc: "Each hero has a signature weapon and unique evolution paths — unlock new mechanics through character progression.",
                },
                {
                  title: "Dynamic Co-op Combat",
                  desc: "Local and online co-op modes where synergy and coordination amplify chaos.",
                },
                {
                  title: "Interactive Stages",
                  desc: "Each arena introduces environmental hazards, traps, and bonuses to keep you adapting every run.",
                },
                {
                  title: "Replayable Builds",
                  desc: "50+ upgrades, passive modifiers, and randomized events make every run unique.",
                },
                {
                  title: "Stylized Pixel Visuals",
                  desc: "Hand-crafted pixel art and atmospheric VFX for maximum clarity amidst chaos.",
                },
              ].map(({ title, desc }) => (
                <Card
                  key={title}
                  className="bg-[#1e1e1e] border border-white/10 hover:border-[#7443f4]/70 transition-all"
                >
                  <CardContent>
                    <CardTitle className="text-[#7443f4] mb-2">
                      {title}
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      {desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA FOOTER */}
      <ScrollReveal delay={0.2} yOffset={30} duration={1.5}>
        <section className="py-32 text-center border-t border-white/10">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Survive the Chaos. Evolve Beyond It.
            </h2>
            <p className="text-white/70 mb-10">
              Wishlist Tiny Chaos on Steam and follow the journey as we expand
              the chaos every update.
            </p>
            <Link
              href="https://store.steampowered.com/app/YOUR_APP_ID"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-[#7443f4] hover:bg-[#8658ff] transition-colors px-8 py-4 text-lg font-medium text-white"
            >
              View on Steam
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
