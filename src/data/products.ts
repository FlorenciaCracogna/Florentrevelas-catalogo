export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type Category = {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
};

// Número de WhatsApp: reemplazar si cambia
export const WHATSAPP_NUMBER = '5493624823324';
export const INSTAGRAM_HANDLE = 'florentrevelas';
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export const CATEGORIES: Category[] = [
  {
    id: 'velas-de-molde',
    title: 'Velas de molde',
    subtitle: 'Cera de soja moldeada a mano, pieza por pieza.',
    products: [
      {
        id: 'vela-luna',
        name: 'Vela Luna',
        description:
          'Vela moldeada con forma de luna creciente, cera de soja natural.',
        image:
          'https://images.pexels.com/photos/19981911/pexels-photo-19981911.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        id: 'vela-rosa',
        name: 'Vela Rosa',
        description:
          'Vela moldeada en forma de rosa, ideal para regalo.',
        image:
          'https://images.pexels.com/photos/30235390/pexels-photo-30235390.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        id: 'vela-geometrica',
        name: 'Vela Geométrica',
        description:
          'Diseño moderno de líneas rectas, cera de soja.',
        image:
          'https://images.pexels.com/photos/34806970/pexels-photo-34806970.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],
  },
  {
    id: 'velas-en-contenedor',
    title: 'Velas en contenedor',
    subtitle: 'Velas en frascos y cerámica, listas para encender.',
    products: [
      {
        id: 'vela-vainilla',
        name: 'Vela Vainilla',
        description:
          'Vela en frasco de vidrio reutilizable, aroma vainilla.',
        image:
          'https://images.pexels.com/photos/17145779/pexels-photo-17145779.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        id: 'vela-lavanda',
        name: 'Vela Lavanda',
        description:
          'Aroma relajante, frasco de cerámica artesanal.',
        image:
          'https://images.pexels.com/photos/14915657/pexels-photo-14915657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],
  },
  {
    id: 'piezas-de-yeso-cemento',
    title: 'Piezas de yeso y cemento',
    subtitle: 'Detalles minimalistas en blanco para tu hogar.',
    products: [
      {
        id: 'plato-decorativo',
        name: 'Plato decorativo',
        description:
          'Pieza de yeso blanco, ideal para llaves o accesorios.',
        image:
          'https://images.pexels.com/photos/7307390/pexels-photo-7307390.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
      {
        id: 'portavelas-cemento',
        name: 'Portavelas cemento',
        description:
          'Portavelas de cemento blanco, diseño minimalista.',
        image:
          'https://images.pexels.com/photos/7307215/pexels-photo-7307215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      },
    ],
  },
];

export function buildWhatsAppLink(productName?: string): string {
  const message = productName
    ? `Hola! Quiero consultar el precio de: ${productName}`
    : 'Hola! Quiero hacer una consulta sobre las velas.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
