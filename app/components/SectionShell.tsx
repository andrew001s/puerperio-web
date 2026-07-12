import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function SectionShell({ id, eyebrow, title, children }: SectionShellProps) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-slate-200/80 py-14">
      <div className="grid gap-6 lg:grid-cols-[180px_1fr]">
        <div className="flex items-center gap-3 lg:block">
          <span className="inline-flex size-11 items-center justify-center rounded-full border border-teal-700/30 bg-teal-50 text-sm font-bold text-teal-800">
            {eyebrow}
          </span>
          <p className="mt-0 text-xs font-bold uppercase tracking-[0.22em] text-coral lg:mt-4">
            Puerperio
          </p>
        </div>
        <div>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </section>
  );
}
