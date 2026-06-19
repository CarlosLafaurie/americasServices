function ShopPage() {
  return (
    <section className="py-20">
      <div className="container">

        <h1 className="text-5xl font-black mb-10">
          Tienda
        </h1>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {[1,2,3,4,5,6,7,8].map((item) => (
            <div
              key={item}
              className="card h-[300px]"
            />
          ))}

        </div>

      </div>
    </section>
  )
}

export default ShopPage