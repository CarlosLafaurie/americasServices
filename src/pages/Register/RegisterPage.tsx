function RegisterPage() {
  return (
    <section className="min-h-screen bg-black py-20">
      <div className="container max-w-3xl">
        <div className="card p-8">
          <h1 className="text-4xl font-black uppercase mb-8">
            Crear cuenta
          </h1>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              placeholder="Nombres"
              className="p-4 bg-zinc-900 rounded-xl"
            />

            <input
              placeholder="Apellidos"
              className="p-4 bg-zinc-900 rounded-xl"
            />

            <input
              placeholder="Correo"
              className="p-4 bg-zinc-900 rounded-xl"
            />

            <input
              placeholder="Teléfono"
              className="p-4 bg-zinc-900 rounded-xl"
            />

            <input
              placeholder="Usuario"
              className="p-4 bg-zinc-900 rounded-xl"
            />

            <input
              type="password"
              placeholder="Contraseña"
              className="p-4 bg-zinc-900 rounded-xl"
            />
          </div>

          <button className="btn-primary mt-8">
            Registrarme
          </button>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage