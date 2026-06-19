export default function Membership() {
  return (
    <section className="section">
      <div className="container">

        <div className="membership-premium">

          <div className="membership-image">

            <img
              src="https://images.pexels.com/photos/7821700/pexels-photo-7821700.jpeg?_gl=1*d6z6x6*_ga*MjY1NTk5NDY3LjE3Nzg2NTA1OTI.*_ga_8JE65Q40S6*czE3ODE4MjM1NTUkbzMkZzEkdDE3ODE4MjU1NTQkajM3JGwwJGgw"
              alt="Membership Premium"
            />

          </div>

          <div className="membership-info">

            <span className="membership-badge">
              MEMBERSHIP PREMIUM
            </span>

            <h2>
              Una experiencia exclusiva.
            </h2>

            <p>
              Accede a beneficios preferenciales,
              recompensas exclusivas y una atención
              diseñada para quienes disfrutan lo mejor.
            </p>

            <div className="membership-grid">

              <div>✓ Lavados ilimitados</div>
              <div>✓ Puntos dobles</div>
              <div>✓ Barbería con descuento</div>
              <div>✓ Café mensual gratis</div>
              <div>✓ Coworking preferencial</div>
              <div>✓ Atención prioritaria</div>

            </div>

            <button className="button">
              Adquirir Membresía
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}