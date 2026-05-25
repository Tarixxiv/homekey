import { useState } from "react";
import { cn } from "../lib/cn";

const faqItems = [
  {
    question: "Jak wygląda proces zakupu nieruchomości?",
    answer: "Proces zaczyna się od wyboru odpowiedniej oferty i weryfikacji jej stanu prawnego. Następnie pomagamy w negocjacjach, przygotowaniu dokumentów oraz finalizacji transakcji u notariusza.",
  },
  {
    question: "Czy pomagacie w uzyskaniu kredytu hipotecznego?",
    answer: "Tak, współpracujemy z doradcami kredytowymi, którzy pomogą Ci znaleźć najlepszą ofertę kredytu hipotecznego dopasowaną do Twoich możliwości finansowych.",
  },
  {
    question: "Jak mogę umówić się na prezentację?",
    answer: "Możesz umówić się na prezentację nieruchomości poprzez formularz kontaktowy na naszej stronie, telefonicznie lub mailowo. Odpowiemy w ciągu 24 godzin.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16 px-4 max-w-5xl mx-auto">
      <div className="space-y-0">
        {faqItems.map((item, i) => (
          <div key={i} className="border-b border-surface">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-start justify-between py-6 text-left gap-4"
              aria-expanded={openIndex === i}
            >
              <span className="text-primary text-xl md:text-2xl font-bold leading-8">{item.question}</span>
              <span className="text-accent text-2xl font-bold leading-8 shrink-0">
                {openIndex === i ? "–" : "+"}
              </span>
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                openIndex === i ? "max-h-60 opacity-100 pb-6" : "max-h-0 opacity-0"
              )}
            >
              <p className="text-muted text-base leading-6">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
