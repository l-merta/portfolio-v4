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
    title: "Lead developer",
    place: "SmartShark Tech",
    period: "2025 – now",
    description:
      "Building the company's platform end to end, from the database and API to the client and admin apps and their Docker-based deployment.",
    url: "https://smartshark.tech",
  },
  {
    title: "Frontend developer, internship",
    place: "ČEZ",
    period: "2025",
  },
];

export const education: ExperienceItem[] = [
  {
    title: "Information technology",
    place: "SOŠ informatiky a spojů a SOU Kolín",
    period: "2022 – now",
    url: "https://soskolin.cz",
  },
];

export const highlights: ExperienceItem[] = [
  {
    title: "2nd place out of 160 teams",
    place: "Tour de App",
    period: "2025",
    description: "National competition in building a web application.",
  },
  {
    title: "Running my own web server",
    place: "Self-hosted",
    period: "2024 – now",
  },
  {
    title: "2D and 3D game development",
    place: "Unity, C#",
    period: "2020 – 2023",
  },
];

// A short reference. Translated from the Czech original on portfolio-v3.
export const testimonial = {
  quote:
    "Lukáš's approach to work is exemplary. He is hardworking, driven and always ready to take the initiative. His technical knowledge, combined with a creative approach, was a great asset to our team.",
  author: "Jan Plachý",
  role: "CEO, SmartShark Tech",
};
