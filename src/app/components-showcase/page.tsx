import { Button } from '@/components/ui/button';

export default function ComponentsShowcase() {
    return (
        <div className="container mx-auto p-8 space-y-8">
            <h1 className="text-4xl font-bold mb-8">Button Components</h1>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Button Variants</h2>
                <div className="flex flex-wrap gap-4 items-center">
                    <Button>Default</Button>
                    <Button variant="bordered">Bordered</Button>
                    <Button variant="accent">Accent</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Sizes</h2>
                <div className="flex flex-wrap gap-4 items-center">
                    <Button size="sm">Small</Button>
                    <Button>Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">
                        <span className="sr-only">Icon Button</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" />
                            <path d="M2 12l10 5 10-5" />
                        </svg>
                    </Button>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Bordered Variants</h2>
                <div className="flex flex-wrap gap-4 items-center">
                    <Button variant="bordered">Primary</Button>
                    <Button variant="bordered" className="text-accent border-accent hover:bg-accent/10">Accent</Button>
                    <Button variant="bordered" className="text-secondary border-secondary hover:bg-secondary/10">Secondary</Button>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">States</h2>
                <div className="flex flex-wrap gap-4 items-center">
                    <Button disabled>Disabled</Button>
                    <Button variant="bordered" disabled>Bordered Disabled</Button>
                    <Button className="opacity-60 cursor-not-allowed">Loading</Button>
                </div>
            </div>
        </div>
    );
}
