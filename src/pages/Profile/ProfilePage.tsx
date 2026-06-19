import { useNavigate } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";

import { bookings } from "@/mock/bookings";
import { vehicles } from "@/mock/vehicles";

export default function ProfilePage() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  if (!user) {
    return (
      <section className="section">
        <div className="container">
          <h1>Debes iniciar sesión</h1>
        </div>
      </section>
    );
  }

  const userBookings = bookings.filter(
    (booking) => booking.userId === user.id
  );

  const userVehicles = vehicles.filter(
    (vehicle) => vehicle.userId === user.id
  );

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <section className="profile-page">

      <div className="container">

        <div className="profile-hero">

          <div className="profile-hero-overlay" />

          <div className="profile-hero-content">

            <span className="profile-badge">
              MEMBER CLUB
            </span>

            <h1>
              Hola, {user.firstName}
            </h1>

            <p>
              Bienvenido a tu área personal.
              Consulta tus puntos, vehículos,
              reservas y beneficios exclusivos.
            </p>

            <div className="profile-points-card">

              <span>
                Puntos Disponibles
              </span>

              <strong>
                {user.points.toLocaleString()}
              </strong>

            </div>

          </div>

          <button
            onClick={handleLogout}
            className="btn-secondary profile-logout"
          >
            Cerrar sesión
          </button>

        </div>

        <div className="profile-stats">

          <div className="profile-stat-card">

            <h3>
              {user.points.toLocaleString()}
            </h3>

            <span>
              Puntos disponibles
            </span>

          </div>

          <div className="profile-stat-card">

            <h3>
              {userVehicles.length}
            </h3>

            <span>
              Vehículos registrados
            </span>

          </div>

          <div className="profile-stat-card">

            <h3>
              {userBookings.length}
            </h3>

            <span>
              Reservas activas
            </span>

          </div>

        </div>

        <div className="profile-grid">

          <div className="card">

            <h2>
              Información Personal
            </h2>

            <div className="profile-info">

              <div>
                <strong>Nombre</strong>
                <span>
                  {user.firstName} {user.lastName}
                </span>
              </div>

              <div>
                <strong>Correo</strong>
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

          </div>

          <div className="card">

            <h2>
              Mis Vehículos
            </h2>

            {userVehicles.map((vehicle) => (

              <div
                key={vehicle.id}
                className="profile-list-item"
              >

                <div>

                  <strong>
                    {vehicle.brand} {vehicle.model}
                  </strong>

                  <p>
                    {vehicle.color}
                  </p>

                </div>

                <span className="profile-tag">
                  {vehicle.plate}
                </span>

              </div>

            ))}

          </div>

          <div className="card">

            <h2>
              Próximas Reservas
            </h2>

            {userBookings.map((booking) => (

              <div
                key={booking.id}
                className="profile-list-item"
              >

                <div>

                  <strong>
                    {booking.service}
                  </strong>

                  <p>
                    {booking.date} · {booking.time}
                  </p>

                </div>

                <span className="profile-status">
                  {booking.status}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}