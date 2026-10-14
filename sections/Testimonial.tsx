import { testimonial } from "@/data/experience";

export default function Testimonial() {
  return (
    <section className="py-16">
      <figure className="border-l-2 border-brand pl-6">
        <blockquote className="text-lg leading-relaxed text-balance">
          “{testimonial.quote}”
        </blockquote>
        <figcaption className="mt-4 font-mono text-xs text-muted-foreground">
          {testimonial.author} · {testimonial.role}
        </figcaption>
      </figure>
    </section>
  );
}
