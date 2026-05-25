import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "../lib/cn";
import * as React from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Imię musi mieć co najmniej 2 znaki"),
  email: z.string().email("Podaj poprawny adres email"),
  phone: z.string().min(9, "Numer telefonu musi mieć co najmniej 9 cyfr").regex(/^[0-9+\-\s()]+$/, "Podaj poprawny numer telefonu"),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1000));
    reset();
  };

  return (
    <section id="kontakt" className="bg-white py-16 px-4 max-w-5xl mx-auto">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-primary text-base uppercase tracking-label leading-6">Adres</p>
          <p className="mt-4 text-muted text-base leading-6">
            21 Valentin Rapids Apt. 335<br />New Jersey, New York, USA
          </p>
          <p className="mt-8 text-primary text-base uppercase tracking-label leading-6">Kontakt</p>
          <p className="mt-4 text-primary text-base font-bold leading-6">info@company.com</p>
          <p className="text-muted text-base leading-6">+1 (243) 576-98-02</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
          <Field label="Imię" error={errors.name?.message}>
            <input {...register("name")} placeholder="Imię" className={cn(inputStyles, errors.name && "border-error")} />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input {...register("email")} type="email" placeholder="Email" className={cn(inputStyles, errors.email && "border-error")} />
          </Field>
          <Field label="Telefon" error={errors.phone?.message}>
            <input {...register("phone")} type="tel" placeholder="Telefon" className={cn(inputStyles, errors.phone && "border-error")} />
          </Field>
          <Field label="Wiadomość" error={errors.message?.message}>
            <textarea {...register("message")} placeholder="Wiadomość" rows={5} className={cn(inputStyles, "resize-none", errors.message && "border-error")} />
          </Field>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-accent text-white font-bold text-base leading-6 px-10 py-3 rounded-sm hover:bg-accent/90 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Wysyłanie..." : "Wyślij"}
            </button>
          </div>
          {isSubmitSuccessful && <p className="text-green-600 text-sm">Wiadomość wysłana pomyślnie!</p>}
        </form>
      </div>
    </section>
  );
}

const inputStyles = "w-full h-12 px-4 bg-white border border-border rounded-sm text-base text-primary placeholder:text-muted focus:outline-none focus:border-accent transition-colors";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-primary text-xs font-bold uppercase block mb-1">{label}</label>
      {children}
      {error && <p className="text-error text-xs mt-1">{error}</p>}
    </div>
  );
}
