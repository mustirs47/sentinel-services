import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";

const requirements = [
  "Mindestalter 18 Jahre",
  "Sachkundeprüfung nach §34a GewO (oder Bereitschaft zur Absolvierung)",
  "Einwandfreies Führungszeugnis",
  "Gute Deutschkenntnisse in Wort und Schrift",
  "Zuverlässigkeit, Pünktlichkeit, professionelles Auftreten",
];

const benefits = [
  "Einsätze in verschiedenen Bereichen: Objekt, Event, Empfang, Revier",
  "Feste Ansprechpartner und strukturierte Einarbeitung",
  "Regelmäßige Weiterbildung: Deeskalation, Brandschutz, Erste Hilfe",
  "Langfristige Einsatzplanung statt kurzfristiger Abrufarbeit",
];

const careerFaqs = [
  { question: "Brauche ich die §34a-Sachkundeprüfung, um mich zu bewerben?", answer: "Die Sachkundeprüfung ist Voraussetzung für viele Einsätze. Wenn Sie sie noch nicht haben, aber bereit sind, sie zu absolvieren, können Sie sich trotzdem bewerben – wir unterstützen Sie dabei." },
  { question: "In welchen Regionen setzen Sie Personal ein?", answer: "Wir sind bundesweit tätig. Die konkreten Einsatzorte werden im Bewerbungsgespräch besprochen." },
  { question: "Wie läuft die Einarbeitung ab?", answer: "Jede neue Einsatzkraft erhält eine strukturierte Einarbeitung: objektspezifisches Briefing, Vorstellung der Abläufe und Meldeketten sowie Begleitung durch erfahrene Kollegen in den ersten Einsätzen." },
  { question: "Gibt es auch Teilzeit- oder Nebenjob-Möglichkeiten?", answer: "Ja, wir bieten verschiedene Arbeitszeitmodelle an – von Vollzeit über Teilzeit bis hin zu flexiblen Einsatzmodellen für Nacht- und Wochenenddienste." },
];

const KarrierePage = () => (
  <PageLayout>
    <SEOHead
      title="Karriere bei Sentinel Services | Jobs im Sicherheitsdienst"
      description="Karriere bei Sentinel Services: Anforderungen, Einsatzfelder, Weiterbildung und Bewerbungsprozess. Jetzt als Sicherheitsmitarbeiter bewerben."
    />

    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Karriere bei Sentinel Services
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Wir suchen Menschen, die Verantwortung übernehmen – nicht nur einen Job suchen. Werden Sie Teil unseres Teams.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card/50 p-6 sm:p-8">
            <h2 className="text-base font-semibold text-foreground mb-4">Was wir erwarten</h2>
            <ul className="space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span className="text-sm text-muted-foreground">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border/60 bg-card/50 p-6 sm:p-8">
            <h2 className="text-base font-semibold text-foreground mb-4">Was wir bieten</h2>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span className="text-sm text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-border/60 bg-card/50 p-6 sm:p-8">
          <h2 className="text-base font-semibold text-foreground mb-3">So bewerben Sie sich</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Senden Sie Ihre Bewerbung per E-Mail an{" "}
            <a href="mailto:karriere@sentinel-services.de" className="text-primary hover:underline font-medium">
              karriere@sentinel-services.de
            </a>{" "}
            – mit kurzem Lebenslauf, Angabe Ihrer Qualifikationen und gewünschtem Einsatzbereich.
            Auch Initiativbewerbungen sind willkommen.
          </p>
          <Button asChild size="lg">
            <a href="mailto:karriere@sentinel-services.de">
              Jetzt bewerben
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>

    <FAQSection faqs={careerFaqs} title="Häufige Fragen zur Karriere" light />
  </PageLayout>
);

export default KarrierePage;
