import * as React from 'react';
import { Lightbulb, HeartHandshake, Zap, Shield } from 'lucide-react';

const values = [
    {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'We embrace creativity and are constantly exploring new ideas and technologies to deliver cutting-edge solutions.'
    },
    {
        icon: HeartHandshake,
        title: 'Collaboration',
        description: 'We believe the best results come from working closely with our clients and team members in a spirit of partnership.'
    },
    {
        icon: Zap,
        title: 'Excellence',
        description: 'We are committed to delivering the highest quality work in every project, paying attention to every detail.'
    },
    {
        icon: Shield,
        title: 'Integrity',
        description: 'We conduct our business with honesty, transparency, and respect for all our clients and team members.'
    }
];

export function Values() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
                    <p className="text-xl text-gray-600">
                        These principles guide everything we do at PixelFreight
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
