import { Link } from "react-router-dom";
import { Search, UserCheck, Radio, ClipboardCheck, ArrowRight, Users, Shield, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const phases = [
  {
    icon: Search,
    step: "01",
    title: "Analyse vor Einsatz",
    desc: "Jeder Auftrag beginnt mit einer Bestandsaufnahme: Objekt, Risikoprofil, betriebliche Abläufe, Kundenerwartung.",
    detail: "Wir bewerten Ihr Objekt hinsichtlich Lage, Zugänge, Betriebszeiten, bekannter Risiken und vorhandener Schutzmaßnahmen. Das Ergebnis ist eine strukturierte Grundlage für den Einsatzplan.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Auswahl & Briefing Personal",
    desc: "Wir setzen gezielt Personal ein, das zum Einsatz passt – nach Qualifikation, Erfahrung und Auftreten.",
    detail: "Personalauswahl nach Fachkompetenz, Sprachkenntnissen und Einsatzpassung. Vor Einsatzbeginn erfolgt ein objektspezifisches Briefing mit allen relevanten Informationen.",
  },
  {
    icon: Radio,
    step: "03",
    title: "Führung im Einsatz",
    desc: "Feste Einsatzleitung, direkte Kommunikationswege und definierte Eskalationsstufen.",
    detail: "Ein fester Einsatzleiter koordiniert vor Ort, hält den Kontakt zum Auftraggeber und steuert bei Abweichungen sofort nach.",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Dokumentation & Reporting",
    desc: "Lückenlose Einsatzdokumentation, regelmäßige Berichte und Nachsteuerung bei Abweichungen.",
    detail: "Standardisierte Protokolle, regelmäßige Einsatzberichte und strukturierte Nachbesprechungen. Volle Transparenz.",
  },
];

const teamCompetencies = [
  { icon: Shield, title: "§34a-geprüftes Personal", desc: "Alle Einsatzkräfte mit Sachkundeprüfung nach §34a GewO (IHK)." },
  { icon: Users, title: "Feste Teams", desc: "Wir setzen auf Kontinuität – Sie bekommen feste Ansprechpartner und bekannte Gesichter." },
  { icon: HeartPulse, title: "Weiterbildung", desc: "Regelmäßige Schulungen in Deeskalation, Erste Hilfe und Brandschutz." },
];

const ArbeitsweisePage = () => {
  const ref = useScrollAnimation();
  const ref2 = useScrollAnimation();

  return (
    <PageLayout>
      <SEOHead
        title="Unsere Arbeitsweise | Sentinel Services – Betriebsmodell"
        description="So arbeitet Sentinel Services: Analyse, Personalauswahl, Einsatzführung und Dokumentation. Vier Phasen für strukturierte Sicherheitsdienstleistungen."
      />

      <PageHero
        badge="Arbeitsweise"
        title="So arbeiten wir – unser Betriebsmodell"
        subtitle="Sicherheit ist kein Produkt, sondern ein Prozess. Vier Phasen, die jeden Einsatz tragen."
      />

      {/* Vertical Timeline */}
      <section className="section-light">
        <div ref={ref} className="fade-in-section mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            <div className="space-y-12">
              {phases.map(({ icon: Icon, step, title, desc, detail }) => (
                <div key={step} className="relative flex gap-6 sm:gap-8">
                  {/* Step circle */}
                  <div className="relative z-10 flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-primary/30" style={{ background: "hsl(var(--section-light-bg))" }}>
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                      {step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <h2 className="text-lg font-bold mb-2" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h2>
                    <p className="text-sm leading-relaxed text-muted-fg mb-3">{desc}</p>
                    <div
                      className="rounded-lg p-4"
                      style={{ background: "hsl(205 90% 55% / 0.05)", border: "1px solid hsl(var(--section-light-border))" }}
                    >
                      <p className="text-sm leading-relaxed text-muted-fg">{detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Competencies */}
      <section className="bg-background border-t border-border/50">
        <div ref={ref2} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Unser Team</p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Kompetenz, der Sie vertrauen können
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {teamCompetencies.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-4">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg">
                <Link to="/kontakt">
                  Kostenlose Erstberatung
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/qualifikationen">Unsere Qualifikationen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ArbeitsweisePage;
