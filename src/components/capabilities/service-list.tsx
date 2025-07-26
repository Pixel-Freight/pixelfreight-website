import * as React from 'react';
import { Code, Layout, Smartphone, PenTool, BarChart, Globe } from 'lucide-react';

interface Service {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    features: string[];
}

const services: Service[] = [
    {
        icon: Code,
        title: 'Web Development',
        description: 'Custom websites and web applications built with modern technologies for optimal performance and scalability.',
        features: [
            'Custom Web Applications',
            'E-commerce Solutions',
            'CMS Development',
            'API Integration',
            'Progressive Web Apps'
        ]
    },
    {
        icon: Smartphone,
        title: 'Mobile Development',
        description: 'Native and cross-platform mobile applications that deliver seamless user experiences across all devices.',
        features: [
            'iOS & Android Apps',
            'React Native Development',
            'UI/UX Design',
            'App Maintenance',
            'App Store Optimization'
        ]
    },
    {
        icon: Layout,
        title: 'UI/UX Design',
        description: 'User-centered design solutions that combine aesthetics with functionality for exceptional digital experiences.',
        features: [
            'User Research',
            'Wireframing & Prototyping',
            'Interaction Design',
            'Usability Testing',
            'Design Systems'
        ]
    },
    {
        icon: PenTool,
        title: 'Branding',
        description: 'Comprehensive branding solutions that establish a strong and memorable brand identity.',
        features: [
            'Logo Design',
            'Brand Guidelines',
            'Visual Identity',
            'Brand Strategy',
            'Marketing Materials'
        ]
    },
    {
        icon: BarChart,
        title: 'Digital Marketing',
        description: 'Data-driven marketing strategies to increase your online presence and drive conversions.',
        features: [
            'SEO & Content Strategy',
            'Social Media Marketing',
            'Email Campaigns',
            'PPC Advertising',
            'Analytics & Reporting'
        ]
    },
    {
        icon: Globe,
        title: 'Web Hosting & Maintenance',
        description: 'Reliable hosting solutions and ongoing maintenance to keep your website running smoothly.',
        features: [
            'Cloud Hosting',
            'SSL Certificates',
            'Regular Backups',
            'Security Updates',
            'Performance Optimization'
        ]
    }
];

export function ServiceList() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
                    <p className="text-xl text-gray-600">
                        Comprehensive digital solutions tailored to your business needs
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
                            >
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-2 mt-4">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-600">
                                            <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
