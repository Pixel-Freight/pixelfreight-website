import * as React from 'react';

export function OurStory() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Our Story
                    </h2>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 mb-6">
                            Founded in 2020, PixelFreight began as a small team of passionate designers and developers with a shared vision: to create digital experiences that not only look beautiful but also solve real problems.
                        </p>

                        <p className="text-gray-600 mb-6">
                            What started as a small studio has grown into a full-service digital agency, but we&apos;ve never lost sight of our core values. We believe in the power of thoughtful design, clean code, and meaningful client relationships.
                        </p>

                        <p className="text-gray-600 mb-6">
                            Our journey has been filled with challenges and triumphs, but through it all, we&apos;ve remained committed to delivering exceptional results for our clients. We&apos;re proud of how far we&apos;ve come and excited about where we&apos;re headed next.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            <div className="text-center p-6 bg-gray-50 rounded-lg">
                                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                                <div className="text-gray-600">Projects Completed</div>
                            </div>

                            <div className="text-center p-6 bg-gray-50 rounded-lg">
                                <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
                                <div className="text-gray-600">Happy Clients</div>
                            </div>

                            <div className="text-center p-6 bg-gray-50 rounded-lg">
                                <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                                <div className="text-gray-600">Years of Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
