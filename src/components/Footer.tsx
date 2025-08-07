import Link from 'next/link';
import { Icon } from '@/components/ui/custom-icon';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#181818] text-[var(--foreground)] pb-12 pt-24 px-6 md:px-12 lg:px-18">
            <div className="mx-auto px-4">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    {/* Left - Logo */}
                    <div className="mb-6 md:mb-0">
                        <span className="text-2xl font-bold">PixelFreight</span>
                    </div>

                    {/* Right - Social & Email */}
                    <div className="flex flex-col items-center md:items-end space-y-4">
                        <div className="flex space-x-6">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Icon name="instagram" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Icon name="linkedin" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors" />
                            </a>
                        </div>
                        <a href="mailto:hello@pixelfreight.com" className="text-[16px] hover:underline hover:text-[var(--primary)] transition-colors">
                            hello@pixelfreight.com
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[var(--primary)]/20 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--foreground)]/70">
                        <div className="order-2 md:order-1">
                            &copy; {currentYear} PixelFreight. All rights reserved.
                        </div>
                        <div className="flex space-x-6 order-1 md:order-2 mb-4 md:mb-0">
                            <Link href="/privacy" className="hover:underline">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:underline">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
