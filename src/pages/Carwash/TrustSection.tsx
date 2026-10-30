import FadeIn from "../../components/common/FadeIn";

const stats = [
  {
    value: "7 Días",
    label: "Atención semanal",
  },
  {
    value: "WiFi",
    label: "Conectividad disponible",
  },
  {
    value: "Puntos",
    label: "Beneficios por tus compras",
  },
  {
    value: "Todo en uno",
    label: "Car Wash, cafetería y coworking",
  },
];

const features = [
  {
    title: "Programa de Puntos",
    description:
      "Acumula puntos con tus servicios y compras para redimirlos en productos y beneficios disponibles.",
  },
  {
    title: "Zona de Espera Premium",
    description:
      "Disfruta cafetería, conexión WiFi y espacios cómodos mientras atendemos tu vehículo.",
  },
  {
    title: "Experiencia Integral",
    description:
      "Car Wash, cafetería y coworking reunidos en un mismo lugar para que aproveches mejor tu tiempo.",
  },
];

export default function TrustSection() {
  return (
    <section id="carwash-trust" className="section carwash-trust-section">
      <div className="container">
        <FadeIn className="service-section-intro carwash-section-intro">
          <h2 className="section-heading">
            ¿Por qué elegirnos?
          </h2>

          <p className="section-subtitle">
            Cuidamos tu vehículo mientras tú aprovechas tu tiempo en un
            espacio pensado para ofrecer comodidad, beneficios y una mejor
            experiencia en cada visita.
          </p>
        </FadeIn>

        <div className="trust-grid carwash-trust-grid">
          {stats.map((item, index) => (
            <FadeIn
              key={item.label}
              className="fade-in-grid-item"
              delay={index * 0.07}
            >
              <article className="trust-card">
                <h3 className="carwash-trust-value">
                  {item.value}
                </h3>

                <p>{item.label}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="trust-features carwash-trust-features">
          {features.map((feature, index) => (
            <FadeIn
              key={feature.title}
              className="fade-in-grid-item"
              delay={index * 0.08}
            >
              <article className="card trust-feature-card">
                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}