import AnimatedNumber from "../../../components/common/AnimatedNumber";
import FadeIn from "../../../components/common/FadeIn";

const stats = [
  { value: 5000, suffix: "+", decimals: 0, label: "Clientes satisfechos" },
  { value: 25000, suffix: "+", decimals: 0, label: "Servicios realizados" },
  { value: 4.9, suffix: "/5", decimals: 1, label: "Calificación promedio" },
];

const testimonials = [
  {
    name: "Carlos M.",
    role: "Cliente Premium",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
    text: "Lavo mi carro cada semana y los puntos realmente valen la pena.",
  },
  {
    name: "Laura G.",
    role: "Cliente Frecuente",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    text: "Mientras lavan mi vehículo trabajo desde el coworking.",
  },
  {
    name: "Andrés R.",
    role: "Cliente Premium",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300",
    text: "La barbería y la cafetería son excelentes. Todo en un mismo lugar.",
  },
];

export default function Testimonials() {
  return (
    <section className="section home-social-proof-section">
      <div className="container">
        <FadeIn className="home-social-proof-heading">
          <h2 className="section-heading">Lo que dicen nuestros clientes</h2>
        </FadeIn>

        <div className="stats-grid home-stats-grid">
          {stats.map((stat, index) => (
            <FadeIn
              key={stat.label}
              className="fade-in-grid-item"
              delay={index * 0.08}
            >
              <div className="stats-card home-stat-card">
                <h3 className="home-stat-value">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    locale={stat.decimals ? "en-US" : "es-CO"}
                    className="home-stat-count"
                  />
                </h3>
                <span>{stat.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="grid grid-3 home-testimonials-grid">
          {testimonials.map((item, index) => (
            <FadeIn
              key={item.name}
              className="fade-in-grid-item"
              delay={index * 0.08}
            >
              <article className="testimonial-card home-testimonial-card">
                <div className="testimonial-header">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="testimonial-avatar"
                  />

                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>

                <div
                  className="testimonial-stars"
                  role="img"
                  aria-label="Calificación de 5 sobre 5"
                >
                  ★★★★★
                </div>

                <blockquote>
                  <p>"{item.text}"</p>
                </blockquote>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
