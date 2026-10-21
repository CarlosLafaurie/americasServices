import FadeIn from "../../components/common/FadeIn";

export default function CafeteriaRewardsSection() {
  return (
    <section className="section">

      <div className="container">

        <FadeIn className="membership-card">

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

          <div className="membership-grid">

            <div className="card">
              <h3>+50</h3>
              <p>Bebidas calientes</p>
            </div>

            <div className="card">
              <h3>+80</h3>
              <p>Bebidas especiales</p>
            </div>

          </div>

        </FadeIn>

      </div>

    </section>
  );
}
