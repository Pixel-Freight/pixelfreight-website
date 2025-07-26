import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

interface ProjectDetailProps {
    project: {
        id: string;
        title: string;
        description: string;
        category: string;
        year: string;
        client: string;
        role: string;
        website?: string;
        github?: string;
        tags: string[];
        challenge: string;
        solution: string;
        images: string[];
    };
}

export function ProjectDetail({ project }: ProjectDetailProps) {
    return (
        <div className="bg-white">
            {/* Back Button */}
            <div className="container mx-auto px-4 py-8">
                <Link
                    href="/work"
                    className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Projects
                </Link>
            </div>

            {/* Hero Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
                            {project.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {project.title}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 mb-8">
                            <div>
                                <span className="block text-sm text-gray-500">Year</span>
                                <span className="font-medium">{project.year}</span>
                            </div>
                            <div>
                                <span className="block text-sm text-gray-500">Client</span>
                                <span className="font-medium">{project.client}</span>
                            </div>
                            <div>
                                <span className="block text-sm text-gray-500">Role</span>
                                <span className="font-medium">{project.role}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            {project.website && (
                                <Button asChild variant="bordered" className="gap-2">
                                    <a href={project.website} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-4 h-4" />
                                        Visit Website
                                    </a>
                                </Button>
                            )}
                            {project.github && (
                                <Button asChild variant="bordered" className="gap-2">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="w-4 h-4" />
                                        View on GitHub
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Content */}
            <div className="py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Main Project Image */}
                    <div className="mb-16 rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Project Details */}
                    <div className="grid md:grid-cols-3 gap-12 mb-16">
                        <div className="md:col-span-2">
                            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                            <div className="prose max-w-none">
                                <p>{project.challenge}</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Solution */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">The Solution</h2>
                        <div className="prose max-w-none">
                            <p>{project.solution}</p>
                        </div>
                    </div>

                    {/* Additional Images */}
                    <div className="space-y-8">
                        {project.images.slice(1).map((image, index) => (
                            <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src={image}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-20 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Let&apos;s work together to bring your ideas to life with our expert team.
                        </p>
                        <Button asChild size="lg">
                            <Link href="/contact">
                                Get in Touch
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
