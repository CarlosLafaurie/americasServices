import {
  Link,
} from "react-router-dom";

import logo from "../../assets/logo/logoN.png";

import ioiLogo from "../../assets/logo/IOI_logo_negro.png";

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

            <h3>
              American Services
            </h3>

            <p>
              Car Wash, Cafetería y Coworking
              en un solo lugar. Acumula puntos,
              disfruta beneficios y vive la
              experiencia American Services.
            </p>
          </div>

          <div>
            <h4>
              Servicios
            </h4>

            <ul className="footer-links">
              <li>
                <Link to="/carwash">
                  Car Wash
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
            <h4>
              Programa de Puntos
            </h4>

            <ul className="footer-links">
              <li>
                Acumula puntos
              </li>

              <li>
                Canjea beneficios
              </li>

              <li>
                Niveles de membresía
              </li>

              <li>
                Beneficios exclusivos
              </li>
            </ul>
          </div>

          <div>
            <h4>
              Información
            </h4>

            <ul className="footer-links">
              <li>
                Lunes - Domingo
              </li>

              <li>
                7:00 AM - 9:00 PM
              </li>

              <li>
                Barranquilla, Colombia
              </li>
            </ul>
          </div>

          <div>
            <h4>
              Legal
            </h4>

            <ul className="footer-links">
              <li>
                <Link to="/legal#terminos">
                  Términos y condiciones
                </Link>
              </li>

              <li>
                <Link to="/legal#privacidad">
                  Política de privacidad
                </Link>
              </li>

              <li>
                <Link to="/legal#datos">
                  Tratamiento de datos
                </Link>
              </li>

              <li>
                <Link to="/legal#fidelizacion">
                  Programa de fidelización
                </Link>
              </li>

              <li>
                <Link to="/legal#cookies">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 American Services.
            Todos los derechos reservados.
          </span>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/americas_services"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a href="#">
              Facebook
            </a>

            <a href="#">
              TikTok
            </a>
          </div>
        </div>

        <div className="footer-credit">
          <img
            src={ioiLogo}
            alt="Innovative Online Industries"
            className="footer-credit-logo"
          />

          <span>
            Powered by Innovative Online Industries
          </span>
        </div>
      </div>
    </footer>
  );
}