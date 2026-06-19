import { useLocation } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  const { pathname } = useLocation();

  const authPages = [
    "/login",
    "/register",
  ];

  const hideLayout =
    authPages.includes(pathname);

  return (
    <div
      className={
        hideLayout
          ? "app-layout auth-layout"
          : "app-layout"
      }
    >
      {!hideLayout && <Navbar />}

      <main>
        <AppRoutes />
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;