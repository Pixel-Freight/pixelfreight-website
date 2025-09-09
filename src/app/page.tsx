// src/app/page.tsx
'use client';

import { Hero } from '@/components/home/hero';
import { AboutUs } from '@/components/home/about';
import { Creations } from '@/components/home/creations';
import dynamic from 'next/dynamic';

// Dynamically import the components with no SSR
const FollowCursor = dynamic(
  () => import('@/components/effects/follow-cursor'),
  { ssr: false }
);

export default function Home() {
  // Set to false to disable 3D features in all components except Hero
  const enable3D = true;

  return (
    <div>

      <Hero />
      <AboutUs enable3D={enable3D} />
      <Creations enable3D={enable3D} />
      {/* We'll add more sections here later */}

      {/* Follow Cursor Effect */}
      <FollowCursor color="#007bff" />
    </div>
  );
}