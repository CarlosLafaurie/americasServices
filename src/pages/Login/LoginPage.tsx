import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "@/assets/logo/logoN.png";

import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const success =
      login(username, password);

    if (!success) {
      alert("Credenciales inválidas");
      return;
    }

    navigate("/");
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
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            type="submit"
            className="btn-primary"
          >
            Ingresar
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

        <div className="login-demo">

          <strong>Demo:</strong>

          <span>
            cliente / 123456
          </span>

        </div>

      </div>

    </section>
  );
}