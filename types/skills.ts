import { Icon } from "iconsax-react";
import { LucideIcon } from "lucide-react";

export interface SubSkill {
  name: string;
  icon: string;
}

export interface Skill {
  name: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  icon: string | { color: string; name: Icon | LucideIcon };
  subSkills?: SubSkill[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export type SkillCategories = {
  [key: string]: SkillCategory;
};
