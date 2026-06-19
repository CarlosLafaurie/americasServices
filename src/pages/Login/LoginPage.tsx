function LoginPage() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center">
      <div className="card w-full max-w-md p-8">
        <h1 className="text-4xl font-black uppercase mb-8">
          Iniciar sesión
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Usuario"
            className="w-full p-4 bg-zinc-900 rounded-xl"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-4 bg-zinc-900 rounded-xl"
          />

          <button className="btn-primary w-full">
            Ingresar
          </button>
        </div>
      </div>
    </section>
  )
}

export default LoginPage