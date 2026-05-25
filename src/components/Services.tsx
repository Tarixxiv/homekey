const services = [
  { title: "Kupno", description: "Pomagamy znaleźć idealny dom lub mieszkanie dopasowane do Twojego budżetu i stylu życia." },
  { title: "Sprzedaż", description: "Skutecznie promujemy Twoją nieruchomość, aby szybko znaleźć odpowiedniego kupca." },
  { title: "Wynajem", description: "Łączymy właścicieli z najemcami, zapewniając bezpieczny i wygodny proces wynajmu." },
];

export function Services() {
  return (
    <section className="bg-white py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-primary text-heading md:text-heading-lg font-bold leading-10 md:leading-12 mb-12 text-center">Usługi</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="border border-surface rounded-md p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-primary text-2xl font-bold leading-8">{s.title}</h3>
            <p className="mt-4 text-muted text-base leading-6">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
