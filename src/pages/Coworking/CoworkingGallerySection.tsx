const gallery = [
  "https://images.pexels.com/photos/18678225/pexels-photo-18678225.jpeg",
  "https://images.pexels.com/photos/23496667/pexels-photo-23496667.jpeg",
  "https://images.pexels.com/photos/3515641/pexels-photo-3515641.jpeg",
  "https://images.pexels.com/photos/18999471/pexels-photo-18999471.jpeg"
];

export default function CoworkingGallerySection() {
  return (
    <section className="section">

      <div className="container">

        <h2 className="section-heading">
          Ambiente Profesional
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