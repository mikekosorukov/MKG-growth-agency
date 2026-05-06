import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingSection';
import DividerSection from '@/components/DividerSection';
import { getAllCaseStudies } from '@/lib/case-studies';

export const metadata: Metadata = {
  title: 'Case Studies – MKG Lab',
  description:
    'Real results from real engagements. Browse case studies across B2B SaaS, marketplaces, and growth-stage companies.',
};

const heroImages: Record<string, string> = {
  'jet-admin': '/jethomepage.png',
  'aqua-cloud': '/aqua_screen.png',
  'rent-ready': '/RRhome.png',
  'noclick': '/noclickhome.png',
};

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies();

  return (
    <div className="min-h-screen bg-[#171c39] overflow-x-clip">
      <Header />

      <main className="overflow-visible">
        <section
          className="relative box-border flex w-full flex-col items-center gap-[40px] px-[20px] pt-[80px] pb-[60px] sm:gap-[48px] sm:px-[40px] sm:pt-[90px] sm:pb-[80px] md:gap-[56px] md:px-[60px] md:pt-[100px] md:pb-[100px] lg:gap-[64px] lg:px-[80px] lg:pt-[120px] lg:pb-[120px] border-b border-solid border-[#3f4367] overflow-hidden"
          aria-labelledby="case-studies-heading"
        >
          {/* Noise texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              backgroundImage: 'url(/300-60-15-monochrome.webp)',
              backgroundRepeat: 'repeat',
              backgroundSize: '350px 350px',
              mixBlendMode: 'soft-light',
              opacity: 0.85,
            }}
          />

          {/* Header */}
          <div className="relative z-10 flex w-full max-w-[1280px] flex-col items-center gap-[6px] text-center sm:gap-[8px]">
            <h1
              id="case-studies-heading"
              className="hero-heading hero-gradient-text w-full font-bold leading-[1.1]"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
            >
              Results that compound
            </h1>
            <p className="mt-[8px] max-w-[600px] text-[16px] font-normal leading-[1.6] text-[#a5aee9] sm:text-[17px] md:text-[18px]">
              Real engagements with B2B tech companies. Learn about the work I&apos;ve delivered and how it impacted their growth.
            </p>
          </div>

          {/* Cards grid */}
          <div className="relative z-10 grid w-full max-w-[1280px] grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
            {studies.map((study) => {
              const image = heroImages[study.slug] ?? study.cardImage ?? study.logo;

              return (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[5px] border border-solid border-[#3f4367] bg-[#1d2241] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-2 hover:border-[#5f6387] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8c99eb]"
                >
                  {/* Image */}
                  <div className="relative h-[220px] w-full overflow-hidden">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#323966] to-[#232b5c]" />
                    </div>
                    {image && (
                      <Image
                        src={image}
                        alt={study.headline}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-[16px] p-[16px] pt-[24px]">
                    <div className="overflow-hidden mr-[-16px] pr-[31px]">
                      <div className="flex flex-wrap items-center gap-[8px]">
                        {study.homepageTagLine.split(',').map((tagPart, index) => (
                          <div
                            key={`${study.slug}-${index}`}
                            className="bg-[rgba(112,120,184,0.01)] border border-solid border-[#7078B8] box-border flex items-center px-[12px] py-[2px] rounded-[12px]"
                          >
                            <p
                              className="font-normal leading-[1.4] text-[12px] text-[#7078B8] whitespace-nowrap"
                              style={{ fontVariationSettings: "'wdth' 100" }}
                            >
                              {tagPart.trim()}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <h2 className="text-[20px] font-bold leading-[1.1] text-[#dcdff2]">
                      {study.headline}
                    </h2>

                    {study.cardDescription && (
                      <p className="text-[16px] font-normal leading-[1.4] text-[#a5aee9] line-clamp-3">
                        {study.cardDescription}
                      </p>
                    )}
                  </div>

                  {/* Footer arrow */}
                  <div className="flex items-center gap-[7px] px-[16px] pb-[20px]">
                    <span className="bg-gradient-to-r from-[#c9d1ff] to-[#8c99eb] bg-clip-text text-[18px] font-medium leading-none tracking-[0.5px] text-transparent transition-all group-hover:from-[#e8edff] group-hover:to-[#b4c0ff]">
                      Read case study
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
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <DividerSection variant="angled" />
      <BookingSection />
      <Footer />
    </div>
  );
}
