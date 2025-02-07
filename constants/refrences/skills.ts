import { SkillCategories } from "@/types/skills";
import {
  Brush,
  CloudConnection,
  Diagram,
  Element3,
  Global,
  Hierarchy,
  Play,
  TableDocument,
} from "iconsax-react";
import { TECHNOLOGIES } from "@/constants/images/technologies";

export const SKILLS: SkillCategories = {
  core: {
    title: "Core Technologies",
    description: "Fundamental web development technologies",
    skills: [
      {
        name: "HTML",
        description: "Semantic HTML5, Accessibility, SEO best practices",
        level: "Advanced",
        icon: TECHNOLOGIES.html,
      },
      {
        name: "CSS",
        description: "CSS3, Flexbox, Grid, Animations, Responsive Design",
        level: "Advanced",
        icon: TECHNOLOGIES.css,
      },
      {
        name: "JavaScript",
        description: "ES6+, Async/Await, DOM Manipulation, Web APIs",
        level: "Advanced",
        icon: TECHNOLOGIES.javascript,
      },
      {
        name: "TypeScript",
        description: "Type safety, Interfaces, Generics, and Advanced Types",
        level: "Advanced",
        icon: TECHNOLOGIES.typescript,
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
        icon: TECHNOLOGIES.react,
      },
      {
        name: "Next.js",
        description:
          "App Router, Server Components, Server Actions, SSR, SSG, ISR, API Routes",
        level: "Advanced",
        icon: TECHNOLOGIES.nextjs,
      },
      {
        name: "Data Fetching",
        description:
          "Libraries and tools for efficient data fetching in React applications",
        level: "Advanced",
        icon: CloudConnection,
        subSkills: [
          {
            name: "React Query",
            icon: TECHNOLOGIES.reactQuery,
          },
          {
            name: "SWR",
            icon: TECHNOLOGIES.swr,
          },
          {
            name: "Axios",
            icon: TECHNOLOGIES.axios,
          },
        ],
      },
      {
        name: "State Management",
        description:
          "Advanced state management solutions for React applications",
        level: "Advanced",
        icon: Hierarchy,
        subSkills: [
          {
            name: "Redux Toolkit",
            icon: TECHNOLOGIES.redux,
          },
          {
            name: "Zustand",
            icon: TECHNOLOGIES.zustand,
          },
          {
            name: "Context API",
            icon: TECHNOLOGIES.contextApi,
          },
        ],
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
        icon: Brush,
        subSkills: [
          {
            name: "Tailwind CSS",
            icon: TECHNOLOGIES.tailwind,
          },
          {
            name: "CSS Modules",
            icon: TECHNOLOGIES.css,
          },
          {
            name: "Styled Components",
            icon: TECHNOLOGIES.styledComponents,
          },
          {
            name: "SASS",
            icon: TECHNOLOGIES.sass,
          },
        ],
      },
      {
        name: "UI Libraries",
        description:
          "Component libraries and design systems for rapid UI development",
        level: "Advanced",
        icon: Element3,
        subSkills: [
          {
            name: "shadcn/ui",
            icon: TECHNOLOGIES.shadcnUi,
          },
          {
            name: "Material UI",
            icon: TECHNOLOGIES.mui,
          },
          {
            name: "Radix UI",
            icon: TECHNOLOGIES.radixUi,
          },
          {
            name: "Chakra UI",
            icon: TECHNOLOGIES.chakraUi,
          },
        ],
      },
      {
        name: "Animation",
        description:
          "Libraries and techniques for creating engaging animations",
        level: "Intermediate",
        icon: Play,
        subSkills: [
          {
            name: "Framer Motion",
            icon: TECHNOLOGIES.framer,
          },
        ],
      },
    ],
  },
  backend: {
    title: "APIs",
    description: "Server-side technologies and API integration",
    skills: [
      {
        name: "GraphQL",
        description: "Schema definition, Queries, Mutations, Subscriptions",
        level: "Beginner",
        icon: TECHNOLOGIES.graphQl,
      },
      {
        name: "REST API",
        description:
          "RESTful principles, API design, Integration with frontend",
        level: "Advanced",
        icon: TECHNOLOGIES.restApi,
      },
      {
        name: "WebSocket",
        description: "Real-time bidirectional communication, Socket.io",
        level: "Intermediate",
        icon: TECHNOLOGIES.websocket,
      },
    ],
  },
  visualization: {
    title: "Data Visualization & Tables",
    description: "Data Tables, Charts, maps and graphics libraries",
    skills: [
      {
        name: "Chart Libraries",
        description: "Libraries for creating interactive and responsive charts",
        level: "Advanced",
        icon: Diagram,
        subSkills: [
          {
            name: "Recharts",
            icon: TECHNOLOGIES.recharts,
          },
          {
            name: "Chart.js",
            icon: TECHNOLOGIES.chartJs,
          },
          {
            name: "TradingView Charts",
            icon: TECHNOLOGIES.lightweight,
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
        icon: Global,
        subSkills: [
          {
            name: "React Simple Maps",
            icon: TECHNOLOGIES.reactSimpleMaps,
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
      {
        name: "Data Tables",
        description:
          "Libraries for creating powerful and flexible data tables with filtering and sorting",
        level: "Advanced",
        icon: TableDocument,
        subSkills: [
          {
            name: "TanStack Table",
            icon: TECHNOLOGIES.tanstackTable,
          },
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

  versionControl: {
    title: "Version Control",
    description:
      "Tools and platforms for managing code versions and collaboration",
    skills: [
      {
        name: "Git",
        description:
          "Distributed version control system for tracking changes in source code",
        level: "Advanced",
        icon: TECHNOLOGIES.git,
      },
      {
        name: "GitHub",
        description: "Web-based hosting service for version control using Git",
        level: "Advanced",
        icon: TECHNOLOGIES.github,
      },
      {
        name: "GitLab",
        description:
          "Web-based DevOps lifecycle tool that provides a Git-repository manager",
        level: "Intermediate",
        icon: TECHNOLOGIES.gitlab,
      },
    ],
  },
};
