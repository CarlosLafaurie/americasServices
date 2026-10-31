import AnimatedNumber from "../../../components/common/AnimatedNumber";
import FadeIn from "../../../components/common/FadeIn";

const stats = [
  {
    value: 2000,
    suffix: "+",
    decimals: 0,
    label: "Clientes satisfechos",
  },
  {
    value: 15000,
    suffix: "+",
    decimals: 0,
    label: "Servicios realizados",
  },
  {
    value: 4.9,
    suffix: "/5",
    decimals: 1,
    label: "Calificación promedio",
  },
];

const testimonials = [
  {
    name: "Carlos L.",
    role: "Cliente",
    text: "excelente servicio, buenos ambientes para trabajar o solo para pasar el rato mientras lavan tu carro.",
  },
  {
    name: "Camila A.",
    role: "Cliente",
    text: "Me gustó mucho la atención y la comodidad del lugar. Mientras atendían mi carro pude tomar un café y esperar tranquilo.",
  },
  {
    name: "Jhonny C.",
    role: "Cliente",
    text: "Sin duda el mejor lugar para consentir a tu vehículo.",
  },
];

export default function Testimonials() {
  return (
    <section id="home-testimonials" className="section home-social-proof-section">
      <div className="container">
        <FadeIn className="home-social-proof-heading">
          <h2 className="section-heading">
            Lo que dicen nuestros clientes
          </h2>
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

                <span>
                  {stat.label}
                </span>
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
                  <div>
                    <strong>
                      {item.name}
                    </strong>

                    <span>
                      {item.role}
                    </span>
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
                  <p>
                    "{item.text}"
                  </p>
                </blockquote>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}