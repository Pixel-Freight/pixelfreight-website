"use client";

import {
  CapabilitiesHero,
  CapabilitiesGrid,
  ProcessScrollReveal,
  TechStackMarquee,
  CapabilitiesCTA,
} from "@/components/capabilities";

export default function CapabilitiesPage() {
  return (
    <div>
      <CapabilitiesHero />
      <CapabilitiesGrid />
      <ProcessScrollReveal />
      <TechStackMarquee />
      <CapabilitiesCTA />
    </div>
  );
}
