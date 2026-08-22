import type { Category } from '@/data/products';
import ProductCard from './ProductCard';

type Props = {
  category: Category;
  accent: 'sage' | 'tan';
};

export default function CategorySection({ category, accent }: Props) {
  const accentColor = accent === 'sage' ? 'text-sage' : 'text-tan';
  const ruleColor = accent === 'sage' ? 'bg-sage/50' : 'bg-tan/60';

  return (
    <section id={category.id} className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className={`font-serif text-3xl font-semibold sm:text-4xl ${accentColor}`}>
            {category.title}
          </h2>
          <div className={`mx-auto mt-3 h-px w-16 ${ruleColor}`} />
          <p className="mx-auto mt-4 max-w-md text-sm text-espresso/70">
            {category.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
