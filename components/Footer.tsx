import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-3xl px-6 pb-10">
      <div className="flex flex-col gap-2 border-t pt-6 font-mono text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <span>{profile.name}</span>
        <span>Built with Next.js & shadcn/ui</span>
      </div>
    </footer>
  );
}
