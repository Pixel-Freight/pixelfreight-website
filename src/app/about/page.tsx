import {
  AboutHero,
  AboutCTA,
  AboutPhilosophy,
  AboutStats,
  AboutConnect,
} from "@/components/about";

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutPhilosophy />
      <AboutStats />
      <AboutConnect />
      <AboutCTA />
    </div>
  );
}
