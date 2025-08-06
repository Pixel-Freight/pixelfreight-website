import Link from 'next/link';
import { Icon } from '@/components/ui/custom-icon';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--background)] text-[var(--foreground)] border-t border-[var(--primary)]/20 pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">PixelFreight</h3>
                        <p className="text-[var(--foreground)]/70 mb-4">
                            Delivering exceptional web design and development solutions to help your business thrive in the digital world.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors duration-200" aria-label="Facebook">
                                <Icon name="facebook" size={20} />
                            </a>
                            <a href="#" className="text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors duration-200" aria-label="Twitter">
                                <Icon name="twitter" size={20} />
                            </a>
                            <a href="#" className="text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors duration-200" aria-label="Instagram">
                                <Icon name="instagram" size={20} />
                            </a>
                            <a href="#" className="text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors duration-200" aria-label="LinkedIn">
                                <Icon name="linkedin" size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors duration-200 flex items-center gap-2"><Icon name="home" size={16} /> Home</Link></li>
                            <li><Link href="/about" className="text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors duration-200 flex items-center gap-2"><Icon name="about" size={16} /> About Us</Link></li>
                            <li><Link href="/services" className="text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors duration-200 flex items-center gap-2"><Icon name="services" size={16} /> Services</Link></li>
                            <li><Link href="/portfolio" className="text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors duration-200 flex items-center gap-2"><Icon name="portfolio" size={16} /> Portfolio</Link></li>
                            <li><Link href="/contact" className="text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors duration-200 flex items-center gap-2"><Icon name="contact" size={16} /> Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><Link href="/services/web-design" className="text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors duration-200">Web Design</Link></li>
                            <li><Link href="/services/development" className="text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors duration-200">Web Development</Link></li>
                            <li><Link href="/services/ecommerce" className="text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors duration-200">E-commerce Solutions</Link></li>
                            <li><Link href="/services/seo" className="text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors duration-200">SEO & Marketing</Link></li>
                            <li><Link href="/services/maintenance" className="text-[var(--foreground)]/70 hover:text-[var(--primary)] transition-colors duration-200">Maintenance</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <address className="not-italic text-[var(--foreground)]/70 space-y-2">
                            <p>123 Web Design Street<br />Digital City, DC 12345</p>
                            <p>Email: <a href="mailto:info@pixelfreight.com" className="text-[var(--primary)] hover:underline">info@pixelfreight.com</a></p>
                            <p>Phone: <a href="tel:+1234567890" className="text-[var(--primary)] hover:underline">+1 (234) 567-890</a></p>
                        </address>
                    </div>
                </div>

                <div className="border-t border-[var(--primary)]/20 pt-6 text-center text-[var(--foreground)]/50 text-sm">
                    &copy; {currentYear} PixelFreight. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
