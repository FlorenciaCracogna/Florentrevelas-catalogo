import { Instagram, MessageCircle } from 'lucide-react';
import {
  buildWhatsAppLink,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from '@/data/products';

export default function Footer() {
  return (
    <footer className="border-t border-tan/40 bg-beige/50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center gap-5 text-center">
          <p className="font-serif text-3xl font-semibold tracking-tight text-espresso sm:text-4xl">
            FlorEntreVelas
          </p>
          <p className="text-sm text-espresso/70">
            Velas artesanales — hechas a mano con amor.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-espresso transition-colors hover:text-sage"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
              @{INSTAGRAM_HANDLE}
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sage px-5 py-2.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage/90 hover:shadow-md"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-tan/30 pt-6 text-center text-xs text-espresso/50">
          © {new Date().getFullYear()} FlorEntreVelas. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
