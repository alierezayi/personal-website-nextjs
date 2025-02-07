"use client";

import {
  Section,
  SectionContent,
  SectionHeading,
  SectionSubTitle,
} from "@/app/blog/components/layouts/section";
import { ProjectItem } from "@/app/blog/components/sections/projects/project-item";
import { PROJECTS } from "@/constants/refrences/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Section name="Projects">
      <SectionHeading>Top Projects</SectionHeading>
      <SectionSubTitle>Most recent work</SectionSubTitle>
      <SectionContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 grid grid-cols-1 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectItem project={project} />
            </motion.div>
          ))}
        </motion.div>
      </SectionContent>
    </Section>
  );
}
