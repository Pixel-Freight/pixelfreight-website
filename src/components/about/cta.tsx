import React from 'react';
import Link from 'next/link';

export function CTA() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="bg-background p-8 md:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Our story is about building the future.
                    </h2>
                    <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
                        You have the vision. We have the team to help you build it. Let&apos;s write the next chapter together.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
                    >
                        Let&apos;s Build Something Great
                    </Link>
                </div>
            </div>
        </section>
    );
}
