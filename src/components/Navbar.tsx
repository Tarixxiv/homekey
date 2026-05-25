import { useState } from "react";
import { cn } from "../lib/cn";

const links = [
  { href: "#about", label: "O nas" },
  { href: "#oferta", label: "Oferta" },
  { href: "#kontakt", label: "Kontakt" },
  { href: "#faq", label: "FAQ" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between px-4 h-20 max-w-5xl mx-auto">
        <a href="#" className="text-primary font-bold text-heading-lg leading-12">
          HomeKey
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
        >
          <span className={cn("block w-6 h-0.5 bg-primary transition-transform duration-300", open && "rotate-45 translate-y-2")} />
          <span className={cn("block w-6 h-0.5 bg-primary transition-opacity duration-300", open && "opacity-0")} />
          <span className={cn("block w-6 h-0.5 bg-primary transition-transform duration-300", open && "-rotate-45 -translate-y-2")} />
        </button>
        <nav className="hidden md:flex gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-primary font-medium hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <nav
        className={cn(
          "md:hidden fixed inset-0 top-20 bg-white flex flex-col items-center gap-8 pt-12 transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="text-primary text-2xl font-bold hover:text-accent transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
