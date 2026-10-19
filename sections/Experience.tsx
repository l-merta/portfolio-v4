import SectionHeading from "@/components/SectionHeading";
import {
  education,
  highlights,
  work,
  type ExperienceItem,
} from "@/data/experience";

function Timeline({ title, items }: { title: string; items: ExperienceItem[] }) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-medium">{title}</h3>
      <ol className="divide-y">
        {items.map((item) => (
          <li
            key={item.title + item.place}
            className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <span className="w-28 shrink-0 font-mono text-xs text-muted-foreground">
              {item.period}
            </span>
            <div>
              <div className="font-medium">{item.title}</div>
              <div className="text-sm text-muted-foreground">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-brand"
                  >
                    {item.place}
                  </a>
                ) : (
                  item.place
                )}
              </div>
              {item.description && (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-16">
      <SectionHeading index="03" title="Zkušenosti" />
      <div className="space-y-12">
        <Timeline title="Zaměstnání" items={work} />
        <Timeline title="Vzdělání" items={education} />
        <Timeline title="Další zkušenosti" items={highlights} />
      </div>
    </section>
  );
}
