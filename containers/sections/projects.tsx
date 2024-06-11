"use client";

import { useSectionInView } from "@/hooks/useSectionInView";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} id="projects" className="min-h-screen">
      projects
    </section>
  );
}
