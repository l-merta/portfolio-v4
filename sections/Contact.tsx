import { ArrowUpRight } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

const contacts = [
  {
    label: "E-mail",
    value: profile.links.email,
    href: `mailto:${profile.links.email}`,
  },
  { label: "LinkedIn", value: profile.name, href: profile.links.linkedin },
  { label: "GitHub", value: profile.githubUsername, href: profile.links.github },
  { label: "Životopis", value: "PDF", href: profile.links.cv },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-16">
      <SectionHeading index="04" title="Kontakt" />
      <dl className="space-y-4">
        {contacts.map((contact) => (
          <div
            key={contact.label}
            className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <dt className="w-28 shrink-0 font-mono text-xs text-muted-foreground">
              {contact.label}
            </dt>
            <dd>
              <a
                href={contact.href}
                // E-mail opens the mail app, everything else opens in a new tab
                {...(contact.href.startsWith("mailto:")
                  ? {}
                  : { target: "_blank", rel: "noreferrer" })}
                className="group inline-flex items-center gap-1 underline decoration-border underline-offset-4 transition-colors hover:decoration-brand"
              >
                {contact.value}
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
