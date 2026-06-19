function AdminPage() {
  return (
    <section className="py-20">
      <div className="container">

        <h1 className="text-5xl font-black mb-10">
          Dashboard
        </h1>

        <div className="grid lg:grid-cols-4 gap-6 mb-10">

          <div className="card p-6">
            Clientes
          </div>

          <div className="card p-6">
            Reservas
          </div>

          <div className="card p-6">
            Ventas
          </div>

          <div className="card p-6">
            Puntos
          </div>

        </div>

        <div className="card p-8">
          Tabla de clientes
        </div>

      </div>
    </section>
  )
}

export default AdminPage