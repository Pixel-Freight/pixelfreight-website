import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import CookieBanner from "@/components/cookie-banner";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://freightpx.com"),
  title: {
    default: "Freight Pixel — Web & Game Studio",
    template: "%s | Freight Pixel",
  },
  description:
    "Freight Pixel is a creative studio crafting websites, web apps, and games with clean code and thoughtful design.",
  keywords: [
    "Freight Pixel",
    "Web Design",
    "Web Development",
    "Game Studio",
    "Next.js Studio",
    "Creative Agency",
  ],
  openGraph: {
    title: "Freight Pixel — Web & Game Studio",
    description:
      "We build fast, beautiful websites and creative digital products for startups and creators.",
    url: "https://freightpx.com",
    siteName: "Freight Pixel",
    images: [
      {
        url: "/og-image.jpg", // 👉 place this in /public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Freight Pixel Studio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freight Pixel — Web & Game Studio",
    description:
      "Creative web and game development studio. Turning ideas into code.",
    images: ["/og-image.jpg"],
    creator: "@freightpx",
  },
  alternates: {
    canonical: "https://freightpx.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Navbar />
        <main>{children}</main>
        <CookieBanner />
        <Footer />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Freight Pixel",
              url: "https://freightpx.com",
              logo: "https://freightpx.com/logo.png",
              sameAs: ["https://www.instagram.com/freightpx/"],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "hello@freightpx.com",
                  contactType: "customer support",
                  availableLanguage: ["English"],
                },
              ],
            }),
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
