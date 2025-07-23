import Link from 'next/link';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { SquareArrowUpRight } from 'lucide-react';

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
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
    );
}
