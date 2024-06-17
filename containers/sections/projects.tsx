"use client";

import {
  Section,
  SectionContent,
  SectionHeading,
  SectionSubTitle,
} from "@/components/sections";
import Categories from "@/components/sections/projects/categories";
import { BgGridSmall } from "@/components/ui/backgrounds";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { PROJECTS } from "@/constants/refrences/projects";
import { filterProjects } from "@/helpers/project";
import { useProjectCategory } from "@/hooks/useProjectCategory";
import { ProjectType } from "@/lib/types";
import { useEffect, useState } from "react";

export default function Projects() {
  const { category } = useProjectCategory();
  const [displayed, setDisplayed] = useState<ProjectType[]>(PROJECTS);

  useEffect(() => {
    const newItems = filterProjects(PROJECTS, category);
    setDisplayed(newItems);
  }, [category]);

  return (
    <Section name="Projects">
      <SectionHeading>Top Projects</SectionHeading>
      <SectionSubTitle>Most recent work</SectionSubTitle>
      <SectionContent>
        <Categories />
        <BentoGrid className="relative">
          <BgGridSmall />
          {displayed.map((item, i) => (
            <BentoGridItem key={i} {...item} />
          ))}
        </BentoGrid>
      </SectionContent>
    </Section>
  );
}
