import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FAQPageJsonLd } from "@/components/StructuredData";

interface FAQSectionProps {
  faqs?: { question: string; answer: string }[];
  title?: string;
  light?: boolean;
  /** Set to false when parent already renders FAQPage JSON-LD for the same items. */
  emitJsonLd?: boolean;
}

const defaultFaqs = [
  { question: "Welche Zulassungen hat Sentinel Services?", answer: "Wir verfügen über die Gewerbeerlaubnis nach §34a GewO. Alle Einsatzkräfte haben die Sachkundeprüfung nach §34a GewO (IHK) abgelegt." },
  { question: "Wie schnell können Sie auf eine Anfrage reagieren?", answer: "Wir melden uns schnellstmöglich auf Ihre Anfrage. Bei kurzfristigem Einsatzbedarf können wir häufig zügig einsatzbereit sein." },
  { question: "In welchem Gebiet sind Sie tätig?", answer: "Wir sind bundesweit einsatzbereit. Kontaktieren Sie uns für eine unverbindliche Bedarfsanalyse." },
  { question: "Wie werden Einsätze dokumentiert?", answer: "Jeder Einsatz wird lückenlos dokumentiert – mit standardisierten Übergabe- und Meldeprotokollen. Sie erhalten regelmäßige Berichte." },
  { question: "Gibt es Mindestlaufzeiten für Verträge?", answer: "Die Vertragslaufzeit wird individuell vereinbart. Wir bieten sowohl projektbezogene Einzeleinsätze als auch langfristige Betreuung an." },
  { question: "Bieten Sie auch Nacht- und Wochenenddienste an?", answer: "Ja, wir sind rund um die Uhr einsatzbereit – einschließlich Nacht-, Wochenend- und Feiertagsdiensten." },
];

const FAQSection = ({ faqs, title = "Häufig gestellte Fragen", light = false, emitJsonLd = true }: FAQSectionProps) => {
  const ref = useScrollAnimation();
  const items = faqs || defaultFaqs;

  return (
    <section className={light ? "section-light" : "bg-background"}>
      {emitJsonLd && <FAQPageJsonLd faqs={items} />}
      <div ref={ref} className="fade-in-section reading-shell">
        <div className="section-head section-head--left !mb-10">
          <span className="eyebrow">FAQ</span>
          <h2 className="h-section">{title}</h2>
          <p className={`mt-3 prose-body ${light ? "text-muted-fg" : "text-muted-foreground"}`}>
            Antworten auf die Fragen, die uns am häufigsten gestellt werden. Fehlt etwas? Schreiben Sie uns kurz – wir antworten persönlich.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full border-t"
          style={light ? { borderColor: "hsl(var(--section-light-border))" } : { borderColor: "hsl(var(--border) / 0.4)" }}
        >
          {items.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              style={light ? { borderColor: "hsl(var(--section-light-border))" } : undefined}
            >
              <AccordionTrigger style={light ? { color: "hsl(var(--section-light-fg))" } : undefined}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                className={light ? "text-muted-fg" : undefined}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
