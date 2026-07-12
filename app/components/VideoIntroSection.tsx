import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { Reveal } from "./MotionPrimitives";

const youtubeId = "4DHhq3Vcu_g";

export function VideoIntroSection() {
  return (
    <section className="bg-ivory px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-800">
            Video introductorio
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground">
            Conoce más sobre el puerperio
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
            Mira este recurso antes de continuar con la guía para reforzar los
            puntos principales.
          </p>
        </Reveal>

        <Reveal className="mt-8" delay={0.08} y={28}>
          <HeroVideoDialog
            animationStyle="from-center"
            videoSrc={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            thumbnailSrc={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
            thumbnailAlt="Miniatura del video introductorio sobre el puerperio."
            className="mx-auto max-w-4xl"
          />
        </Reveal>
      </div>
    </section>
  );
}
