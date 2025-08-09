import * as React from 'react';
import { Search, PenTool, Code, Smartphone, Rocket } from 'lucide-react';
import { SplitTextReveal } from '../effects/split-text-reveal';
import Link from 'next/link';

interface ProcessStep {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: 'Discover',
    description: 'We start by understanding your business, goals, and audience to build a clear foundation for your project.'
  },
  {
    icon: PenTool,
    title: 'Plan the Deal',
    description: 'Based on our discovery, we share a sitemap and project structure so you can see how the website will take shape. Once approved, we\'re ready to move forward.'
  },
  {
    icon: Code,
    title: 'Design the Experience',
    description: 'Together, we craft the look and feel of your website — focusing on layouts, style, and features that bring your vision to life.'
  },
  {
    icon: Smartphone,
    title: 'Build & Preview',
    description: 'Our team brings the design to life, giving you the chance to see your website in action before launch.'
  },
  {
    icon: Rocket,
    title: 'Refine & Perfect',
    description: 'With your feedback, we polish every detail to ensure the result matches your vision and goals.'
  },
  {
    icon: Search,
    title: 'Test & Launch',
    description: 'We make sure everything works flawlessly across devices and browsers, then launch your website to the world.'
  },
  {
    icon: Search,
    title: 'Ongoing Support',
    description: 'After launch, we\'re here to keep your site running smoothly and help it grow with your business.'
  }
];

function useActiveStep(stepCount: number) {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const refs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    function onScroll() {
      const offsets = refs.current.map(ref => ref ? ref.getBoundingClientRect().top : Infinity);
      const active = offsets.findIndex(top => top > window.innerHeight * 0.2);
      setActiveIdx(active === -1 ? stepCount - 1 : Math.max(0, active - 1));
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [stepCount]);

  return { activeIdx, refs };
}

export function Process() {
  const { activeIdx, refs } = useActiveStep(processSteps.length);
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Process</h2>
          <p className="text-xl text-muted-foreground">
            A proven methodology that delivers exceptional results
          </p>
        </div>
        <div className="relative max-w-2xl mx-auto">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 w-1 bg-white/10 h-full -translate-x-1/2 z-0" aria-hidden="true"></div>
          <div className="flex flex-col gap-16 relative z-10">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = idx === activeIdx;
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  ref={(el: HTMLDivElement | null) => { refs.current[idx] = el; }}
                  className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'} group`}
                  style={{ minHeight: 120 }}
                >
                  {/* Step content */}
                  <div className={`w-1/2 px-6 ${isLeft ? 'order-1 text-right' : 'order-2 text-left'}`}>
                    <div className={`inline-block transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0 blur-0' : 'opacity-40 translate-y-8 blur-sm'} bg-white/5 rounded-lg p-6 shadow-lg`}>
                      <div className="flex items-center justify-end mb-2">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20">
                          <Icon className="w-6 h-6 text-primary" />
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-base">{step.description}</p>
                    </div>
                  </div>
                  {/* Timeline node */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-20">
                    <span className={`block w-8 h-8 rounded-full border-4 ${isActive ? 'border-primary bg-primary/80' : 'border-white/30 bg-white/10'} shadow-lg transition-all duration-500`}></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-6 text-foreground">
            <SplitTextReveal>
              Ready to start your project?
            </SplitTextReveal>
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            <SplitTextReveal>
              Get in touch with us to discuss how we can help bring your ideas to life.
            </SplitTextReveal>
          </p>
          <Link
            href="/connect"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2"
          >
            <SplitTextReveal>
              Contact Us
            </SplitTextReveal>
          </Link>
        </div>
      </div>
      <style jsx>{`
                .group .inline-block {
                    will-change: opacity, transform, filter;
                }
            `}</style>
    </section>
  );
}
