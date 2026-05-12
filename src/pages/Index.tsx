import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";
import { LocalBusinessJsonLd } from "@/components/StructuredData";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ReferencesSection from "@/components/sections/ReferencesSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";

const Index = () => (
  <PageLayout>
    <SEOHead
      title="Sentinel Services – Sicherheitsdienst, bundesweit einsatzbereit"
      description="Objektschutz, Veranstaltungsschutz, Baustellenbewachung und Empfangsdienste. §34a-zertifiziert, feste Ansprechpartner, kurze Reaktionszeiten."
      keywords="Sicherheitsdienst, Objektschutz, Veranstaltungsschutz, Baustellenbewachung, Empfangsdienst, §34a, Magdeburg, bundesweit"
    />
    <LocalBusinessJsonLd />
    <HeroSection />
    <TrustBar />
    <ServicesSection />
    <WhyUsSection />
    <IndustriesSection />
    <ReferencesSection />
    <ContactSection />
    <FAQSection light />
  </PageLayout>
);

export default Index;
