export default function BookingForm() {
  return (
    <section className="booking-section">

      <div className="booking-overlay" />

      <div className="container">

        <div className="booking-container">

          <div>

            <span className="membership-badge">
              RESERVA ONLINE
            </span>

            <h2 className="section-heading text-left">
              Agenda tu lavado
            </h2>

            <p className="section-subtitle text-left">
              Selecciona fecha, hora y servicio.
              Recibirás puntos automáticamente
              después de completar tu reserva.
            </p>

          </div>

          <form className="booking-form">

            <input
              type="text"
              placeholder="Nombre completo"
            />

            <input
              type="text"
              placeholder="Teléfono"
            />

            <input
              type="text"
              placeholder="Vehículo"
            />

            <input
              type="text"
              placeholder="Placa"
            />

            <input type="date" />

            <input type="time" />

            <select>

              <option>
                Selecciona un servicio
              </option>

              <option>
                Lavado Básico
              </option>

              <option>
                Lavado Premium
              </option>

              <option>
                Lavado Ejecutivo
              </option>

              <option>
                Detailing
              </option>

            </select>

            <button
              type="submit"
              className="button"
            >
              Reservar Servicio
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}