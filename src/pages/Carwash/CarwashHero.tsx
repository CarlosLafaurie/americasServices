import FadeIn from "../../components/common/FadeIn";
import carwashHeroImage from "../../assets/images/car2.jpeg";

export default function CarwashHero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    element.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      className="service-hero carwash-hero"
      style={{
        backgroundImage: `url(${carwashHeroImage})`,
      }}
    >
      <div className="service-hero-overlay" />

      <div className="container service-hero-container">
        <div className="service-hero-content">
          <FadeIn delay={0}>
            <span className="service-hero-badge">
              SERVICIO PREMIUM
            </span>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="service-hero-title">
              Cuidado premium
              <br />
              para tu vehículo
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="service-hero-description">
              Lavados premium, detailing, protección cerámica,
              limpieza profunda y acabados profesionales para
              mantener tu vehículo siempre impecable.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="service-hero-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => scrollToSection("carwash-services")}
              >
                Ver Servicios
              </button>

              <button
                type="button"
                className="btn-secondary"
                onClick={() => scrollToSection("carwash-trust")}
              >
                ¿Por qué elegirnos?
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}