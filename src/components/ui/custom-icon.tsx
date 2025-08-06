'use client'
import { SVGProps } from 'react';

type IconName = 'home' | 'about' | 'services' | 'portfolio' | 'contact' | 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'menu' | 'close' | 'arrow-right' | 'arrow-left' | 'check' | 'plus' | 'minus';

interface IconProps extends SVGProps<SVGSVGElement> {
    name: IconName;
    size?: number;
    className?: string;
}

const iconPaths: Record<IconName, string> = {
    home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    about: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    services: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    portfolio: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    contact: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    facebook: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
    twitter: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
    instagram: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M17 8a1 1 0 112 0 1 1 0 01-2 0z',
    linkedin: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7H8v-7a6 6 0 016-6zM6 9H2v12h4V9zM4 6a2 2 0 100-4 2 2 0 000 4z',
    menu: 'M4 6h16M4 12h16m-16 6h16',
    close: 'M6 18L18 6M6 6l12 12',
    'arrow-right': 'M14 5l7 7m0 0l-7 7m7-7H3',
    'arrow-left': 'M10 19l-7-7m0 0l7-7m-7 7h18',
    check: 'M5 13l4 4L19 7',
    plus: 'M12 4v16m8-8H4',
    minus: 'M20 12H4'
};

export function Icon({ name, size = 24, className = '', ...props }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={size}
            height={size}
            className={className}
            {...props}
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPaths[name]} />
        </svg>
    );
}

// Usage example:
// <Icon name="home" className="text-blue-500" size={24} />
