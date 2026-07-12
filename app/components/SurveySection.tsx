import { Reveal } from "./MotionPrimitives";

const tallyUrl =
  "https://tally.so/embed/44y75X?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export function SurveySection() {
  return (
    <section id="preguntas" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-800">
              Después de leer
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground">
              Encuesta sobre el puerperio
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
              Completa esta encuesta para valorar la información y reforzar los
              puntos principales de la guía.
            </p>
          </Reveal>

          <Reveal
            className="mt-10 overflow-hidden rounded-lg border border-slate-200 bg-ivory p-3 shadow-sm sm:p-4"
            delay={0.08}
          >
            <iframe
              data-tally-src={tallyUrl}
              src={tallyUrl}
              loading="lazy"
              width="100%"
              height="1463"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Encuesta sobre el Puerperio"
              className="block w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
