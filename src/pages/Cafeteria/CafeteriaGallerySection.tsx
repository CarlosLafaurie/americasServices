import FadeIn from "../../components/common/FadeIn";
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

          {gallery.map((image, index) => (
            <FadeIn key={image} className="fade-in-grid-item" delay={index * 0.08}>

            <div
              className="service-card-image"
            >

              <img
                src={image}
                alt=""
                className="service-card-bg"
              />

            </div>
            </FadeIn>

          ))}

        </div>

      </div>

    </section>
  );
}
