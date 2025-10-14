import gsap from "gsap";
import * as React from "react";
import Image from "next/image";

interface Service {
  label: string;
  image: string;
}

interface ServiceListProps {
  config?: Service[];
}

const services: Service[] = [
  {
    label: "Web Development",
    image: "/images/capabilities/webdev-pixelfreight.png",
  },
  {
    label: "Mobile Development",
    image: "/images/capabilities/mobiledev-pixelfreight.jpg",
  },
  {
    label: "UI/UX Design",
    image: "/images/capabilities/uiux-pixelfreight.png",
  },
  {
    label: "Web Hosting & Maintenance",
    image: "/images/capabilities/webhost-pixelfreight.jpg",
  },
];

export function ServiceList({ config = services }: ServiceListProps) {
  const [hovered, setHovered] = React.useState<{
    idx: number | null;
    image: string;
    label: string;
  }>({ idx: null, image: "", label: "" });
  const containerRef = React.useRef<HTMLDivElement>(null);
  const imageRef = React.useRef<HTMLImageElement>(null);
  const [showImage, setShowImage] = React.useState(false);

  // Animate image position and opacity with GSAP
  const animateImage = (x: number, y: number, opacity: number) => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        x,
        y,
        opacity,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !imageRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    animateImage(
      relX - imageRef.current.offsetWidth / 2,
      relY - imageRef.current.offsetHeight / 2,
      1
    );
  };

  const handleEnter = (idx: number, service: Service) => {
    setHovered({ idx, image: service.image, label: service.label });
    setShowImage(true);
    // Fade in image at initial position
    if (imageRef.current) {
      gsap.set(imageRef.current, { opacity: 0 });
    }
  };

  const handleLeave = () => {
    setShowImage(false);
    if (imageRef.current) {
      gsap.to(imageRef.current, { opacity: 0, duration: 0.2 });
    }
    setHovered({ idx: null, image: "", label: "" });
  };

  return (
    <section
      ref={containerRef}
      className="w-full px-6 md:px-12 lg:px-18 pb-20 relative"
      onMouseMove={showImage ? handleMove : undefined}
    >
      <div className="flex flex-col divide-y divide-gray-700 border-y border-gray-700">
        {config.map((service, idx) => (
          <div
            key={service.label}
            className="relative flex items-center min-h-[80px] md:min-h-[120px] group transition-colors duration-200"
            onMouseEnter={() => handleEnter(idx, service)}
            onMouseLeave={handleLeave}
            onFocus={() => handleEnter(idx, service)}
            onBlur={handleLeave}
            tabIndex={0}
          >
            <div className="w-full flex justify-center">
              <span
                className={`py-6 md:py-10 font-mono text-xs md:text-base tracking-widest transition-colors duration-200 ${
                  hovered.idx === idx ? "text-[#a78bfa]" : "text-gray-200"
                }`}
              >
                {service.label}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Animated image that follows cursor on hover (GSAP) */}
      <Image
        ref={imageRef}
        src={hovered.image}
        alt={hovered.label}
        className="w-40 md:w-100 rounded-lg shadow-lg border border-gray-800 pointer-events-none absolute top-0 left-0 z-50"
        style={{ display: showImage ? "block" : "none", opacity: 0 }}
        width={400}
        height={600}
      />
    </section>
  );
}
