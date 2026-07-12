import Image from "next/image";
import { alarms } from "@/app/data/puerperio";
import { MotionListItem, Reveal } from "./MotionPrimitives";
import { SectionShell } from "./SectionShell";

export function AlarmSection() {
  return (
    <SectionShell id="alarmas" eyebrow="06" title="Signos de alarma">
      <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
        Si aparece alguno de estos signos, busca atención médica lo antes posible.
      </p>

      <div className="mt-6 grid gap-3 md:auto-rows-[minmax(88px,auto)] md:grid-cols-3">
        {alarms.map((alarm, index) => (
          <MotionListItem
            key={alarm}
            className="flex min-h-16 gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
            delay={index * 0.035}
          >
            <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-coral text-white">
              <svg aria-hidden="true" viewBox="0 0 20 20" className="size-3">
                <path
                  fill="currentColor"
                  d="M10 2 1.7 16.5h16.6zm.8 11.8H9.2v1.6h1.6zm0-6H9.2v4.7h1.6z"
                />
              </svg>
            </span>
            <span className="leading-7 text-muted-foreground">{alarm}</span>
          </MotionListItem>
        ))}

        <Reveal
          className="relative min-h-72 md:col-start-3 md:row-start-1 md:row-span-4 md:min-h-full"
          delay={0.08}
          y={18}
        >
          <Image
            src="/images/signo-alarma.jpeg"
            alt="Ilustración educativa con signos de alarma durante el puerperio."
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-contain"
          />
        </Reveal>
      </div>
    </SectionShell>
  );
}
