import { Icon } from "iconsax-react";
import { LucideIcon } from "lucide-react";

export type IconType = Icon | LucideIcon | string;

export interface TimelineEntry {
  icon?: IconType;
  title: string;
  location?: string;
  date: string | { from: string; to: string | "Present" };
  content: React.ReactNode;
}
