import { ArrowDown, FileText } from "lucide-react";

import GithubIcon from "@/components/GithubIcon";
import LinkedinIcon from "@/components/LinkedinIcon";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export default function Hero() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <section className="pt-16 pb-20 sm:pt-24 sm:pb-28">
      <Avatar className="size-16 border transition hover:grayscale-0">
        <AvatarImage src={profile.avatar} alt={profile.name} />
        <AvatarFallback className="font-mono text-sm">{initials}</AvatarFallback>
      </Avatar>

      <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>

      <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-muted-foreground">
        <span>{profile.role}</span>
        <span aria-hidden>·</span>
        <span>{profile.location}</span>
        {profile.openToWork && (
          <span className="inline-flex items-center gap-2 text-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            {profile.openToWorkLabel}
          </span>
        )}
      </p>

      <p className="mt-8 max-w-xl text-lg leading-relaxed text-balance">
        {profile.intro}
      </p>

      <div className="mt-6 max-w-xl space-y-4 text-muted-foreground leading-relaxed">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            <GithubIcon /> GitHub
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            <LinkedinIcon /> LinkedIn
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href={profile.links.cv} target="_blank" rel="noreferrer">
            <FileText /> Životopis
          </a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="#projects">
            Moje práce <ArrowDown />
          </a>
        </Button>
      </div>
    </section>
  );
}
