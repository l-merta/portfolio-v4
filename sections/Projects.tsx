import { ArrowUpRight } from "lucide-react";

import GithubIcon from "@/components/GithubIcon";
import SectionHeading from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { currentProjects, projects, type Project } from "@/data/projects";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-3 text-muted-foreground">
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          aria-label={`Zdrojový kód: ${project.name}`}
          className="transition-colors hover:text-foreground"
        >
          <GithubIcon className="size-4" />
        </a>
      )}
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Otevřít ${project.name}`}
          className="transition-colors hover:text-brand"
        >
          <ArrowUpRight className="size-4" />
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((project) => project.featured);
  const more = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="scroll-mt-20 py-16">
      <SectionHeading index="01" title="Projekty" />

      {currentProjects.length > 0 && (
        <div className="mb-14">
          <h3 className="mb-2 text-sm font-medium">Na čem právě pracuji</h3>
          <ul className="divide-y">
            {currentProjects.map((project) => (
              <li
                key={project.name}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="inline-flex w-28 shrink-0 items-center gap-2 font-mono text-xs text-muted-foreground">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-brand" />
                  </span>
                  probíhá
                </span>
                <div className="flex-1">
                  <div className="font-medium">{project.name}</div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="pt-1 sm:pt-0">
                  <ProjectLinks project={project} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <h3 className="mb-4 text-sm font-medium">Vybrané projekty</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {featured.map((project) => (
          <Card
            key={project.name}
            className="gap-4 shadow-none transition-colors hover:border-foreground/20"
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <CardTitle className="text-base">{project.name}</CardTitle>
                <ProjectLinks project={project} />
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                {project.year}
                {project.note && <span className="text-brand"> · {project.note}</span>}
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="leading-relaxed">
                {project.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-normal">
                  {tech}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>

      {more.length > 0 && (
        <>
          <h3 className="mt-14 mb-2 text-sm font-medium">Další projekty</h3>
          <ul className="divide-y">
            {more.map((project) => (
              <li
                key={project.name}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="w-28 shrink-0 font-mono text-xs text-muted-foreground">
                  {project.year}
                </span>
                <div className="flex-1">
                  <div className="font-medium">{project.name}</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="pt-1 sm:pt-0">
                  <ProjectLinks project={project} />
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
