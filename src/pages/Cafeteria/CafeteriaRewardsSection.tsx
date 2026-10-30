import FadeIn from "../../components/common/FadeIn";

export default function CafeteriaRewardsSection() {
  return (
    <section className="section" id="cafeteria-benefits">
      <div className="container">
        <FadeIn className="membership-card cafeteria-rewards-card">
          <span className="membership-badge">
            PUNTOS Y BENEFICIOS
          </span>

          <h2>
            Tus compras también te recompensan
          </h2>

          <p>
            Cada compra realizada en nuestra cafetería puede ayudarte a
            acumular puntos dentro del programa de beneficios de American
            Services.
          </p>

          <div className="membership-grid cafeteria-rewards-grid">
            <FadeIn className="fade-in-grid-item">
              <div className="cafeteria-reward-item">
                <h3>Acumula</h3>

                <p>
                  Genera puntos con tus compras y sigue aumentando tu saldo
                  cada vez que disfrutas de nuestra cafetería.
                </p>
              </div>
            </FadeIn>

            <FadeIn className="fade-in-grid-item" delay={0.08}>
              <div className="cafeteria-reward-item">
                <h3>Redime</h3>

                <p>
                  Utiliza tus puntos disponibles para acceder a productos y
                  beneficios habilitados dentro del programa.
                </p>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}