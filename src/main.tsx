import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Hinweis: Die statischen Fallback-Meta-Tags aus index.html werden erst
// entfernt, wenn Helmet die Route-Tags tatsächlich gesetzt hat
// (siehe src/components/SEOHead.tsx). Sonst hätte der Head während des
// Lazy-Load-Fensters weder Description noch OG-Tags.
createRoot(document.getElementById("root")!).render(<App />);
