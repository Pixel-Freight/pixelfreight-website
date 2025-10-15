// src/app/page.tsx
"use client";

import { Hero } from "@/components/home/hero";
import { AboutUs } from "@/components/home/about";
import { Creations } from "@/components/home/creations";
import { TrustStrip, ServiceHome } from "@/components/home";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Freight Pixel — Web & Game Studio",
  description:
    "We build fast, beautiful websites and creative digital products for startups and creators.",
  openGraph: {
    title: "Freight Pixel — Web & Game Studio",
    description:
      "Building web, apps, and games that blend creativity and performance.",
    url: "https://freightpx.com",
    siteName: "Freight Pixel",
    locale: "en_US",
    type: "website",
  },
};

// Dynamically import the components with no SSR
const FollowCursor = dynamic(
  () => import("@/components/effects/follow-cursor"),
  { ssr: false }
);

export default function Home() {
  // Set to false to disable 3D features in all components except Hero
  const enable3D = true;

  return (
    <div>
      <Hero />
      <TrustStrip />
      <AboutUs enable3D={enable3D} />
      <ServiceHome />
      <Creations enable3D={enable3D} />
      {/* We'll add more sections here later */}

      {/* Follow Cursor Effect */}
      <FollowCursor color="#007bff" />
    </div>
  );
}
