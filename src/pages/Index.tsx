import { useEffect, useRef, useState } from "react";
import { Shield, Mail, ArrowRight } from "lucide-react";

const Index = () => {
  const [visible, setVisible] = useState(false);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0", "blur-0");
            entry.target.classList.remove("opacity-0", "translate-y-6", "blur-sm");
          }
        });
      },
      { threshold: 0.2 }
    );
    sectionsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const setRef = (i: number) => (el: HTMLDivElement | null) => {
    sectionsRef.current[i] = el;
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated background gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, hsl(205 90% 55% / 0.08), transparent 70%), radial-gradient(ellipse 60% 50% at 80% 80%, hsl(42 80% 55% / 0.05), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 animate-[drift_20s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 30% 60%, hsl(205 90% 55% / 0.06), transparent 70%)",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Nav hint */}
        <header className="flex items-center justify-center px-6 pt-10 md:pt-14">
          <div
            className={`flex items-center gap-3 transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <Shield className="h-7 w-7 text-primary" strokeWidth={1.5} />
            <span className="text-sm font-medium tracking-[0.25em] uppercase text-muted-foreground">
              Sentinel Services
            </span>
          </div>
        </header>

        {/* Hero */}
        <main className="flex flex-1 flex-col items-center justify-center px-6 pb-24">
          <div
            ref={setRef(0)}
            className="max-w-2xl text-center opacity-0 translate-y-6 blur-sm transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transitionDelay: "200ms" }}
          >
            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ lineHeight: "1.05", color: "hsl(210 20% 95%)" }}
            >
              Etwas Großes
              <br />
              <span className="text-primary">entsteht.</span>
            </h1>
          </div>

          <div
            ref={setRef(1)}
            className="mt-8 max-w-lg text-center opacity-0 translate-y-6 blur-sm transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transitionDelay: "450ms" }}
          >
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg" style={{ textWrap: "pretty" }}>
              Professionelle Dienstleistungen. Maßgeschneiderte Lösungen.
              Wir arbeiten hinter den Kulissen daran, Ihnen einen erstklassigen Service zu bieten.
            </p>
          </div>

          {/* Pulsing status indicator */}
          <div
            ref={setRef(2)}
            className="mt-10 flex items-center gap-3 opacity-0 translate-y-6 blur-sm transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transitionDelay: "700ms" }}
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
            </span>
            <span className="text-sm font-medium tracking-wide uppercase text-primary">
              In Arbeit
            </span>
          </div>

          {/* Teaser cards */}
          <div
            ref={setRef(3)}
            className="mt-16 grid max-w-xl gap-4 sm:grid-cols-3 opacity-0 translate-y-6 blur-sm transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transitionDelay: "950ms" }}
          >
            {[
              { label: "Zuverlässigkeit", desc: "Auf uns können Sie zählen" },
              { label: "Expertise", desc: "Erfahrung trifft Präzision" },
              { label: "Partnerschaft", desc: "Ihr Erfolg ist unser Antrieb" },
            ].map((item, i) => (
              <div
                key={item.label}
                className="group rounded-xl border border-border/60 bg-card/50 px-5 py-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_24px_-6px_hsl(205_90%_55%_/_0.15)]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="mt-1.5 text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Contact hint */}
          <div
            ref={setRef(4)}
            className="mt-16 flex flex-col items-center gap-3 opacity-0 translate-y-6 blur-sm transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transitionDelay: "1200ms" }}
          >
            <p className="text-sm text-muted-foreground">Interesse geweckt?</p>
            <a
              href="mailto:info@sentinel-services.de"
              className="group inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary/20 hover:border-primary/60 active:scale-[0.97]"
            >
              <Mail className="h-4 w-4" />
              Kontakt aufnehmen
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </main>

        {/* Footer */}
        <footer className="flex flex-col items-center gap-2 px-6 pb-8 text-center">
          <div className="h-px w-16 bg-border/50" />
          <p className="mt-2 text-xs text-muted-foreground/60">
            Managed by{" "}
            <a
              href="https://www.ovarna.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/80 underline-offset-4 transition-colors duration-200 hover:text-primary hover:underline"
            >
              Ovarna
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
