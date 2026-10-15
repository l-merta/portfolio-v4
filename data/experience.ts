// Work, education and other milestones. Newest first.

export type ExperienceItem = {
  title: string;
  place: string;
  period: string;
  description?: string;
  url?: string;
};

export const work: ExperienceItem[] = [
  {
    title: "Hlavní programátor",
    place: "SmartShark Tech",
    period: "2025 – nyní",
    description:
      "Vyvíjím firemní platformu od databáze a API přes klientskou a administrátorskou aplikaci až po nasazení v Dockeru.",
    url: "https://smartshark.tech",
  },
  {
    title: "Praxe, frontend programátor",
    place: "ČEZ",
    period: "2025",
  },
];

export const education: ExperienceItem[] = [
  {
    title: "Obor IT",
    place: "SOŠ informatiky a spojů a SOU Kolín",
    period: "2022 – nyní",
    url: "https://soskolin.cz",
  },
];

export const highlights: ExperienceItem[] = [
  {
    title: "2. místo ze 160 týmů",
    place: "Tour de App",
    period: "2025",
    description: "Soutěž ve tvorbě webové aplikace.",
  },
  {
    title: "Správa vlastního webového serveru",
    place: "Vlastní hosting",
    period: "2024 – nyní",
  },
  {
    title: "Vývoj 2D a 3D her",
    place: "Unity, C#",
    period: "2020 – 2023",
  },
];

// The reference from portfolio-v3, word for word. Each string is one paragraph.
export const testimonial = {
  quote: [
    "Lukášův přístup k práci je příkladný — je velmi pracovitý, cílevědomý a vždy ochotný přispět vlastní iniciativou. Oceňujeme zejména jeho schopnost otevřeně komunikovat své názory a přinášet konstruktivní návrhy, které posunuly náš projekt směrem k inovativnějším a efektivnějším řešením.",
    "Během naší spolupráce přinesl do projektu řadu nových nápadů, které se pozitivně promítly do výsledné podoby platformy. Jeho technické znalosti, kombinované s kreativním přístupem, byly pro náš tým velkým přínosem. Zároveň oceňujeme jeho přirozenou chuť učit se nové věci a schopnost rychle se adaptovat na nové technologie a postupy, což výrazně přispělo k celkovému rozvoji projektu.",
    "Jeho pracovní nasazení, spolehlivost a chuť neustále se zlepšovat z něj činí cenného člena jakéhokoliv týmu. Věřím, že i v budoucích projektech bude přinášet stejně vysokou úroveň profesionality a přidané hodnoty.",
  ],
  author: "Jan Plachý",
  role: "CEO SmartShark Tech",
};
