import Link from 'next/link';

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-[#181818] text-[var(--foreground)] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-lg text-[var(--foreground)]/80">Last updated: August 7, 2025</p>
                </div>

                <div className="prose prose-invert max-w-none">
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                        <p className="mb-4">
                            Welcome to PixelFreight. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website and services.
                            By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">2. Use of Our Services</h2>
                        <p className="mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                            <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                            <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
                            <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the services</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property Rights</h2>
                        <p className="mb-4">
                            The content, features, and functionality of our services are owned by PixelFreight and are protected by copyright,
                            trademark, and other intellectual property or proprietary rights laws. These Terms permit you to use the services
                            for your personal, non-commercial use only.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">4. User Contributions</h2>
                        <p className="mb-4">
                            Our services may contain message boards, chat rooms, personal web pages or profiles, forums, and other interactive
                            features that allow users to post, submit, publish, display, or transmit content or materials. All user
                            contributions must comply with these Terms.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">5. Disclaimer of Warranties</h2>
                        <p className="mb-4">
                            Your use of our services is at your own risk. The services are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis.
                            To the fullest extent permitted by law, PixelFreight disclaims all warranties, express or implied, including,
                            but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
                        <p className="mb-4">
                            In no event will PixelFreight, its affiliates, or their licensors, service providers, employees, agents, officers,
                            or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use,
                            or inability to use, our services, including any direct, indirect, special, incidental, consequential, or punitive
                            damages.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">7. Indemnification</h2>
                        <p className="mb-4">
                            You agree to defend, indemnify, and hold harmless PixelFreight, its affiliates, licensors, and service providers,
                            and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors,
                            and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees
                            (including reasonable attorneys&apos; fees) arising out of or relating to your violation of these Terms or your use of
                            the services.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
                        <p className="mb-4">
                            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which PixelFreight
                            is established, without giving effect to any choice or conflict of law provision or rule.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4">9. Changes to These Terms</h2>
                        <p className="mb-4">
                            We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately
                            when we post them and apply to all access to and use of the services thereafter.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about these Terms, please contact us at{' '}
                            <Link href="mailto:legal@pixelfreight.com" className="text-[var(--primary)] hover:underline">
                                legal@pixelfreight.com
                            </Link>
                        </p>
                    </section>
                </div>

                <div className="mt-16 pt-8 border-t border-[var(--primary)]/20 text-center">
                    <Link href="/" className="inline-flex items-center text-[var(--primary)] hover:underline">
                        &larr; Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
