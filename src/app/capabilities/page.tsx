'use client'

import { CapabilitiesHero, ServiceList } from '@/components/capabilities';

export default function CapabilitiesPage() {
  return (
    <div className="flex flex-col">
      <CapabilitiesHero />
      <ServiceList />
    </div>
  );
}
