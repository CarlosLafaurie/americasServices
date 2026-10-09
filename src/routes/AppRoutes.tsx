import {
  Route,
  Routes,
} from "react-router-dom";

import ScrollToTop from "../components/common/ScrollToTop";

import HomePage from "@/pages/Home/HomePage";
import CarwashPage from "@/pages/Carwash/CarwashPage";
import CafeteriaPage from "@/pages/Cafeteria/CafeteriaPage";
import CoworkingPage from "@/pages/Coworking/CoworkingPage";
import LegalPage from "@/pages/Legal/LegalPage";

import LoginPage from "@/pages/Login/LoginPage";
import RegisterPage from "@/pages/Register/RegisterPage";
import ProfilePage from "@/pages/Profile/ProfilePage";

import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/carwash"
          element={<CarwashPage />}
        />

        <Route
          path="/cafeteria"
          element={<CafeteriaPage />}
        />

        <Route
          path="/coworking"
          element={<CoworkingPage />}
        />

        <Route
          path="/legal"
          element={<LegalPage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}