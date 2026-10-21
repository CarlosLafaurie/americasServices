import FadeIn from "../../../components/common/FadeIn";

export default function Membership() {
  return (
    <section className="section home-membership-section">
      <div className="container">
          <div className="membership-premium">
          <FadeIn className="membership-image" direction="right">
            <img
              src="https://images.pexels.com/photos/7821700/pexels-photo-7821700.jpeg"
              alt="Membership Premium"
            />
          </FadeIn>

          <FadeIn className="membership-info" direction="left" delay={0.08}>
            <span className="membership-badge">
              MEMBERSHIP PREMIUM
            </span>

            <h2>
              Una experiencia exclusiva.
            </h2>

            <p>
              Accede a beneficios preferenciales,
              recompensas exclusivas y una atención
              diseñada para quienes disfrutan lo mejor.
            </p>

            <div className="membership-grid">
              <FadeIn className="fade-in-grid-item membership-benefit">
                <span className="membership-benefit-check" aria-hidden="true">✓</span>
                <span>Lavados ilimitados</span>
              </FadeIn>
              <FadeIn className="fade-in-grid-item membership-benefit" delay={0.06}>
                <span className="membership-benefit-check" aria-hidden="true">✓</span>
                <span>Puntos dobles</span>
              </FadeIn>
              <FadeIn className="fade-in-grid-item membership-benefit" delay={0.12}>
                <span className="membership-benefit-check" aria-hidden="true">✓</span>
                <span>Descuentos en servicios</span>
              </FadeIn>
              <FadeIn className="fade-in-grid-item membership-benefit" delay={0.18}>
                <span className="membership-benefit-check" aria-hidden="true">✓</span>
                <span>Café mensual gratis</span>
              </FadeIn>
              <FadeIn className="fade-in-grid-item membership-benefit" delay={0.24}>
                <span className="membership-benefit-check" aria-hidden="true">✓</span>
                <span>Coworking preferencial</span>
              </FadeIn>
              <FadeIn className="fade-in-grid-item membership-benefit" delay={0.3}>
                <span className="membership-benefit-check" aria-hidden="true">✓</span>
                <span>Atención prioritaria</span>
              </FadeIn>
            </div>

            <button
              type="button"
              className="button"
            >
              Adquirir Membresía
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
