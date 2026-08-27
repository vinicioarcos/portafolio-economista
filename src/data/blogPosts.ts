export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "economia-ia-estudiar-cambio-tecnologico",
    title: "Economía y la IA: estudiar en tiempos de cambio tecnológico",
    category: "Economía y educación",
    date: "2026-08-06",
    excerpt:
      "Qué tipo de formación en economía sigue siendo valiosa cuando gran parte del cálculo y la redacción de primeros borradores puede delegarse a un modelo de IA."
  },
  {
    slug: "sobreeducacion-fenomeno-en-boga",
    title: "La sobreeducación, un fenómeno en boga",
    category: "Economía laboral",
    date: "2026-08-06",
    excerpt:
      "Por qué la sobreeducación se ha vuelto un tema central en el debate sobre empleo juvenil y migración calificada, y qué dice la evidencia sobre sus consecuencias salariales."
  },
  {
    slug: "reglamentar-ia-caso-union-europea",
    title: "¿Se debe reglamentar el desarrollo e implementación de la IA? El caso de la Unión Europea",
    category: "Políticas públicas",
    date: "2026-08-06",
    excerpt:
      "El Reglamento de IA de la Unión Europea como caso de estudio sobre cuándo, cómo y con qué instrumentos regular la inteligencia artificial sin destruir el valor que genera."
  }
];
