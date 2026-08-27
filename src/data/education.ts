export type EducationEntry = {
  credential: string;
  institution: string;
  detail: string;
  period: string;
};

export const education: EducationEntry[] = [
  {
    credential: "Candidato a Doctor en Políticas Públicas",
    institution: "FLACSO Ecuador",
    detail:
      "Doctorado de investigación, periodo de tesis. Propuesta: \"Cobertura de Seguro Social y Mercado laboral en Ecuador\". Beca de cuarto nivel.",
    period: "Periodo no especificado"
  },
  {
    credential: "Magíster en Economía, mención Economía del Desarrollo",
    institution: "FLACSO Ecuador",
    detail:
      "Máster de investigación. Registro SENESCYT 1026-15-86064999. Tesis: \"Impacto de la eliminación de la tercerización y los resultados en la capacitación laboral en el Ecuador\". Beca.",
    period: "2015"
  },
  {
    credential: "Economista",
    institution: "Universidad Católica de Cuenca",
    detail:
      "Registro SENESCYT 1029-12-1104839. Trabajo de investigación: \"El microcrédito como factor de desarrollo humano en relación con la realidad socioeconómica de los desempleados del cantón Cayambe, provincia de Pichincha, durante el período 2009-2010\". Quito, 2011.",
    period: "2011"
  }
];
