import { Link } from "react-router-dom";

const services = [
  {
    title: "Car Wash",
    path: "/carwash",
    image:
      "https://images.pexels.com/photos/6872599/pexels-photo-6872599.jpeg?auto=compress&cs=tinysrgb&w=1200",
    desc: "Lavados premium, detailing y mantenimiento estético."
  },
  {
    title: "Barbería",
    path: "/barberia",
    image:
      "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=1200",
    desc: "Cortes modernos y atención profesional."
  },
  {
    title: "Cafetería",
    path: "/cafeteria",
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200",
    desc: "Café premium, snacks y bebidas especiales."
  },
  {
    title: "Coworking",
    path: "/coworking",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    desc: "Espacios cómodos para trabajar mientras esperas."
  }
];

export default function Services() {
  return (
    <section className="section">
      <div className="grid grid-2">

        {services.map((service) => (

          <Link
            to={service.path}
            key={service.title}
            className="service-card-image"
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-card-bg"
            />

            <div className="service-card-overlay" />

            <div className="service-card-content">
              <h3>{service.title}</h3>

              <p>{service.desc}</p>
            </div>

          </Link>

        ))}

      </div>
    </section>
  );
}