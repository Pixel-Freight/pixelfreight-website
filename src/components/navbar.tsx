'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { SquareArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showPromo, setShowPromo] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
                setShowPromo(false);
            } else {
                setIsScrolled(false);
                setShowPromo(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closePromo = () => {
        setShowPromo(false);
    };

    return (
        <>
            {/* Promo Bar - Only shows at top of page */}
            {showPromo && (
                <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground text-sm font-medium py-2 overflow-hidden">
                    <div className="container mx-auto px-4 relative">
                        <div className="animate-marquee whitespace-nowrap">
                            <span className="mx-4">🚀 Launch Promo: Get up to 50% OFF on all services! Limited time offer.</span>
                            <span className="mx-4">🚀 Launch Promo: Get up to 50% OFF on all services! Limited time offer.</span>
                            <span className="mx-4">🚀 Launch Promo: Get up to 50% OFF on all services! Limited time offer.</span>
                            <span className="mx-4">🚀 Launch Promo: Get up to 50% OFF on all services! Limited time offer.</span>
                            <span className="mx-4">🚀 Launch Promo: Get up to 50% OFF on all services! Limited time offer.</span>
                        </div>
                        <button
                            onClick={closePromo}
                            className="absolute right-10 top-1/2 -translate-y-1/2 hover:bg-white/20 rounded-full p-1"
                            aria-label="Close promo"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            )}

            {/* Navbar */}
            <header className={`fixed left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-primary/40 transition-all duration-300 ${isScrolled ? 'top-0' : showPromo ? 'top-10' : 'top-0'}`}>
                <div className="flex items-center justify-between h-20 px-6 md:px-12 lg:px-18 py-6">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold">
                        PixelFreight
                    </Link>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center gap-6 justify-end">
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" as="link" href="/work">
                                Work
                            </Button>
                            <Button variant="ghost" as="link" href="/capabilities">
                                Capabilities
                            </Button>
                            <Button variant="ghost" as="link" href="/about">
                                About
                            </Button>
                        </div>
                        <div className="w-px h-6 bg-border/40 mx-2"></div>
                        {/* Connect Button */}
                        <Button variant="linkblock" className="gap-2" as="link" href="/connect">
                            Connect
                            <SquareArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </header>
        </>
    );
}
