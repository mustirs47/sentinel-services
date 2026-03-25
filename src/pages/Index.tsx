import Topbar from "@/components/layout/Topbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TeamSection from "@/components/sections/TeamSection";
import QualificationsSection from "@/components/sections/QualificationsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ReferencesSection from "@/components/sections/ReferencesSection";
import InsightsSection from "@/components/sections/InsightsSection";
import CareerSection from "@/components/sections/CareerSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Topbar />
    <Header />
    <HeroSection />
    <TrustBar />
    <ServicesSection />
    <IndustriesSection />
    <WhyUsSection />
    <TeamSection />
    <QualificationsSection />
    <ProcessSection />
    <ReferencesSection />
    <InsightsSection />
    <CareerSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
