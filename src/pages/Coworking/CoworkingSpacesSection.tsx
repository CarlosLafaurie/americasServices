import FadeIn from "../../components/common/FadeIn";

import coworkingImage1 from "../../assets/images/cow6.jpg";
import coworkingImage2 from "../../assets/images/cow1.jpg";
import coworkingImage3 from "../../assets/images/cow4.jpg";
import coworkingImage4 from "../../assets/images/cow9.jpg";

const spaces = [
  {
    title: "Zona de Trabajo",
    image: coworkingImage1,
    desc: "Espacios amplios para trabajar cómodamente.",
  },
  {
    title: "Sala de Reuniones",
    image: coworkingImage2,
    desc: "Ideal para reuniones rápidas y videollamadas.",
  },
  {
    title: "Zona Lounge",
    image: coworkingImage3,
    desc: "Un ambiente relajado para descansar o conversar.",
  },
  {
    title: "Espacios Flexibles",
    image: coworkingImage4,
    desc: "Adaptados a diferentes necesidades de trabajo.",
  },
];

export default function CoworkingSpacesSection() {
  return (
    <section className="section coworking-spaces-section">
      <div className="container">
        <FadeIn className="service-section-intro coworking-section-intro">
          <h2 className="section-heading">
            Nuestros Espacios
          </h2>

          <p className="section-subtitle">
            Diseñados para que aproveches cada minuto.
          </p>
        </FadeIn>

        <div className="grid grid-2 coworking-spaces-grid">
          {spaces.map((space, index) => (
            <FadeIn
              key={space.title}
              className="fade-in-grid-item"
              delay={index * 0.08}
            >
              <article className="service-card-image coworking-space-card">
                <img
                  src={space.image}
                  alt={space.title}
                  className="service-card-bg"
                  loading="lazy"
                  decoding="async"
                />

                <div className="service-card-overlay" />

                <div className="service-card-content">
                  <h3>{space.title}</h3>

                  <p>{space.desc}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
