// src/app/page.tsx
import { Hero } from '@/components/home/hero';
import { AboutUs } from '@/components/home/about';
import { Creations } from '@/components/home/creations';

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Creations />
      {/* We'll add more sections here later */}
    </div>
  );
}