import FadeIn from "../../components/common/FadeIn";
const services = [
  {
    name: "Lavado Básico",
    price: "$25.000",
    points: "+50 pts"
  },
  {
    name: "Lavado Premium",
    price: "$45.000",
    points: "+100 pts"
  },
  {
    name: "Lavado Ejecutivo",
    price: "$60.000",
    points: "+150 pts"
  },
  {
    name: "Detailing Completo",
    price: "$150.000",
    points: "+300 pts"
  }
];

export default function ServicesSection() {
  return (
    <section className="section">

      <div className="container">

        <h2 className="section-heading">
          Nuestros Servicios
        </h2>

        <p className="section-subtitle">
          Cada servicio incluye acumulación de puntos
          para futuras recompensas.
        </p>

        <div className="grid grid-2">

          {services.map((service, index) => (
            <FadeIn key={service.name} className="fade-in-grid-item" delay={index * 0.08}>

            <div
              className="card carwash-service-card"
            >

              <h3>{service.name}</h3>

              <div className="carwash-service-price">
                {service.price}
              </div>

              <div className="carwash-service-points">
                {service.points}
              </div>

            </div>
            </FadeIn>

          ))}

        </div>

      </div>

    </section>
  );
}
