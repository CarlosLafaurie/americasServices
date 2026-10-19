import car3 from "../../assets/images/car4.jpeg";

export default function BenefitsSection() {
  return (
    <section className="section carwash-benefits-section">
      <div className="container">
        <div className="carwash-benefits">
          <div className="carwash-benefits-image">
            <img
              src={car3}
              alt="Car Wash Premium"
            />
          </div>

          <div className="carwash-benefits-info">
            <span className="carwash-benefits-badge">
              BENEFICIOS
            </span>

            <h2>
              Más que un lavado.
            </h2>

            <p>
              Mientras atendemos tu vehículo puedes disfrutar de
              nuestra cafetería, coworking o acumular puntos para
              futuras recompensas.
            </p>

            <div className="carwash-benefits-grid">
              <div>
                <span>✓</span>
                Puntos por cada servicio
              </div>

              <div>
                <span>✓</span>
                Atención rápida
              </div>

              <div>
                <span>✓</span>
                Zona de espera
              </div>

              <div>
                <span>✓</span>
                Café disponible
              </div>

              <div>
                <span>✓</span>
                Wifi de alta velocidad
              </div>

              <div>
                <span>✓</span>
                Historial digital
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}