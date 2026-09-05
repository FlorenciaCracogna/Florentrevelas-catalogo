export default function Hero() {
  return (
    <header className="paper-texture relative overflow-hidden flex flex-col min-h-screen justify-center">
      {/* Decoración: círculos concéntricos sage */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 opacity-25"
      >
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
          <circle
            cx="160"
            cy="160"
            r="150"
            stroke="#8B9E83"
            strokeWidth="1.5"
          />
          <circle
            cx="160"
            cy="160"
            r="115"
            stroke="#8B9E83"
            strokeWidth="1.2"
          />
          <circle cx="160" cy="160" r="80" stroke="#8B9E83" strokeWidth="1" />
          <circle cx="160" cy="160" r="45" stroke="#8B9E83" strokeWidth="0.8" />
        </svg>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-24 opacity-20"
      >
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <circle
            cx="150"
            cy="150"
            r="140"
            stroke="#C4A882"
            strokeWidth="1.5"
          />
          <circle
            cx="150"
            cy="150"
            r="105"
            stroke="#C4A882"
            strokeWidth="1.2"
          />
          <circle cx="150" cy="150" r="70" stroke="#C4A882" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:py-28">
        <p className="font-script text-2xl text-sage sm:text-3xl">
          Bienvenidos a
        </p>
        <h1 className="mt-1 font-serif text-5xl font-semibold tracking-tight text-espresso sm:text-7xl">
          FlorEntreVelas
        </h1>

        {/* Divisor decorativo */}
        <div className="mx-auto mt-6 flex max-w-xs items-center justify-center gap-3 opacity-70">
          <span className="h-px flex-1 bg-tan" />
          <span className="font-serif text-sm italic text-tan">
            Hecho a mano con amor
          </span>
          <span className="h-px flex-1 bg-tan" />
        </div>

        <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-espresso/80 sm:text-lg">
          Velas artesanales de cera de soja, aromatizadas y piezas hechas de
          yeso o cemento blanco para decorar y aromatizar tus espacios.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="#como-comprar"
              className="inline-flex items-center justify-center rounded-full bg-sage px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:bg-sage/90 hover:-translate-y-0.5 hover:shadow-md"
            >
              Cómo comprar
            </a>
            <a
              href="#velas-de-molde"
              className="inline-flex items-center justify-center rounded-full border border-tan px-6 py-3 text-sm font-semibold text-espresso transition-all duration-300 hover:bg-tan/20 hover:-translate-y-0.5"
            >
              Ver catálogo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
