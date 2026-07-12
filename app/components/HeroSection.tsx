import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[76svh] items-center overflow-hidden px-5 py-20 sm:px-8 lg:px-12">
      <Image
        src="/images/puerperio-hero.png"
        alt="Cuaderno de cuidados, manta de bebé, agua y flores sobre una mesa iluminada."
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/88 to-white/20" />
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-800">
          Guía educativa posparto
        </p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
          Puerperio
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
          Una guía breve, clara y organizada para reconocer los cambios,
          cuidados, signos de alarma y recomendaciones durante las primeras seis
          semanas después del parto.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#que-es"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-teal-800 px-6 text-base font-bold text-white transition-colors duration-200 hover:bg-teal-900 focus:outline-none focus:ring-4 focus:ring-teal-800/25"
          >
            Leer la guía
          </a>
          <a
            href="#alarmas"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-coral bg-white/85 px-6 text-base font-bold text-foreground transition-colors duration-200 hover:bg-coral-light focus:outline-none focus:ring-4 focus:ring-coral/25"
          >
            Ver signos de alarma
          </a>
        </div>
      </div>
    </section>
  );
}
