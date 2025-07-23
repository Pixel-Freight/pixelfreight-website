import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
            </div>

            <div className="px-6 md:px-12 lg:px-24 py-20">
                <div className="max-w-4xl mx-auto text-left">
                    {/* Pre-heading */}
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        We&apos;re currently accepting new projects
                    </div>

                    {/* Main heading */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        <span className="block mb-4">Loading Excellence</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                        pixels by pixels.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-start gap-4">
                        <Button variant="linkblock" size="lg" className="gap-2 group" as="link" href="/connect">
                            Start a Project
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="ghost" size="lg" as="link" href="/work">
                            View Our Work
                        </Button>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {[
                        { number: '50+', label: 'Projects Completed' },
                        { number: '8+', label: 'Years Experience' },
                        { number: '95%', label: 'Client Satisfaction' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
