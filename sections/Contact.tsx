import { ArrowUpRight } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

const links = [
  { label: "GitHub", href: profile.links.github },
  { label: "CV (PDF)", href: profile.links.cv },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-16">
      <SectionHeading index="04" title="Contact" />
      <p className="max-w-xl text-2xl font-medium tracking-tight text-balance">
        Have a project in mind, or just want to say hi? I&apos;d love to hear from you.
      </p>
      <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 underline decoration-border underline-offset-4 transition-colors hover:decoration-brand"
            >
              {link.label}
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
