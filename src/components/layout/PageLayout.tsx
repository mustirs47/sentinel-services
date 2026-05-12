import { ReactNode } from "react";
import Topbar from "./Topbar";
import Header from "./Header";
import Footer from "./Footer";

const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background">
    <Topbar />
    <Header />
    {children}
    <Footer />
  </div>
);

export default PageLayout;
