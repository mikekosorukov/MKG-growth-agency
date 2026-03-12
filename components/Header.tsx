"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { animate } from "motion/react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isBookingsPage = pathname === '/bookings';
  const isHomePage = pathname === '/';

  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const offset = 81;
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
    const startPosition = window.scrollY;
    
    animate(startPosition, targetPosition, {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (value) => {
        window.scrollTo(0, value);
      },
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isHomePage) {
      smoothScrollTo(targetId);
    } else {
      router.push('/');
      const scrollAfterNav = () => {
        const el = document.getElementById(targetId);
        if (el) {
          const offset = 81;
          window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset });
          return;
        }
        requestAnimationFrame(scrollAfterNav);
      };
      requestAnimationFrame(scrollAfterNav);
    }
  };

  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-[#3f4367]"
      style={{ boxShadow: '0 -6px 6px -6px rgba(5, 9, 32, 0.9), 0 6px 6px -6px rgba(5, 9, 32, 0.9)' }}
    >
      {/* Background layers */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#1d2241] inset-0" />
        <Image
          alt=""
          className="absolute max-w-none mix-blend-soft-light object-cover opacity-20"
          src="/header-bg.webp"
          fill
          sizes="100vw"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative px-6 py-4 lg:px-20">
        <div className="flex items-center">
          {/* Logo Section - Left */}
          <div className="flex-1 flex items-center min-w-0 md:mr-4">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="flex items-center shrink-0">
                <div className="relative h-[28px] w-[54px]">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    fill
                    className="object-contain object-center"
                    priority
                  />
                </div>
              </div>
              <div className="hidden lg:flex items-center">
                <p className="text-[#a5aee9] text-sm sm:text-base lg:text-lg font-normal leading-[1.4] whitespace-nowrap">
                  MKG Lab
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Menu - Center (Absolutely Centered) */}
          <nav className="hidden md:flex items-center justify-center gap-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4">
            <Link
              href="/#pricing"
              onClick={(e) => handleNavClick(e, 'pricing')}
              className="px-2 py-3 text-[#dcdff2] text-base font-medium hover:text-white transition-colors whitespace-nowrap"
            >
              Services
            </Link>
            <Link
              href="/#testimonials"
              onClick={(e) => handleNavClick(e, 'testimonials')}
              className="px-2 py-3 text-[#dcdff2] text-base font-medium hover:text-white transition-colors whitespace-nowrap"
            >
              Testimonials
            </Link>
            <Link
              href="/approach"
              className="px-2 py-3 text-[#dcdff2] text-base font-medium hover:text-white transition-colors whitespace-nowrap"
            >
              Approach
            </Link>
          </nav>

          {/* CTA Button and Mobile Menu Toggle - Right */}
          <div className="flex-1 flex items-center justify-end gap-4 shrink-0 md:ml-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#dcdff2] hover:text-white transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* CTA Button */}
            <Link
              href="/bookings"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-[42px] flex items-center justify-center px-4 sm:px-7 border border-[#8c99eb] bg-gradient-to-r from-[#323966] to-[#232b5c] hover:from-[#3a4170] hover:to-[#2a3467] transition-all"
            >
              <span className="text-sm sm:text-base font-medium tracking-wide bg-gradient-to-r from-[#c9d1ff] to-[#8c99eb] bg-clip-text text-transparent">
                Book a Call
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden relative border-t border-[#3f4367] bg-[#1d2241]">
          <div className="flex flex-col px-6 py-4 gap-2">
            <Link
              href="/#pricing"
              className="px-4 py-3 text-[#dcdff2] text-base font-medium hover:text-white hover:bg-[#232b5c] transition-colors rounded"
              onClick={(e) => handleNavClick(e, 'pricing')}
            >
              Services
            </Link>
            <Link
              href="/#testimonials"
              className="px-4 py-3 text-[#dcdff2] text-base font-medium hover:text-white hover:bg-[#232b5c] transition-colors rounded"
              onClick={(e) => handleNavClick(e, 'testimonials')}
            >
              Testimonials
            </Link>
            <Link
              href="/approach"
              className="px-4 py-3 text-[#dcdff2] text-base font-medium hover:text-white hover:bg-[#232b5c] transition-colors rounded"
            >
              Approach
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

