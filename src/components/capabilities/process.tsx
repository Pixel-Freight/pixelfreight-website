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
        title: 'Discovery',
        description: 'We start by understanding your business, goals, and target audience through in-depth research and discovery sessions.'
    },
    {
        icon: PenTool,
        title: 'Design',
        description: 'Our designers create wireframes and high-fidelity mockups, iterating based on your feedback until we achieve the perfect design.'
    },
    {
        icon: Code,
        title: 'Development',
        description: 'Our developers bring the designs to life using the latest technologies and best practices for optimal performance.'
    },
    {
        icon: Smartphone,
        title: 'Testing',
        description: 'We rigorously test the solution across devices and browsers to ensure a flawless user experience.'
    },
    {
        icon: Rocket,
        title: 'Launch & Support',
        description: 'We deploy your project and provide ongoing support and maintenance to ensure continued success.'
    }
];

export function Process() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Our Process</h2>
                    <p className="text-xl text-gray-600">
                        A proven methodology that delivers exceptional results
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600 -ml-px"></div>

                    {/* Process steps */}
                    <div className="space-y-16 md:space-y-24">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Content */}
                                    <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="md:mt-6">
                                            <div className="flex items-center md:block">
                                                <span className="inline-block w-4 h-4 rounded-full bg-blue-600 mr-2 md:hidden"></span>
                                                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                                            </div>
                                            <p className="mt-2 text-gray-600">{step.description}</p>
                                        </div>
                                    </div>

                                    {/* Spacer for desktop */}
                                    <div className="hidden md:block w-5/12"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <h3 className="text-2xl font-bold mb-6">Ready to start your project?</h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Get in touch with us to discuss how we can help bring your ideas to life.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}
