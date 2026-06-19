import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-section page-hero">
      <div className="hero-overlay page-hero-overlay" />

      <div className="container">
        <div className="page-hero-content">

          <motion.span
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut"
            }}
          >
            ★ Acumula puntos con cada compra
          </motion.span>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut"
            }}
          >
            Más que un Car Wash.
            <br />
            Una experiencia completa.
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut"
            }}
          >
            Lava tu vehículo, disfruta de nuestra cafetería,
            agenda tu corte de barbería y trabaja cómodamente
            mientras acumulas puntos para canjear beneficios.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: "easeOut"
            }}
          >
            <button className="btn-primary">
              Reservar Servicio
            </button>

            <button className="btn-secondary">
              Ver Beneficios
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}