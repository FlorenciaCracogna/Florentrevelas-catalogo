import type { Product } from '@/data/products';
import { buildWhatsAppLink } from '@/data/products';
import WhatsAppButton from './WhatsAppButton';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-tan/40 bg-beige/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-tan/20">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-serif text-xl font-semibold text-espresso">
          {product.name}
        </h3>
        <p className="text-sm leading-relaxed text-espresso/75">
          {product.description}
        </p>

        <div className="mt-auto pt-2">
          <WhatsAppButton
            href={buildWhatsAppLink(product.name)}
            label="Consultar precio"
            variant="primary"
            full
          />
        </div>
      </div>
    </article>
  );
}
