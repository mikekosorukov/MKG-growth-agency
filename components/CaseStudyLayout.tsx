import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIProductActivationCard from '@/components/AIProductActivationCard';
import BookingSection from '@/components/BookingSection';
import DividerSection from '@/components/DividerSection';
import type { StudyMeta } from '@/lib/case-studies';

interface ClientInfo {
  name: string;
  title: string;
  avatar?: string;
}

interface CaseStudyLayoutProps {
  study: StudyMeta;
  sidebarStudy?: StudyMeta;
  client?: ClientInfo;
  heroImage?: string;
  nextCaseStudy?: { href: string; label: string };
  children: ReactNode;
}

function MetaRow({ label, value, href, suffix }: { label: string; value: string; href?: string; suffix?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-[12px] py-[12px] border-b border-[#3f4367] last:border-b-0">
      <span className="shrink-0 text-[16px] font-normal leading-[1.4] text-[#8F98E8]">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-right text-[16px] font-normal leading-[1.4] text-[#dcdff2] underline underline-offset-2 hover:text-[#c9d1ff] transition-colors"
        >
          {value}{suffix && <span className="ml-[5px] text-[20px]">{suffix}</span>}
        </a>
      ) : (
        <span className="text-right text-[16px] font-normal leading-[1.4] text-[#dcdff2]">
          {value}{suffix && <span className="ml-[5px] text-[20px]">{suffix}</span>}
        </span>
      )}
    </div>
  );
}

export default function CaseStudyLayout({
  study,
  sidebarStudy,
  client,
  heroImage,
  nextCaseStudy,
  children,
}: CaseStudyLayoutProps) {
  const sidebar = sidebarStudy ?? study;
  return (
    <div className="min-h-screen bg-[#171c39] overflow-x-clip">
      <Header />

      <main className="relative">
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

        <div className="relative z-10 w-full border-b border-solid border-[#3f4367] px-[20px] py-[48px] sm:px-[40px] sm:py-[64px] md:px-[60px] lg:px-[80px] lg:py-[80px]">
          <div className="mx-auto max-w-[1200px]">
            {/* Two-column layout — flex-start so sticky sidebar works */}
            <div className="flex gap-[48px] lg:gap-[64px] items-start">

              {/* LEFT SIDEBAR — sticky; scrolls with container when content ends */}
              <aside className="hidden lg:flex flex-col w-[300px] shrink-0 sticky top-[111px] self-start">
                <div className="relative overflow-hidden rounded-[5px] border border-solid border-[#3f4367] bg-[#1d2241]">
                  {/* Header-style background image */}
                  <Image
                    aria-hidden
                    alt=""
                    src="/header-bg.webp"
                    fill
                    sizes="280px"
                    className="pointer-events-none absolute inset-0 max-w-none object-cover mix-blend-soft-light opacity-20"
                  />

                  {/* Logo */}
                  {sidebar.logo && (
                    <div className="relative z-10 flex items-center justify-center p-[24px] border-b border-[#3f4367]">
                      <div className="overflow-hidden rounded-[16px]">
                        <Image
                          src={sidebar.logo}
                          alt={`${sidebar.company} logo`}
                          width={120}
                          height={60}
                          className="object-contain max-h-[60px] w-auto"
                        />
                      </div>
                    </div>
                  )}

                  {/* Metadata rows */}
                  <div className="relative z-10 flex flex-col px-[16px]">
                    {sidebar.website && (
                      <MetaRow
                        label="Website"
                        value={sidebar.website}
                        href={`https://${sidebar.website}`}
                      />
                    )}
                    {sidebar.companyType && (
                      <MetaRow label="Company type" value={sidebar.companyType} />
                    )}
                    {sidebar.companyStage && (
                      <MetaRow
                        label="Founded"
                        value={sidebar.companyStage}
                        suffix={sidebar.companyStageSuffix ?? '🇺🇸'}
                      />
                    )}
                    {sidebar.funding && (
                      <MetaRow label="Funding" value={sidebar.funding} />
                    )}
                    {sidebar.teamSize && (
                      <MetaRow label="Team size" value={sidebar.teamSize} />
                    )}
                    {sidebar.engagement && (
                      <MetaRow label="Engagement" value={sidebar.engagement} />
                    )}
                    {sidebar.dateRange && (
                      <MetaRow label="Period" value={sidebar.dateRange} />
                    )}
                  </div>

                </div>
              </aside>

              {/* RIGHT CONTENT */}
              <div className="flex-1 min-w-0">

                {/* Back link */}
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-[8px] text-[13px] font-normal text-[#7078B8] hover:text-[#a5aee9] transition-colors mb-[40px]"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M10 12L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  All case studies
                </Link>

                {/* Case study header */}
                <div className="mb-[40px] sm:mb-[48px]">
                  <p className="text-[12px] font-normal leading-[1.4] text-[#ff885d] uppercase tracking-wide mb-[14px] sm:text-[13px]">
                    Case Study
                  </p>
                  <h1
                    className="font-bold leading-[1.1] text-[#dcdff2] mb-[32px]"
                    style={{ fontSize: 'clamp(26px, 3.2vw, 38px)' }}
                  >
                    {study.headline}
                  </h1>

                  {/* Attributions row */}
                  {client && (
                    <div className="flex flex-wrap items-center gap-[16px] mb-[20px]">
                      {/* Client */}
                      <div className="flex items-center gap-[10px]">
                        {client.avatar && (
                          <div className="relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-full bg-[#1d2241]">
                            <Image
                              src={client.avatar}
                              alt={client.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="flex min-w-0 flex-col items-start gap-[4px]">
                          <p className="text-[14px] font-medium leading-[1.1] text-[#dcdff2]">
                            {client.name}
                          </p>
                          <p className="text-[12px] font-normal leading-[1.2] text-[#a5aee9]">
                            {client.title}
                          </p>
                        </div>
                      </div>

                      {/* × separator */}
                      <span className="text-[20px] font-light text-[#3f4367] shrink-0">×</span>

                      {/* Mike */}
                      <div className="flex items-center gap-[10px]">
                        <div className="relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-full bg-[#a5aee9]/75">
                          <Image
                            src="/mike_avatar.svg"
                            alt="Mike Kosorukov"
                            fill
                            className="object-contain scale-[1.45] translate-x-[-3%] translate-y-[2%]"
                          />
                        </div>
                        <div className="flex min-w-0 flex-col items-start gap-[4px]">
                          <p className="text-[14px] font-medium leading-[1.1] text-[#dcdff2]">
                            Mike Kosorukov
                          </p>
                          <p className="text-[12px] font-normal leading-[1.2] text-[#a5aee9]">
                            Founder of MKG Lab
                          </p>
                        </div>
                      </div>
                    </div>
                  )}


                  {/* Hero image */}
                  {heroImage && (
                    <div className="relative mt-[40px] sm:mt-[48px] w-full aspect-video overflow-hidden rounded-[5px]">
                      <Image
                        src={heroImage}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) calc(100vw - 160px), 1000px"
                        className="object-cover"
                        priority
                      />
                    </div>
                  )}

                </div>

                {/* Main content — prose styles cascade to children */}
                <div
                  className="
                    [&_h2]:text-[22px] [&_h2]:font-bold [&_h2]:leading-[1.1] [&_h2]:text-[#dcdff2] [&_h2]:mt-[48px] [&_h2]:mb-[16px]
                    sm:[&_h2]:text-[26px] md:[&_h2]:text-[30px]
                    [&_h3]:text-[18px] [&_h3]:font-bold [&_h3]:leading-[1.2] [&_h3]:text-[#dcdff2] [&_h3]:mt-[32px] [&_h3]:mb-[12px]
                    sm:[&_h3]:text-[20px]
                    [&_p]:text-[16px] [&_p]:font-normal [&_p]:leading-[1.6] [&_p]:text-[#a5aee9] [&_p]:mb-[16px]
                    sm:[&_p]:text-[17px] md:[&_p]:text-[18px]
                    [&_strong]:font-bold [&_strong]:text-[#dcdff2]
                    [&_em]:text-[#c5caf0]
                    [&_a]:text-[#8c99eb] [&_a]:underline [&_a]:underline-offset-2
                    [&_ul]:list-disc [&_ul]:pl-[24px] [&_ul]:mb-[16px]
                    [&_ol]:list-decimal [&_ol]:pl-[24px] [&_ol]:mb-[16px]
                    [&_li]:text-[16px] [&_li]:font-normal [&_li]:leading-[1.6] [&_li]:text-[#a5aee9] [&_li]:mb-[4px]
                    sm:[&_li]:text-[17px] md:[&_li]:text-[18px]
                    [&_blockquote]:my-[24px] [&_blockquote]:border-l-[3px] [&_blockquote]:border-[#8c99eb] [&_blockquote]:bg-[#171c39]/60 [&_blockquote]:px-[20px] [&_blockquote]:py-[16px]
                    [&_blockquote_p]:text-[#c5caf0] [&_blockquote_p]:italic [&_blockquote_p]:mb-0
                    [&_hr]:my-[40px] [&_hr]:border-t [&_hr]:border-[#3f4367]
                  "
                >
                  {children}
                </div>

                {/* Next case study — see AIProductActivationCard.tsx */}
                {nextCaseStudy && (
                  <AIProductActivationCard
                    href={nextCaseStudy.href}
                    label={nextCaseStudy.label}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <DividerSection variant="angled" />
      <BookingSection />
      <Footer />
    </div>
  );
}
