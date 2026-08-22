type Props = {
  categoryIds: { id: string; title: string }[];
  activeId: string | null;
  onSelect: (id: string) => void;
};

export default function CategoryNav({ categoryIds, activeId, onSelect }: Props) {
  return (
    <nav
      aria-label="Categorías"
      className="sticky top-0 z-20 bg-cream/95 backdrop-blur-sm border-b border-tan/30"
    >
      <div className="mx-auto max-w-6xl px-4">
        <ul className="flex items-center gap-2 overflow-x-auto py-3 sm:justify-center sm:gap-4 scrollbar-none">
          {categoryIds.map((cat) => {
            const isActive = activeId === cat.id;
            return (
              <li key={cat.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => onSelect(cat.id)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-sage text-cream shadow-sm'
                      : 'text-espresso hover:bg-tan/20'
                  }`}
                >
                  {cat.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
