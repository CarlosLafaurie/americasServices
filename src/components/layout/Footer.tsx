import logo from "../../assets/logo/logoN.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          <div className="footer-brand">

            <img
              src={logo}
              alt="American Services"
              className="footer-logo"
            />

            <h3>American Services</h3>

            <p>
              Car Wash, Barbería, Cafetería y Coworking
              en un solo lugar. Acumula puntos y disfruta
              beneficios exclusivos en cada visita.
            </p>

          </div>

          <div>

            <h4>Servicios</h4>

            <ul className="footer-links">

              <li>
                <Link to="/carwash">
                  Car Wash
                </Link>
              </li>

              <li>
                <Link to="/barber">
                  Barbería
                </Link>
              </li>

              <li>
                <Link to="/cafeteria">
                  Cafetería
                </Link>
              </li>

              <li>
                <Link to="/coworking">
                  Coworking
                </Link>
              </li>

            </ul>

          </div>

          <div>

            <h4>Programa de Puntos</h4>

            <ul className="footer-links">

              <li>Acumula puntos</li>
              <li>Canjea beneficios</li>
              <li>Membership Premium</li>
              <li>Promociones exclusivas</li>

            </ul>

          </div>

          <div>

            <h4>Información</h4>

            <ul className="footer-links">

              <li>Lunes - Domingo</li>
              <li>7:00 AM - 9:00 PM</li>
              <li>Barranquilla, Colombia</li>
              <li>+57 300 000 0000</li>

            </ul>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 American Services. Todos los derechos reservados.
          </span>

          <div className="footer-socials">

            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">TikTok</a>

          </div>

        </div>

      </div>

    </footer>
  );
}