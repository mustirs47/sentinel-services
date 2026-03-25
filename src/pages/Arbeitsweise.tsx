import { Link } from "react-router-dom";
import { Search, UserCheck, Radio, ClipboardCheck, ArrowRight } from "lucide-react";
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
    desc: "Jeder Auftrag beginnt mit einer Bestandsaufnahme: Objekt, Risikoprofil, betriebliche Abläufe, Kundenerwartung. Kein Einsatz ohne fundierte Grundlage.",
    detail: "Wir bewerten Ihr Objekt hinsichtlich Lage, Zugänge, Betriebszeiten, bekannter Risiken und vorhandener Schutzmaßnahmen. Das Ergebnis ist eine strukturierte Grundlage für den Einsatzplan.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Auswahl & Briefing Personal",
    desc: "Wir setzen gezielt Personal ein, das zum Einsatz passt – nach Qualifikation, Erfahrung und Auftreten. Jede Einsatzkraft wird vorab eingewiesen.",
    detail: "Personalauswahl nach Fachkompetenz, Sprachkenntnissen und Einsatzpassung. Vor Einsatzbeginn erfolgt ein objektspezifisches Briefing mit allen relevanten Informationen.",
  },
  {
    icon: Radio,
    step: "03",
    title: "Führung im Einsatz",
    desc: "Feste Einsatzleitung, direkte Kommunikationswege und definierte Eskalationsstufen. Kein Einsatz ohne klare Verantwortung vor Ort.",
    detail: "Ein fester Einsatzleiter koordiniert vor Ort, hält den Kontakt zum Auftraggeber und steuert bei Abweichungen sofort nach. Klare Meldeketten sorgen für schnelle Reaktion.",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Dokumentation & Reporting",
    desc: "Lückenlose Einsatzdokumentation, regelmäßige Berichte und Nachsteuerung bei Abweichungen. Volle Transparenz für den Auftraggeber.",
    detail: "Standardisierte Übergabe- und Meldeprotokolle, regelmäßige Einsatzberichte und strukturierte Nachbesprechungen. Sie wissen jederzeit, was vor Ort passiert.",
  },
];

const ArbeitsweisePage = () => {
  const ref = useScrollAnimation();

  return (
    <PageLayout>
      <SEOHead
        title="Unsere Arbeitsweise | Sentinel Services – Betriebsmodell"
        description="So arbeitet Sentinel Services: Analyse, Personalauswahl, Einsatzführung und Dokumentation. Vier Phasen für strukturierte Sicherheitsdienstleistungen."
      />

      <PageHero
        badge="Arbeitsweise"
        title="So arbeiten wir – unser Betriebsmodell"
        subtitle="Sicherheit ist kein Produkt, sondern ein Prozess. Vier Phasen, die jeden Einsatz tragen – von der ersten Analyse bis zur laufenden Dokumentation."
      />

      <section className="section-light">
        <div ref={ref} className="fade-in-section mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="space-y-0">
            {phases.map(({ icon: Icon, step, title, desc, detail }, i) => (
              <div
                key={step}
                className="relative grid gap-6 lg:grid-cols-12 items-start py-10"
                style={i < phases.length - 1 ? { borderBottom: "1px solid hsl(var(--section-light-border))" } : undefined}
              >
                <div className="lg:col-span-2 flex items-center gap-3 lg:flex-col lg:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "hsl(205 90% 55% / 0.1)" }}>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary tracking-wider">{step}</span>
                </div>
                <div className="lg:col-span-10">
                  <h2 className="text-xl font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h2>
                  <p className="text-sm leading-relaxed text-muted-fg mb-3">{desc}</p>
                  <p className="text-sm leading-relaxed text-muted-fg">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
            Struktur, die Sie überzeugt?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Lassen Sie uns in einem ersten Gespräch klären, wie wir Ihren Sicherheitsbedarf strukturiert und verlässlich umsetzen.
          </p>
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
      </section>
    </PageLayout>
  );
};

export default ArbeitsweisePage;
