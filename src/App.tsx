import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import LeistungenPage from "./pages/Leistungen";
import LeistungDetail from "./pages/LeistungDetail";
import BranchenPage from "./pages/Branchen";
import QualifikationenPage from "./pages/Qualifikationen";
import ArbeitsweisePage from "./pages/Arbeitsweise";
import KarrierePage from "./pages/KarrierePage";
import KontaktPage from "./pages/KontaktPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
