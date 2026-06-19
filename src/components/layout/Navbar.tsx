import { Link } from "react-router-dom";
import logo from "../../assets/logo/logoN.png";

export default function Navbar() {
const isLoggedIn = false;

return ( <header className="navbar-wrapper">

  <nav className="navbar">

    <Link to="/" className="navbar-brand">

      <img
        src={logo}
        alt="American Services"
        className="navbar-logo"
      />

    </Link>

    <div className="navbar-links">

      <Link to="/">Inicio</Link>
      <Link to="/carwash">Car Wash</Link>
      <Link to="/barberia">Barbería</Link>
      <Link to="/cafeteria">Cafetería</Link>
      <Link to="/coworking">Coworking</Link>

    </div>

    <div className="navbar-actions">

      <Link
        to={isLoggedIn ? "/profile" : "/login"}
        className="navbar-login"
      >
        {isLoggedIn ? "Perfil" : "Iniciar Sesión"}
      </Link>

    </div>

  </nav>

</header>

);
}
