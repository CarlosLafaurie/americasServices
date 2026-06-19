export default function TrustSection() {
  const stats = [
    {
      value: "+5.000",
      label: "Vehículos atendidos"
    },
    {
      value: "98%",
      label: "Satisfacción de clientes"
    },
    {
      value: "7 Días",
      label: "Atención semanal"
    },
    {
      value: "+50.000",
      label: "Puntos entregados"
    }
  ];

  return (
    <section className="section">

      <div className="container">

        <h2 className="section-heading">
          ¿Por qué elegirnos?
        </h2>

        <p className="section-subtitle">
          Combinamos tecnología, comodidad y beneficios
          exclusivos para ofrecer una experiencia superior.
        </p>

        <div className="trust-grid">

          {stats.map((item) => (
            <div
              key={item.label}
              className="trust-card"
            >

              <h3>
                {item.value}
              </h3>

              <p>
                {item.label}
              </p>

            </div>
          ))}

        </div>

        <div className="trust-features">

          <div className="card">
            <h3>Programa de Puntos</h3>

            <p>
              Acumula puntos con cada lavado
              y canjéalos por servicios,
              productos o beneficios exclusivos.
            </p>
          </div>

          <div className="card">
            <h3>Zona de Espera Premium</h3>

            <p>
              Cafetería, wifi de alta velocidad
              y espacios cómodos mientras
              atendemos tu vehículo.
            </p>
          </div>

          <div className="card">
            <h3>Reservas Online</h3>

            <p>
              Agenda tu servicio desde la web
              y evita filas o tiempos de espera
              innecesarios.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}