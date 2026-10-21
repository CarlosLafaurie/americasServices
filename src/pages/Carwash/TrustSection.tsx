import AnimatedNumber from "../../components/common/AnimatedNumber";
import FadeIn from "../../components/common/FadeIn";

const stats = [
  { value: 5000, prefix: "+", label: "Vehículos atendidos" },
  { value: 98, suffix: "%", label: "Satisfacción de clientes" },
  { value: 7, suffix: " Días", label: "Atención semanal" },
  { value: 50000, prefix: "+", label: "Puntos entregados" },
];

const features = [
  {
    title: "Programa de Puntos",
    description:
      "Acumula puntos con cada lavado y canjéalos por servicios, productos o beneficios exclusivos.",
  },
  {
    title: "Zona de Espera Premium",
    description:
      "Cafetería, wifi de alta velocidad y espacios cómodos mientras atendemos tu vehículo.",
  },
  {
    title: "Reservas Online",
    description:
      "Agenda tu servicio desde la web y evita filas o tiempos de espera innecesarios.",
  },
];

export default function TrustSection() {
  return (
    <section className="section carwash-trust-section">
      <div className="container">
        <FadeIn className="service-section-intro carwash-section-intro">
          <h2 className="section-heading">¿Por qué elegirnos?</h2>
          <p className="section-subtitle">
            Combinamos tecnología, comodidad y beneficios
            exclusivos para ofrecer una experiencia superior.
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
                <h3>
                  <AnimatedNumber
                    value={item.value}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    className="carwash-trust-value"
                  />
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
