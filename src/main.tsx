import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Statische Fallback-Meta-Tags aus index.html entfernen, sobald JS läuft.
// Ohne JS (Social-Preview-Crawler) bleiben sie erhalten; mit JS übernimmt
// react-helmet-async pro Route – so entstehen keine doppelten Tags.
document.head
  .querySelectorAll("[data-static-seo]")
  .forEach((el) => el.remove());

createRoot(document.getElementById("root")!).render(<App />);
