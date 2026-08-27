import { statusLabels, type ContentStatus } from "@/data/status";

export type ResearchStatus = ContentStatus;
export const researchStatusLabels = statusLabels;

export type Research = {
  id: string;
  title: string;
  institution: string;
  period: string;
  status: ResearchStatus;
  topics: string[];
  /**
   * La hoja de vida y el repositorio OSF no detallan pregunta, metodología ni
   * hallazgos para estos proyectos: no se redactan porque no constan en la fuente.
   */
  sourceNote: string;
  url: string;
};

export const research: Research[] = [
  {
    id: "econometrico-mercado-laboral-enemdu",
    title: "Análisis Econométrico del Mercado Laboral con microdatos ENEMDU",
    institution: "Universidad Técnica de Cotopaxi",
    period: "2025-2027",
    status: "in-progress",
    topics: ["Economía laboral", "Econometría", "Microdatos ENEMDU"],
    sourceNote: "Métodos y resultados detallados no constan en la hoja de vida; consultar el repositorio OSF.",
    url: "https://osf.io/aj94n/"
  },
  {
    id: "cifras-narrativas-censo-ecuador",
    title: "Cifras y Narrativas: Reflexiones desde el Censo de Ecuador",
    institution: "Universidad Técnica de Cotopaxi",
    period: "2024-2025",
    status: "in-progress",
    topics: ["Ciencia de datos", "Censo de población", "Desarrollo"],
    sourceNote: "Métodos y resultados detallados no constan en la hoja de vida; consultar el repositorio OSF.",
    url: "https://osf.io/dfyuj/"
  },
  {
    id: "socioeconomico-sectores-productivos-latacunga",
    title: "Análisis socioeconómico de los sectores productivos del cantón Latacunga",
    institution: "Universidad Técnica de Cotopaxi",
    period: "2024-2025",
    status: "in-progress",
    topics: ["Desarrollo territorial", "Economía aplicada"],
    sourceNote: "Métodos y resultados detallados no constan en la hoja de vida; consultar el repositorio OSF.",
    url: "https://osf.io/xwu6c/"
  }
];
