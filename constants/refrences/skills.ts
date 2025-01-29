import { SkillCategories } from "@/types/skills";
import {
  BarChart2,
  Box,
  Database,
  Globe,
  Library,
  Move,
  Palette,
} from "lucide-react";

export const SKILLS: SkillCategories = {
  core: {
    title: "Core Technologies",
    description: "Fundamental web development technologies",
    skills: [
      {
        name: "HTML & CSS",
        description:
          "Semantic HTML5, CSS3 with modern features including Grid, Flexbox, and Animations",
        level: "Advanced",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "JavaScript",
        description: "ES6+, Async/Await, DOM Manipulation, Web APIs",
        level: "Advanced",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        description: "Type safety, Interfaces, Generics, and Advanced Types",
        level: "Advanced",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    ],
  },
  react: {
    title: "React Ecosystem",
    description: "Modern React.js development skills",
    skills: [
      {
        name: "React.js",
        description:
          "Hooks, Custom Hooks, Performance Optimization, React 18 features",
        level: "Advanced",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "State Management",
        description:
          "Advanced state management solutions for React applications",
        level: "Advanced",
        icon: Database,
        subSkills: [
          {
            name: "Redux Toolkit",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
          },
          {
            name: "Zustand",
            icon: "https://docs.pmnd.rs/zustand/og-image.png",
          },
          {
            name: "React Query",
            icon: "https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg",
          },
          {
            name: "SWR",
            icon: "https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg",
          },
          {
            name: "Context API",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          },
        ],
      },
      {
        name: "Next.js",
        description:
          "App Router, Server Components, Server Actions, SSR, SSG, ISR, API Routes",
        level: "Advanced",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
    ],
  },
  styling: {
    title: "Styling & UI",
    description: "Modern styling approaches and UI libraries",
    skills: [
      {
        name: "Styling Methods",
        description: "Various approaches to styling React applications",
        level: "Advanced",
        icon: Palette,
        subSkills: [
          {
            name: "Tailwind CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
          },
          {
            name: "CSS Modules",
            icon: "https://raw.githubusercontent.com/css-modules/logos/master/css-modules-logo.png",
          },
          {
            name: "Styled Components",
            icon: "https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png",
          },
          {
            name: "CSS-in-JS",
            icon: "https://miro.medium.com/v2/resize:fit:318/1*7jRD5QhgARucFKvRHFxpOg.png",
          },
        ],
      },
      {
        name: "UI Libraries",
        description:
          "Component libraries and design systems for rapid UI development",
        level: "Advanced",
        icon: Library,
        subSkills: [
          {
            name: "shadcn/ui",
            icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
          },
          {
            name: "Material UI",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
          },
          {
            name: "Radix UI",
            icon: "https://avatars.githubusercontent.com/u/75042455?s=200&v=4",
          },
          {
            name: "Headless UI",
            icon: "https://repository-images.githubusercontent.com/316012819/b7b19180-3f85-11eb-884c-1e19fd67a327",
          },
          {
            name: "DaisyUI",
            icon: "https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo-4.svg",
          },
        ],
      },
      {
        name: "Animation",
        description:
          "Libraries and techniques for creating engaging animations",
        level: "Intermediate",
        icon: Move,
        subSkills: [
          {
            name: "Framer Motion",
            icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
          },
          {
            name: "GSAP",
            icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
          },
          {
            name: "Lottie",
            icon: "https://avatars.githubusercontent.com/u/70762365?s=200&v=4",
          },
        ],
      },
    ],
  },
  visualization: {
    title: "Data Visualization",
    description: "Charts, maps and graphics libraries",
    skills: [
      {
        name: "Chart Libraries",
        description: "Libraries for creating interactive and responsive charts",
        level: "Advanced",
        icon: BarChart2,
        subSkills: [
          {
            name: "Recharts",
            icon: "https://avatars.githubusercontent.com/u/20496644?s=200&v=4",
          },
          {
            name: "Chart.js",
            icon: "https://www.chartjs.org/img/chartjs-logo.svg",
          },
          {
            name: "TradingView Charts",
            icon: "https://static.tradingview.com/static/images/logo-preview.png",
          },
          // {
          //   name: "D3.js",
          //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg",
          // },
          // {
          //   name: "Apache ECharts",
          //   icon: "https://echarts.apache.org/en/images/logo.png",
          // },
        ],
      },
      {
        name: "Map Libraries",
        description:
          "Libraries for creating interactive maps and geospatial visualizations",
        level: "Intermediate",
        icon: Globe,
        subSkills: [
          {
            name: "React Simple Maps",
            icon: "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/logo.png",
          },
          // {
          //   name: "Leaflet",
          //   icon: "https://leafletjs.com/docs/images/logo.png",
          // },
          // {
          //   name: "Mapbox GL",
          //   icon: "https://static-assets.mapbox.com/branding/favicon/v1/favicon-32x32.png",
          // },
          // {
          //   name: "OpenLayers",
          //   icon: "https://openlayers.org/theme/img/logo-dark.svg",
          // },
        ],
      },
      // {
      //   name: "3D Visualization",
      //   description:
      //     "Libraries and technologies for 3D graphics and visualizations",
      //   level: "Intermediate",
      //   icon: Box,
      //   subSkills: [
      //     {
      //       name: "Three.js",
      //       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
      //     },
      //     {
      //       name: "React Three Fiber",
      //       icon: "https://docs.pmnd.rs/react-three-fiber/og-image.jpg",
      //     },
      //     {
      //       name: "WebGL",
      //       icon: "https://upload.wikimedia.org/wikipedia/commons/2/25/WebGL_Logo.svg",
      //     },
      //   ],
      // },
    ],
  },
};
