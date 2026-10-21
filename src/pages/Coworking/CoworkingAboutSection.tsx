import FadeIn from "../../components/common/FadeIn";
export default function CoworkingAboutSection() {
  return (
    <section className="section coworking-about-section">
      <div className="container">
        <FadeIn className="service-section-intro coworking-section-intro">
          <h2 className="section-heading">Productividad sin interrupciones</h2>
          <p className="section-subtitle">
            Aprovecha el tiempo mientras tu vehículo
            recibe atención profesional.
          </p>
        </FadeIn>

        <div className="trust-features coworking-about-grid">
          <FadeIn className="fade-in-grid-item">
            <article className="card coworking-about-card">
            <h3>Internet Rápido</h3>
            <p>
              Conexión estable para reuniones,
              trabajo remoto y videollamadas.
            </p>
            </article>
          </FadeIn>

          <FadeIn className="fade-in-grid-item" delay={0.08}>
            <article className="card coworking-about-card">
            <h3>Espacios Cómodos</h3>
            <p>
              Mesas, sillas ergonómicas y un
              ambiente diseñado para trabajar.
            </p>
            </article>
          </FadeIn>

          <FadeIn className="fade-in-grid-item" delay={0.16}>
            <article className="card coworking-about-card">
            <h3>Café y Snacks</h3>
            <p>
              Complementa tu jornada con acceso
              a nuestra cafetería premium.
            </p>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
