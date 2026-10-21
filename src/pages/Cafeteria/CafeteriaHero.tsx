import FadeIn from "../../components/common/FadeIn";

export default function CafeteriaHero() {
  return (
    <section className="service-hero cafeteria-hero">
      <div className="service-hero-overlay" />

      <div className="container service-hero-container">
        <div className="service-hero-content">
          <FadeIn delay={0}>
          <span className="service-hero-badge">
            CAFETERÍA PREMIUM
          </span>
          </FadeIn>

          <FadeIn delay={0.08}>
          <h1 className="service-hero-title">
            Café, snacks y
            <br />
            momentos para disfrutar
          </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
          <p className="service-hero-description">
            Mientras tu vehículo recibe atención,
            disfruta café premium, bebidas especiales
            y un espacio cómodo para relajarte.
          </p>
          </FadeIn>

          <FadeIn delay={0.24}>
          <div className="service-hero-actions">
            <button
              type="button"
              className="btn-primary"
            >
              Ver Menú
            </button>

            <button
              type="button"
              className="btn-secondary"
            >
              Conocer Más
            </button>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
