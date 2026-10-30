import FadeIn from "../../components/common/FadeIn";
import AnimatedNumber from "../../components/common/AnimatedNumber";

const services = [
  { name: "Lavado Básico", price: "$25.000", points: 50 },
  { name: "Lavado Premium", price: "$45.000", points: 100 },
  { name: "Lavado Ejecutivo", price: "$60.000", points: 150 },
  { name: "Detailing Completo", price: "$150.000", points: 300 },
];

export default function ServicesSection() {
  return (
    <section id="carwash-services" className="section carwash-services-section">
      <div className="container">
        <FadeIn className="service-section-intro carwash-section-intro">
          <h2 className="section-heading">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Cada servicio incluye acumulación de puntos
            para futuras recompensas.
          </p>
        </FadeIn>

        <div className="grid grid-2 carwash-services-grid">
          {services.map((service, index) => (
            <FadeIn
              key={service.name}
              className="fade-in-grid-item"
              delay={index * 0.08}
            >
              <article className="card carwash-service-card">
                <div className="carwash-service-heading">
                  <h3>{service.name}</h3>
                  <span className="carwash-service-points">
                    <AnimatedNumber
                      value={service.points}
                      prefix="+"
                      suffix=" pts"
                    />
                  </span>
                </div>
                <div className="carwash-service-price">{service.price}</div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
