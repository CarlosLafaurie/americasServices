import { Routes, Route } from "react-router-dom";

import ScrollToTop from "../components/common/ScrollToTop";

import HomePage from "@/pages/Home/HomePage";
import CarwashPage from "@/pages/Carwash/CarwashPage";
import BarberPage from "@/pages/Barber/BarberPage";
import CafeteriaPage from "@/pages/Cafeteria/CafeteriaPage";
import CoworkingPage from "@/pages/Coworking/CoworkingPage";

import LoginPage from "@/pages/Login/LoginPage";
import RegisterPage from "@/pages/Register/RegisterPage";
import AdminPage from "@/pages/Admin/AdminPage";

import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/carwash" element={<CarwashPage />} />
        <Route path="/barberia" element={<BarberPage />} />
        <Route path="/cafeteria" element={<CafeteriaPage />} />
        <Route path="/coworking" element={<CoworkingPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}