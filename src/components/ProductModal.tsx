import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Product } from "@/data/products";
import { buildWhatsAppLink } from "@/data/products";
import WhatsAppButton from "./WhatsAppButton";

type Props = {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProductModal({ product, isOpen, onClose }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Armamos una lista única de "slides": primero las fotos, después el video (si hay)
  const slides = [
    ...product.images.map((src) => ({ type: "image" as const, src })),
    ...(product.video ? [{ type: "video" as const, src: product.video }] : []),
  ];

  // Reset del slide activo cada vez que se abre un producto distinto
  useEffect(() => {
    if (isOpen) setActiveIndex(0);
  }, [isOpen, product.id]);

  // Cerrar con Escape, navegar con flechas del teclado
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i + 1) % slides.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) => (i - 1 + slides.length) % slides.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, slides.length, onClose]);

  if (!isOpen) return null;

  const goPrev = () =>
    setActiveIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % slides.length);
  const current = slides[activeIndex];

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-y-auto rounded-2xl bg-beige shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-espresso/70 text-cream transition hover:bg-espresso"
        >
          ✕
        </button>

        {/* Visor principal */}
        <div className="relative w-full bg-tan/20" style={{ height: "50vh" }}>
          {current.type === "image" ? (
            <img
              src={current.src}
              alt={product.name}
              className="h-full w-full object-contain"
            />
          ) : (
            <video
              src={current.src}
              controls
              className="h-full w-full object-contain"
            />
          )}

          {slides.length > 1 && (
            <>
              <button
                onClick={goPrev}
                aria-label="Anterior"
                className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-espresso/60 text-cream transition hover:bg-espresso"
              >
                ‹
              </button>
              <button
                onClick={goNext}
                aria-label="Siguiente"
                className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-espresso/60 text-cream transition hover:bg-espresso"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Puntitos indicadores */}
        {slides.length > 1 && (
          <div className="flex justify-center gap-1.5 py-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Ir a la foto ${i + 1}`}
                className={`h-2 w-2 rounded-full transition ${
                  i === activeIndex ? "bg-sage" : "bg-tan/60"
                }`}
              />
            ))}
          </div>
        )}

        {/* Info + botón de WhatsApp */}
        <div className="flex flex-col gap-3 p-5 pt-0">
          <h3 className="font-serif text-xl font-semibold text-espresso">
            {product.name}
          </h3>
          <p className="text-sm leading-relaxed text-espresso/75">
            {product.description}
          </p>
          <WhatsAppButton
            href={buildWhatsAppLink(product.name)}
            label="Consultar precio"
            variant="primary"
            full
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
