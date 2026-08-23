export type Product = {
  id: string;
  name: string;
  description: string;
  images: string[]; // la primera es la que se ve en la card
  video?: string; // opcional: URL de un video (mp4 o similar)
};

export type Category = {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
};

// Número de WhatsApp: reemplazar si cambia
export const WHATSAPP_NUMBER = "5493624823324";
export const INSTAGRAM_HANDLE = "florentrevelas";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export const CATEGORIES: Category[] = [
  {
    id: "velas-de-molde",
    title: "Velas de molde",
    subtitle: "Cera de soja moldeada a mano, pieza por pieza.",
    products: [
      {
        id: "arcoiris",
        name: "Arcoíris",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515693/arcoiris-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515693/arcoiris-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515693/arcoiris-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787515690/arcoiris-video.mp4",
      },
      {
        id: "cuadrada-globos-grande",
        name: "Cuadrada globos grande",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515693/cuadrada-globos-grande-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515693/cuadrada-globos-grande-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515693/cuadrada-globos-gramde-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787515689/cuadrada-globos-grande-video.mp4",
      },
      {
        id: "cuadrada-globos-mediana",
        name: "Cuadrada globos mediana",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515693/cuadrada-globos-mediana-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515693/cuadrada-globos-mediana-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515692/cuadrada-globos-mediana-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787515690/cuadrada-globos-mediana-video.mp4",
      },
      {
        id: "bubble-grande",
        name: "Bubble grande",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515692/bubble-grande-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515692/bubble-grande-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515692/bubble-grande-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787515689/bubble-grande-video.mp4",
      },
      {
        id: "cuadrada-semiglobo-grande",
        name: "Cuadrada semi-globo grande",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515692/cuadrada-semiglobo-grande-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515692/cuadrada-semiglobo-grande-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515692/cuadrada-semiglobo-grande-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787515689/cuadrada-semiglobo-grande-video.mp4",
      },
      {
        id: "cuadrada-recta-chica",
        name: "Cuadrada recta chica",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515692/cuadrada-recta-chica-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515691/cuadrada-recta-chica-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515691/cuadrada-recta-chica-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787515689/cuadrada-recta-chica-video.mp4",
      },
      {
        id: "cuadrada-semiglobo-chica",
        name: "Cuadrada semi-globo chica",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515691/cuadrada-semiglobo-chica-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515692/cuadrada-semiglobo-chica-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515691/cuadrada-semiglobo-chica-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787515688/cuadrada-semiglobo-chica-video.mp4",
      },
      {
        id: "mini-bubble",
        name: "Mini Bubble",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515691/mini-bubble-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515691/mini-bubble-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515691/mini-bubble-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787515689/mini-bubble-video.mp4",
      },
      {
        id: "cuadrada-globos-chica",
        name: "Cuadrada globos chica",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515690/cuadrada-globos-chica-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515690/cuadrada-globos-chica-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787515690/cuadrada-globos-chica-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787515691/cuadrada-globos-chica-video.mp4",
      },
      {
        id: "jirafa",
        name: "Jirafa",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787517197/jirafa-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787517196/jirafa-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787517196/jirafa-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787517197/jirafa-video.mp4",
      },
      {
        id: "leon",
        name: "León",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787517196/leon-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787517196/leon-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787517196/leon-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787517196/leon-video.mp4",
      },
      {
        id: "oso-teddy",
        name: "Oso teddy",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787517195/oso-teddy-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787517195/oso-teddy-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787517195/oso-teddy-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787517196/oso-teddy-video.mp4",
      },
      {
        id: "totoro",
        name: "Totoro",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787517195/totoro-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787517194/totoro-2.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787517195/totoro-video.mp4",
      },
      {
        id: "carpincho",
        name: "Carpincho",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787517193/carpincho-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787517193/carpincho-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787517193/carpincho-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787517195/carpincho-video.mp4",
      },
      {
        id: "oso-mono",
        name: "Oso con moño",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787517194/oso-mo%C3%B1o-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787517194/oso-mo%C3%B1o-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787517194/oso-mo%C3%B1o-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787517195/oso-mo%C3%B1o-video.mp4",
      },
    ],
  },
  {
    id: "velas-en-contenedor",
    title: "Velas en contenedor",
    subtitle: "Velas en frascos y cerámica, listas para encender.",
    products: [
      {
        id: "vela-vainilla",
        name: "Vela Vainilla",
        description: "Vela en frasco de vidrio reutilizable, aroma vainilla.",
        images: [
          "https://images.pexels.com/photos/17145779/pexels-photo-17145779.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        ],
      },
      {
        id: "vela-lavanda",
        name: "Vela Lavanda",
        description: "Aroma relajante, frasco de cerámica artesanal.",
        images: [
          "https://images.pexels.com/photos/14915657/pexels-photo-14915657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        ],
      },
    ],
  },
  {
    id: "piezas-de-yeso-cemento",
    title: "Piezas de yeso y cemento",
    subtitle: "Detalles minimalistas en blanco para tu hogar.",
    products: [
      {
        id: "plato-decorativo",
        name: "Plato decorativo",
        description: "Pieza de yeso blanco, ideal para llaves o accesorios.",
        images: [
          "https://images.pexels.com/photos/7307390/pexels-photo-7307390.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        ],
      },
      {
        id: "portavelas-cemento",
        name: "Portavelas cemento",
        description: "Portavelas de cemento blanco, diseño minimalista.",
        images: [
          "https://images.pexels.com/photos/7307215/pexels-photo-7307215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        ],
      },
    ],
  },
];

export function buildWhatsAppLink(productName?: string): string {
  const message = productName
    ? `Hola! Quiero consultar el precio de: ${productName}`
    : "Hola! Quiero hacer una consulta sobre las velas.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
