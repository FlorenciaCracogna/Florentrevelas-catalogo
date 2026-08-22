import { MessageCircle } from 'lucide-react';

type Props = {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
  full?: boolean;
};

export default function WhatsAppButton({
  href,
  label,
  variant = 'primary',
  full = false,
}: Props) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sage/60';
  const variants = {
    primary:
      'bg-sage text-cream hover:bg-sage/90 hover:-translate-y-0.5',
    secondary:
      'bg-transparent text-espresso border border-tan hover:bg-tan/20 hover:-translate-y-0.5',
  };
  const width = full ? 'w-full' : '';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${width}`}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}
