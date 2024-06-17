import { ProjectCategoryType } from "@/lib/types";
import { create } from "zustand";

interface ProjectCategoryState {
  category: ProjectCategoryType;
  update: (category: ProjectCategoryType) => void;
}

export const useProjectCategory = create<ProjectCategoryState>((set) => ({
  category: "all",
  update: (category: ProjectCategoryType) => set({ category }),
}));
