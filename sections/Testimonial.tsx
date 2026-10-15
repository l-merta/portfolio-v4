import { testimonial } from "@/data/experience";

export default function Testimonial() {
  return (
    <section className="py-16">
      <figure className="border-l-2 border-brand pl-6">
        <blockquote className="space-y-4 leading-relaxed text-pretty">
          {testimonial.quote.map((paragraph, i) => (
            <p key={i} className={i === 0 ? "text-lg" : "text-muted-foreground"}>
              {i === 0 && "„"}
              {paragraph}
              {i === testimonial.quote.length - 1 && "“"}
            </p>
          ))}
        </blockquote>
        <figcaption className="mt-4 font-mono text-xs text-muted-foreground">
          {testimonial.author} · {testimonial.role}
        </figcaption>
      </figure>
    </section>
  );
}
