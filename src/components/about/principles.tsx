import React from 'react';
import { Users, DollarSign, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';

const principles = [
    {
        icon: <Users className="w-12 h-12 mx-auto mb-4 text-primary" />,
        title: 'Your Vision, Our Mission',
        description: 'Your goals become our goals. This deep collaboration ensures we build exactly what you need, together.'
    },
    {
        icon: <DollarSign className="w-12 h-12 mx-auto mb-4 text-primary" />,
        title: 'Value-Driven Partnership',
        description: 'We provide fair, flexible pricing that aligns with your goals. We deliver clear value without surprises, adapting to your project\'s needs.'
    },
    {
        icon: <CheckCircle className="w-12 h-12 mx-auto mb-4 text-primary" />,
        title: 'A Lasting Impression',
        description: 'From our first conversation to final delivery, we prioritize a seamless experience and aim to exceed expectations.'
    }
];

export function Principles() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Our Approach to Partnership
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {principles.map((principle, index) => (
                        <Card key={index} className="text-center">
                            <CardContent>
                                <div className="flex justify-center mb-4">
                                    {principle.icon}
                                </div>
                                <CardTitle>{principle.title}</CardTitle>
                                <CardDescription>{principle.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
