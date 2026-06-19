function ProfilePage() {
  return (
    <section className="py-20">
      <div className="container">

        <h1 className="text-5xl font-black mb-10">
          Mi Perfil
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="card p-6">
            <h2 className="text-2xl font-bold">
              Información
            </h2>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold">
              Vehículos
            </h2>
          </div>

          <div className="card p-6">
            <h2 className="text-2xl font-bold">
              Puntos
            </h2>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProfilePage