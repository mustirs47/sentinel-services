// Backwards-compatible re-export. Source of truth: src/data/divisions.ts
import { divisions, type ServiceData } from "./divisions";

export type { ServiceData };

// Historically `services` contained the security offerings only.
// Keep the same shape so existing imports keep working while we migrate.
export const services: ServiceData[] =
  divisions.find((d) => d.slug === "sicherheit")?.services ?? [];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
