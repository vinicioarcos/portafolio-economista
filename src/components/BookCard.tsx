import { ExternalLinkIcon } from "@/components/ExternalLinkIcon";
import type { Book } from "@/data/books";
import { profile } from "@/data/profile";

const statusLabel: Record<Book["status"], string> = {
  published: "Publicado",
  "in-preparation": "En preparación"
};

const statusStyles: Record<Book["status"], string> = {
  published: "bg-petrol/10 text-petroldark",
  "in-preparation": "bg-slate-200/70 text-slate-700"
};

export function BookCard({ book }: { book: Book }) {
  const notifyHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Notificarme: ${book.title}`
  )}`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-panel">
      <span
        className={`w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${statusStyles[book.status]}`}
      >
        {statusLabel[book.status]}
      </span>
      <h3 className="mt-3 text-lg font-bold leading-6 tracking-tight text-charcoal">{book.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-700">{book.description}</p>

      {book.status === "published" && book.url ? (
        <a
          className="mt-5 inline-flex w-fit items-center gap-1.5 rounded text-sm font-semibold text-petrol underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
          href={book.url}
          rel="noreferrer"
          target="_blank"
        >
          Ver libro
          <ExternalLinkIcon className="h-3.5 w-3.5" />
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        </a>
      ) : null}

      {book.status === "in-preparation" ? (
        <a
          className="mt-5 inline-flex w-fit items-center gap-1.5 rounded text-sm font-semibold text-petrol underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
          href={notifyHref}
        >
          Notificarme cuando esté disponible
        </a>
      ) : null}
    </article>
  );
}
