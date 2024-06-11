"use client";

import { useSectionInView } from "@/hooks/useSectionInView";

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  
  return (
    <section ref={ref} id="skills" className="min-h-screen">
      skills
    </section>
  );
}
