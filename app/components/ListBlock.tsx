import { MotionListItem } from "./MotionPrimitives";

type ListBlockProps = {
  items: string[];
};

export function ListBlock({ items }: ListBlockProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <MotionListItem
          key={item}
          className="flex min-h-16 gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          delay={index * 0.04}
        >
          <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-700 text-white">
            <svg aria-hidden="true" viewBox="0 0 20 20" className="size-3">
              <path
                fill="currentColor"
                d="M8.1 13.9 4.6 10.4l1.2-1.2 2.3 2.3 6.1-6.1 1.2 1.2z"
              />
            </svg>
          </span>
          <span className="leading-7 text-muted">{item}</span>
        </MotionListItem>
      ))}
    </ul>
  );
}
