export default function CafeteriaHero() {
  return (
    <section className="service-hero cafeteria-hero">
      <div className="service-hero-overlay" />

      <div className="container service-hero-container">
        <div className="service-hero-content">
          <span className="service-hero-badge">
            CAFETERÍA PREMIUM
          </span>

          <h1 className="service-hero-title">
            Café, snacks y
            <br />
            momentos para disfrutar
          </h1>

          <p className="service-hero-description">
            Mientras tu vehículo recibe atención,
            disfruta café premium, bebidas especiales
            y un espacio cómodo para relajarte.
          </p>

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
        </div>
      </div>
    </section>
  );
}