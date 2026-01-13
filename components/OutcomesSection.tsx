'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Notification from './Notification';

export default function OutcomesSection() {
  const [showNotification, setShowNotification] = useState(false);
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});
  const [showMoreCards, setShowMoreCards] = useState(false);

  const handleFullStudyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowNotification(true);
  };

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  // All cards
  const allCards = [
    {
      id: 'card1',
      tag: 'B2B SaaS, early growth, sales-led',
      title: '$1.2M in net-new qualified pipeline',
      description: 'The initial audit surfaced a clear segment-level opportunity. The product delivered strong value for a specific customer segment, but the GTM motion was not optimized for that segment. We refocused positioning and messaging, rebuilt the website flow to proactively capture high-fit accounts and convert them into meetings, and updated sales scripts and workflows, generating $1.2M in net-new qualified pipeline in 2.5 months.',
      imageUrl: '/outcomes_1.png',
    },
    {
      id: 'card2',
      tag: 'Prosumer marketplace, growth stage, ~110 employees',
      title: 'Customer churn reduced by 30%',
      description: 'The existing growth constraint was high early churn. Analysis showed that churn was driven by inconsistent service quality on the supply side, which hampered the customer experience early in the lifecycle. We identified the key leading indicator tied to churn, mapped the highest-impact levers, and rebuilt the supplier quality loop. This improved the leading churn metric by 40× and reduced customer churn by 30% over the next three months.',
      imageUrl: '/outcomes_2.png',
    },
    {
      id: 'card3',
      tag: 'B2B SaaS, growth stage, product-led',
      title: '2× activation for a suite of AI products',
      description: 'Newly introduced AI capabilities faced adoption friction among existing and new vibe-coding users. We identified user desired outcomes and experience bottlenecks, mapped the user journey, and, partnering with the product team, created a coherent experience from the website visit to receiving first product value, resulting in a 100% increase in activation rate.',
      imageUrl: '/outcomes_3.png',
    },
  ];

  // Cards to display (first 3 or all)
  const visibleCards = showMoreCards ? allCards : allCards.slice(0, 3);
  const hasMoreCards = allCards.length > 3;

  const renderCard = (card: typeof allCards[0]) => {
    const isExpanded = expandedCards[card.id];
    return (
      <article
        key={card.id}
        className="flex flex-col justify-between border border-solid border-[#3f4367] bg-[#1d2241]"
      >
        {/* Image Area */}
        <div className="relative h-[220px] w-full overflow-hidden">
          {/* Background */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#323966] to-[#232b5c]" />
          </div>
          {/* Centered Image */}
          <div className="absolute inset-0 flex items-center justify-center px-[30px] py-[46px] sm:px-[36px] sm:py-[52px] md:px-[44px] md:py-[56px] lg:px-[50px] lg:py-[60px]">
            <Image
              src={card.imageUrl}
              alt={card.title}
              width={400}
              height={240}
              className="h-full w-auto max-w-full object-contain"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[16px] p-[16px] pt-[24px] flex-grow">
          {/* Tag - clips on right when container shrinks */}
          <div className="overflow-hidden mr-[-16px] pr-[31px]">
            <div className="bg-[rgba(112,120,184,0.01)] border border-solid border-[#7078B8] box-border flex items-center px-[12px] py-[2px] rounded-[12px] w-fit">
              <p className="font-normal leading-[1.4] text-[12px] text-[#7078B8] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                {card.tag}
              </p>
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-[20px] font-bold leading-[1.1] text-[#dcdff2]">
            {card.title}
          </h3>

          {/* Description */}
          <div className="text-[16px] font-normal leading-[1.4] text-[#a5aee9]">
            <p className={`${!isExpanded ? 'line-clamp-3' : ''}`}>
              {card.description}
            </p>
            {!isExpanded && card.description.length > 150 && (
              <button
                onClick={() => toggleCardExpansion(card.id)}
                className="text-[#8c99eb] hover:text-[#b4c0ff] transition-colors cursor-pointer ml-1 inline"
              >
                ... more
              </button>
            )}
            {isExpanded && (
              <button
                onClick={() => toggleCardExpansion(card.id)}
                className="text-[#8c99eb] hover:text-[#b4c0ff] transition-colors cursor-pointer mt-2 inline-block"
              >
                show less
              </button>
            )}
          </div>
        </div>

        {/* Button */}
        <div className="p-[16px] pt-0 mt-auto">
          <Link
            href="#case-study"
            onClick={handleFullStudyClick}
            className="group inline-flex items-center gap-[7px] py-[16px] transition-all"
            aria-label={`View full study: ${card.title}`}
          >
            <span className="bg-gradient-to-r from-[#c9d1ff] to-[#8c99eb] bg-clip-text text-[20px] font-medium leading-none tracking-[0.5px] text-transparent transition-all group-hover:from-[#e8edff] group-hover:to-[#b4c0ff]">
              Full study
            </span>
            <div className="relative h-[24px] w-[24px] text-[#8c99eb] transition-transform duration-500 group-hover:translate-x-1 group-hover:rotate-[360deg]">
              <Image
                src="/arrow-right.svg"
                alt=""
                width={24}
                height={24}
                className="size-full"
              />
            </div>
          </Link>
        </div>
      </article>
    );
  };

  return (
    <section
      id="outcomes"
      className="relative box-border flex w-full flex-col items-center gap-[40px] border border-solid border-[#3f4367] bg-[#171c39] px-[20px] py-[40px] sm:gap-[48px] sm:px-[40px] sm:py-[50px] md:gap-[56px] md:px-[60px] md:py-[60px] lg:gap-[64px] lg:px-[80px] lg:py-[80px] overflow-hidden"
      aria-labelledby="outcomes-heading"
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
          OUTCOMES
        </p>
        <h2
          id="outcomes-heading"
          className="w-full text-[26px] font-bold leading-[1.1] text-[#dcdff2] sm:text-[30px] md:text-[34px] lg:text-[38px]"
        >
          The results delivered in the past
        </h2>
      </div>

      {/* Cards Container */}
      <div className="relative z-10 grid w-full max-w-[1280px] grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
        {visibleCards.map(card => renderCard(card))}
      </div>

      {/* Load More / Load Less Button - only show if more than 3 cards */}
      {hasMoreCards && (
        <button
          onClick={() => setShowMoreCards(!showMoreCards)}
          className="group relative z-10 flex shrink-0 items-center justify-center border border-solid border-[#494f8e] bg-[#0E1330]/30 px-[12px] py-[12px] transition-all hover:bg-[#1f2446] hover:border-[#7a82c4] cursor-pointer"
          aria-label={showMoreCards ? "Load less case studies" : "Load more case studies"}
        >
          <div className={`relative h-[20px] w-[20px] text-[#494f8e] transition-all group-hover:text-[#7a82c4] ${showMoreCards ? 'rotate-180 group-hover:-translate-y-1' : 'group-hover:translate-y-1'}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-[8px] px-[12px] py-0">
            <span className="text-[14px] font-medium leading-none tracking-[0.5px] text-[#494f8e] whitespace-pre transition-colors group-hover:text-[#7a82c4]">
              {showMoreCards ? 'Load less' : 'Load more'}
            </span>
          </div>
        </button>
      )}

      {/* Notification */}
      <Notification 
        isVisible={showNotification} 
        onClose={() => setShowNotification(false)} 
      />
    </section>
  );
}

