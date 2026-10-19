// Everything about "you" lives here. Change a value, save, and the site updates.

export const profile = {
  name: "Lukáš Merta",
  role: "Fullstack webový vývojář",
  location: "Kolín",
  openToWork: false, // False - hidden
  openToWorkLabel: "přijímám nové projekty",
  avatar: "https://avatars.githubusercontent.com/u/164738919?v=4",
  intro:
    "Zaměřuji se na tvorbu moderních webových aplikací, které jsou funkční a přehledné. Dělám frontend i backend, nejčastěji v TypeScriptu s Reactem, Next.js a Node.",
  about: [
    "Programování se věnuji od roku 2020 a webovému vývoji od roku 2023. Ať jde o frontend, nebo backend, baví mě dotáhnout nápad až do podoby, kterou lidé opravdu používají.",
    "Své weby hostuji na vlastním domácím serveru s automatizovaným nasazením přes GitHub. Server spravuji sám, běží na něm databáze, subdomény a kontejnerizované aplikace, dostupné přes Cloudflare Tunnel. Baví mě i sítě, 3D modelování nebo grafický design.",
  ],
  // Used for the contributions chart under the intro.
  githubUsername: "l-merta",
  links: {
    github: "https://github.com/l-merta",
    linkedin: "https://www.linkedin.com/in/luk%C3%A1%C5%A1-merta-7ab66a343/",
    email: "lukas.merta26@gmail.com",
    cv: "/cv_Lukas_Merta.pdf",
  },
} as const;
