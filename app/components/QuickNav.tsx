import { quickLinks } from "@/app/data/puerperio";

export function QuickNav() {
  return (
    <nav
      aria-label="Navegación rápida por el contenido"
      className="sticky top-0 z-20 border-y border-slate-200 bg-white/92 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 sm:px-8 lg:px-12">
        {quickLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="shrink-0 rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-muted transition-colors duration-200 hover:border-teal-700 hover:bg-teal-50 hover:text-teal-900 focus:outline-none focus:ring-4 focus:ring-teal-800/20"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
