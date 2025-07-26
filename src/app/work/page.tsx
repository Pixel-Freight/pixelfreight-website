import { WorkHero } from '@/components/work/hero';
import { ProjectShowcase } from '@/components/work/project-showcase';

export default function WorkPage() {
    return (
        <div>
            <WorkHero />
            <ProjectShowcase />
            {/* Additional work-related components can be added here */}
        </div>
    );
}
