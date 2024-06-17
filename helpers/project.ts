import { PROJECTS } from "@/constants/refrences/projects";

const filterProjects = (projects: typeof PROJECTS, category: string) => {
  if (category === "all") return projects;
  const filteredPrjects = projects.filter(
    (project) => project.tag === category
  );
  return filteredPrjects;
};

export { filterProjects };
