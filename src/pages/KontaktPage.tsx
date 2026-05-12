import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Send, Shield, FileCheck, Users, Search, UserCheck, Radio, ClipboardCheck, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BreadcrumbJsonLd, FAQPageJsonLd, WebPageJsonLd } from "@/components/StructuredData";
import { BASE_URL } from "@/lib/seo";
import heroIllustration from "@/assets/illustrations/hero-security.webp";

const processSteps = [
  { icon: Search, title: "Analyse", desc: "Wir erfassen Ihren Bedarf" },
  { icon: UserCheck, title: "Konzept", desc: "Individueller Einsatzplan" },
  { icon: Radio, title: "Einsatz", desc: "Strukturierter Start" },
  { icon: ClipboardCheck, title: "Reporting", desc: "Laufende Dokumentation" },
];

const guarantees = [
  "Schnellstmögliche Rückmeldung auf Ihre Anfrage",
  "Konkretes Angebot statt allgemeiner Beratung",
  "Kein Standardangebot – individuelles Konzept für Ihren Bedarf",
  "Transparente Kostenaufstellung ohne versteckte Gebühren",
];

const kontaktFaqs = [
  { question: "Wie schnell melden Sie sich auf meine Anfrage?", answer: "Wir melden uns schnellstmöglich auf Ihre Anfrage per E-Mail." },
  { question: "Was kostet die Angebotserstellung?", answer: "Die Erstellung eines konkreten Angebots auf Basis Ihrer Anfrage ist kostenfrei und unverbindlich." },
  { question: "Wie kurzfristig kann ein Einsatz starten?", answer: "Bei akutem Bedarf können wir zügig einsatzbereit sein. Für planbare Einsätze empfehlen wir eine Vorlaufzeit von mindestens einer Woche." },
];

const KontaktPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();
  const ref = useScrollAnimation();
  const ref2 = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get("_honey")) return;

    // DSGVO-Consent prüfen
    if (!formData.get("consent")) {
      toast({
        title: "Einwilligung erforderlich",
        description: "Bitte stimmen Sie der Datenverarbeitung zu, um die Anfrage zu senden.",
        variant: "destructive",
      });
      return;
    }

    // Validierung Mindestlängen
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (name.length < 2 || name.length > 100) {
      toast({ title: "Name prüfen", description: "Bitte geben Sie einen gültigen Namen ein.", variant: "destructive" });
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || email.length > 255) {
      toast({ title: "E-Mail prüfen", description: "Bitte geben Sie eine gültige E-Mail-Adresse ein.", variant: "destructive" });
      return;
    }
    if (message.length < 10 || message.length > 2000) {
      toast({ title: "Nachricht prüfen", description: "Bitte beschreiben Sie Ihren Bedarf (mind. 10 Zeichen).", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/info@sentinel-services.de", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Name: name,
          Unternehmen: formData.get("company") || "",
          "E-Mail": email,
          Telefon: formData.get("phone") || "",
          "Gewünschte Leistung": formData.get("service") || "",
          Einsatzort: formData.get("location") || "",
          Zeitraum: formData.get("period") || "",
          Nachricht: message,
          Rückruf: formData.get("callback") ? "ja" : "nein",
          Kurzfristig: formData.get("urgent") ? "ja" : "nein",
          _subject: `Neue Kontaktanfrage von ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("submit failed");
      setSubmitted(true);
      } catch {
        toast({
          title: "Senden fehlgeschlagen",
          description: "Bitte versuchen Sie es erneut oder senden Sie uns eine E-Mail.",
          variant: "destructive",
        });
      } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <SEOHead
        title="Kontakt – Anfrage an Sentinel Services"
        description="Anfrage per Formular oder E-Mail. Beschreiben Sie Bedarf, Ort und Zeitraum – wir melden uns mit einem konkreten Angebot."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: `${BASE_URL}/` },
          { name: "Kontakt", url: `${BASE_URL}/kontakt` },
        ]}
      />
      <WebPageJsonLd
        type="ContactPage"
        name="Kontakt – Sentinel Services"
        description="Anfrageformular und Kontaktwege zu Sentinel Services."
        url={`${BASE_URL}/kontakt`}
      />
      <FAQPageJsonLd faqs={kontaktFaqs} />

      <PageHero
        badge="Kontakt"
        title="Anfrage stellen"
        subtitle="Beschreiben Sie Ihren Bedarf – wir melden uns schnellstmöglich mit einem konkreten Vorschlag."
        illustration={heroIllustration}
      />

      {/* Process steps row */}
      <section className="section-light border-b" style={{ borderColor: "hsl(var(--section-light-border))" }}>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary text-center mb-5">So läuft es ab</p>
          <div className="grid grid-cols-4 gap-4">
            {processSteps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="text-center relative">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 mb-2 relative">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <p className="text-xs font-semibold" style={{ color: "hsl(var(--section-light-fg))" }}>{title}</p>
                <p className="text-[10px] text-muted-fg mt-0.5 hidden sm:block">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-sm font-bold mb-4" style={{ color: "hsl(var(--section-light-fg))" }}>
                  Kontaktinformationen
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium" style={{ color: "hsl(var(--section-light-fg))" }}>E-Mail</p>
                      <a href="mailto:info@sentinel-services.de" className="text-sm text-muted-fg hover:text-primary transition-colors">
                        info@sentinel-services.de
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium" style={{ color: "hsl(var(--section-light-fg))" }}>Einsatzgebiet</p>
                      <p className="text-sm text-muted-fg">Bundesweit</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Guarantees */}
              <div className="rounded-xl p-5" style={{ background: "hsl(205 90% 55% / 0.05)", border: "1px solid hsl(var(--section-light-border))" }}>
                <p className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">Unsere Garantie</p>
                <ul className="space-y-2.5">
                  {guarantees.map((g) => (
                    <li key={g} className="flex items-start gap-2.5 text-sm text-muted-fg">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust signals */}
              <div className="rounded-xl p-5" style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}>
                <p className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">Darauf können Sie sich verlassen</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 text-sm text-muted-fg">
                    <Shield className="h-4 w-4 text-primary shrink-0" /> §34a GewO – geprüftes Personal
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-muted-fg">
                    <Users className="h-4 w-4 text-primary shrink-0" /> Feste Ansprechpartner
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-muted-fg">
                    <FileCheck className="h-4 w-4 text-primary shrink-0" /> Lückenlose Dokumentation
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-xl p-8 text-center" style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-bold" style={{ color: "hsl(var(--section-light-fg))" }}>Vielen Dank für Ihre Anfrage</h2>
                  <p className="mt-2 text-sm text-muted-fg">Wir melden uns schnellstmöglich bei Ihnen.</p>
                  <Button asChild className="mt-6" variant="outline">
                    <Link to="/">Zurück zur Startseite</Link>
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-accent rounded-xl p-6 sm:p-8 space-y-4" style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}>
                  <h2 className="text-base font-bold mb-2" style={{ color: "hsl(var(--section-light-fg))" }}>
                    Kontaktformular
                  </h2>
                  <p className="text-sm text-muted-fg mb-4">
                    Beschreiben Sie Ihren Bedarf – je genauer, desto besser können wir Ihnen helfen.
                  </p>
                  {/* Honeypot - für Bots */}
                  <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Name *</label>
                      <Input required name="name" maxLength={100} placeholder="Ihr Name" className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400" />
                    </div>
                    <div>
                      <label className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Unternehmen</label>
                      <Input name="company" maxLength={150} placeholder="Firma / Organisation" className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>E-Mail *</label>
                      <Input required name="email" type="email" maxLength={255} placeholder="ihre@email.de" className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400" />
                    </div>
                    <div>
                      <label className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Telefon</label>
                      <Input name="phone" type="tel" maxLength={30} placeholder="Für Rückruf" className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Gewünschte Leistung</label>
                    <Input name="service" maxLength={150} placeholder="z.B. Objektschutz, Veranstaltung, Baustellenbewachung" className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Einsatzort</label>
                      <Input name="location" maxLength={120} placeholder="Stadt / PLZ" className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400" />
                    </div>
                    <div>
                      <label className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Zeitraum</label>
                      <Input name="period" maxLength={80} placeholder="z.B. ab sofort, Q2 2026" className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Nachricht *</label>
                    <textarea
                      name="message"
                      required
                      maxLength={2000}
                      rows={4}
                      placeholder="Beschreiben Sie Ihren Bedarf..."
                      className="flex w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-fg">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="callback" className="rounded border-gray-300 text-primary focus:ring-primary" />
                      Rückruf erwünscht
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="urgent" className="rounded border-gray-300 text-primary focus:ring-primary" />
                      Kurzfristiger Einsatzbedarf
                    </label>
                  </div>
                  <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-gray-700">
                      <input
                        type="checkbox"
                        name="consent"
                        required
                        className="mt-0.5 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span>
                        Ich willige ein, dass meine Angaben zur Bearbeitung meiner Anfrage
                        verarbeitet werden. Weitere Informationen finden Sie in der{" "}
                        <Link to="/datenschutz" className="text-primary hover:underline">
                          Datenschutzerklärung
                        </Link>
                        . Die Einwilligung kann jederzeit per E-Mail an{" "}
                        <a href="mailto:info@sentinel-services.de" className="text-primary hover:underline">
                          info@sentinel-services.de
                        </a>{" "}
                        widerrufen werden. *
                      </span>
                    </label>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button type="submit" size="lg" disabled={submitting}>
                      {submitting ? "Wird gesendet…" : "Anfrage absenden"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    Pflichtfelder sind mit * markiert. Wir verarbeiten Ihre Daten ausschließlich zur
                    Bearbeitung Ihrer Anfrage und geben sie nicht an Dritte weiter.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="bg-background border-t border-border/50">
        <div ref={ref2} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-3">
              Noch unsicher? Informieren Sie sich weiter
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Erfahren Sie mehr über unsere Leistungen, Qualifikationen und Arbeitsweise – oder schreiben Sie uns eine Nachricht.
            </p>
          </div>
          <div className="stagger-children grid gap-4 sm:grid-cols-3">
            {[
              { title: "Unsere Leistungen", desc: "6 Sicherheitsdienstleistungen im Überblick", href: "/leistungen" },
              { title: "Qualifikationen", desc: "Nachweise und Zertifizierungen unseres Personals", href: "/qualifikationen" },
              { title: "Arbeitsweise", desc: "Unser strukturierter 4-Phasen-Prozess", href: "/arbeitsweise" },
            ].map(({ title, desc, href }) => (
              <Link
                key={href}
                to={href}
                className="group rounded-xl border border-border/50 p-6 text-center transition-all hover:shadow-md hover:border-primary/30"
              >
                <h3 className="text-base font-bold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Mehr erfahren <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={kontaktFaqs} title="Häufige Fragen zum Kontakt" />
    </PageLayout>
  );
};

export default KontaktPage;
