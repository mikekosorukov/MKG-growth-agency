'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section 
      id="about"
      className="about-section-bg box-border relative flex w-full flex-col items-center border border-solid border-[#3f4367] px-[20px] pb-[40px] pt-[40px] sm:px-[40px] sm:pb-[50px] sm:pt-[50px] md:px-[60px] md:pb-[60px] md:pt-[60px] lg:px-[80px] lg:pb-[80px] lg:pt-[80px] overflow-hidden"
      aria-label="About section"
    >
      {/* Noise texture overlay */}
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
      {/* Content container - centered with max-width */}
      <div className="relative z-10 w-full max-w-[1280px] flex flex-col items-stretch gap-[40px] sm:gap-[50px] md:gap-[60px] lg:flex-row lg:items-center lg:gap-[80px]">
      {/* Left Column - Content */}
      <div className="box-border flex w-full shrink-0 flex-col items-start gap-[32px] px-0 py-[16px] sm:gap-[40px] sm:py-[20px] md:gap-[48px] md:py-[24px] lg:min-h-px lg:min-w-px lg:grow lg:basis-0 lg:gap-[64px] lg:py-[32px]">
        {/* Section Text */}
        <div className="relative flex w-full shrink-0 flex-col items-start gap-[24px] sm:gap-[32px] md:gap-[40px] lg:gap-[48px]">
          {/* Top - Heading */}
          <div className="relative flex w-full shrink-0 flex-col items-center gap-[8px]">
            <h2 
              className="relative w-full shrink-0 font-bold leading-[1.1] text-[#dcdff2]"
              style={{ fontSize: 'clamp(26px, 3.2vw, 38px)', fontVariationSettings: "'wdth' 100" }}
            >
              The commercial brain behind your tech product
            </h2>
          </div>
          
          {/* Description */}
          <div className="relative w-full shrink-0 flex flex-col gap-[16px]">
            <p 
              className="relative w-full shrink-0 font-normal leading-[1.4] text-[#a5aee9]"
              style={{ fontSize: 'clamp(14px, 1.4vw, 18px)', fontVariationSettings: "'wdth' 100" }}
            >
              I'm Mike, founder of MKG Labs. My GTM path started as the first hire at an early-stage startup, where I spent months trying to sell a product nobody wanted—something Y Combinator eventually forced us to confront. That experience reshaped how I think about growth and GTM: market reality and customer behavior have guided my decisions ever since.
            </p>
            <p 
              className="relative w-full shrink-0 font-normal leading-[1.4] text-[#a5aee9]"
              style={{ fontSize: 'clamp(14px, 1.4vw, 18px)', fontVariationSettings: "'wdth' 100" }}
            >
              For the past seven years, I've worked with B2B and prosumer tech founders and teams as a full-time operator, fractional lead, and advisor. MKG Labs is where that experience comes together to help bring tech products to market with clarity and impact.
            </p>
          </div>
        </div>
        
        {/* CTA + Social Icons */}
        <div className="flex w-full items-center justify-between gap-[24px] sm:gap-[32px]">
          {/* Talk to Us button */}
          <Link
            href="/bookings"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-[48px] shrink-0 border border-solid border-[#8c99eb] bg-gradient-to-r from-[#323966] to-[#232b5c] hover:from-[#3a4170] hover:to-[#2a3467] transition-all cursor-pointer sm:h-[50px] md:h-[52px] lg:h-[56px]"
            aria-label="Talk to us"
          >
            <div className="box-border flex h-full items-center justify-center overflow-clip rounded-[inherit] p-[12px] sm:p-[14px] lg:p-[16px]">
              <div className="relative box-border flex shrink-0 items-center justify-center gap-[10px] px-[12px] py-0 sm:px-[14px] lg:px-[16px]">
                <span className="relative shrink-0 whitespace-pre text-nowrap text-[16px] font-medium leading-none tracking-[0.5px] sm:text-[17px] md:text-[18px] lg:text-[20px] bg-gradient-to-r from-[#c9d1ff] to-[#8c99eb] bg-clip-text text-transparent">
                  Talk to me
                </span>
              </div>
              {/* Chat Icon - appears on hover with sequential animation */}
              <div className="relative shrink-0 h-[20px] w-0 sm:h-[23px] lg:h-[26px] overflow-visible group-hover:w-[20px] sm:group-hover:w-[23px] lg:group-hover:w-[26px] transition-all duration-300 ease-out">
                <div className="relative size-full">
                  <div className="absolute aspect-square left-[12.5%] right-[4.17%] top-[calc(50%-1px)] -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center">
                    <Image src="/chat-1.svg" alt="" fill className="object-contain" />
                  </div>
                  <div className="absolute aspect-square left-0 right-1/2 top-[calc(50%+7px)] -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 delay-200 ease-out origin-center">
                    <Image src="/chat-2.svg" alt="" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-[14px] font-normal leading-[1.4] text-[#a5aee9] whitespace-nowrap">
              or connect via social:
            </span>
            <a 
              href="https://linkedin.com/in/mkosorukov/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-[18px] h-[18px] flex items-center justify-center hover:brightness-125 hover:saturate-150 transition-all"
              aria-label="LinkedIn"
            >
              <Image src="/social-linkedin-about.svg" alt="LinkedIn" width={18} height={18} className="w-full h-full" />
            </a>
            <a 
              href="https://api.whatsapp.com/send?phone=66999089830"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-[18px] h-[18px] flex items-center justify-center hover:brightness-125 hover:saturate-150 transition-all"
              aria-label="WhatsApp"
            >
              <Image src="/social-whatsapp-about.svg" alt="WhatsApp" width={18} height={18} className="w-full h-full" />
            </a>
            <a 
              href="https://t.me/mkosorukov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-[18px] h-[18px] flex items-center justify-center hover:brightness-125 hover:saturate-150 transition-all"
              aria-label="Telegram"
            >
              <Image src="/icon-telegram.svg" alt="Telegram" width={18} height={18} className="w-full h-full" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Right Column - Photo Container */}
      <div className="w-full shrink-0 lg:flex lg:shrink-0 lg:grow lg:basis-0 lg:flex-row lg:items-center lg:self-stretch">
        <div 
          className="relative w-full overflow-hidden rounded-[5px] border border-solid border-[#3f4367] bg-[#1d2241] p-[24px]"
          style={{ aspectRatio: '1 / 1' }}
        >
          {/* Dot pattern background - static */}
          <div 
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/Dots-Pattern-2.svg')",
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
              opacity: 0.15,
            }}
          />
          {/* Photo container */}
          <div 
            className="relative z-10 flex h-full w-full items-center justify-center overflow-clip rounded-[5px] border border-solid border-[#3f4367]"
            style={{ boxShadow: '0 0 6px 0 rgba(5, 9, 32, 0.9)' }}
          >
            <Image
              src="/About_photo.png"
              alt="Mike Kosorukov"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

