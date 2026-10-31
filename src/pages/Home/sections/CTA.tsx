import { useNavigate } from "react-router-dom";

import FadeIn from "../../../components/common/FadeIn";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <FadeIn className="container cta-section-content">
        <h2>
          Empieza a ganar beneficios hoy.
        </h2>

        <p>
          Crea tu cuenta en American Services, acumula puntos con tus servicios
          y compras, y accede a beneficios exclusivos.
        </p>

        <button
          type="button"
          className="button"
          onClick={() => navigate("/register")}
        >
          Crear mi cuenta
        </button>
      </FadeIn>
    </section>
  );
}