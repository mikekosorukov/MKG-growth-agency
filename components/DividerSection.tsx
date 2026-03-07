'use client';

import Image from 'next/image';
import { useState } from 'react';
import Notification from './Notification';

interface DividerSectionProps {
  variant?: 'default' | 'lines' | 'angled';
}

const logos = [
  { src: '/Voximplant_logo.png', alt: 'Voximplant' },
  { src: '/aqua_logo.png', alt: 'Aqua', caseStudy: true },
  { src: '/capture_logo.png', alt: 'Capture' },
  { src: '/jet_logo.png', alt: 'Jet', caseStudy: true },
  { src: '/grotech_logo.png', alt: 'Grotech' },
  { src: '/yc_logo.png', alt: 'YC' },
  { src: '/rent_logo.png', alt: 'Rent', caseStudy: true },
  { src: '/drivt_logo.png', alt: 'Drivt' },
  { src: '/andagon_logo.png', alt: 'Andagon' },
];

export default function DividerSection({ variant = 'default' }: DividerSectionProps) {
  const [showNotification, setShowNotification] = useState(false);

  const handleCaseStudyClick = () => {
    setShowNotification(true);
  };

  if (variant === 'angled') {
    return (
      <div className="bg-[#171c39] box-border flex items-center relative w-full isolate z-10 h-[80px]" data-name="section">
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
            opacity: 0.65,
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
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] text-[14px] text-[#7078B8] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            From traction to growth stages
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
          <div className="flex animate-marquee" style={{ width: 'max-content' }}>
            {track.map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                onClick={logo.caseStudy ? handleCaseStudyClick : undefined}
                className={`group flex flex-col items-center gap-2 mx-[22px] ${logo.caseStudy ? 'cursor-pointer' : ''}`}
              >
                <div className="relative h-10 w-36 opacity-65 group-hover:opacity-100 transition-opacity duration-200">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={logo.caseStudy ? handleCaseStudyClick : undefined}
                  className={`transition-opacity duration-200 text-[#a5aee9] text-[11px] font-medium border border-[#3f4367] bg-[#0a0e1f]/60 rounded-full px-3 py-[3px] tracking-wide whitespace-nowrap inline-flex items-center gap-1 ${logo.caseStudy ? 'opacity-65 group-hover:opacity-100 cursor-pointer' : 'invisible'}`}
                >
                  Case study
                  <span className="inline-block transition-transform duration-500 group-hover:rotate-[360deg]">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5H11M11 5L7 1M11 5L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Notification
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
      />
    </>
  );
}
