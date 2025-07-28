import * as React from 'react';

interface Service {
  label: string;
  image: string;
}

interface ServiceListProps {
  config: Service[];
}

const services: Service[] = [
  {
    label: 'Web Development',
    image: 'https://placeimg.dev/400x300?text=Web+Development',
  },
  {
    label: 'Mobile Development',
    image: 'https://placeimg.dev/400x300?text=Mobile+Development',
  },
  {
    label: 'UI/UX Design',
    image: 'https://placeimg.dev/400x300?text=UI/UX+Design',
  },
  {
    label: 'Branding',
    image: 'https://placeimg.dev/400x300?text=Branding',
  },
  {
    label: 'Digital Marketing',
    image: 'https://placeimg.dev/400x300?text=Digital+Marketing',
  },
  {
    label: 'Web Hosting & Maintenance',
    image: 'https://placeimg.dev/400x300?text=Web+Hosting+Maintenance',
  },
];

export function ServiceList({ config = services }: ServiceListProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section className="w-full px-6 md:px-12 lg:px-18 pb-20">
      <div className="flex flex-col divide-y divide-gray-700 border-y border-gray-700">
        {config.map((service, idx) => (
          <div
            key={service.label}
            className="relative flex items-center min-h-[80px] md:min-h-[120px] group transition-colors duration-200"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onFocus={() => setHoveredIndex(idx)}
            onBlur={() => setHoveredIndex(null)}
            tabIndex={0}
          >
            {/* Centered text always */}
            <div className="w-full flex justify-center">
              <span
                className={`py-6 md:py-10 font-mono text-xs md:text-base tracking-widest transition-colors duration-200 ${
                  hoveredIndex === idx ? 'text-[#a78bfa]' : 'text-gray-200'
                }`}
              >
                {service.label}
              </span>
            </div>
            {/* Image on hover, right beside centered text, does not affect centering */}
            {hoveredIndex === idx && (
              <div className="absolute left-1/2 top-1/2 ml-4 md:ml-8" style={{ transform: 'translate(60%, -50%)' }}>
                <img
                  src={service.image}
                  alt={service.label}
                  className="w-40 md:w-56 rounded-lg shadow-lg border border-gray-800"
                  style={{ maxHeight: '100px', objectFit: 'cover' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
