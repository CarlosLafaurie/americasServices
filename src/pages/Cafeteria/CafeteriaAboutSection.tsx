import FadeIn from "../../components/common/FadeIn";
export default function CafeteriaAboutSection() {
  return (
    <section className="section">

      <div className="container">

        <h2 className="section-heading">
          Más que una cafetería
        </h2>

        <p className="section-subtitle">
          Diseñamos un espacio cómodo para que
          aproveches tu tiempo mientras esperas.
        </p>

        <div className="trust-features">

          <FadeIn className="fade-in-grid-item"><div className="card">
            <h3>Café Premium</h3>

            <p>
              Selección de cafés especiales
              preparados al momento.
            </p>
          </div></FadeIn>

          <FadeIn className="fade-in-grid-item" delay={0.08}><div className="card">
            <h3>Snacks y Postres</h3>

            <p>
              Opciones dulces y saladas para
              acompañar tu bebida favorita.
            </p>
          </div></FadeIn>

          <FadeIn className="fade-in-grid-item" delay={0.16}><div className="card">
            <h3>Zona de Descanso</h3>

            <p>
              Un ambiente cómodo y tranquilo
              para disfrutar tu espera.
            </p>
          </div></FadeIn>

        </div>

      </div>

    </section>
  );
}
