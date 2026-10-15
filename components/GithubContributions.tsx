"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { GitHubCalendar } from "react-github-calendar";

// Green scale for both colour schemes.
// On v3 only `light` was set, so browsers in dark mode fell back to the
// library's default theme, which is grey. Setting both keeps it green everywhere.
const theme = {
  light: ["#ebebeb", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#1f1f1f", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

const labels = {
  months: [
    "led",
    "úno",
    "bře",
    "dub",
    "kvě",
    "čvn",
    "čvc",
    "srp",
    "zář",
    "říj",
    "lis",
    "pro",
  ],
  weekdays: ["ne", "po", "út", "st", "čt", "pá", "so"],
  totalCount: "{{count}} příspěvků za poslední rok",
  legend: { less: "Méně", more: "Více" },
};

export default function GithubContributions({
  username,
}: {
  username: string;
}) {
  const { resolvedTheme } = useTheme();
  // false while rendering on the server, true in the browser
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  // On narrow screens the chart scrolls sideways. Jump to the right end
  // so the most recent months are what people see first.
  const wrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const scrollToEnd = () => {
      el.querySelectorAll<HTMLElement>("*").forEach((node) => {
        if (node.scrollWidth > node.clientWidth)
          node.scrollLeft = node.scrollWidth;
      });
    };
    // The data arrives a moment later, so watch for the chart to appear.
    const observer = new MutationObserver(scrollToEnd);
    observer.observe(el, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [mounted]);

  // The chart works with today's date, so it's drawn in the browser only.
  // Until then, an empty box of the same height keeps the page from jumping.
  if (!mounted) return <div className="h-[129px]" aria-hidden />;

  return (
    <div ref={wrapper}>
      <GitHubCalendar
        username={username}
        theme={theme}
        // Follow the site's light/dark toggle instead of the system setting.
        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
        labels={labels}
        blockSize={9}
        blockMargin={3}
        fontSize={12}
        errorMessage="Příspěvky z GitHubu se teď nepodařilo načíst."
        className="text-muted-foreground"
      />
    </div>
  );
}
