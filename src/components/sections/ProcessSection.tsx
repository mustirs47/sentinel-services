import { MessageSquare, Search, FileText, Handshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Anfrage & Erstgespräch",
    desc: "Sie schildern Ihren Bedarf per Formular, E-Mail oder Telefon. Ein persönlicher Ansprechpartner meldet sich innerhalb von 24 Stunden.",
  },
  {
    icon: Search,
    step: "02",
    title: "Bedarfsermittlung",
    desc: "Wir analysieren Objekt, Risiken und Rahmenbedingungen – bei Bedarf mit Vor-Ort-Termin. Dafür benötigen wir Angaben zu Einsatzort, Zeitraum und gewünschter Leistung.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Angebot & Einsatzkonzept",
    desc: "Sie erhalten ein transparentes Angebot mit konkretem Einsatzplan, Personalplanung und Kostenübersicht – ohne versteckte Posten.",
  },
  {
    icon: Handshake,
    step: "04",
    title: "Umsetzung & laufende Betreuung",
    desc: "Der Einsatz startet mit fester Einsatzleitung und klarer Kommunikationskette. Regelmäßige Berichte und Nachsteuerung sind Standard.",
  },
];

const ProcessSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="bg-background">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Vom Erstgespräch zum laufenden Einsatz
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Vier Schritte, klare Verantwortlichkeiten, ein fester Ansprechpartner.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <div key={step} className="relative rounded-xl border border-border/60 bg-card/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary">{step}</span>
              </div>
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;