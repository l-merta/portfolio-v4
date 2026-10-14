// Your projects, in the order they appear on the page.
// `featured: true` puts a project in the top list; the rest go under "More projects".

export type Project = {
  name: string;
  description: string;
  year: string;
  tech: string[];
  featured?: boolean;
  // Both links are optional. Leave one out and its button disappears.
  url?: string;
  repo?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    name: "SmartShark Tech",
    description:
      "A platform that connects companies with vetted IT specialists: project ordering, client and admin portals, chat, notifications and transactional email.",
    year: "2025 – now",
    tech: ["Next.js", "TypeScript", "Express", "Prisma", "MySQL", "Docker"],
    url: "https://smartshark.tech",
    note: "Lead developer",
    featured: true,
  },
  {
    name: "Tour de App: Tic-tac-toe",
    description:
      "Real-time multiplayer tic-tac-toe built for the Tour de App competition, where our team placed 2nd out of 160.",
    year: "2025",
    tech: ["React", "Express", "Socket.io", "Docker"],
    repo: "https://github.com/l-merta/TdA25-Buraci",
    note: "2nd of 160 teams",
    featured: true,
  },
  {
    name: "Art Explorer",
    description:
      "Browse over 500,000 artworks from The Met's public API, with debounced search, pagination, favourites and a random featured section.",
    year: "2025",
    tech: ["Next.js", "TanStack Query", "TypeScript"],
    url: "https://museum.mertalukas.cz",
    repo: "https://github.com/l-merta/art-explorer",
    featured: true,
  },
  {
    name: "Filmino",
    description:
      "A web app for exploring a large database of movies, TV shows and actors.",
    year: "2024",
    tech: ["React", "TypeScript"],
    repo: "https://github.com/l-merta/filmino",
    featured: true,
  },
  {
    name: "Web server admin",
    description:
      "An admin panel and API for configuring the websites that run on my home server. It also fed the project data for my previous portfolio.",
    year: "2025",
    tech: ["JavaScript", "Node.js"],
    repo: "https://github.com/l-merta/web-server-admin",
  },
  {
    name: "Chicken Kahoot",
    description: "A Kahoot-style quiz game, built as a school project.",
    year: "2024",
    tech: ["TypeScript"],
    repo: "https://github.com/l-merta/tws-chicken-kahoot",
  },
  {
    name: "Bakaláři pocket money",
    description:
      "Calculates pocket money from your school grades using the Bakaláři API.",
    year: "2024",
    tech: ["JavaScript", "REST API"],
  },
];
