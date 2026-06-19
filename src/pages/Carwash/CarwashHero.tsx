export default function CarwashHero() {
  return (
    <section className="carwash-hero page-hero">

     <div className="carwash-hero-overlay page-hero-overlay" />

      <div className="container">
      <div className="page-hero-content">
        <span className="hero-badge">
          SERVICIO PREMIUM
        </span>

      <h1 className="hero-title">
        Cuidado premium
        <br />
        para tu vehículo
      </h1>

      <p className="hero-description">
        Lavados premium, detailing, protección cerámica,
        limpieza profunda y acabados profesionales para
        mantener tu vehículo siempre impecable.
      </p>

        <div className="hero-buttons">

          <button className="button">
            Reservar Lavado
          </button>

          <button className="btn-secondary">
            Ver Servicios
          </button>

        </div>

        <div className="carwash-hero-stats">

          <div>
            <strong>+5.000</strong>
            <span>Vehículos atendidos</span>
          </div>

          <div>
            <strong>98%</strong>
            <span>Satisfacción</span>
          </div>

          <div>
            <strong>+50.000</strong>
            <span>Puntos entregados</span>
          </div>

        </div>
      </div>
      </div>

    </section>
  );
}