import { Link } from "react-router-dom";
import { Mail, MapPin, Shield, FileCheck, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="kontakt" className="section-light">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: "hsl(var(--section-light-fg))" }}>
            Anfrage stellen
          </h2>
          <p className="mt-3 text-muted-fg max-w-2xl mx-auto">
            Beschreiben Sie Ihren Bedarf – wir melden uns schnellstmöglich mit einem konkreten Vorschlag.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-4" style={{ color: "hsl(var(--section-light-fg))" }}>
                Kontaktinformationen
              </h3>
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
            <div className="card-accent rounded-xl p-6 sm:p-8 flex flex-col h-full" style={{ background: "hsl(var(--section-light-card))", border: "1px solid hsl(var(--section-light-border))" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "hsl(var(--section-light-fg))" }}>
                Bereit für ein konkretes Angebot?
              </h3>
              <p className="text-sm text-muted-fg mb-6">
                Auf unserer Kontaktseite finden Sie ein vollständiges Anfrageformular. Wir melden uns
                innerhalb von 24 Stunden – kostenfrei und unverbindlich.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Kostenlose Erstberatung",
                  "Konzept individuell auf Ihren Bedarf",
                  "Transparente Kostenaufstellung",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-fg">
                    <FileCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/kontakt">
                    Zum Kontaktformular
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+4920893579970">
                    <Phone className="mr-2 h-4 w-4" />
                    Sofort anrufen
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
