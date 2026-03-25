import { Link } from "react-router-dom";
import { ArrowRight, Shield, FileCheck, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const trustSignals = [
  { icon: Shield, text: "§34a GewO zugelassen" },
  { icon: FileCheck, text: "Dokumentierte Einsätze" },
  { icon: Users, text: "Feste Ansprechpartner" },
  { icon: Phone, text: "Telefonisch erreichbar" },
];

const HeroSection = () => (
  <section className="relative overflow-hidden bg-background">
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="h-full w-full object-cover" width={1920} height={1080} />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, hsl(220 20% 6% / 0.95) 30%, hsl(220 20% 6% / 0.75) 70%, hsl(220 20% 6% / 0.85) 100%)",
        }}
      />
    </div>

    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" style={{ lineHeight: 1.15 }}>
          Professioneller{" "}
          <span className="text-primary">Sicherheitsdienst</span> –{" "}
          Objektschutz, Veranstaltungsschutz & Baustellenbewachung
        </h1>

        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg max-w-xl">
          Sentinel Services schützt Ihre Objekte, Veranstaltungen und Baustellen –
          mit §34a-geprüftem Personal, klaren Prozessen und persönlicher Einsatzführung. Bundesweit einsatzbereit.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="text-base px-6">
            <Link to="/kontakt">
              Kostenlose Erstberatung
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="tel:+4920893579970">
              <Phone className="mr-2 h-4 w-4" />
              Kurzfristigen Einsatz anfragen
            </a>
          </Button>
        </div>
      </div>

      {/* Trust signals as flat row */}
      <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-border/30 pt-6">
        {trustSignals.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">{text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
