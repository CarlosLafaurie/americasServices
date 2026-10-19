import carwashHeroImage from "../../assets/images/car2.jpeg";

export default function CarwashHero() {
  return (
    <section
      className="service-hero carwash-hero"
      style={{
        backgroundImage: `url(${carwashHeroImage})`,
      }}
    >
      <div className="service-hero-overlay" />

      <div className="container service-hero-container">
        <div className="service-hero-content">
          <span className="service-hero-badge">
            SERVICIO PREMIUM
          </span>

          <h1 className="service-hero-title">
            Cuidado premium
            <br />
            para tu vehículo
          </h1>

          <p className="service-hero-description">
            Lavados premium, detailing, protección cerámica,
            limpieza profunda y acabados profesionales para
            mantener tu vehículo siempre impecable.
          </p>

          <div className="service-hero-actions">
            <button
              type="button"
              className="btn-primary"
            >
              Reservar Lavado
            </button>

            <button
              type="button"
              className="btn-secondary"
            >
              Ver Servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}