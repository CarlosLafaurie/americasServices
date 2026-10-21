import FadeIn from "../../components/common/FadeIn";
const gallery = [
  "https://images.pexels.com/photos/18678225/pexels-photo-18678225.jpeg",
  "https://images.pexels.com/photos/23496667/pexels-photo-23496667.jpeg",
  "https://images.pexels.com/photos/3515641/pexels-photo-3515641.jpeg",
  "https://images.pexels.com/photos/18999471/pexels-photo-18999471.jpeg"
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
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
