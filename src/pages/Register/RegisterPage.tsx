import { Link } from "react-router-dom";
import logo from "@/assets/logo/logoN.png";

export default function RegisterPage() {
  return (
    <section className="register-page">

      <div className="register-overlay" />

      <div className="register-card">
        
        <Link 
          to="/"
          className="auth-back-button"
        >
          ← Inicio
        </Link>
        
        <Link
          to="/"
          className="register-logo-link"
        >
          <img
            src={logo}
            alt="American Services"
            className="register-logo"
          />
        </Link>

        <h1>
          Crear Cuenta
        </h1>

        <p>
          Regístrate y comienza a acumular
          puntos en Car Wash, Barbería,
          Cafetería y Coworking.
        </p>

        <form className="register-form">

          <div className="register-grid">

            <input
              type="text"
              placeholder="Nombres"
            />

            <input
              type="text"
              placeholder="Apellidos"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
            />

            <input
              type="tel"
              placeholder="Teléfono"
            />

            <input
              type="text"
              placeholder="Usuario"
            />

            <input
              type="password"
              placeholder="Contraseña"
            />

          </div>

          <button
            type="submit"
            className="btn-primary"
          >
            Crear Cuenta
          </button>

        </form>

        <div className="login-divider">
          <span>o</span>
        </div>

        <Link
          to="/login"
          className="btn-secondary register-login"
        >
          Ya tengo una cuenta
        </Link>
         
      </div>

    </section>
  );
}