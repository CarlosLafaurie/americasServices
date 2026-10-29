import FadeIn from "../../components/common/FadeIn";
import car3 from "../../assets/images/car4.jpeg";

export default function BenefitsSection() {
  return (
    <section className="section carwash-benefits-section">
      <div className="container">
        <div className="carwash-benefits">
          <FadeIn className="carwash-benefits-image" direction="right">
            <img
              src={car3}
              alt="Car Wash Premium"
              loading="lazy"
              decoding="async"
            />
          </FadeIn>

          <FadeIn className="carwash-benefits-info" direction="left" delay={0.08}>
            <span className="carwash-benefits-badge">
              BENEFICIOS
            </span>

            <h2>
              Más que un lavado.
            </h2>

            <p>
              Mientras atendemos tu vehículo puedes disfrutar de
              nuestra cafetería, coworking o acumular puntos para
              futuras recompensas.
            </p>

            <div className="carwash-benefits-grid">
              <FadeIn className="fade-in-grid-item">
                <div className="carwash-benefit-item">
                  <span>✓</span>
                  Puntos por cada servicio
                </div>
              </FadeIn>

              <FadeIn className="fade-in-grid-item" delay={0.06}>
                <div className="carwash-benefit-item">
                  <span>✓</span>
                  Atención rápida
                </div>
              </FadeIn>

              <FadeIn className="fade-in-grid-item" delay={0.12}>
                <div className="carwash-benefit-item">
                  <span>✓</span>
                  Zona de espera
                </div>
              </FadeIn>

              <FadeIn className="fade-in-grid-item" delay={0.18}>
                <div className="carwash-benefit-item">
                  <span>✓</span>
                  Café disponible
                </div>
              </FadeIn>

              <FadeIn className="fade-in-grid-item" delay={0.24}>
                <div className="carwash-benefit-item">
                  <span>✓</span>
                  Wifi de alta velocidad
                </div>
              </FadeIn>

              <FadeIn className="fade-in-grid-item" delay={0.3}>
                <div className="carwash-benefit-item">
                  <span>✓</span>
                  Historial digital
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
