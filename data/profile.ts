// Everything about "you" lives here. Change a value, save, and the site updates.

export const profile = {
  name: "Lukáš Merta",
  role: "Fullstack web developer",
  location: "Kolín, Czech Republic",
  // Shown as a small green dot next to your role. Set to false to hide it.
  openToWork: true,
  avatar: "https://avatars.githubusercontent.com/u/164738919?v=4",
  intro:
    "I build modern web apps that are fast, clear and pleasant to use. I work across the whole stack, mostly in TypeScript with React, Next.js and Node.",
  about: [
    "I've been programming since 2020 and building for the web since 2023. Frontend or backend, I enjoy taking an idea all the way to something people can actually use.",
    "I host my own projects on a home server that I run myself: databases, subdomains and containerised apps, deployed automatically from GitHub and exposed through Cloudflare Tunnel. Outside the browser I like networking, 3D modelling and graphic design.",
  ],
  links: {
    github: "https://github.com/l-merta",
    cv: "/cv_Lukas_Merta.pdf",
  },
} as const;
