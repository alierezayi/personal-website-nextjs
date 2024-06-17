import { LINKS } from "@/constants/refrences/links";
import { IconType } from "react-icons/lib";

export type SectionName = (typeof LINKS)[number]["name"];

export type ProjectCategoryType = "all" | "react" | "next";

export type ProjectType = {
  title: string;
  tag: string;
  icon: IconType;
  tecnologies: string[];
  images: any[];
  description: string;
  features: string[];
  deployment: string;
  source: string;
};
