export type Skills = {
  methods: string[];
  software: string[];
  gis: string[];
  visualization: string[];
  platforms: string[];
  systems: string[];
  aiAndDev: string[];
  researchLines: string[];
};

export const skills: Skills = {
  methods: [
    "Evaluación de impacto",
    "Estadística descriptiva, inferencial y predictiva",
    "Econometría",
    "Ciencia de datos",
    "Modelación económica"
  ],
  software: ["Python", "R", "Stata", "SPSS", "KoboToolbox", "AWS", "WordPress"],
  gis: ["QGIS", "GeoDa", "ArcGIS"],
  visualization: ["Power BI", "Tableau"],
  platforms: ["LMS", "CMS", "Moodle", "Open Journal System"],
  systems: ["Linux", "Arch Linux", "Ubuntu", "Microsoft Excel", "Microsoft Word"],
  aiAndDev: ["Visual Studio Code", "Docker", "Claude CLI", "Codex CLI", "Gemini CLI"],
  researchLines: [
    "Economía del Desarrollo",
    "Economía Laboral",
    "Economía Ambiental",
    "Economía de la Educación",
    "Políticas Públicas"
  ]
};
