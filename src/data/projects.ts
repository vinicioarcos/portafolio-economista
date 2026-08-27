export type ProjectStatus = "live" | "in-development" | "archived";

export type Project = {
  id: string;
  title: string;
  summary: string;
  problem: string;
  role: string;
  methods: string[];
  deliverables: string[];
  technologies: string[];
  category: string;
  status: ProjectStatus;
  url?: string;
  repositoryUrl?: string;
  image?: string;
};

/**
 * Los 5 casos de consultoría que tenía originalmente este archivo (gobierno local, cámara
 * empresarial, fundación educativa, instituto técnico, organismo internacional) no tenían
 * respaldo verificable en ninguna fuente auditada: sin captura, sin URL, sin tecnología, sin
 * cliente identificable. Se retiraron por instrucción explícita del propietario del sitio.
 * Ver docs/content-audit.md §2.10. Este arreglo queda vacío hasta contar con proyectos y
 * aplicaciones reales y documentados.
 */
export const projects: Project[] = [];
