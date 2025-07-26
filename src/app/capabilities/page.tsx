import { CapabilitiesHero, ServiceList, Process } from '@/components/capabilities';

export default function CapabilitiesPage() {
    return (
        <div className="flex flex-col">
            <CapabilitiesHero />
            <ServiceList />
            <Process />
        </div>
    );
}
