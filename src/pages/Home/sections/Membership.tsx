import FadeIn from "../../../components/common/FadeIn";

export default function Membership() {
  return (
    <section className="section">
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
              <FadeIn className="fade-in-grid-item">✓ Lavados ilimitados</FadeIn>
              <FadeIn className="fade-in-grid-item" delay={0.06}>✓ Puntos dobles</FadeIn>
              <FadeIn className="fade-in-grid-item" delay={0.12}>✓ Descuentos en servicios</FadeIn>
              <FadeIn className="fade-in-grid-item" delay={0.18}>✓ Café mensual gratis</FadeIn>
              <FadeIn className="fade-in-grid-item" delay={0.24}>✓ Coworking preferencial</FadeIn>
              <FadeIn className="fade-in-grid-item" delay={0.3}>✓ Atención prioritaria</FadeIn>
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
