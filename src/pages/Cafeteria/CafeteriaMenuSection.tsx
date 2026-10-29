import FadeIn from "../../components/common/FadeIn";

import cafeteriaImage1 from "../../assets/images/cucaf3.jpg";
import cafeteriaImage2 from "../../assets/images/cucaf2.jpg";
import cafeteriaImage3 from "../../assets/images/cucaf4.jpg";
import cafeteriaImage4 from "../../assets/images/cucaf7.jpg";

const spaces = [
  {
    title: "Zona de cafetería",
    image: cafeteriaImage1,
    desc: "Un espacio cómodo para disfrutar mientras esperas.",
  },
  {
    title: "Barra de preparación",
    image: cafeteriaImage2,
    desc: "El corazón de nuestra cafetería y servicio de bebidas.",
  },
  {
    title: "Zona de espera",
    image: cafeteriaImage3,
    desc: "Un ambiente pensado para descansar y aprovechar tu tiempo.",
  },
  {
    title: "Espacios para compartir",
    image: cafeteriaImage4,
    desc: "Ambientes cómodos para relajarte, conversar o trabajar.",
  },
];

export default function CafeteriaMenuSection() {
  return (
    <section className="section cafeteria-menu-section">
      <div className="container">
        <FadeIn className="service-section-intro cafeteria-section-intro">
          <h2 className="section-heading">
            Conoce nuestro espacio
          </h2>

          <p className="section-subtitle">
            Un ambiente pensado para disfrutar mientras tu vehículo recibe atención.
          </p>
        </FadeIn>

        <div className="grid grid-2 cafeteria-menu-grid">
          {spaces.map((item, index) => (
            <FadeIn
              key={item.title}
              className="fade-in-grid-item"
              delay={index * 0.08}
            >
              <article className="service-card-image cafeteria-space-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="service-card-bg"
                  loading="lazy"
                  decoding="async"
                />

                <div className="service-card-overlay" />

                <div className="service-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
