export default function ChallengesSection() {
  const cards = [
    {
      icon: '/icon/ionicons/filled/reload.svg',
      title: 'Why do users sign up but never stick around?',
      text: 'Users sign up, poke around, some return the next week, but very few stick for long'
    },
    {
      icon: '/icon/ionicons/filled/journal.svg',
      title: 'Every sale feels like an uphill battle',
      text: "We get customers, but growth is slow and nothing compounds."
    },
    {
      title: 'What is the best motion for us?',
      text: 'Product-led, Sales-led, or Product-led Sales - choosing one feels like a gamble.'
    },
    {
      icon: '/icon/ionicons/filled/color-filter.svg',
      iconSize: 35,
      title: 'Our customers churn faster than we acquire new ones',
      text: "It feels like we're stuck in a loop with no way out."
    },
    {
      title: 'Who is our ideal customer?',
      text: "We have firmographic ICPs, but they don't tell us how to market or sell our product."
    }
  ];

  return (
    <section 
      id="challenges"
      className="relative box-border flex w-full flex-col items-center gap-[40px] border border-solid border-[#3f4367] border-b-0 bg-[#1d2241] px-[20px] pt-[40px] pb-[24px] sm:gap-[48px] sm:px-[40px] sm:pt-[50px] sm:pb-[32px] md:gap-[56px] md:px-[60px] md:pt-[60px] md:pb-[40px] lg:gap-[64px] lg:px-[80px] lg:pt-[80px] lg:pb-[48px] overflow-hidden"
      style={{ boxShadow: '0 -6px 6px -6px rgba(5, 9, 32, 0.9), 0 6px 6px -6px rgba(5, 9, 32, 0.9)' }}
      aria-labelledby="challenges-heading"
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
          CHALLENGES
        </p>
        <h2 
          id="challenges-heading"
          className="w-full text-[26px] font-bold leading-[1.1] text-[#dcdff2] sm:text-[30px] md:text-[34px] lg:text-[38px]"
        >
          Tough challenges I help B2B founders crack
        </h2>

      </div>

      {/* Cards + footer line */}
      <div className="relative z-10 flex w-full max-w-[1280px] flex-col gap-[24px] sm:gap-[32px] md:gap-[40px] lg:gap-[48px]">
        <div className="grid w-full grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-6">
          {cards.map((card, index) => {
            const isLastRow = index >= 3;
            return (
            <article
              key={index}
              className={`group relative h-[200px] overflow-hidden border border-solid border-[#3f4367] bg-[#171c39] cursor-default ${
                isLastRow ? 'lg:col-span-3' : 'lg:col-span-2'
              }`}
            >
              {/* Content wrapper — centered by default, slides to top on hover */}
              <div
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col gap-0 px-[16px] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:top-[32px] group-hover:translate-y-0 group-hover:gap-[16px]"
              >
                <h3 className="w-full pl-[30px] text-left text-[24px] font-medium leading-[1.1] text-[#dcdff2]">
                  {card.title}
                </h3>

                {/* Quote — hidden by default, fades + slides in on hover */}
                <div
                  className="flex w-full items-stretch gap-[14px] max-h-0 overflow-hidden opacity-0 translate-y-[12px] transition-all duration-500 delay-75 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:max-h-[200px] group-hover:overflow-visible group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <div className="flex flex-col items-center gap-[8px] pt-[2px]">
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                      <path d="M0 12V7.2C0 5.84 0.28 4.6 0.84 3.48C1.42 2.34 2.16 1.38 3.06 0.6L4.86 1.92C4.14 2.56 3.56 3.28 3.12 4.08C2.7 4.86 2.48 5.72 2.46 6.66H4.5V12H0ZM8.7 12V7.2C8.7 5.84 8.98 4.6 9.54 3.48C10.12 2.34 10.86 1.38 11.76 0.6L13.56 1.92C12.84 2.56 12.26 3.28 11.82 4.08C11.4 4.86 11.18 5.72 11.16 6.66H13.2V12H8.7Z" fill="#3f4367"/>
                    </svg>
                    <div className="w-[2px] flex-1 bg-[#3f4367] rounded-full" />
                  </div>
                  <p className="flex-1 text-left text-[16px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[17px] lg:text-[18px]">
                    {card.text}
                  </p>
                </div>
              </div>
            </article>
            );
          })}
        </div>

        <p className="w-full text-center text-[20px] font-normal leading-[1.4] text-[#a5aee9] sm:text-[22px] md:text-[24px]">
          ... and more.
        </p>
      </div>
    </section>
  );
}
