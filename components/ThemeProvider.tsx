"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// Wraps the app so every component can read and change the light/dark theme.
export default function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
