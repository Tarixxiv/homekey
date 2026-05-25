const properties = [
  { image: "/images/property-1.webp", address: "ul. Grunwaldzka 212", city: "Gdynia" },
  { image: "/images/property-2.webp", address: "ul. Kartuska 345", city: "Gdańsk" },
  { image: "/images/property-3.webp", address: "ul. Jana z Kolna 18", city: "Gdańsk" },
];

export function Gallery() {
  return (
    <section id="oferta" className="bg-white py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-primary text-heading md:text-heading-lg font-bold leading-10 md:leading-12">
          Nieruchomości na sprzedaż
        </h2>
        <p className="mt-4 text-primary text-xl leading-8 max-w-md mx-auto">
          Znajdź dom, mieszkanie lub apartament dopasowany do Twoich potrzeb.
        </p>
      </div>
      <div className="grid gap-10 md:grid-cols-3">
        {properties.map((p) => (
          <article key={p.address}>
            <img
              src={p.image}
              alt={p.address}
              loading="lazy"
              className="w-full h-60 object-cover rounded-md bg-surface"
            />
            <h3 className="mt-4 text-primary text-2xl font-bold leading-8">{p.address}</h3>
            <p className="text-muted text-base leading-6">{p.city}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
