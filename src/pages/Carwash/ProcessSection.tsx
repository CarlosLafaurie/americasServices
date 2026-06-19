const process = [
  "Recepción del vehículo",
  "Inspección visual",
  "Lavado exterior",
  "Limpieza interior",
  "Control de calidad",
  "Entrega"
];

export default function ProcessSection() {
  return (
    <section className="section">

      <div className="container">

        <h2 className="section-heading">
          ¿Cómo funciona?
        </h2>

        <p className="section-subtitle">
          Un proceso diseñado para garantizar calidad
          y una experiencia impecable en cada visita.
        </p>

        <div className="process-timeline">

          {process.map((step, index) => (

            <div
              key={step}
              className="process-step"
            >

              <div className="process-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{step}</h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}