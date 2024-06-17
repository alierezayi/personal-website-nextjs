import { ProjectCategoryType } from "@/lib/types";
import { create } from "zustand";

interface ProjectCategoryState {
  category: ProjectCategoryType;
  setCategory: (category: ProjectCategoryType) => void;
}

export const useProjectCategory = create<ProjectCategoryState>((set) => ({
  category: "all",
  setCategory: (category: ProjectCategoryType) => set({ category }),
}));
