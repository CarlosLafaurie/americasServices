import FadeIn from "../../components/common/FadeIn";

export default function CoworkingRewardsSection() {
  return (
    <section id="coworking-benefits"
     className="section">
      <div className="container">
        <FadeIn className="membership-card coworking-rewards-card">
          <span className="membership-badge">
            EXPERIENCIA PREMIUM
          </span>

          <h2>
            Mucho más que esperar
          </h2>

          <p>
            Convierte el tiempo de espera en un momento útil y cómodo.
            Trabaja, atiende reuniones, adelanta pendientes o simplemente
            relájate en un espacio preparado para acompañarte mientras
            cuidamos tu vehículo.
          </p>

          <div className="membership-grid coworking-rewards-grid">
            <FadeIn className="fade-in-grid-item">
              <div className="coworking-reward-item">
                <h3>WiFi</h3>

                <p>Conexión de alta velocidad</p>

                <span className="coworking-reward-detail">
                  Ideal para trabajar, navegar y mantener tus videollamadas
                  sin interrupciones.
                </span>
              </div>
            </FadeIn>

            <FadeIn className="fade-in-grid-item" delay={0.08}>
              <div className="coworking-reward-item">
                <h3>100%</h3>

                <p>Espacios climatizados</p>

                <span className="coworking-reward-detail">
                  Ambientes cómodos y preparados para trabajar, reunirte
                  o descansar durante tu visita.
                </span>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}