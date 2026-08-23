import { useState } from "react";
import type { Product } from "@/data/products";
import ProductModal from "./ProductModal";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article
        onClick={() => setIsModalOpen(true)}
        className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-tan/40 bg-beige/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="relative aspect-square overflow-hidden bg-tan/20">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.images.length > 1 || product.video ? (
            <span className="absolute bottom-2 right-2 rounded-full bg-espresso/70 px-2.5 py-1 text-xs text-cream backdrop-blur-sm">
              Ver más
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col gap-2 p-5">
          <h3 className="font-serif text-xl font-semibold text-espresso">
            {product.name}
          </h3>
          <p className="text-sm leading-relaxed text-espresso/75">
            {product.description}
          </p>
        </div>
      </article>

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
