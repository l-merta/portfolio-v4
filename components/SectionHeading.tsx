type SectionHeadingProps = {
  index: string;
  title: string;
};

// The small "01 / Projects" label that opens every section.
export default function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span className="text-brand">{index}</span> / {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
