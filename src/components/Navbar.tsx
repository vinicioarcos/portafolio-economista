const navItems = [
  { href: "#sobre-mi", label: "Perfil" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#servicios", label: "Servicios" },
  { href: "#publicaciones", label: "Publicaciones" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#cursos", label: "Cursos" },
  { href: "#herramientas", label: "Herramientas" },
  { href: "#contacto", label: "Contacto" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-white/50 backdrop-blur-md">
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
        <nav className="hidden items-center gap-1 text-xs font-medium text-slate-600 lg:flex">
          {navItems.map((item) => (
            <a
              className="rounded-md px-3 py-2 transition hover:bg-petrol/10 hover:text-petrol"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="#contacto"
            className="rounded-full bg-petrol px-4 py-2 text-xs font-semibold text-white transition hover:bg-petroldark"
          >
            Contacto
          </a>
        </div>
      </div>
    </header>
  );
}
