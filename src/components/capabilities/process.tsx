import * as React from 'react';
import { Search, PenTool, Code, Smartphone, Rocket } from 'lucide-react';

interface ProcessStep {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

const processSteps: ProcessStep[] = [
    {
        icon: Search,
        title: 'Discover',
        description: 'We start by understanding your business, goals, and audience to build a clear foundation for your project.'
    },
    {
        icon: PenTool,
        title: 'Plan the Deal',
        description: 'Based on our discovery, we share a sitemap and project structure so you can see how the website will take shape. Once approved, we\'re ready to move forward.'
    },
    {
        icon: Code,
        title: 'Design the Experience',
        description: 'Together, we craft the look and feel of your website — focusing on layouts, style, and features that bring your vision to life.'
    },
    {
        icon: Smartphone,
        title: 'Build & Preview',
        description: 'Our team brings the design to life, giving you the chance to see your website in action before launch.'
    },
    {
        icon: Rocket,
        title: 'Refine & Perfect',
        description: 'With your feedback, we polish every detail to ensure the result matches your vision and goals.'
    },
    {
        icon: Search,
        title: 'Test & Launch',
        description: 'We make sure everything works flawlessly across devices and browsers, then launch your website to the world.'
    },
    {
        icon: Search,
        title: 'Ongoing Support',
        description: 'After launch, we\'re here to keep your site running smoothly and help it grow with your business.'
    }
];

export function Process() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Process</h2>
                    <p className="text-xl text-muted-foreground">
                        A proven methodology that delivers exceptional results
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Process steps */}
                    <div className="space-y-12">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;
                            const isLast = index === processSteps.length - 1;

                            return (
                                <div key={index} className="relative flex items-start gap-6">
                                    {/* Icon column */}
                                    <div className="flex-shrink-0 w-12 flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-primary" />
                                        </div>
                                    </div>

                                    {/* Line column */}
                                    <div className="flex-shrink-0 w-0.5 bg-primary/30 relative">
                                        {!isLast && (
                                            <div className="absolute top-12 bottom-0 left-0 right-0 bg-primary/30"></div>
                                        )}
                                    </div>

                                    {/* Text column */}
                                    <div className="flex-1 pt-1">
                                        <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <h3 className="text-2xl font-bold mb-6 text-foreground">Ready to start your project?</h3>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Get in touch with us to discuss how we can help bring your ideas to life.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}
