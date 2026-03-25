import { User, ShieldCheck, BookOpen, HeartHandshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import teamPhoto from "@/assets/team-photo.jpg";

const roles = [
  { icon: User, title: "Einsatzleitung", desc: "Koordination und Führung vor Ort" },
  { icon: HeartHandshake, title: "Kundenbetreuung", desc: "Persönliche Ansprechpartner für jedes Projekt" },
  { icon: ShieldCheck, title: "Operative Koordination", desc: "Planung und Steuerung der Einsatzkräfte" },
  { icon: BookOpen, title: "Fachliche Verantwortung", desc: "Qualitätssicherung und Weiterbildung" },
];

const TeamSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="team" className="bg-background">
      <div ref={ref} className="fade-in-section mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left – Team photo */}
          <div className="rounded-2xl overflow-hidden border border-border/60">
            <img
              src={teamPhoto}
              alt="Sentinel Services Team bei einer Einsatzbesprechung"
              className="w-full h-auto object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>

          {/* Right – Text */}
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Das Team hinter Sentinel Services
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Hinter jedem Einsatz stehen Menschen mit klarer Verantwortung. Unser Team vereint
              fachliche Qualifikation, Einsatzerfahrung und ein gemeinsames Verständnis von
              professioneller Sicherheitsarbeit.
            </p>

            <div className="mt-8 space-y-4">
              {roles.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{title}</p>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
