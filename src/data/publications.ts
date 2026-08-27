import { statusLabels, type ContentStatus } from "@/data/status";

export type PublicationStatus = ContentStatus;
export const publicationStatusLabels = statusLabels;

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  year: number;
  journal: string;
  /** Referencia bibliográfica normalizada, siempre presente y verificable. */
  citation: string;
  status: PublicationStatus;
  /** Resumen solo cuando existe una fuente real; no se redacta un resumen si no consta. */
  abstract?: string;
  topics: string[];
  url: string;
  doi?: string;
};

export const publications: Publication[] = [
  {
    id: "brecha-salarial-genero-2026",
    title:
      "Análisis de la brecha salarial de género en Ecuador: una descomposición cuantílica con datos de la Enemdu 2024",
    authors: ["Semblantes-Guamán, R. P.", "Salinas-Quintana, S.", "Arcos-Naranjo, E. V."],
    year: 2026,
    journal: "Innova Science Journal",
    citation:
      "Semblantes-Guamán, R. P., Salinas-Quintana, S. y Arcos-Naranjo, E. V. (2026). Análisis de la brecha salarial de género en Ecuador: una descomposición cuantílica con datos de la Enemdu 2024. Innova Science Journal, 4(1), 159-166.",
    status: "published",
    abstract:
      "Descomposición cuantílica con corrección de sesgo de selección de Heckman sobre 114.960 trabajadores de 25 a 64 años (Enemdu 2024). Documenta una penalización salarial femenina de 30,9 % tras controlar por características observables, con un patrón de \"piso pegajoso\" que alcanza 45,3 % en el decil más bajo y desciende a 19,7 % en el más alto.",
    topics: ["Brecha salarial", "Género", "Econometría", "Mercado laboral"],
    url: "https://innovasciencejournal.omeditorial.com/index.php/home/article/view/218",
    doi: "10.63618/omd/isj/v4/n1/218"
  },
  {
    id: "autoidentificacion-etnica-2026",
    title: "Determinantes socioeconómicos de la autoidentificación étnica en Ecuador: un análisis desde el modelo Probit",
    authors: ["Arcos-Naranjo, E.", "Santamaria-Quishpe, G.", "Bonilla-Galeas, E."],
    year: 2026,
    journal: "593 Digital Publisher CEIT",
    citation:
      "Arcos-Naranjo, E., Santamaria-Quishpe, G. y Bonilla-Galeas, E. (2026). Determinantes socioeconómicos de la Autoidentificación Étnica en Ecuador: un análisis desde el modelo Probit. 593 Digital Publisher CEIT, 11(1), 563-573.",
    status: "published",
    topics: ["Autoidentificación étnica", "Modelo Probit", "Econometría"],
    url: "https://doi.org/10.33386/593dp.2026.1.3803",
    doi: "10.33386/593dp.2026.1.3803"
  },
  {
    id: "empresas-fantasmas-2025",
    title:
      "Evolución de las empresas fantasmas e inexistentes y el perjuicio causado al Estado ecuatoriano, 2017-2023",
    authors: ["Angueta-López, M. P.", "Quimbita-Tarco, H. A.", "Arcos-Naranjo, E. V."],
    year: 2025,
    journal: "Revista Científica Zambos",
    citation:
      "Angueta-López, M. P., Quimbita-Tarco, H. A. y Arcos-Naranjo, E. V. (2025). Evolución de las empresas fantasmas e inexistentes y el perjuicio causado al Estado ecuatoriano, 2017-2023. Revista Científica Zambos, 4(1), 45-60.",
    status: "published",
    topics: ["Evasión fiscal", "Empresas fantasma", "Finanzas públicas"],
    url: "https://doi.org/10.69484/rcz/v4/n1/75",
    doi: "10.69484/rcz/v4/n1/75"
  },
  {
    id: "analfabetismo-digital-2025",
    title:
      "Determinantes socioeconómicos y educativos del analfabetismo digital en el Ecuador: un análisis empírico con enfoque econométrico",
    authors: ["Padilla-Barriga, D.", "Sarabia-Sarzosa, J.", "Arcos-Naranjo, E."],
    year: 2025,
    journal: "593 Digital Publisher CEIT",
    citation:
      "Padilla-Barriga, D., Sarabia-Sarzosa, J. y Arcos-Naranjo, E. (2025). Determinantes socioeconómicos y educativos del analfabetismo digital en el Ecuador: un análisis empírico con enfoque econométrico. 593 Digital Publisher CEIT, 10(6), 830-840.",
    status: "published",
    topics: ["Analfabetismo digital", "Educación", "Econometría"],
    url: "https://doi.org/10.33386/593dp.2025.6.3631",
    doi: "10.33386/593dp.2025.6.3631"
  },
  {
    id: "exposicion-ia-generativa-ocupaciones-2026",
    title:
      "Exposición de las ocupaciones ecuatorianas a la inteligencia artificial generativa: una réplica adaptada del indicador Anthropic con ENEMDU 2025",
    authors: ["Arequipa Lamingo, L. F.", "Sánchez Panimboza, M. Ángel", "Arcos Naranjo, V."],
    year: 2026,
    journal: "Revista de Investigación Enlace Universitario",
    citation:
      "Arequipa Lamingo, L. F., Sánchez Panimboza, M. Ángel y Arcos Naranjo, V. (2026). Exposición de las ocupaciones ecuatorianas a la inteligencia artificial generativa: una réplica adaptada del indicador Anthropic con ENEMDU 2025. Revista de Investigación Enlace Universitario, 25(2), 21-41.",
    status: "published",
    topics: ["Inteligencia artificial", "Mercado laboral", "Ocupaciones", "Econometría"],
    url: "https://doi.org/10.33789/enlace.25.2.187",
    doi: "10.33789/enlace.25.2.187"
  },
  {
    id: "diversificacion-economica-2026",
    title:
      "Diversificación Económica y Crecimiento Sostenible en el Ecuador: una Evaluación con el Índice Herfindahl-Hirschman y Eficiencia Productiva Sectorial",
    authors: ["Cuacés-Naranjo, D.", "Jami-Defaz, M.", "Arcos-Naranjo, E."],
    year: 2026,
    journal: "593 Digital Publisher CEIT",
    citation:
      "Cuacés-Naranjo, D., Jami-Defaz, M. y Arcos-Naranjo, E. (2026). Diversificación Económica y Crecimiento Sostenible en el Ecuador: una Evaluación con el Índice Herfindahl-Hirschman y Eficiencia Productiva Sectorial. 593 Digital Publisher CEIT, 11(4-1), 142-151.",
    status: "published",
    topics: ["Diversificación económica", "Crecimiento sostenible", "Econometría"],
    url: "https://doi.org/10.33386/593dp.2026.4-1.4214",
    doi: "10.33386/593dp.2026.4-1.4214"
  },
  {
    id: "oferta-educativa-superior-2020",
    title: "Impacto de la oferta educativa superior en la búsqueda de talento humano por parte de las empresas",
    authors: ["Arcos-Naranjo, E. V.", "Andocilla-Cabrera, J. R.", "Martínez-Valencia, K. M."],
    year: 2020,
    journal: "Magazine de las Ciencias: Revista de Investigación e Innovación",
    citation:
      "Arcos-Naranjo, E. V., Andocilla-Cabrera, J. R. y Martínez-Valencia, K. M. (2020). Impacto de la oferta educativa superior en la búsqueda de talento humano por parte de las empresas. Magazine de las Ciencias, 5(6), 15-26.",
    status: "published",
    abstract:
      "Análisis econométrico con cuatro modelos de regresión sobre la base de datos de empleo de Ecuador. Muestra que la oferta educativa superior tiende a concentrar profesionales en grandes empresas, limitando el acceso de pequeñas y medianas empresas a talento calificado, y sugiere diversificar la oferta académica hacia más sectores económicos.",
    topics: ["Educación superior", "Mercado laboral", "Econometría", "Empresas"],
    url: "https://revistas.utb.edu.ec/index.php/magazine/article/view/462"
  },
  {
    id: "bachilleres-rurales-2020",
    title: "Políticas Estatales: una mirada hacia la inserción laboral y empleabilidad de Bachilleres Rurales",
    authors: ["España Merchán, Y.", "Arcos Naranjo, V."],
    year: 2020,
    journal: "Revista Mapa",
    citation:
      "España Merchán, Y. y Arcos Naranjo, V. (2020). Políticas Estatales: una mirada hacia la inserción laboral y empleabilidad de Bachilleres Rurales. Revista Mapa, 6(18), 65-83.",
    status: "published",
    abstract:
      "Estudio de método mixto con análisis de regresión lineal sobre la inserción laboral de bachilleres técnicos agropecuarios en zonas rurales. Evidencia una relación inversa entre colocación laboral y empleabilidad, atribuible a baja remuneración y satisfacción laboral, y propone mejorar la alineación entre educación técnica y demanda del mercado.",
    topics: ["Empleabilidad", "Educación técnica", "Política pública", "Zona rural"],
    url: "https://revistamapa.org/index.php/es/article/view/186"
  },
  {
    id: "rolando-franco-2015",
    title: "Debates actuales y perspectivas sobre las políticas sociales en América Latina: entrevista con Rolando Franco",
    authors: ["Larrea Maldonado, A. M.", "Hernández, F.", "Rivera, J.", "Mera, M.", "Arcos, V."],
    year: 2015,
    journal: "Mundos Plurales",
    citation:
      "Larrea Maldonado, A. M., Hernández, F., Rivera, J., Mera, M. y Arcos, V. (2015). Debates actuales y perspectivas sobre las políticas sociales en América Latina: entrevista con Rolando Franco. Mundos Plurales, 2(2), 95-104.",
    status: "published",
    topics: ["Políticas sociales", "América Latina", "Entrevista"],
    url: "http://hdl.handle.net/10469/8011"
  }
];
