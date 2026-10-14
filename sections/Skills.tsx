import SectionHeading from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-16">
      <SectionHeading index="02" title="Skills" />

      <dl className="space-y-6">
        {skills.map((group) => (
          <div key={group.group} className="flex flex-col gap-3 sm:flex-row sm:gap-6">
            <dt className="w-28 shrink-0 pt-1 font-mono text-xs text-muted-foreground">
              {group.group}
            </dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <Badge key={skill} variant="outline" className="px-2.5 py-1 font-normal">
                  {skill}
                </Badge>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
