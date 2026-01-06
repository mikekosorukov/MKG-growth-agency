'use client';

import Image from 'next/image';

interface DividerSectionProps {
  variant?: 'default' | 'lines';
}

export default function DividerSection({ variant = 'default' }: DividerSectionProps) {
  if (variant === 'lines') {
    // Original style with horizontal SVG decoration lines
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

  // Default style with angled lines pattern
  return (
    <div className="bg-[#1d2241] box-border flex items-center relative w-full isolate z-10 h-[55px]" data-name="section" data-node-id="3328:18870">
      {/* Angled lines pattern */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 opacity-15 pointer-events-none z-0"
        style={{
          backgroundImage: 'url(/line-pattern-2.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />
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
    </div>
  );
}

