export interface Project {
  slug: string;
  id: number;
  title: string;
  logo?: string;
  coverImage: string;
  images?: string[];
  description: string;
  technologies: { name: string; logo: string }[];
  startDate: string;
  endDate: string;
  rewards?: string;
  company: {
    name: string;
    logo: string;
    websiteLink?: string;
    youtubeLink?: string;
    youtubeBanner?: string;
  };
  websiteLink: string;
  youtubeLink?: string;
  sourceCode?: string | "Private";
  role: "Front-End Developer" | "Back-End Developer" | "Full-Stack Developer";
  contributions: string;
  teamMembers?: {
    name: string;
    role: string;
    avatar: string;
  }[];
  keyFeatures?: string[];
  performanceMetrics?: {
    userEngagement?: string;
    pageSpeed?: string;
    seoScore?: string;
  };
}

export type Projects = Project[];
