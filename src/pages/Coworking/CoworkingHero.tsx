import FadeIn from "../../components/common/FadeIn";

export default function CoworkingHero() {
  return (
    <section className="service-hero coworking-hero">
      <div className="service-hero-overlay" />

      <div className="container service-hero-container">
        <div className="service-hero-content">
          <FadeIn delay={0}>
          <span className="service-hero-badge">
            COWORKING PREMIUM
          </span>
          </FadeIn>

          <FadeIn delay={0.08}>
          <h1 className="service-hero-title">
            Trabaja cómodamente
            <br />
            mientras esperas
          </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
          <p className="service-hero-description">
            Convierte el tiempo de espera en tiempo
            productivo con espacios cómodos, internet
            de alta velocidad y un ambiente profesional.
          </p>
          </FadeIn>

          <FadeIn delay={0.24}>
          <div className="service-hero-actions">
            <button
              type="button"
              className="btn-primary"
            >
              Conocer Espacios
            </button>

            <button
              type="button"
              className="btn-secondary"
            >
              Ver Beneficios
            </button>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
