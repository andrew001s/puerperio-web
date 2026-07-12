import Image from "next/image";
import { projectInfo } from "@/app/data/puerperio";

const footerDetails = [
  { label: "Instituto", value: projectInfo.institute },
  { label: "Carrera", value: projectInfo.career },
  { label: "Asignatura", value: projectInfo.subject },
  { label: "Docente", value: projectInfo.teacher },
  { label: "Año", value: projectInfo.year },
];

function FlowerGarden() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 120"
      className="absolute bottom-0 left-0 h-28 w-72 text-teal-800 sm:h-32 sm:w-80"
    >
      <path
        d="M7 107c28-28 48-31 72-22 30 12 44 3 69-15 31-22 63-7 88 23 17 20 38 22 76 11"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
      />
      {[
        { x: 34, y: 76, color: "#f59b7a" },
        { x: 82, y: 61, color: "#7fb8d8" },
        { x: 132, y: 73, color: "#f6cc4c" },
        { x: 184, y: 62, color: "#6f9ed2" },
        { x: 235, y: 76, color: "#f59b7a" },
      ].map((flower) => (
        <g key={`${flower.x}-${flower.y}`} transform={`translate(${flower.x} ${flower.y})`}>
          <line y1="15" y2="45" stroke="#176c6a" strokeWidth="3" />
          <circle r="5" fill="#123f3d" />
          <ellipse cx="0" cy="-13" rx="7" ry="13" fill={flower.color} />
          <ellipse cx="0" cy="13" rx="7" ry="13" fill={flower.color} />
          <ellipse cx="-13" cy="0" rx="13" ry="7" fill={flower.color} />
          <ellipse cx="13" cy="0" rx="13" ry="7" fill={flower.color} />
        </g>
      ))}
      <g fill="#176c6a">
        <ellipse cx="20" cy="96" rx="7" ry="16" transform="rotate(-36 20 96)" />
        <ellipse cx="58" cy="101" rx="7" ry="15" transform="rotate(35 58 101)" />
        <ellipse cx="112" cy="97" rx="8" ry="17" transform="rotate(-28 112 97)" />
        <ellipse cx="154" cy="101" rx="8" ry="15" transform="rotate(30 154 101)" />
        <ellipse cx="210" cy="100" rx="7" ry="16" transform="rotate(-34 210 100)" />
        <ellipse cx="268" cy="101" rx="8" ry="15" transform="rotate(30 268 101)" />
      </g>
    </svg>
  );
}

export function ProjectFooter() {
  return (
    <footer className="bg-slate-100 px-5 py-16 text-foreground sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden bg-white px-7 pb-32 pt-8 shadow-2xl shadow-slate-300/70 sm:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
            <div>
              <div className="relative mb-6 h-12 w-56">
                <Image
                  src="/images/instituto.png"
                  alt="Logo del Instituto Superior Tecnológico Universitario Libertad."
                  fill
                  sizes="224px"
                  className="object-contain object-left"
                />
              </div>
              <p className="mt-5 max-w-xs text-sm leading-7 text-muted">
                Proyecto académico sobre cuidados, etapas y signos de alarma
                durante el puerperio.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-black text-foreground">Proyecto</h3>
              <dl className="mt-4 grid gap-2 text-sm leading-6">
                {footerDetails.slice(1, 3).map((detail) => (
                  <div key={detail.label}>
                    <dt className="font-bold text-teal-800">{detail.label}</dt>
                    <dd className="text-muted">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="text-sm font-black text-foreground">Institución</h3>
              <dl className="mt-4 grid gap-2 text-sm leading-6">
                {[footerDetails[0], footerDetails[3], footerDetails[4]].map((detail) => (
                  <div key={detail.label}>
                    <dt className="font-bold text-teal-800">{detail.label}</dt>
                    <dd className="text-muted">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="text-sm font-black text-foreground">Integrantes</h3>
              <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted">
                {projectInfo.members.map((member) => (
                  <li key={member}>{member}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© {projectInfo.year} {projectInfo.theme}. Todos los derechos reservados.</p>
            <div className="flex gap-3" aria-label="Decoración de redes sociales">
              <span className="size-3 rounded-full bg-[#3b82f6]" />
              <span className="size-3 rounded-full bg-[#0ea5e9]" />
              <span className="size-3 rounded-full bg-[#ef4444]" />
              <span className="size-3 rounded-full bg-[#22c55e]" />
            </div>
          </div>

          <FlowerGarden />
        </div>
      </div>
    </footer>
  );
}
