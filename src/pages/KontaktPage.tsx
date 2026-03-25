import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Clock, MapPin, Send, Phone, Shield, FileCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PageLayout from "@/components/layout/PageLayout";
import SEOHead from "@/components/SEOHead";

const KontaktPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <SEOHead
        title="Kontakt | Sentinel Services – Jetzt Anfrage stellen"
        description="Kontaktieren Sie Sentinel Services für eine kostenlose Erstberatung. Rückmeldung innerhalb von 24 Stunden. Telefon, E-Mail oder Kontaktformular."
      />

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold sm:text-4xl" style={{ color: "hsl(var(--section-light-fg))" }}>
              Anfrage stellen
            </h1>
            <p className="mt-4 text-muted-fg max-w-2xl mx-auto">
              Beschreiben Sie Ihren Bedarf – wir melden uns innerhalb von 24 Stunden mit einem konkreten Vorschlag.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-sm font-semibold mb-4" style={{ color: "hsl(var(--section-light-fg))" }}>
                  Kontaktinformationen
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium" style={{ color: "hsl(var(--section-light-fg))" }}>Telefon</p>
                      <a href="tel:+4920893579970" className="text-sm text-muted-fg hover:text-primary transition-colors">
                        +49 (0) 208 935 799 70
                      </a>
                      <p className="text-xs text-muted-fg mt-0.5">Mo–Fr 10–18 Uhr</p>
                    </div>
                  </li>
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
                    <Clock className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium" style={{ color: "hsl(var(--section-light-fg))" }}>Erreichbarkeit</p>
                      <p className="text-sm text-muted-fg">24/7 per E-Mail, telefonisch Mo–Fr 10–18 Uhr</p>
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

              {/* Trust signals near form */}
              <div className="rounded-xl p-4" style={{ background: "hsl(205 90% 55% / 0.05)" }}>
                <p className="text-xs font-semibold text-primary mb-3">Darauf können Sie sich verlassen</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs text-muted-fg">
                    <Shield className="h-3.5 w-3.5 text-primary shrink-0" /> §34a GewO – geprüftes Personal
                  </li>
                  <li className="flex items-center gap-2 text-xs text-muted-fg">
                    <Users className="h-3.5 w-3.5 text-primary shrink-0" /> Feste Ansprechpartner
                  </li>
                  <li className="flex items-center gap-2 text-xs text-muted-fg">
                    <FileCheck className="h-3.5 w-3.5 text-primary shrink-0" /> Rückmeldung innerhalb von 24 h
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
                  <h2 className="text-lg font-semibold" style={{ color: "hsl(var(--section-light-fg))" }}>Vielen Dank für Ihre Anfrage</h2>
                  <p className="mt-2 text-sm text-muted-fg">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-xl p-6 sm:p-8 space-y-4" style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Name *</label>
                      <Input required placeholder="Ihr Name" className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400" />
                    </div>
                    <div>
                      <label className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Unternehmen</label>
                      <Input placeholder="Firma / Organisation" className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>E-Mail *</label>
                      <Input required type="email" placeholder="ihre@email.de" className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400" />
                    </div>
                    <div>
                      <label className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Telefon</label>
                      <Input type="tel" placeholder="Für Rückruf" className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Gewünschte Leistung</label>
                    <Input placeholder="z.B. Objektschutz, Veranstaltung, Baustellenbewachung" className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Einsatzort</label>
                      <Input placeholder="Stadt / PLZ" className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400" />
                    </div>
                    <div>
                      <label className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Zeitraum</label>
                      <Input placeholder="z.B. ab sofort, Q2 2026" className="bg-white border-gray-200 text-gray-900 placeholder:text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium mb-1.5 block" style={{ color: "hsl(var(--section-light-fg))" }}>Nachricht</label>
                    <textarea
                      rows={4}
                      placeholder="Beschreiben Sie Ihren Bedarf..."
                      className="flex w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-fg">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                      Rückruf erwünscht
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                      Kurzfristiger Einsatzbedarf
                    </label>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button type="submit" size="lg">
                      Anfrage absenden
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                    <Button type="button" variant="outline" size="lg" asChild>
                      <a href="tel:+4920893579970">
                        <Phone className="mr-2 h-4 w-4" />
                        Sofort anrufen
                      </a>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default KontaktPage;
