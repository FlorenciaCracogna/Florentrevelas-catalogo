// components/HowToBuySection.tsx
import { Search, MessageCircle, Wallet } from "lucide-react";
import { buildWhatsAppLink } from "@/data/products";
import WhatsAppButton from "./WhatsAppButton";

const steps = [
  {
    icon: Search,
    title: "Elegí tu producto",
    description:
      "Recorré las categorías y elegí el modelo que más te guste. Las medidas de cada uno las podés consultar por WhatsApp.",
  },
  {
    icon: MessageCircle,
    title: "Consultanos por WhatsApp",
    description:
      "Todas nuestras velas son aromatizadas y podés elegir el color y el aroma que quieras. Contanos qué elegiste y te pasamos medidas, opciones y precio.",
  },
  {
    icon: Wallet,
    title: "Coordinamos el pago",
    description: "Aceptamos transferencia bancaria o efectivo.",
  },
];

export default function HowToBuySection() {
  return (
    <section
      id="como-comprar"
      className="scroll-mt-20 bg-beige/40 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-semibold text-sage sm:text-4xl">
            Cómo comprar
          </h2>
          <div className="mx-auto mt-3 h-px w-16 bg-sage/50" />
          <p className="mx-auto mt-4 max-w-md text-sm text-espresso/70">
            Es simple: elegís, consultás y coordinamos todo por WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="flex flex-col items-center rounded-2xl border border-tan/40 bg-cream/60 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sage/15">
                  <Icon className="h-6 w-6 text-sage" aria-hidden="true" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-sage text-xs font-semibold text-cream">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-espresso">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso/75">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <WhatsAppButton
            href={buildWhatsAppLink()}
            label="Consultar por WhatsApp"
          />
        </div>
      </div>
    </section>
  );
}
