import FadeIn from "../../components/common/FadeIn";

export default function CoworkingRewardsSection() {
  return (
    <section className="section">

      <div className="container">

        <FadeIn className="membership-card coworking-rewards-card">

          <span className="membership-badge">
            EXPERIENCIA PREMIUM
          </span>

          <h2>
            Mucho más que esperar
          </h2>

          <p>
            Disfruta un espacio diseñado para
            trabajar, reunirte o relajarte
            mientras cuidamos tu vehículo.
          </p>

          <div className="membership-grid coworking-rewards-grid">
            <FadeIn className="fade-in-grid-item">
              <div className="coworking-reward-item">
                <h3>WiFi</h3>
                <p>Alta velocidad</p>
              </div>
            </FadeIn>
            <FadeIn className="fade-in-grid-item" delay={0.08}>
              <div className="coworking-reward-item">
                <h3>100%</h3>
                <p>Espacios climatizados</p>
              </div>
            </FadeIn>
          </div>

        </FadeIn>

      </div>

    </section>
  );
}
