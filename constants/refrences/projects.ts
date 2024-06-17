import { ProjectCategoryType, ProjectType } from "@/lib/types";
import { GrReactjs } from "react-icons/gr";
import IMAGES from "../images";
import { TbBrandNextjs } from "react-icons/tb";
import { RiNextjsLine, RiReactjsLine } from "react-icons/ri";
import { LiaReact } from "react-icons/lia";

const BASE_GITHUB_URL = "https://github.com/alierezayi";

const vercelUrl = (name: string) => `https://${name}-alirezayi.vercel.app`;

export const PROJECTS: ProjectType[] = [
  {
    title: "Shopping cart",
    tag: "react",
    icon: RiReactjsLine,
    tecnologies: [
      "TypeScript",
      "React",
      "Tailwind",
      "Shadcn/ui",
      "Redux",
      "Axios",
      "Context Api",
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
    title: "Weblog",
    tag: "next",
    icon: RiNextjsLine,
    tecnologies: [
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Prisma",
      "MongoDB",
      "Swr",
    ],
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
    title: "Divar clone",
    tag: "react",
    icon: RiReactjsLine,
    tecnologies: ["JavaScript", "React", "Tailwind", "React Query", "Axios"],
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
    title: "Weblog",
    tag: "next",
    icon: RiNextjsLine,
    tecnologies: [
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Prisma",
      "MongoDB",
      "Swr",
    ],
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
    title: "Divar clone",
    tag: "react",
    icon: RiReactjsLine,
    tecnologies: ["JavaScript", "React", "Tailwind", "React Query", "Axios"],
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
    title: "Music player",
    tag: "next",
    icon: RiNextjsLine,

    tecnologies: [
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
];

export const CATEGORIES: Array<ProjectCategoryType> = ["all", "react", "next"];
