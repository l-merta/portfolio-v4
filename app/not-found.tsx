import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-start justify-center gap-6 px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span className="text-brand">404</span> / Nenalezeno
      </p>
      <h1 className="text-3xl font-semibold tracking-tight">Tato stránka neexistuje.</h1>
      <Button asChild variant="outline">
        <Link href="/">Zpět na úvod</Link>
      </Button>
    </main>
  );
}
