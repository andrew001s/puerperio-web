import { sections } from "@/app/data/puerperio";
import { AlarmSection } from "./AlarmSection";
import { ListBlock } from "./ListBlock";
import { SectionShell } from "./SectionShell";

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
            {"body" in section && (
              <p className="max-w-3xl text-lg leading-8 text-muted">
                {section.body}
              </p>
            )}
            {"items" in section && section.items && <ListBlock items={section.items} />}
            {"timeline" in section && section.timeline && (
              <div className="grid gap-4 md:grid-cols-3">
                {section.timeline.map((stage) => (
                  <div
                    key={stage.label}
                    className="rounded-lg border border-teal-700/20 bg-white p-5 shadow-sm"
                  >
                    <h3 className="font-serif text-2xl font-semibold text-teal-900">
                      {stage.label}
                    </h3>
                    <p className="mt-3 leading-7 text-muted">{stage.detail}</p>
                  </div>
                ))}
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
            {"items" in section && section.items && <ListBlock items={section.items} />}
          </SectionShell>
        ))}
      </article>
    </div>
  );
}
