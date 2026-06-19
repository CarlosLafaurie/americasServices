const services = [
  {
    title: "Corte Clásico",
    price: "$25.000",
    points: "+100 pts",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033"
  },
  {
    title: "Fade Premium",
    price: "$35.000",
    points: "+150 pts",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c"
  },
  {
    title: "Barba",
    price: "$15.000",
    points: "+80 pts",
    image:
      "https://images.pexels.com/photos/3998417/pexels-photo-3998417.jpeg?_gl=1*1u2utii*_ga*MjY1NTk5NDY3LjE3Nzg2NTA1OTI.*_ga_8JE65Q40S6*czE3ODE4MzA4NDQkbzUkZzEkdDE3ODE4MzA4NTQkajUwJGwwJGgw"
  },
  {
    title: "Combo Premium",
    price: "$45.000",
    points: "+250 pts",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a"
  }
];

export default function ServicesSection() {
  return (
    <section className="section">

      <div className="container">

        <h2 className="section-heading">
          Nuestros Servicios
        </h2>

        <p className="section-subtitle">
          Cortes modernos, clásicos y servicios premium.
        </p>

        <div className="grid grid-2">

          {services.map(service => (

            <div
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

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.points}
                </p>

                <div className="barber-service-price">
                  {service.price}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}