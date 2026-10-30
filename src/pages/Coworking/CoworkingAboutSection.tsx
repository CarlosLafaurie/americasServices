import FadeIn from "../../components/common/FadeIn";

export default function CoworkingAboutSection() {
  return (
    <section
      id="coworking-spaces"
      className="section coworking-about-section"
    >
      <div className="container">
        <FadeIn className="service-section-intro coworking-section-intro">
          <h2 className="section-heading">
            Productividad sin interrupciones
          </h2>

          <p className="section-subtitle">
            Aprovecha tu tiempo en un espacio cómodo, tranquilo y preparado
            para trabajar mientras tu vehículo recibe atención profesional.
          </p>
        </FadeIn>

        <div className="trust-features coworking-about-grid">
          <FadeIn className="fade-in-grid-item">
            <article className="card coworking-about-card">
              <h3>Internet Rápido</h3>

              <p>
                Mantente conectado con una red estable para reuniones,
                trabajo remoto, navegación y videollamadas.
              </p>

              <span className="coworking-about-detail">
                Una conexión pensada para que tu jornada continúe sin
                interrupciones.
              </span>
            </article>
          </FadeIn>

          <FadeIn className="fade-in-grid-item" delay={0.08}>
            <article className="card coworking-about-card">
              <h3>Espacios Cómodos</h3>

              <p>
                Trabaja con tranquilidad en un ambiente organizado, cómodo
                y adaptado para concentrarte durante tu visita.
              </p>

              <span className="coworking-about-detail">
                Espacios funcionales para trabajar, reunirte o avanzar en tus
                pendientes.
              </span>
            </article>
          </FadeIn>

          <FadeIn className="fade-in-grid-item" delay={0.16}>
            <article className="card coworking-about-card">
              <h3>Café y Snacks</h3>

              <p>
                Complementa tu jornada con bebidas, café y opciones de nuestra
                cafetería mientras continúas trabajando.
              </p>

              <span className="coworking-about-detail">
                Todo lo que necesitas para hacer más agradable tu tiempo de
                espera.
              </span>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}