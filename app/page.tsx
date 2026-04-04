import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OutcomesSection from "@/components/OutcomesSection";
import ChallengesSection from "@/components/ChallengesSection";
import CompaniesSection from "@/components/CompaniesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import ComparisonSection from "@/components/ComparisonSection";
import AboutSection from "@/components/AboutSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import DividerSection from "@/components/DividerSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0e1f] overflow-x-clip">
      <Header />
      
      <main className="overflow-visible">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Divider Section */}
        <DividerSection />
        
        {/* About Section */}
        <AboutSection />

        {/* Divider Section - with horizontal lines decoration */}
        <DividerSection variant="lines" />
        
        {/* Challenges Section */}
        <ChallengesSection />

        {/* Outcomes Section */}
        <OutcomesSection />
        
        {/* Companies Section */}
        <CompaniesSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Pricing Section */}
        <PricingSection />

        {/* Comparison Section */}
        <ComparisonSection />

        {/* Booking Section */}
        <BookingSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
