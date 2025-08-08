'use client';

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  category: 'featured' | 'website' | 'web-apps';
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    category: 'website',
    image: '/images/projects/ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '/work/ecommerce-platform'
  },
  {
    id: '2',
    title: 'Mobile App Design',
    category: 'web-apps',
    image: '/images/projects/mobile-app.jpg',
    tags: ['Figma', 'UI Design', 'Prototyping'],
    link: '/work/mobile-app-design'
  },
  {
    id: '3',
    title: 'Brand Identity',
    category: 'featured',
    image: '/images/projects/branding.jpg',
    tags: ['Logo Design', 'Brand Guidelines', 'Print'],
    link: '/work/brand-identity'
  },
  {
    id: '4',
    title: 'Web Application',
    category: 'web-apps',
    image: '/images/projects/web-app.jpg',
    tags: ['React', 'TypeScript', 'GraphQL'],
    link: '/work/web-application'
  },
];

type FilterType = 'featured' | 'all' | 'website' | 'web-apps';

export function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--foreground)' }}>Our Work</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {(['featured', 'all', 'website', 'web-apps'] as FilterType[]).map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={`cursor-pointer transition-opacity ${activeFilter === filter ? 'opacity-100' : 'opacity-70'}`}
                as="button"
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className="group w-full rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg flex flex-col md:flex-row"
              style={{
                backgroundColor: 'var(--background)',
                border: '1px solid var(--primary)',
                color: 'var(--foreground)'
              }}
            >
              <div
                className="h-64 md:h-auto md:w-1/3 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="p-6 md:w-2/3">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full"
                      style={{
                        backgroundColor: 'var(--primary/10)',
                        color: 'var(--primary)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                  View Project →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}