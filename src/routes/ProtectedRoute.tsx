import { Navigate } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    user,
    isLoading,
  } = useAuth();

  if (isLoading) {
    return (
      <section className="section">
        <div className="container">
          <p>
            Cargando tu cuenta...
          </p>
        </div>
      </section>
    );
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return children;
}