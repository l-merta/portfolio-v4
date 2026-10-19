// Everything about "you" lives here. Change a value, save, and the site updates.

export const profile = {
  name: "Lukáš Merta",
  role: "Fullstack webový vývojář",
  location: "Kolín",
  openToWork: false, // False - hidden
  openToWorkLabel: "přijímám nové projekty",
  avatar: "https://avatars.githubusercontent.com/u/164738919?v=4",
  intro:
    "Vyvíjím webové aplikace a starám se o jejich infrastrukturu – od frontendové a backendové části přes Linuxové servery až po automatizované nasazování a provoz.",
  about: [
    "Věnuji se vývoji webových aplikací, správě Linuxových serverů a počítačovým sítím. Baví mě nejen samotný vývoj, ale i vše kolem něj – od konfigurace serverů a databází přes automatizované nasazování aplikací až po jejich provoz a zabezpečení.",
    "Nejčastěji pracuji s TypeScriptem, Reactem, Next.js a Node.js. Zkušenosti rozvíjím ve studiu na UHK, v práci i na vlastních projektech.",
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
