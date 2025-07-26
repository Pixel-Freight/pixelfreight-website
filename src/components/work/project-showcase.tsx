import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    tags: string[];
    link: string;
}

const projects: Project[] = [
    {
        id: '1',
        title: 'E-commerce Platform',
        description: 'A modern e-commerce solution with seamless checkout and inventory management.',
        category: 'Web Development',
        image: '/images/projects/ecommerce.jpg',
        tags: ['React', 'Node.js', 'MongoDB'],
        link: '/work/ecommerce-platform'
    },
    {
        id: '2',
        title: 'Mobile App Design',
        description: 'User-centered mobile application design for a fintech startup.',
        category: 'UI/UX Design',
        image: '/images/projects/mobile-app.jpg',
        tags: ['Figma', 'UI Design', 'Prototyping'],
        link: '/work/mobile-app-design'
    },
    {
        id: '3',
        title: 'Brand Identity',
        description: 'Complete brand identity design for a sustainable fashion brand.',
        category: 'Branding',
        image: '/images/projects/branding.jpg',
        tags: ['Logo Design', 'Brand Guidelines', 'Print'],
        link: '/work/brand-identity'
    },
    {
        id: '4',
        title: 'Web Application',
        description: 'Custom web application for business process automation.',
        category: 'Web Development',
        image: '/images/projects/web-app.jpg',
        tags: ['React', 'TypeScript', 'GraphQL'],
        link: '/work/web-application'
    },
];

export function ProjectShowcase() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Featured Work</h2>
                    <div className="flex space-x-2">
                        <Button variant="bordered" className="px-6">
                            All
                        </Button>
                        <Button variant="bordered" className="px-6">
                            Web
                        </Button>
                        <Button variant="bordered" className="px-6">
                            Design
                        </Button>
                        <Button variant="bordered" className="px-6">
                            Branding
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative overflow-hidden h-64">
                                <div
                                    className="w-full h-full bg-gray-200 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                >
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Button variant="default" size="lg">
                                            View Project
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-blue-600 transition-colors">
                                    <Link href={project.link} className="hover:underline">
                                        {project.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Button variant="bordered" size="lg" className="px-8">
                        Load More Projects
                    </Button>
                </div>
            </div>
        </section>
    );
}
