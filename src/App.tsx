import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import useScrollToTop from "@/hooks/useScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import { CookieBanner } from "@/components/CookieBanner";

// Indexierbare Hauptseiten eager laden: ein leerer Suspense-Fallback führte
// dazu, dass Crawler Seiten ohne H1, Description und OG-Tags erfassten.
import ServiceDetail from "./pages/LeistungDetail";
import DivisionHub from "./pages/DivisionHub";
import LeistungenPage from "./pages/Leistungen";
import BranchenPage from "./pages/Branchen";
import QualifikationenPage from "./pages/Qualifikationen";
import ArbeitsweisePage from "./pages/Arbeitsweise";
import KarrierePage from "./pages/KarrierePage";
import KontaktPage from "./pages/KontaktPage";

const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function ScrollToTop() { useScrollToTop(); return null; }

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Division hubs */}
            <Route path="/sicherheit" element={<DivisionHub division="sicherheit" />} />
            <Route path="/sicherheit/:slug" element={<ServiceDetail division="sicherheit" />} />
            <Route path="/reinigung" element={<DivisionHub division="reinigung" />} />
            <Route path="/reinigung/:slug" element={<ServiceDetail division="reinigung" />} />
            <Route path="/gruenanlagen" element={<DivisionHub division="gruenanlagen" />} />
            <Route path="/gruenanlagen/:slug" element={<ServiceDetail division="gruenanlagen" />} />
            <Route path="/facility-management" element={<DivisionHub division="facility-management" />} />
            <Route path="/facility-management/:slug" element={<ServiceDetail division="facility-management" />} />

            {/* Legacy redirects (preserve security SEO) */}
            <Route path="/leistungen" element={<LeistungenPage />} />
            <Route path="/leistungen/objektschutz" element={<Navigate to="/sicherheit/objektschutz" replace />} />
            <Route path="/leistungen/veranstaltungsschutz" element={<Navigate to="/sicherheit/veranstaltungsschutz" replace />} />
            <Route path="/leistungen/baustellenbewachung" element={<Navigate to="/sicherheit/baustellenbewachung" replace />} />
            <Route path="/leistungen/empfangs-und-pfortendienst" element={<Navigate to="/sicherheit/empfangs-und-pfortendienst" replace />} />
            <Route path="/leistungen/kontroll-und-streifendienst" element={<Navigate to="/sicherheit/kontroll-und-streifendienst" replace />} />
            <Route path="/leistungen/sicherheitskonzepte" element={<Navigate to="/sicherheit/sicherheitskonzepte" replace />} />
            <Route path="/leistungen/:slug" element={<Navigate to="/sicherheit" replace />} />

            {/* Legacy redirects for restructured divisions */}
            <Route path="/gruenanlagen/winterdienst" element={<Navigate to="/facility-management/winterdienst" replace />} />
            <Route path="/facility-management/technische-objektbetreuung" element={<Navigate to="/facility-management" replace />} />
            <Route path="/facility-management/technisches-fm" element={<Navigate to="/facility-management" replace />} />
            <Route path="/facility-management/infrastrukturelles-fm" element={<Navigate to="/facility-management" replace />} />
            <Route path="/facility-management/kaufmaennisches-fm" element={<Navigate to="/facility-management" replace />} />

            <Route path="/branchen" element={<BranchenPage />} />
            <Route path="/qualifikationen" element={<QualifikationenPage />} />
            <Route path="/arbeitsweise" element={<ArbeitsweisePage />} />
            <Route path="/karriere" element={<KarrierePage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
          <CookieBanner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
