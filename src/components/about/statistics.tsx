import React from 'react';
import { StatCard } from '@/components/ui/card';

const stats = [
    { value: '5+', label: 'Years Combined Experience' },
    { value: '10+', label: 'Successful Projects Delivered' },
    { value: '98%', label: 'Positive Client Impression' },
];

export function Statistics() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            value={stat.value}
                            label={stat.label}
                            delay={index * 100} // Stagger the animation
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
