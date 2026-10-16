// Your projects, in the order they appear on the page.
// `featured: true` puts a project in the top list; the rest go under "Další projekty".

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
      "Platforma, která propojuje firmy s prověřenými IT specialisty: zadávání zakázek, klientský a administrátorský portál, chat, notifikace a e-maily.",
    year: "2025 – nyní",
    tech: ["Next.js", "TypeScript", "Express", "Prisma", "MySQL", "Docker"],
    url: "https://smartshark.tech",
    note: "Spoluzakladatel",
    featured: true,
  },
  {
    name: "Filmino",
    description:
      "Webová aplikace, která umožňuje prozkoumávat rozsáhlou databázi filmů, televizních pořadů a herců.",
    year: "2024",
    tech: ["React", "TypeScript"],
    repo: "https://github.com/l-merta/filmino",
    url: "https://filmino.mertalukas.cz/filmy",
    featured: true,
  },
  {
    name: "Soutěž Tour de App",
    description:
      "Online piškvorky pro více hráčů v reálném čase, vytvořené pro soutěž Tour de App, kde náš tým skončil na 2. místě ze 160.",
    year: "2025",
    tech: ["React", "Express", "Socket.io", "Docker"],
    repo: "https://github.com/l-merta/TdA25-Buraci",
    url: "https://tda.mertalukas.cz",
    note: "2. místo ze 160 týmů",
    featured: true,
  },
  {
    name: "Art Explorer",
    description:
      "Projekt v rámci praxe ČEZ. Procházení více než 500 000 uměleckých děl z veřejného API The MET Museum, s vyhledáváním, stránkováním, oblíbenými díly a náhodným výběrem na hlavní stránce.",
    year: "2025",
    tech: ["Next.js", "TanStack Query", "TypeScript"],
    url: "https://museum.mertalukas.cz",
    repo: "https://github.com/l-merta/art-explorer",
  },
  {
    name: "Slepičí Kahoot",
    description: "Kvízová hra ve stylu Kahootu, školní projekt.",
    year: "2024",
    tech: ["TypeScript"],
    repo: "https://github.com/l-merta/tws-chicken-kahoot",
    url: "https://kahoot.mertalukas.cz",
  },
];
