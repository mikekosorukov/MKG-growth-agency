'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function VideoShowcaseSection({ id }: { id?: string }) {
  // Determine which tag to show based on id
  const getTag = () => {
    if (id === 'content-showcase-problems') {
      return (
        <div className="bg-[rgba(184,165,233,0.15)] border border-solid border-[#B8A5E9] box-border content-stretch flex gap-[24px] items-center justify-center px-[12px] py-[2px] relative rounded-[12px] w-fit" data-name="Customer tag" data-node-id="3322:18850">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[14px] text-center text-nowrap text-[#B8A5E9] whitespace-pre" data-node-id="3322:18851" style={{ fontVariationSettings: "'wdth' 100" }}>
            Customer
          </p>
        </div>
      );
    } else if (id === 'content-showcase-problems-2') {
      return (
        <div className="bg-[rgba(233,165,165,0.15)] border border-solid border-[#E9A5A5] box-border content-stretch flex gap-[24px] items-center justify-center px-[12px] py-[2px] relative rounded-[12px] w-fit" data-name="Execution tag" data-node-id="3322:18856">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[14px] text-center text-nowrap text-[#E9A5A5] whitespace-pre" data-node-id="3322:18857" style={{ fontVariationSettings: "'wdth' 100" }}>
            Execution
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      id={id}
      className={`relative box-border flex w-full flex-col items-center ${
        id === 'content-showcase-problems-2' 
          ? 'border border-solid border-[#3f4367]' 
          : 'border border-solid border-[#3f4367]'
      } bg-[#171c39] px-[20px] py-[40px] sm:px-[40px] sm:py-[50px] md:px-[60px] md:py-[60px] lg:px-[80px] lg:py-[80px] overflow-hidden`}
      aria-label="Video Showcase"
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
      <div className="relative z-10 w-full max-w-[1280px] flex flex-col items-center gap-[40px] lg:flex-row lg:gap-[80px]">
      {/* Left Column - Media Container */}
      <div className="w-full shrink-0 lg:flex lg:shrink-0 lg:grow lg:basis-0 lg:flex-row lg:items-center lg:self-stretch">
        {id === 'content-showcase-problems' ? (
          <div 
            className="relative h-[400px] w-full overflow-hidden rounded-[5px] border border-solid border-[#3f4367] p-[24px] sm:h-[450px] md:h-[500px] lg:h-full lg:min-h-[400px]"
          >
            {/* Pattern background layer */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none z-0"
              style={{
                backgroundImage: 'url(/line-pattern-2.svg)',
                backgroundRepeat: 'repeat',
                backgroundSize: '200px 200px'
              }}
            />
            
            {/* Inner container with dark navy background */}
            <div 
              className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-[10px] overflow-clip rounded-[5px] border border-solid border-[#3f4367] bg-[#151A37]"
              style={{ boxShadow: '0 0 6px 0 rgba(5, 9, 32, 0.9)' }}
            >
              {/* Design-3-7-min PNG - on top of all layers */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <Image
                  src="/Design-3-7-min.png"
                  alt=""
                  width={583}
                  height={383}
                  className="w-full h-full object-contain opacity-100"
                  priority={false}
                />
              </div>
            </div>
          </div>
        ) : id === 'content-showcase-problems-2' ? (
          <div 
            className="relative h-[400px] w-full overflow-hidden rounded-[5px] border border-solid border-[#3f4367] p-[24px] sm:h-[450px] md:h-[500px] lg:h-full lg:min-h-[400px]"
          >
            {/* Pattern background layer */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none z-0"
              style={{
                backgroundImage: 'url(/line-pattern-2.svg)',
                backgroundRepeat: 'repeat',
                backgroundSize: '200px 200px'
              }}
            />
            
            {/* Inner container with dark navy background */}
            <div 
              className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-[10px] overflow-clip rounded-[5px] border border-solid border-[#3f4367] bg-[#151A37]"
              style={{ boxShadow: '0 0 6px 0 rgba(5, 9, 32, 0.9)' }}
            >
              {/* Design-4-3-min PNG - on top of all layers */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <Image
                  src="/Design-4-3-min.png"
                  alt=""
                  width={583}
                  height={383}
                  className="w-full h-full object-contain opacity-100"
                  priority={false}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Right Column - Content */}
      <div className="w-full shrink-0 lg:flex lg:shrink-0 lg:grow lg:basis-0 lg:flex-col lg:items-start lg:self-stretch">
        <div className="box-border flex w-full flex-col gap-[48px] px-0 py-[32px]">
          <div className="flex w-full flex-col gap-[32px]">
            <div className="flex w-full flex-col gap-[28px]">
              {/* Tag */}
              {getTag()}
              
              <h2 className="w-full text-[26px] font-bold leading-[1.1] text-[#dcdff2] sm:text-[30px] md:text-[34px] lg:text-[38px]">
                {id === 'content-showcase-problems'
                  ? 'Understand your customer: why they buy and how they buy'
                  : id === 'content-showcase-problems-2'
                  ? 'Translating strategy into outcomes'
                  : 'Bibendum amet at molestie mattis.'}
              </h2>
            </div>
            {id === 'content-showcase-problems' ? (
              <div className="w-full flex flex-col gap-[16px]">
                <p className="w-full text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
                Nothing impacts a tech company’s trajectory more than how well you understand your customer. Get this wrong, and every downstream GTM decision will compound the problem.
                </p>
                <p className="w-full text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
                We extract initial signals from sales calls, support conversations, and product-usage data, then build stronger evidence through conversations with real buyers and users. This surfaces who your best customers are, why they buy, where they go to evaluate solutions, and what keeps them coming back — key inputs into a strong GTM strategy.
                </p>
              </div>
            ) : id === 'content-showcase-problems-2' ? (
              <div className="w-full flex flex-col gap-[16px]">
                <p className="w-full text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
                Execution is where most founders jump right in, but outputs ≠ outcomes. Sales copy doesn&apos;t drive pipeline, and new onboarding doesn&apos;t improve retention on its own — unless they&apos;re the result of deep insight and a coherent strategy.
                </p>
                <p className="w-full text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
                We only deliver what the strategy determines will actually move the needle for this business at this stage.
                </p>
              </div>
            ) : (
              <p className="w-full text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
                Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.
              </p>
            )}
          </div>
          
        </div>
      </div>
      </div>
    </section>
  );
}

