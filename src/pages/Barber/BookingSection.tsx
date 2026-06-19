export default function BookingSection() {
  return (
    <section className="booking-section">

      <div className="booking-overlay" />

      <div className="container booking-container">

        <div>
          <h2 className="hero-title">
            Agenda tu cita
          </h2>

          <p className="hero-description">
            Reserva fácilmente tu servicio de barbería.
          </p>
        </div>

        <form className="booking-form">

          <input
            placeholder="Nombre"
          />

          <input
            placeholder="Teléfono"
          />

          <select>
            <option>Selecciona barbero</option>
            <option>Juan</option>
            <option>Carlos</option>
            <option>Andrés</option>
          </select>

          <select>
            <option>Servicio</option>
            <option>Corte Clásico</option>
            <option>Fade Premium</option>
            <option>Barba</option>
            <option>Combo Premium</option>
          </select>

          <input type="date" />

          <input type="time" />

          <button className="btn-primary">
            Reservar Cita
          </button>

        </form>

      </div>

    </section>
  );
}