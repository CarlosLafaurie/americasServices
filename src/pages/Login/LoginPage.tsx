import {
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import logo from "@/assets/logo/logoN.png";

import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const handleSubmit = async (
    event: React.FormEvent
  ): Promise<void> => {
    event.preventDefault();

    setError(null);
    setIsSubmitting(true);

    try {
      await login(
        email.trim(),
        password
      );

      navigate(
        "/profile",
        {
          replace: true,
        }
      );
    } catch (exception) {
      setError(
        exception instanceof Error
          ? exception.message
          : "No fue posible iniciar sesión."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="login-page">
      <div className="login-overlay" />

      <div className="login-card">
        <Link
          to="/"
          className="auth-back-button"
        >
          ← Inicio
        </Link>

        <Link
          to="/"
          className="login-logo-link"
        >
          <img
            src={logo}
            alt="American Services"
            className="login-logo"
          />
        </Link>

        <h1>
          Bienvenido de nuevo
        </h1>

        <p>
          Inicia sesión para consultar tus
          puntos, beneficios y perfil.
        </p>

        <form
          onSubmit={handleSubmit}
          className="login-form"
        >
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            autoComplete="email"
            disabled={isSubmitting}
            onChange={(event) =>
              setEmail(
                event.target.value
              )
            }
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            autoComplete="current-password"
            disabled={isSubmitting}
            onChange={(event) =>
              setPassword(
                event.target.value
              )
            }
            required
          />

          {error && (
            <div
              role="alert"
              className="login-error"
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            className="btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Ingresando..."
              : "Ingresar"}
          </button>
        </form>

        <div className="login-divider">
          <span>o</span>
        </div>

        <Link
          to="/register"
          className="btn-secondary login-register"
        >
          Crear cuenta
        </Link>
      </div>
    </section>
  );
}