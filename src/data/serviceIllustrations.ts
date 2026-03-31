import objektschutz from "@/assets/illustrations/service-objektschutz.png";
import veranstaltung from "@/assets/illustrations/service-veranstaltung.png";
import baustelle from "@/assets/illustrations/service-baustelle.png";
import empfang from "@/assets/illustrations/service-empfang.png";
import streifendienst from "@/assets/illustrations/service-streifendienst.png";
import schluessel from "@/assets/illustrations/service-schluessel.png";

export const serviceIllustrations: Record<string, string> = {
  objektschutz,
  veranstaltungsschutz: veranstaltung,
  baustellenbewachung: baustelle,
  "empfangs-und-pfortendienst": empfang,
  "kontroll-und-streifendienst": streifendienst,
  sicherheitskonzepte: schluessel,
};
