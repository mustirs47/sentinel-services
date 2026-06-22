import { MessageSquare, Search, FileText, Handshake } from "@/lib/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Anfrage & Abstimmung",
    desc: "Sie schildern Ihren konkreten Bedarf per Formular oder E-Mail. Ein persönlicher Ansprechpartner meldet sich schnellstmöglich zur Klärung der Details.",
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
      <div ref={ref} className="fade-in-section section-shell">
        <div className="section-head">
          <span className="eyebrow">Ablauf</span>
          <h2 className="h-section text-foreground">Von der Anfrage zum laufenden Einsatz</h2>
          <p className="section-intro">Vier Schritte, klare Verantwortlichkeiten, ein fester Ansprechpartner.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <div key={step} className="surface-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="icon-tile-sm !rounded-full"><Icon /></span>
                <span className="text-xs font-bold text-primary">{step}</span>
              </div>
              <h3 className="h-card text-foreground">{title}</h3>
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