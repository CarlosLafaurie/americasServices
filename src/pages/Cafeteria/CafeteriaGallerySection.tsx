import FadeIn from "../../components/common/FadeIn";
import cafeteriaGalleryImage1 from "../../assets/images/cucaf5.jpg";
import cafeteriaGalleryImage2 from "../../assets/images/cucaf6.jpg";
import cafeteriaGalleryImage3 from "../../assets/images/cucaf1.jpg";
import cafeteriaGalleryImage4 from "../../assets/images/IMG_0314.jpg";

const gallery = [
  cafeteriaGalleryImage1,
  cafeteriaGalleryImage2,
  cafeteriaGalleryImage3,
  cafeteriaGalleryImage4,
];

export default function CafeteriaGallerySection() {
  return (
    <section className="section cafeteria-gallery-section">
      <div className="container">
        <FadeIn className="service-section-intro cafeteria-section-intro">
          <h2 className="section-heading">Nuestro Espacio</h2>
        </FadeIn>

        <div className="grid grid-2 cafeteria-gallery-grid">
          {gallery.map((image, index) => (
            <FadeIn key={image} className="fade-in-grid-item" delay={index * 0.08}>
              <div className="service-card-image cafeteria-gallery-image">
                <img
                  src={image}
                  alt=""
                  className="service-card-bg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
