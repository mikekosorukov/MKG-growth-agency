import Image from 'next/image';
import Link from 'next/link';

export interface AIProductActivationCardProps {
  href: string;
  /** Small uppercase line above the title */
  eyebrow?: string;
  /** Main line next to the arrow */
  label: string;
  className?: string;
}

/**
 * AI product activation — promo / teaser card shell (hover, texture, arrow).
 * Edit copy, links, and layout here; CaseStudyLayout uses this for “Next case study”.
 */
export default function AIProductActivationCard({
  href,
  eyebrow = 'Next case study',
  label,
  className = 'mt-[64px] sm:mt-[80px] w-full',
}: AIProductActivationCardProps) {
  return (
    <div className={className}>
      <Link
        href={href}
        aria-label={`${eyebrow}: ${label}`}
        className="group relative block w-full cursor-pointer overflow-hidden rounded-[5px] border border-solid border-[#3f4367] bg-[#1d2241] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-2 hover:border-[#5f6387] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8c99eb]"
      >
        <Image
          aria-hidden
          alt=""
          src="/header-bg.webp"
          fill
          sizes="(max-width: 1024px) 100vw, 900px"
          className="pointer-events-none absolute inset-0 max-w-none object-cover mix-blend-soft-light opacity-20 transition-opacity duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:opacity-[0.28]"
        />
        <div className="relative z-10 px-[20px] py-[24px] sm:px-[24px] sm:py-[28px]">
          <p className="mb-[12px] text-[12px] font-normal uppercase leading-[1.4] tracking-wide text-[#7078B8] transition-colors duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:text-[#a5aee9]">
            {eyebrow}
          </p>
          <div className="inline-flex items-center gap-[7px] text-[18px] font-medium leading-none text-[#dcdff2] transition-colors duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:text-white sm:text-[20px]">
            <span>{label}</span>
            <div className="relative h-[24px] w-[24px] shrink-0 text-[#8c99eb] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:translate-x-1 group-hover:rotate-[360deg]">
              <Image
                src="/arrow-right.svg"
                alt=""
                width={24}
                height={24}
                className="size-full"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
