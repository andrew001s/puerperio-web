import Image from "next/image";
import { sections } from "@/app/data/puerperio";
import { AlarmSection } from "./AlarmSection";
import { ListBlock } from "./ListBlock";
import { Reveal } from "./MotionPrimitives";
import { SectionShell } from "./SectionShell";

type SectionImageProps = {
  image: {
    src: string;
    alt: string;
  };
  variant?: "portrait" | "wide";
};

function SectionImage({ image, variant = "portrait" }: SectionImageProps) {
  return (
    <Reveal
      className={
        variant === "wide"
          ? "relative aspect-[19/9] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
          : "relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm md:aspect-[3/4]"
      }
      delay={0.08}
      y={18}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 768px) 260px, 100vw"
        className={variant === "wide" ? "object-contain" : "object-contain md:object-cover"}
      />
    </Reveal>
  );
}

export function ContentSections() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12">
      <article className="mx-auto max-w-5xl">
        {sections.slice(0, 5).map((section) => (
          <SectionShell
            key={section.id}
            id={section.id}
            eyebrow={section.eyebrow}
            title={section.title}
          >
            <div className="grid gap-6 md:grid-cols-[1fr_260px] md:items-start">
              <div>
                {"body" in section && (
                  <p className="max-w-3xl text-lg leading-8 text-muted">
                    {section.body}
                  </p>
                )}
                {"items" in section && section.items && <ListBlock items={section.items} />}
                {"timeline" in section && section.timeline && (
                  <div className="grid gap-4">
                    {section.timeline.map((stage, index) => (
                      <Reveal
                        key={stage.label}
                        className="rounded-lg border border-teal-700/20 bg-white p-5 shadow-sm"
                        delay={index * 0.05}
                        y={16}
                      >
                        <h3 className="font-serif text-2xl font-semibold text-teal-900">
                          {stage.label}
                        </h3>
                        <p className="mt-3 leading-7 text-muted">{stage.detail}</p>
                      </Reveal>
                    ))}
                  </div>
                )}
              </div>
              {"image" in section && section.image && <SectionImage image={section.image} />}
            </div>
          </SectionShell>
        ))}

        <AlarmSection />

        {sections.slice(5).map((section) => (
          <SectionShell
            key={section.id}
            id={section.id}
            eyebrow={section.eyebrow}
            title={section.title}
          >
            {section.id === "recomendaciones" ? (
              <div className="grid gap-6">
                {"image" in section && section.image && (
                  <SectionImage image={section.image} variant="wide" />
                )}
                {"items" in section && section.items && <ListBlock items={section.items} />}
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-[1fr_260px] md:items-start">
                {"items" in section && section.items && <ListBlock items={section.items} />}
                {"image" in section && section.image && <SectionImage image={section.image} />}
              </div>
            )}
          </SectionShell>
        ))}
      </article>
    </div>
  );
}
