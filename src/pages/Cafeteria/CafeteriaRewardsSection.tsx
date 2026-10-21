import AnimatedNumber from "../../components/common/AnimatedNumber";
import FadeIn from "../../components/common/FadeIn";

export default function CafeteriaRewardsSection() {
  return (
    <section className="section">

      <div className="container">

        <FadeIn className="membership-card cafeteria-rewards-card">

          <span className="membership-badge">
            PUNTOS Y BENEFICIOS
          </span>

          <h2>
            Cada compra suma recompensas
          </h2>

          <p>
            Acumula puntos en cada bebida
            y canjéalos por beneficios
            exclusivos dentro del complejo.
          </p>

          <div className="membership-grid cafeteria-rewards-grid">
            <FadeIn className="fade-in-grid-item">
              <div className="cafeteria-reward-item">
                <h3><AnimatedNumber value={50} prefix="+" /></h3>
                <p>Bebidas calientes</p>
              </div>
            </FadeIn>
            <FadeIn className="fade-in-grid-item" delay={0.08}>
              <div className="cafeteria-reward-item">
                <h3><AnimatedNumber value={80} prefix="+" /></h3>
                <p>Bebidas especiales</p>
              </div>
            </FadeIn>
          </div>

        </FadeIn>

      </div>

    </section>
  );
}
