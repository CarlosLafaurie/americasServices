export default function Hero() {
  return (
    <section className="hero-section page-hero">
     <div className="hero-overlay page-hero-overlay" />

     <div className="container">
      <div className="page-hero-content">
        <span className="hero-badge">
          ★ Acumula puntos con cada compra
        </span>

        <h1 className="hero-title">
          Más que un Car Wash.
          <br />
          Una experiencia completa.
        </h1>

        <p className="hero-description">
          Lava tu vehículo, disfruta de nuestra cafetería,
          agenda tu corte de barbería y trabaja cómodamente
          mientras acumulas puntos para canjear beneficios.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Reservar Servicio
          </button>

          <button className="btn-secondary">
            Ver Beneficios
          </button>
        </div>
      </div>
    </div>
    </section>
  );
}