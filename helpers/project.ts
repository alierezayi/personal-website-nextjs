import { ProjectCategoryType, ProjectType } from "@/lib/types";

const filterProjects = (
  projects: ProjectType[],
  category: ProjectCategoryType
) => {
  if (category === "all") return projects;
  const filteredPrjects = projects.filter(
    (project) => project.tag === category
  );
  return filteredPrjects;
};

export { filterProjects };
