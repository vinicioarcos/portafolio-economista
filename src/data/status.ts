export type ContentStatus =
  | "published"
  | "accepted"
  | "in-review"
  | "working-paper"
  | "in-progress";

export const statusLabels: Record<ContentStatus, string> = {
  published: "Publicado",
  accepted: "Aceptado",
  "in-review": "En revisión",
  "working-paper": "Documento de trabajo",
  "in-progress": "En curso"
};
