import IMAGES from "../images";

export const SKILLS = {
  languages: [
    {
      name: "HTML",
      image: IMAGES.sections.skills.html,
    },
    {
      name: "CSS",
      image: IMAGES.sections.skills.css,
    },
    {
      name: "JavaScript",
      image: IMAGES.sections.skills.js,
    },
    {
      name: "TypeScript",
      image: IMAGES.sections.skills.ts,
    },
  ],
  tools: [
    {
      name: "Git",
      image: IMAGES.sections.skills.git,
    },
  ],
  frontend: {
    frameworks: [
      {
        name: "React",
        image: IMAGES.sections.skills.react,
      },
      {
        name: "Next.js",
        image: IMAGES.sections.skills.next,
      },
    ],
    uiLibrary: [
      {
        name: "MaterialUI",
        image: IMAGES.sections.skills.materialUi,
      },
      {
        name: "TailwindCSS",
        image: IMAGES.sections.skills.tailwind,
      },
      {
        name: "Shadcn/ui",
        image: IMAGES.sections.skills.shadcnUi,
      },
    ],
    jsLibrary: [
      {
        name: "Swiper",
        image: IMAGES.sections.skills.swiper,
      },
      {
        name: "Chart.js",
        image: IMAGES.sections.skills.chartJs,
      },
      {
        name: "Axios",
        image: IMAGES.sections.skills.axios,
      },
    ],
    animationLibrary: [
      {
        name: "Framer",
        image: IMAGES.sections.skills.framer,
      },
    ],
    stateManagement: [
      {
        name: "Redux(Toolkit)",
        image: IMAGES.sections.skills.redux,
      },
      {
        name: "Zustand",
        image: IMAGES.sections.skills.zustand,
      },
      {
        name: "React Query",
        image: IMAGES.sections.skills.reactQuery,
      },
    ],
    backend: {},
  },
} as const;
