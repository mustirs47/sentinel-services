import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface FAQSectionProps {
  faqs?: { question: string; answer: string }[];
  title?: string;
  light?: boolean;
}

const defaultFaqs = [
  { question: "Welche Zulassungen hat Sentinel Services?", answer: "Wir verfügen über die Gewerbeerlaubnis nach §34a GewO. Alle Einsatzkräfte haben die Sachkundeprüfung nach §34a GewO (IHK) abgelegt." },
  { question: "Wie schnell können Sie auf eine Anfrage reagieren?", answer: "Wir melden uns innerhalb von 24 Stunden auf Ihre Anfrage. Bei kurzfristigem Einsatzbedarf können wir häufig innerhalb von 24–48 Stunden einsatzbereit sein." },
  { question: "In welchem Gebiet sind Sie tätig?", answer: "Wir sind bundesweit einsatzbereit. Kontaktieren Sie uns für eine unverbindliche Bedarfsanalyse." },
  { question: "Wie werden Einsätze dokumentiert?", answer: "Jeder Einsatz wird lückenlos dokumentiert – mit standardisierten Übergabe- und Meldeprotokollen. Sie erhalten regelmäßige Berichte." },
  { question: "Gibt es Mindestlaufzeiten für Verträge?", answer: "Die Vertragslaufzeit wird individuell vereinbart. Wir bieten sowohl projektbezogene Einzeleinsätze als auch langfristige Betreuung an." },
  { question: "Bieten Sie auch Nacht- und Wochenenddienste an?", answer: "Ja, wir sind rund um die Uhr einsatzbereit – einschließlich Nacht-, Wochenend- und Feiertagsdiensten." },
];

const FAQSection = ({ faqs, title = "Häufig gestellte Fragen", light = false }: FAQSectionProps) => {
  const ref = useScrollAnimation();
  const items = faqs || defaultFaqs;

  return (
    <section className={light ? "section-light" : "bg-background"}>
      <div ref={ref} className="fade-in-section mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center mb-10">
          <h2
            className="text-2xl font-bold sm:text-3xl"
            style={light ? { color: "hsl(var(--section-light-fg))" } : undefined}
          >
            {title}
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {items.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-sm font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
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
