'use client';

import dynamic from 'next/dynamic';

const CookieConsent = dynamic(
    () => import('@/components/cookie-consent'),
    { ssr: false }
);

export default function CookieBanner() {
    return <CookieConsent />;
}
