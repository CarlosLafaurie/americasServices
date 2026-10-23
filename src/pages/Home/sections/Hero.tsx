import { motion } from "framer-motion";

import heroVideo from "../../../assets/videos/hero-americas.mp4";

export default function Hero() {
  return (
    <section className="home-hero">
      <video
        className="home-hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source
          src={heroVideo}
          type="video/mp4"
        />
      </video>

      <div className="home-hero-overlay" />

      <div className="container home-hero-container">
        <motion.div
          className="home-hero-content"
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          <span className="home-hero-kicker">
            AMERICAN SERVICES
          </span>

          <h1 className="home-hero-title">
            Más que un
            <br />
            Car Wash.
          </h1>

          <p className="home-hero-description">
            Una experiencia pensada para aprovechar cada momento.
          </p>

          <div className="home-hero-actions">
            <button
              type="button"
              className="btn-primary"
            >
              Reservar servicio
            </button>

            <button
              type="button"
              className="btn-secondary"
            >
              Conocer beneficios
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}