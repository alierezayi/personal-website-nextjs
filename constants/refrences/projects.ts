import IMAGES from "../images";

const BASE_GITHUB_URL = "https://github.com/alierezayi";
const vercelUrl = (name: string) => `https://${name}-alirezayi.vercel.app`;

export const PROJECTS = [
  {
    title: "Store (Shopping cart) - react.js",
    tags: [
      "TypeScript",
      "React",
      "Tailwind",
      "Shadcn/ui",
      "Redux",
      "Axios",
      "Context",
    ],
    images: IMAGES.sections.projects.store,
    deployment: vercelUrl("store-rjs"),
    source: `${BASE_GITHUB_URL}/store-rjs`,
  },
  {
    title: "Divar clone (authorization and authentication) - react.js",
    tags: [
      "JavaScript",
      "React",
      "Tailwind",
      "React Query",
      "Axios"
    ],
    images: IMAGES.sections.projects.divar,
    deployment: vercelUrl("authentication-authorization-rjs"),
    source: `${BASE_GITHUB_URL}/authentication-authorization-rjs`,
  },
  {
    title: "Weblog - next.js",
    tags: [
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Prisma",
      "MongoDB",
      "Swr",
    ],
    images: IMAGES.sections.projects.weblog,
    deployment: vercelUrl("weblog-next.js"),
    source: `${BASE_GITHUB_URL}/weblog-next.js`,
  },
  {
    title: "Weblog",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Prisma",
      "MongoDB",
      "swr",
    ],
    images: IMAGES.sections.projects.musicPlayer,
    deployment: vercelUrl("music-player-next.js"),
    source: `${BASE_GITHUB_URL}/music-player-next.js`,
  },
] as const;
