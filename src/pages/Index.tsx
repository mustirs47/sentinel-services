import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";
import { LocalBusinessJsonLd } from "@/components/StructuredData";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import PillarsSection from "@/components/sections/PillarsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ReferencesSection from "@/components/sections/ReferencesSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";

const Index = () => (
  <PageLayout>
    <SEOHead
      title="Sentinel Services – Objektbetreuung aus einer Hand"
      description="Sicherheitsdienst, Gebäudereinigung, Grünanlagenpflege und Facility Management aus einer Hand. Geprüftes Personal, feste Ansprechpartner, dokumentierte Leistung."
      keywords="Sicherheitsdienst, Gebäudereinigung, Grünanlagenpflege, Facility Management, Objektbetreuung, Wachdienst, Fensterreinigung, Winterdienst, FM Dienstleister"
    />
    <LocalBusinessJsonLd />
    <HeroSection />
    <TrustBar />
    <PillarsSection />
    <WhyUsSection />
    <IndustriesSection />
    <ReferencesSection />
    <ContactSection />
    <FAQSection light />
  </PageLayout>
);

export default Index;
