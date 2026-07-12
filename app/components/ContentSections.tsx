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
          ? "relative aspect-[19/9]"
          : "relative aspect-[4/3] md:aspect-[3/4]"
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

type BentoItemsWithImageProps = {
  items: string[];
  image: {
    src: string;
    alt: string;
  };
};

function BentoItemsWithImage({ items, image }: BentoItemsWithImageProps) {
  const imageRows = items.length > 6 ? "md:row-span-4" : "md:row-span-3";

  return (
    <div className="grid gap-3 md:auto-rows-[minmax(88px,auto)] md:grid-cols-3">
      {items.map((item, index) => (
        <Reveal
          key={item}
          className={`flex min-h-16 gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm ${
            items.length % 2 === 1 && index === items.length - 1 ? "md:col-span-2" : ""
          }`}
          delay={index * 0.04}
          y={16}
        >
          <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-700 text-white">
            <svg aria-hidden="true" viewBox="0 0 20 20" className="size-3">
              <path
                fill="currentColor"
                d="M8.1 13.9 4.6 10.4l1.2-1.2 2.3 2.3 6.1-6.1 1.2 1.2z"
              />
            </svg>
          </span>
          <span className="leading-7 text-muted-foreground">{item}</span>
        </Reveal>
      ))}

      <Reveal
        className={`relative min-h-72 md:col-start-3 md:row-start-1 md:min-h-full ${imageRows}`}
        delay={0.08}
        y={18}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-contain"
        />
      </Reveal>
    </div>
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
            {"items" in section && section.items && "image" in section && section.image ? (
                  <BentoItemsWithImage items={section.items} image={section.image} />
            ) : (
              <div className="grid gap-6 md:grid-cols-[1fr_260px] md:items-start">
                <div>
                  {"body" in section && (
                    <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                      {section.body}
                    </p>
                  )}
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
                          <p className="mt-3 leading-7 text-muted-foreground">{stage.detail}</p>
                        </Reveal>
                      ))}
                    </div>
                  )}
                </div>
                {"image" in section && section.image && (
                  <SectionImage image={section.image} />
                )}
              </div>
            )}
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
              <>
                {"items" in section && section.items && "image" in section && section.image && (
                  <BentoItemsWithImage items={section.items} image={section.image} />
                )}
              </>
            )}
          </SectionShell>
        ))}
      </article>
    </div>
  );
}
