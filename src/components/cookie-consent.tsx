"use client";

import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent === null) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setShowBanner(false);
        // Initialize any cookie-based analytics or tracking here
    };

    const declineCookies = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-muted-foreground max-w-3xl">
                        We use cookies to enhance your experience and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                        <Link href="/privacy-policy" className="text-foreground hover:underline ml-1">
                            Learn more
                        </Link>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                        <Button
                            variant="link"
                            size="sm"
                            onClick={declineCookies}
                            className="w-full md:w-auto"
                        >
                            Reject All
                        </Button>
                        <Button
                            variant="bordered"
                            size="sm"
                            onClick={acceptCookies}
                            className="w-full md:w-auto"
                        >
                            Accept All
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
