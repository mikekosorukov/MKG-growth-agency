'use client';

export default function DividerSection() {
  return (
    <div className="bg-[#1d2241] box-border flex items-center relative w-full isolate z-10 h-[55px]" data-name="section" data-node-id="3328:18870">
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

