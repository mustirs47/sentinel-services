import { Navigate } from "react-router-dom";

// Legacy URL: /leistungen → forward to the Sicherheit hub (preserves the
// historical security focus that owned this URL).
const LeistungenPage = () => <Navigate to="/sicherheit" replace />;

export default LeistungenPage;
