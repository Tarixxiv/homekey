export function Hero() {
  return (
    <section id="about" className="relative bg-surface overflow-hidden min-h-150 md:min-h-175 flex flex-col items-center justify-center px-4 py-20">
      <img
        src="/images/hero.webp"
        alt="Dom w tle"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 text-center max-w-md">
        <h1 className="text-primary text-heading-lg md:text-6xl font-bold leading-12 md:leading-16">
          Twój <br />klucz do<br />idealnego <br />domu
        </h1>
        <p className="mt-8 text-primary text-xl leading-8">
          Pomagamy kupować, sprzedawać i wynajmować nieruchomości szybko, bezpiecznie i bez stresu.
        </p>
      </div>
    </section>
  );
}
