const gallery = [
  "https://i.pinimg.com/1200x/31/6d/07/316d070964cd8674c526d767d58c9823.jpg",
  "https://i.pinimg.com/736x/d1/16/39/d116397791e6c616e5742e5ca634bee3.jpg",
  "https://i.pinimg.com/736x/be/14/e0/be14e0dc169adb27fdf522a5021589b6.jpg",
  "https://i.pinimg.com/736x/e0/5a/b3/e05ab35445bfc75b8496ad96bceee052.jpg",
  "https://i.pinimg.com/1200x/21/99/6d/21996d65c219cbaddc27571ede0e0f0f.jpg",
  "https://i.pinimg.com/736x/e5/3d/e4/e53de4a6fa098cfcb12cfa803d2789ed.jpg"
];

export default function GallerySection() {
  return (
    <section className="section">

      <div className="container">

        <h2 className="section-heading">
          Trabajos Recientes
        </h2>

        <div className="barber-gallery">

          {gallery.map((image, index) => (

            <img
              key={index}
              src={image}
              alt=""
            />

          ))}

        </div>

      </div>

    </section>
  );
}