import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import DeepDiveSection from "@/components/DeepDiveSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import PartnerNetworkSection from "@/components/PartnerNetworkSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <DeepDiveSection />
      <DifferentiatorsSection />
      <PartnerNetworkSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
