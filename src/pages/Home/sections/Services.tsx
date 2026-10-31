import FadeIn from "../../../components/common/FadeIn";
import { Link } from "react-router-dom";
import carwashImage from "../../../assets/images/car3.jpeg";
import cafeteriaImage from "../../../assets/images/cucaf1.jpg";
import coworkingImage from "../../../assets/images/cow3.jpg";

const services = [
  {
    title: "Car Wash",
    path: "/carwash",
    image:
      carwashImage,
    desc: "Lavados premium, detailing y mantenimiento estético.",
  },
  {
    title: "Cafetería",
    path: "/cafeteria",
    image: cafeteriaImage,
    desc: "Café premium, snacks y bebidas especiales.",
  },
  {
    title: "Coworking",
    path: "/coworking",
    image: coworkingImage,
    desc: "Espacios cómodos para trabajar mientras esperas.",
  },
];

export default function Services() {
  return (
    <section className="section home-services-section">
      <div className="container">
        <FadeIn className="home-services-heading">
          <span className="section-subtitle">
            Todo en un solo lugar
          </span>

          <h2 className="home-services-title">
            Vive la experiencia
            <br />
            American Services
          </h2>

          <p className="home-services-description">
            Cuida tu vehículo con servicios pensados para mantenerlo siempre en las
            mejores condiciones, disfruta nuestra cafetería y aprovecha espacios cómodos
            para trabajar, relajarte o compartir mientras esperas.
          </p>
        </FadeIn>

        <div className="home-services-grid">
          {services.map((service, index) => (
            <FadeIn
              key={service.title}
              className="fade-in-grid-item home-service-card-wrapper"
              delay={index * 0.1}
            >
            <Link
              to={service.path}
              className="service-card-image home-service-card"
            >
              <img
                src={service.image}
                alt={service.title}
                className="service-card-bg"
                loading="lazy"
                decoding="async"
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
