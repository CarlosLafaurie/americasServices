const spaces = [
  {
    title: "Zona de Trabajo",
    image:
      "https://images.pexels.com/photos/8067881/pexels-photo-8067881.jpeg",
    desc: "Espacios amplios para trabajar cómodamente."
  },
  {
    title: "Sala de Reuniones",
    image:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
    desc: "Ideal para reuniones rápidas y videollamadas."
  },
  {
    title: "Zona Lounge",
    image:
      "https://images.pexels.com/photos/6774956/pexels-photo-6774956.jpeg",
    desc: "Un ambiente relajado para descansar o conversar."
  },
  {
    title: "Espacios Flexibles",
    image:
      "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg",
    desc: "Adaptados a diferentes necesidades de trabajo."
  }
];

export default function CoworkingSpacesSection() {
  return (
    <section className="section">

      <div className="container">

        <h2 className="section-heading">
          Nuestros Espacios
        </h2>

        <p className="section-subtitle">
          Diseñados para que aproveches cada minuto.
        </p>

        <div className="grid grid-2">

          {spaces.map((space) => (

            <div
              key={space.title}
              className="service-card-image"
            >

              <img
                src={space.image}
                alt={space.title}
                className="service-card-bg"
              />

              <div className="service-card-overlay" />

              <div className="service-card-content">

                <h3>{space.title}</h3>

                <p>{space.desc}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}