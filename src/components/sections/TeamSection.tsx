import { ShieldCheck, HeartHandshake, BookOpen, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const competences = [
  {
    icon: Target,
    title: "Operative Einsatzleitung",
    desc: "Koordination aller Einsatzkräfte vor Ort, Schichtplanung und direkte Verantwortung für den reibungslosen Ablauf. Erfahrung aus Objektschutz, Veranstaltungssicherung und Baustellenbewachung.",
    focus: ["Schicht- und Einsatzplanung", "Situationsbeurteilung vor Ort", "Eskalationsmanagement"],
  },
  {
    icon: HeartHandshake,
    title: "Kundenverantwortung",
    desc: "Fester Ansprechpartner vom Erstgespräch bis zum laufenden Einsatz. Kennt Ihr Objekt, Ihre Anforderungen und Ihre Erwartungen – und stellt sicher, dass sie erfüllt werden.",
    focus: ["Bedarfsanalyse und Konzeptentwicklung", "Regelmäßige Abstimmung und Berichterstattung", "Anpassung bei veränderten Anforderungen"],
  },
  {
    icon: ShieldCheck,
    title: "Qualitätssicherung",
    desc: "Überwachung der Einsatzqualität, Kontrolle der Dokumentation und Sicherstellung, dass Nachweise, Schulungen und Standards jederzeit aktuell sind.",
    focus: ["Einsatzdokumentation und Reporting", "Nachweisführung und Schulungsplanung", "Interne Audits und Qualitätskontrollen"],
  },
  {
    icon: BookOpen,
    title: "Fachliche Weiterbildung",
    desc: "Regelmäßige Schulungen in Deeskalation, Brandschutz, Erste Hilfe und branchenspezifischen Anforderungen. Kein Einsatz ohne aktuelle Qualifikation.",
    focus: ["Pflichtschulungen und Auffrischungen", "Branchenspezifische Zusatzqualifikationen", "Einweisung neuer Einsatzkräfte"],
  },
];

const TeamSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="team" className="bg-background">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Kompetenz und Verantwortung im Team
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Hinter jedem Einsatz stehen klare Verantwortlichkeiten. Vier Kompetenzfelder tragen unsere Arbeit.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {competences.map(({ icon: Icon, title, desc, focus }) => (
            <div key={title} className="rounded-xl border border-border/60 bg-card/50 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">{desc}</p>
              <ul className="space-y-1.5">
                {focus.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;