import { Link } from "react-router-dom";
import { Search, UserCheck, Radio, ClipboardCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";

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

const ArbeitsweisePage = () => (
  <PageLayout>
    <SEOHead
      title="Unsere Arbeitsweise | Sentinel Services – Betriebsmodell"
      description="So arbeitet Sentinel Services: Analyse, Personalauswahl, Einsatzführung und Dokumentation. Vier Phasen für strukturierte Sicherheitsdienstleistungen."
    />

    <section className="section-light">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold sm:text-4xl" style={{ color: "hsl(var(--section-light-fg))" }}>
            So arbeiten wir – unser Betriebsmodell
          </h1>
          <p className="mt-4 text-muted-fg max-w-2xl mx-auto">
            Sicherheit ist kein Produkt, sondern ein Prozess. Vier Phasen, die jeden Einsatz tragen – von der ersten Analyse bis zur laufenden Dokumentation.
          </p>
        </div>

        <div className="space-y-12">
          {phases.map(({ icon: Icon, step, title, desc, detail }, i) => (
            <div
              key={step}
              className="grid gap-6 lg:grid-cols-12 items-start"
            >
              <div className="lg:col-span-1 flex items-center gap-3 lg:flex-col lg:items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "hsl(205 90% 55% / 0.1)" }}>
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary tracking-wider lg:ml-1">{step}</span>
              </div>
              <div className="lg:col-span-11">
                <h2 className="text-xl font-semibold mb-3" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h2>
                <p className="text-sm leading-relaxed text-muted-fg mb-3">{desc}</p>
                <p className="text-sm leading-relaxed text-muted-fg">{detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <Link to="/kontakt">
              Kostenlose Erstberatung
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default ArbeitsweisePage;
