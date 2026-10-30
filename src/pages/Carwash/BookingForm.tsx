import { useNavigate } from "react-router-dom";

import FadeIn from "../../components/common/FadeIn";
import bookingBackgroundImage from "../../assets/images/car2.jpeg";

export default function BookingForm() {
  const navigate = useNavigate();

  return (
    <section
      className="booking-section"
      style={{
        backgroundImage: `url(${bookingBackgroundImage})`,
      }}
    >
      <div className="booking-overlay" />

      <div className="container">
        <FadeIn className="booking-container">
          <div>
            <span className="membership-badge">
              CUIDADO PROFESIONAL
            </span>

            <h2 className="section-heading text-left">
              Dale a tu vehículo
              <br />
              el cuidado que merece
            </h2>

            <p className="section-subtitle text-left">
              Nos preocupamos por cada detalle de tu vehículo y trabajamos
              para ofrecerle el mejor cuidado en cada visita.
            </p>
          </div>

          <div className="booking-form">
            <span className="membership-badge">
              PROGRAMA DE BENEFICIOS
            </span>

            <h3>
              Cada visita puede darte más
            </h3>

            <p>
              Regístrate en American Services, acumula puntos con tus
              servicios y compras, consulta tu saldo y accede a beneficios
              pensados para nuestros clientes.
            </p>

            <button
              type="button"
              className="button"
              onClick={() => navigate("/register")}
            >
              Crear mi cuenta
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}