import { users } from "@/mock/users";

export default function AdminPage() {
  const totalPoints = users.reduce(
    (acc, user) => acc + user.points,
    0
  );

  return (
    <section className="admin-page">

      <div className="container">

        <div className="admin-hero">

          <div className="admin-hero-content">

            <span className="admin-badge">
              PANEL ADMINISTRATIVO
            </span>

            <h1>
              Gestión de Usuarios
            </h1>

            <p>
              Administra usuarios, consulta
              información general y supervisa
              el programa de puntos.
            </p>

            <div className="admin-summary">

              <span>
                Puntos totales del sistema
              </span>

              <strong>
                {totalPoints.toLocaleString()}
              </strong>

            </div>

          </div>

        </div>

        <div className="admin-stats">

          <div className="admin-stat-card">

            <h3>
              {users.length}
            </h3>

            <span>
              Usuarios registrados
            </span>

          </div>

          <div className="admin-stat-card">

            <h3>
              {totalPoints.toLocaleString()}
            </h3>

            <span>
              Puntos acumulados
            </span>

          </div>

        </div>

        <div className="admin-users">

          {users.map((user) => (

            <div
              key={user.id}
              className="admin-user-card"
            >

              <div className="admin-user-top">

                <div>

                  <h3>
                    {user.firstName}{" "}
                    {user.lastName}
                  </h3>

                  <span>
                    @{user.username}
                  </span>

                </div>

                <span
                  className={
                    user.role === "admin"
                      ? "admin-role admin"
                      : "admin-role"
                  }
                >
                  {user.role}
                </span>

              </div>

              <div className="admin-user-info">

                <div>

                  <strong>Email</strong>

                  <span>
                    {user.email}
                  </span>

                </div>

                <div>

                  <strong>Teléfono</strong>

                  <span>
                    {user.phone}
                  </span>

                </div>

                <div>

                  <strong>Documento</strong>

                  <span>
                    {user.identification}
                  </span>

                </div>

              </div>

              <div className="admin-user-points">

                <span>
                  Puntos disponibles
                </span>

                <strong>
                  {user.points.toLocaleString()}
                </strong>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}