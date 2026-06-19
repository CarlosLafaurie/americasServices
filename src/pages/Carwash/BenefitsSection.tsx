export default function BenefitsSection() {
  return (
    <section className="section">

      <div className="container">

        <div className="membership-premium">

          <div className="membership-image">

            <img
              src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg"
              alt="Car Wash Premium"
            />

          </div>

          <div className="membership-info">

            <span className="membership-badge">
              BENEFICIOS
            </span>

            <h2>
              Más que un lavado.
            </h2>

            <p>
              Mientras atendemos tu vehículo
              puedes disfrutar de nuestra cafetería,
              coworking o acumular puntos para
              futuras recompensas.
            </p>

            <div className="membership-grid">

              <div>✓ Puntos por cada servicio</div>
              <div>✓ Atención rápida</div>
              <div>✓ Zona de espera</div>
              <div>✓ Café disponible</div>
              <div>✓ Wifi de alta velocidad</div>
              <div>✓ Historial digital</div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}