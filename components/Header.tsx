import Link from "next/link";

import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

const nav = [
  { href: "#projects", label: "Projekty" },
  { href: "#skills", label: "Dovednosti" },
  { href: "#experience", label: "Zkušenosti" },
  { href: "#contact", label: "Kontakt" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-6">
        <Link href="/" className="font-mono text-sm font-medium tracking-tight">
          {profile.name.toLowerCase().replace(" ", ".")}
        </Link>
        <nav className="flex items-center gap-1">
          <ul className="hidden items-center gap-5 pr-3 text-sm text-muted-foreground sm:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
