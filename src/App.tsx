import { useEffect, useState } from 'react';
import { CATEGORIES } from '@/data/products';
import Hero from '@/components/Hero';
import CategoryNav from '@/components/CategoryNav';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';

const ACCENTS = ['sage', 'tan', 'sage'] as const;

export default function App() {
  const [activeId, setActiveId] = useState<string>(CATEGORIES[0].id);

  // Resalta la sección visible al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    CATEGORIES.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelect = (id: string) => {
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen paper-texture">
      <Hero />

      <CategoryNav
        categoryIds={CATEGORIES.map((c) => ({ id: c.id, title: c.title }))}
        activeId={activeId}
        onSelect={handleSelect}
      />

      <main>
        {CATEGORIES.map((category, index) => (
          <CategorySection
            key={category.id}
            category={category}
            accent={ACCENTS[index % ACCENTS.length]}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}
