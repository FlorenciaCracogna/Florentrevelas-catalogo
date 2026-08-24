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
    subtitle:
      "Velas con formas únicas, aromatizan cualquier espacio, y decoran de una forma especial",
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
    subtitle:
      "Velas en contenedores de madera, cemento o vidrio. Especiales para vos que te gusta encender velitas en cada momento especial, y que aromatizan todo tu espacio.",
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
      {
        id: "caramelera-rayada",
        name: "Caramelera rayada",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592817/caramelera-rayada-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592817/caramelera-rayada-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592807/caramelera-rayada-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787592785/caramelera-facetada-rayada-video.mp4",
      },
      {
        id: "caramelera-facetada",
        name: "Caramelera facetada",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592785/caramelera-facetada-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592785/caramelera-facetada-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592785/caramelera-facetada-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787592785/caramelera-facetada-rayada-video.mp4",
      },
      {
        id: "cuenco-bochin",
        name: "Cuenco bochín",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592784/cuenco-bochin-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592784/cuenco-bochin-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592782/cuenco-bochin-3.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592782/cuenco-bochin-4.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592782/cuenco-bochin-5.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592780/cuenco-bochin-6.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787592781/cuenco-bochin-video.mp4",
      },
      {
        id: "cuenco-facetado",
        name: "Cuenco facetado",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592779/cuendo-facetado-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592779/cuendo-facetado-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592779/cuendo-facetado-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787592778/cuendo-facetado-video.mp4",
      },
      {
        id: "cuenco-cuadrado",
        name: "Cuenco cuadrado",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592776/cuenco-cradrado-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592776/cuenco-cradrado-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592775/cuenco-cradrado-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787592775/cuenco-cradrado-video.mp4",
      },
      {
        id: "cuenco-bolitas",
        name: "Cuenco bolitas",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592774/cuenco-bolitas-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592769/cuenco-bolitas-2.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787592770/cuenco-bolitas-video.mp4",
      },
      {
        id: "cuenco-bochin-chico",
        name: "Cuenco bochín chico",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592769/cuenco-bochin-chico-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592769/cuenco-bochin-chico-2.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787592770/cuenco-bochin-chico-video.mp4",
      },
      {
        id: "cuenco-lata",
        name: "Cuenco lata",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592769/cuenco-lata-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592769/cuenco-lata-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787592768/cuenco-lata-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787592770/cuenco-lata-video.mp4",
      },
      {
        id: "cuenco-vidrio-doble",
        name: "Cuenco vidrio doble",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787595233/cuenco-vidrio-doble-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787595233/cuenco-vidrio-doble-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787595233/cuenco-vidrio-doble-3.jpg",
        ],
      },
      {
        id: "vaso-yogurtero",
        name: "Vaso yogurtero",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787595191/cuenco-yogurtero-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787595190/cuenco-yogurtero-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787595191/cuenco-yogurtero-3.jpg",
        ],
      },
      {
        id: "vaso-chico",
        name: "Vaso chico",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787595191/vaso-chico-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787595191/vaso-chico-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787595190/vaso-chico-3.jpg",
        ],
      },
      {
        id: "frascos",
        name: "Frascos",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787595135/cuenco-frasco-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787595122/cuenco-frasco-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787595110/cuenco-frasco-3.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787595190/cuenco-frasco-4.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787595148/cuenco-frasco-5.jpg",
        ],
      },
      {
        id: "vaso-grande-facetado",
        name: "Vaso grande facetado",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594129/vaso-grande-facetado-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594129/vaso-grande-facetado-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594128/vaso-grande-facetado-3.jpg",
        ],
      },
      {
        id: "cuenco-nena",
        name: "Cuenco nena",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594147/cuenco-nena-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594147/cuenco-nena-2.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787594147/cuenco-nena-video.mp4",
      },
      {
        id: "cuenco-gnomo",
        name: "Cuenco gnomo",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594146/cuenco-gnomo-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594146/cuenco-gnomo-2.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787594145/cuenco-gnomo-video.mp4",
      },
      {
        id: "cuenco-redondo-doble",
        name: "Cuenco redondo doble",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787596804/cuenco-redondo-doble-3.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594144/cuenco-redondo-doble-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594144/cuenco-redondo-doble-2.jpg",
        ],
      },
      {
        id: "cuenco-corazon",
        name: "Cuenco corazón",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594143/cuenco-corazon-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594143/cuenco-corazon-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594141/cuenco-corazon-3.jpg",
        ],
      },
      {
        id: "cuenco-hexagonal-chico",
        name: "Cuenco hexagonal chico",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594141/cuenco-hexagonal-chico-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594141/cuenco-hexagonal-chico-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594140/cuenco-hexagonal-chico-3.jpg",
        ],
      },
      {
        id: "cuenco-corazon-trenzado",
        name: "Cuenco corazón trenzado",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594140/cuenco-corazon-trenzado-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787596804/cuenco-corazon-trenzado-2.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787596805/cuenco-corazon-trenzado-video.mp4",
      },
      {
        id: "cuenco-elefante",
        name: "Cuenco elefante",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594138/cuenco-elefante-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594138/cuenco-elefante-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594138/cuenco-elefante-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787594137/cuenco-elefante-video.mp4",
      },
      {
        id: "cuenco-rosa-grande",
        name: "Cuenco rosa grande",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594137/cuenco-rosa-grande-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594135/cuenco-rosa-grande-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594135/cuenco-rosa-grande-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787594135/cuenco-rosa-grande-video.mp4",
      },
      {
        id: "cuenco-flor-loto",
        name: "Cuenco flor de loto",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594134/cuenco-flor-loto-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594134/cuenco-flor-loto-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594133/cuenco-flor-loto-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787594131/cuenco-flor-loto-video.mp4",
      },
      {
        id: "cuenco-alhajero-corazon",
        name: "Cuenco alhajero corazón",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594129/cuenco-alhajero-corazon-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594129/cuenco-alhajero-corazon-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787594130/cuenco-alhajero-corazon-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787594130/cuenco-alhajero-corazon-video.mp4",
      },
      {
        id: "cuenco-tortuga",
        name: "Cuenco tortuga",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787596804/cuenco-tortuga-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787596804/cuenco-tortuga-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787596803/cuenco-tortuga-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787596804/cuenco-tortuga-video.mp4",
      },
    ],
  },
  {
    id: "piezas-de-yeso-cemento",
    title: "Piezas de yeso y cemento",
    subtitle:
      "Detalles que decoran tus espacios con sus terminaciones prolijas y sus colores especiales que combinan con tu hogar",
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
      {
        id: "bandeja-ovalada-18cm",
        name: "Bandeja ovalada 18cm",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602096/bandeja-ovalada-18cm-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602097/bandeja-ovalada-18cm-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602098/bandeja-ovalada-18cm-3.jpg",
        ],
      },
      {
        id: "bandeja-ovalada-24cm",
        name: "Bandeja ovalada 24cm",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602098/bandeja-ovalada-24cm-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602099/bandeja-ovalada-24cm-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602100/bandeja-ovalada-24cm-3.jpg",
        ],
      },
      {
        id: "bandeja-ovalada-globitos",
        name: "Bandeja ovalada globitos",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602101/bandeja-ovalada-globos-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602101/bandeja-ovalada-globos-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602102/bandeja-ovalada-globos-3.jpg",
        ],
      },
      {
        id: "bandeja-corazon-globitos",
        name: "Bandeja corazón globitos",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602090/bandeja-corazon-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602090/bandeja-corazon-2.jpg",
        ],
      },
      {
        id: "bandeja-redonda-globitos",
        name: "Bandeja redonda globitos",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602110/bandeja-redonda-globos.jpg",
        ],
      },
      {
        id: "bandeja-arcoiris",
        name: "Bandeja arcoíris",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602090/bandeja-arcoiris-1.jpg",
        ],
      },
      {
        id: "bandeja-ovalada-irregular-24cm",
        name: "Bandeja ovalada irregular 24cm",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602103/bandeja-ovalada-irregular-24cm-1.jpg",
        ],
      },
      {
        id: "bandeja-redonda-irregular",
        name: "Bandeja redonda irregular",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602110/bandeja-redonda-irregular-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602111/bandeja-redonda-irregular-2.jpg",
        ],
      },
      {
        id: "bandeja-mono",
        name: "Bandeja con moño",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602094/bandeja-mo%C3%B1o-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602094/bandeja-mo%C3%B1o-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602095/bandeja-mo%C3%B1o-3.jpg",
        ],
      },
      {
        id: "bandeja-ovalada-mariposa-18cm",
        name: "Bandeja ovalada mariposa 18cm",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602104/bandeja-ovalada-mariposa-1.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787602104/bandeja-ovalada-mariposa-video.mp4",
      },
      {
        id: "bandeja-ovalada-texturada-chica",
        name: "Bandeja ovalada texturada chica",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602105/bandeja-ovalada-texturada-chica-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602107/bandeja-ovalada-texturada-chica-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602108/bandeja-ovalada-texturada-grande-chica.jpg",
        ],
      },
      {
        id: "bandeja-ovalada-texturada-grande",
        name: "Bandeja ovalada texturada grande",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602107/bandeja-ovalada-texturada-grande-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602108/bandeja-ovalada-texturada-grande-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602108/bandeja-ovalada-texturada-grande-chica.jpg",
        ],
      },
      {
        id: "bandeja-redonda-lisa-chica",
        name: "Bandeja redonda lisa chica",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602111/bandeja-redonda-lisa-chica-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602112/bandeja-redonda-lisa-chica-2.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787602114/bandeja-redonda-lisa-chica-video.mp4",
      },
      {
        id: "bandeja-redonda-lisa-grande",
        name: "Bandeja redonda lisa grande",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602114/bandeja-redonda-lisa-grande-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602114/bandeja-redonda-lisa-grande-2.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787602115/bandeja-redonda-lisa-grande-video.mp4",
      },
      {
        id: "bandeja-redonda-ojos",
        name: "Bandeja redonda ojos",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602116/bandeja-redonda-ojos-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602116/bandeja-redonda-ojos-2.jpg",
        ],
      },
      {
        id: "portasahumerio-namaste",
        name: "Porta sahumerio Namaste",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602125/portasahumerio-namaste-1.jpg",
        ],
      },
      {
        id: "huevo-roto-grande",
        name: "Huevo roto grande",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602122/huevo-roto-grande-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602122/huevo-roto-grande-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602123/huevo-roto-grande-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787602125/huevo-roto-grande-video.mp4",
      },
      {
        id: "huevo-roto-chico",
        name: "Huevo roto chico",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602119/huevo-roto-chico-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602120/huevo-roto-chico-2.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602120/huevo-roto-chico-3.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787602121/huevo-roto-chico-video.mp4",
      },
      {
        id: "figura-pensamiento",
        name: "Figura pensamiento",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602117/figura-pensamiento-1.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787602119/figura-pensamiento-video.mp4",
      },
      {
        id: "angelitos",
        name: "Angelitos",
        description: "",
        images: [
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602089/angelitos-1.jpg",
          "https://res.cloudinary.com/degpir9vr/image/upload/v1787602089/angelitos-2.jpg",
        ],
        video:
          "https://res.cloudinary.com/degpir9vr/video/upload/v1787602091/angelitos-video.mp4",
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
