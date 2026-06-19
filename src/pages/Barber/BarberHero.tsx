export default function BarberHero() {
  return (
    <section className="barber-hero page-hero">
      <div className="page-hero-overlay" />

      <div className="container page-hero-content">

        <span className="hero-badge">
          BARBERÍA PREMIUM
        </span>

        <h1 className="hero-title">
          Estilo impecable
          <br />
          mientras esperas
        </h1>

        <p className="hero-description">
          Aprovecha el tiempo de lavado de tu vehículo
          para disfrutar un servicio profesional de
          barbería y salir renovado.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Reservar Cita
          </button>

          <button className="btn-secondary">
            Ver Servicios
          </button>
        </div>

      </div>
    </section>
  );
}