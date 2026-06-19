const testimonials = [
{
name: "Carlos M.",
role: "Cliente Premium",
image:
"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
text: "Lavo mi carro cada semana y los puntos realmente valen la pena."
},
{
name: "Laura G.",
role: "Cliente Frecuente",
image:
"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
text: "Mientras lavan mi vehículo trabajo desde el coworking."
},
{
name: "Andrés R.",
role: "Cliente Premium",
image:
"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300",
text: "La barbería y la cafetería son excelentes. Todo en un mismo lugar."
}
];

export default function Testimonials() {
    return ( <section className="section"> <div className="container">
        <h2 className="section-heading">
        Lo que dicen nuestros clientes
        </h2>

        <div className="stats-grid">

        <div className="stats-card">
            <h3>5.000+</h3>
            <span>Clientes satisfechos</span>
        </div>

        <div className="stats-card">
            <h3>25.000+</h3>
            <span>Servicios realizados</span>
        </div>

        <div className="stats-card">
            <h3>4.9/5</h3>
            <span>Calificación promedio</span>
        </div>

        </div>

        <div className="grid grid-3">

        {testimonials.map((item) => (
            <div key={item.name} className="testimonial-card">

            <div className="testimonial-header">

                <img
                src={item.image}
                alt={item.name}
                className="testimonial-avatar"
                />

                <div>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
                </div>

            </div>

            <div className="testimonial-stars">
                ★★★★★
            </div>

            <p>
                "{item.text}"
            </p>

            </div>
        ))}

        </div>

    </div>
    </section>
);
}
