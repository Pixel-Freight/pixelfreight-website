import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/ui/custom-icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-[var(--foreground)] pb-12 pt-12 md:pt-24 px-6 md:px-12 lg:px-18">
      <div className="mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col justify-between md:justify-end items-center md:items-end mb-8 gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Image
              src="/logo-precise.svg" // 👈 replace with your actual logo file (e.g. /logo.png)
              alt="PixelFreight Logo"
              width={28}
              height={28}
              className="w-6 h-6 md:w-8 md:h-8 object-contain"
            />
          </Link>

          {/* Right - Social & Email */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-6">
              <a
                href="https://instagram.com/freightpx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Icon
                  name="instagram"
                  size={20}
                  strokeWidth={1}
                  className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                />
              </a>
              <a
                href="mailto:hello@freightpx.com"
                className="text-[16px] hover:underline hover:text-[var(--primary)] transition-colors"
              >
                hello@freightpx.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--primary)]/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--foreground)]/70">
            <div className="order-2 md:order-1">
              &copy; {currentYear} Freight Pixel. All rights reserved.
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
