import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Datenschutz = () => (
  <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
    <div className="max-w-2xl text-center">
      <h1 className="text-2xl font-bold text-foreground mb-4">Datenschutzerklärung</h1>
      <p className="text-muted-foreground mb-8">
        Diese Seite wird in Kürze mit der vollständigen Datenschutzerklärung ergänzt.
      </p>
      <Button asChild variant="outline">
        <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" /> Zurück zur Startseite</Link>
      </Button>
    </div>
  </div>
);

export default Datenschutz;
