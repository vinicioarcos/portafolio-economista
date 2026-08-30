export type BookStatus = "published" | "in-preparation";

export type Book = {
  id: string;
  title: string;
  description: string;
  status: BookStatus;
  url?: string;
};

export const books: Book[] = [
  {
    id: "econometria-i",
    title: "Econometría I",
    description:
      "Introducción a la econometría con modelos de regresión, inferencia estadística y aplicaciones en R y Stata.",
    status: "published"
  },
  {
    id: "la-trampa-del-voto-popular",
    title: "Jaque mate a la democracia",
    description:
      "Diez tácticas para destruir una nación con el voto de las mayorías (2.ª ed., 2026).",
    status: "published",
    url: "https://a.co/d/08sxGkmy"
  },
  {
    id: "econometria-financiera-python",
    title: "Econometría Financiera con Python",
    description: "Análisis de series temporales financieras, modelos ARCH/GARCH y herramientas cuantitativas con Python.",
    status: "in-preparation"
  },
  {
    id: "evaluacion-impacto-era-digital",
    title: "Evaluación de Impacto en la Era Digital",
    description:
      "Métodos de evaluación de impacto aplicados a la era digital, con énfasis en causalidad y política pública.",
    status: "in-preparation"
  }
];
