import { Link } from "react-router-dom";
import { ArrowRight, Shield, FileCheck, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import heroIllustration from "@/assets/illustrations/hero-security.webp";

const trustSignals = [
  { icon: Shield, text: "§34a GewO zugelassen" },
  { icon: FileCheck, text: "Dokumentierte Einsätze" },
  { icon: Users, text: "Feste Ansprechpartner" },
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
      <div className="flex items-center gap-8 lg:gap-16">
        <div className="max-w-2xl flex-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-5">
            <Shield className="h-3 w-3" />
            Sicherheitsdienst · bundesweit
          </span>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl break-words hyphens-auto" style={{ lineHeight: 1.15 }}>
            Sicherheit, die im{" "}
            <span className="text-primary">Einsatz</span> funktioniert.
          </h1>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg max-w-xl">
            Objektschutz, Veranstaltungen und Baustellen – mit §34a-geprüftem
            Personal, fester Einsatzleitung und lückenloser Dokumentation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="text-base px-6">
              <Link to="/kontakt">
                Anfrage stellen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/leistungen">
                Leistungen ansehen
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Isometric illustration */}
        <div className="hidden lg:block shrink-0">
          <img
            src={heroIllustration}
            alt="Isometrische Darstellung: Gesichertes Gebäude mit Sicherheitspersonal"
            className="w-72 xl:w-96 h-auto drop-shadow-2xl"
            width={384}
            height={288}
          />
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
