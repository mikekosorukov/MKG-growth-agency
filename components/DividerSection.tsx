'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Notification from './Notification';

interface DividerSectionProps {
  variant?: 'default' | 'lines' | 'angled';
}

interface PopupData {
  logo: string;
  logoWidth?: number;
  logoHeight?: number;
  brandName?: string;
  quote: string;
  avatar: string;
  avatarName: string;
  avatarTitle: string;
  href: string;
}

interface LogoItem {
  src: string;
  alt: string;
  caseStudy?: boolean;
  popup?: PopupData;
}

const logos: LogoItem[] = [
  { src: '/Voximplant_logo.png', alt: 'Voximplant' },
  {
    src: '/aqua_logo.png', alt: 'Aqua', caseStudy: true,
    popup: {
      logo: '/aqua.png',
      logoWidth: 35,
      logoHeight: 35,
      brandName: 'aqua cloud',
      quote: 'Thanks to Mike\'s work, we had impressive positive changes in how we go to market and how our funnel works.',
      avatar: '/testimonial-icon-2.jpeg',
      avatarName: 'Kirill Chabanov',
      avatarTitle: 'CMO & COO at aqua cloud',
      href: '/case-studies/aqua-cloud',
    },
  },
  { src: '/capture_logo.png', alt: 'Capture' },
  {
    src: '/jet_logo.png', alt: 'Jet', caseStudy: true,
    popup: {
      logo: '/jetlogo3.png',
      logoWidth: 35,
      logoHeight: 35,
      brandName: 'Jet Admin',
      quote: 'Mike helped us understand why customers churned and redesign our onboarding to fix the root cause.',
      avatar: '/svetlov.jpeg',
      avatarName: 'Anton Svetlov',
      avatarTitle: 'Founder and CEO at Jet Admin',
      href: '/case-studies/jet-marketplace',
    },
  },
  { src: '/grotech_logo.png', alt: 'Grotech' },
  { src: '/yc_logo.png', alt: 'YC' },
  { src: '/rent_logo.png', alt: 'Rent', caseStudy: true },
  { src: '/drivt_logo.png', alt: 'Drivt' },
  { src: '/andagon_logo.png', alt: 'Andagon' },
];

interface PopupState {
  data: PopupData;
  x: number;
  placement: 'above' | 'below';
  anchorTop: number;
  anchorBottom: number;
}

export default function DividerSection({ variant = 'default' }: DividerSectionProps) {
  const [showNotification, setShowNotification] = useState(false);
  const [activePopup, setActivePopup] = useState<PopupState | null>(null);
  const [hoveredCaseStudy, setHoveredCaseStudy] = useState(false);
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, popup: PopupData) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const popupWidth = 320;
    const padding = 16;
    const rawX = rect.left + rect.width / 2;
    const clampedX = Math.max(
      popupWidth / 2 + padding,
      Math.min(rawX, window.innerWidth - popupWidth / 2 - padding)
    );

    const gap = 12;
    const headerBottom = 81;
    const bottomSafe = 16;
    const estHeight = 300;
    const spaceAbove = rect.top - headerBottom - gap;
    const spaceBelow = window.innerHeight - rect.bottom - gap - bottomSafe;

    let placement: 'above' | 'below';
    if (spaceAbove >= estHeight) {
      placement = 'above';
    } else if (spaceBelow >= estHeight) {
      placement = 'below';
    } else {
      placement = spaceAbove >= spaceBelow ? 'above' : 'below';
    }

    setActivePopup({
      data: popup,
      x: clampedX,
      placement,
      anchorTop: rect.top,
      anchorBottom: rect.bottom,
    });
  };

  const handleMouseLeave = () => setActivePopup(null);

  if (variant === 'angled') {
    return (
      <div className="bg-[#171c39] box-border flex items-center relative w-full isolate z-10 h-[64px]" data-name="section">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'url(/line-pattern-2.svg)',
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
            opacity: 0.25,
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            backgroundImage: 'url(/300-60-15-monochrome.webp)',
            backgroundRepeat: 'repeat',
            backgroundSize: '350px 350px',
            mixBlendMode: 'soft-light',
            opacity: 0.85,
          }}
        />
      </div>
    );
  }

  if (variant === 'lines') {
    return (
      <div className="bg-[#1d2241] box-border content-stretch flex flex-col gap-[48px] items-center pb-[28px] pt-0 px-0 relative w-full isolate z-10" data-name="section" data-node-id="3328:18870">
        <div className="h-[49px] relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-2.04%]">
            <Image
              alt=""
              src="/divider-decoration.svg"
              fill
              className="block object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  // Duplicate for seamless loop
  const track = [...logos, ...logos];
  const popupLogoWidth = activePopup?.data.logoWidth ?? 96;
  const popupLogoHeight = activePopup?.data.logoHeight ?? 35;

  return (
    <>
      <div
        className="bg-[#1d2241] box-border flex flex-col items-center justify-center relative w-full isolate z-10 pt-6 pb-10 gap-14 overflow-hidden"
        data-name="section"
        data-node-id="3328:18870"
      >
        <div className="flex flex-col items-center gap-[10px]">
          <p
            className="relative w-full shrink-0 font-normal leading-[1.4] text-[#a5aee9] text-center"
            style={{ fontSize: 'clamp(16px, 1.6vw, 20px)' }}
          >
            Trusted by 10+ B2B SaaS startups backed by top investors
          </p>
        </div>

        {/* Marquee track */}
        <div
          className="w-full max-w-[1280px] overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          }}
        >
          <div
            className="flex animate-marquee pb-1"
            style={{ width: 'max-content', animationPlayState: activePopup || hoveredCaseStudy ? 'paused' : 'running' }}
          >
            {track.map((logo, i) => {
              const badgeBase = `transition-opacity duration-200 text-[#a5aee9] text-[11px] font-medium border border-[#3f4367] bg-[#0a0e1f]/60 rounded-full px-3 py-[3px] tracking-wide whitespace-nowrap inline-flex items-center gap-1`;
              const badgeVisibility = logo.caseStudy ? 'opacity-65 group-hover:opacity-100' : 'invisible';
              const badgePulse = logo.popup ? 'badge-pulse-on-hover' : '';
              const badge = (
                <span className={`${badgeBase} ${badgeVisibility} ${badgePulse}`}>
                  Case study
                  <span className="inline-block transition-transform duration-500 group-hover:rotate-[360deg]">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5H11M11 5L7 1M11 5L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </span>
              );
              const logoImg = (
                <div className="relative h-10 w-36 opacity-65 group-hover:opacity-100 transition-opacity duration-200">
                  <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                </div>
              );

              if (logo.popup) {
                return (
                  <Link
                    key={`${logo.alt}-${i}`}
                    href={logo.popup.href}
                    onMouseEnter={(e) => {
                      setHoveredCaseStudy(true);
                      handleMouseEnter(e as unknown as React.MouseEvent<HTMLDivElement>, logo.popup!);
                    }}
                    onMouseLeave={() => {
                      setHoveredCaseStudy(false);
                      handleMouseLeave();
                    }}
                    className="group flex flex-col items-center gap-2 mx-[22px] cursor-pointer"
                  >
                    {logoImg}{badge}
                  </Link>
                );
              }

              return (
                <div
                  key={`${logo.alt}-${i}`}
                  onClick={logo.caseStudy ? () => setShowNotification(true) : undefined}
                  onMouseEnter={logo.caseStudy ? () => setHoveredCaseStudy(true) : undefined}
                  onMouseLeave={logo.caseStudy ? () => setHoveredCaseStudy(false) : undefined}
                  className={`group flex flex-col items-center gap-2 mx-[22px] ${logo.caseStudy ? 'cursor-pointer' : ''}`}
                >
                  {logoImg}{badge}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hover popup */}
      {activePopup && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: activePopup.x,
            top:
              activePopup.placement === 'above'
                ? activePopup.anchorTop - 12
                : activePopup.anchorBottom + 12,
            transform: 'translateX(-50%)',
          }}
        >
          <div
            dir="ltr"
            className={`w-[320px] overflow-hidden rounded-[5px] border border-solid border-[#3f4367] bg-[#1d2241] text-left ${
              activePopup.placement === 'above'
                ? 'animate-popup-in-y-above'
                : 'animate-popup-in-y-below'
            }`}
            style={{
              boxShadow: '0 0 16px 4px rgba(5, 9, 32, 0.45)',
            }}
          >
          {/* Logo + brand: outer flex justify-start pins the cluster to the left; inner row is shrink-wrapped (no flex-1 / no full-width title cell) */}
          <div className="flex w-full flex-row justify-start px-[24px] pt-[24px] pb-[20px]">
            <div className="flex flex-row items-center gap-[10px]">
              <div
                className="relative shrink-0"
                style={{ width: `${popupLogoWidth}px`, height: `${popupLogoHeight}px` }}
              >
                <Image
                  src={activePopup.data.logo}
                  alt=""
                  fill
                  sizes={`${popupLogoWidth}px`}
                  className="object-contain object-left"
                />
              </div>
              {activePopup.data.brandName ? (
                <span className="text-left text-[16px] font-normal leading-[1.25] text-[#dcdff2]">
                  {activePopup.data.brandName}
                </span>
              ) : null}
            </div>
          </div>

          {/* Divider */}
          <div className="mx-[24px] border-t border-[#3f4367]" />

          {/* Quote */}
          <p className="px-[24px] pt-[16px] pb-[20px] text-[14px] font-normal leading-[1.6] text-[#a5aee9] italic">
            &ldquo;{activePopup.data.quote}&rdquo;
          </p>

          {/* Divider */}
          <div className="mx-[24px] border-t border-[#3f4367]" />

          {/* Avatar */}
          <div className="flex items-center gap-[10px] px-[24px] pt-[16px] pb-[24px]">
            <div className="relative h-[40px] w-[40px] shrink-0 overflow-hidden rounded-full bg-[#171c39]">
              <Image src={activePopup.data.avatar} alt={activePopup.data.avatarName} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="text-[13px] font-medium leading-[1.2] text-[#dcdff2]">{activePopup.data.avatarName}</p>
              <p className="text-[11px] font-normal leading-[1.3] text-[#7078B8]">{activePopup.data.avatarTitle}</p>
            </div>
          </div>
          </div>
        </div>
      )}

      <Notification
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
      />
    </>
  );
}
