"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "/perfil", label: "Perfil" },
  { href: "#servicios", label: "Servicios" },
  { href: "/investigacion", label: "Investigación" },
  { href: "/publicaciones", label: "Publicaciones" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "/docencia", label: "Docencia" },
  { href: "#contacto", label: "Contacto" }
];

// Todas las secciones reales de la página, incluidas las que no tienen
// entrada en `navItems`, para que el nav no se quede "congelado" en el
// último ítem activo mientras se hace scroll por esas secciones.
const sectionIds = [
  "perfil",
  "especialidades",
  "servicios",
  "investigacion",
  "publicaciones",
  "proyectos",
  "docencia",
  "herramientas",
  "contacto"
];

export function Navbar() {
  const [activeId, setActiveId] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) {
          setActiveId(mostVisible.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    function handlePointerDown(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    function closeOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    }

    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-white/50 backdrop-blur-md" ref={navRef}>
      <div className="section-shell flex min-h-[72px] items-center justify-between gap-6">
        <a
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-petroldark transition hover:text-petrol"
          href="#inicio"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-copper text-white font-bold">
            V
          </span>
          <span className="hidden sm:inline">Vinicio Arcos</span>
        </a>
        <nav aria-label="Secciones principales" className="hidden items-center gap-1 text-xs font-medium text-slate-600 lg:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.href.slice(1);
            return (
              <a
                aria-current={isActive ? "true" : undefined}
                className={`rounded-md px-3 py-2 transition hover:bg-petrol/10 hover:text-petrol focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol ${
                  isActive ? "bg-petrol/10 text-petrol" : ""
                }`}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#contacto"
            className="rounded-full bg-petrol px-4 py-2 text-xs font-semibold text-white transition hover:bg-petroldark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
          >
            Contacto
          </a>
          <button
            aria-controls="mobile-nav"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-slate-300/70 text-slate-700 transition hover:border-slate-400 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <nav
          aria-label="Secciones principales (móvil)"
          className="border-t border-white/40 bg-white/95 backdrop-blur-md lg:hidden"
          id="mobile-nav"
        >
          <div className="section-shell flex flex-col py-2 text-sm font-medium text-slate-700">
            {navItems.map((item) => {
              const isActive = activeId === item.href.slice(1);
              return (
                <a
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded-md px-3 py-3 transition hover:bg-petrol/10 hover:text-petrol focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol ${
                    isActive ? "bg-petrol/10 text-petrol" : ""
                  }`}
                  href={item.href}
                  key={item.label}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
