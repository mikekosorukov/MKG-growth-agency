'use client';

import Link from 'next/link';

interface PricingItem {
  text: string;
  sub?: string;
}

interface PricingTier {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: (string | PricingItem)[];
  arrowItems?: string[];
  ctaText?: string;
  featured?: boolean;
}

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-[1px] shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="11" stroke="#4ade80" strokeWidth="1.05" fill="none" />
    <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="#4ade80" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-[1px] shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="11" stroke="#E7A5E9" strokeWidth="1.05" fill="none" />
    <path d="M8 12H16M16 12L13 9M16 12L13 15" stroke="#E7A5E9" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 6A2.25 2.25 0 014.5 3.75h15A2.25 2.25 0 0121.75 6v12A2.25 2.25 0 0119.5 20.25h-15A2.25 2.25 0 012.25 18V6zm2.25-.75A.75.75 0 003.75 6v.511l8.25 5.5 8.25-5.5V6a.75.75 0 00-.75-.75h-15zm15.75 2.72l-7.864 5.243a.75.75 0 01-.822 0L3.75 7.97V18c0 .414.336.75.75.75h15a.75.75 0 00.75-.75V7.97z"
      fill="#8c99eb"
    />
  </svg>
);

const PinIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.25a6.75 6.75 0 00-6.75 6.75c0 4.153 3.892 8.894 6.066 11.236a.916.916 0 001.368 0C14.858 17.894 18.75 13.153 18.75 9A6.75 6.75 0 0012 2.25zM12 11.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
      fill="#8c99eb"
    />
  </svg>
);

const FlagIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.75 3a.75.75 0 01.75.75V4.5h14.25a.75.75 0 01.596 1.206l-3.703 4.629 3.703 4.629A.75.75 0 0118.75 16.5H4.5v3.75a.75.75 0 01-1.5 0V3.75A.75.75 0 013.75 3zm.75 12h12.69l-3.203-4.004a.75.75 0 010-.937L17.19 6H4.5v9z"
      fill="#8c99eb"
    />
  </svg>
);

const tiers: PricingTier[] = [
  {
    icon: <PinIcon />,
    title: 'GTM Diagnostic',
    description: 'I do a 360° diagnostic of your positioning, growth model, and go-to-market motion. I deliver an assessment with a clear path to success.',
    items: [
      'One week to deliver',
      'Get data-backed GTM decisions',
      'Receive a clear action roadmap',
    ],
    arrowItems: [],
    ctaText: 'Book a discovery call',
    featured: true,
  },
  {
    icon: <EnvelopeIcon />,
    title: 'Ongoing Partnership',
    description: 'Ongoing engagement with weekly deep-dives. We fix what\'s broken, identify your growth levers, and execute a focused GTM strategy together.',
    items: [
      '3-12+ months engagement',
      'Get business results, not deliverables',
      'Flexible engagement format',
    ],
    arrowItems: [],
    ctaText: 'Book a discovery call',
  },
  {
    icon: <FlagIcon />,
    title: 'Focused Engagement',
    description: 'Time-bound projects with clear deliverables: redesign activation flow, build a foundational GTM strategy, or fix your positioning and messaging.',
    items: [
      '2-3 weeks sprints',
      'Get specific results fast',
      'Hands-on execution in tranches with your team',
    ],
    arrowItems: [],
    ctaText: 'Book a discovery call',
  },
  {
    icon: <PinIcon />,
    title: '1-on-1 free consultation',
    description: '',
    items: [
      '30-45 minutes call',
      'Discuss your challenges and get expert opinion',
      'Explore working together',
    ],
    arrowItems: [],
    ctaText: 'Get your free consultation',
    featured: true,
  },
];

function PricingCard({ tier, centered }: { tier: PricingTier; centered?: boolean }) {
  return (
    <article
      className="grid grid-rows-subgrid row-span-5 gap-[20px] overflow-hidden rounded-[5px] p-[28px] lg:p-[32px] border border-solid border-[#3f4367] bg-[#1d2241]"
    >
      {/* Block 1: Title */}
      <div className={`flex flex-col gap-[4px] ${centered ? 'items-center text-center' : ''}`}>
        <h3 className="text-[20px] font-bold leading-[1.2] text-[#dcdff2] lg:text-[22px] whitespace-pre-line">
          {tier.title}
        </h3>
      </div>

      {/* Block 2: Description */}
      {tier.description && (
        <div className="flex flex-col gap-[14px]">
          <p className="text-[14px] leading-[1.6] text-[#dcdff2] lg:text-[15px]">
            {tier.description}
          </p>
        </div>
      )}

      {/* Block 3: Checklist */}
      <div className={`flex flex-col gap-[20px] ${centered ? 'items-center' : ''}`}>
        <div className="h-px w-full bg-[#3f4367]" />
        <ul className="flex flex-col gap-[10px]">
          {tier.items.map((item) => {
            const text = typeof item === 'string' ? item : item.text;
            const sub = typeof item === 'string' ? undefined : item.sub;
            return (
              <li key={text} className="flex items-start gap-[10px]">
                <CheckIcon />
                <div className="flex flex-col gap-[2px]">
                  <span className="text-[14px] leading-[1.5] text-[#a5aee9] lg:text-[15px]">
                    {text}
                  </span>
                  {sub && (
                    <span className="text-[10px] font-normal leading-[1.4] text-[#a5aee9]">
                      {sub}
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Block 4: Arrow items */}
      <div className="flex flex-col gap-[20px]">
        {tier.arrowItems && tier.arrowItems.length > 0 && (
          <>
            <div className="h-px w-full bg-[#3f4367]" />
            <ul className="flex flex-col gap-[10px]">
              {tier.arrowItems.map((item) => (
                <li key={item} className="flex items-start gap-[10px]">
                  <ArrowIcon />
                  <span className="text-[14px] leading-[1.5] text-[#a5aee9] lg:text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Block 5: CTA */}
      <div className="flex flex-col gap-[24px] justify-end">
        <Link
          href="/bookings"
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-[42px] flex w-full items-center justify-center border border-[#8c99eb] bg-gradient-to-r from-[#323966] to-[#232b5c] hover:from-[#3a4170] hover:to-[#2a3467] transition-all"
          aria-label={`${tier.ctaText || 'Get in touch'} — ${tier.title}`}
        >
          <span className="text-sm sm:text-base font-medium tracking-wide bg-gradient-to-r from-[#c9d1ff] to-[#8c99eb] bg-clip-text text-transparent">
            {tier.ctaText || 'Get in touch'}
          </span>
        </Link>
      </div>
    </article>
  );
}

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative box-border flex w-full flex-col items-center gap-[40px] border border-solid border-[#3f4367] bg-[#171c39] px-[20px] py-[40px] sm:px-[40px] sm:py-[60px] lg:px-[80px] lg:py-[80px] overflow-hidden"
      aria-label="Pricing"
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

      <div className="relative z-10 flex w-full max-w-[1280px] flex-col items-center gap-[48px]">
        {/* Section header */}
        <div className="flex flex-col items-center gap-[8px] text-center">
          <p className="text-[12px] font-normal leading-[1.4] text-[#ff885d] sm:text-[13px] md:text-[14px]">
            FORMAT
          </p>
          <h2 className="text-[26px] font-bold leading-[1.1] text-[#dcdff2] sm:text-[30px] md:text-[34px] lg:text-[38px]">
          Three paths toward durable growth
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid w-full grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
          {tiers.slice(0, 3).map((tier) => (
            <PricingCard key={tier.title} tier={tier} />
          ))}
        </div>
        {/* Centered 4th card */}
        <div className="flex w-full flex-col items-center gap-[40px]">
          <p className="w-full text-center text-[20px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[22px] md:text-[24px] pt-[16px] sm:pt-[24px] md:pt-[32px]">
            Not sure what&apos;s best for you?
          </p>
          <div className="relative w-full lg:max-w-[calc(66.666%-5px)]">
            <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 z-10 rounded-[12px] bg-[#171c39]">
              <div className="bg-[rgba(231,165,233,0.15)] border border-solid border-[#E7A5E9] flex items-center justify-center px-[12px] py-[2px] rounded-[12px] w-fit">
                <span className="text-[13px] font-medium leading-[1.4] text-[#E7A5E9] whitespace-nowrap">Start here</span>
              </div>
            </div>
            <PricingCard tier={tiers[3]} centered />
          </div>
        </div>
      </div>
    </section>
  );
}
