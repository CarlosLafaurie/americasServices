import FadeIn from "../../components/common/FadeIn";
import coworkingGalleryImage1 from "../../assets/images/cow2.jpg";
import coworkingGalleryImage2 from "../../assets/images/cow5.jpg";
import coworkingGalleryImage3 from "../../assets/images/cow8.jpg";
import coworkingGalleryImage4 from "../../assets/images/cow10.jpg";

const gallery = [
  coworkingGalleryImage1,
  coworkingGalleryImage2,
  coworkingGalleryImage3,
  coworkingGalleryImage4,
];

export default function CoworkingGallerySection() {
  return (
    <section className="section coworking-gallery-section">
      <div className="container">
        <FadeIn className="service-section-intro coworking-section-intro">
          <h2 className="section-heading">Ambiente Profesional</h2>
        </FadeIn>

        <div className="grid grid-2 coworking-gallery-grid">
          {gallery.map((image, index) => (
            <FadeIn key={image} className="fade-in-grid-item" delay={index * 0.08}>
              <div className="service-card-image coworking-gallery-image">
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
