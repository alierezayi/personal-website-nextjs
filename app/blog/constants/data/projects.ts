import { ProjectType } from "@/lib/types";
import { Project } from "@/types/projects";
import { TECHNOLOGIES } from "@/app/blog/constants/images/technologies";

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "trading-crm-manager-prop",
    logo: "/images/logos/b2prop.png",
    title: "Trading Crm Manager Prop",
    coverImage: "/images/projects/crm/cover.png",
    description:
      "UNFX Manager Prop by Unicorn Forex Broker (UNFXB) is a cutting-edge CRM dashboard designed to streamline the management of proprietary trading accounts. Empower your team with intuitive tools for efficient role management, real-time analytics, and seamless account operations.",
    technologies: [
      { name: "TypeScript", logo: TECHNOLOGIES.typescript },
      { name: "React", logo: TECHNOLOGIES.react },
      { name: "Next.js", logo: TECHNOLOGIES.nextjs },
      { name: "Tailwind CSS", logo: TECHNOLOGIES.tailwind },
      { name: "Shadcn/ui", logo: TECHNOLOGIES.shadcnUi },
    ],
    startDate: "01/05/2024",
    endDate: "Present",
    rewards: "EXPO Dubai Festival",
    company: {
      name: "Unicorn Forex Broker (UNFXCO)",
      logo: "/images/logos/unfxco.png",
      websiteLink: "https://unfxco.com",
    },
    websiteLink: "https://manager-prop.unicornbrokers.trade",
    youtubeLink: "https://www.youtube.com/watch?v=uorT145_9GE",
    sourceCode: "Private",
    role: "Front-End Developer",
    contributions:
      "Developed the entire frontend codebase, implementing responsive designs and integrating real-time data fetching.",
    teamMembers: [
      {
        name: "Ali Rezaei",
        role: "Frontend",
        avatar: "/alirezayi.jpg",
      },
      {
        name: "UNFXCO",
        role: "Backend",
        avatar: "/images/logos/unfxco.png",
      },
    ],
    keyFeatures: [
      "Advanced charts and tables for data analysis",
      "Real-time data fetching and updates",
      "Responsive design for seamless mobile and desktop usage",
      "Integration with multiple data sources for comprehensive trading insights",
    ],
    performanceMetrics: {
      userEngagement: "85% user retention rate",
      pageSpeed: "95/100 on Google PageSpeed Insights",
      seoScore: "92/100 average SEO score",
    },
  },
  // {
  //   id: 1,
  //   logo: "/images/logos/b2prop.png",
  //   title: "B2PROP CRM (Trading Dashboard)",
  //   coverImage: "/images/projects/crm/cover.png",
  //   description:
  //     "UNFX Manager Prop by Unicorn Forex Broker (UNFXB) is a cutting-edge CRM dashboard designed to streamline the management of proprietary trading accounts. Empower your team with intuitive tools for efficient role management, real-time analytics, and seamless account operations.",
  //   technologies: [
  //     { name: "TypeScript", logo: TECHNOLOGIES.typescript },
  //     { name: "React", logo: TECHNOLOGIES.react },
  //     { name: "Next.js", logo: TECHNOLOGIES.nextjs },
  //     { name: "Tailwind CSS", logo: TECHNOLOGIES.tailwind },
  //     { name: "Shadcn/ui", logo: TECHNOLOGIES.shadcnUi },
  //   ],
  //   startDate: "01/05/2024",
  //   endDate: "Present",
  //   rewards: "EXPO Dubai Festival",
  //   company: {
  //     name: "Unicorn Forex Broker (UNFXCO)",
  //     logo: "/images/logos/unfxco.png",
  //     websiteLink: "https://unfxco.com",
  //     youtubeLink: "https://www.youtube.com/@UnicornBrokersGlobal",
  //     youtubeBanner: "/images/projects/unfxco-banner.jpg",
  //   },
  //   websiteLink: "https://manager-prop.unicornbrokers.trade",
  //   youtubeLink: "https://www.youtube.com/watch?v=uorT145_9GE",
  //   sourceCode: "Private",
  //   role: "Front-End Developer",
  //   contributions:
  //     "Developed the entire frontend codebase, implementing responsive designs and integrating real-time data fetching.",
  //   teamMembers: [
  //     {
  //       name: "Ali Rezaei",
  //       role: "Frontend",
  //       avatar: "/alirezayi.jpg",
  //     },
  //     {
  //       name: "UNFXCO",
  //       role: "Backend",
  //       avatar: "/images/logos/unfxco.png",
  //     },
  //   ],
  //   keyFeatures: [
  //     "Advanced charts and tables for data analysis",
  //     "Real-time data fetching and updates",
  //     "Responsive design for seamless mobile and desktop usage",
  //     "Integration with multiple data sources for comprehensive trading insights",
  //   ],
  //   performanceMetrics: {
  //     userEngagement: "85% user retention rate",
  //     pageSpeed: "95/100 on Google PageSpeed Insights",
  //     seoScore: "92/100 average SEO score",
  //   },
  // },
];
