import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useScrollToTop from "@/hooks/useScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import { CookieBanner } from "@/components/CookieBanner";

const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const LeistungenPage = lazy(() => import("./pages/Leistungen"));
const LeistungDetail = lazy(() => import("./pages/LeistungDetail"));
const BranchenPage = lazy(() => import("./pages/Branchen"));
const QualifikationenPage = lazy(() => import("./pages/Qualifikationen"));
const ArbeitsweisePage = lazy(() => import("./pages/Arbeitsweise"));
const KarrierePage = lazy(() => import("./pages/KarrierePage"));
const KontaktPage = lazy(() => import("./pages/KontaktPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function ScrollToTop() { useScrollToTop(); return null; }

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/leistungen" element={<LeistungenPage />} />
            <Route path="/leistungen/:slug" element={<LeistungDetail />} />
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
