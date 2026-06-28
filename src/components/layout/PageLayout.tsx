import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg"
    >
      Zum Inhalt springen
    </a>
    <Header />
    <main id="main">{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
