import { useEffect, useRef, useState } from "react";

import {

  motion,

  useInView,

  useReducedMotion,

} from "framer-motion";

import FadeIn from "../../../components/common/FadeIn";

type AnimatedNumberProps = {

  value: number;

  prefix?: string;

  suffix?: string;

  duration?: number;

};

function AnimatedNumber({

  value,

  prefix = "",

  suffix = "",

  duration = 900,

}: AnimatedNumberProps) {

  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {

    once: true,

    amount: 0.6,

  });

  const reduceMotion = useReducedMotion();

  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!isInView || reduceMotion) {
      return;
    }

    let animationFrame = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1,
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      setCurrentValue(
        Math.round(value * eased),
      );

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [
    duration,
    isInView,
    reduceMotion,
    value,
  ]);

  const displayValue = reduceMotion
    ? value
    : currentValue;

  return (
    <span ref={ref}>
      {prefix}
      {displayValue.toLocaleString("es-CO")}
      {suffix}
    </span>
  );
}

const earnPoints = [

  {

    points: 100,

    title: "Lavado Premium",

    description:

      "Cada servicio premium suma puntos a tu cuenta.",

  },

  {

    points: 25,

    title: "Cafetería",

    description:

      "Tus consumos también hacen crecer tus recompensas.",

  },

  {

    points: 50,

    title: "Coworking",

    description:

      "Trabaja, disfruta tu tiempo y sigue acumulando.",

  },

];

const rewards = [

  {

    points: 500,

    title: "Lavado Gratis",

    description:

      "Convierte tus puntos en cuidado para tu vehículo.",

  },

  {

    points: 1500,

    title: "Combo Cafetería",

    description:

      "Disfruta beneficios especiales en nuestra cafetería.",

  },

  {

    points: 3000,

    title: "Membership Premium",

    description:

      "Accede a una experiencia superior y beneficios exclusivos.",

  },

];

export default function PointsProgram() {

  const reduceMotion = useReducedMotion();

  return (

    <section className="section points-section">

      <div className="container">

        <FadeIn className="points-heading">

          <span className="section-subtitle">

            PROGRAMA DE FIDELIDAD

          </span>

          <h2 className="section-heading">

            Tu fidelidad tiene recompensa

          </h2>

          <p className="points-description">

            Todo lo que haces en American

            Services puede acercarte a tu

            próxima recompensa.

          </p>

        </FadeIn>

        <FadeIn>

          <div className="points-highlight">

            <div

              className="points-stars"

              aria-label="Cinco estrellas"

            >

              {[0, 1, 2, 3, 4].map(

                (star) => (

                  <motion.span

                    key={star}

                    initial={

                      reduceMotion

                        ? false

                        : {

                            opacity: 0,

                            scale: 0.4,

                            y: 8,

                          }

                    }

                    whileInView={{

                      opacity: 1,

                      scale: 1,

                      y: 0,

                    }}

                    viewport={{

                      once: true,

                    }}

                    transition={{

                      duration: 0.35,

                      delay: reduceMotion

                        ? 0

                        : star * 0.11,

                    }}

                    aria-hidden="true"

                  >

                    ★

                  </motion.span>

                ),

              )}

            </div>

            <span className="points-highlight-label">

              Cada visita cuenta

            </span>

            <h3>

              Acumula. Disfruta. Vuelve por

              más.

            </h3>

            <p>

              Tus servicios y consumos se

              convierten en puntos que puedes

              usar dentro de American Services.

            </p>

          </div>

        </FadeIn>

        <div className="points-program-grid">

          <FadeIn

            className="fade-in-grid-item"

            direction="left"

          >

            <article className="points-card points-card-earn">

              <div className="points-card-header">

                <div>

                  <span className="points-card-eyebrow">

                    SUMA PUNTOS

                  </span>

                  <h3>Acumula</h3>

                </div>

                <span className="points-card-symbol">

                  +

                </span>

              </div>

              <div className="points-list">

                {earnPoints.map(

                  (item, index) => (

                    <motion.div

                      className="points-list-item"

                      key={item.title}

                      initial={

                        reduceMotion

                          ? false

                          : {

                              opacity: 0,

                              y: 18,

                            }

                      }

                      whileInView={{

                        opacity: 1,

                        y: 0,

                      }}

                      viewport={{

                        once: true,

                        amount: 0.3,

                      }}

                      transition={{

                        duration: 0.45,

                        delay:

                          reduceMotion

                            ? 0

                            : index * 0.08,

                      }}

                    >

                      <div className="points-value">

                        <AnimatedNumber

                          value={item.points}

                          prefix="+"

                        />

                        <span>pts</span>

                      </div>

                      <div className="points-item-content">

                        <strong>

                          {item.title}

                        </strong>

                        <p>

                          {item.description}

                        </p>

                      </div>

                    </motion.div>

                  ),

                )}

              </div>

            </article>

          </FadeIn>

          <FadeIn

            className="fade-in-grid-item"

            direction="right"

            delay={0.08}

          >

            <article className="points-card points-card-redeem">

              <div className="points-card-header">

                <div>

                  <span className="points-card-eyebrow">

                    USA TUS PUNTOS

                  </span>

                  <h3>Canjea</h3>

                </div>

                <span className="points-card-symbol">

                  →

                </span>

              </div>

              <div className="points-list">

                {rewards.map(

                  (item, index) => (

                    <motion.div

                      className="points-list-item"

                      key={item.title}

                      initial={

                        reduceMotion

                          ? false

                          : {

                              opacity: 0,

                              y: 18,

                            }

                      }

                      whileInView={{

                        opacity: 1,

                        y: 0,

                      }}

                      viewport={{

                        once: true,

                        amount: 0.3,

                      }}

                      transition={{

                        duration: 0.45,

                        delay:

                          reduceMotion

                            ? 0

                            : index * 0.08,

                      }}

                    >

                      <div className="points-value points-value-redeem">

                        <AnimatedNumber

                          value={item.points}

                        />

                        <span>pts</span>

                      </div>

                      <div className="points-item-content">

                        <strong>

                          {item.title}

                        </strong>

                        <p>

                          {item.description}

                        </p>

                      </div>

                    </motion.div>

                  ),

                )}

              </div>

            </article>

          </FadeIn>

        </div>

        <FadeIn>

          <div className="points-footer-message">

            <span className="points-footer-dot" />

            <p>

              Tus puntos permanecen vinculados

              a tu cuenta y puedes consultar tu

              saldo desde tu perfil.

            </p>

          </div>

        </FadeIn>

      </div>

    </section>

  );

}