import {
  Link,
} from "react-router-dom";

import logo from "../../assets/logo/logoN.png";

import {
  useAuth,
} from "@/hooks/useAuth";

export default function Navbar() {
  const {
    user,
    isLoading,
  } = useAuth();

  const firstName =
    user?.user.name
      ?.trim()
      .split(/\s+/)[0];

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

          <Link to="/cafeteria">
            Cafetería
          </Link>

          <Link to="/coworking">
            Coworking
          </Link>

        </div>

        <div className="navbar-actions">
          <Link
            to={
              user
                ? "/profile"
                : "/login"
            }
            className="navbar-login"
          >
            {isLoading
              ? "..."
              : user
                ? `Hola, ${firstName}`
                : "Ingresar"}
          </Link>
        </div>
      </nav>
    </header>
  );
}