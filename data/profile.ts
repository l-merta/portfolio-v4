// Everything about "you" lives here. Change a value, save, and the site updates.

export const profile = {
  name: "Lukáš Merta",
  role: "Fullstack webový vývojář",
  location: "Kolín",
  // Shown as a small green dot next to your role. Set to false to hide it.
  openToWork: true,
  openToWorkLabel: "přijímám nové projekty",
  avatar: "https://avatars.githubusercontent.com/u/164738919?v=4",
  intro:
    "Zaměřuji se na tvorbu moderních webových aplikací, které jsou funkční a přehledné. Dělám frontend i backend, nejčastěji v TypeScriptu s Reactem, Next.js a Node.",
  about: [
    "Programování se věnuji od roku 2020 a webovému vývoji od roku 2023. Ať jde o frontend, nebo backend, baví mě dotáhnout nápad až do podoby, kterou lidé opravdu používají.",
    "Své weby hostuji na vlastním domácím serveru s automatizovaným nasazením přes GitHub. Server spravuji sám, běží na něm databáze, subdomény a kontejnerizované aplikace, dostupné přes Cloudflare Tunnel. Baví mě i sítě, 3D modelování nebo grafický design.",
  ],
  links: {
    github: "https://github.com/l-merta",
    cv: "/cv_Lukas_Merta.pdf",
  },
} as const;
