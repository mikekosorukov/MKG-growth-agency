import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LogoCarousel from "@/components/LogoCarousel";
import BookingSection from "@/components/BookingSection";
import DividerSection from "@/components/DividerSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionIntroSection from "@/components/SolutionIntroSection";
import SecondaryNav from "@/components/SecondaryNav";
import ContentShowcaseSection from "@/components/ContentShowcaseSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";

export const metadata: Metadata = {
  title: "Approach",
  description: "How we work with tech startups and SMEs to build effective GTM systems.",
};

export default function ApproachPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1f] overflow-x-clip">
      <Header />

      <main className="overflow-visible">
        {/* Hero Section */}
        <section
          className="hero-section-bg box-border relative flex w-full flex-col items-center gap-[40px] px-[20px] pb-[60px] pt-[120px] sm:gap-[50px] sm:px-[40px] sm:pb-[80px] sm:pt-[130px] md:gap-[60px] md:px-[60px] md:pb-[100px] md:pt-[145px] lg:gap-[80px] lg:px-[80px] lg:pb-[120px] lg:pt-[170px] overflow-hidden border-b border-solid border-[#3f4367]"
          aria-label="Approach hero"
        >
          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 w-full z-[1] pointer-events-none"
            style={{
              backgroundImage: 'url(/300-60-15-monochrome.webp)',
              backgroundRepeat: 'repeat',
              backgroundSize: '350px 350px',
              mixBlendMode: 'soft-light',
              opacity: 0.65,
            }}
          />

          {/* H1 Title */}
          <div className="relative w-full max-w-5xl text-center z-10 -mt-[50px]">
            <h1
              className="hero-heading hero-gradient-text relative w-full shrink-0 font-bold leading-[1.1]"
              style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
            >
              Hockey stick growth is a result of compounding growth systems
            </h1>
          </div>

          {/* Subtitle */}
          <div className="relative w-full max-w-3xl text-center -mt-[20px] sm:-mt-[25px] md:-mt-[30px] lg:-mt-[40px] z-10">
            <p
              className="relative w-full shrink-0 font-normal leading-[1.4] text-[#a5aee9]"
              style={{ fontSize: 'clamp(16px, 1.6vw, 20px)' }}
            >
              We partner with traction and early-growth tech startups and SMEs to build{' '}
              <br className="hidden md:block" />a complete GTM system grounded in deep customer insight
            </p>
          </div>
        </section>

        {/* Logo Carousel */}
        <LogoCarousel />

        {/* Problem Section */}
        <ProblemSection />

        {/* Solution Intro Section */}
        <SolutionIntroSection />

        {/* Secondary Navigation */}
        <SecondaryNav />

        {/* Content Showcase Section */}
        <ContentShowcaseSection id="content-showcase-outcomes" />

        {/* Video Showcase Section */}
        <VideoShowcaseSection id="content-showcase-problems" />

        {/* Content Showcase Section */}
        <ContentShowcaseSection id="content-showcase-solutions" />

        {/* Video Showcase Section */}
        <VideoShowcaseSection id="content-showcase-problems-2" />

        {/* Divider Section - with angled stripe pattern */}
        <DividerSection variant="angled" />

        {/* Booking Section */}
        <BookingSection />
      </main>

      <Footer />
    </div>
  );
}
