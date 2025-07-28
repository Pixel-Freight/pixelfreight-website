import * as React from 'react';

export function CapabilitiesHero() {
    return (
        <section className="relative bg-[#181818] py-24 md:py-36 min-h-[60vh] w-full overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-16">
                    <div className="w-full md:w-1/2">
                        <span className="text-xs md:text-sm font-mono text-[#a78bfa] tracking-widest uppercase block mb-4">
                            High-Quality, Tech Solutions
                        </span>
                        <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-8 md:mb-0">
                            What We Do Best
                        </h1>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-16">
              <div className="w-full md:w-1/2">
              </div>
                <div className="w-full md:w-1/2 flex md:justify-end mt-8 md:mt-0">
                  <p className="text-xs md:text-sm text-right text-white/80 max-w-md font-mono">
                      We combine creativity, technical expertise, and a deep understanding of user experience to deliver products that look great, work flawlessly, and stay within your budget.
                  </p>
                </div>
              </div>
            </div>
        </section>
    );
}
