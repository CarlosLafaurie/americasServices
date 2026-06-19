const products = [
  {
    title: "Café Americano",
    image:
      "https://images.pexels.com/photos/36594831/pexels-photo-36594831.jpeg",
    desc: "Preparación clásica con granos seleccionados."
  },
  {
    title: "Capuccino",
    image:
      "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    desc: "Espuma cremosa y sabor intenso."
  },
  {
    title: "Postres",
    image:
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
    desc: "Opciones frescas para acompañar tu café."
  },
  {
    title: "Bebidas Especiales",
    image:
      "https://images.pexels.com/photos/3908198/pexels-photo-3908198.jpeg",
    desc: "Frías y calientes para todos los gustos."
  }
];

export default function CafeteriaMenuSection() {
  return (
    <section className="section">

      <div className="container">

        <h2 className="section-heading">
          Lo que encontrarás
        </h2>

        <p className="section-subtitle">
          Una selección de bebidas y acompañamientos.
        </p>

        <div className="grid grid-2">

          {products.map((item) => (

            <div
              key={item.title}
              className="service-card-image"
            >

              <img
                src={item.image}
                alt={item.title}
                className="service-card-bg"
              />

              <div className="service-card-overlay" />

              <div className="service-card-content">

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}