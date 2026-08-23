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
      {
        id: "cactus-redondo",
        name: "Cactus redondo",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523588/cactus-redondo-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523586/cactus-redondo-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523586/cactus-redondo-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787523585/cactus-redondo-video.mp4",
      },
      {
        id: "cactus",
        name: "Cactus",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523585/cactus-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523583/cactus-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523582/cactus-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787523581/cactus-video.mp4",
      },
      {
        id: "tulipan",
        name: "Tulipán",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523580/tulipan-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523579/tulipan-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523579/tulipan-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787523579/tulipan-video.mp4",
      },
      {
        id: "pimpollo-rosa",
        name: "Pimpollo rosa",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523576/pimpollo-rosa-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523576/pimpollo-rosa-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523575/pimpollo-rosa-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787523575/pimpollo-rosa-video.mp4",
      },
      {
        id: "semicirculo-rosas",
        name: "Semicírculo rosas",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523573/semicirculo-rosas-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523573/semicirculo-rosas-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523572/semicirculo-rosas-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787523570/semicirculo-rosas-video.mp4",
      },
      {
        id: "rosa-mediana",
        name: "Rosa mediana",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523569/rosa-mediana-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523568/rosa-mediana-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523568/rosa-mediana-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787523568/rosa-mediana-video.mp4",
      },
      {
        id: "peonia-grande",
        name: "Peonia grande",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523565/peonia-grande-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523565/peonia-grande-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523564/peonia-grande-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787523564/peonia-grande-video.mp4",
      },
      {
        id: "flor-loto",
        name: "Flor de loto",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523562/flor-loto-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523561/flor-loto-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523561/flor-loto-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787523561/flor-loto-video.mp4",
      },
      {
        id: "flor-corazon",
        name: "Flor corazón",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523558/flor-corazon-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523558/flor-corazon-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523557/flor-corazon-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787523557/flor-corazon-video.mp4",
      },
      {
        id: "peonia-chica",
        name: "Peonia chica",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523555/peonia-chica-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523554/peonia-chica-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523554/peonia-chica-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787523553/peonia-chica-video.mp4",
      },
      {
        id: "suculenta-grande-redondeada",
        name: "Suculenta grande redondeada",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523551/suculenta-grande-redondeada-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523550/suculenta-grande-redondeada-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523550/suculenta-grande-redondeada-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787523550/suculenta-grande-redondeada-video.mp4",
      },
      {
        id: "suculenta-grande-puntas",
        name: "Suculenta grande puntas",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523547/suculenta-grande-puntas-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523547/suculenta-grande-puntas-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523546/suculenta-grande-puntas-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787523545/suculenta-grande-puntas-video.mp4",
      },
      {
        id: "girasol",
        name: "Girasol",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523545/girasol-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523542/girasol-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523540/girasol-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787523541/girasol-video.mp4",
      },
      {
        id: "margarita",
        name: "Margarita",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523540/margarita-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523539/margarita-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787523540/margarita-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787523540/margarita-video.mp4",
      },
      {
        id: "rosa-chica",
        name: "Rosa chica",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787525826/rosa-chica-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787525824/rosa-chica-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787525824/rosa-chica-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787525811/rosa-chica-video.mp4",
      },
      {
        id: "corazon",
        name: "Corazón",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787525810/corazon-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787525809/corazon-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787525809/corazon-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787525808/corazon-video.mp4",
      },
      {
        id: "mariposa",
        name: "Mariposa",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787525807/mariposa-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787525806/mariposa-2.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787525805/mariposa-video.mp4",
      },
      {
        id: "globo",
        name: "Globo",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787525803/globo-1.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787525802/globo-video.mp4",
      },
      {
        id: "suculentas-chicas-variadas",
        name: "Suculentas chicas variadas",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787525826/suculentas-chicas-variadas-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787525827/suculentas-chicas-variadas-2.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787525801/suculentas-chicas-variadas-video.mp4",
      },
      {
        id: "flores-chicas-variadas",
        name: "Flores chicas variadas",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787525835/rosas-chicas-variadas-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787525831/rosas-chicas-variadas-2.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787525803/rosas-chicas-variadas-video.mp4",
      },
    ],
  },
  {
    id: "velas-en-contenedor",
    title: "Velas en contenedor",
    subtitle: "Velas en frascos y cerámica, listas para encender.",
    products: [
      {
        id: "cuenco-madera-8cm",
        name: "Cuenco madera 8cm",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787526617/cuenco-madera-8cm-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787526616/cuenco-madera-8cm-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787526615/cuenco-madera-8cm-3.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787526613/cuenco-madera-8cm-4.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787526612/cuenco-madera-8cm-5.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787526611/cuenco-madera-8cm-6.jpg",
        ],
      },
      {
        id: "cuenco-madera-10cm",
        name: "Cuenco madera 10cm",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787526476/cuenco-madera-10cm-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787526476/cuenco-madera-10cm-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787526477/cuenco-madera-10cm-3.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787526476/cuenco-madera-10cm-4.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787526276/cuenco-madera-10cm-5.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787526275/cuenco-madera-10cm-6.jpg",
        ],
      },
      {
        id: "cuenco-madera-12cm",
        name: "Cuenco madera 12cm",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787526610/cuenco-madera-12cm-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787526609/cuenco-madera-12cm-2.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787526519/cuenco-madera-12cm-video.mp4",
      },
    ],
  },
  {
    id: "piezas-de-yeso-cemento",
    title: "Piezas de yeso y cemento",
    subtitle: "Detalles minimalistas en blanco para tu hogar.",
    products: [
      {
        id: "florero-rayado-pico",
        name: "Florero con pico",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787527579/florero-rayado-pico-primera.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787527578/florero-rayado-pico-segunda.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787527310/florero-rayado-pico-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787527308/florero-rayado-pico-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787527307/florero-rayado-pico-3.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787527307/florero-rayado-pico-4.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787527309/florero-rayado-pico-video.mp4",
      },
      {
        id: "florero-rayado-grande",
        name: "Florero rayado grande",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787527575/florero-rayado-grande-primera.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787527574/florero-rayado-grande-segunda.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787527303/florero-rayado-grande-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787527302/florero-rayado-grande-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787527249/florero-rayado-grande-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787527281/florero-rayado-grande-video.mp4",
      },
      {
        id: "florero-rayado-chico",
        name: "Florero rayado chico",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787527577/florero-rayado-chico-primera.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787527576/florero-rayado-chico-segunda.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787527306/florero-rayado-chico-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787527304/florero-rayado-chico-2.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787527305/florero-rayado-chico-video.mp4",
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
