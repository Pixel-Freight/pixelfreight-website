import * as React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    social: {
        linkedin?: string;
        twitter?: string;
        github?: string;
    };
}

const team: TeamMember[] = [
    {
        id: '1',
        name: 'Alex Johnson',
        role: 'Founder & CEO',
        image: '/images/team/alex.jpg',
        social: {
            linkedin: '#',
            twitter: '#',
        },
    },
    {
        id: '2',
        name: 'Sarah Williams',
        role: 'Lead Designer',
        image: '/images/team/sarah.jpg',
        social: {
            linkedin: '#',
            twitter: '#',
            github: '#',
        },
    },
    {
        id: '3',
        name: 'Michael Chen',
        role: 'Lead Developer',
        image: '/images/team/michael.jpg',
        social: {
            linkedin: '#',
            github: '#',
        },
    },
    {
        id: '4',
        name: 'Emily Rodriguez',
        role: 'Project Manager',
        image: '/images/team/emily.jpg',
        social: {
            linkedin: '#',
            twitter: '#',
        },
    },
];

export function Team() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
                    <p className="text-xl text-gray-600">
                        The talented individuals behind PixelFreight&apos;s success
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member) => (
                        <div key={member.id} className="text-center group">
                            <div className="relative overflow-hidden rounded-xl mb-6 aspect-square">
                                <div
                                    className="w-full h-full bg-gray-200 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${member.image})` }}
                                >
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                        {member.social.linkedin && (
                                            <a
                                                href={member.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-blue-400 transition-colors"
                                                aria-label={`${member.name}'s LinkedIn`}
                                            >
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                        )}
                                        {member.social.twitter && (
                                            <a
                                                href={member.social.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-blue-400 transition-colors"
                                                aria-label={`${member.name}'s Twitter`}
                                            >
                                                <Twitter className="w-5 h-5" />
                                            </a>
                                        )}
                                        {member.social.github && (
                                            <a
                                                href={member.social.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-blue-400 transition-colors"
                                                aria-label={`${member.name}'s GitHub`}
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold mb-6">Want to join our team?</h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        We&apos;re always looking for talented individuals to join our growing team.
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                    >
                        View Open Positions
                    </a>
                </div>
            </div>
        </section>
    );
}
