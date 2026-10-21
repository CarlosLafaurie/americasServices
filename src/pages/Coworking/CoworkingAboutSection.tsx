import FadeIn from "../../components/common/FadeIn";
export default function CoworkingAboutSection() {
  return (
    <section className="section">

      <div className="container">

        <h2 className="section-heading">
          Productividad sin interrupciones
        </h2>

        <p className="section-subtitle">
          Aprovecha el tiempo mientras tu vehículo
          recibe atención profesional.
        </p>

        <div className="trust-features">

          <FadeIn className="fade-in-grid-item"><div className="card">
            <h3>Internet Rápido</h3>

            <p>
              Conexión estable para reuniones,
              trabajo remoto y videollamadas.
            </p>
          </div></FadeIn>

          <FadeIn className="fade-in-grid-item" delay={0.08}><div className="card">
            <h3>Espacios Cómodos</h3>

            <p>
              Mesas, sillas ergonómicas y un
              ambiente diseñado para trabajar.
            </p>
          </div></FadeIn>

          <FadeIn className="fade-in-grid-item" delay={0.16}><div className="card">
            <h3>Café y Snacks</h3>

            <p>
              Complementa tu jornada con acceso
              a nuestra cafetería premium.
            </p>
          </div></FadeIn>

        </div>

      </div>

    </section>
  );
}
