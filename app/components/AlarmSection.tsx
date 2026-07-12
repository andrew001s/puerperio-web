import Image from "next/image";
import { alarms } from "@/app/data/puerperio";

export function AlarmSection() {
  return (
    <section id="alarmas" className="scroll-mt-28 border-t border-slate-200/80 py-14">
      <div className="rounded-lg bg-deep p-6 text-black sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-black">
              06 · Atención inmediata
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-black sm:text-4xl">
              Signos de alarma
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-black/85">
              Si aparece alguno de estos signos, busca atención médica lo antes
              posible.
            </p>
            <ul className="mt-8 grid gap-3 md:grid-cols-2">
              {alarms.map((alarm) => (
                <li
                  key={alarm}
                  className="flex gap-3 rounded-lg border border-black/15 bg-white/10 p-4"
                >
                  <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-coral text-deep">
                    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-3">
                      <path
                        fill="currentColor"
                        d="M10 2 1.7 16.5h16.6zm.8 11.8H9.2v1.6h1.6zm0-6H9.2v4.7h1.6z"
                      />
                    </svg>
                  </span>
                  <span className="leading-7 text-black/90">{alarm}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-black/20 bg-black/10 shadow-xl shadow-black/10">
            <Image
              src="/images/signo-alarma.jpeg"
              alt="Ilustración educativa con signos de alarma durante el puerperio."
              fill
              sizes="(min-width: 1024px) 280px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
