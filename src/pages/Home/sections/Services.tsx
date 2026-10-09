import { Link } from "react-router-dom";

const services = [
  {
    title: "Car Wash",
    path: "/carwash",
    image:
      "https://images.pexels.com/photos/6872599/pexels-photo-6872599.jpeg?auto=compress&cs=tinysrgb&w=1200",
    desc: "Lavados premium, detailing y mantenimiento estético.",
  },
  {
    title: "Cafetería",
    path: "/cafeteria",
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200",
    desc: "Café premium, snacks y bebidas especiales.",
  },
  {
    title: "Coworking",
    path: "/coworking",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    desc: "Espacios cómodos para trabajar mientras esperas.",
  },
];

export default function Services() {
  return (
    <section className="section home-services-section">
      <div className="container">
        <div className="home-services-heading">
          <span className="section-subtitle">
            Todo en un solo lugar
          </span>

          <h2 className="home-services-title">
            Vive la experiencia
            <br />
            American Services
          </h2>

          <p className="home-services-description">
            Cuida tu vehículo, disfruta nuestra cafetería
            y aprovecha espacios cómodos mientras esperas.
          </p>
        </div>

        <div className="home-services-grid">
          {services.map((service) => (
            <Link
              to={service.path}
              key={service.title}
              className="service-card-image home-service-card"
            >
              <img
                src={service.image}
                alt={service.title}
                className="service-card-bg"
              />

              <div className="service-card-overlay" />

              <div className="service-card-content">
                <span className="home-service-index">
                  0{services.indexOf(service) + 1}
                </span>

                <div>
                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.desc}
                  </p>
                </div>

                <span className="home-service-link">
                  Conocer más →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}