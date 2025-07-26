import * as React from 'react';
import { Button } from '@/components/ui/button';

export function WorkHero() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Our Portfolio
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
                        Explore our collection of successful projects and creative solutions
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button variant="default" size="lg" className="text-lg">
                            View All Work
                        </Button>
                        <Button variant="bordered" size="lg" className="text-lg text-white border-white hover:text-white">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
        </section>
    );
}
