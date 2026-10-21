import FadeIn from "../../components/common/FadeIn";

const process = [
  "Recepción del vehículo",
  "Inspección visual",
  "Lavado exterior",
  "Limpieza interior",
  "Control de calidad",
  "Entrega",
];

export default function ProcessSection() {
  return (
    <section className="section carwash-process-section">
      <div className="container">
        <FadeIn className="service-section-intro carwash-section-intro">
          <h2 className="section-heading">¿Cómo funciona?</h2>
          <p className="section-subtitle">
            Un proceso diseñado para garantizar calidad
            y una experiencia impecable en cada visita.
          </p>
        </FadeIn>

        <div className="process-timeline">
          {process.map((step, index) => (
            <FadeIn
              key={step}
              className="fade-in-grid-item carwash-process-step-motion"
              delay={index * 0.07}
            >
              <article className="process-step">
                <div className="process-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3>{step}</h3>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
