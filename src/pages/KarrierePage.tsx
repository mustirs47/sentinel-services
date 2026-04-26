import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone, Briefcase, Gift, MapPin, Send, FileText, Users, Shield, HeartPulse, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";
import { FAQPageJsonLd } from "@/components/StructuredData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import teamIllustration from "@/assets/illustrations/team-qualifikationen.webp";

const requirements = [
  "Mindestalter 18 Jahre",
  "Sachkundeprüfung nach §34a GewO (oder Bereitschaft zur Absolvierung)",
  "Einwandfreies Führungszeugnis",
  "Gute Deutschkenntnisse in Wort und Schrift",
  "Zuverlässigkeit, Pünktlichkeit, professionelles Auftreten",
  "Bereitschaft zu Schicht-, Nacht- und Wochenendarbeit",
];

const benefits = [
  "Einsätze in verschiedenen Bereichen: Objekt, Event, Empfang, Revier",
  "Feste Ansprechpartner und strukturierte Einarbeitung",
  "Regelmäßige Weiterbildung: Deeskalation, Brandschutz, Erste Hilfe",
  "Langfristige Einsatzplanung statt kurzfristiger Abrufarbeit",
  "Faire Vergütung und transparente Arbeitsbedingungen",
  "Aufstiegsmöglichkeiten zur Einsatzleitung",
];

const fields = [
  "Objektschutz & Gebäudebewachung",
  "Veranstaltungsschutz & Einlass",
  "Baustellenbewachung",
  "Empfangs- & Pfortendienste",
  "Kontroll- & Streifendienste",
  "Individuelle Sondereinsätze",
];

const steps = [
  { icon: Send, title: "Bewerbung senden", desc: "Per E-Mail mit Lebenslauf und Qualifikationen an karriere@sentinel-services.de" },
  { icon: Users, title: "Kennenlernen", desc: "Persönliches Gespräch und Eignungsprüfung – wir lernen Sie kennen" },
  { icon: FileText, title: "Einsatzstart", desc: "Strukturierte Einarbeitung, Briefing und Begleitung durch erfahrene Kollegen" },
];

const whyUs = [
  { icon: Shield, title: "Seriöser Arbeitgeber", desc: "§34a-zugelassen, feste Verträge, transparente Bedingungen. Kein Subunternehmertum." },
  { icon: HeartPulse, title: "Regelmäßige Schulungen", desc: "Deeskalation, Erste Hilfe, Brandschutz und mehr – wir investieren in Ihre Qualifikation." },
  { icon: Clock, title: "Planbare Einsätze", desc: "Langfristige Einsatzplanung, feste Schichten, kein ständiges Hin und Her." },
  { icon: Star, title: "Wertschätzung", desc: "Ihre Arbeit ist wichtig – und wird bei uns auch so behandelt. Feste Ansprechpartner, offenes Ohr." },
];

const careerFaqs = [
  { question: "Brauche ich die §34a-Sachkundeprüfung, um mich zu bewerben?", answer: "Die Sachkundeprüfung ist Voraussetzung für viele Einsätze. Wenn Sie sie noch nicht haben, aber bereit sind, sie zu absolvieren, können Sie sich trotzdem bewerben – wir unterstützen Sie dabei." },
  { question: "In welchen Regionen setzen Sie Personal ein?", answer: "Wir sind bundesweit tätig. Die konkreten Einsatzorte werden im Bewerbungsgespräch besprochen." },
  { question: "Wie läuft die Einarbeitung ab?", answer: "Jede neue Einsatzkraft erhält eine strukturierte Einarbeitung: objektspezifisches Briefing, Vorstellung der Abläufe und Meldeketten sowie Begleitung durch erfahrene Kollegen in den ersten Einsätzen." },
  { question: "Gibt es auch Teilzeit- oder Nebenjob-Möglichkeiten?", answer: "Ja, wir bieten verschiedene Arbeitszeitmodelle an – von Vollzeit über Teilzeit bis hin zu flexiblen Einsatzmodellen für Nacht- und Wochenenddienste." },
  { question: "Welche Aufstiegsmöglichkeiten gibt es?", answer: "Engagierte Mitarbeiter können sich zur Schichtleitung oder Einsatzleitung weiterentwickeln. Wir fördern interne Karrierewege." },
];

const KarrierePage = () => {
  const ref = useScrollAnimation();
  const ref2 = useScrollAnimation();

  return (
    <PageLayout>
      <SEOHead
        title="Karriere bei Sentinel Services | Jobs im Sicherheitsdienst"
        description="Karriere bei Sentinel Services: Anforderungen, Einsatzfelder, Weiterbildung und Bewerbungsprozess. Jetzt als Sicherheitsmitarbeiter bewerben."
      />
      <FAQPageJsonLd faqs={careerFaqs} />

      <PageHero
        badge="Karriere"
        title="Werden Sie Teil unseres Teams"
        subtitle="Wir suchen Menschen, die Verantwortung übernehmen – nicht nur einen Job suchen."
        illustration={teamIllustration}
      />

      {/* 3-step application process */}
      <section className="section-light border-b" style={{ borderColor: "hsl(var(--section-light-border))" }}>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary text-center mb-6">Bewerbungsprozess</p>
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="text-center relative">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 mb-3 relative">
                  <Icon className="h-6 w-6 text-primary" />
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-sm font-bold" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</h3>
                <p className="text-xs text-muted-fg mt-1 hidden sm:block">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three-column layout */}
      <section className="section-light">
        <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="stagger-children grid gap-6 lg:grid-cols-3">
            {/* Requirements */}
            <div
              className="card-accent rounded-xl p-6 sm:p-8"
              style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "hsl(205 90% 55% / 0.1)" }}>
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-base font-bold" style={{ color: "hsl(var(--section-light-fg))" }}>Was wir erwarten</h2>
              </div>
              <ul className="space-y-3">
                {requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span className="text-sm text-muted-fg">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div
              className="card-accent rounded-xl p-6 sm:p-8"
              style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "hsl(205 90% 55% / 0.1)" }}>
                  <Gift className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-base font-bold" style={{ color: "hsl(var(--section-light-fg))" }}>Was wir bieten</h2>
              </div>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span className="text-sm text-muted-fg">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fields */}
            <div
              className="card-accent rounded-xl p-6 sm:p-8"
              style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "hsl(205 90% 55% / 0.1)" }}>
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-base font-bold" style={{ color: "hsl(var(--section-light-fg))" }}>Einsatzfelder</h2>
              </div>
              <ul className="space-y-3">
                {fields.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span className="text-sm text-muted-fg">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why us as employer */}
      <section className="bg-background border-t border-border/50">
        <div ref={ref2} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Warum Sentinel</p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Das unterscheidet uns als Arbeitgeber
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Wir wissen: Gute Sicherheitsarbeit beginnt bei zufriedenen Mitarbeitern. Deshalb setzen wir auf faire Bedingungen, 
              Entwicklung und echte Wertschätzung.
            </p>
          </div>
          <div className="stagger-children grid gap-6 sm:grid-cols-2">
            {whyUs.map(({ icon: WIcon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 rounded-xl border border-border/50 p-6 transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 shrink-0">
                  <WIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-light border-t" style={{ borderColor: "hsl(var(--section-light-border))" }}>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div
            className="rounded-xl p-8 sm:p-10 text-center"
            style={{ background: "hsl(205 90% 55% / 0.05)" }}
          >
            <h2 className="text-xl font-bold mb-3 sm:text-2xl" style={{ color: "hsl(var(--section-light-fg))" }}>Interesse geweckt?</h2>
            <p className="text-sm text-muted-fg mb-6 max-w-lg mx-auto">
              Senden Sie Ihre Bewerbung an{" "}
              <a href="mailto:karriere@sentinel-services.de" className="text-primary hover:underline font-semibold">
                karriere@sentinel-services.de
              </a>{" "}
              – mit Lebenslauf, Qualifikationen und gewünschtem Einsatzbereich. Wir melden uns innerhalb von 48 Stunden.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg">
                <a href="mailto:karriere@sentinel-services.de">
                  Jetzt bewerben
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+4920893579970">
                  <Phone className="mr-2 h-4 w-4" />
                  Anrufen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={careerFaqs} title="Häufige Fragen zur Karriere" />
    </PageLayout>
  );
};

export default KarrierePage;
