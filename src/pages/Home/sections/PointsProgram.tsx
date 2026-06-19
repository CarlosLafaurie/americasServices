export default function PointsProgram() {
  return (
    <section className="section points-section">
      <div className="container">

        <h2 className="section-heading">
          Tu fidelidad tiene recompensa
        </h2>

        <p className="section-subtitle">
          Cada servicio suma puntos que podrás
          convertir en experiencias gratuitas.
        </p>

        <div className="points-highlight">
          <span>★★★★★</span>
          <h3>
            Acumula puntos en TODOS los servicios
          </h3>
        </div>

        <div className="grid grid-2">

          <div className="card">
            <h3>Acumula</h3>

            <ul className="list">
              <li>+100 pts Lavado Premium</li>
              <li>+80 pts Barbería</li>
              <li>+25 pts Cafetería</li>
              <li>+50 pts Coworking</li>
            </ul>
          </div>

          <div className="card">
            <h3>Canjea</h3>

            <ul className="list">
              <li>500 pts → Lavado Gratis</li>
              <li>1000 pts → Corte Gratis</li>
              <li>1500 pts → Combo Cafetería</li>
              <li>3000 pts → Membership Premium</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}