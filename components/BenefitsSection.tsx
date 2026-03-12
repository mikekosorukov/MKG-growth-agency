'use client';

import Image from 'next/image';

export default function BenefitsSection() {
  const cards = [
    {
      icon: '/icon/ionicons/filled/flame.svg',
      title: 'Activation',
      text: "Most tech startups don't have the business expertise to bring their product to market — yet it's too early to hire a full-time executive."
    },
    {
      icon: '/icon/ionicons/filled/reload.svg',
      title: 'Engagement',
      text: "Solving go-to-market with default tactics is a dangerous shortcut. Without truly understanding the customer first, that approach always fails."
    },
    {
      icon: '/icon/ionicons/filled/journal.svg',
      title: 'Monetization',
      text: "One-and-done doesn't work for go-to-market. Without team alignment and buy-in, the GTM efforts will stall."
    },
    {
      icon: '/icon/ionicons/filled/color-filter.svg',
      iconSize: 35,
      title: 'Holistic system',
      text: "Placeholder text for the fourth benefit card. Replace with your actual content."
    }
  ];

  return (
    <section 
      id="benefits"
      className="relative box-border flex w-full flex-col items-center gap-[40px] border border-solid border-[#3f4367] border-b-0 bg-[#1d2241] px-[40px] pt-[40px] pb-[50px] sm:gap-[48px] sm:px-[80px] sm:pt-[50px] sm:pb-[65px] md:gap-[56px] md:px-[120px] md:pt-[60px] md:pb-[80px] lg:gap-[64px] lg:px-[160px] lg:pt-[80px] lg:pb-[100px] overflow-hidden"
      style={{ boxShadow: '0 -6px 6px -6px rgba(5, 9, 32, 0.9), 0 6px 6px -6px rgba(5, 9, 32, 0.9)' }}
      aria-labelledby="benefits-heading"
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

      {/* Section Title */}
      <div className="relative z-10 flex w-full max-w-[1280px] flex-col items-center gap-[6px] text-center sm:gap-[8px]">
        <p className="w-full text-[12px] font-normal leading-[1.4] text-[#ff885d] sm:text-[13px] md:text-[14px]">
          BENEFITS
        </p>
        <h2 
          id="benefits-heading"
          className="w-full text-[26px] font-bold leading-[1.1] text-[#dcdff2] sm:text-[30px] md:text-[34px] lg:text-[38px]"
        >
          Product-led growth and Product-led sales<br />to make your TOF efforts count
        </h2>
      </div>

      {/* Cards Container */}
      <div className="relative z-10 grid w-full max-w-[1280px] grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <article
            key={index}
            className="flex flex-col items-center gap-[16px] border border-solid border-[#3f4367] bg-[#171c39] pt-[32px] px-[16px] pb-[32px]"
          >
            {/* Icon */}
            <div className="relative shrink-0" style={{ width: card.iconSize ?? 32, height: card.iconSize ?? 32 }}>
              <Image
                src={card.icon}
                alt=""
                width={card.iconSize ?? 32}
                height={card.iconSize ?? 32}
                className="block h-full w-full"
                style={{ filter: 'brightness(0) saturate(100%) invert(73%) sepia(16%) saturate(500%) hue-rotate(195deg) brightness(102%)' }}
              />
            </div>

            {/* Title */}
            <h3 className="w-full text-center text-[20px] font-bold leading-[1.1] text-[#dcdff2]">
              {card.title}
            </h3>
            
            {/* Text */}
            <p className="w-full text-center text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
              {card.text}
            </p>
          </article>
        ))}
      </div>

      {/* Testimonial quote */}
      <div className="relative z-10 flex w-full max-w-[900px] flex-col items-center gap-[24px] text-center">
        <blockquote className="text-[20px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[22px] md:text-[24px]">
          &ldquo;Thanks to Mike&apos;s work, we had impressive positive changes in how we go to market and how our funnel works.&rdquo;
        </blockquote>
        <div className="flex items-center gap-[10px]">
          <div className="relative h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full bg-[#171c39]">
            <Image
              src="/testimonial-icon-2.jpeg"
              alt="Kirill Chabanov"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex min-w-0 flex-col items-start gap-[4px] text-left">
            <p className="w-full text-[14px] font-medium leading-[1.1] text-[#dcdff2]">
              Kirill Chabanov
            </p>
            <p className="w-full text-[12px] font-normal leading-[1.2] text-[#a5aee9]">
              CMO & COO at aqua cloud
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
