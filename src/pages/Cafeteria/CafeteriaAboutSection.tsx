import FadeIn from "../../components/common/FadeIn";

export default function CafeteriaAboutSection() {
  return (
    <section id="cafeteria-about" className="section cafeteria-about-section">
      <div className="container">
        <FadeIn className="service-section-intro cafeteria-section-intro">
          <h2 className="section-heading">Más que una cafetería</h2>

          <p className="section-subtitle">
            Diseñamos un espacio cómodo para que disfrutes una buena pausa,
            compartas, trabajes o simplemente aproveches mejor tu tiempo
            mientras esperas.
          </p>
        </FadeIn>

        <div className="trust-features cafeteria-about-grid">
          <FadeIn className="fade-in-grid-item" delay={0}>
            <article className="card cafeteria-about-card">
              <h3>Café Premium</h3>

              <p>
                Disfruta una selección de cafés preparados al momento,
                pensados para acompañarte durante tu visita.
              </p>

              <span className="cafeteria-about-detail">
                Una pausa sencilla, bien preparada y siempre a tu alcance.
              </span>
            </article>
          </FadeIn>

          <FadeIn className="fade-in-grid-item" delay={0.08}>
            <article className="card cafeteria-about-card">
              <h3>Snacks y Postres</h3>

              <p>
                Encuentra opciones dulces y saladas para acompañar tu bebida,
                compartir o disfrutar mientras esperas.
              </p>

              <span className="cafeteria-about-detail">
                Alternativas prácticas para distintos momentos del día.
              </span>
            </article>
          </FadeIn>

          <FadeIn className="fade-in-grid-item" delay={0.16}>
            <article className="card cafeteria-about-card">
              <h3>Zona de Descanso</h3>

              <p>
                Un ambiente cómodo y tranquilo donde puedes sentarte,
                conversar, trabajar o simplemente descansar.
              </p>

              <span className="cafeteria-about-detail">
                Aprovecha tu tiempo mientras tu vehículo recibe atención.
              </span>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}