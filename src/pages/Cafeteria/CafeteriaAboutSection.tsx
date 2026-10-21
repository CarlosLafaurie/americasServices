import FadeIn from "../../components/common/FadeIn";
export default function CafeteriaAboutSection() {
  return (
    <section className="section cafeteria-about-section">
      <div className="container">
        <FadeIn className="service-section-intro cafeteria-section-intro">
          <h2 className="section-heading">Más que una cafetería</h2>
          <p className="section-subtitle">
            Diseñamos un espacio cómodo para que
            aproveches tu tiempo mientras esperas.
          </p>
        </FadeIn>

        <div className="trust-features cafeteria-about-grid">
          <FadeIn className="fade-in-grid-item" delay={0}>
            <article className="card cafeteria-about-card">
            <h3>Café Premium</h3>
            <p>
              Selección de cafés especiales
              preparados al momento.
            </p>
            </article>
          </FadeIn>

          <FadeIn className="fade-in-grid-item" delay={0.08}>
            <article className="card cafeteria-about-card">
            <h3>Snacks y Postres</h3>
            <p>
              Opciones dulces y saladas para
              acompañar tu bebida favorita.
            </p>
            </article>
          </FadeIn>

          <FadeIn className="fade-in-grid-item" delay={0.16}>
            <article className="card cafeteria-about-card">
            <h3>Zona de Descanso</h3>
            <p>
              Un ambiente cómodo y tranquilo
              para disfrutar tu espera.
            </p>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
