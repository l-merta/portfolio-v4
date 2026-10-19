import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-3xl px-6 pb-10">
      <div className="border-t pt-6 font-mono text-xs text-muted-foreground">
        {profile.name}
      </div>
    </footer>
  );
}
