const gallery = [
  "https://images.pexels.com/photos/4765826/pexels-photo-4765826.jpeg",
  "https://images.pexels.com/photos/8425194/pexels-photo-8425194.jpeg",
  "https://images.pexels.com/photos/34056733/pexels-photo-34056733.jpeg",
  "https://images.pexels.com/photos/18999559/pexels-photo-18999559.jpeg"
];

export default function CafeteriaGallerySection() {
  return (
    <section className="section">

      <div className="container">

        <h2 className="section-heading">
          Nuestro Espacio
        </h2>

        <div className="grid grid-2">

          {gallery.map((image) => (

            <div
              key={image}
              className="service-card-image"
            >

              <img
                src={image}
                alt=""
                className="service-card-bg"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}