import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/layout/PageHero";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/lib/icons";
import { buildCanonical } from "@/lib/seo";

interface LegacyRedirectProps {
  to: string;
  title: string;
  description: string;
  /** Klartext, der beschreibt, wohin die Leistung gewandert ist. */
  intro: string;
  linkLabel: string;
}

const relatedLinks = [
  { href: "/sicherheit", label: "Sicherheit & Bewachung" },
  { href: "/reinigung", label: "Gebäudereinigung" },
  { href: "/gruenanlagen", label: "Garten- & Grünanlagenpflege" },
  { href: "/facility-management", label: "Infrastrukturelles Facility Management" },
  { href: "/kontakt", label: "Anfrage stellen" },
];

/**
 * Ersetzt die früheren <Navigate>-Weiterleitungen. Ein sofortiger Client-Redirect
 * ließ Crawler die Zielinhalte unter der alten URL sehen – ohne Canonical, H1
 * oder Description. Diese Seite liefert eigene Head-Tags mit Canonical auf das
 * Ziel und leitet Besucher nach kurzer Zeit weiter.
 */
const LegacyRedirect = ({ to, title, description, intro, linkLabel }: LegacyRedirectProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = window.setTimeout(() => navigate(to, { replace: true }), 2500);
    return () => window.clearTimeout(timer);
  }, [navigate, to]);

  return (
    <PageLayout>
      <SEOHead title={title} description={description} canonical={buildCanonical(to)} />
      <PageHero
        title={title.split(" | ")[0]}
        subtitle={intro}
        badge="Seite umgezogen"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to={to}>
              {linkLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/kontakt">Anfrage stellen</Link>
          </Button>
        </div>
      </PageHero>

      <section className="bg-muted/30 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="h-section text-foreground">Warum diese Seite umgezogen ist</h2>
            <p className="mt-5 text-muted-foreground">
              Sentinel Services betreut Objekte inzwischen über vier Leistungsbereiche hinweg:
              Sicherheit und Bewachung, Gebäudereinigung, Garten- und Grünanlagenpflege sowie
              infrastrukturelles Facility Management. Damit Sie schneller finden, was Sie suchen,
              haben wir die früher einzeln geführten Seiten in diese vier Bereiche einsortiert.
              Jeder Bereich fasst die zugehörigen Leistungen, typische Einsatzsituationen, den
              Ablauf einer Beauftragung und die Dokumentation zusammen.
            </p>
            <p className="mt-4 text-muted-foreground">
              An der Leistung selbst ändert sich dadurch nichts. Ansprechpartner, Qualifikation der
              Mitarbeiter und die Abstimmung vor dem ersten Einsatz bleiben unverändert. Wenn Sie
              diese Adresse gespeichert oder verlinkt haben, aktualisieren Sie den Link am besten
              auf die neue Adresse – Sie werden in wenigen Sekunden automatisch dorthin geleitet.
            </p>
            <p className="mt-4 text-muted-foreground">
              Sie wissen bereits konkret, was Sie brauchen? Dann schildern Sie uns Objekt, Umfang
              und gewünschten Zeitraum direkt über das Anfrageformular. Wir melden uns mit einer
              belastbaren Einschätzung zurück, statt mit einer allgemeinen Beratung.
            </p>

            <h2 className="h-section text-foreground mt-12">Alle Leistungsbereiche im Überblick</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 text-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LegacyRedirect;