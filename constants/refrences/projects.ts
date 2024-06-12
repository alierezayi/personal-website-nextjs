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
    description: "",
    features: [
      "responsive",
      "shoping cart",
      "search for products",
      "search optimization",
      "filter by category",
      "global error handling",
      "using query params",
    ],
    deployment: vercelUrl("store-rjs"),
    source: `${BASE_GITHUB_URL}/store-rjs`,
  },
  {
    title: "Divar clone (authorization and authentication) - react.js",
    tags: ["JavaScript", "React", "Tailwind", "React Query", "Axios"],
    images: IMAGES.sections.projects.divar,
    description: "",
    features: [
      "otp authentication",
      "authorization and limit page access",
      "cache fetching data using react query",
      "handle admin role",
      "upload files",
    ],
    deployment: vercelUrl("authentication-authorization-rjs"),
    source: `${BASE_GITHUB_URL}/authentication-authorization-rjs`,
  },
  {
    title: "Weblog - next.js",
    tags: ["TypeScript", "Next.js", "Tailwind", "Prisma", "MongoDB", "Swr"],
    images: IMAGES.sections.projects.weblog,
    description: "",
    features: [
      "responsive",
      "dark mode",
      "realtime update comments of post",
      "authentication using NextAuth",
      "text editor for create post",
    ],
    deployment: vercelUrl("weblog-next.js"),
    source: `${BASE_GITHUB_URL}/weblog-next.js`,
  },
  {
    title: "Music player - next.js",
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
    description: "",
    features: [
      "play - pause - next - previous",
      "like songs",
      "upload songs",
      "search songs",
    ],
    deployment: vercelUrl("music-player-next.js"),
    source: `${BASE_GITHUB_URL}/music-player-next.js`,
  },
] as const;
