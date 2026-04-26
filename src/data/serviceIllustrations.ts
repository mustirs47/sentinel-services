import objektschutz from "@/assets/illustrations/service-objektschutz.webp";
import veranstaltung from "@/assets/illustrations/service-veranstaltung.webp";
import baustelle from "@/assets/illustrations/service-baustelle.webp";
import empfang from "@/assets/illustrations/service-empfang.webp";
import streifendienst from "@/assets/illustrations/service-streifendienst.webp";
import schluessel from "@/assets/illustrations/service-schluessel.webp";

export const serviceIllustrations: Record<string, string> = {
  objektschutz,
  veranstaltungsschutz: veranstaltung,
  baustellenbewachung: baustelle,
  "empfangs-und-pfortendienst": empfang,
  "kontroll-und-streifendienst": streifendienst,
  sicherheitskonzepte: schluessel,
};
