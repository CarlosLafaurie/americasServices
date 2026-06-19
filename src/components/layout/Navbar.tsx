import { Link } from "react-router-dom";

import logo from "../../assets/logo/logoN.png";

import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <header className="navbar-wrapper">

      <nav className="navbar">

        <Link
          to="/"
          className="navbar-brand"
        >
          <img
            src={logo}
            alt="American Services"
            className="navbar-logo"
          />
        </Link>

        <div className="navbar-links">

          <Link to="/">
            Inicio
          </Link>

          <Link to="/carwash">
            Car Wash
          </Link>

          <Link to="/barberia">
            Barbería
          </Link>

          <Link to="/cafeteria">
            Cafetería
          </Link>

          <Link to="/coworking">
            Coworking
          </Link>

        </div>

        <div className="navbar-actions">

          {user?.role === "admin" && (
            <Link
              to="/admin"
              className="navbar-admin"
            >
              Admin
            </Link>
          )}

          <Link
            to={user ? "/profile" : "/login"}
            className="navbar-login"
          >
            {user
              ? `Hola, ${user.firstName}`
              : "Iniciar Sesión"}
          </Link>

        </div>

      </nav>

    </header>
  );
}